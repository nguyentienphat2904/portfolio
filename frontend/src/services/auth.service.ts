import axios from "@/lib/axios";
import {
    LoginRequest,
    LoginResponse,
} from "@/types/auth/types";

class AuthService {
    private readonly endpoint = "/auth";

    async login(payload: LoginRequest): Promise<LoginResponse> {
        const response = await axios.post<LoginResponse>(
            `${this.endpoint}/login`,
            payload
        );

        return response.data;
    }
}

export const authService = new AuthService();