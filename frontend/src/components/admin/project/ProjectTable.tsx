"use client";

import { useEffect, useState } from "react";

import { DataTable } from "@/components/common/DataTable";
import { columns } from "./columns";
import { Project } from "@/types/projects/types";
import { projectService } from "@/services/project.service";

export function ProjectsTable() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        projectService
            .getProjects()
            .then(setProjects)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <DataTable
            columns={columns}
            data={projects}
            searchKey="title"
            searchPlaceholder="Search project..."
        />
    );
}