import { DashboardStats } from "@/components/admin/dashboard/DashboardStats";
import { QuickActions } from "@/components/admin/dashboard/QuickAction";
import { RecentProjects } from "@/components/admin/dashboard/RecentProjects";
import { SystemStatus } from "@/components/admin/dashboard/SystemStatus";
import { WelcomeCard } from "@/components/admin/dashboard/WelcomeCard";


export default function AdminPage() {
    return (
        <div className="space-y-6">
            <WelcomeCard />

            <DashboardStats />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RecentProjects />
                </div>

                <SystemStatus />
            </div>

            <QuickActions />
        </div>
    );
}