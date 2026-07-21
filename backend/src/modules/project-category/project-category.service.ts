import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ProjectCategoryService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async create(dto: CreateProjectCategoryDto) {
        return this.prisma.projectCategory.create({
            data: dto,
        });
    }

    async findAll() {
        return this.prisma.projectCategory.findMany({
            orderBy: {
                order: 'asc',
            },
            include: {
                _count: {
                    select: {
                        projects: true,
                    },
                },
            },
        });
    }


    async findOne(id: string) {
        const category =
            await this.prisma.projectCategory.findUnique({
                where: { id },
                include: {
                    projects: true,
                },
            });

        if (!category) {
            throw new NotFoundException(
                'Project category not found',
            );
        }

        return category;
    }


    async update(
        id: string,
        dto: UpdateProjectCategoryDto,
    ) {
        await this.findOne(id);

        return this.prisma.projectCategory.update({
            where: {
                id,
            },
            data: dto,
        });
    }


    async remove(id: string) {
        await this.findOne(id);

        return this.prisma.projectCategory.delete({
            where: {
                id,
            },
        });
    }
}