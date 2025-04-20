'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RectorAppealSection = () => {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const videoRef = useRef(null);

    // Закрытие модального окна по клавише Escape
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

    // Управление скроллом и остановка видео при закрытии модального окна
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

    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            {/* Фоновое изображение и декоративные элементы */}
            <div className="absolute inset-0">
                <img
                    src="http://emuni.uz/wp-content/uploads/2025/04/emu-banner-3-min.png"
                    alt="Ректор EMU University"
                    className="w-full h-full object-cover object-[70%_50%]"
                />
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/70 via-[#631463]/50 to-transparent"></div>
                {/* Декоративные круги (уменьшенные) */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white opacity-2 transform translate-x-1/2 translate-y-1/2"></div>
                    {/* <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-white opacity-4"></div> */}
                </div>
            </div>

            {/* Контент */}
            <div className="max-w-screen-xl h-full mx-auto px-4 py-8 flex items-center">
                <div
                    className="w-full md:w-1/2 text-white p-6 md:p-12 flex flex-col justify-center"
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 relative">
                        Обращение Основателя
                        <span className="block h-1 w-20 bg-white mt-3"></span>
                    </h2>

                    <div className='relative'>
                        <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
                            Уважаемые студенты, преподаватели и партнеры!
                        </p>

                        <div className="mb-8 space-y-4 text-white/90">
                            <p>
                                Я рад приветствовать вас в EMU University – современном образовательном учреждении, где мы стремимся к превосходству в обучении и исследованиях в области медицины.
                            </p>
                            <p>
                                Наша миссия – подготовить новое поколение квалифицированных медицинских специалистов, которые будут внедрять инновации в сферу здравоохранения и улучшать жизнь людей.
                            </p>
                        </div>

                        <div className="flex items-center mb-6">
                            <div>
                                <p className="font-bold text-lg md:text-xl">Гайбуллаев Элбек Азизбекович</p>
                                <p className="text-white/80">Founder / CEO EMU University</p>
                            </div>
                        </div>
                    </div>


                    {/* Кнопка для открытия видео */}
                    <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVideoModalOpen(true)}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center relative group"
                    >
                        <div className="absolute inset-0 rounded-full bg-white shadow-lg animate-ping opacity-20 group-hover:opacity-30"></div>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#631463] group-hover:bg-[#8a3c8a] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Модальное окно для видео */}
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
                                title="Обращение основателя EMU University"
                                className="w-full h-full"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>

                            <button
                                onClick={() => setVideoModalOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-300 focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Стили */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    h2 {
                        font-size: 1.75rem;
                    }
                    
                    p {
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default RectorAppealSection;