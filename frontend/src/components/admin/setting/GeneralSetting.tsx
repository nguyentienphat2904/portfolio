"use client";

import { AdminCard } from "@/components/common/AdminCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function GeneralSettings() {
    return (
        <AdminCard title="General">
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Portfolio Name</Label>
                    <Input defaultValue="Nguyen Tien Phat" />
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="example@gmail.com" />
                </div>

                <div className="md:col-span-2 space-y-2">
                    <Label>Description</Label>
                    <Textarea
                        rows={4}
                        defaultValue="Backend Developer passionate about building scalable systems."
                    />
                </div>
            </div>
        </AdminCard>
    );
}