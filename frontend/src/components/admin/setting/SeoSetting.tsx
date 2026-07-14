"use client";

import { AdminCard } from "@/components/common/AdminCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SeoSettings() {
    return (
        <AdminCard title="SEO">
            <div className="space-y-5">
                <div className="space-y-2">
                    <Label>Site Title</Label>
                    <Input />
                </div>

                <div className="space-y-2">
                    <Label>Meta Description</Label>
                    <Textarea rows={4} />
                </div>

                <div className="space-y-2">
                    <Label>Keywords</Label>
                    <Input placeholder="portfolio, backend, java, react" />
                </div>
            </div>
        </AdminCard>
    );
}