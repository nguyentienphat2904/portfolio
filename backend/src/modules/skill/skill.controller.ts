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
    ApiOperation,
    ApiTags,
} from "@nestjs/swagger";
import { UserRole } from "@prisma/client";

import { CreateSkillDto } from "./dto/create-skill.dto";
import { SearchSkillDto } from "./dto/search-skill.dto";
import { UpdateSkillDto } from "./dto/update-skill.dto";
import { SkillService } from "./skill.service";
import { HasRoles } from "@/common/decorator/has-roles.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Skill")
@Controller("skills")
export class SkillController {
    constructor(
        private readonly skillService: SkillService,
    ) { }

    @Get("categories")
    @ApiOperation({
        summary: "Get all skill categories",
    })
    getCategories() {
        return this.skillService.getCategories();
    }

    @Get()
    @ApiOperation({
        summary: "Search skills",
    })
    search(
        @Query() dto: SearchSkillDto,
    ) {
        return this.skillService.search(dto);
    }

    @Get(":id")
    @ApiOperation({
        summary: "Get skill by id",
    })
    findById(
        @Param("id") id: string,
    ) {
        return this.skillService.findById(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    @ApiOperation({
        summary: "Create skill",
    })
    create(
        @Body() dto: CreateSkillDto,
    ) {
        return this.skillService.create(dto);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    @ApiOperation({
        summary: "Update skill",
    })
    update(
        @Param("id") id: string,
        @Body() dto: UpdateSkillDto,
    ) {
        return this.skillService.update(id, dto);
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    @ApiOperation({
        summary: "Delete skill",
    })
    delete(
        @Param("id") id: string,
    ) {
        return this.skillService.delete(id);
    }
}
