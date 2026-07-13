"use client";

import { motion } from "framer-motion";

import ExperienceItem from "./experience-item";
import { experiences } from "./experience-data";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28"
        >
            <div className="container mx-auto max-w-6xl px-6">

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
                        .map((experience: any) => (
                            <ExperienceItem
                                key={experience.id}
                                {...experience}
                            />
                        ))}
                </div>

            </div>
        </section>
    );
}