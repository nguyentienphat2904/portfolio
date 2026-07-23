export type Difficulty =
    | "easy"
    | "medium"
    | "hard"
    | "expert";

export type CellValue = number | null;

export interface SudokuCellData {
    row: number;
    col: number;

    value: number | null;

    fixed: boolean;

    notes: number[];

    error?: boolean;
}

export type SudokuBoard = SudokuCellData[][];


export interface SelectedCell {
    row: number;
    col: number;
}


export interface SudokuGameState {
    board: SudokuBoard;
    solution: number[][];
    selected: SelectedCell | null;
    difficulty: Difficulty;
    mistakes: number;
    completed: boolean;
}