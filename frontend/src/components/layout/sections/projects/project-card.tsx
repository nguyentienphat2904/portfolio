"use client";

import Image from "next/image";
import { ArrowRight, Code, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/projects/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    project: Project;
    variant?: "featured" | "default";
}

export default function ProjectCard({
    project,
    variant = "default",
}: ProjectCardProps) {
    const featured = variant === "featured";
    const projectUrl = project.liveUrl ?? project.githubUrl;

    return (
        <div
            className={cn(
                "group flex flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white transition-all duration-300 hover:border-primary/30 dark:border-primary/10 dark:bg-[#04294F]/20",
                featured && "lg:col-span-6"
            )}
        >
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={project.thumbnail?.url ?? "/projects/corporate.png"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div
                className={cn(
                    "flex flex-1 flex-col",
                    featured ? "p-8" : "p-6"
                )}
            >
                {/* Tech */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {(featured ? project.skills : project.skills.slice(0, 3)).map((tech) => (
                        <Badge
                            key={tech.id}
                            variant="tech"
                        >
                            {tech.name}
                        </Badge>
                    ))}
                </div>

                {/* Title */}
                <h3
                    className={cn(
                        "font-bold transition-colors group-hover:text-primary",
                        featured ? "mb-3 text-2xl" : "mb-2 text-lg"
                    )}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className={cn(
                        "flex-1 text-muted-foreground",
                        featured
                            ? "mb-6 text-sm leading-relaxed"
                            : "mb-6 line-clamp-3 text-sm"
                    )}
                >
                    {project.description}
                </p>

                {/* Action */}
                {featured ? (
                    projectUrl ? (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-semibold text-white hover:bg-primary/90"
                        >
                            {project.liveUrl ? "Live Demo" : "View Source"}

                            <ArrowRight className="h-4 w-4" />
                        </a>
                    ) : (
                        <span className="inline-flex w-fit items-center rounded-xl bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground cursor-not-allowed">
                            Private Project
                        </span>
                    )
                ) : (
                    projectUrl ? (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold transition hover:border-primary/30 dark:border-slate-700"
                        >
                            {project.liveUrl ? (
                                <>
                                    Visit Site
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </>
                            ) : (
                                <>
                                    Source Code
                                    <Code className="h-3.5 w-3.5" />
                                </>
                            )}
                        </a>
                    ) : (
                        <span className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl border border-dashed border-slate-300 py-2.5 text-xs font-semibold text-muted-foreground dark:border-slate-700">
                            Private Project
                        </span>
                    )
                )}
            </div>
        </div>
    );
}