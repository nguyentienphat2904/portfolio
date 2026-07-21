import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SkillsTable } from "@/components/admin/skill/SkillTable";


export default function SkillPage() {
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Skills"
                description="Manage technical skills."
                action={
                    <Button variant="primary">
                        <Plus className="mr-2 size-4" />
                        New
                    </Button>
                }
            />

            <SkillsTable />
        </div>
    );
}