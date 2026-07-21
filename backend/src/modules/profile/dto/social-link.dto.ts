import { ApiProperty } from "@nestjs/swagger";
import { SocialPlatform } from "@prisma/client";
import { IsEnum, IsUrl, IsOptional, IsString, IsInt } from "class-validator";

export class SocialLinkDto {
    @ApiProperty()
    @IsEnum(SocialPlatform)
    platform: SocialPlatform;

    @ApiProperty()
    @IsUrl()
    url: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    icon?: string;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    order = 0;
}