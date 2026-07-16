import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { SearchProjectDto } from './dto/search-project.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {

    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async create(dto: CreateProjectDto) {
        const {
            categoryIds,
            skillIds,
            startDate,
            endDate,
            ...data
        } = dto;

        return this.prisma.project.create({
            data: {
                ...data,
                startDate: startDate ? new Date(startDate) : undefined,
                endDate: endDate ? new Date(endDate) : undefined,
                categories: categoryIds
                    ? {
                        connect: categoryIds.map(id => ({ id, })),
                    }
                    : undefined,

                skills: skillIds
                    ? {
                        connect: skillIds.map(id => ({ id, })),
                    }
                    : undefined,
            },

            include: {
                categories: true,
                skills: true,
                thumbnail: true,
            },
        });
    }

    async search(dto: SearchProjectDto) {
        const {
            page,
            size,
            keyword,
            sortBy,
            sortOrder,
            categoryIds,
            skillIds,
            status,
            pinned,
            featured,
        } = dto;

        const where: Prisma.ProjectWhereInput = {
            ...(keyword && {
                OR: [
                    {
                        title: {
                            contains: keyword,
                            mode: Prisma.QueryMode.insensitive,
                        },
                    },
                    {
                        description: {
                            contains: keyword,
                            mode: Prisma.QueryMode.insensitive,
                        },
                    },
                ],
            }),
            ...(categoryIds?.length && {
                categories: {
                    some: {
                        id: {
                            in: categoryIds,
                        },
                    },
                },
            }),
            ...(skillIds?.length && {
                skills: {
                    some: {
                        id: {
                            in: skillIds,
                        },
                    },
                },
            }),
            ...(status && {
                status,
            }),
            ...(pinned !== undefined && {
                pinned,
            }),
            ...(featured !== undefined && {
                featured,
            }),
        };

        const [data, total] = await this.prisma.$transaction([
            this.prisma.project.findMany({
                where,
                skip: (page - 1) * size,
                take: size,
                orderBy: {
                    [sortBy]: sortOrder,
                },
                include: {
                    categories: true,
                    skills: true,
                    thumbnail: true,
                },
            }),
            this.prisma.project.count({
                where,
            }),
        ]);

        return {
            data,
            pagination: {
                page,
                size,
                total,
                totalPages: Math.ceil(total / size),
            },
        };
    }

    async findOne(id: string) {
        const project = await this.prisma.project.findUnique({
            where: { id, },
            include: {
                categories: true,
                skills: true,
                thumbnail: true,
                images: true,
            },
        });

        if (!project) {
            throw new NotFoundException(
                'Project not found',
            );
        }
        return project;
    }

    async update(
        id: string,
        dto: UpdateProjectDto,
    ) {
        await this.findOne(id);
        const {
            categoryIds,
            skillIds,
            startDate,
            endDate,
            ...data
        } = dto;

        return this.prisma.project.update({
            where: { id, },
            data: {
                ...data,
                startDate: startDate ? new Date(startDate) : undefined,
                endDate: endDate ? new Date(endDate) : undefined,
                categories: categoryIds ? {
                    set: categoryIds.map(id => ({
                        id,
                    })),
                } : undefined,
                skills: skillIds ? {
                    set: skillIds.map(id => ({
                        id,
                    })),
                } : undefined,
            },
            include: {
                categories: true,
                skills: true,
            },
        });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.project.delete({
            where: { id, },
        });
    }
}