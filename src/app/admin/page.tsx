"use client";

import * as React from "react";
import { Activity, Upload, Terminal, Bell, PlusCircle, Users, BookOpen } from "lucide-react";

export default function AdminDashboardPage() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-neutral-50 dark:bg-mycl-darker"></div>;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Admin Overview</h1>
                <p className="text-neutral-500 dark:text-neutral-400">Manage MYCL users, platform contents, and administrators.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Real-time users graph (Placeholder) */}
                <div className="lg:col-span-2 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[300px]">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold flex items-center gap-2"><Activity className="h-5 w-5 text-mycl-blue" /> Concurrent Users</h2>
                        <div className="flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold font-mono">Live</span>
                        </div>
                    </div>

                    <div className="flex-1 flex items-end gap-2 px-4 h-full">
                        {/* simple bar graph visualization */}
                        {[40, 55, 35, 78, 60, 40, 85, 100, 75, 45, 60, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-mycl-blue/20 dark:bg-mycl-blue/20 hover:bg-mycl-blue rounded-t-md transition-all relative group" style={{ height: `${h}%` }}>
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-neutral-200 px-2 py-1 rounded text-xs">
                                    {h * 12}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-neutral-400 mt-4 border-t border-neutral-100 dark:border-neutral-800 pt-2">
                        <span>12:00 PM</span>
                        <span>Current (1.2k Active)</span>
                    </div>
                </div>

                {/* Add New Admin Form */}
                <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-6"><Users className="h-5 w-5 text-mycl-red" /> Add New Admin</h2>
                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium">Username</label>
                            <input type="text" placeholder="Admin username" className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-mycl-red outline-none" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium">Email</label>
                            <input type="email" placeholder="admin@mycyberlab.com" className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-mycl-red outline-none" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium">Temporary Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-mycl-red outline-none" />
                        </div>
                        <button type="button" className="w-full mt-4 py-2 bg-mycl-red hover:bg-mycl-red-dark text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                            <PlusCircle className="h-4 w-4" /> Create Admin
                        </button>
                    </form>
                </div>

                {/* Content Upload Forms */}
                <div className="lg:col-span-3 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-6"><Upload className="h-5 w-5" /> Push Platform Content</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* New Notification */}
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                            <h3 className="font-bold flex items-center gap-2 mb-4"><Bell className="h-4 w-4 text-mycl-blue" /> Blast Notification</h3>
                            <div className="space-y-3">
                                <input type="text" placeholder="Notification Title" className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark" />
                                <textarea placeholder="Message content..." rows={3} className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark resize-none"></textarea>
                                <button className="w-full py-2 bg-foreground text-background dark:bg-white dark:text-black rounded-md text-sm font-bold">Send Notification</button>
                            </div>
                        </div>

                        {/* New Module */}
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                            <h3 className="font-bold flex items-center gap-2 mb-4"><BookOpen className="h-4 w-4 text-mycl-blue" /> Upload Module</h3>
                            <div className="space-y-3">
                                <input type="text" placeholder="Module Name" className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark" />
                                <select className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark">
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                                <div className="border border-dashed border-neutral-400 dark:border-neutral-600 rounded-md p-4 text-center cursor-pointer hover:border-mycl-blue">
                                    <span className="text-xs text-neutral-500">Drop PDF / Markdown file here</span>
                                </div>
                                <button className="w-full py-2 bg-foreground text-background dark:bg-white dark:text-black rounded-md text-sm font-bold">Publish Module</button>
                            </div>
                        </div>

                        {/* New Challenge */}
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                            <h3 className="font-bold flex items-center gap-2 mb-4"><Terminal className="h-4 w-4 text-mycl-red" /> Create MYCLGym Challenge</h3>
                            <div className="space-y-3">
                                <input type="text" placeholder="Challenge Name" className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark" />
                                <input type="text" placeholder="Instance IP / Target Domain" className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark" />
                                <input type="text" placeholder="Flag (e.g. MYCL{...})" className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-mycl-dark font-mono" />
                                <button className="w-full py-2 bg-mycl-red hover:bg-mycl-red-dark text-white rounded-md text-sm font-bold transition-colors">Deploy CTF</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
