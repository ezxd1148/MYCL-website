"use client";

import { Users, UserPlus, Trophy, Hexagon, Crosshair, Copy, LogOut } from "lucide-react";
import React from "react";

export default function TeamPage() {
    // State to toggle between having a team vs not having a team (Left team)
    const [isJoined, setIsJoined] = React.useState(true);

    if (!isJoined) {
        return (
            <div className="h-[70vh] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 text-center max-w-md mx-auto space-y-6">
                <div className="h-24 w-24 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-10 w-10 text-neutral-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Join or Create a Team</h2>
                    <p className="text-neutral-500 text-sm mb-6">You are not currently part of any team. Team up to compete in global leaderboards and CTF tournaments.</p>
                </div>

                <div className="w-full space-y-4">
                    <div className="relative">
                        <input type="text" placeholder="Enter Invite Code" className="w-full pl-4 pr-24 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:ring-2 focus:ring-mycl-blue" />
                        <button onClick={() => setIsJoined(true)} className="absolute right-1 top-1 bottom-1 bg-mycl-blue text-white px-4 text-sm font-bold rounded-lg hover:bg-mycl-blue-dark">Join</button>
                    </div>
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
                        <span className="flex-shrink-0 mx-4 text-neutral-400 text-xs">OR</span>
                        <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
                    </div>
                    <button onClick={() => setIsJoined(true)} className="w-full bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 hover:border-mycl-red text-foreground py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                        <UserPlus className="h-5 w-5 text-mycl-red" /> Create New Team
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
            {/* Team Banner */}
            <div className="relative bg-gradient-to-r from-mycl-darker to-mycl-dark overflow-hidden rounded-2xl border border-neutral-800 shadow-xl p-8">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Hexagon className="h-64 w-64 text-mycl-red" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-tr from-mycl-red to-mycl-blue p-1 rounded-2xl shadow-lg">
                            <div className="bg-mycl-darker h-20 w-20 flex items-center justify-center rounded-xl">
                                <Users className="h-10 w-10 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">RedTeamOps</h1>
                            <div className="flex items-center gap-4 text-sm text-neutral-400">
                                <span className="flex items-center gap-1"><Trophy className="h-4 w-4 text-mycl-blue" /> Rank: #14 Global</span>
                                <span className="flex items-center gap-1"><Crosshair className="h-4 w-4 text-mycl-red" /> 15,200 Points</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl w-full md:w-auto">
                            <p className="text-xs text-neutral-300 font-bold mb-2 uppercase">Invite Member Code</p>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg text-white font-bold tracking-widest bg-black/30 px-3 py-1 rounded">RTO-9XBV-42</span>
                                <button className="p-2 text-neutral-400 hover:text-white transition-colors bg-white/5 rounded-md hover:bg-white/10" title="Copy">
                                    <Copy className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {/* Leave Team Button */}
                        <button onClick={() => setIsJoined(false)} className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-4 rounded-xl border border-red-500/20 transition-colors flex flex-col items-center justify-center h-full gap-2" title="Leave Team">
                            <LogOut className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Members Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Team Squad (4/6)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Member 1 (You) */}
                    <div className="bg-white dark:bg-mycl-dark border-2 border-mycl-blue rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 w-full h-1.5 bg-mycl-blue"></div>
                        <div className="h-20 w-20 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4 mt-2">
                            <span className="font-bold text-2xl text-neutral-500">H</span>
                        </div>
                        <h3 className="font-bold text-lg">Hacker (You)</h3>
                        <p className="text-sm text-mycl-blue font-medium mb-4">Team Leader</p>
                        <div className="w-full grid grid-cols-2 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-auto">
                            <div>
                                <p className="text-xs text-neutral-500">Role</p>
                                <p className="font-bold text-sm">Exploitation</p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500">Contributions</p>
                                <p className="font-bold text-sm">3,400 Pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                        <div className="h-20 w-20 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4 mt-3">
                            <span className="font-bold text-2xl text-neutral-500">C</span>
                        </div>
                        <h3 className="font-bold text-lg">CipherMaster</h3>
                        <p className="text-sm text-neutral-500 font-medium mb-4">Member</p>
                        <div className="w-full grid grid-cols-2 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-auto">
                            <div>
                                <p className="text-xs text-neutral-500">Role</p>
                                <p className="font-bold text-sm">Cryptography</p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500">Contributions</p>
                                <p className="font-bold text-sm">5,100 Pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                        <div className="h-20 w-20 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4 mt-3">
                            <span className="font-bold text-2xl text-neutral-500">N</span>
                        </div>
                        <h3 className="font-bold text-lg">NullByte</h3>
                        <p className="text-sm text-neutral-500 font-medium mb-4">Member</p>
                        <div className="w-full grid grid-cols-2 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-auto">
                            <div>
                                <p className="text-xs text-neutral-500">Role</p>
                                <p className="font-bold text-sm">OSINT</p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500">Contributions</p>
                                <p className="font-bold text-sm">2,800 Pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Member 4 */}
                    <div className="bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                        <div className="h-20 w-20 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4 mt-3">
                            <span className="font-bold text-2xl text-neutral-500">V</span>
                        </div>
                        <h3 className="font-bold text-lg">VulnScanner</h3>
                        <p className="text-sm text-neutral-500 font-medium mb-4">Member</p>
                        <div className="w-full grid grid-cols-2 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-auto">
                            <div>
                                <p className="text-xs text-neutral-500">Role</p>
                                <p className="font-bold text-sm">Web App Sec</p>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500">Contributions</p>
                                <p className="font-bold text-sm">3,900 Pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Empty Slots */}
                    <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
                        <UserPlus className="h-10 w-10 text-neutral-400 mb-4" />
                        <h3 className="font-bold text-lg text-neutral-500">Empty Slot</h3>
                        <p className="text-sm text-neutral-500 text-center mt-2">Waiting for new recruit to join.</p>
                    </div>

                    <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
                        <UserPlus className="h-10 w-10 text-neutral-400 mb-4" />
                        <h3 className="font-bold text-lg text-neutral-500">Empty Slot</h3>
                        <p className="text-sm text-neutral-500 text-center mt-2">Waiting for new recruit to join.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
