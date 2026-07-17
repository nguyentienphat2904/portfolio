"use client";

import { useEffect, useState } from "react";

import { DataTable } from "@/components/common/DataTable";
import { columns } from "./columns";
import { SkillTreeNode } from "@/types/skills/types";
import { skillService } from "@/services/skill.service";
import { buildSkillTree } from "@/lib/skill-tree";

export function SkillsTable() {
    const [skills, setSkills] = useState<SkillTreeNode[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        skillService
            .getSkills()
            .then((res) => setSkills(buildSkillTree(res.items)))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <DataTable
            columns={columns}
            data={skills}
            getSubRows={(row) => row.children}
        />
    );
}