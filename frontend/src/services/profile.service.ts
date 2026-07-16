import axios from "@/lib/axios";
import { Profile, ProfileResponse } from "@/types/profile/types";

class ProfileService {
    private readonly endpoint = "/profile";

    async getProfile(): Promise<Profile> {
        const response = await axios.get<ProfileResponse>(
            this.endpoint,
        );
        return response.data.profile;
    }
}

export const profileService = new ProfileService();