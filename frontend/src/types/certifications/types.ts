export type CertificationType =
    | "COURSE"
    | "PROFESSIONAL"
    | "ACADEMIC";

export interface Media {
    id: string;
    fileName: string;
    publicId: string;
    url: string;
    type: string;
    mimeType: string;
    extension: string | null;
    size: number | null;
    width: number | null;
    height: number | null;
    folder: string;
    createdAt: string;
    updatedAt: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issueDate: string | null;
    credentialId: string | null;
    credentialUrl: string | null;
    imageId: string | null;
    order: number;
    type: CertificationType;
    createdAt: string;
    updatedAt: string;
    image: Media | null;
}

export interface CertificationSearchResponse {
    items: Certification[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
}