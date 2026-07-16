import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    Query,
} from '@nestjs/common';

import { ProjectService } from './project.service';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { SearchProjectDto } from './dto/search-project.dto';


@Controller('projects')
export class ProjectController {
    constructor(
        private readonly service: ProjectService,
    ) { }

    @Post()
    create(
        @Body() dto: CreateProjectDto,
    ) {
        return this.service.create(dto);
    }

    @Get()
    search(
        @Query() dto: SearchProjectDto,
    ) {
        return this.service.search(dto);
    }

    @Get(':id')
    findOne(
        @Param('id') id: string,
    ) {
        return this.service.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() dto: UpdateProjectDto,
    ) {
        return this.service.update(
            id,
            dto,
        );
    }

    @Delete(':id')
    remove(
        @Param('id') id: string,
    ) {
        return this.service.remove(id);
    }
}