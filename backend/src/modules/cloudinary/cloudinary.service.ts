import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiResponse } from 'cloudinary';
import { MediaFolder } from '@prisma/client';

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
        folder: MediaFolder,
    ): Promise<UploadApiResponse> {

        return new Promise((resolve, reject) => {

            const fileName = file.originalname
                .replace(/\.[^/.]+$/, '')
                .replace(/[^a-zA-Z0-9-_]/g, '_');

            cloudinary.uploader.upload_stream(
                {
                    folder: this.getFolder(folder),
                    resource_type: "image",
                    public_id: fileName,
                    use_filename: true,
                    unique_filename: false,
                    filename_override: file.originalname,
                },
                (error, result) => {

                    if (error) {
                        reject(error);
                        return;
                    }

                    if (!result) {
                        reject(new Error("Upload failed"));
                        return;
                    }

                    resolve(result);
                },

            ).end(file.buffer);

        });
    }


    async deleteFile(publicId: string) {
        return cloudinary.uploader.destroy(publicId, {
            resource_type: "image",
        });
    }


    getPreviewUrl(publicId: string) {
        return cloudinary.url(publicId, {
            resource_type: "image",
            type: "upload",
            secure: true,
        });
    }


    getDownloadUrl(publicId: string) {
        return cloudinary.url(publicId, {
            resource_type: "image",
            type: "upload",
            secure: true,
            flags: "attachment",
        });
    }


    private getFolder(folder: MediaFolder) {

        switch (folder) {
            case MediaFolder.PROJECT:
                return "projects";

            case MediaFolder.CERTIFICATE:
                return "certificates";

            case MediaFolder.RESUME:
                return "resume";

            case MediaFolder.PROFILE:
                return "profile";

            default:
                return "others";
        }
    }
}