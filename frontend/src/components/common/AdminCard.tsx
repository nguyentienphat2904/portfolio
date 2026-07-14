import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AdminCardProps {
    title?: string;
    description?: string;
    className?: string;
    children: ReactNode;
    headerRight?: ReactNode;
}

export function AdminCard({
    title,
    description,
    headerRight,
    children,
    className,
}: AdminCardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl border border-slate-200/50 bg-white/50 shadow-md backdrop-blur-xl dark:border-primary/20 dark:bg-[#04294F]/50",
                className
            )}
        >
            {(title || description || headerRight) && (
                <div className="flex items-start justify-between border-b border-slate-200/50 p-6 dark:border-primary/20">
                    <div>
                        {title && (
                            <h2 className="text-lg font-semibold">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {description}
                            </p>
                        )}
                    </div>

                    {headerRight}
                </div>
            )}

            <div className="p-6">{children}</div>
        </div>
    );
}