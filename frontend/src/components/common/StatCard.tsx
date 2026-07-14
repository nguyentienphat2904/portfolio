import { LucideIcon } from "lucide-react";

import { AdminCard } from "./AdminCard";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
}

export function StatCard({
    title,
    value,
    icon: Icon,
    trend,
}: StatCardProps) {
    return (
        <AdminCard className="p-0">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {value}
                    </h3>

                    {trend && (
                        <p className="mt-2 text-sm text-blue-600">
                            {trend}
                        </p>
                    )}
                </div>

                <div className="rounded-2xl bg-blue-600/10 p-3 text-blue-600">
                    <Icon className="size-6" />
                </div>
            </div>
        </AdminCard>
    );
}