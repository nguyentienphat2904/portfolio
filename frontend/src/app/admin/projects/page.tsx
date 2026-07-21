import { ProjectCreateDialog } from "@/components/admin/project/project-create-dialog";
import { ProjectsTable } from "@/components/admin/project/ProjectTable";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Projects"
                description="Manage your portfolio projects."
                action={<ProjectCreateDialog />}
            />

            <ProjectsTable />
        </div>
    );
}