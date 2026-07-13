"use client";

import Link from "next/link";
import { Award, ExternalLink, LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface CertificationCardProps {
    icon: LucideIcon;
    title: string;
    issuer: string;
    issued: string;
    description: string;
    skills: string[];
    credential?: string;
    credentialId?: string;
    certificateFile?: string;
}

export default function CertificationCard({
    icon: Icon,
    title,
    issuer,
    issued,
    description,
    skills,
    credential,
    credentialId,
    certificateFile,
}: CertificationCardProps) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="flex h-full flex-col p-8">

                {/* Header */}
                <div className="mb-6 flex items-start gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="flex-1">

                        <Badge
                            variant="tech"
                            className="mb-3"
                        >
                            Certification
                        </Badge>

                        <h3 className="text-xl font-bold leading-tight">
                            {title}
                        </h3>

                        <p className="mt-2 font-medium">
                            {issuer}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>{issued}</span>

                            {credential && (
                                <>
                                    <span>•</span>
                                    <span>{credential}</span>
                                </>
                            )}
                        </div>

                    </div>

                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-7">
                    {description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="tech"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>

                {/* Credential ID */}
                {credentialId && (
                    <p className="mt-6 text-sm text-muted-foreground">
                        Credential ID:{" "}
                        <span className="font-medium">
                            {credentialId}
                        </span>
                    </p>
                )}

                {/* Button */}
                {certificateFile && (
                    <div className="mt-auto pt-8">
                        <Dialog>
                            <DialogTrigger
                                render={
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        View Certificate
                                    </Button>
                                }
                            />

                            <DialogContent className="h-[98vh]! w-[98vw]! max-h-[98vh]! max-w-[98vw]! overflow-hidden p-0">

                                <DialogHeader className="border-b px-6 py-4">
                                    <DialogTitle>
                                        {title}
                                    </DialogTitle>
                                </DialogHeader>

                                <object
                                    data={certificateFile}
                                    type="application/pdf"
                                    className="h-[calc(98vh)] w-full"
                                >
                                    <p>
                                        Your browser cannot display PDFs.
                                        <a
                                            href={certificateFile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Open in a new tab
                                        </a>
                                    </p>
                                </object>
                            </DialogContent>
                        </Dialog>

                    </div>
                )}

            </CardContent>
        </Card>
    );
}