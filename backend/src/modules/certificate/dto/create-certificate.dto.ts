import { ApiProperty } from "@nestjs/swagger";
import { CertificationType } from "@prisma/client";
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class CreateCertificationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    issuer: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    issueDate?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    credentialId?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    credentialUrl?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageId?: string;

    @ApiProperty()
    @IsEnum(CertificationType)
    type: CertificationType;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    @Min(0)
    order?: number;
}