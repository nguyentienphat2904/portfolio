"use client";

import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import type {
    Difficulty,
    SelectedCell,
    SudokuBoard,
} from "@/lib/game/sudoku/types";
import { cloneBoard, isCompleted, isValidMove } from "@/lib/game/sudoku/utils";
import { createEmptyBoard, generateSudoku } from "@/lib/game/sudoku/generator";

export function useSudokuGame() {
    const [difficulty, setDifficulty] = useState<Difficulty>("easy");
    const [board, setBoard] = useState<SudokuBoard>(() => createEmptyBoard());
    const [selected, setSelected] = useState<SelectedCell | null>(null,);
    const [mistakes, setMistakes] = useState(0);
    const [noteMode, setNoteMode] = useState(false);
    const [history, setHistory] = useState<SudokuBoard[]>([]);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setBoard(generateSudoku(difficulty));
    }, []);

    const numberCounts = useMemo(() => {
        const counts = Array(10).fill(0);

        board.flat().forEach(cell => {
            if (cell.value !== null) {
                counts[cell.value]++;
            }
        });

        return counts;
    }, [board]);

    const selectCell = useCallback((row: number, col: number) => {
        setSelected((prev) => {
            if (prev?.row === row && prev?.col === col) {
                return null;
            }

            return {
                row,
                col,
            };
        });
    },
        [],
    );

    const inputNumber = useCallback((number: number) => {

        if (!selected || completed) return;
        setBoard(prev => {
            const next = cloneBoard(prev);
            const cell = next[selected.row][selected.col];
            if (cell.fixed) return prev;

            // note
            if (noteMode) {
                if (cell.fixed || cell.value !== null) {
                    return prev;
                }

                if (cell.notes.includes(number)) {
                    cell.notes = cell.notes.filter(n => n !== number);
                } else {
                    cell.notes.push(number);
                    cell.notes.sort((a, b) => a - b);
                }

                return next;
            }

            // save undo
            setHistory(h => [...h, prev,].slice(-50),);

            const valid = isValidMove(prev, selected.row, selected.col, number);
            cell.value = number;
            cell.notes = [];
            cell.error = !valid;

            if (!valid) setMistakes(m => m + 1);
            else {
                removeRelatedNotes(prev, selected.row, selected.col, number);
                if (isCompleted(next)) setCompleted(true);
            }
            return next;
        });
    },
        [
            selected,
            noteMode,
            completed,
        ],
    );

    const removeNumber = useCallback(
        () => {

            if (!selected) return;

            setBoard(prev => {
                const next = prev.map(row =>
                    row.map(cell => ({
                        ...cell,
                        notes: [
                            ...cell.notes,
                        ],
                    })),
                );
                const cell = next[selected.row][selected.col];
                if (cell.fixed) return prev;
                cell.value = null;
                cell.notes = [];
                cell.error = false;
                return next;

            });
        }, [selected]
    );

    const toggleNoteMode = useCallback(() => {
        setNoteMode(prev => !prev,);
    }, []);

    const changeDifficulty = useCallback((value: Difficulty) => {
        setDifficulty(value);
        setBoard(generateSudoku(value));
        setSelected(null);
        setMistakes(0);
        setHistory([]);
        setCompleted(false);
    }, []);

    const reset = useCallback(() => {
        setBoard(generateSudoku(difficulty));
        setSelected(null);
        setMistakes(0);
        setNoteMode(false);
        setHistory([]);
        setCompleted(false);
    }, [difficulty]);

    const isHighlighted = useCallback(
        (row: number, col: number) => {
            if (!selected) return false;

            const sameRow = selected.row === row;
            const sameCol = selected.col === col;

            const sameBox =
                Math.floor(selected.row / 3) === Math.floor(row / 3) &&
                Math.floor(selected.col / 3) === Math.floor(col / 3);

            return sameRow || sameCol || sameBox;
        },
        [selected],
    );

    const isSameNumber = useCallback((row: number, col: number,) => {
        if (!selected) return false;

        const selectedValue = board[selected.row][selected.col].value;
        if (!selectedValue) return false;

        return (
            board[row][col].value === selectedValue
        );

    }, [board, selected,],
    );

    function removeRelatedNotes(
        board: SudokuBoard,
        row: number,
        col: number,
        value: number,
    ) {
        board.forEach(r => r.forEach(cell => {
            const sameRow = cell.row === row;
            const sameCol = cell.col === col;
            const sameBox = Math.floor(cell.row / 3) === Math.floor(row / 3) && Math.floor(cell.col / 3) === Math.floor(col / 3);

            if (sameRow || sameCol || sameBox) {
                cell.notes = cell.notes.filter(n => n !== value);
            }
        }),
        );
    }

    const undo = useCallback(() => {
        setHistory(prev => {
            const last = prev.at(-1);
            if (!last) return prev;
            setBoard(last);
            return prev.slice(0, -1,);
        });
    },
        [],
    );

    return {
        board,
        selected,
        difficulty,
        mistakes,
        noteMode,
        completed,
        numberCounts,

        selectCell,

        inputNumber,
        removeNumber,
        undo,

        changeDifficulty,
        toggleNoteMode,

        reset,

        isHighlighted,
        isSameNumber,
    };
}