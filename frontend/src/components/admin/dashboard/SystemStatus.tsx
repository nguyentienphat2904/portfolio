import { BadgeCheck } from "lucide-react";

import { InfoCard } from "../../common/InfoCard";

export function SystemStatus() {
    return (
        <InfoCard
            title="System Status"
            items={[
                {
                    label: "Environment",
                    value: "Production",
                },
                {
                    label: "Database",
                    value: (
                        <span className="flex items-center gap-2 text-green-600">
                            <BadgeCheck className="size-4" />
                            Connected
                        </span>
                    ),
                },
                {
                    label: "Version",
                    value: "v1.0.0",
                },
                {
                    label: "Last Deploy",
                    value: "2 hours ago",
                },
            ]}
        />
    );
}