"use client";

import { motion } from "framer-motion";

import SkillCategoryCard from "./skill-category-card";
import CompetencyCard from "./competency-card";
import { categories, competencies } from "./skill-data";


export default function Skills() {
    return (
        <section
            id="skills"
            className="py-28"
        >
            <div className="container mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Engineering Toolkit
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                            Technologies{" "}
                        </span>
                        I Work With.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        I enjoy building reliable software across the
                        full stack, with a strong focus on backend
                        engineering, scalable architectures and modern
                        web technologies.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {categories.map((category: any) => (
                        <SkillCategoryCard
                            key={category.title}
                            {...category}
                        />
                    ))}
                </div>

                <div className="mt-24">

                    <h3 className="mb-10 text-3xl font-semibold">
                        Core Competencies
                    </h3>

                    <div className="grid gap-6 md:grid-cols-3">
                        {competencies.map((item: any) => (
                            <CompetencyCard
                                key={item.title}
                                {...item}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}