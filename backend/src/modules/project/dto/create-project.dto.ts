import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsOptional,
    IsString,
    IsDateString,
} from 'class-validator';

import { ProjectStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProjectDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    githubUrl?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    liveUrl?: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    featured?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    pinned?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    endDate?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty()
    @IsOptional()
    @IsEnum(ProjectStatus)
    status?: ProjectStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    thumbnailId?: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    categoryIds?: string[];

    @ApiProperty()
    @IsOptional()
    @IsArray()
    skillIds?: string[];
}