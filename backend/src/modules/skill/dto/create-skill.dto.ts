import { ApiProperty } from "@nestjs/swagger";
import { SkillCategory } from "@prisma/client";
import {
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
} from "class-validator";

export class CreateSkillDto {
    @ApiProperty({
        description: "Skill name",
        example: "React",
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Skill category",
        example: SkillCategory.BACKEND,
    })
    @IsEnum(SkillCategory)
    category: SkillCategory;

    @ApiProperty({
        description: "Skill icon",
        example: "",
    })
    @IsOptional()
    @IsString()
    icon?: string;

    @ApiProperty({
        description: "Skill order",
        example: 0,
    })
    @IsOptional()
    @IsInt()
    order?: number = 0;

    @ApiProperty({
        description: "Skill level",
        example: 0,
    })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(100)
    level?: number;
}