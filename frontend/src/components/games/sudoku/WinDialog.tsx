"use client";

interface WinDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function WinDialog({
    open,
    onClose,
}: WinDialogProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Completed!
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    You solved the Sudoku puzzle.
                </p>

                <button
                    onClick={onClose}
                    className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                    Continue
                </button>
            </div>
        </div>
    );
}