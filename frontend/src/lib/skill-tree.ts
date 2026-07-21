import { Skill, SkillTreeNode } from "@/types/skills/types";

export function buildSkillTree(
    skills: Skill[],
): SkillTreeNode[] {
    const groups = new Map<string, SkillTreeNode>();

    skills.forEach((skill) => {
        if (!groups.has(skill.category)) {
            groups.set(skill.category, {
                id: skill.category,
                name: skill.category,
                category: skill.category,
                order: 0,
                children: [],
            });
        }

        groups.get(skill.category)!.children!.push({
            ...skill,
        });
    });

    return [...groups.values()];
}