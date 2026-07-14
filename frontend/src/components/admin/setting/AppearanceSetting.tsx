"use client";

import { AdminCard } from "@/components/common/AdminCard";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function AppearanceSettings() {
    return (
        <AdminCard title="Appearance">
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div>
                        <Label>Enable Animations</Label>

                        <p className="text-sm text-slate-500">
                            Show page transition and motion effects.
                        </p>
                    </div>

                    <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <Label>Show Background Particles</Label>

                        <p className="text-sm text-slate-500">
                            Display animated particles on the landing page.
                        </p>
                    </div>

                    <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <Label>Enable Dark Theme</Label>

                        <p className="text-sm text-slate-500">
                            Allow visitors to switch between light and dark modes.
                        </p>
                    </div>

                    <Switch defaultChecked />
                </div>
            </div>
        </AdminCard>
    );
}