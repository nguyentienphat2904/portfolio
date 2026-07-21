import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    // await prisma.profile.upsert({
    //     where: {
    //         id: "default-profile",
    //     },
    //     update: {},
    //     create: {
    //         id: "default-profile",
    //         name: "Nguyen Tien Phat",
    //         title: "Software Engineer",
    //         bio: "I am Nguyen Tien Phat, a Fresher Software Engineer based in Ho Chi Minh City, Vietnam. With a Bachelor's in Computer Science from HCMUT, I specialize in building robust backend APIs using Spring Boot and NestJS, alongside crafting responsive frontends with React and Next.js. I focus on creating high-performance, secure, and user-centric web applications.",
    //         location: "Ho Chi Minh City, Vietnam",
    //         email: "nguyentienphatgl@gmail.com",
    //     },
    // });
    // await prisma.siteSetting.upsert({
    //     where: {
    //         id: "default-site-setting",
    //     },
    //     update: {},
    //     create: {
    //         id: "default-site-setting",
    //         siteName: "Nguyen Tien Phat Portfolio",
    //         description:
    //             "Portfolio of Nguyen Tien Phat - Backend Software Engineer.",
    //         keywords: [
    //             "Portfolio",
    //             "Backend",
    //             "Java",
    //             "Spring Boot",
    //             "NestJS",
    //             "React",
    //             "Next.js",
    //         ],
    //     },
    // });
    await prisma.skill.createMany({
        data: [
            // Language
            {
                name: "Java",
                category: "LANGUAGE",
                order: 1,
            },
            {
                name: "JavaScript",
                category: "LANGUAGE",
                order: 2,
            },
            {
                name: "TypeScript",
                category: "LANGUAGE",
                order: 3,
            },
            {
                name: "Python",
                category: "LANGUAGE",
                order: 4,
            },
            {
                name: "Go",
                category: "LANGUAGE",
                order: 5,
            },
            {
                name: "C++",
                category: "LANGUAGE",
                order: 6,
            },
            {
                name: "HTML5",
                category: "LANGUAGE",
                order: 7,
            },
            {
                name: "CSS3",
                category: "LANGUAGE",
                order: 8,
            },


            // Backend
            {
                name: "Spring Boot",
                category: "BACKEND",
                order: 0,
            },
            {
                name: "NestJS",
                category: "BACKEND",
                order: 0,
            },
            {
                name: "JWT",
                category: "BACKEND",
                order: 10,
            },


            // Frontend
            {
                name: "React",
                category: "FRONTEND",
                order: 0,
            },
            {
                name: "Next.js",
                category: "FRONTEND",
                order: 0,
            },
            {
                name: "Tailwind CSS",
                category: "FRONTEND",
                order: 0,
            },
            {
                name: "Redux",
                category: "FRONTEND",
                order: 11,
            },


            // Mobile
            {
                name: "React Native",
                category: "MOBILE",
                order: 12,
            },
            {
                name: "Expo",
                category: "MOBILE",
                order: 13,
            },


            // Database
            {
                name: "PostgreSQL",
                category: "DATABASE",
                order: 0,
            },
            {
                name: "MongoDB",
                category: "DATABASE",
                order: 0,
            },
            {
                name: "MySQL",
                category: "DATABASE",
                order: 14,
            },
            {
                name: "Microsoft SQL Server",
                category: "DATABASE",
                order: 15,
            },


            // DevOps / Cloud
            {
                name: "Docker",
                category: "DEVOPS",
                order: 0,
            },
            {
                name: "Vercel",
                category: "CLOUD",
                order: 16,
            },
            {
                name: "Render",
                category: "CLOUD",
                order: 17,
            },


            // Tools
            {
                name: "Git",
                category: "TOOL",
                order: 0,
            },
            {
                name: "GitHub",
                category: "TOOL",
                order: 18,
            },
            {
                name: "Postman",
                category: "TOOL",
                order: 19,
            },
            {
                name: "Swagger",
                category: "TOOL",
                order: 20,
            },
            {
                name: "Jira",
                category: "TOOL",
                order: 21,
            },
            {
                name: "Trello",
                category: "TOOL",
                order: 22,
            },
            {
                name: "Figma",
                category: "TOOL",
                order: 23,
            },
            {
                name: "Canva",
                category: "TOOL",
                order: 24,
            },
            {
                name: "LaTeX",
                category: "TOOL",
                order: 25,
            },
            {
                name: "Streamlit",
                category: "TOOL",
                order: 26,
            },
        ],
        skipDuplicates: true,
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });