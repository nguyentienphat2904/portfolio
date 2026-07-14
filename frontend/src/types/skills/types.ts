export interface SkillItem {
    id: string;
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tool";
    icon?: string;
    featured: boolean;
    status: "published" | "draft";
    updatedAt: string;
}