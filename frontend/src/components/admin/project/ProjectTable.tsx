"use client";
import { DataTable } from "@/components/common/DataTable";

import { columns } from "./columns";
import { ProjectItem } from "@/types/projects/types";

const projects: ProjectItem[] = [
    {
        id: "1",
        title: "Portfolio",
        description: "Personal portfolio website.",
        image: "/projects/portfolio.png",
        tech: ["Next.js", "NestJS", "Tailwind"],
        github: "#",
        link: "#",
        featured: true,
        status: "published",
        createdAt: "2026-07-01",
        updatedAt: "2026-07-13",
    },
];

export function ProjectsTable() {
    return (
        <DataTable
            columns={columns}
            data={projects}
            searchKey="title"
            searchPlaceholder="Search project..."
        />
    );
}