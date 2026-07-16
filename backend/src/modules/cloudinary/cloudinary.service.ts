import { CloudinaryResourceType } from '@/common/enums';
import { Injectable } from '@nestjs/common';
import { MediaFolder } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {

    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }

    async uploadFile(
        file: Express.Multer.File,
        folder: MediaFolder = MediaFolder.PROJECT,
        resourceType: CloudinaryResourceType = CloudinaryResourceType.AUTO
    ) {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: this.getFolder(folder),
                    resource_type: resourceType,
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            )
                .end(file.buffer);
        });
    }

    async deleteFile(
        publicId: string
    ) {
        return cloudinary.uploader.destroy(publicId);
    }

    getPreviewUrl(
        publicId: string,
        resourceType: CloudinaryResourceType = CloudinaryResourceType.IMAGE,
    ) {
        return cloudinary.url(publicId, {
            resource_type: resourceType,
            secure: true,
        });
    }

    getDownloadUrl(
        publicId: string,
        resourceType: CloudinaryResourceType,
    ) {
        return cloudinary.url(publicId, {
            resource_type: resourceType,
            type: "upload",
            secure: true,
            flags: "attachment",
            ...(resourceType === CloudinaryResourceType.RAW && {
                format: "pdf",
            }),
        });
    }

    private getFolder(folder: MediaFolder): string {
        switch (folder) {
            case MediaFolder.PROJECT:
                return "projects";
            case MediaFolder.CERTIFICATE:
                return "certificates";
            case MediaFolder.LOGO:
                return "logos";
            case MediaFolder.PROFILE:
                return "profile";
            case MediaFolder.RESUME:
                return "resume";
            default:
                return "others";
        }
    }
}