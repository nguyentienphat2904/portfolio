"use client";

import { motion } from "framer-motion";

import ProjectCard from "./project-card";
import { useEffect, useMemo, useState } from "react";
import { Project } from "@/types/projects/types";
import { projectService } from "@/services/project.service";

export default function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        projectService
            .getProjects()
            .then(setProjects)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const featuredProjects = useMemo(
        () => projects.filter((p) => p.featured),
        [projects]
    );

    const regularProjects = useMemo(
        () => projects.filter((p) => !p.featured),
        [projects]
    );

    return (
        <section
            id="projects"
            className="py-24 "
        >
            <div className="container mx-auto max-w-7xl px-6 ">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Featured Work
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        Selected
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                            {" "}Projects
                        </span>.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        A selection of projects that showcase my experience in backend
                        engineering, full-stack development, and building scalable software
                        solutions—from healthcare platforms to enterprise systems and mobile
                        applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            variant="featured"
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {regularProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}