import {
    Monitor,
    Server,
    Database,
    Wrench,
    Boxes,
    ShieldCheck,
    Workflow,
} from "lucide-react";

export const categories = [
    {
        title: "Frontend",
        description:
            "Building responsive, modern and accessible web interfaces.",
        icon: Monitor,
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
        ],
    },
    {
        title: "Backend",
        description:
            "Designing secure and scalable backend services and APIs.",
        icon: Server,
        skills: [
            "Spring Boot",
            "NestJS",
            "Prisma",
            "REST API",
            "JWT",
            "OAuth2",
        ],
    },
    {
        title: "Database",
        description:
            "Working with relational and NoSQL databases.",
        icon: Database,
        skills: [
            "PostgreSQL",
            "MongoDB",
            "SQL Server",
            "Firebase",
        ],
    },
    {
        title: "Tools & DevOps",
        description:
            "Development workflow and deployment tooling.",
        icon: Wrench,
        skills: [
            "Docker",
            "Git",
            "GitHub Actions",
            "Linux",
            "Postman",
            "Figma",
        ],
    },
];

export const competencies = [
    {
        icon: Boxes,
        title: "Clean Architecture",
        description:
            "Design maintainable applications with clear separation of concerns.",
    },
    {
        icon: Workflow,
        title: "API Design",
        description:
            "Build secure, scalable and well-documented RESTful APIs.",
    },
    {
        icon: ShieldCheck,
        title: "Problem Solving",
        description:
            "Translate complex requirements into reliable software solutions.",
    },
];