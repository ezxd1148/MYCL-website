import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-mycl-light-border dark:border-mycl-dark-border py-8 mt-auto">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                    <ShieldAlert className="h-5 w-5 text-mycl-red" />
                    <span className="font-semibold text-lg tracking-tight">
                        <span className="text-mycl-red">MY</span>
                        <span className="text-foreground">Cyber</span>
                        <span className="text-mycl-blue">Lab</span>
                    </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">
                    &copy; {new Date().getFullYear()} MyCyberLab. Melahirkan generasi siber yang beretika.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-neutral-500 hover:text-mycl-blue dark:hover:text-mycl-blue transition-colors">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-neutral-500 hover:text-mycl-blue dark:hover:text-mycl-blue transition-colors">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
