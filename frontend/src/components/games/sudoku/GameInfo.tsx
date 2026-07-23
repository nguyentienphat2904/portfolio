"use client";

import type {
    Difficulty,
} from "@/lib/game/sudoku/types";

import {
    DIFFICULTY_CONFIG,
} from "@/lib/game/sudoku/constants";
import { Pause, Play } from "lucide-react";


interface GameInfoProps {
    difficulty: Difficulty;
    time: string;
    paused: boolean;
    onTogglePause: () => void;
}

export default function GameInfo({
    difficulty,
    time = "00:00",
    paused,
    onTogglePause
}: GameInfoProps) {
    return (
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
                <span className="font-medium">
                    Difficulty:
                </span>
                <span> {DIFFICULTY_CONFIG[difficulty].label} </span>
            </div>

            <div className="flex items-center gap-2">
                <span className="font-medium">
                    Time:
                </span>
                <span> {time} </span>
                <button
                    type="button"
                    onClick={onTogglePause}
                    className="
                        flex size-8 items-center justify-center
                        rounded-md border
                        hover:bg-gray-100
                        dark:hover:bg-gray-800
                    "
                >
                    {paused ? (
                        <Play className="size-4" />
                    ) : (
                        <Pause className="size-4" />
                    )}
                </button>
            </div>
        </div>
    );
}