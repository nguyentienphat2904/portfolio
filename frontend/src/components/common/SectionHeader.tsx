import { ReactNode } from "react";

interface Props {
    title: string;
    description?: string;
    action?: ReactNode;
}

export function SectionHeader({
    title,
    description,
    action,
}: Props) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>

                {description && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                )}
            </div>

            {action}
        </div>
    );
}