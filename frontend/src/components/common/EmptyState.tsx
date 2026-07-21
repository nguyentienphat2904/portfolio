import { LucideIcon, Inbox } from "lucide-react";

interface Props {
    title: string;
    description?: string;
    icon?: LucideIcon;
    action?: React.ReactNode;
}

export function EmptyState({
    title,
    description,
    icon: Icon = Inbox,
    action,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 py-20 text-center dark:border-slate-700">
            <Icon className="mb-4 size-10 text-slate-400" />

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            {description && (
                <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
                    {description}
                </p>
            )}

            {action && (
                <div className="mt-6">
                    {action}
                </div>
            )}
        </div>
    );
}