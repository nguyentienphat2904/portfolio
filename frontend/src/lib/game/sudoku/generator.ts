import type {
    Difficulty,
    SudokuBoard,
} from "./types";


const REMOVE_COUNT: Record<Difficulty, number> = {
    easy: 40,
    medium: 50,
    hard: 60,
    expert: 70,
};


export function createEmptyBoard(): SudokuBoard {
    return Array.from(
        { length: 9 },
        (_, row) =>
            Array.from(
                { length: 9 },
                (_, col) => ({
                    row,
                    col,
                    value: null,
                    fixed: false,
                    notes: [],
                }),
            ),
    );
}


function shuffle(numbers: number[]) {
    return [...numbers].sort(
        () => Math.random() - 0.5,
    );
}


function isValid(
    board: SudokuBoard,
    row: number,
    col: number,
    value: number,
) {
    // row
    for (let c = 0; c < 9; c++) {
        if (board[row][c].value === value) { return false; }
    }

    // column
    for (let r = 0; r < 9; r++) {
        if (board[r][col].value === value) { return false; }
    }

    // box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if (board[r][c].value === value) { return false; }
        }
    }
    return true;
}

function findEmpty(
    board: SudokuBoard,
) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col].value === null) {
                return { row, col, };
            }

        }
    }
    return null;
}


function fillBoard(
    board: SudokuBoard,
): boolean {
    const empty = findEmpty(board);

    if (!empty) { return true; }
    const { row, col } = empty;

    for (const number of shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
        if (isValid(board, row, col, number)) {
            board[row][col].value = number;
            if (fillBoard(board)) {
                return true;
            }
            board[row][col].value = null;
        }

    }
    return false;
}

function removeNumbers(
    board: SudokuBoard,
    difficulty: Difficulty,
) {
    let remove = REMOVE_COUNT[difficulty];

    while (remove > 0) {

        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col].value !== null) {
            board[row][col].value = null;
            remove--;
        }
    }
}

export function generateSudoku(
    difficulty: Difficulty,
): SudokuBoard {

    const board = createEmptyBoard();
    fillBoard(board);
    removeNumbers(board, difficulty);
    return board.map(row =>
        row.map(cell => ({
            ...cell,
            fixed: cell.value !== null,
        })),
    );
}