"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectForm } from "./project-form";
import { ProjectFormValues, projectSchema, DEFAULT_PROJECT_VALUES } from "./project-schema";
import { useCreateProject } from "@/hooks/use-create-project";
import { useForm } from "react-hook-form";

export function ProjectCreateDialog() {
    const [open, setOpen] = useState(false);
    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: DEFAULT_PROJECT_VALUES,
    });

    const mutation = useCreateProject();

    const onSubmit = form.handleSubmit(async (values) => {
        await mutation.mutateAsync(values);

        toast.success("Project created.");

        form.reset();

        setOpen(false);
    });

    return (
        <Dialog
            open={open}
            onOpenChange={(nextOpen) => {
                if (mutation.isPending) return;

                setOpen(nextOpen);

                if (!nextOpen) {
                    form.reset(DEFAULT_PROJECT_VALUES);
                }
            }}
        >
            <DialogTrigger render={
                <Button>
                    <Plus className="mr-2 size-4" />
                    New
                </Button>
            } />

            <DialogContent className="sm:max-w-6xl">
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>

                    <DialogDescription>
                        Fill in the information below to create a new portfolio
                        project.
                    </DialogDescription>
                </DialogHeader>

                <ProjectForm
                    form={form}
                />
                <DialogFooter>

                    <Button
                        variant="outline"
                        disabled={mutation.isPending}
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        disabled={mutation.isPending}
                        onClick={onSubmit}
                    >
                        {mutation.isPending
                            ? "Creating..."
                            : "Create"}
                    </Button>

                </DialogFooter>
            </DialogContent>

        </Dialog>
    );
}