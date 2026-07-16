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

import { Project } from "@/types/projects/types";
import { FaGithub } from "react-icons/fa";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { TooltipContent, TooltipProvider, Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "title",
        header: "Project",
        cell: ({ row }) => (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger render={
                        <p className="font-medium">
                            {row.original.title}
                        </p>
                    } />
                    <TooltipContent
                        side="top"
                        className="max-w-sm"
                    >
                        <p>{row.original.description}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ),
    },
    {
        accessorKey: "tech",
        header: "Tech Stack",
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-1">
                {row.original.skills.map((item) => (
                    <span
                        key={item.id}
                        className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900/30"
                    >
                        {item.name}
                    </span>
                ))}
            </div>
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
        cell: ({ row }) => {
            return new Date(row.original.updatedAt).toLocaleDateString("vi-VN");
        },
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
                        {project.githubUrl && (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => window.open(project.githubUrl || "#", "_blank")}
                            >
                                <FaGithub className="mr-2 size-4" />
                                <span>GitHub</span>
                            </DropdownMenuItem>
                        )}

                        {project.liveUrl && (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => window.open(project.liveUrl || "#", "_blank")}
                            >
                                <ExternalLink className="mr-2 size-4" />
                                <span>Live Demo</span>
                            </DropdownMenuItem>
                        )}

                        {(project.githubUrl || project.liveUrl) && (
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