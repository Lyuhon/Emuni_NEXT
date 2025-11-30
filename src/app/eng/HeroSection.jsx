import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    // Animation states
    const [position, setPosition] = useState(45);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    // Animation effects
    useEffect(() => {
        // Button glow animation
        const glowInterval = setInterval(() => {
            setGlowIntensity(prev => (prev >= 1 ? 0 : prev + 0.1));
        }, 200);

        // Button gradient animation
        const positionInterval = setInterval(() => {
            setPosition(prev => (prev >= 360 ? 0 : prev + 1));
        }, 100);

        // Button pulse animation
        const pulseInterval = setInterval(() => {
            setPulseSize(prev => (prev >= 1.03 ? 1 : 1.03));
        }, 2000);

        return () => {
            clearInterval(glowInterval);
            clearInterval(positionInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    // Fade in animation
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    return (
        <>
            {/* Hero Section - Mobile */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="md:hidden flex relative bg-gradient-to-br from-[#6b0e55] to-[#8f3178] text-white py-20 md:py-32 overflow-hidden md:mt-[0px] mt-[-50px]"
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
                        <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#f9eef5] blur-3xl opacity-20"></div>
                    <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-white blur-3xl opacity-10"></div>
                    <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#6b0e55] blur-xl opacity-30"></div>
                </div>

                <div className="max-w-screen-xl container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
                    <motion.div
                        className="md:w-1/2 mb-12 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                                Choose a future worthy of you
                            </h1>

                            <h1 className="hidden text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                EMU University <br />
                                <span className='hidden font-[500] text-1xl md:text-2xl lg:text-3xl'>enrollment for 2025-2026</span>
                            </h1>
                        </div>
                        <p className="hidden text-xl mb-8 opacity-90 max-w-lg">
                            <span className='font-[500] text-1xl md:text-2xl lg:text-3xl'> Choose a future worthy of you. </span>
                            High-level education is your key to success.
                        </p>
                        <div className="flex flex-wrap gap-4">

                            {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: pulseSize }}
                                transition={{ duration: 0.2 }}
                                className="pop-form-trigger mt-8 mb-1 py-4 px-10 text-[#6b0e55] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
                                style={{
                                    background: `linear-gradient(${position}deg, 
                                    #f7e282 0%, 
                                    #e4c254 25%, 
                                    #f3d651 50%, 
                                    #dbb845 75%,
                                    #f7e282 100%)`,
                                    boxShadow: `0 5px 15px rgba(198, 144, 38, 0.5), 0 0 ${20 + glowIntensity * 20}px rgba(247, 226, 130, ${0.5 + glowIntensity * 0.3})`
                                }}
                            >
                                Apply Now
                            </motion.button> */}

                            <motion.a
                                href="https://pre-foundation.emuni.uz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 mb-10 py-4 px-10 bg-white text-[#6b0e55] font-bold rounded-full shadow-xl border-2 border-white hover:bg-opacity-90 transition-all duration-300 text-lg"
                            >
                                EMU Pre-foundation Courses
                            </motion.a>

                        </div>

                        {/* <span className='font-[500] text-base md:base lg:text-lg'>
                            EMU University enrollment for 2025-2026
                        </span> */}

                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/12/tibbiyot-1.webp"
                                alt="Student"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        {/* <div className="absolute -bottom-6 -right-6 p-4 bg-[#6b0e55] rounded-lg shadow-xl transform -rotate-3 z-20">
                            <div className="text-sm font-bold text-white mb-1">2025-2026</div>
                            <div className="text-xl font-bold text-white">Enrollment Open!</div>
                        </div> */}

                    </motion.div>
                </div>

            </motion.section>

            {/* Hero Section BACKGROUND IMAGE - DESKTOP */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="hidden md:flex items-center relative min-h-[600px] md:min-h-[700px] py-20 md:py-32 overflow-hidden"
                style={{
                    // backgroundImage: `url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/main-banner-new.webp')`,
                    backgroundImage: `url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/12/tibbiyot-1.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right 0 top 0',
                }}
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
                        <defs>
                            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                    <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl container mx-auto px-4 flex items-center justify-start relative z-10">
                    <motion.div
                        className="bg-[#00000030] backdrop-blur-md p-8 rounded-xl border border-white/20 text-white max-w-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-tight">
                            Choose a future worthy of you
                        </h1>

                        <p className="text-lg md:text-xl mb-8 opacity-90">
                            Quality education at EMU University — your key to success
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: pulseSize }}
                                transition={{ duration: 0.2 }}
                                className="pop-form-trigger py-4 px-10 font-bold rounded-full shadow-xl transition-all duration-300 text-lg"
                                style={{
                                    background: `linear-gradient(${position}deg, #f7e282 0%, #e4c254 25%, #f3d651 50%, #dbb845 75%, #f7e282 100%)`,
                                    color: '#6b0e55',
                                    boxShadow: `0 5px 15px rgba(198, 144, 38, 0.4)`,
                                }}
                            >
                                Apply Now
                            </motion.button> */}

                            <motion.a
                                href="https://pre-foundation.emuni.uz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-4 px-10 bg-white text-[#6b0e55] font-bold rounded-full shadow-xl hover:bg-opacity-90 transition-all duration-300 text-lg"
                            >
                                EMU Pre-foundation Courses
                            </motion.a>

                            {/* <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-sm md:text-base font-medium">
                                    EMU University enrollment for 2025-2026
                                </span>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default HeroSection;