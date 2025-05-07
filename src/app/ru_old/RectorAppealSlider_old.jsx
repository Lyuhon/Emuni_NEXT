'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const RectorAppealSlider = () => {
    const [swiper, setSwiper] = useState(null);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const videoRef = useRef(null);

    // Эффект для обработки клавиш Escape при открытом модальном окне
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

    // Эффект для остановки скролла при открытом модальном окне
    useEffect(() => {
        if (videoModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            // Остановить видео при закрытии модального окна
            if (videoRef.current) {
                videoRef.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
        }
    }, [videoModalOpen]);

    return (
        <section className="rector-appeal-section relative w-full h-[80vh] overflow-hidden">
            <Swiper
                modules={[Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                speed={1000}
                allowTouchMove={true}
                onSwiper={setSwiper}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                className="h-full w-full"
            >
                {/* Слайд 1: Обращение ректора с фото и текстом */}
                <SwiperSlide className="h-full">
                    <div className="h-full relative bg-gradient-to-br from-[#631463] via-[#8a3c8a] to-[#631463]">
                        {/* Фоновые декоративные элементы */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 transform translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white opacity-10"></div>
                        </div>

                        <div className="max-w-screen-xl h-full mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
                            {/* Фото ректора с анимацией */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="md:w-1/2 h-full flex items-center justify-center relative mb-[-90px]"
                            >
                                <div className="relative h-[70vh] max-h-[800px] overflow-hidden">
                                    <img
                                        src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/rektor-dlya-bannera.webp"
                                        alt="Ректор EMU University"
                                        className="h-full w-auto max-w-none object-contain relative z-10"
                                    />
                                    {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#631463] to-transparent"></div> */}
                                </div>
                            </motion.div>

                            {/* Текст обращения с анимацией */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="md:w-1/2 text-white p-6 md:p-12 flex flex-col justify-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 relative">
                                    Обращение Основателя
                                    <span className="block h-1 w-20 bg-white mt-3"></span>
                                </h2>

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
                                    <p>
                                        Мы создаем среду, где студенты могут развиваться не только академически, но и личностно, осваивая критическое мышление, этические принципы и глобальное понимание современных медицинских вызовов.
                                    </p>
                                </div>

                                <div className="flex items-center mt-4">
                                    <div className="mr-6">
                                        <p className="font-bold text-lg md:text-xl">Гайбуллаев Элбек Азизбекович</p>
                                        <p className="text-white/80">Founder / CEO EMU University</p>
                                    </div>
                                    {/* <div className="w-24 h-16 opacity-80">
                                        <img
                                            src="/signature.png"
                                            alt="Подпись"
                                            className="w-full h-full object-contain"
                                        />
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>

                        {/* Индикатор прокрутки вниз / Следующий слайд */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute bottom-8 right-8 md:bottom-10 md:right-10 z-20"
                        >
                            <button
                                onClick={() => swiper?.slideNext()}
                                className="swiper-button-next-custom w-16 h-16 rounded-full bg-white text-[#631463] flex items-center justify-center shadow-lg hover:bg-[#f7eef7] transition-all duration-300 focus:outline-none border-2 border-[#f7eef7]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Слайд 2: Видео-обращение ректора */}
                <SwiperSlide className="h-full">
                    <div className="h-full relative">
                        {/* Фоновое изображение с затемнением */}
                        <div className="absolute inset-0 bg-black/50">
                            <img
                                src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/obrashhenie-rektora-banner.jpg"
                                alt="Фон видео-обращения ректора"
                                className="w-full h-full object-cover opacity-70"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Кнопка воспроизведения видео */}
                            <motion.button
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setVideoModalOpen(true)}
                                className="play-button w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center relative z-20 group"
                            >
                                <div className="absolute inset-0 rounded-full bg-white shadow-lg animate-ping opacity-30 group-hover:opacity-50"></div>
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#631463] group-hover:bg-[#8a3c8a] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-12 text-white text-base md:text-lg font-medium opacity-90">Смотреть видео</span>
                            </motion.button>
                        </div>

                        {/* Заголовок видео-обращения */}
                        <div className="absolute top-10 left-0 right-0 text-center">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="bg-black/40 inline-block py-4 px-8 rounded-lg backdrop-blur-sm"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold text-white">Видео-обращение ректора EMU University</h2>
                            </motion.div>
                        </div>

                        {/* Кнопка возврата к первому слайду */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-20"
                        >
                            <button
                                onClick={() => swiper?.slidePrev()}
                                className="swiper-button-prev-custom w-16 h-16 rounded-full bg-white text-[#631463] flex items-center justify-center shadow-lg hover:bg-[#f7eef7] transition-all duration-300 focus:outline-none border-2 border-[#f7eef7]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </SwiperSlide>
            </Swiper>

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

            {/* Индикаторы слайдов */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {[0, 1].map((index) => (
                    <button
                        key={index}
                        onClick={() => swiper?.slideTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-white w-10' : 'bg-white/50'
                            }`}
                        aria-label={`Перейти к слайду ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Дополнительные стили */}
            <style jsx global>{`
                .rector-appeal-section .swiper,
                .rector-appeal-section .swiper-wrapper,
                .rector-appeal-section .swiper-slide {
                    height: 100%;
                }
                
                @media (max-width: 768px) {
                    .rector-appeal-section h2 {
                        font-size: 1.75rem;
                    }
                    
                    .rector-appeal-section p {
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default RectorAppealSlider;