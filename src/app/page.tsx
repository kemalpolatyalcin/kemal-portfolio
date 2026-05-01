"use client";
import { animate } from "framer-motion";
export default function Home() {

    const projects = [
        {
            title: "Industry Summit '26",
            description: "High-traffic event platform engineered for 400+ active participants with robust performance and UI/UX.",
            tech: ["TSX", "CSS"],
            link: "https://industrysummit.emu.edu.tr/"
        },
        {
            title: "Cortex AI Assistant",
            description: "Multimodal AI desktop assistant processing computer vision and speech recognition for real-time responsiveness.",
            tech: ["Python", "FastAPI", "Docker", "Gemini LLM"],
            link: "https://github.com/kemalpolatyalcin/cortex-ai-assistant"
        },
        {
            title: "Kemal Portfolio",
            description: "A minimalist, high-performance personal portfolio built on a modern Next.js App Router architecture and server-side components.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
            link: "https://github.com/kemalpolatyalcin/kemal-portfolio"
        },
        {
            title: "Educate",
            description: "A global-scale technology initiative designed to transform and innovate the traditional education model.",
            tech: ["Architecture", "Global Scale", "Innovation"],
            link: "https://github.com/kemalpolatyalcin/educate"
        },
        {
            title: "TS Calculator",
            description: "A high-precision financial tool built with strict type safety to calculate compound interest and future wealth projections for companies.",
            tech: ["TypeScript", "React", "Financial Logic"],
            link: "https://github.com/kemalpolatyalcin/ts-calculator"
        }
    ];

    const leadership = [
        {
            role: "Vice President",
            organization: "Industrial Engineering Club",
            description: "Spearheaded corporate technical visits to industry leaders like Kktcell and Metgin Ltd., bridging the gap between academic theory and corporate infrastructure.",
            date: "2025 - Present"
        }
    ];

    const techStack = [
        {
            category: "Architecture & Cloud",
            skills: ["AWS", "Microsoft Azure", "Docker", "PostgreSQL", "System Design"]
        },
        {
            category: "Backend & AI",
            skills: ["Python", "FastAPI", "Node.js", "Prisma ORM", "Gemini LLM"]
        },
        {
            category: "Frontend & UI",
            skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"]
        }
    ];

    const scrollToProjects = () => {
        const target = document.getElementById("projects");
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-emerald-200">

            <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
                <div className="hidden xl:flex flex-col items-center fixed bottom-0 left-12 z-50">
                    <div className="flex flex-col gap-6 mb-6">
                        <a href="https://github.com/kemalpolatyalcin" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kemal-polat-yal%C3%A7%C4%B1n-232aa3197/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                    </div>
                    <div className="w-px h-24 bg-zinc-800"></div>
                </div>
                <div className="hidden xl:flex flex-col items-center fixed bottom-0 right-12 z-50">
                    <a href="mailto:kemalpolatkemal1@gmail.com" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-2 transition-all duration-300" style={{ writingMode: 'vertical-rl' }}>
                        kemalpolatkemal1@gmail.com
                    </a>
                    <div className="w-px h-24 bg-zinc-800 mt-6"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-emerald-900/15 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

                <div className="z-10 text-center max-w-sm md:max-w-3xl space-y-8 md:space-y-10">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Kemal Polat Yalcin
                        </h1>
                        <p className="text-zinc-500 text-sm md:text-xl font-medium tracking-[0.2em] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                            Full-Stack Developer
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <button
                            onClick={scrollToProjects}
                            className="w-full sm:w-auto px-10 py-4 bg-white text-black text-center text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            View Projects
                        </button>
                        <a
                            href="/001-KemalPolat-Yalcin-CV.pdf"
                            download="Kemal_Polat_Yalcin_CV.pdf"
                            className="w-full sm:w-auto px-8 py-4 border border-zinc-700 bg-zinc-900/50 text-white text-sm font-bold rounded-full hover:bg-zinc-800 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Download CV
                        </a>
                        <a href="mailto:kemalpolatkemal1@gmail.com" className="w-full sm:w-auto px-10 py-4 border border-zinc-800 text-zinc-400 text-sm font-bold rounded-full hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-300">
                            Contact Me
                        </a>
                    </div>
                </div>
            </main>

            <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        A selection of my recent work in AI automation, scalable event systems, and global technology initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="group relative p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between block"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold group-hover:text-white text-zinc-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </div>
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
                        </a>
                    ))}
                </div>
            </section>
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Leadership & Impact
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Building communities, orchestrating large-scale events, and bridging the gap between academia and the tech industry.
                    </p>
                </div>

                <div className="space-y-8">
                    {leadership.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 md:p-8 bg-zinc-900/20 border border-zinc-800/40 rounded-2xl hover:bg-zinc-900/40 transition-colors">
                            <div className="md:w-1/4 shrink-0">
                                <span className="text-sm font-bold text-zinc-500 tracking-wider uppercase">{item.date}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-100 mb-1">{item.role}</h3>
                                <h4 className="text-md font-medium text-zinc-400 mb-4">{item.organization}</h4>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Technical Part
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        The infrastructure, frameworks, and AI models powering my systems.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {techStack.map((stack, index) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-xl font-semibold text-zinc-200 tracking-wide border-b border-zinc-800 pb-2">
                                {stack.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {stack.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-[#0a0a0a] border border-zinc-800 rounded-lg text-sm text-zinc-400 font-medium hover:border-zinc-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-8 text-center border-t border-zinc-900">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/kemalpolatyalcin" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kemal-polat-yal%C3%A7%C4%B1n-232aa3197/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                </div>
                <p className="text-zinc-600 text-sm">
                    © {new Date().getFullYear()} Kemal Polat Yalcin. All rights reserved.
                </p>
            </footer>
        </div>
    );
}