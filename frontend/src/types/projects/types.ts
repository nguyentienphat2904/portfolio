
export interface Skill {
    id: string;
    name: string;
    category: string;
    icon: string | null;
}

export interface Category {
    id: string;
    name: string;
}

export interface Thumbnail {
    id: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean;
    pinned: boolean;
    startDate: string;
    endDate: string | null;
    content: string;
    status: ProjectStatus;
    skills: Skill[];
    categories: Category[];

    thumbnail: Thumbnail | null;

    createdAt: string,
    updatedAt: string,
}

export enum ProjectStatus {
    PLANNING = "PLANNING",
    DEVELOPMENT = "DEVELOPMENT",
    COMPLETED = "COMPLETED",
    ARCHIVED = "ARCHIVED",
}

export interface Pagination {
    page: number;
    size: number;
    total: number;
    totalPages: number;
}

export interface ProjectResponse {
    data: Project[];
    pagination: Pagination;
}