import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from "@nestjs/common";
import {
    ApiBearerAuth,
    ApiTags,
} from "@nestjs/swagger";

import { UserRole } from "@prisma/client";

import { JwtAuthGuard } from "@/modules/auth/guards/jwt-auth.guard";
import { ExperienceService } from "./experience.service";
import { CreateExperienceDto } from "./dto/create-experience.dto";
import { UpdateExperienceDto } from "./dto/update-experience.dto";
import { SearchExperienceDto } from "./dto/search-experience.dto";
import { HasRoles } from "@/common/decorator/has-roles.decorator";

@ApiTags("Experience")
@Controller("experience")
export class ExperienceController {
    constructor(
        private readonly experienceService: ExperienceService,
    ) { }

    @Get()
    search(
        @Query()
        dto: SearchExperienceDto,
    ) {
        return this.experienceService.search(dto);
    }

    @Get(":id")
    findOne(
        @Param("id")
        id: string,
    ) {
        return this.experienceService.findOne(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    create(
        @Body()
        dto: CreateExperienceDto,
    ) {
        return this.experienceService.create(dto);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    update(
        @Param("id")
        id: string,
        @Body()
        dto: UpdateExperienceDto,
    ) {
        return this.experienceService.update(
            id,
            dto,
        );
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    remove(
        @Param("id")
        id: string,
    ) {
        return this.experienceService.remove(id);
    }
}