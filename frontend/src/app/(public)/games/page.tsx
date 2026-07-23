import React from 'react'
import { games } from './game-data';
import Link from 'next/link';
import { ArrowRight, Gamepad2, Lock } from 'lucide-react';

export default function Games() {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Games</h1>
                <p className="mt-2 text-muted-foreground">
                    A collection of logic and puzzle games built from scratch.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {games.map((game) => {
                    return game.available ? (
                        <Link
                            key={game.title}
                            href={game.href}
                            className="group rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Gamepad2 className="h-6 w-6 text-primary" />
                            </div>

                            <h2 className="text-xl font-semibold">{game.title}</h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {game.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                                Play
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ) : (
                        <div
                            key={game.title}
                            className="rounded-xl border border-dashed bg-card/50 p-6 opacity-70"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                                <Lock className="h-6 w-6 text-muted-foreground" />
                            </div>

                            <h2 className="text-xl font-semibold">{game.title}</h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {game.description}
                            </p>

                            <span className="mt-6 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                Coming Soon
                            </span>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    );
}
