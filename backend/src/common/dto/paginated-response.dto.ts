export class PaginationDto {
    total: number;
    page: number;
    size: number;
    totalPages: number;
}

export class PaginatedResponseDto<T> {
    pagination: PaginationDto;
    items: T[];
}