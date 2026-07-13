import { Award, Languages } from "lucide-react";

export const certifications = [
    {
        id: "toeic",
        icon: Languages,
        title: "TOEIC Listening & Reading",
        issuer: "Educational Testing Service (ETS)",
        issued: "2025",
        credential: "Score: 820",
        description: "Demonstrated English proficiency for professional communication, technical documentation, and collaboration in international software engineering environments.",
        skills: [
            "English",
            "Communication",
            "Technical Reading",
        ],
        certificateFile: "/certifications/toeic.pdf",
    },
    {
        id: "sdws",
        icon: Award,
        title: "Software Development With Scrum",
        issuer: "Axon Active Vietnam",
        issued: "Feb 2025 – Mar 2025",
        credentialId: "SDWS20250219-2308",
        description: "Completed an intensive Scrum workshop covering Agile principles, Scrum framework, sprint planning, estimation techniques, backlog management, and collaborative software development practices.",
        skills: [
            "Scrum",
            "Agile",
            "Sprint Planning",
            "Backlog Management",
            "Team Collaboration",
        ],
        certificateFile: "/certifications/sdws.pdf",
    }
];