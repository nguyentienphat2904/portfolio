import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/types/experience/types";
import { Laptop } from "lucide-react";

interface Props {
    experience: Experience;
}

export default function ExperienceItem({
    experience,
}: Props) {
    return (
        <div className="relative pl-12">

            {/* timeline */}
            <div className="absolute left-5 top-10 h-full w-px bg-border" />

            {/* dot */}
            <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                <Laptop className="h-5 w-5 text-primary" />
            </div>

            <Card className="rounded-3xl shadow-none">
                <CardContent className="p-8">

                    <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">

                        <div>
                            <p className="text-sm uppercase tracking-[0.15em] text-primary">
                                {experience.employment.replace("_", " ")}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {experience.position}
                            </h3>

                            <p className="mt-1 text-muted-foreground">
                                {experience.company} - {experience.location}
                            </p>
                        </div>

                        <Badge variant="outline">
                            {new Date(experience.startDate).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                            })}
                            {" — "}
                            {experience.current
                                ? "Present"
                                : new Date(experience.endDate!).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                })}
                        </Badge>

                    </div>

                    <p className="leading-relaxed text-muted-foreground">
                        {experience.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {experience.skills.map(({ skill }) => (
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

        </div>
    );
}