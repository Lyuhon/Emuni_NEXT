'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiInstagram, SiFacebook, SiLinkedin } from 'react-icons/si';

const RectorAppealSection = () => {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    // Close modal with Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setVideoModalOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // Control scroll and stop video
    useEffect(() => {
        if (videoModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            if (videoRef.current) {
                videoRef.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
        }
    }, [videoModalOpen]);

    // Parallax effect for background
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrollY = window.scrollY;
                const offset = sectionRef.current.getBoundingClientRect().top + window.scrollY;
                const parallaxValue = (scrollY - offset) * 0.2;
                sectionRef.current.style.setProperty('--parallax', `${parallaxValue}px`);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full md:min-h-[90vh] overflow-hidden bg-[#f7f7f7]">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-web-2.2-min-scaled.jpg"
                    alt="EMU University Banner"
                    className="w-full h-full object-cover object-[80%_10%] transform translate-y-[var(--parallax, 0)]"
                />
                <div className="absolute inset-0 bg-gradient-to-r to-[#6b0e55]/50 from-transparent"></div>
            </div>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-20 flex justify-end items-center md:min-h-[90vh]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#00000030] backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white max-w-xl"
                >

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#FFF] mb-6 leading-relaxed"
                    >
                        Dear students, faculty, and partners!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-8 space-y-4 text-[#FFF]/90"
                    >
                        <p>
                            I am pleased to welcome you to EMU University – a place where medical innovations are born and the future of healthcare is shaped.
                        </p>
                        <p>
                            Our mission is to inspire and prepare specialists who can change the world through knowledge and technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-8"
                    >
                        <p className="font-bold text-lg md:text-xl text-[#FFF]">Gaybullaev Elbek Azizbekovich</p>
                        <p className="text-[#fff] text-base md:text-lg">Founder / CEO EMU University</p>
                    </motion.div>

                    {/* Button to open video */}
                    <div className='flex flex-wrap gap-[20px] items-center'>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ scale: 1.05, backgroundColor: '#8f3178' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setVideoModalOpen(true)}
                            className="flex items-center px-6 py-3 bg-[#6b0e55] text-white rounded-lg shadow-md transition-colors duration-300"
                        >
                            <motion.svg
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </motion.svg>
                            Watch Interview
                        </motion.button>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/gaybullaev_elbek/" className="text-white hover:text-gray-200 transition-colors">
                                <SiInstagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/share/1EpJqyoehs/?mibextid=wwXIfr" className="text-white hover:text-gray-200 transition-colors">
                                <SiFacebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/elbek-gaybullaev-3380b1222/?originalSubdomain=uz" className="text-white hover:text-gray-200 transition-colors">
                                <SiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Video modal */}
            <AnimatePresence>
                {videoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                        >
                            <iframe
                                ref={videoRef}
                                src="https://www.youtube.com/embed/xsXxaNVimk0?enablejsapi=1"
                                title="EMU University Founder's Address"
                                className="w-full h-full"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>

                            <button
                                onClick={() => setVideoModalOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styles */}
            <style jsx global>{`
                section {
                    --parallax: 0px;
                }
            `}</style>
        </section >
    );
};

export default RectorAppealSection;