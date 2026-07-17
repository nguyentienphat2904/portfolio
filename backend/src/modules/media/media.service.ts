import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from '@/prisma/prisma.service';
import { MediaFolder, MediaType, Prisma } from '@prisma/client';
import { SearchMediaDto } from './dto/search-media.dto';

@Injectable()
export class MediaService {
    constructor(
        private prisma: PrismaService,
        private cloudinary: CloudinaryService,
    ) { }


    async upload(
        file: Express.Multer.File,
        folder: MediaFolder = MediaFolder.PROJECT,
    ) {
        const result = await this.cloudinary.uploadFile(
            file,
            folder,
        );

        const type =
            file.mimetype.startsWith('image/')
                ? MediaType.IMAGE
                : MediaType.PDF;


        return this.prisma.media.create({
            data: {
                url: result.secure_url,
                publicId: result.public_id,
                fileName: file.originalname,
                folder,
                mimeType: file.mimetype,
                size: file.size,
                type,
            },
        });
    }


    async delete(id: string) {
        const media = await this.findById(id);

        await this.cloudinary.deleteFile(
            media.publicId
        );

        await this.prisma.media.delete({
            where: { id },
        });

        return {
            message: 'Media deleted successfully.',
        };
    }


    async findAll(searchDto: SearchMediaDto) {
        const {
            page,
            size,
            keyword,
            type,
            sortBy,
            sortOrder,
        } = searchDto;


        const where: Prisma.MediaWhereInput = {
            ...(keyword && {
                fileName: {
                    contains: keyword,
                    mode: 'insensitive',
                },
            }),
            ...(type && { type }),
        };


        const [items, total] =
            await this.prisma.$transaction([
                this.prisma.media.findMany({
                    where,
                    orderBy: {
                        [sortBy]: sortOrder,
                    },
                    skip: (page - 1) * size,
                    take: size,
                }),

                this.prisma.media.count({
                    where,
                }),
            ]);


        return {
            pagination: {
                total,
                page,
                size,
            },
            items,
        };
    }


    async findById(id: string) {
        const media = await this.prisma.media.findUnique({
            where: { id },
        });

        if (!media) {
            throw new NotFoundException(
                'Media not found.',
            );
        }

        return media;
    }


    async preview(id: string) {
        const media = await this.findById(id);

        return {
            url: media.url,
        };
    }

    async download(id: string) {
        const media = await this.findById(id);

        return {
            url: media.url.replace(
                "/upload/",
                "/upload/fl_attachment/",
            ),
        };
    }
}