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
    await prisma.profile.upsert({
        where: {
            id: "default-profile",
        },
        update: {},
        create: {
            id: "default-profile",
            name: "Nguyen Tien Phat",
            title: "Software Engineer",
            bio: "Fourth-year Computer Science student at Ho Chi Minh City University of Technology. Passionate about backend development, system design, and cloud-native applications.",
            location: "Ho Chi Minh City, Vietnam",
            email: "nguyentienphatgl@gmail.com",
        },
    });

    await prisma.siteSetting.upsert({
        where: {
            id: "default-site-setting",
        },
        update: {},
        create: {
            id: "default-site-setting",
            siteName: "Nguyen Tien Phat Portfolio",
            description:
                "Portfolio of Nguyen Tien Phat - Backend Software Engineer.",
            keywords: [
                "Portfolio",
                "Backend",
                "Java",
                "Spring Boot",
                "NestJS",
                "React",
                "Next.js",
            ],
        },
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