import { ProjectsTable } from "@/components/admin/project/ProjectTable";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Projects"
                description="Manage your portfolio projects."
                action={
                    <Button variant="primary">
                        <Plus className="mr-2 size-4" />
                        New
                    </Button>
                }
            />

            <ProjectsTable />
        </div>
    );
}