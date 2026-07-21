import axios from "@/lib/axios";
import { Skill, SkillSearchResponse } from "@/types/skills/types";

class SkillService {
    private readonly endpoint = "/skills";

    async getCoreSkills(): Promise<Skill[]> {
        const response = await axios.get<SkillSearchResponse>(
            this.endpoint,
            {
                params: {
                    page: 1,
                    size: 100,
                    sortBy: "order",
                    sortOrder: "asc",
                    order: 0,
                },
            },
        );
        return response.data.items;
    }

    async getSkills(params?: {
        page?: number;
        size?: number;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
    }): Promise<SkillSearchResponse> {
        const response = await axios.get<SkillSearchResponse>(
            this.endpoint,
            {
                params,
            },
        );

        return response.data;
    }
}

export const skillService = new SkillService();