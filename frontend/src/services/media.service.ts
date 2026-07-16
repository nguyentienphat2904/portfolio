import axios from "@/lib/axios";

class MediaService {
    private readonly endpoint = "/media";

    async getDownloadUrl(id: string) {
        const response = await axios.get<{
            url: string;
        }>(`${this.endpoint}/${id}/download`);

        return response.data;
    }
}

export const mediaService = new MediaService();