"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";


export type ExperienceRow = {
    id: string;
    company: string;
    position: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    featured: boolean;
};

export const columns: ColumnDef<ExperienceRow>[] = [
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "position",
        header: "Position",
    },
    {
        accessorKey: "employmentType",
        header: "Type",
    },
    {
        accessorKey: "startDate",
        header: "Start",
    },
    {
        accessorKey: "endDate",
        header: "End",
    },
    {
        accessorKey: "featured",
        header: "Featured",
        cell: ({ row }) =>
            row.original.featured ? (
                <Badge>Yes</Badge>
            ) : (
                "-"
            ),
    },
];