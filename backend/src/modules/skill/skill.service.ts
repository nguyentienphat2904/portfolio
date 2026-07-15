import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SearchSkillDto } from './dto/search-skill.dto';
import { Prisma, SkillCategory } from '@prisma/client';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(dto: CreateSkillDto) {
        const skill = await this.prisma.skill.findFirst({
            where: {
                name: {
                    equals: dto.name,
                    mode: Prisma.QueryMode.insensitive,
                },
            },
        });
        if (skill) {
            throw new BadRequestException("Skill already exists");
        }
        return this.prisma.skill.create({ data: dto });
    }

    async getCategories() {
        return Object.values(SkillCategory);
    }

    async search(dto: SearchSkillDto) {
        const page = dto.page ?? 1;
        const size = dto.size ?? 10;
        const where: Prisma.SkillWhereInput = {
            ...(dto.keyword && {
                name: {
                    contains: dto.keyword,
                    mode: Prisma.QueryMode.insensitive,
                },
            }),
            ...(dto.category?.length && {
                category: {
                    in: dto.category,
                },
            }),
        };
        const orderBy = {
            [dto.sortBy]: dto.sortOrder,
        };

        const [total, items] = await this.prisma.$transaction([
            this.prisma.skill.count({ where }),
            this.prisma.skill.findMany({
                where,
                skip: (page - 1) * size,
                take: size,
                orderBy,
            }),
        ]);
        return { pagination: { total, page, size }, items };
    }

    async findById(id: string) {
        const skill = await this.prisma.skill.findUnique({
            where: { id },
            include: {
                projects: true,
            }
        });
        if (!skill) {
            throw new NotFoundException("Skill not found");
        }
        return skill;
    }

    async update(id: string, dto: UpdateSkillDto) {
        await this.findById(id);
        if (dto.name) {
            const exist = await this.prisma.skill.findFirst({
                where: {
                    name: {
                        equals: dto.name,
                        mode: Prisma.QueryMode.insensitive,
                    },
                    NOT: { id, },
                },
            });
            if (exist) { throw new BadRequestException("Skill already exists."); }
        }
        return this.prisma.skill.update({
            where: { id, },
            data: dto,
        });
    }

    async delete(id: string) {
        await this.findById(id);
        return this.prisma.skill.delete({
            where: { id },
        });
    }
}
