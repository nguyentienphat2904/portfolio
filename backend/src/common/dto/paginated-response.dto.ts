export class PaginationDto {
    total: number;
    page: number;
    size: number;
}

export class PaginatedResponseDto<T> {
    pagination: PaginationDto;
    items: T[];
}