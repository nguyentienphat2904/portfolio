"use client";

import {
    useEffect,
} from "react";

import type {
    SelectedCell,
} from "@/lib/game/sudoku/types";

interface UseKeyboardProps {
    selected: | SelectedCell | null;
    selectCell: (row: number, col: number,) => void;
    inputNumber: (value: number,) => void;
    removeNumber: () => void;
}

export function useKeyboard({
    selected,
    selectCell,
    inputNumber,
    removeNumber,
}: UseKeyboardProps) {

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent,) {
            const key = event.key;
            /**
             * Number input
             */
            if (/^[1-9]$/.test(key)) {
                inputNumber(Number(key));
                return;
            }

            /**
             * Delete value
             */
            if (
                key === "Backspace" ||
                key === "Delete" ||
                key === "0"
            ) {
                removeNumber();
                return;
            }

            /**
             * No cell selected
             */
            if (!selected) return;
            let nextRow = selected.row;
            let nextCol = selected.col;

            /**
             * Navigation
             */
            switch (key) {
                case "ArrowUp":
                    nextRow--;
                    break;
                case "ArrowDown":
                    nextRow++;
                    break;
                case "ArrowLeft":
                    nextCol--;
                    break;
                case "ArrowRight":
                    nextCol++;
                    break;
                case "Escape":
                    return;
                default:
                    return;
            }

            /**
             * Boundary check
             */
            if (
                nextRow < 0 ||
                nextRow > 8 ||
                nextCol < 0 ||
                nextCol > 8
            ) { return; }

            selectCell(nextRow, nextCol);
        }

        window.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [
        selected,
        selectCell,
        inputNumber,
        removeNumber,
    ]);

}