import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Media, MediaFolder, MediaType, Prisma } from '@prisma/client';
import { CloudinaryResourceType } from '@/common/enums';
import { SearchMediaDto } from './dto/search-media.dto';

@Injectable()
export class MediaService {
    constructor(
        private prisma: PrismaService,
        private cloudinary: CloudinaryService
    ) { }

    async upload(
        file: Express.Multer.File,
        folder: MediaFolder = MediaFolder.PROJECT,
        resourceType: CloudinaryResourceType = CloudinaryResourceType.IMAGE
    ) {

        const result: any = await this.cloudinary.uploadFile(file, folder, resourceType);

        const type = file.mimetype.startsWith("image/")
            ? MediaType.IMAGE
            : file.mimetype === "application/pdf"
                ? MediaType.PDF
                : MediaType.DOCUMENT;

        return this.prisma.media.create({
            data: {
                url: result.secure_url,
                publicId: result.public_id,
                fileName: file.originalname,
                folder: folder,
                mimeType: file.mimetype,
                size: file.size,
                type
            }
        });
    }

    async delete(id: string) {
        const media = await this.findById(id);
        await this.cloudinary.deleteFile(media.publicId);
        await this.prisma.media.delete({
            where: { id },
        });
        return { message: "Media deleted successfully.", };
    }

    async findAll(searchDto: SearchMediaDto) {
        const { page, size, keyword, type, sortBy, sortOrder } = searchDto;

        const where: Prisma.MediaWhereInput = {
            ...(keyword && {
                fileName: {
                    contains: keyword,
                    mode: "insensitive",
                },
            }),
            ...(type && { type }),
        };

        const [items, total] = await this.prisma.$transaction([
            this.prisma.media.findMany({
                where,
                orderBy: {
                    [sortBy]: sortOrder,
                },
                skip: (page - 1) * size,
                take: size,
            }),
            this.prisma.media.count({ where }),
        ]);

        return {
            pagination: { total, page, size },
            items,
        };
    }

    async findById(id: string) {
        const media = await this.prisma.media.findUnique({ where: { id }, });
        if (!media) { throw new NotFoundException("Media not found."); }
        return media;
    }

    async preview(id: string) {
        const media = await this.findById(id);

        return {
            url: this.cloudinary.getPreviewUrl(
                media.publicId,
                this.getResourceType(media),
            ),
        };
    }

    async download(id: string) {
        const media = await this.findById(id);

        return {
            url: media.url.replace(
                "/upload/",
                "/upload/fl_attachment/"
            ),
        };
    }

    private getResourceType(
        media: Media,
    ): CloudinaryResourceType {
        switch (media.type) {
            case MediaType.IMAGE: return CloudinaryResourceType.IMAGE;
            case MediaType.PDF: return CloudinaryResourceType.RAW;
            case MediaType.DOCUMENT: return CloudinaryResourceType.RAW;
            default: return CloudinaryResourceType.RAW;
        }
    }
}