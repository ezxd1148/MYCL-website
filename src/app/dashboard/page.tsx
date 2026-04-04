"use client";

import { Activity, Trophy, UserCircle, Clock } from "lucide-react";

export default function DashboardProgressPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Greeting */}
            <div className="flex items-center space-x-4 bg-white dark:bg-mycl-dark p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="h-16 w-16 bg-gradient-to-tr from-mycl-red to-mycl-blue rounded-full p-1">
                    <div className="h-full w-full bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center overflow-hidden">
                        <UserCircle className="h-10 w-10 text-neutral-400" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back, Hacker</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-mycl-blue" /> Rank: Script Kiddie | 450 Pts
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold tracking-tight mb-2">Your Progress Overview</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">Track your lifetime engagement, learning score, and recent history.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Progress Graph */}
                <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold flex items-center gap-2"><Activity className="h-5 w-5 text-mycl-blue" /> Skill Progression (Weekly)</h3>
                    </div>
                    <div className="flex-1 flex items-end gap-2 px-1 relative h-full">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 opacity-50"></div>
                        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 opacity-50"></div>
                        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 opacity-50"></div>
                        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 opacity-50"></div>

                        {[10, 25, 45, 60, 50, 75, 90, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-mycl-blue/20 hover:bg-mycl-blue rounded-t-md transition-all relative group z-10" style={{ height: `${h}%` }}>
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background dark:bg-white dark:text-black px-2 py-1 rounded text-xs font-bold shadow-lg">
                                    {h * 15} Pts
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-neutral-400 mt-4 border-t border-neutral-100 dark:border-neutral-800 pt-3">
                        <span>9 Weeks Ago</span>
                        <span>This Week (Great Job!)</span>
                    </div>
                </div>

                {/* Account History Timeline */}
                <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col">
                    <h3 className="text-lg font-bold flex items-center gap-2 mb-6"><Clock className="h-5 w-5 text-mycl-red" /> Activity Log</h3>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                        {[
                            { title: "Logged In", desc: "Accessed platform via Chrome, Windows", time: "Just now", type: "system" },
                            { title: "Module Completed", desc: "Intro to Network Security (Quiz passed 100%)", time: "2 hours ago", type: "learning" },
                            { title: "Team Invite Accepted", desc: "Joined team 'RedTeamOps'", time: "Yesterday", type: "social" },
                            { title: "CTF Solved", desc: "Basic Linux Privilege Escalation (+200 pts)", time: "2 days ago", type: "learning" },
                            { title: "Profile Update", desc: "Changed bio and display username", time: "3 days ago", type: "system" },
                            { title: "Logged In", desc: "Accessed platform via Safari, iOS", time: "4 days ago", type: "system" }
                        ].map((log, i) => (
                            <div key={i} className="flex gap-4 relative">
                                <div className="flex flex-col items-center">
                                    <div className={`h-3 w-3 rounded-full mt-1 ${log.type === 'learning' ? 'bg-mycl-blue' : log.type === 'social' ? 'bg-mycl-red' : 'bg-neutral-400'}`}></div>
                                    {i !== 5 && <div className="w-px h-full bg-neutral-200 dark:bg-neutral-800 mt-1"></div>}
                                </div>
                                <div className="pb-4">
                                    <h4 className="font-bold text-sm">{log.title}</h4>
                                    <p className="text-xs text-neutral-500 mt-0.5">{log.desc}</p>
                                    <span className="text-[10px] text-neutral-400 block mt-1">{log.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
