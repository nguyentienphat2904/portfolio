"use client";

import SudokuCell from "./SudokuCell";

import type { SudokuBoard as SudokuBoardType } from "@/lib/game/sudoku/types";

interface SudokuBoardProps {
    board: SudokuBoardType;
    selected: { row: number; col: number } | null;
    onSelect: (row: number, col: number) => void;
    isHighlighted: (row: number, col: number) => boolean;
    isSameNumber: (row: number, col: number) => boolean;
    noteMode: boolean;
}

export default function SudokuBoard({
    board,
    selected,
    onSelect,
    isHighlighted,
    isSameNumber,
    noteMode,
}: SudokuBoardProps) {

    return (
        <div className="grid aspect-square w-full max-w-135 grid-cols-9 overflow-hidden border-2 border-black dark:border-white">
            {board.map((row) =>
                row.map((cell) => {
                    const isSelected =
                        selected?.row === cell.row &&
                        selected?.col === cell.col;

                    return (
                        <SudokuCell
                            key={`${cell.row}-${cell.col}`}
                            cell={cell}
                            selected={isSelected}
                            highlighted={isHighlighted(cell.row, cell.col)}
                            sameNumber={isSameNumber(cell.row, cell.col)}
                            noteMode={noteMode}
                            onClick={() => onSelect(cell.row, cell.col)}
                        />
                    );
                })
            )}
        </div>
    );
}