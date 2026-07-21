import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsIn, IsOptional } from "class-validator";
import { SearchDto } from "@/common/dto/search.dto";
import { CertificationType } from "@prisma/client";

export class SearchCertificationDto extends SearchDto {
    @ApiPropertyOptional({
        enum: CertificationType,
        example: CertificationType.PROFESSIONAL,
    })
    @IsOptional()
    @IsEnum(CertificationType)
    type?: CertificationType;

    @ApiPropertyOptional({
        enum: ["createdAt", "updatedAt", "order", "issueDate", "name"],
        default: "createdAt",
    })
    @IsOptional()
    @IsIn(["createdAt", "updatedAt", "order", "issueDate", "name"])
    override sortBy = "createdAt";
}