"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
    ExternalLink,
    Link,
    MoreVertical,
    Pencil,
    Star,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/StatusBadge";

import { ProjectItem } from "@/types/projects/types";
import { FaGithub } from "react-icons/fa";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<ProjectItem>[] = [
    {
        accessorKey: "title",
        header: "Project",
        cell: ({ row }) => (
            <div>
                <p className="font-medium">
                    {row.original.title}
                </p>

                <p className="line-clamp-1 text-sm text-slate-500">
                    {row.original.description}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "tech",
        header: "Tech Stack",
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-1">
                {row.original.tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900/30"
                    >
                        {item}
                    </span>
                ))}
            </div>
        ),
    },
    {
        accessorKey: "featured",
        header: "Featured",
        cell: ({ row }) =>
            row.original.featured ? (
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
            ) : (
                "-"
            ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <StatusBadge status={row.original.status} />
        ),
    },
    {
        accessorKey: "updatedAt",
        header: "Updated",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const project = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto"
                            >
                                <MoreVertical className="size-4" />
                            </Button>
                        }
                    />

                    <DropdownMenuContent align="end" className="w-48">
                        {project.github && (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <FaGithub className="mr-2 size-4" />
                                <span>GitHub</span>
                            </DropdownMenuItem>
                        )}

                        {project.link && (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                <ExternalLink className="mr-2 size-4" />
                                <span>Live Demo</span>
                            </DropdownMenuItem>
                        )}

                        {(project.github || project.link) && (
                            <DropdownMenuSeparator />
                        )}

                        <DropdownMenuItem className="cursor-pointer">
                            <Pencil className="mr-2 size-4" />
                            Edit
                        </DropdownMenuItem>

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