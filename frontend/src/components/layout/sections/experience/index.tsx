"use client";

import { motion } from "framer-motion";

import { experienceService } from "@/services/experience.service";
import { useState, useEffect } from "react";
import type { Experience } from "@/types/experience/types";
import ExperienceItem from "./experience-item";

export default function Experience() {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        experienceService
            .getExperiences({
                page: 1,
                size: 100,
                sortBy: "startDate",
                sortOrder: "desc",
            })
            .then((res) => setExperiences(res.items));
    }, []);
    return (
        <section
            id="experience"
            className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden "
        >
            <div className="container mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Professional Journey
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        My
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                            {" "}Experience
                        </span>.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        My professional experience and academic projects have
                        strengthened my skills in backend engineering,
                        distributed systems, and full-stack application
                        development.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {experiences
                        .map((experience: Experience) => (
                            <ExperienceItem
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}