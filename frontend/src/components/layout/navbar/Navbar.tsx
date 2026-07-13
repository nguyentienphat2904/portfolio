"use client";

import Link from "next/link";
import { LayoutDashboard, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme-toggle";
import NavLink from "./NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
    const activeSection = useActiveSection(sectionIds);

    return (
        <header className="sticky top-4 z-50 px-4">
            <div
                className="
                    mx-auto
                    flex
                    h-20
                    max-w-7xl
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-slate-200/50
                    dark:border-primary/20
                    bg-white/50
                    dark:bg-[#04294F]/50
                    px-8
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-300
                "
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity"
                >
                    ntphat
                </Link>

                {/* Desktop */}
                <nav className="hidden items-center gap-10 md:flex">
                    {NAV_ITEMS.map((item) => {
                        const targetId = item.href.replace('#', '');
                        return (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                isActive={activeSection === targetId}
                                layoutId="desktopActiveNavIndicator"
                            >
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-2">

                    <ThemeToggle />

                    {/* Mobile */}
                    <Sheet>
                        <SheetTrigger
                            render={
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="md:hidden text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            }
                        />

                        <SheetContent side="right">
                            <nav className="mt-10 px-6 flex flex-col gap-6">
                                {NAV_ITEMS.map((item) => {
                                    const targetId = item.href.replace('#', '');
                                    return (
                                        <NavLink
                                            key={item.href}
                                            href={item.href}
                                            isActive={activeSection === targetId}
                                            layoutId="mobileActiveNavIndicator"
                                        >
                                            {item.label}
                                        </NavLink>
                                    );
                                })}

                                {/* <Button
                                    render={
                                        <Link href="/admin">
                                            <LayoutDashboard className="mr-2 h-4 w-4" />
                                            Admin Dashboard
                                        </Link>
                                    }
                                    className="mt-4"
                                /> */}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}