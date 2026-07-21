export interface LoginRequest {
    email: string;
    password: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: "ADMIN";
}

export interface LoginResponse {
    access_token: string;
    user: User;
}