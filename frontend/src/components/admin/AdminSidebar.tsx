"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FolderKanban,
    Home,
    Settings,
    Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: Home,
    },
    {
        title: "Projects",
        href: "/admin/projects",
        icon: FolderKanban,
    },
    {
        title: "Skills",
        href: "/admin/skills",
        icon: Wrench,
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

interface AdminSidebarProps {
    collapsed: boolean;
}

export function AdminSidebar({ collapsed }: AdminSidebarProps) {
    const pathname = usePathname();
    return (
        <aside className="hidden lg:block">
            <div
                className={cn(
                    "fixed left-6 top-6 bottom-6 transition-all duration-300",
                    collapsed ? "w-20" : "w-64"
                )}
            >
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border
                    border-slate-200/50
                    dark:border-primary/20
                    bg-white/50
                    dark:bg-[#04294F]/50 px-2 backdrop-blur-xl shadow-md">
                    {/* Logo */}
                    <div className="border-b px-6 py-6">
                        {collapsed ? (
                            <span className="text-xl font-bold">P</span>
                        ) : (
                            <>
                                <h1 className="text-xl font-bold">Portfolio</h1>
                                <p className="text-sm text-slate-500">
                                    Admin Panel
                                </p>
                            </>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2 p-3">
                        {items.map((item) => {
                            const active = item.href === "/admin"
                                ? pathname === "/admin"
                                : pathname === item.href || pathname.startsWith(item.href + "/");

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center transition-all duration-200",
                                        collapsed
                                            ? "h-10 w-10 justify-center rounded-full"
                                            : "gap-3 rounded-2xl px-4 py-3",
                                        active
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                                    )}
                                >
                                    <item.icon className="size-5 shrink-0" />

                                    {!collapsed && (
                                        <span className="font-medium">
                                            {item.title}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    {!collapsed && (
                        <div className="border-t border-slate-200/60 py-3 dark:border-slate-800/60">
                            <div className="rounded-2xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
                                <p className="font-medium">Nguyen Tien Phat</p>
                                <p className="text-slate-500 dark:text-slate-400">
                                    Administrator
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}