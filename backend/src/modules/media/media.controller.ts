import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
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
import { CloudinaryResourceType } from '@/common/enums';
import { SearchMediaDto } from './dto/search-media.dto';
import { MediaFolder } from '@prisma/client';


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
                },
                folder: {
                    type: "string",
                    enum: Object.values(MediaFolder),
                    default: MediaFolder.PROJECT
                },
            }
        }
    })
    @UseInterceptors(
        FileInterceptor("file")
    )
    upload(
        @UploadedFile() file: Express.Multer.File,
        @Body('folder') folder: MediaFolder = MediaFolder.PROJECT,
    ) {
        return this.mediaService.upload(file, folder);
    }

    @Delete("/:id")
    delete(
        @Param("id") id: string
    ) {
        return this.mediaService.delete(id);
    }

    @Get("/:id")
    findById(
        @Param("id") id: string
    ) {
        return this.mediaService.findById(id);
    }

    @Get()
    findAll(
        @Query() searchDto: SearchMediaDto
    ) {
        return this.mediaService.findAll(searchDto);
    }

    @Get("/:id/preview")
    preview(
        @Param("id") id: string
    ) {
        return this.mediaService.preview(id);
    }

    @Get("/:id/download")
    download(
        @Param("id") id: string
    ) {
        return this.mediaService.download(id);
    }
}