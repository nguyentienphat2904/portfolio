"use client";

import { useEffect } from "react";

const sections = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
];

export function SectionObserver() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        history.replaceState(
                            null,
                            "",
                            `#${entry.target.id}`,
                        );
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            },
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}