export interface Skill {
    id: string;
    name: string;
    category: string;
    icon?: string | null;
    order: number;
}

export interface SkillSearchResponse {
    items: Skill[];
    pagination: {
        page: number;
        size: number;
        total: number;
        totalPages: number;
    };
}

export interface SkillTreeNode extends Skill {
    children?: SkillTreeNode[];
}