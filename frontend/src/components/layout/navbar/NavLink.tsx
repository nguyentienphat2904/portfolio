import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    layoutId?: string;
}

export default function NavLink({ href, children, isActive = false, layoutId = "activeNavIndicator" }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "relative py-1.5 text-sm font-medium transition-colors duration-200 outline-none select-none",
                isActive 
                    ? "text-slate-900 dark:text-white font-semibold" 
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
        >
            <span className="relative z-10">{children}</span>
            {isActive && (
                <motion.span
                    layoutId={layoutId}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
            )}
        </Link>
    )
}

