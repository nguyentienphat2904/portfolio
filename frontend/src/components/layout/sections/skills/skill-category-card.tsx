import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Skill } from "@/types/skills/types";
import { LucideIcon } from "lucide-react";

interface Props {
    title: string;
    description: string;
    skills: Skill[];
}

export default function SkillCategoryCard({
    title,
    description,
    skills,
}: Props) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="p-8">

                <h3 className="text-xl font-semibold">
                    {title}
                </h3>

                <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge
                            key={skill.id}
                            variant="tech"
                        >
                            {skill.name}
                        </Badge>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}