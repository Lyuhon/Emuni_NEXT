'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import RegistrationForm from './reg_form';
import { useRouter } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function RegistrationPage() {
    const router = useRouter();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Функция переключения языка
    const handleLanguageChange = (lang) => {
        router.push(`/${lang}/registration_med`);
        setIsLanguageOpen(false);
    };

    // Добавляем эффект загрузки
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Добавляем глобальные стили с помощью useEffect
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            header, footer {
                display: none;
            }
            body {
                padding: 0px !important;
            }
            span.swiper-pagination-bullet.swiper-pagination-bullet-active {
                color: #fff;
                opacity: 1 !important;
                border: 1px solid #6b0e55;
            }
            .swiper-pagination {
                position: absolute !important;
                bottom: 10px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: auto !important;
                margin: 0 !important;
            }
            .swiper {
                width: 100%;
                border-radius: 1.5rem;
            }
            @media (max-width: 768px) {
                
            }
            .swiper-slide img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1.5rem;
            }

            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
            .fade-out {
                animation: fadeOut 0.5s ease-out forwards;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Placeholder images for the slider
    const sliderImages = [
        'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/reg-banner-emu-1.jpg',
        'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/reg-banner-emu-2.jpg',
        'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/reg-banner-emu-4.jpg',
        'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/reg-banner-emu-3.jpg',
    ];

    // Custom pagination bullet rendering
    const renderBullet = (index, className) => {
        return `
            <span
                class="${className}"
                style="
                    width: 20px;
                    height: 6px;
                    border-radius: 4px;
                    background: ${className.includes('swiper-pagination-bullet-active') ? '#ffffff' : '#f9eef5'};
                    opacity: ${className.includes('swiper-pagination-bullet-active') ? '1' : '0.5'};
                    display: inline-block;
                    margin: 0 4px;
                    cursor: pointer;
                    border: none;
                "
            ></span>
        `;
    };

    return (
        <>
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[30000] bg-gradient-to-br from-[#6b0e55] to-[#8f3178] flex items-center justify-center fade-out">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
                        {/* <p className="text-white text-lg font-medium">Загрузка...</p> */}
                    </div>
                </div>
            )}

            <div className="pt-0 bg-gradient-to-br from-[#6b0e55] to-[#8f3178] min-h-screen relative z-[20001]">
                {/* Header with Logo and Language Selector */}
                <div className="absolute top-4 left-4 right-4 z-[20002] flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
                            alt="EMU Logo"
                            width={120}
                            height={40}
                            className="h-8 md:h-10 w-auto"
                        />
                    </div>

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.5 0a9 9 0 019 9c0 1.66-.45 3.22-1.23 4.57M3 12h3m-3 7h12m-6-7v7" />
                            </svg>
                            <span>Language</span>
                        </button>
                        {isLanguageOpen && (
                            <div className="absolute top-12 right-0 w-32 bg-white rounded-lg shadow-lg border border-[#f9eef5] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {/* <button
                                    onClick={() => handleLanguageChange('eng')}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#f9eef5] transition-colors duration-200"
                                >
                                    English
                                </button> */}
                                <button
                                    onClick={() => handleLanguageChange('uz')}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#f9eef5] transition-colors duration-200"
                                >
                                    Oʻzbek
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Background Effects */}
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

                <div className="container max-w-screen-xl mx-auto px-4 py-20 pb-10 md:py-20 lg:py-24">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-x-10">
                        {/* Left Section - Sticky */}
                        <div className="lg:w-1/3 flex-grow lg:mr-20 lg:sticky lg:top-20 lg:self-start">
                            <svg
                                className="absolute top-2.5 left-[100%] hidden lg:block"
                                width="64"
                                height="46"
                                viewBox="0 0 64 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M56.7209 5.40605C56.7827 6.1656 56.8446 6.92516 56.8181 7.73139C46.786 -0.779873 32.4866 -2.1719 20.5207 4.71075C7.45239 12.2886 -1.51059 29.3561 1.33808 44.602C1.44667 45.45 3.01641 45.6399 3.17303 44.6519C5.46419 31.2196 8.34762 18.2669 20.7353 10.2562C30.4343 4.00433 44.6933 3.60689 53.239 11.6579C51.5341 11.4262 49.7876 11.3296 48.0827 11.0979C43.7789 10.6537 43.5716 17.3272 47.7403 17.7295L60.4283 19.0668C62.0865 19.2101 64.0629 17.6008 63.9341 15.858C63.7233 12.4609 63.6009 9.01718 63.3901 5.62009C63.3826 1.32344 56.5315 0.979048 56.7209 5.40605Z"
                                    fill="#fff"
                                />
                            </svg>
                            <h1 className="font-bold text-3xl text-center lg:text-start lg:mb-8 mb-5 text-white md:text-4xl lg:text-6xl relative">
                                Ваш путь к карьере врача начинается здесь
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#f9eef5]/20 transform skew-x-[12deg]" />
                            </h1>
                            <div className="relative">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{
                                        clickable: true,
                                        renderBullet
                                    }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    className="w-full rounded-3xl"
                                >
                                    {sliderImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={src}
                                                alt="Cambridge LC advantages"
                                                width={400}
                                                height={300}
                                                className="w-full h-full rounded-3xl"
                                                loading="eager"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Right Section (Form) */}
                        <div className="lg:w-1/3 max-w-[30rem] flex-grow border-2 border-[#f9eef5] rounded-[30px] my-9 md:my-0 lg:mt-0 bg-white sm:mx-auto lg:mx-0 relative">
                            <div className="bg-white p-7 lg:p-10 rounded-[30px]">
                                <h2 className="font-bold text-center text-xl xl:text-2xl pb-3 text-gray-900">
                                    Зарегистрируйтесь сейчас, чтобы записаться на экзамен
                                </h2>
                                <RegistrationForm />
                                <p className="text-center mt-4 text-gray-600 opacity-50">
                                    Абитуриенты, набравшие высокие баллы на вступительных экзаменах, могут воспользоваться грантами, стипендиями и многими другими возможностями.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}