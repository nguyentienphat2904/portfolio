import { ReactNode } from "react";

export default function LoginLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div
            className="
                min-h-screen
                relative
                overflow-hidden
                bg-slate-50
                dark:bg-[#020617]
            "
        >
            {/* Background decoration */}
            <div
                className="
                    absolute
                    -top-40
                    -left-40
                    h-96
                    w-96
                    rounded-full
                    bg-blue-500/20
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    -bottom-40
                    -right-40
                    h-96
                    w-96
                    rounded-full
                    bg-cyan-500/20
                    blur-3xl
                "
            />


            {/* Main content */}
            <main
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    px-6
                "
            >
                {children}
            </main>
        </div>
    );
}