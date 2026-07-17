import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateCertificationDto } from "./dto/create-certificate.dto";
import { UpdateCertificationDto } from "./dto/update-certificate.dto";
import { SearchCertificationDto } from "./dto/search-certificate.dto";
import { CertificateService } from "./certificate.service";

@ApiTags("Certifications")
@Controller("certifications")
export class CertificateController {
    constructor(
        private readonly certificationService: CertificateService,
    ) { }

    @Post()
    @ApiOperation({
        summary: "Create certification",
    })
    create(@Body() dto: CreateCertificationDto) {
        return this.certificationService.create(dto);
    }

    @Get()
    @ApiOperation({
        summary: "Search certifications",
    })
    findAll(@Query() dto: SearchCertificationDto) {
        return this.certificationService.findAll(dto);
    }

    @Get(":id")
    @ApiOperation({
        summary: "Get certification by id",
    })
    findOne(@Param("id") id: string) {
        return this.certificationService.findOne(id);
    }

    @Patch(":id")
    @ApiOperation({
        summary: "Update certification",
    })
    update(
        @Param("id") id: string,
        @Body() dto: UpdateCertificationDto,
    ) {
        return this.certificationService.update(id, dto);
    }

    @Delete(":id")
    @ApiOperation({
        summary: "Delete certification",
    })
    remove(@Param("id") id: string) {
        return this.certificationService.remove(id);
    }
}