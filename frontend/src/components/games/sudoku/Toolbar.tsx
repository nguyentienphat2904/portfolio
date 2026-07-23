"use client";

interface ToolbarProps {
    onReset: () => void;
    onClear: () => void;
    noteMode: boolean;
    onToggleNotes: () => void;
}

export default function Toolbar({
    onReset,
    onClear,
    noteMode,
    onToggleNotes,
}: ToolbarProps) {
    return (
        <div className=" flex justify-center gap-3">
            <button
                type="button"
                onClick={onClear}
                className="
          rounded-lg
          border
          border-gray-300
          dark:border-gray-700
          bg-white
          dark:bg-gray-900
          px-4
          py-2
          text-sm
          font-medium
          hover:bg-gray-100
          dark:hover:bg-gray-800
          transition
        "
            >
                Clear
            </button>
            <button
                onClick={onToggleNotes}
                className={`
        px-4
        py-2
        rounded-lg
        border

        ${noteMode
                        ? "bg-blue-600 text-white"
                        : ""
                    }
    `}
            >
                Notes
            </button>
        </div>
    );
}