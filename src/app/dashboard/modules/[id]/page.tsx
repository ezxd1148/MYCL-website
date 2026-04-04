"use client";

import { ChevronLeft, CheckCircle2, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ModuleReaderPage() {
    const [showQuiz, setShowQuiz] = React.useState(false);
    const [quizFinished, setQuizFinished] = React.useState(false);

    // Since Next App Router params can be tricky dynamically without real backend,
    // we will serve a generalized placeholder reading content.

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Back navigation */}
            <Link href="/dashboard/modules" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-mycl-blue transition-colors mb-4">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Modules
            </Link>

            {!showQuiz ? (
                <>
                    {/* Reading Material Phase */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 lg:p-12 shadow-sm space-y-8">
                        <div className="pb-6 border-b border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="h-6 w-6 text-mycl-blue" />
                                <span className="text-sm font-bold text-mycl-blue tracking-widest uppercase">Learning Module</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">The Fundamentals of Network Enumeration</h1>
                            <p className="text-neutral-500 dark:text-neutral-400">Time estimate: 15 mins • 200 XP points</p>
                        </div>

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <h3>1. Introduction to Enumeration</h3>
                            <p>Enumeration is the process of extracting user names, machine names, network resources, shares, and services from a system. In this phase, the attacker creates an active connection to the system and performs directed queries to gain more information about the target.</p>

                            <h3>2. Common Tools</h3>
                            <ul>
                                <li><strong>Nmap:</strong> The industry standard for network mapping and port scanning.</li>
                                <li><strong>Enum4Linux:</strong> A tool for enumerating information from Windows and Samba systems.</li>
                                <li><strong>Gobuster:</strong> Directory/File, DNS and VHost busting tool written in Go.</li>
                            </ul>

                            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl border-l-4 border-mycl-red my-6">
                                <p className="font-bold mb-2 m-0 text-sm">💡 Pro Hacker Tip</p>
                                <p className="text-sm m-0">Always ensure you have explicit written permission (rules of engagement) before running active enumeration tools against a target network. Unauthorized scanning is illegal.</p>
                            </div>

                            <h3>3. Network Scanning Phases</h3>
                            <p>Before launching an exploit, one must thoroughly understand the attack surface. This involves discovering live hosts (Ping sweeps), scanning for open ports, and finally fingerprinting the exact versions of the services running.</p>
                        </div>

                        <div className="pt-8 flex justify-end">
                            <button onClick={() => setShowQuiz(true)} className="px-8 py-3 bg-mycl-blue hover:bg-mycl-blue-dark text-white rounded-xl font-bold transition-colors">
                                Ready for Quiz
                            </button>
                        </div>
                    </div>
                </>
            ) : !quizFinished ? (
                <>
                    {/* Quiz Phase */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 lg:p-12 shadow-sm space-y-8 animate-in fade-in zoom-in-95">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            Knowledge Check
                        </h2>
                        <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
                            <p className="font-medium text-lg mb-6">1. Which of the following tools is considered the industry standard for network mapping and port scanning?</p>

                            <div className="space-y-3">
                                {["Gobuster", "Nmap", "Wireshark", "Metasploit"].map((ans, i) => (
                                    <label key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-700 rounded-lg cursor-pointer hover:border-mycl-blue hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                        <input type="radio" name="q1" className="h-4 w-4 text-mycl-blue focus:ring-mycl-blue" />
                                        <span>{ans}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <button onClick={() => setShowQuiz(false)} className="text-sm font-medium text-neutral-500 hover:text-foreground">Back to Reading</button>
                            <button onClick={() => setQuizFinished(true)} className="px-8 py-3 bg-mycl-red hover:bg-mycl-red-dark text-white rounded-xl font-bold transition-colors">
                                Submit Answers
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Completed Phase */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-12 shadow-sm flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95">
                        <div className="h-24 w-24 bg-green-500/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold mb-2">Module Completed!</h2>
                            <p className="text-neutral-500">You scored 100% on the Knowledge Check.</p>
                        </div>
                        <div className="bg-neutral-100 dark:bg-neutral-900 px-6 py-4 rounded-xl flex items-center gap-4 text-left border border-neutral-200 dark:border-neutral-800">
                            <Trophy className="h-8 w-8 text-mycl-blue" />
                            <div>
                                <p className="text-xs text-neutral-500 font-bold uppercase">Rewards</p>
                                <p className="font-bold">+200 Experience Points</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Link href="/dashboard/modules" className="px-8 py-3 bg-foreground hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 dark:text-black text-background rounded-xl font-bold transition-colors">
                                Return to Modules
                            </Link>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}
