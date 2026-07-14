"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
    MoreVertical,
    Pencil,
    Star,
    Trash2,
} from "lucide-react";


import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SkillItem } from "@/types/skills/types";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTableColumnHeader } from "@/components/common/DataTableColumnHeader";


export const columns: ColumnDef<SkillItem>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Skill"
            />
        ),
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Category"
            />
        ),
    },
    {
        accessorKey: "featured",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Featured"
            />
        ),
        cell: ({ row }) =>
            row.original.featured ? (
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
            ) : (
                "-"
            ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Status"
            />
        ),
        cell: ({ row }) => (
            <StatusBadge status={row.original.status} />
        ),
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Updated"
            />
        ),
    },
    {
        id: "actions",
        enableSorting: false,
        enableHiding: false,

        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger
                    render={
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="size-4" />
                        </Button>
                    }
                />

                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer">
                        <Pencil className="mr-2 size-4" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        variant="destructive"
                        className="cursor-pointer"
                    >
                        <Trash2 className="mr-2 size-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];