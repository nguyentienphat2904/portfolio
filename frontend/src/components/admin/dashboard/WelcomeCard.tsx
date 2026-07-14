import { MoonStar, Sparkles, Sun, Sunrise } from "lucide-react";

import { AdminCard } from "../../common/AdminCard";

export function WelcomeCard() {
    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good morning"
            : hour < 18
                ? "Good afternoon"
                : "Good evening";

    const GreetingIcon =
        hour < 12
            ? Sunrise
            : hour < 18
                ? Sun
                : MoonStar;

    return (
        <AdminCard className="overflow-hidden">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <GreetingIcon className="size-4 text-amber-500" />
                        <span className="text-sm font-medium">{greeting}</span>
                    </div>

                    <h1 className="mt-2 text-3xl font-bold">
                        Nguyen Tien Phat
                    </h1>

                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                        Welcome back to your portfolio dashboard.
                    </p>
                </div>
            </div>
        </AdminCard>
    );
}