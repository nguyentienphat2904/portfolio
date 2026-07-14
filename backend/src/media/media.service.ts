import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from '@/prisma/prisma.service';
import { MediaType } from '@prisma/client';

@Injectable()
export class MediaService {
    constructor(
        private prisma: PrismaService,
        private cloudinary: CloudinaryService
    ) { }

    async upload(
        file: Express.Multer.File
    ) {

        const result: any = await this.cloudinary.uploadFile(file);

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
                mimeType: file.mimetype,
                size: file.size,
                type
            }
        });
    }
}