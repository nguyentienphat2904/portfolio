"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
    ChevronDown,
    ChevronRight,
    MoreVertical,
    Pencil,
    Trash2,
} from "lucide-react";

import { DataTableColumnHeader } from "@/components/common/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SkillTreeNode } from "@/types/skills/types";

export const columns: ColumnDef<SkillTreeNode>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Skill Name"
            />
        ),
        cell: ({ row }) => (
            <div
                className="flex items-center gap-2"
                style={{
                    paddingLeft: `${row.depth * 20}px`,
                }}
            >
                {row.getCanExpand() ? (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 p-0"
                        onClick={row.getToggleExpandedHandler()}
                    >
                        {row.getIsExpanded()
                            ? <ChevronDown className="h-4 w-4" />
                            : <ChevronRight className="h-4 w-4" />}
                    </Button>
                ) : (
                    <div className="w-6" />
                )}

                <span>{row.original.name}</span>
            </div>
        ),
    },
    {
        accessorKey: "order",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Is Core"
            />
        ),
        cell: ({ row }) => {
            if (row.getCanExpand()) {
                return null;
            }

            return (
                <span>
                    {row.original.order === 0 ? "Yes" : "No"}
                </span>
            );
        },
    },
    {
        accessorKey: "icon",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Icon"
            />
        ),
        cell: ({ row }) => {
            if (row.getCanExpand()) {
                return null;
            }

            return row.original.icon ? (
                <img
                    src={row.original.icon}
                    alt={row.original.name}
                    className="h-6 w-6 rounded object-contain"
                />
            ) : (
                <span className="text-muted-foreground">-</span>
            );
        },
    },
    {
        id: "actions",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            if (row.getCanExpand()) {
                return null;
            }
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button
                                variant="ghost"
                                size="icon"
                            >
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
            );
        },
    },
];