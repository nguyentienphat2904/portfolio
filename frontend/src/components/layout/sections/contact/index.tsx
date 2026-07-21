"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactItems, socials } from "./contact-data";
import ContactCard from "./contact-card";

export default function Contact() {
    return (
        <section
            id="contact"
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
                        Contact
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        Get In Touch.
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        I'm always interested in discussing backend
                        engineering, full-stack development, and
                        opportunities to build impactful software.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {contactItems.map((item) => {
                        return (
                            <ContactCard
                                key={item.title}
                                {...item} />
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-wrap gap-4">

                    <Button
                        size="lg"
                        nativeButton={false}
                        render={
                            <Link
                                href="mailto:nguyentienphat2904@gmail.com"
                            >
                                <span>Email Me</span>
                                <Mail className="h-4 w-4" />
                            </Link>
                        }
                    />

                    {socials.map((social) => (
                        <Button
                            key={social.title}
                            variant="outline"
                            size="lg"
                            nativeButton={false}
                            render={<Link
                                href={social.href}
                                target="_blank"
                            >
                                <social.icon className="mr-2 h-4 w-4" />
                                {social.title}
                            </Link>}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}