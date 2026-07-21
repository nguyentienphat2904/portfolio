"use client";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useState, type ReactNode } from "react";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <AdminSidebar collapsed={collapsed} />

            <div className={`transition-all px-6 duration-300 ${collapsed ? "lg:ml-28" : "lg:ml-74"}`}>
                <AdminHeader
                    collapsed={collapsed}
                    onToggleSidebar={() => setCollapsed((v) => !v)}
                />

                <main className="py-12">{children}</main>
            </div>
        </div>
    );
}