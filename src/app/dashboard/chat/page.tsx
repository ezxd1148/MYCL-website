"use client";

import React from "react";
import { Send, Users, UserCircle, Paperclip } from "lucide-react";

export default function ChatPage() {
    // Initial Contacts State
    const [contacts, setContacts] = React.useState([
        {
            id: 1, name: "CipherMaster", online: true, messages: [
                { text: "Hey bro! Did you manage to solve the Active Directory challenge?", sender: "them" },
                { text: "Not yet, currently studying the Kerberoasting concept. I might need your help tonight!", sender: "me" }
            ]
        },
        {
            id: 2, name: "RedTeamOps", online: true, messages: [
                { text: "Welcome to the team!", sender: "them" }
            ]
        },
        {
            id: 3, name: "NullByte", online: false, messages: [
                { text: "Check out this new payload.", sender: "them" }
            ]
        }
    ]);

    const [activeContactId, setActiveContactId] = React.useState(1);
    const [inputText, setInputText] = React.useState("");

    const activeChat = contacts.find(c => c.id === activeContactId);

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!inputText.trim()) return;

        setContacts(prev => prev.map(c => {
            if (c.id === activeContactId) {
                return { ...c, messages: [...c.messages, { text: inputText, sender: "me" }] }
            }
            return c;
        }));
        setInputText("");
    };

    return (
        <div className="h-[calc(100vh-10rem)] flex flex-col lg:flex-row gap-6 animate-in fade-in duration-500">
            {/* User/Friends Sidebar */}
            <div className="w-full lg:w-80 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h2 className="font-bold flex items-center gap-2"><Users className="h-5 w-5 text-mycl-blue" /> Contacts</h2>
                    <span className="bg-mycl-red text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{contacts.filter(c => c.online).length} Online</span>
                </div>
                <div className="space-y-1 overflow-y-auto flex-1">
                    {contacts.map((user) => {
                        const lastMessage = user.messages.length > 0 ? user.messages[user.messages.length - 1].text : "";
                        return (
                            <div
                                key={user.id}
                                onClick={() => setActiveContactId(user.id)}
                                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeContactId === user.id ? "bg-mycl-blue/10 dark:bg-mycl-blue/10" : "hover:bg-neutral-100 dark:hover:bg-neutral-900"}`}
                            >
                                <div className="relative">
                                    <UserCircle className="h-10 w-10 text-neutral-400" />
                                    <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-mycl-dark ${user.online ? "bg-green-500" : "bg-neutral-300"}`}></span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="font-bold text-sm">{user.name}</p>
                                    <p className="text-xs text-neutral-500 truncate">{lastMessage}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Main Chat Interface */}
            <div className="flex-1 bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col shadow-sm overflow-hidden">
                {activeChat ? (
                    <>
                        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 bg-neutral-50 dark:bg-mycl-darker/50">
                            <UserCircle className="h-8 w-8 text-neutral-400" />
                            <div>
                                <h2 className="font-bold text-sm">{activeChat.name}</h2>
                                <p className={`text-xs font-medium ${activeChat.online ? 'text-green-500' : 'text-neutral-500'}`}>{activeChat.online ? 'Online' : 'Offline'}</p>
                            </div>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-neutral-50 dark:bg-neutral-900/20">
                            {activeChat.messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] p-3 shadow-sm text-sm ${msg.sender === 'me' ? 'bg-mycl-blue border border-mycl-blue text-white rounded-2xl rounded-tr-none' : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-mycl-dark flex items-center gap-3">
                            <button type="button" className="h-10 w-10 text-neutral-400 hover:text-mycl-blue hover:bg-mycl-blue/10 rounded-full flex items-center justify-center transition-colors">
                                <Paperclip className="h-5 w-5" />
                            </button>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-mycl-blue transition-colors"
                            />
                            <button type="submit" className="h-10 w-10 bg-mycl-blue hover:bg-mycl-blue-dark text-white rounded-full flex items-center justify-center transition-colors">
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-neutral-500">
                        Select a contact to start chatting.
                    </div>
                )}
            </div>
        </div>
    )
}
