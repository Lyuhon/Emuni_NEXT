'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <h1 className="text-center text-3xl my-16 md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                МОБИЛЬНАЯ ВЕРСИЯ ВНИЗУ
            </h1>

            <section className="relative w-full h-[500px]">
                {/* Фоновое изображение */}
                <div className="absolute inset-0">
                    <Image
                        src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/web-banner-2-scaled.webp"
                        alt="Университетский кампус"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '70% 50%', '@media (min-width: 768px)': { objectPosition: 'center' } }}
                        priority
                        unoptimized
                    />
                    {/* Усиленный градиентный оверлей */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/80 via-[#631463]/60 to-[#631463]/20"></div>
                </div>

                {/* Контент */}
                <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-center relative">
                    <div className="max-w-xl text-center-">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Образование, <br></br>открывающее <span className="text-[#f3c6f3]-"><br></br>двери в будущее</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto">
                            Получите качественное образование международного уровня.
                        </p>

                        <div className="flex flex-col gap-4 w-full">
                            <a
                                href="https://apply.emuni.uz/ru"
                                className="px-8 py-3 bg-white text-[#631463] font-semibold rounded-lg shadow-lg hover:bg-[#f3c6f3] transition duration-300 flex items-center justify-center w-full"
                            >
                                Подать заявку
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            <a
                                href="https://t.me/emu_universityuz"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center w-full"
                            >
                                Связаться с нами
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default HeroSection;