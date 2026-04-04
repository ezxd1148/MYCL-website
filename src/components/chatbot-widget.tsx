"use client";

import * as React from "react";
import { MessageSquare, X, Send, History } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "user" | "bot";
    content: string;
};

export function ChatbotWidget({ isRegistered = false }: { isRegistered?: boolean }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState<Message[]>([
        { id: "init", role: "bot", content: "Hello! How can I help you with your cybersecurity journey today?" }
    ]);
    const [input, setInput] = React.useState("");

    // Logic to simulate constraints and simple response
    const maxChats = 5;
    const userMessagesCount = messages.filter(m => m.role === "user").length;

    const isLimitReached = !isRegistered && userMessagesCount >= maxChats;

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLimitReached) return;

        const newMsg: Message = { id: Date.now().toString(), role: "user", content: input };
        setMessages(prev => [...prev, newMsg]);
        setInput("");

        // Simulate bot reply
        setTimeout(() => {
            let replyContent = "That's an interesting question. Our modules cover this extensively!";
            if (!isRegistered && userMessagesCount + 1 >= maxChats) {
                replyContent = "You have reached your 5 chat limit. Please sign up to continue chatting with the AI.";
            }
            setMessages(prev => [...prev, { id: Date.now().toString(), role: "bot", content: replyContent }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-80 sm:w-96 h-[500px] max-h-[70vh] bg-background border border-mycl-light-border dark:border-mycl-dark-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-mycl-dark text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="h-5 w-5 text-mycl-red" />
                            <span className="font-semibold text-mycl-light">MYCL Assistant</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button title="History" className="text-neutral-400 hover:text-white transition-colors">
                                <History className="h-4 w-4" />
                            </button>
                            <button title="Close" onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-mycl-darker/50">
                        {messages.map((m) => (
                            <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                                <div className={cn("max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                                    m.role === "user"
                                        ? "bg-mycl-blue text-white rounded-br-none"
                                        : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-bl-none shadow-sm"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLimitReached && (
                            <div className="text-xs text-center text-mycl-red p-2 bg-mycl-red/10 rounded-md">
                                Chat limit reached. Please sign up or log in.
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-mycl-dark border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLimitReached}
                            placeholder={isLimitReached ? "Limit reached" : "Type a message..."}
                            className="flex-1 bg-neutral-100 dark:bg-neutral-900 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mycl-blue disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isLimitReached || !input.trim()}
                            className="p-2 rounded-full bg-mycl-blue text-white hover:bg-mycl-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full bg-mycl-red hover:bg-mycl-red-dark text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                >
                    <MessageSquare className="h-6 w-6" />
                </button>
            )}
        </div>
    );
}
