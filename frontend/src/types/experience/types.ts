export interface Experience {
    id: string;
    company: string;
    position: string;
    employment: string;
    description: string;
    location: string;
    website?: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    skills: {
        skill: {
            id: string;
            name: string;
        };
    }[];
}

export interface ExperienceResponse {
    pagination: {
        total: number;
        page: number;
        size: number;
        totalPages: number;
    };
    items: Experience[];
}