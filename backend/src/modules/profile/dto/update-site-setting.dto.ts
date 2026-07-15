import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray, IsOptional } from "class-validator";

export class UpdateSiteSettingDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    siteName?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    keywords: string[];

    @ApiProperty()
    @IsOptional()
    @IsString()
    faviconId?: string;
}