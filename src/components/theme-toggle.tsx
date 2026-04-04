"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    // Ensure hydration matches by not returning anything until mounted
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={cn("h-9 w-9", className)} />
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-mycl-light-border bg-background transition-colors hover:bg-neutral-100 focus-visible:outline-none dark:border-mycl-dark-border dark:hover:bg-neutral-800",
                className
            )}
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-mycl-dark dark:text-mycl-light" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-mycl-dark dark:text-mycl-light" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
