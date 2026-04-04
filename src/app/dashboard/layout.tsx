import { Navbar } from "@/components/navbar";
import { ChatbotWidget } from "@/components/chatbot-widget";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-mycl-darker">
            <Navbar isDashboard={true} />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* For Dashboard Users, the chatbot is registered (no limits) */}
            <ChatbotWidget isRegistered={true} />
        </div>
    );
}
