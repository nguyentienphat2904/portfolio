"use client";

import { useMemo } from "react";
import Particles, {
    ParticlesProvider,
} from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const init = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
};

export default function ParticleBackground() {
    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    const options = useMemo(
        () => ({
            particles: {
                number: {
                    value: 35,
                    density: {
                        enable: true,
                    },
                },

                color: {
                    value: isDark
                        ? "#94a3b8"
                        : "#0f2747",
                },

                shape: {
                    type: "circle",
                },

                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.4,
                    },
                },

                size: {
                    value: {
                        min: 1,
                        max: 5,
                    },
                },

                links: {
                    enable: true,
                    distance: 120,
                    color: isDark
                        ? "#94a3b8"
                        : "#0f2747",
                    opacity: 0.1,
                    width: 1,
                },

                move: {
                    enable: true,
                    speed: 0.6,
                },
            },

            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: [
                            "grab",
                            "parallax",
                        ],
                    },

                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },

                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 0.8,
                        },
                    },

                    parallax: {
                        enable: true,
                        force: 15,
                        smooth: 20,
                    },

                    push: {
                        quantity: 4,
                    },
                },
            },

            background: {
                color: "transparent",
            },
        }),
        [isDark],
    );

    return (
        <ParticlesProvider init={init}>
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 -z-10"
            />
        </ParticlesProvider>
    );
}