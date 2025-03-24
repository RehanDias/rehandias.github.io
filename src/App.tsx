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
    const [expandedCards, setExpandedCards] = useState<{
        [key: number]: boolean;
    }>({});
    const fullText = "Backend Developer_";
    const [visibleCount, setVisibleCount] = useState(4);

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
            title: "Ara Spill - ItszahraNur Products",
            description:
                "Modern web platform showcasing product recommendations and reviews from influencer ItszahraNur (Ara). Features include detailed product reviews, usage tips, and direct purchase links. Built with Next.js and TypeScript for optimal performance and user experience. Perfect for followers looking to discover Ara's favorite products.",
            shortDescription:
                "Curated collection of beauty and lifestyle products recommended by ItszahraNur.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            website: "https://ara-spill.vercel.app/",
            type: "website",
        },
        {
            title: "Indonesian Calendar API",
            description:
                "Comprehensive Indonesian calendar API providing detailed information about dates, holidays, and special events. Features include national holidays, Islamic dates, and cultural celebrations. Supports current and past years with accurate date calculations and holiday information.",
            shortDescription:
                "Complete Indonesian calendar and holiday data API with comprehensive date information.",
            tech: ["Node.js", "API", "Date Processing"],
            apiEndpoint: "https://tanggalan.vercel.app/api/calendar?year=2024",
            type: "api",
        },
        {
            title: "Form C1 KPU Image Downloader",
            description:
                "Tool for downloading Form C1 images from Indonesian General Election Commission (KPU) API. Features include batch downloading, automatic retry on failure, and support for multiple polling stations. Available in both Node.js and Python implementations for flexibility. Perfect for election monitoring and data analysis.",
            shortDescription:
                "Automated downloader for Form C1 election documents from KPU API in Node.js and Python.",
            tech: ["Node.js", "Python", "API Integration"],
            repo: "https://github.com/RehanDias/sirekapC1-download",
            type: "repo",
        },
        {
            title: "TikTok Downloader & Stalker",
            description:
                "Modern web application for downloading TikTok videos without watermark and stalking user profiles. Features include HD video downloads, profile analytics, video statistics, and comprehensive user information display. Built with a clean and responsive UI using Tailwind CSS for optimal user experience.",
            shortDescription:
                "Modern TikTok video downloader and user profile analyzer with clean UI.",
            tech: ["React", "Tailwind CSS", "TikTok API"],
            website: "https://tiktok-downloader-lime-mu.vercel.app/",
            type: "website",
        },
        {
            title: "Indonesia Earthquake Monitor",
            description:
                "Modern earthquake monitoring dashboard displaying real-time seismic activity data from BMKG (Indonesian Meteorological Agency). Features include latest earthquake information, interactive maps, and magnitude filtering. Built with modern UI using Tailwind CSS for a clean and responsive design.",
            shortDescription:
                "Real-time earthquake monitoring dashboard using BMKG data with modern UI.",
            tech: ["React", "Tailwind CSS", "BMKG API"],
            website: "https://rehandias.github.io/gempa",
            type: "website",
        },
        {
            title: "Damarsari Rent Car",
            description:
                "Static car rental website with WhatsApp integration for seamless booking process. Features include car catalog, pricing information, and direct booking through WhatsApp. Built with modern web technologies for a responsive and user-friendly experience. No database required, making it lightweight and easy to maintain.",
            shortDescription:
                "Car rental website with WhatsApp integration for direct bookings.",
            tech: ["HTML", "CSS", "JavaScript"],
            website: "https://damarsari-rentcar.github.io/",
            type: "website",
        },
        {
            title: "PDDIKTI Search API",
            description:
                "Quick and efficient API for accessing Indonesian higher education student data from PDDIKTI database. Eliminates the need to navigate through PDDIKTI's website by providing direct access to student information through a simple API endpoint. Perfect for student verification systems and academic data integration.",
            shortDescription:
                "Fast API for accessing PDDIKTI student database without visiting the website.",
            tech: ["Node.js", "API"],
            apiEndpoint:
                "https://pddikti-theta.vercel.app/api/search?query={student_name}",
            type: "api",
        },
        {
            title: "Simple AI API",
            description:
                "Streamlined AI API powered by Claude Sonnet 3.5 for natural language processing and conversational AI. Provides simple question-answering capabilities with easy-to-use endpoint. Perfect for quick AI integrations and prototypes.",
            shortDescription:
                "Simple AI API powered by Claude Sonnet 3.5 for quick integrations.",
            tech: ["Node.js", "Claude AI", "API"],
            apiEndpoint:
                "https://ai-rehandias.vercel.app/api/ai?chat=[your_question]",
            type: "api",
        },
        {
            title: "TikTok Live API",
            description:
                "Real-time TikTok Live Stream API providing comprehensive streaming data. Features include FLV/HLS stream URLs, live viewer counts, gift tracking, chat messages, and streamer profile information. Built with Node.js and WebSocket for real-time updates.",
            shortDescription:
                "Real-time TikTok Live Stream API with advanced streaming features and live data tracking.",
            tech: ["Node.js", "WebSocket", "API"],
            apiEndpoint:
                "https://tiktok-live-stream.vercel.app/api/tiktok-live/{username}",
            type: "api",
        },
        {
            title: "TikTok Unofficial API",
            description:
                "Feature-rich TikTok downloader API with multiple versions (v1-v4). Each version offers unique capabilities: v1: Basic download, v2: HD quality, v3: With music, v4: Multiple formats. Built for high performance and reliability.",
            shortDescription:
                "Multi-version TikTok downloader API with advanced features and format options.",
            tech: ["Node.js", "API"],
            apiEndpoint: `https://api-tiktok-downloader.vercel.app/api/{version}/download?url=VIDEO_URL_HERE`,
            type: "api",
        },
        {
            title: "TikTok Downloader CLI",
            description:
                "Command-line interface tool for batch downloading TikTok content. Features include watermark removal, format selection, and bulk processing. Perfect for content creators and archivists.",
            shortDescription:
                "Advanced CLI tool for TikTok content downloads with batch processing.",
            tech: ["Node.js", "CLI", "npm"],
            repo: "https://github.com/rehandias/tiktok-downloader-console",
            type: "repo",
        },
        {
            title: "Cek Tagihan UMB",
            description:
                "Automated payment status checker for UMB (Universitas Mercu Buana) students. The tool verifies if tuition payments are completed and displays detailed payment information including amount due, payment deadlines, and payment methods if any outstanding balance exists.",
            shortDescription:
                "Payment status checker showing outstanding tuition fees and payment details for UMB students.",
            tech: ["Python", "Pyppeteer", "Web Scraping"],
            repo: "https://github.com/RehanDias/cekTagihanUmb",
            type: "repo",
        },
    ];

    // Sort projects by type and quantity
    const sortedProjects = [
        ...projects.filter((p) => p.type === "website"),
        ...projects.filter((p) => p.type === "api"),
        ...projects.filter((p) => p.type === "repo"),
    ];

    const toggleDescription = (index: number) => {
        setExpandedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const getVisibleProjects = () => {
        return sortedProjects.slice(0, visibleCount);
    };

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, projects.length));
    };

    return (
        <div className="min-h-screen bg-[#2A2D3E] pixel-bg crt-effect">
            <div className="scanlines"></div>
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center bg-[#2A2D3E] overflow-hidden px-4">
                {/* Grid Background */}
                <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-10 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                    {Array.from({ length: 80 }).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square border border-[#50fa7b]"
                        ></div>
                    ))}
                </div>

                {/* Radial Glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, rgba(80, 250, 123, 0.1) 0%, transparent 70%)",
                        animation: "pulse 4s infinite",
                    }}
                ></div>

                {/* Content */}
                <div className="text-center z-10 px-6 sm:px-8 transform hover:scale-105 transition-transform">
                    <div className="bg-[#44475a] p-6 sm:p-8 retro-border rounded-lg border-[#50fa7b] hover-glow">
                        <div className="text-[#50fa7b] mb-4 text-xs animate-pulse sm:mb-6">
                            PRESS START
                        </div>
                        <h1 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#f8f8f2] glitch-text">
                            Rehan Dias Pratama
                        </h1>
                        <h2 className="text-lg sm:text-xl mb-4 sm:mb-6 text-[#bd93f9] whitespace-nowrap overflow-hidden text-ellipsis">
                            &gt; {text}
                            <span className="typing-cursor">|</span>
                        </h2>

                        {/* Social Icons */}
                        <div className="flex justify-center space-x-4 sm:space-x-6">
                            <a
                                href="https://github.com/rehandias"
                                className="p-2 text-[#50fa7b] transform hover:scale-110 hover:text-[#f1fa8c] transition-all duration-300 ease-in-out hover:rotate-6 hover:shadow-glow"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rehan-dias-pratama/"
                                className="p-2 text-[#50fa7b] transform hover:scale-110 hover:text-[#f1fa8c] transition-all duration-300 ease-in-out hover:rotate-6 hover:shadow-glow"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://instagram.com/rehandiazz"
                                className="p-2 text-[#50fa7b] transform hover:scale-110 hover:text-[#f1fa8c] transition-all duration-300 ease-in-out hover:rotate-6 hover:shadow-glow"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="mailto:rehanpratama282@gmail.com"
                                className="p-2 text-[#50fa7b] transform hover:scale-110 hover:text-[#f1fa8c] transition-all duration-300 ease-in-out hover:rotate-6 hover:shadow-glow"
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
            <section className="py-16 px-4 md:px-8 bg-[#282a36] pixel-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-[#50fa7b] glitch-text">
                        FEATURED PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {getVisibleProjects().map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#44475a] retro-border rounded-lg overflow-hidden hover-glow border-[#50fa7b] flex flex-col"
                            >
                                {/* Card Header */}
                                <div className="p-5 bg-[#343746] border-b border-[#50fa7b]/20">
                                    <h3 className="text-lg font-bold mb-2 text-[#f1fa8c]">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-[#282a36] text-[#50fa7b] rounded-full text-xs border border-[#50fa7b] hover-glow"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-5 flex-grow flex flex-col gap-4">
                                    <p className="text-sm text-[#f8f8f2] leading-relaxed">
                                        {expandedCards[index]
                                            ? project.description
                                            : project.shortDescription}
                                        <button
                                            onClick={() =>
                                                toggleDescription(index)
                                            }
                                            className="ml-2 text-[#bd93f9] hover:text-[#ff79c6] transition-colors"
                                        >
                                            {expandedCards[index]
                                                ? "Show less"
                                                : "Read more"}
                                        </button>
                                    </p>

                                    {project.apiEndpoint && (
                                        <div className="mt-2">
                                            <h4 className="text-sm font-bold text-[#bd93f9] mb-2">
                                                API Endpoint:
                                            </h4>
                                            <div className="relative">
                                                <code className="block bg-[#282a36] p-3 rounded text-xs text-[#f8f8f2] overflow-x-auto max-w-full">
                                                    <div className="whitespace-normal break-all">
                                                        {project.apiEndpoint}
                                                    </div>
                                                </code>
                                            </div>
                                        </div>
                                    )}

                                    {project.website && (
                                        <div className="p-5 bg-[#343746] border-t border-[#50fa7b]/20">
                                            <a
                                                href={project.website}
                                                className="inline-flex items-center relative group"
                                            >
                                                <span className="flex items-center text-sm text-[#50fa7b] group-hover:text-[#f1fa8c] transition-all duration-300">
                                                    <span className="group-hover:ml-2 transition-all duration-300 font-['Press_Start_2P'] text-xs">
                                                        {">"}
                                                    </span>
                                                    <span className="ml-2 group-hover:tracking-[2px] transition-all duration-300 group-hover:animate-pulse">
                                                        VISIT WEBSITE
                                                    </span>
                                                    <Globe className="ml-2 w-4 h-4 group-hover:animate-[spin_2s_linear_infinite]" />
                                                </span>
                                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-[#50fa7b]/10 blur-sm transition-all duration-300 -skew-x-12"></div>
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Card Footer */}
                                {project.repo && (
                                    <div className="p-5 bg-[#343746] border-t border-[#50fa7b]/20">
                                        <a
                                            href={project.repo}
                                            className="inline-flex items-center relative group"
                                        >
                                            <span className="flex items-center text-sm text-[#50fa7b] group-hover:text-[#f1fa8c] transition-all duration-300">
                                                <span className="group-hover:ml-2 transition-all duration-300 font-['Press_Start_2P'] text-xs">
                                                    {">"}
                                                </span>
                                                <span className="ml-2 group-hover:tracking-[2px] transition-all duration-300 group-hover:animate-pulse">
                                                    VIEW ON GITHUB
                                                </span>
                                                <Github className="ml-2 w-4 h-4 group-hover:rotate-12 transition-all duration-300" />
                                            </span>
                                            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-[#50fa7b]/10 blur-sm transition-all duration-300 -skew-x-12"></div>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {visibleCount < projects.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={loadMore}
                                className="inline-flex items-center relative group bg-[#343746] px-6 py-3 rounded-lg border border-[#50fa7b]/20 hover:bg-[#50fa7b]/10"
                            >
                                <span className="flex items-center text-sm text-[#50fa7b] group-hover:text-[#f1fa8c] transition-all duration-300">
                                    <span className="group-hover:ml-2 transition-all duration-300 font-['Press_Start_2P'] text-xs">
                                        {">"}
                                    </span>
                                    <span className="ml-2 group-hover:tracking-[2px] transition-all duration-300 group-hover:animate-pulse">
                                        LOAD MORE [{visibleCount}/
                                        {projects.length}]
                                    </span>
                                </span>
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-[#50fa7b]/10 blur-sm transition-all duration-300 -skew-x-12"></div>
                            </button>
                        </div>
                    )}
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
                            href="mailto:rehanpratama282@gmail.com"
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
                        © 2025 Rehan Dias Pratama. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
