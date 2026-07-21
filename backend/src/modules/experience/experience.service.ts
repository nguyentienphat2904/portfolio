import {
    Injectable,
    NotFoundException,
} from "@nestjs/common";

import { PrismaService } from "@/prisma/prisma.service";
import { CreateExperienceDto } from "./dto/create-experience.dto";
import { UpdateExperienceDto } from "./dto/update-experience.dto";
import { SearchExperienceDto } from "./dto/search-experience.dto";
import { Prisma } from "@prisma/client";


@Injectable()
export class ExperienceService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async create(dto: CreateExperienceDto) {
        const { skillIds, ...data } = dto;

        return this.prisma.experience.create({
            data: {
                ...data,
                startDate: new Date(dto.startDate),
                endDate: dto.endDate
                    ? new Date(dto.endDate)
                    : null,

                skills: skillIds?.length
                    ? {
                        create: skillIds.map((id) => ({
                            skill: {
                                connect: {
                                    id,
                                },
                            },
                        })),
                    }
                    : undefined,
            },

            include: {
                logo: true,
                skills: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
    }

    async search(dto: SearchExperienceDto) {
        const page = dto.page ?? 1;
        const size = dto.size ?? 10;

        const where: Prisma.ExperienceWhereInput = {
            ...(dto.keyword && {
                OR: [
                    {
                        company: {
                            contains: dto.keyword,
                            mode: Prisma.QueryMode.insensitive,
                        },
                    },
                    {
                        position: {
                            contains: dto.keyword,
                            mode: Prisma.QueryMode.insensitive,
                        },
                    },
                    {
                        location: {
                            contains: dto.keyword,
                            mode: Prisma.QueryMode.insensitive,
                        },
                    },
                ],
            }),
            ...(dto.employment?.length && {
                employment: {
                    in: dto.employment,
                },
            }),
            ...(dto.current !== undefined && {
                current: dto.current,
            }),
            ...(dto.skillIds?.length && {
                skills: {
                    some: {
                        skillId: {
                            in: dto.skillIds,
                        },
                    },
                },
            }),
        };

        const orderBy = {
            [dto.sortBy]: dto.sortOrder,
        };

        const [total, items] = await this.prisma.$transaction([
            this.prisma.experience.count({
                where,
            }),

            this.prisma.experience.findMany({
                where,
                include: {
                    logo: true,
                    skills: {
                        select: {
                            skill: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                },
                skip: (page - 1) * size,
                take: size,
                orderBy,
            }),
        ]);

        return {
            pagination: {
                total,
                page,
                size,
                totalPages: Math.ceil(total / size),
            },
            items,
        };
    }

    async findOne(id: string) {
        const experience =
            await this.prisma.experience.findUnique({
                where: { id },
                include: {
                    logo: true,
                    skills: {
                        include: {
                            skill: true,
                        },
                    },
                }
            });

        if (!experience) {
            throw new NotFoundException(
                "Experience not found",
            );
        }

        return experience;
    }

    async update(
        id: string,
        dto: UpdateExperienceDto,
    ) {
        await this.findOne(id);

        const { skillIds, ...data } = dto;

        return this.prisma.experience.update({
            where: { id, },

            data: {
                ...data,

                startDate: dto.startDate
                    ? new Date(dto.startDate)
                    : undefined,

                endDate:
                    dto.endDate === undefined
                        ? undefined
                        : dto.endDate
                            ? new Date(dto.endDate)
                            : null,

                ...(skillIds && {
                    skills: {
                        deleteMany: {},

                        create: skillIds.map((id) => ({
                            skill: {
                                connect: {
                                    id,
                                },
                            },
                        })),
                    },
                }),
            },

            include: {
                logo: true,
                skills: {
                    include: {
                        skill: true,
                    },
                },
            },
        });
    }

    async remove(id: string) {
        await this.findOne(id);

        await this.prisma.experience.delete({
            where: { id },
        });

        return {
            message: "Experience deleted successfully",
        };
    }
}