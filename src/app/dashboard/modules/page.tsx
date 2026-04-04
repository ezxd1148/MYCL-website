"use client";

import { BookOpen, ShieldCheck, Terminal, Filter } from "lucide-react";
import Link from "next/link";

export default function ModulesPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Learning Modules</h1>
                    <p className="text-neutral-500 dark:text-neutral-400">Master new skills with interactive cybersecurity courses.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                    <Filter className="h-4 w-4" /> Filter by Difficulty
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Module Card */}
                {[
                    { title: "Intro to Network Security", diff: "Beginner", icon: <ShieldCheck className="h-6 w-6 text-mycl-blue" /> },
                    { title: "Web App Penetration Testing", diff: "Intermediate", icon: <BookOpen className="h-6 w-6 text-mycl-red" /> },
                    { title: "Reverse Engineering Basics", diff: "Advanced", icon: <Terminal className="h-6 w-6 text-foreground" /> },
                    { title: "Active Directory Exploitation", diff: "Advanced", icon: <Terminal className="h-6 w-6 text-mycl-red" /> },
                    { title: "Linux Privilege Escalation", diff: "Intermediate", icon: <ShieldCheck className="h-6 w-6 text-mycl-blue" /> },
                    { title: "Cryptography 101", diff: "Beginner", icon: <BookOpen className="h-6 w-6 text-mycl-blue" /> }
                ].map((mod, i) => (
                    <Link href={`/dashboard/modules/${mod.title.toLowerCase().replace(/\s+/g, '-')}`} key={i} className="group p-6 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col gap-4 hover:border-mycl-blue transition-colors cursor-pointer shadow-sm">
                        <div className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-fit">
                            {mod.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">{mod.title}</h3>
                            <span className="text-xs text-neutral-500 mt-1 inline-block">{mod.diff} Level</span>
                        </div>
                        <div className="mt-auto">
                            <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-mycl-blue h-full" style={{ width: i === 0 ? "40%" : "0%" }}></div>
                            </div>
                            <p className="text-xs text-right mt-2 font-medium">{i === 0 ? "40% Complete" : "Not Started"}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
