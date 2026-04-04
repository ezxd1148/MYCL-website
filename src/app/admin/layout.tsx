import Link from "next/link";
import { ShieldAlert, LogOut, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-neutral-50 dark:bg-mycl-darker overflow-hidden">

            {/* Admin Sidebar */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-mycl-dark border-r border-neutral-200 dark:border-neutral-800 flex flex-col transition-colors">
                <div className="h-16 flex items-center px-6 border-b border-neutral-200 dark:border-neutral-800">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShieldAlert className="h-6 w-6 text-mycl-red" />
                        <span className="font-bold tracking-tight text-lg">
                            <span className="text-foreground">MYCL </span>
                            <span className="text-mycl-red">Admin</span>
                        </span>
                    </Link>
                </div>
                <div className="p-4 flex-1 overflow-y-auto space-y-2">
                    <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center space-x-3 cursor-pointer">
                        <LayoutDashboard className="h-4 w-4 text-mycl-blue" />
                        <span className="text-sm font-medium">Dashboard</span>
                    </div>
                    <div className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg flex items-center space-x-3 cursor-pointer transition-colors">
                        <span className="h-2 w-2 rounded-full bg-mycl-red"></span>
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Users</span>
                    </div>
                    <div className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg flex items-center space-x-3 cursor-pointer transition-colors">
                        <span className="h-2 w-2 rounded-full bg-mycl-blue"></span>
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Content</span>
                    </div>
                </div>
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                    <ThemeToggle />
                    <Link href="/login" className="p-2 text-neutral-500 hover:text-mycl-red transition-colors" title="Logout">
                        <LogOut className="h-5 w-5" />
                    </Link>
                </div>
            </aside>

            {/* Main Admin Area */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
