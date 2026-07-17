import {
    ArrayUnique,
    IsArray,
    IsBoolean,
    IsDateString,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    IsUrl,
} from "class-validator";

import { EmploymentType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateExperienceDto {
    @ApiProperty()
    @IsString()
    company: string;

    @ApiProperty()
    @IsString()
    position: string;

    @ApiProperty({ enum: EmploymentType })
    @IsEnum(EmploymentType)
    employment: EmploymentType;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    logoId?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    website?: string;

    @ApiProperty()
    @IsDateString()
    startDate: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    endDate?: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    current?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    location?: string;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    order?: number;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @ArrayUnique()
    @IsString({ each: true })
    skillIds?: string[];
}