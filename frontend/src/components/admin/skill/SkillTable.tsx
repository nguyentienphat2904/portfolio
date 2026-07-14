"use client";


import { DataTable } from "@/components/common/DataTable";
import { skills } from "./data";
import { columns } from "./columns";

export function SkillsTable() {
    return (
        <DataTable
            columns={columns}
            data={skills}
            searchKey="name"
            searchPlaceholder="Search skills..."
        />
    );
}