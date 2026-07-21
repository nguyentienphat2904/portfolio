import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ProjectStatus } from '@prisma/client';
import { SearchDto } from '@/common/dto/search.dto';


export class SearchProjectDto extends SearchDto {

    @ApiProperty({
        required: false,
        type: [String],
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    categoryIds?: string[];


    @ApiProperty({
        required: false,
        type: [String],
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    skillIds?: string[];

    @ApiProperty({
        required: false,
        enum: ProjectStatus,
    })
    @IsOptional()
    @IsEnum(ProjectStatus)
    status?: ProjectStatus;

    @ApiProperty({
        required: false,
        type: Boolean,
    })
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
    })
    @IsBoolean()
    pinned?: boolean;


    @ApiProperty({
        required: false,
        type: Boolean,
    })
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
    })
    @IsBoolean()
    featured?: boolean;
}