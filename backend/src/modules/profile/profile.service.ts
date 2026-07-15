import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProfileRequestDto } from './dto/update-profile-request.dto';

@Injectable()
export class ProfileService {

    constructor(
        private prisma: PrismaService,
    ) { }

    async getProfile() {
        const [profile, siteSetting] = await Promise.all([
            this.prisma.profile.findFirst({
                include: {
                    avatar: true,
                    resume: true,
                    socialLinks: {
                        orderBy: {
                            order: "asc",
                        },
                    },
                },
            }),
            this.prisma.siteSetting.findFirst({
                include: {
                    favicon: true,
                },
            }),
        ]);
        if (!profile) throw new NotFoundException("Profile not found.");
        if (!siteSetting) throw new NotFoundException("Site setting not found.");
        return { profile, siteSetting };
    }

    async update(dto: UpdateProfileRequestDto) {
        const profile = await this.prisma.profile.findFirst();
        if (!profile) {
            throw new NotFoundException("Profile not found.");
        }

        const siteSetting = await this.prisma.siteSetting.findFirst();
        if (!siteSetting) {
            throw new NotFoundException("Site setting not found.");
        }

        await this.prisma.$transaction(async (tx) => {
            if (dto.profile) {
                await tx.profile.update({
                    where: {
                        id: profile.id,
                    },
                    data: dto.profile,
                });
            }

            if (dto.siteSetting) {
                await tx.siteSetting.update({
                    where: {
                        id: siteSetting.id,
                    },
                    data: dto.siteSetting,
                });
            }

            if (dto.socialLinks) {
                await tx.socialLink.deleteMany({
                    where: {
                        profileId: profile.id,
                    },
                });

                if (dto.socialLinks.length > 0) {
                    await tx.socialLink.createMany({
                        data: dto.socialLinks.map(item => ({
                            ...item,
                            profileId: profile.id,
                        })),
                    });
                }
            }
        });

        return this.getProfile();
    }

}
