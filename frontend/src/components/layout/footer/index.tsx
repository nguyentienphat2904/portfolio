"use client";

import Link from "next/link";
import { Mail, } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="border-t border-border/60">
            <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold">
                        Nguyen Tien Phat
                    </h3>

                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Software Engineer building scalable backend
                        systems and modern full-stack applications.
                    </p>
                </div>


                {/* Social */}
                <div className="flex items-center gap-3">

                    <Link
                        href="https://github.com/nguyentienphat2904"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border transition hover:border-primary hover:text-primary"
                    >
                        <FaGithub className="h-5 w-5" />
                    </Link>


                    <Link
                        href="https://www.linkedin.com/in/ph%C3%A1t-nguy%E1%BB%85n-ti%E1%BA%BFn-993854344/"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border transition hover:border-primary hover:text-primary"
                    >
                        <FaLinkedin className="h-5 w-5" />
                    </Link>


                    <Link
                        href="mailto:nguyentienphat2904@gmail.com"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border transition hover:border-primary hover:text-primary"
                    >
                        <Mail className="h-5 w-5" />
                    </Link>

                </div>

            </div>


            {/* Bottom */}
            <div className="border-none border-border/60">
                <div className="container mx-auto max-w-7xl px-6 py-6 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nguyen Tien Phat. All rights reserved.
                </div>
            </div>

        </footer>
    );
}