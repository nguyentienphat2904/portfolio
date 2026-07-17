import { ExperienceTable } from "@/components/admin/experiences/ExperienceTable";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ExperiencesPage() {
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Experiences"
                description="Manage your professional experiences."
                action={
                    <Button variant="primary">
                        <Plus className="mr-2 size-4" />
                        New
                    </Button>
                }
            />
            <ExperienceTable />
        </div>
    );
}