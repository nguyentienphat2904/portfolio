"use client";

import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { slugify } from "@/lib/slug";

import {
    projectSchema,
    ProjectFormValues,
} from "./project-schema";
import { ProjectStatus } from "@/types/projects/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";
import { RequiredLabel } from "@/components/common/RequiredLabel";

interface Props {
    form: UseFormReturn<ProjectFormValues>;
}

export function ProjectForm({
    form
}: Props) {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = form;

    const slugEdited = useRef(false);
    const titleRegister = register("title");
    const slugRegister = register("slug");

    return (
        <div
            className="space-y-10"
        >
            <FieldGroup>

                <div className="grid grid-cols-2 gap-4">

                    <Field data-invalid={!!errors.title}>
                        <RequiredLabel required>

                            Title
                        </RequiredLabel>

                        <FieldContent>
                            <Input

                                {...titleRegister}
                                onChange={(e) => {
                                    titleRegister.onChange(e);

                                    if (!slugEdited.current) {
                                        setValue("slug", slugify(e.target.value), {
                                            shouldValidate: true,
                                        });
                                    }
                                }}
                            />

                            <FieldError
                                errors={[errors.title]}
                            />
                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.slug}>
                        <RequiredLabel required>

                            Slug
                        </RequiredLabel>

                        <FieldContent>
                            <Input
                                {...slugRegister}
                                onChange={(e) => {
                                    slugEdited.current = e.target.value.trim().length > 0;
                                    slugRegister.onChange(e);
                                }}
                            />

                            <FieldError
                                errors={[errors.slug]}
                            />
                        </FieldContent>
                    </Field>

                </div>

                <Field data-invalid={!!errors.description}>
                    <RequiredLabel required>

                        Description
                    </RequiredLabel>

                    <FieldContent>

                        <Textarea
                            rows={3}
                            {...register("description")}
                        />

                        <FieldError
                            errors={[errors.description]}
                        />

                    </FieldContent>
                </Field>

                <div className="grid grid-cols-2 gap-4">

                    <Field data-invalid={!!errors.githubUrl}>
                        <RequiredLabel required>

                            Github URL
                        </RequiredLabel>

                        <FieldContent>

                            <Input
                                {...register("githubUrl")}
                            />

                            <FieldError
                                errors={[errors.githubUrl]}
                            />

                        </FieldContent>
                    </Field>

                    <Field data-invalid={!!errors.liveUrl}>
                        <RequiredLabel required>

                            Live URL
                        </RequiredLabel>

                        <FieldContent>

                            <Input
                                {...register("liveUrl")}
                            />

                            <FieldError
                                errors={[errors.liveUrl]}
                            />

                        </FieldContent>
                    </Field>

                </div>

                <div className="grid grid-cols-2 gap-4">

                    <Field>
                        <RequiredLabel required>

                            Start Date
                        </RequiredLabel>

                        <FieldContent>

                            <Input
                                type="date"
                                {...register("startDate")}
                            />

                        </FieldContent>
                    </Field>

                    <Field>
                        <RequiredLabel required>

                            End Date
                        </RequiredLabel>

                        <FieldContent>

                            <Input
                                type="date"
                                {...register("endDate")}
                            />

                        </FieldContent>
                    </Field>

                </div>

                <Field>
                    <RequiredLabel required>

                        Content
                    </RequiredLabel>

                    <FieldContent>

                        <Textarea
                            rows={8}
                            {...register("content")}
                        />

                    </FieldContent>
                </Field>

                <div className="flex gap-8">

                    <label className="flex items-center gap-2">

                        <Controller
                            control={form.control}
                            name="featured"
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />

                        Featured

                    </label>

                    <label className="flex items-center gap-2">

                        <Controller
                            control={form.control}
                            name="pinned"
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />

                        Pinned

                    </label>

                </div>

                <Field>

                    <RequiredLabel required>

                        Status
                    </RequiredLabel>

                    <FieldContent>

                        <Select
                            value={watch("status")}
                            onValueChange={(value) =>
                                setValue(
                                    "status",
                                    value as ProjectStatus
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>

                                <SelectItem value={ProjectStatus.PLANNING}>
                                    Planning
                                </SelectItem>

                                <SelectItem value={ProjectStatus.DEVELOPMENT}>
                                    Development
                                </SelectItem>

                                <SelectItem value={ProjectStatus.COMPLETED}>
                                    Completed
                                </SelectItem>

                                <SelectItem value={ProjectStatus.ARCHIVED}>
                                    Archived
                                </SelectItem>

                            </SelectContent>
                        </Select>

                    </FieldContent>

                </Field>

            </FieldGroup>
        </div>
    );
}