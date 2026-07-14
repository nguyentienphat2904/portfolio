"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return { isDark, toggleTheme };
}

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeToggle();
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-lg"
        aria-label="Toggle theme"
      >
        <div className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8 rounded-lg relative flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className={`h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ${isDark ? "-rotate-90 scale-0" : ""}`} />
      <Moon className={`absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ${isDark ? "rotate-0 scale-100" : ""}`} />
    </Button>
  )
}
