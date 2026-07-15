import { SearchDto } from "@/common/dto/search.dto";
import { MediaType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";

export class SearchMediaDto extends SearchDto {
    @ApiProperty({
        required: false,
        enum: MediaType,
    })
    @IsOptional()
    @IsEnum(MediaType)
    type?: MediaType;
}
