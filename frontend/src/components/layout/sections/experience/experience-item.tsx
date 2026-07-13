import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ExperienceItemProps {
    icon: LucideIcon;
    type: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlights: string[];
    technologies: string[];
}

export default function ExperienceItem({
    icon: Icon,
    type,
    title,
    company,
    location,
    period,
    description,
    highlights,
    technologies,
}: ExperienceItemProps) {
    return (
        <div className="relative pl-12">

            {/* timeline */}
            <div className="absolute left-5 top-10 h-full w-px bg-border" />

            {/* dot */}
            <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                <Icon className="h-5 w-5 text-primary" />
            </div>

            <Card className="rounded-3xl shadow-none">
                <CardContent className="p-8">

                    <div className="mb-4 flex items-center justify-between gap-4">

                        <div>
                            <p className="text-sm uppercase tracking-[0.15em] text-primary">
                                {type}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {title}
                            </h3>

                            <p className="mt-1 text-muted-foreground">
                                {company} • {location}
                            </p>
                        </div>

                        <Badge variant="outline">
                            {period}
                        </Badge>

                    </div>

                    <p className="leading-relaxed text-muted-foreground">
                        {description}
                    </p>

                    <ul className="mt-6 space-y-2">
                        {highlights.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3 text-sm text-muted-foreground"
                            >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant="tech"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                </CardContent>
            </Card>

        </div>
    );
}