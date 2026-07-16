export interface ProfileResponse {
    profile: Profile;
    siteSetting: SiteSetting;
}


export interface Profile {
    id: string;
    name: string;
    title: string;
    bio: string;

    available: boolean;

    location?: string;
    email?: string;

    resumeId?: string;
    avatarId?: string;

    avatar?: Media | null;
    resume?: Media | null;

    socialLinks: SocialLink[];
}


export interface SiteSetting {
    id: string;
    siteName: string;
    description: string;
    keywords: string[];
    faviconId?: string | null;
}


export interface Media {
    id: string;
    fileName: string;
    url: string;
    type: string;
}


export interface SocialLink {
    id: string;
    platform: string;
    url: string;
}