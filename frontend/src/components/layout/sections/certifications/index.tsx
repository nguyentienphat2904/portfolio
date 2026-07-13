"use client";

import { motion } from "framer-motion";

import CertificationCard from "./certification-card";
import { certifications } from "./certification-data";

export default function Certifications() {
    return (
        <section
            id="certifications"
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
                        Professional Credentials
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                            Certifications
                        </span>.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Industry-recognized certifications demonstrating
                        my English proficiency, Agile mindset, and
                        commitment to continuous learning.
                    </p>

                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">

                    {certifications.map((cert: any) => (
                        <CertificationCard
                            key={cert.id}
                            {...cert}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}