'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[90vh]">
            {/* Фоновое изображение */}
            <div className="absolute inset-0">
                <Image
                    src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/web-banner-2-scaled.webp"
                    alt="Universitet kampusi"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/60 via-[#631463]/40 to-transparent"></div>
            </div>

            {/* Контент */}
            <div className="container mx-auto px-4 md:px-6 h-full flex items-center relative">
                <div className="max-w-xl">
                    <div className="inline-block mb-4 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full">
                        <span className="text-white/90 font-medium text-sm">2025-2026 o‘quv yiliga qabul ochildi</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Kelajak eshiklarini ochuvchi ta’lim
                        <span className="text-[#f3c6f3]"> </span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
                        Xalqaro darajadagi sifatli ta’lim oling va stajirovka imkoniyatlaridan foydalaning.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://apply.emuni.uz/"
                            className="px-8 py-3 bg-white text-[#631463] font-semibold rounded-lg shadow-lg hover:bg-[#f3c6f3] transition duration-300 flex items-center justify-center"
                        >
                            Ariza topshirish
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>

                        <a
                            href="https://t.me/emu_universityuz"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center"
                        >
                            Biz bilan bog‘lanish
                        </a>
                    </div>

                    {/* Статистика */}
                    <div className="mt-12 flex space-x-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">2200+</div>
                            <div className="text-white/70 text-sm">Talabalar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-white/70 text-sm">Dasturlar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">95%</div>
                            <div className="text-white/70 text-sm">Ishga joylashish</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;