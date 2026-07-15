import { Module } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { ProjectCategoryController } from './project-category.controller';

@Module({
  providers: [ProjectCategoryService],
  controllers: [ProjectCategoryController]
})
export class ProjectCategoryModule {}
