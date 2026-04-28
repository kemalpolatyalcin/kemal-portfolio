export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

            <div className="z-10 text-center max-w-3xl space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    Kemal Polat Yalcin
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
                    Full-Stack Developer
                </p>

                <div className="pt-8 flex items-center justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200">
                        View Projects
                    </button>
                    <button className="px-6 py-3 border border-zinc-700 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors duration-200">
                        Contact Me
                    </button>
                </div>
            </div>

        </main>
    );
}