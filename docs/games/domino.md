# Domino Logic Game Roadmap

## Phase 1 -- Foundation (\~800--1200 LOC)

### Structure

``` text
app/games/domino/page.tsx

components/domino/
    Header.tsx
    DifficultySelector.tsx
    GameBoard.tsx
    DominoPool.tsx
    Toolbar.tsx
    Region.tsx
    Cell.tsx
    Domino.tsx

hooks/
    useDominoGame.ts

lib/domino/
    generator.ts
    validator.ts
    constants.ts
    types.ts
```

### Goals

-   Complete UI
-   Difficulty selection (Easy / Medium / Hard)
-   Random board generation
-   Domino rendering
-   No drag & drop yet
### TODO
- lib/domino/types.ts — định nghĩa toàn bộ model.
- lib/domino/constants.ts — hằng số, kích thước board, difficulty.
- lib/domino/generator.ts — sinh board và domino ngẫu nhiên.
- hooks/useDominoGame.ts — state của game.
- components/domino/Header.tsx
- components/domino/DifficultySelector.tsx
- components/domino/GameBoard.tsx
- components/domino/Region.tsx
- components/domino/Cell.tsx
- components/domino/Domino.tsx
- components/domino/DominoPool.tsx
- components/domino/Toolbar.tsx
- app/games/domino/page.tsx
------------------------------------------------------------------------

## Phase 2 -- Gameplay

### Features

-   Drag & Drop (`dnd-kit`)
-   Domino rotation
-   Snap to board
-   Undo
-   Restart
-   Win detection

------------------------------------------------------------------------

## Phase 3 -- Puzzle Generator

### Core Systems

-   Region generator
-   Constraint generator
-   Seed-based generation
-   Infinite levels
-   Puzzle solver
-   Unique solution verification

------------------------------------------------------------------------

## Phase 4 -- Polish

### Improvements

-   Animations
-   Sound effects
-   Statistics
-   Best time tracking
-   Share seed
-   Mobile optimization

------------------------------------------------------------------------

## Final Result

A polished logic puzzle game inspired by NYT Pips, featuring:

-   Unlimited procedurally generated puzzles
-   Three difficulty levels
-   Modern responsive UI
-   Deterministic seed generation
-   Solver-backed validation
-   Smooth gameplay experience
