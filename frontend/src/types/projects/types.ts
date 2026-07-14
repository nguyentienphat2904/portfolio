export interface ProjectItem {
    id: string;

    title: string;
    description: string;

    image: string;

    tech: string[];

    github?: string;
    link?: string;

    featured: boolean;
    wide?: boolean;

    status: "draft" | "published";

    createdAt: string;
    updatedAt: string;
}