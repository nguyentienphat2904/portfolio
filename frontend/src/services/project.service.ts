import axios from "@/lib/axios";
import { Project, ProjectResponse } from "@/types/projects/types";

class ProjectService {
    private readonly endpoint = "/projects";

    async getProjects(): Promise<Project[]> {
        const response = await axios.get<ProjectResponse>(
            `${this.endpoint}?page=1&size=100&sortBy=createdAt&sortOrder=desc&pinned=true`
        );

        return response.data.data;
    }
}

export const projectService = new ProjectService();