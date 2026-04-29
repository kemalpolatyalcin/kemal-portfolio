export default function Home() {

    const projects = [
        {
            title: "Industry Summit '26",
            description: "High-traffic event platform engineered for 400+ active participants with robust performance and UI/UX.",
            tech: ["TSX", "CSS"],
            link: "#"
        },
        {
            title: "Cortex AI Assistant",
            description: "Multimodal AI desktop assistant processing computer vision and speech recognition for real-time responsiveness.",
            tech: ["Python", "FastAPI", "Docker", "Gemini LLM"],
            link: "#"
        },
        {
            title: "Kemal Portfolio",
            description: "A minimalist, high-performance personal portfolio built on a modern Next.js App Router architecture and server-side components.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
            link: "#"
        },
        {
            title: "Educate",
            description: "A global-scale technology initiative designed to  transform and innovate the traditional education model.",
            tech: ["Architecture", "Global Scale", "Innovation"],
            link: "#"
        },
        {
            title: "TS Calculator",
            description: "A high-precision financial tool built with strict type safety to calculate compound interest and future wealth projections for companies.",
            tech: ["TypeScript", "React", "Financial Logic"],
            link: "#"
        }

    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">

            <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

                <div className="z-10 text-center max-w-sm md:max-w-3xl space-y-8 md:space-y-10">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Kemal Polat Yalcin
                        </h1>
                        <p className="text-zinc-500 text-sm md:text-xl font-medium tracking-[0.2em] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                            Developer
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <button className="w-full sm:w-auto px-10 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            View Projects
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 border border-zinc-800 text-zinc-400 text-sm font-bold rounded-full hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-300">
                            Contact Me
                        </button>
                    </div>
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Featured Architecture
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        A selection of my recent work in AI automation, scalable event systems, and global technology initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white text-zinc-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold tracking-wide px-3 py-1 bg-[#0a0a0a] text-zinc-300 rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}