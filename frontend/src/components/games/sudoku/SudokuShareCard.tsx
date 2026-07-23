"use client";

import { forwardRef } from "react";

import type {
    Difficulty,
    SudokuBoard,
} from "@/lib/game/sudoku/types";
import { Trophy } from "lucide-react";

interface SudokuShareCardProps {
    board: SudokuBoard;
    difficulty: Difficulty;
    time: string;
}

const SudokuShareCard = forwardRef<
    HTMLDivElement,
    SudokuShareCardProps
>(function SudokuShareCard(
    {
        board,
        difficulty,
        time,
    },
    ref,
) {
    return (
        <div
            ref={ref}
            className="w-175 bg-white p-8 text-black"
        >
            <h1 className="text-center text-4xl font-bold">
                Sudoku
            </h1>

            <p className="mt-2 flex items-center justify-center gap-2 text-lg">
                <Trophy className="size-10 text-yellow-500" /> Puzzle Completed
            </p>

            <div className="mt-6 flex justify-between text-lg">
                <span>
                    Difficulty:{" "}
                    <b className="capitalize">
                        {difficulty}
                    </b>
                </span>

                <span>
                    Time: <b>{time}</b>
                </span>
            </div>

            <div className="mt-8 grid grid-cols-9 border-2 border-black">
                {board.flat().map(cell => (
                    <div
                        key={`${cell.row}-${cell.col}`}
                        className={`
                            flex aspect-square
                            items-center
                            justify-center
                            border
                            border-gray-300
                            text-2xl
                            font-bold

                            ${cell.col === 2 || cell.col === 5
                                ? "border-r-2 border-r-black"
                                : ""
                            }

                            ${cell.row === 2 || cell.row === 5
                                ? "border-b-2 border-b-black"
                                : ""
                            }
                        `}
                    >
                        {cell.value}
                    </div>
                ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
                Created with my Sudoku Game
            </p>
        </div>
    );
});

export default SudokuShareCard;