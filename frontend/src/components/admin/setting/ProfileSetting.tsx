"use client";

import { AdminCard } from "@/components/common/AdminCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProfileSettings() {
    return (
        <AdminCard title="Profile">
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Nguyen Tien Phat" />
                </div>

                <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input defaultValue="Backend Developer" />
                </div>

                <div className="space-y-2">
                    <Label>Location</Label>
                    <Input defaultValue="Ho Chi Minh City" />
                </div>

                <div className="space-y-2">
                    <Label>Resume URL</Label>
                    <Input placeholder="https://..." />
                </div>
            </div>
        </AdminCard>
    );
}