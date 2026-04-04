"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ShieldAlert, Bell, Users, Check, LogOut } from "lucide-react";

export function Navbar({ isDashboard = false }: { isDashboard?: boolean }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showNotif, setShowNotif] = React.useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-mycl-light-border dark:border-mycl-dark-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 h-16 flex items-center justify-between mx-auto max-w-7xl">
                <Link href={isDashboard ? "/dashboard" : "/"} className="flex items-center space-x-2">
                    <ShieldAlert className="h-6 w-6 text-mycl-red" />
                    <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
                        <span className="text-mycl-red">MY</span>
                        <span className="text-foreground">Cyber</span>
                        <span className="text-mycl-blue">Lab</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {isDashboard ? (
                        <>
                            <Link href="/dashboard" className="text-sm font-medium hover:text-mycl-blue transition-colors">Progress</Link>
                            <Link href="/dashboard/modules" className="text-sm font-medium hover:text-mycl-blue transition-colors">Modules</Link>
                            <Link href="/dashboard/chat" className="text-sm font-medium hover:text-mycl-blue transition-colors">Chat</Link>

                            <div className="relative">
                                <button onClick={() => setShowNotif(!showNotif)} className="relative p-2 text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors border border-transparent">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-mycl-red"></span>
                                </button>
                                {showNotif && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden z-50">
                                        <div className="p-3 bg-neutral-50 dark:bg-mycl-darker border-b border-neutral-200 dark:border-neutral-800 font-bold text-sm">Notifications</div>
                                        <div className="p-3 space-y-3 max-h-64 overflow-y-auto">
                                            <div className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                                                <p className="text-sm font-medium mb-2"><span className="font-bold text-mycl-blue">CipherMaster</span> sent a friend request.</p>
                                                <div className="flex gap-2">
                                                    <button className="flex-1 flex justify-center bg-mycl-blue text-white p-1.5 rounded-md hover:bg-mycl-blue-dark transition-colors" title="Accept">
                                                        <Check className="h-4 w-4" />
                                                    </button>
                                                    <button className="flex-1 flex justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-1.5 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" title="Reject">
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-3 border-l-2 border-mycl-blue bg-mycl-blue/5 dark:bg-mycl-blue/10 rounded-r-lg">
                                                <p className="text-xs"><span className="font-bold">System:</span> New network enumeration module added.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/dashboard/team" onClick={() => setShowNotif(false)} className="p-2 text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors">
                                <Users className="h-5 w-5" />
                            </Link>

                            <Link href="/login" className="p-2 text-foreground hover:text-mycl-red hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors" title="Log Out">
                                <LogOut className="h-5 w-5" />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-sm font-medium hover:text-mycl-blue transition-colors">Log In</Link>
                            <Link href="/signup" className="text-sm font-medium bg-mycl-red hover:bg-mycl-red-dark text-white px-4 py-2 rounded-md transition-colors">Sign Up</Link>
                        </>
                    )}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-mycl-light-border dark:border-mycl-dark-border bg-background">
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        {isDashboard ? (
                            <>
                                <Link href="/dashboard" className="text-sm font-medium hover:text-mycl-blue transition-colors">Progress</Link>
                                <Link href="/dashboard/modules" className="text-sm font-medium hover:text-mycl-blue transition-colors">Modules</Link>
                                <Link href="/dashboard/chat" className="text-sm font-medium hover:text-mycl-blue transition-colors">Chat</Link>
                                <Link href="/dashboard/team" className="text-sm font-medium hover:text-mycl-blue transition-colors">Team Zone</Link>
                                <Link href="/login" className="text-sm font-medium text-mycl-red">Log Out</Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-sm font-medium hover:text-mycl-blue transition-colors">Log In</Link>
                                <Link href="/signup" className="text-sm font-medium text-mycl-red">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
