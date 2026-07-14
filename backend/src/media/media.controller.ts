import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {
    ApiBody,
    ApiConsumes
} from '@nestjs/swagger';
import {
    FileInterceptor
} from '@nestjs/platform-express';
import { MediaService } from './media.service';


@Controller("media")
export class MediaController {

    constructor(
        private mediaService: MediaService
    ) { }

    @Post("upload")
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                file: {
                    type: "string",
                    format: "binary"
                }
            }
        }
    })
    @UseInterceptors(
        FileInterceptor("file")
    )
    upload(
        @UploadedFile()
        file: Express.Multer.File
    ) {
        return this.mediaService.upload(file);
    }
}