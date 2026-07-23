import { Delete, Undo2 } from "lucide-react";

interface NumberPadProps {
    onInput: (number: number) => void;
    onDelete: () => void;
    onUndo?: () => void;
    numberCounts: number[];
}

const numbers = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
];

export default function NumberPad({
    onInput,
    onDelete,
    onUndo,
    numberCounts
}: NumberPadProps) {
    return (
        <div className="grid w-full max-w-sm grid-cols-6 gap-2 mx-auto">
            {numbers.map((number) => {
                const completed = numberCounts[number] >= 9;
                return (
                    <button
                        key={number}
                        type="button"
                        disabled={completed}
                        onClick={() => onInput(number)}
                        className={`
                            h-12
                            rounded-lg
                            col-span-2
                            border
                            text-xl
                            font-semibold
                            transition
                            ${completed
                                ? "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                                : "bg-white hover:bg-gray-100 active:scale-95 dark:bg-gray-900 dark:hover:bg-gray-800"
                            }
                        `}
                    >
                        {number}
                    </button>
                );
            })}

            <button
                type="button"
                onClick={onUndo}
                className="
                    flex h-12 items-center justify-center col-span-3
                    rounded-lg border border-gray-300
                    bg-white
                    transition
                    hover:bg-gray-100
                    active:scale-95
                    dark:border-gray-700
                    dark:bg-gray-900
                    dark:hover:bg-gray-800
                "
                title="Undo"
            >
                <Undo2 className="size-5" />
            </button>

            <button
                type="button"
                onClick={onDelete}
                className="
                    flex h-12 items-center justify-center col-span-3
                    rounded-lg border border-gray-300
                    bg-white
                    transition
                    hover:bg-gray-100
                    active:scale-95
                    dark:border-gray-700
                    dark:bg-gray-900
                    dark:hover:bg-gray-800
                "
                title="Delete"
            >
                <Delete className="size-5" />
            </button>
        </div>
    );
}