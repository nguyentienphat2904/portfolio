import type { SudokuBoard } from "./types";

export function isValidMove(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    return (
        !hasSameRow(board, row, col, value) &&
        !hasSameColumn(board, row, col, value) &&
        !hasSameBox(board, row, col, value)
    );
}


function hasSameRow(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    return board[row].some(
        cell =>
            cell.col !== col &&
            cell.value === value
    );
}


function hasSameColumn(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    return board.some(
        r =>
            r[col].row !== row &&
            r[col].value === value
    );
}


function hasSameBox(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if (
                (r !== row || c !== col) &&
                board[r][c].value === value
            ) {
                return true;
            }
        }
    }

    return false;
}