import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { SocialLinkDto } from "./social-link.dto";
import { UpdateProfileDto } from "./update-profile.dto";
import { UpdateSiteSettingDto } from "./update-site-setting.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProfileRequestDto {
    @ApiProperty()
    @ValidateNested()
    @IsOptional()
    @Type(() => UpdateProfileDto)
    profile?: UpdateProfileDto;

    @ApiProperty()
    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => SocialLinkDto)
    socialLinks?: SocialLinkDto[];

    @ApiProperty()
    @ValidateNested()
    @IsOptional()
    @Type(() => UpdateSiteSettingDto)
    siteSetting?: UpdateSiteSettingDto;
}