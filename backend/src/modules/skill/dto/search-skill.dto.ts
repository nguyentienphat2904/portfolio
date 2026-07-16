import { SkillCategory } from "@prisma/client";
import { IsArray, IsEnum, IsIn, IsInt, IsOptional } from "class-validator";
import { SearchDto } from "@/common/dto/search.dto";
import { Transform, Type } from "class-transformer";
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
        required: false,
    })
    @IsOptional()
    @Transform(({ value }) =>
        Array.isArray(value) ? value : value.split(",")
    )
    @IsArray()
    @IsEnum(SkillCategory, { each: true })
    category?: SkillCategory[];

    @ApiProperty({
        required: false,
        type: Number,
        example: 0,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    order?: number;
}