"use client";

import type { SudokuCellData } from "@/lib/game/sudoku/types";

interface SudokuCellProps {
    cell: SudokuCellData;
    selected: boolean;
    highlighted: boolean;
    sameNumber: boolean;
    noteMode: boolean;
    onClick: () => void;
}

export default function SudokuCell({
    cell,
    selected,
    highlighted,
    sameNumber,
    noteMode,
    onClick,
}: SudokuCellProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                relative flex aspect-square items-center justify-center
                text-xl font-bold transition-colors

                border-r border-b border-gray-300
                dark:border-gray-500

                ${cell.col === 2 || cell.col === 5
                    ? "border-r-3 border-black dark:border-white"
                    : ""
                }

                ${cell.row === 2 || cell.row === 5
                    ? "border-b-3 border-black dark:border-white"
                    : ""
                }

                ${selected
                    ? "bg-orange-400"
                    : sameNumber
                        ? "bg-[#ffeb99]"
                        : highlighted
                            ? "bg-[#fff2cc]"
                            : cell.fixed
                                ? "bg-[#f2f2f2]"
                                : "bg-white"
                }

                text-black
            `}
        >
            {cell.value != null ? (
                <>
                    {cell.value}

                    {cell.error && (
                        <span className="absolute top-1 right-1 size-2 rounded-full bg-red-500" />
                    )}
                </>
            ) : (
                <div className="grid h-full w-full grid-cols-3 grid-rows-3 text-xs font-normal text-gray-700">
                    {Array.from({ length: 9 }).map((_, index) => {
                        const number = index + 1;

                        return (
                            <span
                                key={number}
                                className="flex items-center justify-center"
                            >
                                {cell.notes.includes(number) ? number : ""}
                            </span>
                        );
                    })}
                </div>
            )}
        </button>
    );
}