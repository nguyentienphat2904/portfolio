"use client";

import type {
    Difficulty,
} from "@/lib/game/sudoku/types";

import {
    DIFFICULTY_CONFIG,
} from "@/lib/game/sudoku/constants";

interface DifficultySelectorProps {
    value: Difficulty;
    onChange: (difficulty: Difficulty,) => void;
}

const difficulties: Difficulty[] = [
    "easy",
    "medium",
    "hard",
    "expert",
];

export default function DifficultySelector({
    value,
    onChange,
}: DifficultySelectorProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {difficulties.map((difficulty) => {
                const active = value === difficulty;

                return (
                    <button
                        key={difficulty}
                        type="button"
                        onClick={() => onChange(difficulty)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition border 
                            ${active ? `bg-blue-600 text-white border-blue-600` : `bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800`}`
                        }
                    >
                        {DIFFICULTY_CONFIG[difficulty].label}
                    </button>
                );
            },
            )
            }
        </div>
    );
}