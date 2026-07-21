"use client";
import { Award } from "lucide-react";

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
import { Certification } from "@/types/certifications/types";

interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({
    certification,
}: CertificationCardProps) {
    return (
        <Card className="rounded-3xl border-border/60 shadow-none transition-all hover:border-primary/20">
            <CardContent className="flex h-full flex-col p-8">

                {/* Header */}
                <div className="mb-6 flex items-start gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Award className="h-7 w-7 text-primary" />
                    </div>

                    <div className="flex-1">

                        <Badge
                            variant="tech"
                            className="mb-3 uppercase"
                        >
                            {certification.type}
                        </Badge>

                        <h3 className="text-xl font-bold leading-tight">
                            {certification.name}
                        </h3>

                        <p className="mt-2 font-medium">
                            {certification.issuer}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>
                                {certification.issueDate
                                    ? new Date(certification.issueDate).getFullYear()
                                    : ""}
                            </span>

                            {certification.credentialId && (
                                <>
                                    <span>-</span>
                                    <span>{certification.credentialId}</span>
                                </>
                            )}
                        </div>

                    </div>

                </div>

                {/* Button */}
                {certification.imageId && (
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
                                        {certification.image?.fileName}
                                    </DialogTitle>
                                </DialogHeader>

                                {certification.image ? (
                                    <object
                                        data={certification.image.url}
                                        type="application/pdf"
                                        className="h-[calc(98vh-73px)] w-full"
                                    >
                                        <p className="p-6">
                                            Your browser cannot display PDFs.{" "}
                                            <a
                                                href={certification.image.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                Open in a new tab
                                            </a>
                                        </p>
                                    </object>
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        Certificate file not found.
                                    </div>
                                )}
                            </DialogContent>
                        </Dialog>

                    </div>
                )}

            </CardContent>
        </Card>
    );
}