"use client";

import CongratulationsDialog from "@/components/games/sudoku/CongratulationsDialog";
import DifficultySelector from "@/components/games/sudoku/DifficultySelector";
import GameInfo from "@/components/games/sudoku/GameInfo";
import Header from "@/components/games/sudoku/Header";
import NumberPad from "@/components/games/sudoku/NumberPad";
import SudokuBoard from "@/components/games/sudoku/SudokuBoard";
import Toolbar from "@/components/games/sudoku/Toolbar";
import { useKeyboard } from "@/hooks/games/sudoku/useKeyboard";
import { useSudokuGame } from "@/hooks/games/sudoku/useSudokuGame";
import { useTimer } from "@/hooks/games/sudoku/useTimer";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import SudokuShareCard from "@/components/games/sudoku/SudokuShareCard";

export default function SudokuPage() {
    const [started, setStarted] = useState(false);

    const {
        board,
        selected,
        difficulty,
        completed,
        numberCounts,
        noteMode,

        selectCell,
        inputNumber,
        removeNumber,

        changeDifficulty,
        reset,

        isHighlighted,
        isSameNumber,
        toggleNoteMode,
    } = useSudokuGame();

    const {
        seconds,
        paused,
        resetTimer,
        togglePause,
    } = useTimer(started, completed);

    useKeyboard({
        selected,
        selectCell,
        inputNumber,
        removeNumber,
    });

    function startGame() {
        reset();
        resetTimer();
        setStarted(true);
    }

    function formatTime(seconds: number) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }

    const shareRef = useRef<HTMLDivElement>(null);

    const handleShare = async () => {
        if (!shareRef.current) return;

        const dataUrl = await toPng(
            shareRef.current,
            {
                pixelRatio: 3,
                cacheBust: true,
            },
        );
        const link = document.createElement("a");
        link.download = `sudoku-${difficulty}.png`;
        link.href = dataUrl;
        link.click();
    };
    return (
        <main className="min-h-screen bg-white dark:bg-black px-4 py-6">
            <div className="mx-auto flex max-w-xl flex-col gap-6">
                <Header
                    started={started}
                    onNewGame={() => {
                        setStarted(false);
                        resetTimer();
                    }}
                />
                {!started ? (
                    <div className="flex flex-col gap-6 items-center">
                        <h2 className="text-xl font-semibold dark:text-white">Select Difficulty</h2>
                        <DifficultySelector
                            value={difficulty}
                            onChange={changeDifficulty}
                        />
                        <button
                            onClick={() => startGame()}
                            className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
                        >
                            Start Game
                        </button>

                    </div>

                ) : (
                    <>
                        <GameInfo
                            difficulty={difficulty}
                            time={formatTime(seconds)}
                            paused={paused}
                            onTogglePause={togglePause}
                        />
                        <div className="flex items-start justify-center gap-8">
                            <SudokuBoard
                                board={board}
                                selected={selected}
                                onSelect={selectCell}
                                isHighlighted={isHighlighted}
                                isSameNumber={isSameNumber}
                                noteMode={noteMode}
                            />

                            <div className="flex w-57.5 flex-col gap-4">
                                <Toolbar
                                    onReset={reset}
                                    onClear={removeNumber}
                                    noteMode={noteMode}
                                    onToggleNotes={toggleNoteMode}
                                />

                                <NumberPad
                                    onInput={inputNumber}
                                    onDelete={removeNumber}
                                    numberCounts={numberCounts}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            {completed && (
                <CongratulationsDialog
                    difficulty={difficulty}
                    time={formatTime(seconds)}
                    onNewGame={() => {
                        reset();
                        resetTimer();
                        setStarted(false);
                    }}
                    onShare={handleShare}
                />
            )}
            <div className="fixed left-[-99999px] top-0">
                <SudokuShareCard
                    ref={shareRef}
                    board={board}
                    difficulty={difficulty}
                    time={formatTime(seconds)}
                />
            </div>
        </main>
    );
}