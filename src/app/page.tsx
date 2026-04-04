import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";
import Link from "next/link";
import { BookOpen, Shield, Target, Users, BookMarked, Mail, ArrowRight, Server, GlobeLock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
          <div className="absolute w-[500px] h-[500px] bg-mycl-red/20 dark:bg-mycl-red/10 blur-[100px] rounded-full top-[-20%] left-[-10%] -z-10"></div>
          <div className="absolute w-[500px] h-[500px] bg-mycl-blue/20 dark:bg-mycl-blue/10 blur-[100px] rounded-full bottom-[-20%] right-[-10%] -z-10"></div>

          <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-5xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-mycl-dark/50 px-3 py-1 text-sm font-medium backdrop-blur-sm shadow-sm space-x-2">
              <span className="flex h-2 w-2 rounded-full bg-mycl-red"></span>
              <span className="text-neutral-600 dark:text-neutral-300">Empowering the Digital Frontline</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Master Cybersecurity with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycl-red to-mycl-blue">MyCyberLab</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed border-l-4 border-mycl-red pl-6 text-left italic bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-r-lg shadow-sm">
              &quot;Menjadi pemacu utama dalam melahirkan generasi siber yang beretika, kompeten dan peka terhadap evolusi teknologi, demi menjamin kesejahteraan serta kedaulatan digital negara.&quot;
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-mycl-red hover:bg-mycl-red-dark text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-mycl-red/25 hover:shadow-mycl-red/40"
              >
                Start Your Journey <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-mycl-dark hover:bg-neutral-50 dark:hover:bg-neutral-900 text-foreground border border-neutral-200 dark:border-neutral-800 rounded-lg font-semibold flex items-center justify-center transition-all shadow-sm"
              >
                Log In to Platform
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Offerings Section */}
        <section className="w-full py-20 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Comprehensive <span className="text-mycl-blue">Ecosystem</span></h2>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                Everything you need to level up your cybersecurity skills, build your network, and dominate challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-mycl-red transition-colors overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-mycl-red/10 group-hover:bg-mycl-red/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <BookOpen className="w-6 h-6 text-mycl-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Learning Sources</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Access a vast library of curated resources, whitepapers, and guides to stay ahead of the latest cyber threats.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-mycl-blue transition-colors overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookMarked className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-mycl-blue/10 group-hover:bg-mycl-blue/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <BookMarked className="w-6 h-6 text-mycl-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Modules</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Step-by-step interactive lessons covering everything from network security to reverse engineering.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-mycl-red transition-colors overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-mycl-red/10 group-hover:bg-mycl-red/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Target className="w-6 h-6 text-mycl-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">MYCL Gym (CTF)</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Practice Capture The Flag (CTF) challenges in realistic virtual environments to hone your offensive capabilities.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-foreground transition-colors overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GlobeLock className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-neutral-100 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <GlobeLock className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Send friend requests, connect with fellow ethical hackers, and expand your professional cybersecurity network.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-mycl-blue transition-colors overflow-hidden lg:col-span-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-mycl-blue/10 group-hover:bg-mycl-blue/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Users className="w-6 h-6 text-mycl-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team Zone</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Form elite squads of up to 6 members using invite codes. Collaborate and climb the global leaderboards together.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group relative bg-white dark:bg-mycl-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-mycl-red transition-colors overflow-hidden lg:col-span-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mail className="w-32 h-32" />
                </div>
                <div className="w-12 h-12 bg-mycl-red/10 group-hover:bg-mycl-red/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Mail className="w-6 h-6 text-mycl-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Newsletter</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative z-10">
                  Subscribe to the MYCL E-Newsletter for weekly drops of zero-day analysis, industry news, and platform updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to defend the <span className="text-mycl-red">Digital Frontier?</span></h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
              Join thousands of aspiring ethical hackers. Sign up today and get instant access to our beginner-friendly modules.
            </p>
            <Link
              href="/signup"
              className="inline-flex px-10 py-5 bg-foreground text-background dark:bg-white dark:text-black rounded-lg font-bold text-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-2xl"
            >
              <Shield className="mr-2 h-6 w-6" /> Create Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget isRegistered={false} />
    </div>
  );
}
