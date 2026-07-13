import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
}

export default function SkillCategoryCard({
    title,
    description,
    icon: Icon,
    skills,
}: Props) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="p-8">

                <Icon className="mb-6 h-6 w-6 text-primary" />

                <h3 className="text-xl font-semibold">
                    {title}
                </h3>

                <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="tech"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}