import { ProjectStatus } from "@/types/projects/types";
import { z } from "zod";

export const projectSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(200),

    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug can only contain lowercase letters, numbers and hyphens"
        ),

    description: z
        .string()
        .trim()
        .max(1000)
        .optional(),

    githubUrl: z
        .string()
        .trim()
        .url("Invalid Github URL")
        .or(z.literal(""))
        .optional(),

    liveUrl: z
        .string()
        .trim()
        .url("Invalid Live URL")
        .or(z.literal(""))
        .optional(),

    featured: z.boolean(),

    pinned: z.boolean(),

    status: z.nativeEnum(ProjectStatus),

    startDate: z.string().optional(),

    endDate: z.string().optional(),

    content: z.string().trim(),

    thumbnailId: z.string().optional(),

    categoryIds: z.array(z.string()),

    skillIds: z.array(z.string()),
});

export const DEFAULT_PROJECT_VALUES: ProjectFormValues = {
    title: "",
    slug: "",
    description: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    pinned: false,
    status: ProjectStatus.PLANNING,
    startDate: "",
    endDate: "",
    content: "",
    thumbnailId: "",
    categoryIds: [],
    skillIds: [],
};

export type ProjectFormValues = z.infer<typeof projectSchema>;