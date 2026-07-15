import { SkillCategory } from "@prisma/client";
import { IsArray, IsEnum, IsIn, IsOptional } from "class-validator";
import { SearchDto } from "@/common/dto/search.dto";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class SearchSkillDto extends SearchDto {
    @ApiProperty({
        enum: ["name", "category", "level", "order", "createdAt", "updatedAt"],
        default: "createdAt",
    })
    @IsOptional()
    @IsIn([
        "name",
        "category",
        "level",
        "order",
        "createdAt",
        "updatedAt",
    ])
    override sortBy = "order";

    @ApiProperty({
        enum: SkillCategory,
        isArray: true,
    })
    @IsOptional()
    @Transform(({ value }) =>
        Array.isArray(value) ? value : value.split(",")
    )
    @IsArray()
    @IsEnum(SkillCategory, { each: true })
    category?: SkillCategory[];
}