import Link from "next/link";
import {
    Award,
    Briefcase,
    FolderPlus,
    Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AdminCard } from "../../common/AdminCard";

const actions = [
    {
        label: "New Project",
        href: "/admin/projects/new",
        icon: FolderPlus,
    },
    {
        label: "Add Skill",
        href: "/admin/skills/new",
        icon: Wrench,
    },
    {
        label: "Experience",
        href: "/admin/experiences/new",
        icon: Briefcase,
    },
    {
        label: "Certificate",
        href: "/admin/certificates/new",
        icon: Award,
    },
];

export function QuickActions() {
    return (
        <AdminCard title="Quick Actions">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {actions.map((action) => (
                    <Button
                        nativeButton={false}
                        key={action.label}
                        variant="outline"
                        render={
                            <Link href={action.href}>
                                <action.icon className="mr-2 size-4" />
                                {action.label}
                            </Link>
                        }
                    />
                ))}
            </div>
        </AdminCard>
    );
}