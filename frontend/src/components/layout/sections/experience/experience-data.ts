import {
    BriefcaseBusiness,
    Laptop,
    GraduationCap,
    Building2,
} from "lucide-react";

export const experiences = [
    {
        id: 1,
        order: 4,
        icon: GraduationCap,
        type: "Training Program",
        title: "Software Engineer Trainee",
        company: "Viettel Digital Talent",
        location: "Ho Chi Minh City, Vietnam",
        period: "May 2026 — Jul 2026",

        description:
            "Completed an intensive software engineering program focused on backend development, cloud-native technologies, and enterprise application architecture.",

        highlights: [
            "Completed intensive training in software engineering, backend development, system design and Agile development.",
            "Designed and implemented HL7 FHIR configuration management modules.",
            "Built Implementation Guide, Form Type, Mapping Configuration and versioning features.",
            "Developed full-stack modules using Next.js, NestJS, Prisma ORM and PostgreSQL.",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "Prisma",
            "PostgreSQL",
            "FHIR",
        ],
    },

    {
        id: 2,
        order: 3,
        icon: BriefcaseBusiness,
        type: "Internship",
        title: "Java Backend Intern",
        company: "TMA Solutions",
        location: "Ho Chi Minh City, Vietnam",
        period: "Jun 2025 — Aug 2025",

        description:
            "Developed backend services for enterprise systems with a focus on RESTful APIs, authorization and maintainable architecture.",

        highlights: [
            "Developed RESTful APIs using Spring Boot.",
            "Integrated Open Policy Agent (OPA) for fine-grained authorization.",
            "Implemented dynamic role and permission management.",
            "Refactored legacy backend modules to improve maintainability.",
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "OPA",
            "PostgreSQL",
        ],
    },

    {
        id: 3,
        order: 2,
        icon: Laptop,
        type: "Freelance",
        title: "Frontend Developer",
        company: "Corporate Website Project",
        location: "Remote",
        period: "Feb 2025 — Mar 2025",
        liveUrl: "https://tiendungcorp.com",

        description:
            "Developed a modern corporate website with an integrated content management system.",

        highlights: [
            "Built the website using Next.js, React and Tailwind CSS.",
            "Implemented server-side rendering (SSR) and SEO optimization.",
            "Developed an admin dashboard for content management.",
        ],

        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "MongoDB",
        ],
    },

    {
        id: 4,
        order: 1,
        icon: Building2,
        type: "University Project",
        title: "Frontend Developer",
        company: "HCMUT Digital Transformation",
        location: "Ho Chi Minh City, Vietnam",
        period: "Jun 2024 — Aug 2024",

        description:
            "Contributed to digital transformation projects for student activity management systems.",

        highlights: [
            "Developed responsive web interfaces.",
            "Collaborated in a 10-member Scrum team.",
            "Implemented reusable UI components.",
        ],

        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "SCRUM",
        ],
    },
];