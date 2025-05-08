// app\eng\green\GreenPage.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Wind, Droplets, TreePine, Globe, Users, Book, DollarSign } from 'lucide-react';
import Image from 'next/image';
import './green.css';

export default function GreenPage() {
    // States for animations
    const [position, setPosition] = useState(0);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);
    const [activeTab, setActiveTab] = useState(0);
    const videoRef = useRef(null);

    // Effects for animations
    useEffect(() => {
        // Angular gradient
        const interval = setInterval(() => {
            setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
        }, 40);

        // Glow pulsation
        const glowInterval = setInterval(() => {
            setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
        }, 50);

        // Size pulsation
        const pulseInterval = setInterval(() => {
            setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(glowInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    // Effect for video control
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.9; // Slightly slow down the video for better effect
        }
    }, []);

    return (
        <main className="min-h-screen font-sans">
            {/* Hero section with video background */}
            <section className="relative py-8 md:py-0 md:h-screen flex items-center overflow-hidden">
                {/* Video background */}
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* MP4 video */}
                        <video
                            ref={videoRef}
                            className="absolute w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-uni-compressed.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/85 to-green-800/60 z-10"></div>

                {/* Decorative grid */}
                <div className="absolute inset-0 z-20">
                    <div className="w-full h-full grid grid-cols-12 grid-rows-6">
                        {Array.from({ length: 12 * 6 }).map((_, i) => (
                            <div key={i} className="relative">
                                <div className="absolute inset-0 border border-green-500/5"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-500/10 blur-3xl animate-float-slow z-20"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-green-300/10 blur-3xl animate-float-medium z-20"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-green-400/10 blur-3xl animate-float-fast z-20"></div>

                {/* Main content - moved to the left */}
                <div className="relative z-30 max-w-screen-xl mx-auto px-6 w-full">
                    <div className="md:max-w-xl">
                        <div className="relative inline-block mb-4">
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
                            ></div>
                            <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
                                Education for the future
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg text-left">
                            Green Economy
                        </h1>

                        <p className="text-xl text-white/80 mb-12 leading-relaxed text-left">
                            A practical approach to resource use — less waste, more benefits.
                            EMU University emphasizes sustainable development and teaches students
                            how to apply ecological principles in real life and profession.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-start">
                            <a
                                href="#more-info"
                                className="relative group overflow-hidden py-4 px-10 font-bold rounded-full transition-all duration-500 text-lg inline-block"
                                style={{
                                    background: `linear-gradient(${position}deg, #4ade80 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #4ade80 100%)`,
                                    color: '#022c22',
                                    transform: `scale(${pulseSize})`,
                                }}
                            >
                                <span className="relative z-10 text-white">Learn More</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/20 to-transparent transition-transform duration-500"></div>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center z-50">
                    <div className="w-0.5 h-16 bg-white/30 mb-2 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-white absolute top-0 animate-scrollDown"></div>
                    </div>
                    <span className="text-white/70 text-xs uppercase tracking-widest">Scroll</span>
                </div>
            </section>

            {/* "About Us" section */}
            <section id="more-info" className="py-16 md:py-24 px-6 bg-white relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 -z-10"></div>
                <div className="absolute top-1/4 left-10 w-32 h-32 rotate-45 border-4 border-green-100 rounded-3xl -z-10"></div>
                <div className="absolute bottom-10 right-32 w-16 h-16 bg-green-100 rounded-full -z-10"></div>

                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:gap-[50px] gap-[10px]">
                        <div>
                            <div className="relative inline-block mb-4">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
                                ></div>
                                <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
                                    Education for the future
                                </span>
                            </div>


                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">EMU University for <span className="text-green-600">conscious consumption</span></h2>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 mb-6">
                                    The university is gradually implementing principles of green economy — less paper, rational use of electricity,
                                    waste sorting, and careful attitude towards resources have become the norm of everyday life on campus. We don't aim for show,
                                    we simply do what we consider logical and necessary.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Special attention is paid to everyday details: turning off lights in empty classrooms, not printing unnecessarily, reusing
                                    what can still be used. All this doesn't require special effort but gives results in the long run.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Topics related to sustainable development, energy conservation, and ecology appear in the courses — not as a separate discipline,
                                    but as part of the real world picture. Many students come up with initiatives themselves — organizing actions, projects, doing something locally.
                                </p>

                                <p className="text-gray-700 mb-8">
                                    It's important to us that the sustainable approach is not an obligation, but part of a mindset. No pressure, no slogans. Just a habit
                                    of thinking ahead and using resources wisely.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green_university.webp"
                                    alt="Green University Students"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="absolute -top-5 -right-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
                            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainable Development Goals */}
            <section className="py-16 px-6 bg-gray-50- bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">UN Goals</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sustainable Development Goals</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The Green University supports and implements sustainable development goals
                            defined by the United Nations in its activities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "07",
                                title: "Affordable and Clean Energy",
                                description: "Development of renewable energy sources to create a sustainable energy system",
                                icon: <Wind size={28} />,
                                color: "bg-yellow-500",
                                hover: "group-hover:bg-yellow-400",
                                border: "border-yellow-500",
                            },
                            {
                                number: "13",
                                title: "Climate Action",
                                description: "Taking action to combat climate change and address environmental problems",
                                icon: <Leaf size={28} />,
                                color: "bg-blue-500",
                                hover: "group-hover:bg-blue-400",
                                border: "border-blue-500",
                            },
                            {
                                number: "14",
                                title: "Life Below Water",
                                description: "Conservation and sustainable use of oceans, seas, and marine resources",
                                icon: <Droplets size={28} />,
                                color: "bg-blue-700",
                                hover: "group-hover:bg-blue-600",
                                border: "border-blue-700",
                            },
                            {
                                number: "15",
                                title: "Life on Land",
                                description: "Protect and restore terrestrial ecosystems and combat desertification",
                                icon: <TreePine size={28} />,
                                color: "bg-green-600",
                                hover: "group-hover:bg-green-500",
                                border: "border-green-600",
                            },
                        ].map((goal, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 relative ${goal.border} border-l-4`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 ${goal.color} text-white rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 ${goal.hover}`}>
                                            {goal.icon}
                                        </div>
                                        <span className="text-4xl font-bold text-gray-300">{goal.number}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                                    <p className="text-gray-600">{goal.description}</p>
                                </div>
                                <div className="hidden h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}