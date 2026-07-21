"use client";

import { motion } from "framer-motion";

import CertificationCard from "./certification-card";
import { certificationService } from "@/services/certificate.service";
import { Certification } from "@/types/certifications/types";
import { useState, useEffect } from "react";

export default function Certifications() {
    const [certifications, setCertifications] = useState<Certification[]>([]);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const data = await certificationService.getCertifications();
                setCertifications(data);
            } catch (error) {
                console.error("Failed to fetch certifications:", error);
            }
        };

        fetchCertifications();
    }, []);

    return (
        <section
            id="certifications"
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

                    {certifications.map((cert: Certification) => (
                        <CertificationCard
                            key={cert.id}
                            certification={cert}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}