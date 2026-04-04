import Link from "next/link";
import { ShieldAlert, LogIn, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">
            {/* Left Segment: MYCL Branding */}
            <div className="hidden md:flex w-1/2 bg-mycl-darker flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute w-[300px] h-[300px] bg-mycl-red/20 blur-[100px] rounded-full top-[-10%] left-[-10%]"></div>
                <div className="absolute w-[300px] h-[300px] bg-mycl-blue/20 blur-[100px] rounded-full bottom-[-10%] right-[-10%]"></div>

                <div className="relative z-10 text-center space-y-6 px-12">
                    <Link href="/" className="inline-flex items-center space-x-2 text-white hover:text-neutral-200 transition-colors">
                        <ShieldAlert className="h-12 w-12 text-mycl-red" />
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        Welcome back to the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycl-red to-mycl-blue">Digital Frontline</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-md mx-auto leading-relaxed">
                        Access your intelligence dashboard, resume modules, and dominate the global rankings.
                    </p>
                </div>
            </div>

            {/* Right Segment: Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative bg-neutral-50 dark:bg-mycl-dark transition-colors">
                <div className="absolute top-6 left-6 md:hidden">
                    <Link href="/" className="flex items-center text-sm font-medium text-neutral-500 hover:text-foreground">
                        <ChevronLeft className="h-4 w-4 mr-1" /> Back
                    </Link>
                </div>
                <div className="absolute top-6 right-6">
                    <ThemeToggle />
                </div>

                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Login</h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">Enter your credentials to access the platform</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue focus:border-transparent transition-all shadow-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-foreground">Password</label>
                                <Link href="#" className="text-xs text-mycl-blue hover:text-mycl-blue-dark transition-colors">Forgot password?</Link>
                            </div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue focus:border-transparent transition-all shadow-sm"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-foreground hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-background dark:text-black rounded-lg font-bold flex items-center justify-center space-x-2 transition-all shadow-md"
                        >
                            <LogIn className="h-5 w-5" />
                            <span>Sign In</span>
                        </button>
                    </form>

                    <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-mycl-blue hover:text-mycl-blue-dark transition-colors underline underline-offset-4">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
