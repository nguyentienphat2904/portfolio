import axios from "axios";

import { getAccessToken } from "@/lib/auth";
import { ProjectFormValues } from "@/components/admin/project/project-schema";

export async function createProject(
    data: ProjectFormValues
) {
    const token = getAccessToken();

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
}