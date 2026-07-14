"use client";

import { AdminCard } from "@/components/common/AdminCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SocialSettings() {
    return (
        <AdminCard title="Social Links">
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>GitHub</Label>
                    <Input />
                </div>

                <div className="space-y-2">
                    <Label>LinkedIn</Label>
                    <Input />
                </div>

                <div className="space-y-2">
                    <Label>Facebook</Label>
                    <Input />
                </div>

                <div className="space-y-2">
                    <Label>X (Twitter)</Label>
                    <Input />
                </div>

                <div className="space-y-2">
                    <Label>Website</Label>
                    <Input />
                </div>
            </div>
        </AdminCard>
    );
}