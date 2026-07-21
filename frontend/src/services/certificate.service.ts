import axios from "@/lib/axios";
import {
    Certification,
    CertificationSearchResponse,
} from "@/types/certifications/types";

class CertificationService {
    private readonly endpoint = "/certifications";

    async getCertifications(): Promise<Certification[]> {
        const response =
            await axios.get<CertificationSearchResponse>(
                this.endpoint,
                {
                    params: {
                        page: 1,
                        size: 100,
                        sortBy: "order",
                        sortOrder: "asc",
                    },
                },
            );

        return response.data.items;
    }

    async searchCertifications(params?: {
        page?: number;
        size?: number;
        keyword?: string;
        type?: "COURSE" | "PROFESSIONAL" | "ACADEMIC";
        sortBy?: string;
        sortOrder?: "asc" | "desc";
    }): Promise<CertificationSearchResponse> {
        const response =
            await axios.get<CertificationSearchResponse>(
                this.endpoint,
                {
                    params,
                },
            );

        return response.data;
    }

    async getCertification(id: string): Promise<Certification> {
        const response = await axios.get<Certification>(
            `${this.endpoint}/${id}`,
        );

        return response.data;
    }
}

export const certificationService = new CertificationService();