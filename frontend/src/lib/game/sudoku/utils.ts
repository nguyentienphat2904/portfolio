import type { SudokuBoard } from "./types";


export function cloneBoard(
    board: SudokuBoard,
): SudokuBoard {
    return board.map(row =>
        row.map(cell => ({
            ...cell,
            notes: [...cell.notes],
        })),
    );
}


export function isValidMove(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    // row
    for (let c = 0; c < 9; c++) {
        if (
            c !== col &&
            board[row][c].value === value
        ) {
            return false;
        }
    }


    // column
    for (let r = 0; r < 9; r++) {
        if (
            r !== row &&
            board[r][col].value === value
        ) {
            return false;
        }
    }


    // box
    const startRow =
        Math.floor(row / 3) * 3;

    const startCol =
        Math.floor(col / 3) * 3;


    for (
        let r = startRow;
        r < startRow + 3;
        r++
    ) {
        for (
            let c = startCol;
            c < startCol + 3;
            c++
        ) {
            if (
                (r !== row || c !== col) &&
                board[r][c].value === value
            ) {
                return false;
            }
        }
    }


    return true;
}

export function isCompleted(board: SudokuBoard) {
    return board.every(row =>
        row.every(cell => cell.value !== null && cell.value !== 0)
    );
}