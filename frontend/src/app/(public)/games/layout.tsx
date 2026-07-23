"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { UnifrakturCook } from "next/font/google";

export const unifraktur = UnifrakturCook({
    subsets: ["latin"],
    weight: "700",
});

export default function GamesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isGamesHome = pathname === "/games";

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
                <header className="mb-8 flex items-center justify-between">
                    <Link
                        href={isGamesHome ? "/" : "/games"}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {isGamesHome ? "Portfolio" : "Games"}
                    </Link>

                    <Link
                        href="/games"
                        className={`flex items-center gap-2 text-5xl font-semibold ${unifraktur.className}`}
                    >
                        <span className="rounded-lg bg-black px-2.5 py-1 text-3xl font-bold tracking-tight text-white dark:bg-white dark:text-black">
                            ntphat
                        </span>
                        <span>Games</span>
                    </Link>

                    <div className="w-20" />
                </header>

                <div className="flex-1">{children}</div>
            </div>
        </main>
    );
}