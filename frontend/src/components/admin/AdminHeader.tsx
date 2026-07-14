"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    LogOut,
    Moon,
    PanelLeftClose,
    PanelLeftOpen,
    Search,
    Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

interface AdminHeaderProps {
    collapsed: boolean;
    onToggleSidebar: () => void;
}

export function AdminHeader({
    collapsed,
    onToggleSidebar,
}: AdminHeaderProps) {
    const pathname = usePathname();

    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg"
                aria-label="Toggle theme"
            >
                <div className="h-4 w-4" />
            </Button>
        )
    }

    const isDark = mounted && resolvedTheme === "dark";
    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    const segments = pathname
        .split("/")
        .filter(Boolean)
        .slice(1);

    return (
        <header className="sticky top-6 z-50">
            <div className="flex w-full items-center justify-between gap-2
                    rounded-2xl
                    border
                    border-slate-200/50
                    dark:border-primary/20
                    bg-white/50
                    dark:bg-[#04294F]/50
                    p-4
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-300"
            >
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onToggleSidebar}
                    >
                        {collapsed ? (
                            <PanelLeftOpen className="size-5" />
                        ) : (
                            <PanelLeftClose className="size-5" />
                        )}
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                    >
                        {mounted &&
                            (isDark ? (
                                <Moon className="size-5" />
                            ) : (
                                <Sun className="size-5" />
                            ))}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            render={
                                <Button
                                    variant="ghost"
                                    className="gap-2 rounded-xl px-3"
                                >
                                    <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                                        NP
                                    </div>

                                    <ChevronDown className="size-4" />
                                </Button>
                            }
                        />

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem variant="destructive" className="cursor-pointer flex items-center justify-between">
                                Logout
                                <LogOut />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}