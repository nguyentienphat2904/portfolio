export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link?: string;
    github?: string;
    featured: boolean;
    wide?: boolean;
}