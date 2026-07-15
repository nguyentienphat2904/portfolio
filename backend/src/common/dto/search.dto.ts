import { Type } from "class-transformer";
import {
    IsIn,
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
} from "class-validator";
import { SortOrder } from "../enums/sort-order.enum";
import { ApiProperty } from "@nestjs/swagger";

export class SearchDto {
    @ApiProperty({
        required: false,
        type: Number,
        example: 1,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page = 1;

    @ApiProperty({
        required: false,
        type: Number,
        example: 10,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    size = 10;

    @ApiProperty({
        required: false,
        type: String,
        default: "",
    })
    @IsOptional()
    @IsString()
    keyword?: string;

    @ApiProperty({
        required: false,
        type: String,
        default: "createdAt",
    })
    @IsOptional()
    @IsString()
    sortBy = "createdAt";

    @ApiProperty({
        required: false,
        enum: SortOrder,
        default: SortOrder.DESC,
    })
    @IsOptional()
    @IsIn([SortOrder.ASC, SortOrder.DESC])
    sortOrder: SortOrder = SortOrder.DESC;
}