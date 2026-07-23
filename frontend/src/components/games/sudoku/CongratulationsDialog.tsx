"use client";

import type { Difficulty } from "@/lib/game/sudoku/types";
import { RotateCcw, Share2, Trophy } from "lucide-react";

interface CongratulationsDialogProps {
    difficulty: Difficulty;
    time: string;

    onNewGame: () => void;
    onShare: () => void;
}

export default function CongratulationsDialog({
    difficulty,
    time,
    onNewGame,
    onShare,
}: CongratulationsDialogProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-neutral-900">
                <div className="flex flex-col items-center gap-2">
                    <Trophy className="h-10 w-10 text-yellow-500" />

                    <h2 className="text-3xl font-bold text-black dark:text-white">
                        Congratulations!
                    </h2>

                    <p className="text-center text-gray-500 dark:text-gray-400">
                        You solved the Sudoku puzzle.
                    </p>
                </div>

                <div className="my-8 rounded-xl bg-gray-100 p-5 dark:bg-neutral-800">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Difficulty</span>
                        <span className="font-semibold capitalize">
                            {difficulty}
                        </span>
                    </div>

                    <div className="mt-3 flex justify-between">
                        <span className="text-gray-500">Time</span>
                        <span className="font-semibold">
                            {time}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={onNewGame}
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <RotateCcw className="h-5 w-5" />
                        New Game
                    </button>

                    <button
                        onClick={onShare}
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                        <Share2 className="h-5 w-5" />
                        Share Result
                    </button>
                </div>
            </div>
        </div>
    );
}