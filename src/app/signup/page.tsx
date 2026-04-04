import Link from "next/link";
import { ShieldAlert, UserPlus, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row-reverse bg-background">
            {/* Right Segment: MYCL Branding */}
            <div className="hidden md:flex w-1/2 bg-mycl-darker flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute w-[300px] h-[300px] bg-mycl-blue/20 blur-[100px] rounded-full top-[-10%] right-[-10%]"></div>
                <div className="absolute w-[300px] h-[300px] bg-mycl-red/20 blur-[100px] rounded-full bottom-[-10%] left-[-10%]"></div>

                <div className="relative z-10 text-center space-y-6 px-12">
                    <Link href="/" className="inline-flex items-center space-x-2 text-white hover:text-neutral-200 transition-colors">
                        <ShieldAlert className="h-12 w-12 text-mycl-blue" />
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        Join the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycl-blue to-mycl-red">Evolution</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-md mx-auto leading-relaxed">
                        Level up your skills, practice in realistic CTF ranges, and join the elite forces defending the internet.
                    </p>
                </div>
            </div>

            {/* Left Segment: Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative bg-neutral-50 dark:bg-mycl-dark transition-colors">
                <div className="absolute top-6 left-6 md:hidden">
                    <Link href="/" className="flex items-center text-sm font-medium text-neutral-500 hover:text-foreground">
                        <ChevronLeft className="h-4 w-4 mr-1" /> Back
                    </Link>
                </div>
                <div className="absolute top-6 right-6">
                    <ThemeToggle />
                </div>

                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-left-8 duration-500">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">Become part of the MYCL ecosystem</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue transition-all shadow-sm"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-foreground">Gmail</label>
                            <input
                                type="email"
                                placeholder="Enter your gmail"
                                className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue transition-all shadow-sm"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-foreground">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue transition-all shadow-sm"
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-foreground">Confirm</label>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-mycl-blue transition-all shadow-sm"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-mycl-blue hover:bg-mycl-blue-dark text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-all shadow-md"
                        >
                            <UserPlus className="h-5 w-5" />
                            <span>Create Account</span>
                        </button>
                    </form>

                    <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-mycl-red hover:text-mycl-red-dark transition-colors underline underline-offset-4">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
