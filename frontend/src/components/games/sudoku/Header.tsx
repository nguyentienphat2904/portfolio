"use client";
interface HeaderProps {
    onNewGame: () => void;
    started: boolean;
}

export default function Header({
    onNewGame,
    started
}: HeaderProps) {
    return (
        <header className="w-full flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> Sudoku</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Classic number puzzle</p>
            </div>
            {started && (
                <button
                    type="button"
                    onClick={onNewGame}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95">
                    New Game
                </button>
            )}
        </header>
    );

}