import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { ProjectCategoryService } from './project-category.service';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';


@Controller('project-categories')
export class ProjectCategoryController {

    constructor(
        private readonly service: ProjectCategoryService,
    ) { }

    @Post()
    create(
        @Body() dto: CreateProjectCategoryDto,
    ) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
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
        @Body() dto: UpdateProjectCategoryDto,
    ) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string,
    ) {
        return this.service.remove(id);
    }
}