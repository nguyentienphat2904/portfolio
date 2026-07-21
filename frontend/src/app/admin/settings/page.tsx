import { AppearanceSettings } from "@/components/admin/setting/AppearanceSetting";
import { GeneralSettings } from "@/components/admin/setting/GeneralSetting";
import { ProfileSettings } from "@/components/admin/setting/ProfileSetting";
import { SeoSettings } from "@/components/admin/setting/SeoSetting";
import { SocialSettings } from "@/components/admin/setting/SocialSetting";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Settings"
                description="Manage portfolio configuration."
            />

            <GeneralSettings />

            <ProfileSettings />

            <SocialSettings />

            <SeoSettings />

            <AppearanceSettings />
        </div>
    );
}