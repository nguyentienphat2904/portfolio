import { Badge } from "@/components/ui/badge";
import { ProjectStatus } from "@/types/projects/types";

type Status =
    | "published"
    | "draft"
    | "archived"
    | "active"
    | "inactive";

interface Props {
    status: Status;
}

interface StatusBadgeProps {
    status: ProjectStatus;
}

const statusConfig: Record<
    ProjectStatus,
    {
        label: string;
        className: string;
    }
> = {
    [ProjectStatus.PLANNING]: {
        label: "Planning",
        className: "bg-gray-100 text-gray-700",
    },
    [ProjectStatus.DEVELOPMENT]: {
        label: "Development",
        className: "bg-blue-100 text-blue-700",
    },
    [ProjectStatus.COMPLETED]: {
        label: "Completed",
        className: "bg-green-100 text-green-700",
    },
    [ProjectStatus.ARCHIVED]: {
        label: "Archived",
        className: "bg-slate-100 text-slate-600",
    },
};

export function StatusBadge({ status }: StatusBadgeProps) {
    console.log(status);
    const config = statusConfig[status];
    return (
        <Badge
            className={config.className}
            variant="outline"
        >
            {config.label}
        </Badge>
    );
}