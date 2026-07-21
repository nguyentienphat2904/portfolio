import axios from "@/lib/axios";
import { ExperienceResponse } from "@/types/experience/types";

export interface ExperienceQuery {
    page?: number;
    size?: number;
    keyword?: string;
    sortBy?:
    | "company"
    | "position"
    | "employment"
    | "startDate"
    | "endDate"
    | "order"
    | "createdAt"
    | "updatedAt";
    sortOrder?: "asc" | "desc";
    current?: boolean;
    employment?: string[];
    skillIds?: string[];
}

class ExperienceService {
    private readonly endpoint = "/experience";

    async getExperiences(query: ExperienceQuery = {}) {
        const params = new URLSearchParams();

        if (query.page) params.append("page", query.page.toString());
        if (query.size) params.append("size", query.size.toString());
        if (query.keyword) params.append("keyword", query.keyword);
        if (query.sortBy) params.append("sortBy", query.sortBy);
        if (query.sortOrder) params.append("sortOrder", query.sortOrder);

        if (query.current !== undefined) {
            params.append("current", query.current.toString());
        }

        query.employment?.forEach((item) =>
            params.append("employment", item),
        );

        query.skillIds?.forEach((item) =>
            params.append("skillIds", item),
        );

        const response = await axios.get<ExperienceResponse>(
            `${this.endpoint}?${params.toString()}`,
        );
        return response.data;
    }
}

export const experienceService = new ExperienceService();