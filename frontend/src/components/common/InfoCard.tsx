import { AdminCard } from "./AdminCard";

interface Item {
    label: string;
    value: React.ReactNode;
}

interface Props {
    title: string;
    items: Item[];
}

export function InfoCard({
    title,
    items,
}: Props) {
    return (
        <AdminCard title={title}>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between"
                    >
                        <span className="text-slate-500 dark:text-slate-400">
                            {item.label}
                        </span>

                        <span className="font-medium">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </AdminCard>
    );
}