"use client";

import { Column } from "@tanstack/react-table";
import {
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataTableColumnHeaderProps<TData, TValue> {
    column: Column<TData, TValue>;
    title: string;
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <span>{title}</span>;
    }

    const sorted = column.getIsSorted();

    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(sorted === "asc")}
            className="-ml-3 h-8 px-3 font-semibold hover:bg-transparent"
        >
            {title}

            {sorted === "asc" ? (
                <ArrowUp className="ml-2 size-4 text-primary" />
            ) : sorted === "desc" ? (
                <ArrowDown className="ml-2 size-4 text-primary" />
            ) : (
                <ArrowUpDown className="ml-2 size-4 opacity-50" />
            )}
        </Button>
    );
}