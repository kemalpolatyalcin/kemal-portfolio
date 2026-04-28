import type { Metadata } from "next";
import "./general.css";

export const metadata: Metadata = {
    title: "Kemal Polat Yalcin | Full-Stack Developer",
    description: "Portfolio of Kemal Polat Yalcin, Full-Stack Developer specializing in React, Node.js, and modern web technologies. Explore projects, skills, and contact information.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body className="antialiased bg-[#0a0a0a] text-white">
                {children}
            </body>
        </html>
    );
}