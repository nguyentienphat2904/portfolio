import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function CompetencyCard({
    icon: Icon,
    title,
    description,
}: Props) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="p-8">

                <Icon className="mb-6 h-6 w-6 text-primary" />

                <h3 className="mb-3 text-lg font-semibold">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

            </CardContent>
        </Card>
    );
}