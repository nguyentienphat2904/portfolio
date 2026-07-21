"use client";

import { motion } from "framer-motion";

import { education } from "./education-data";
import EducationCard from "./education-card";

export default function Education() {
    return (
        <section
            id="education"
            className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden "
        >
            <div className="container mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Academic Background
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                            Education
                        </span>.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        My academic journey has built a solid foundation in
                        computer science, software engineering, distributed
                        systems, and modern application development.
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <EducationCard {...education} />
                </motion.div>

            </div>
        </section>
    );
}