"use client";

import { DataTable } from "@/components/common/DataTable";
import { columns } from "./columns";

const data = [
    {
        id: "1",
        company: "Viettel Digital Talent",
        position: "Software Engineer Trainee",
        employmentType: "Internship",
        startDate: "2026-05",
        endDate: "Present",
        featured: true,
    },
];

export function ExperienceTable() {
    return (
        <DataTable
            columns={columns}
            data={data} />
    );
}