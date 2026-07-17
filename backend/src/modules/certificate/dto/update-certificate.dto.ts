import { PartialType } from "@nestjs/swagger";
import { CreateCertificationDto } from "./create-certificate.dto";

export class UpdateCertificationDto extends PartialType(
    CreateCertificationDto,
) { }