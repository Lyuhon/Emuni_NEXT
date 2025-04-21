'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AwardsSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
            className="relative py-10 md:py-20 px-4 overflow-hidden bg-[#FFFFFF] min-h-[80vh] md:min-h-[70vh]"
        >
            {/* Фоновое видео */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="https://emuni.uz/wp-content/uploads/2025/04/rolik.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/70 to-transparent"></div>
            </div>

            {/* Декоративные SVG-линии */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-10 z-0" preserveAspectRatio="none">
                <line x1="10%" y1="0" x2="90%" y2="100%" stroke="#ddb74b" strokeWidth="1" />
                <line x1="90%" y1="0" x2="10%" y2="100%" stroke="#ddb74b" strokeWidth="1" />
            </svg>

            {/* Контент */}
            <div className="max-w-screen-xl container mx-auto relative z-10 px-4 flex flex-col items-center justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-5">
                        Выбирайте лучшее для своего будущего!
                    </h2>
                    <p className="text-sm md:text-lg text-white/80 max-w-xl mx-auto">
                        EMU University – лидер медицинского образования, отмеченный престижными наградами
                    </p>
                </motion.div>

                {/* Награды */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/95 rounded-lg p-4 md:p-6 shadow-xl w-full md:w-1/2 flex items-center"
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12 text-[#ddb74b] mr-3 md:mr-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <div>
                            <h3 className="text-base md:text-xl font-semibold text-[#631463]">
                                Лучший медицинский университет 2024
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                Признание за выдающиеся достижения в медицинском образовании
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/95 rounded-lg p-4 md:p-6 shadow-xl w-full md:w-1/2 flex items-center"
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12 text-[#ddb74b] mr-3 md:mr-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <div>
                            <h3 className="text-base md:text-xl font-semibold text-[#631463]">
                                Лучший негосударственный университет
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                Лидерство среди негосударственных вузов региона
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Счётчик наград */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <p className="text-sm md:text-lg text-white">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            2 престижные награды в 2024
                        </motion.span>
                    </p>
                </motion.div>

                {/* Кнопка CTA */}
                <motion.a
                    href="https://apply.emuni.uz/ru"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                    className="relative inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white rounded-lg text-sm md:text-base text-center overflow-hidden group w-fit mx-auto"
                >
                    <span className="relative z-10 flex items-center justify-center">
                        Подать заявку
                        <motion.svg
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-4 h-4 md:w-5 md:h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                    <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-gradient-to-r from-[#631463]/50 to-[#8a3c8a]/50 rounded-lg"
                    ></motion.div>
                </motion.a>
            </div>

            <style jsx global>{`
                @media (max-width: 767px) {
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .text-sm {
                        font-size: 0.875rem;
                    }
                    .min-h-[80vh] {
                        min-height: 80vh;
                    }
                    .p-4 {
                        padding: 0.75rem;
                    }
                }
            `}</style>
        </motion.section>
    );
};

export default AwardsSection;