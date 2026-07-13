"use client";

import Image from "next/image";
import { ArrowRight, Code, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectItem } from "@/types/projects/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    project: ProjectItem;
    variant?: "featured" | "default";
}

export default function ProjectCard({
    project,
    variant = "default",
}: ProjectCardProps) {
    const featured = variant === "featured";

    return (
        <div
            className={cn(
                "group flex flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white transition-all duration-300 hover:border-primary/30 dark:border-primary/10 dark:bg-[#04294F]/20",
                featured
                    ? project.wide
                        ? "lg:col-span-7"
                        : "lg:col-span-5"
                    : ""
            )}
        >
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={project.image}
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
                    {(featured ? project.tech : project.tech.slice(0, 3)).map((tech) => (
                        <Badge
                            key={tech}
                            variant="tech"
                        >
                            {tech}
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
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 font-semibold text-primary",
                            project.wide &&
                            "w-fit rounded-xl bg-primary px-5 py-2.5 text-white hover:bg-primary/90"
                        )}
                    >
                        View Project

                        <ArrowRight
                            className={cn(
                                "h-4 w-4",
                                project.wide && "text-white"
                            )}
                        />
                    </a>
                ) : (
                    <a
                        href={project.link ?? project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold transition hover:border-primary/30 dark:border-slate-700"
                    >
                        {project.link ? (
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
                )}
            </div>
        </div>
    );
}