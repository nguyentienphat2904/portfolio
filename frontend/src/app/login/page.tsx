"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminLoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            router.push("/admin");
            router.refresh();

        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Login failed"
            );
        } finally {
            setLoading(false);
        }
    }


    return (
        <main
            className="
            min-h-screen
            flex
            items-center
            justify-center
            dark:bg-[#020617]
            p-6
        "
        >

            <div
                className="
                w-full
                max-w-5xl
                min-h-155
                overflow-hidden
                rounded-3xl
                shadow-2xl
                border
                border-slate-200
                dark:border-white/10
                grid
                lg:grid-cols-2
            "
            >

                {/* LEFT BRAND */}
                <section
                    className="
                    relative
                    hidden
                    lg:flex
                    flex-col
                    justify-between
                    overflow-hidden
                    bg-[#06182d]
                    p-10
                    text-white
                "
                >

                    {/* background glow */}
                    <div
                        className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.35),transparent_40%)]
                    "
                    />


                    <div className="relative z-10">

                        {/* Logo */}
                        <div
                            className="
                            text-xl
                            font-bold
                            tracking-tight
                        "
                        >
                            <span className="text-blue-400">
                                Phat
                            </span>
                            Portfolio
                        </div>


                        <h1
                            className="
                            mt-16
                            text-5xl
                            font-bold
                            leading-tight
                        "
                        >
                            Build.
                            <br />
                            Manage.
                            <br />
                            Showcase.
                        </h1>


                        <p
                            className="
                            mt-6
                            max-w-sm
                            text-slate-300
                            leading-relaxed
                        "
                        >
                            Personal portfolio management
                            platform for publishing projects,
                            articles and technical achievements.
                        </p>


                        <div
                            className="
                            mt-8
                            flex
                            gap-2
                        "
                        >
                            {
                                [
                                    "Next.js",
                                    "NestJS",
                                    "Prisma"
                                ].map(item => (
                                    <span
                                        key={item}
                                        className="
                                        rounded-full
                                        bg-white/10
                                        px-4
                                        py-1.5
                                        text-sm
                                        backdrop-blur
                                    "
                                    >
                                        {item}
                                    </span>
                                ))
                            }
                        </div>

                    </div>


                    <div
                        className="
                        relative
                        z-10
                        text-sm
                        text-slate-400
                    "
                    >
                        © 2026 Nguyen Tien Phat
                    </div>


                </section>



                {/* RIGHT FORM */}
                <section
                    className="
                    bg-white
                    dark:bg-[#04294F]
                    flex
                    items-center
                    justify-center
                    p-10
                    relative
                "
                >

                    <div
                        className="
                        absolute
                        top-6
                        right-6
                    "
                    >
                        <ThemeToggle />
                    </div>


                    <div
                        className="
                        w-full
                        max-w-sm
                    "
                    >

                        <h2
                            className="
                            text-3xl
                            font-bold
                            text-slate-900
                            dark:text-white
                        "
                        >
                            Welcome Back
                        </h2>


                        <p
                            className="
                            mt-2
                            text-sm
                            text-slate-500
                            dark:text-slate-400
                        "
                        >
                            Please enter your credentials
                            to continue.
                        </p>



                        <form
                            onSubmit={handleSubmit}
                            className="
                            mt-8
                            space-y-5
                        "
                        >

                            <div>
                                <label
                                    className="
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    dark:text-slate-300
                                "
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={
                                        e => setEmail(e.target.value)
                                    }
                                    className="
                                    mt-2
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-200
                                    dark:border-white/10
                                    bg-slate-50
                                    dark:bg-white/5
                                    px-4
                                    py-3
                                    outline-none
                                "
                                    placeholder="admin@example.com"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label
                                        className="
                                        text-sm
                                        font-medium
                                    "
                                    >
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={
                                        e => setPassword(e.target.value)
                                    }
                                    className="
                                    mt-2
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-200
                                    dark:border-white/10
                                    bg-slate-50
                                    dark:bg-white/5
                                    px-4
                                    py-3
                                    outline-none
                                "
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                disabled={loading}
                                className="
                                w-full
                                rounded-lg
                                bg-blue-600
                                py-3
                                font-semibold
                                text-white
                                hover:bg-blue-700
                            "
                            >
                                {
                                    loading
                                        ? "Signing in..."
                                        : "Sign In"
                                }
                            </button>
                        </form>

                        <div
                            className="
                            mt-10
                            border-t
                            pt-6
                            text-center
                            text-xs
                            text-slate-400
                        "
                        >
                            Privacy Policy
                            <span className="mx-3">•</span>
                            Terms of Service
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}