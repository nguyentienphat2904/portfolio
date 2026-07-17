import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateCertificationDto } from "./dto/create-certificate.dto";
import { SearchCertificationDto } from "./dto/search-certificate.dto";
import { UpdateCertificationDto } from "./dto/update-certificate.dto";
import { PrismaService } from "@/prisma/prisma.service";
import { MediaService } from "../media/media.service";


@Injectable()
export class CertificateService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mediaService: MediaService,
    ) { }

    private readonly include: Prisma.CertificationInclude = {
        image: true,
    };

    async create(dto: CreateCertificationDto) {
        const { imageId } = dto;

        if (imageId) {
            await this.validateImage(imageId);
        }

        try {
            return await this.prisma.certification.create({
                data: dto,
                include: this.include,
            });
        } catch (error) {
            if (imageId) {
                await this.mediaService.delete(imageId);
            }
            throw error;
        }
    }

    async findAll(dto: SearchCertificationDto) {
        const {
            page,
            size,
            keyword,
            type,
            sortBy,
            sortOrder,
        } = dto;

        const where: Prisma.CertificationWhereInput = {
            ...(type && { type }),

            ...(keyword && {
                OR: [
                    {
                        name: {
                            contains: keyword,
                            mode: "insensitive",
                        },
                    },
                    {
                        issuer: {
                            contains: keyword,
                            mode: "insensitive",
                        },
                    },
                ],
            }),
        };

        const [items, total] = await this.prisma.$transaction([
            this.prisma.certification.findMany({
                where,
                include: this.include,
                skip: (page - 1) * size,
                take: size,
                orderBy: {
                    [sortBy]: sortOrder.toLowerCase() as Prisma.SortOrder,
                },
            }),

            this.prisma.certification.count({
                where,
            }),
        ]);

        return {
            items,
            total,
            page,
            size,
            totalPages: Math.ceil(total / size),
        };
    }

    async findOne(id: string) {
        const certification = await this.prisma.certification.findUnique({
            where: { id },
            include: this.include,
        });

        if (!certification) {
            throw new NotFoundException("Certification not found");
        }

        return certification;
    }

    async update(id: string, dto: UpdateCertificationDto) {
        await this.findOne(id);

        if (dto.imageId) {
            await this.validateImage(dto.imageId);
        }

        return this.prisma.certification.update({
            where: {
                id,
            },
            data: dto,
            include: this.include,
        });
    }

    async remove(id: string) {
        await this.findOne(id);

        await this.prisma.certification.delete({
            where: {
                id,
            },
        });

        return {
            message: "Certification deleted successfully",
        };
    }

    private async validateImage(imageId: string) {
        const image = await this.prisma.media.findUnique({
            where: {
                id: imageId,
            },
        });

        if (!image) {
            throw new BadRequestException("Image not found");
        }
    }
}