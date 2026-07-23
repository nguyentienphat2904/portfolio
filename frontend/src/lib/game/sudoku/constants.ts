import type { Difficulty } from "./types";


export const BOARD_SIZE = 9;
export const BOX_SIZE = 3;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 9;

export const DIFFICULTY_CONFIG: Record<
    Difficulty,
    {
        label: string;
        removedCells: number;
    }
> = {
    easy: {
        label: "Easy",
        removedCells: 40,
    },

    medium: {
        label: "Medium",
        removedCells: 50,
    },

    hard: {
        label: "Hard",
        removedCells: 58,
    },

    expert: {
        label: "Expert",
        removedCells: 64,
    },
};