import { useEffect, useState } from "react";
import {
    Github,
    Linkedin,
    Mail,
    Server,
    Code2,
    Globe,
    Instagram,
} from "lucide-react";

function App() {
    const [text, setText] = useState("");
    const fullText = "Backend Developer_";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const projects = [
        {
            title: "TikTok Unofficial API",
            description:
                "A robust Node.js-based unofficial API for TikTok, providing access to various TikTok features and data endpoints.",
            tech: ["Node.js", "Express", "API"],
            apiEndpoint:
                "https://api-tiktok-downloader.vercel.app/api/v1/download?url=VIDEO_URL_HERE",
            usage: `fetch('https://api-tiktok-downloader.vercel.app/api/v1/download?url=VIDEO_URL_HERE')
.then(response => response.json())
.then(data => console.log(data));`,
            type: "api",
        },
        {
            title: "TikTok Downloader CLI",
            description:
                "Command-line tool for downloading TikTok videos and images without watermark. Built with Node.js.",
            tech: ["Node.js", "CLI", "npm"],
            link: "https://github.com/rehandias/tiktok-downloader-console",
            type: "cli",
        },
        {
            title: "Cek Tagihan UMB",
            description:
                "Python-based automation tool to check UMB (Universitas Mercu Buana) student payment bills using web scraping.",
            tech: ["Python", "Selenium", "Web Scraping"],
            link: "https://github.com/RehanDias/cekTagihanUmb",
            type: "cli",
        },
    ];

    return (
        <div className="min-h-screen bg-[#2A2D3E] pixel-bg crt-effect">
            <div className="scanlines"></div>

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center bg-[#2A2D3E] overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-10">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square border border-[#50fa7b]"
                        ></div>
                    ))}
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, rgba(80, 250, 123, 0.1) 0%, transparent 70%)",
                        animation: "pulse 4s infinite",
                    }}
                ></div>
                <div className="text-center z-10 px-4 transform hover:scale-105 transition-transform">
                    <div className="bg-[#44475a] p-8 retro-border rounded-lg border-[#50fa7b] hover-glow">
                        <div className="text-[#50fa7b] mb-6 text-xs animate-pulse">
                            PRESS START
                        </div>
                        <h1 className="text-4xl mb-4 text-[#f8f8f2] glitch-text">
                            Rehan Dias Pratama
                        </h1>
                        <h2 className="text-xl mb-6 text-[#bd93f9]">
                            &gt; {text}
                            <span className="typing-cursor">|</span>
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://github.com/rehandias"
                                className="p-2 text-[#50fa7b] hover:text-[#f1fa8c] transition-colors hover-glow"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/rehandias"
                                className="p-2 text-[#50fa7b] hover:text-[#f1fa8c] transition-colors hover-glow"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://instagram.com/rehandias"
                                className="p-2 text-[#50fa7b] hover:text-[#f1fa8c] transition-colors hover-glow"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="mailto:contact@rehandias.dev"
                                className="p-2 text-[#50fa7b] hover:text-[#f1fa8c] transition-colors hover-glow"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-12 text-center text-[#50fa7b] glitch-text">
                    ABOUT ME
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <div className="bg-[#44475a] p-6 retro-border rounded-lg border-[#50fa7b] hover-glow">
                            <p className="text-sm leading-relaxed text-[#f8f8f2]">
                                I'm a passionate Backend Developer specializing
                                in Node.js development. With a strong foundation
                                in building scalable APIs and server-side
                                applications, I focus on creating efficient and
                                reliable backend solutions that power modern web
                                applications.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6">
                        <div className="bg-[#44475a] p-4 retro-border rounded-lg border-[#50fa7b] hover-glow">
                            <Server className="w-8 h-8 mb-2 text-[#50fa7b]" />
                            <h3 className="text-sm text-[#f8f8f2]">
                                Backend Dev
                            </h3>
                        </div>
                        <div className="bg-[#44475a] p-4 retro-border rounded-lg border-[#50fa7b] hover-glow">
                            <Code2 className="w-8 h-8 mb-2 text-[#50fa7b]" />
                            <h3 className="text-sm text-[#f8f8f2]">
                                API Design
                            </h3>
                        </div>
                        <div className="bg-[#44475a] p-4 retro-border rounded-lg border-[#50fa7b] hover-glow">
                            <Globe className="w-8 h-8 mb-2 text-[#50fa7b]" />
                            <h3 className="text-sm text-[#f8f8f2]">
                                Web Services
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-4 md:px-8 bg-[#282a36] pixel-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-12 text-center text-[#50fa7b] glitch-text">
                        FEATURED PROJECTS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#44475a] retro-border rounded-lg overflow-hidden hover-glow border-[#50fa7b]"
                            >
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2 text-[#f1fa8c]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[#f8f8f2] mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-[#282a36] text-[#50fa7b] rounded-full text-xs border border-[#50fa7b] hover-glow"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.apiEndpoint && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-bold text-[#bd93f9] mb-2">
                                                API Endpoint:
                                            </h4>
                                            <code className="block bg-[#282a36] p-2 rounded text-xs text-[#f8f8f2] overflow-x-auto">
                                                {project.apiEndpoint}
                                            </code>
                                            <h4 className="text-sm font-bold text-[#bd93f9] mt-4 mb-2">
                                                Usage:
                                            </h4>
                                            <code className="block bg-[#282a36] p-2 rounded text-xs text-[#f8f8f2] whitespace-pre">
                                                {project.usage}
                                            </code>
                                        </div>
                                    )}

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center text-[#50fa7b] hover:text-[#f1fa8c] transition-colors hover-glow"
                                        >
                                            View on GitHub{" "}
                                            <Github className="ml-2 w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-8 text-[#50fa7b] glitch-text">
                        GET IN TOUCH
                    </h2>
                    <div className="bg-[#44475a] p-8 retro-border rounded-lg border-[#50fa7b] hover-glow">
                        <p className="text-sm text-[#f8f8f2] mb-8">
                            I'm always interested in hearing about new projects
                            and opportunities.
                        </p>
                        <a
                            href="mailto:contact@rehandias.dev"
                            className="inline-flex items-center bg-[#50fa7b] text-[#282a36] px-6 py-3 rounded-lg retro-border hover:bg-[#f1fa8c] transition-colors hover-glow"
                        >
                            Contact Me <Mail className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#282a36] text-[#f8f8f2] py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm">
                        © 2024 Rehan Dias Pratama. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
