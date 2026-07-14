import { Badge } from "@/components/ui/badge";

type Status =
    | "published"
    | "draft"
    | "archived"
    | "active"
    | "inactive";

interface Props {
    status: Status;
}

const styles: Record<Status, string> = {
    published: "bg-green-500/10 text-green-600",
    draft: "bg-yellow-500/10 text-yellow-600",
    archived: "bg-slate-500/10 text-slate-500",
    active: "bg-blue-500/10 text-blue-600",
    inactive: "bg-red-500/10 text-red-600",
};

export function StatusBadge({ status }: Props) {
    return (
        <Badge
            className={styles[status]}
            variant="outline"
        >
            {status}
        </Badge>
    );
}