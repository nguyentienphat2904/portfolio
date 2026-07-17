"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ArrowRight, Download } from "lucide-react";
import { profileService } from "@/services/profile.service";
import { Profile } from "@/types/profile/types";
import { useState, useEffect } from "react";
import { Skill } from "@/types/skills/types";
import { skillService } from "@/services/skill.service";
import ParticleBackground from "@/components/common/ParticleBackground";
import { mediaService } from "@/services/media.service";

export default function About() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [resumeUrl, setResumeUrl] = useState<string>("");

    useEffect(() => {
        profileService.getProfile().then(async (data) => {
            setProfile(data);

            if (data.resumeId) {
                const result = await mediaService.getDownloadUrl(data.resumeId);
                setResumeUrl(result.url);
            }
        });
        skillService.getCoreSkills().then(setSkills);
    }, []);

    return (
        <section
            id="about"
            className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden "
        >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <ParticleBackground />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text & Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        {/* Status Badge */}
                        {profile && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`
                                    inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                    border text-xs font-semibold select-none mb-6
                                    ${profile.available
                                        ? "border-emerald-200/50 bg-emerald-50/50 text-emerald-600 dark:border-emerald-800/30 dark:bg-emerald-950/20 dark:text-emerald-400"
                                        : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                                    }
                                `}
                            >
                                <span
                                    className={`
                                    relative flex h-2 w-2 rounded-full
                                    ${profile.available
                                            ? "bg-emerald-500"
                                            : "bg-slate-400"
                                        }
                                    `}
                                >
                                    {profile.available && (
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    )}
                                </span>

                                {profile.available
                                    ? "AVAILABLE FOR HIRE"
                                    : "CURRENTLY UNAVAILABLE"}
                            </motion.div>
                        )}

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Building Digital{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent dark:from-primary dark:to-accent">
                                Products
                            </span>{" "}
                            That Matter.
                        </motion.h1>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl"
                        >
                            {profile?.bio}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12 w-full sm:w-auto"
                        >
                            <Link
                                href="#projects"
                                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/20 transition-all select-none text-sm group"
                            >
                                View My Work
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <a
                                href={resumeUrl}
                                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all select-none text-sm"
                            >
                                Download Resume
                                <Download className="h-4 w-4" />
                            </a>
                        </motion.div>

                        {/* Core Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full"
                        >
                            <h2 className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
                                CORE TECHNOLOGY STACK
                            </h2>
                            <div className="flex flex-wrap gap-2.5">
                                {skills?.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="px-3.5 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-200"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated Profile Image Card */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full max-w-90"
                        >
                            {/* Gentle Floating Motion Wrapper */}
                            <motion.div
                                animate={{ y: [-8, 8, -8] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full aspect-3/4"
                            >
                                {/* Decorative overlapping border box */}
                                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-primary/30 dark:border-primary/20 pointer-events-none" />

                                {/* Main Photo Container */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-slate-900">
                                    <Image
                                        src="/avatar.jpg"
                                        alt="Nguyen Tien Phat"
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    {/* Subtle vignette overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Bio Badge (Bottom Left) */}
                                <div className="absolute bottom-4 left-4 right-10 rounded-2xl border border-white/20 bg-white/15 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0A2E52]/30">                                    <div className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                                    Nguyen Tien Phat
                                </div>

                                    <div className="mt-1 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                                        Software Engineer
                                    </div>
                                </div>

                                {/* Floating Exp Badge (Bottom Right) */}
                                <div className="absolute -right-2 -bottom-1 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0A2E52]/30">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                                        <Award className="h-4 w-4 text-primary" />
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-primary">
                                            1+ Year
                                        </div>

                                        <div className="mt-1 text-[10px] font-medium text-slate-600 dark:text-slate-300">
                                            Experience
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section >
    );
}
