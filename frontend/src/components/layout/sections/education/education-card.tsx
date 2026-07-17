"use client";

import { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface EducationCardProps {
    icon: LucideIcon;
    degree: string;
    school: string;
    faculty: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    degreeFile?: string;
    transcriptFile?: string;
}

export default function EducationCard({
    icon: Icon,
    degree,
    school,
    faculty,
    period,
    location,
    description,
    highlights,
    degreeFile,
    transcriptFile
}: EducationCardProps) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="p-8">

                {/* Header */}
                <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-start">

                    <div className="flex gap-5">
                        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:flex">
                            <Icon className="h-7 w-7 text-primary" />
                        </div>

                        <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                <Badge variant="tech">
                                    HCMUT
                                </Badge>

                                <Badge variant="outline">
                                    Bachelor's Degree
                                </Badge>
                            </div>

                            <h3 className="text-2xl font-bold">
                                {degree}
                            </h3>

                            <p className="mt-2 text-lg font-medium">
                                {school}
                            </p>

                            <p className="text-muted-foreground">
                                {faculty}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span>{period}</span>
                                <span>•</span>
                                <span>{location}</span>
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-5">
                        {degreeFile && (
                            <Dialog>
                                <DialogTrigger
                                    render={
                                        <Button
                                            variant="outline"
                                            size="sm"
                                        >
                                            Certificate
                                        </Button>
                                    }
                                />

                                <DialogContent
                                    className="h-[98vh]! w-[98vw]! max-w-[98vw]! max-h-[98vh]! overflow-hidden p-0"
                                >
                                    <DialogHeader className="border-b px-6 py-4">
                                        <DialogTitle>
                                            Tempoary Certificate
                                        </DialogTitle>
                                    </DialogHeader>

                                    <object
                                        data={degreeFile}
                                        type="application/pdf"
                                        className="h-[calc(95vh)] w-full"
                                    >
                                        <p>
                                            Your browser cannot display PDFs.
                                            <a
                                                href={degreeFile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Open in a new tab
                                            </a>
                                        </p>
                                    </object>
                                </DialogContent>
                            </Dialog>
                        )}

                        {transcriptFile && (
                            <Dialog>
                                <DialogTrigger
                                    render={
                                        <Button
                                            variant="outline"
                                            size="sm"
                                        >
                                            Transcript
                                        </Button>
                                    }
                                />

                                <DialogContent
                                    className="h-[98vh]! w-[98vw]! max-w-[98vw]! max-h-[98vh]! overflow-hidden p-0"
                                >
                                    <DialogHeader className="border-b px-6 py-4">
                                        <DialogTitle>
                                            Final Transcript
                                        </DialogTitle>
                                    </DialogHeader>

                                    <object
                                        data={transcriptFile}
                                        type="application/pdf"
                                        className="h-[calc(95vh)] w-full"
                                    >
                                        <p>
                                            Your browser cannot display PDFs.
                                            <a
                                                href={transcriptFile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Open in a new tab
                                            </a>
                                        </p>
                                    </object>
                                </DialogContent>
                            </Dialog>
                        )}
                    </div>

                </div>

                {/* Description */}
                <p className="leading-7 text-muted-foreground">
                    {description}
                </p>

                {/* Highlights */}
                <div className="mt-8">

                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        Highlights
                    </h4>

                    <ul className="space-y-3">
                        {highlights.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3"
                            >
                                <span className="text-muted-foreground">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>

            </CardContent>
        </Card>
    );
}