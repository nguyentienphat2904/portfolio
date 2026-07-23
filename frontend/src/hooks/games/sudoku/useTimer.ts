import { useEffect, useState } from "react";

export function useTimer(running: boolean, completed: boolean) {
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!running || paused || completed) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running, paused, completed]);

    const resetTimer = () => {
        setSeconds(0);
        setPaused(false);
    };

    const togglePause = () => {
        setPaused((prev) => !prev);
    };

    return {
        seconds,
        paused,
        resetTimer,
        togglePause,
    };
}