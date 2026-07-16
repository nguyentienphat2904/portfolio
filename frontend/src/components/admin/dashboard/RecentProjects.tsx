import { ProjectStatus } from "@/types/projects/types";
import { AdminCard } from "../../common/AdminCard";
import { StatusBadge } from "../../common/StatusBadge";

const projects = [
    {
        name: "Portfolio",
        updated: "2 hours ago",
        status: ProjectStatus.COMPLETED,
    },
    {
        name: "FHIR Converter",
        updated: "Yesterday",
        status: ProjectStatus.COMPLETED,
    },
    {
        name: "AI OCR",
        updated: "3 days ago",
        status: ProjectStatus.DEVELOPMENT,
    },
];

export function RecentProjects() {
    return (
        <AdminCard
            title="Recent Projects"
            description="Recently updated projects."
        >
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                    >
                        <div>
                            <h3 className="font-medium">
                                {project.name}
                            </h3>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Updated {project.updated}
                            </p>
                        </div>

                        <StatusBadge
                            status={project.status as any}
                        />
                    </div>
                ))}
            </div>
        </AdminCard>
    );
}