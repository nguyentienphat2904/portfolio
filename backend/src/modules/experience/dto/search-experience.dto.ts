import { EmploymentType } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsIn,
    IsOptional,
    IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { SearchDto } from "@/common/dto/search.dto";

export class SearchExperienceDto extends SearchDto {
    @ApiProperty({
        enum: [
            "company",
            "position",
            "employment",
            "current",
            "startDate",
            "endDate",
            "order",
            "createdAt",
            "updatedAt",
        ],
        default: "order",
    })
    @IsOptional()
    @IsIn([
        "company",
        "position",
        "employment",
        "current",
        "startDate",
        "endDate",
        "order",
        "createdAt",
        "updatedAt",
    ])
    override sortBy = "order";

    @ApiProperty({
        enum: EmploymentType,
        isArray: true,
        required: false,
    })
    @IsOptional()
    @Transform(({ value }) =>
        Array.isArray(value) ? value : value.split(",")
    )
    @IsArray()
    @IsEnum(EmploymentType, { each: true })
    employment?: EmploymentType[];

    @ApiProperty({
        required: false,
        type: Boolean,
    })
    @IsOptional()
    @Transform(({ value }) => value === "true")
    @IsBoolean()
    current?: boolean;

    @ApiProperty({
        required: false,
        type: [String],
    })
    @IsOptional()
    @Transform(({ value }) =>
        Array.isArray(value)
            ? value
            : value.split(",")
    )
    @IsArray()
    @IsString({ each: true })
    skillIds?: string[];
}