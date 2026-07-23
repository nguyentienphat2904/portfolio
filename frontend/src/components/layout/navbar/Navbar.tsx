"use client";

import Link from "next/link";
import { ChevronDown, Gamepad2, LayoutDashboard, Menu, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle, useThemeToggle } from "@/components/theme-toggle";
import NavLink from "./NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const { isDark, toggleTheme } = useThemeToggle();

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
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            render={
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </Button>
                            }
                        />
                        <DropdownMenuContent align="end" className="w-fit">
                            <DropdownMenuGroup>

                                <DropdownMenuItem
                                    onClick={toggleTheme}
                                    className="cursor-pointer flex items-center justify-between"
                                >
                                    <span>{isDark ? "Light mode" : "Dark mode"}</span>

                                    <div className="relative flex h-4 w-4 items-center justify-center">
                                        <Sun
                                            className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
                                        />
                                        <Moon
                                            className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
                                        />
                                    </div>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    className="cursor-pointer flex items-center justify-between"
                                    onClick={() => router.push("/games")}
                                >
                                    <span>Games</span>
                                    <Gamepad2 className="h-4 w-4" />
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem
                                    className="cursor-pointer flex items-center justify-between"
                                    onClick={() => router.push('/login')}
                                >
                                    <span>Admin</span>
                                    <LayoutDashboard className="h-4 w-4" />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

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
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}