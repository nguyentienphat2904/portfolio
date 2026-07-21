import {
    Award,
    Briefcase,
    FolderKanban,
    Wrench,
} from "lucide-react";

import { StatCard } from "../../common/StatCard";

export function DashboardStats() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Projects"
                value={8}
                icon={FolderKanban}
            />

            <StatCard
                title="Skills"
                value={26}
                icon={Wrench}
            />

            <StatCard
                title="Experiences"
                value={4}
                icon={Briefcase}
            />

            <StatCard
                title="Certificates"
                value={6}
                icon={Award}
            />
        </div>
    );
}