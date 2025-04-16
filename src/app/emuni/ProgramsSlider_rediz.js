'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProgramsSlider = () => {
    // Тестовые данные для примера
    const programs = [
        {
            title: "Лечебное дело",
            price: "54 900 000 UZS",
            description: "Факультет «Лечебное дело» готовит высококвалифицированных врачей по государственным стандартам, предоставляя современную теоретическую и практическую базу для работы в клиниках.",
            duration: "6 лет",
            icon: "https://emuni.uz/wp-content/uploads/2024/02/stethoscope.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
            hasGrant: true,
            hasScholarship: true,
            cardVariant: 1 // Вариант 1 дизайна карточки
        },
        {
            title: "Математика",
            price: "36 400 000 UZS",
            description: "Основные математические концепции: алгебра, геометрия, тригонометрия, статистика. Для будущих инженеров и экономистов.",
            duration: "4 года",
            icon: "https://emuni.uz/wp-content/uploads/2024/07/calculator.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
            hasGrant: true,
            hasScholarship: false,
            cardVariant: 2 // Вариант 2 дизайна карточки
        },
        {
            title: "Английский язык",
            price: "38 500 000 UZS",
            description: "Развитие всех языковых навыков: разговорная речь, аудирование, чтение и письмо. Акцент на академический английский.",
            duration: "4 года",
            icon: "https://emuni.uz/wp-content/uploads/2024/02/speech.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
            hasGrant: false,
            hasScholarship: true,
            cardVariant: 3 // Вариант 3 дизайна карточки
        },
        {
            title: "Химия",
            price: "42 700 000 UZS",
            description: "Структура атомов, химические реакции, органическая и неорганическая химия. Для будущих медиков и стоматологов.",
            duration: "5 лет",
            icon: "https://emuni.uz/wp-content/uploads/2024/02/chemistry.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
            hasGrant: true,
            hasScholarship: true,
            cardVariant: 4 // Вариант 4 дизайна карточки
        },
    ];

    const [activeTab, setActiveTab] = useState('medical');
    const [medicalPrograms, setMedicalPrograms] = useState(programs); // Используем тестовые данные
    const [businessPrograms, setBusinessPrograms] = useState([]);
    const [zaochnoePrograms, setZaochnoePrograms] = useState([]);
    const [loading, setLoading] = useState(false); // false для тестовых данных

    // Выбор активных программ в зависимости от таба
    const activePrograms = activeTab === 'medical'
        ? medicalPrograms
        : activeTab === 'business'
            ? businessPrograms
            : zaochnoePrograms;

    if (loading) {
        return (
            <div className="py-8 md:py-12 px-4 text-center">
                <p className="text-[#631463] text-lg">Загрузка программ...</p>
            </div>
        );
    }

    return (
        <section className="py-8 md:py-12 px-4 relative overflow-hidden">
            <div className="py-8 md:py-12 px-4 relative overflow-visible">
                <style jsx>{`
                    .slide-animation-enter {
                        animation: slideIn 0.5s ease-in-out forwards;
                    }
                    .slide-animation-exit {
                        animation: slideOut 0.5s ease-in-out forwards;
                    }
                    @keyframes slideIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes slideOut {
                        0% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                    }
                    .badge-pulse {
                        animation: pulse 2s infinite;
                    }
                    @keyframes pulse {
                        0% {
                            box-shadow: 0 0 0 0 rgba(99, 20, 99, 0.4);
                        }
                        70% {
                            box-shadow: 0 0 0 5px rgba(99, 20, 99, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(99, 20, 99, 0);
                        }
                    }
                `}</style>

                {/* Заголовок и табы */}
                <div className="mb-8 md:mb-12 text-center">
                    <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-[#631463]">
                        Программы обучения
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('medical')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'medical'
                                ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
                                : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
                                }`}
                        >
                            Медицинские направления
                        </button>
                        <button
                            onClick={() => setActiveTab('business')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'business'
                                ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
                                : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
                                }`}
                        >
                            Бизнес и социальные направления
                        </button>
                        <button
                            onClick={() => setActiveTab('zaochnoe')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'zaochnoe'
                                ? 'bg-gradient-to-r from-[#4a704a] to-[#6b926b] text-white shadow-lg'
                                : 'bg-white text-[#4a704a] border-2 border-[#4a704a] hover:bg-[#eef7ee]'
                                }`}
                        >
                            Заочные направления
                        </button>
                    </div>
                </div>

                {/* Слайдер */}
                <div className="relative max-w-screen-xl mx-auto overflow-visible">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={false}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        className="pb-16 !overflow-visible"
                        key={activeTab}
                    >
                        {activePrograms.map((program, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                {/* ===== ВАРИАНТ 1: Значки с иконками под шапкой ===== */}
                                {program.cardVariant === 1 && (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
                                        <div className="p-4 md:p-5 flex flex-col h-full">
                                            <div
                                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                </div>
                                                <div className="relative z-10">
                                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-2xl md:text-3xl font-bold text-center">
                                                        {program.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                {program.description}
                                            </p>

                                            {/* Таблица преимуществ */}
                                            {(program.hasGrant || program.hasScholarship) && (
                                                <div className="bg-white border border-[#eedaee] rounded-lg p-2 mb-4 shadow-inner">
                                                    <table className="w-full text-sm">
                                                        <tbody>
                                                            {program.hasGrant && (
                                                                <tr className="border-b border-[#eedaee]">
                                                                    <td className="py-2 flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        <span className="font-medium">Гранты:</span>
                                                                    </td>
                                                                    <td className="py-2 text-right font-medium text-green-600">Доступны</td>
                                                                </tr>
                                                            )}
                                                            {program.hasScholarship && (
                                                                <tr>
                                                                    <td className="py-2 flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                        </svg>
                                                                        <span className="font-medium">Стипендия:</span>
                                                                    </td>
                                                                    <td className="py-2 text-right font-medium text-blue-600">Да</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            <div
                                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                style={{ zIndex: 0 }}
                                            ></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                    {program.duration}
                                                </div>
                                                <a
                                                    href="#"
                                                    className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                >
                                                    <span className="text-[#631463] text-sm font-medium mr-1">
                                                        Узнать больше
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-[#631463]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                </div>
                                                <div className="relative z-10">
                                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-2xl md:text-3xl font-bold text-center">
                                                        {program.price}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Блок преимуществ (Гранты и Стипендии) */}
                                            <div className="flex gap-2 mb-3">
                                                {program.hasGrant && (
                                                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        Гранты
                                                    </div>
                                                )}
                                                {program.hasScholarship && (
                                                    <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                        </svg>
                                                        Стипендия
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                {program.description}
                                            </p>
                                            <div
                                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                style={{ zIndex: 0 }}
                                            ></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                    {program.duration}
                                                </div>
                                                <a
                                                    href="#"
                                                    className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                >
                                                    <span className="text-[#631463] text-sm font-medium mr-1">
                                                        Узнать больше
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-[#631463]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ===== ВАРИАНТ 2: Бейджи в шапке карточки ===== */}
                                {program.cardVariant === 2 && (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
                                        <div className="p-4 md:p-5 flex flex-col h-full">
                                            <div
                                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                </div>

                                                {/* Бейджи в шапке карточки */}
                                                <div className="flex gap-1 items-center justify-end mb-2 relative z-10">
                                                    {program.hasGrant && (
                                                        <div className="bg-white text-[#631463] px-2 py-0.5 rounded text-xs font-medium flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            Гранты
                                                        </div>
                                                    )}
                                                    {program.hasScholarship && (
                                                        <div className="bg-white text-[#631463] px-2 py-0.5 rounded text-xs font-medium flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                            </svg>
                                                            Стипендия
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="relative z-10">
                                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-2xl md:text-3xl font-bold text-center">
                                                        {program.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                {program.description}
                                            </p>
                                            <div
                                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                style={{ zIndex: 0 }}
                                            ></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                    {program.duration}
                                                </div>
                                                <a
                                                    href="#"
                                                    className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                >
                                                    <span className="text-[#631463] text-sm font-medium mr-1">
                                                        Узнать больше
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-[#631463]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ===== ВАРИАНТ 3: Настраиваемый блок преимуществ ===== */}
                                {program.cardVariant === 3 && (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
                                        <div className="p-4 md:p-5 flex flex-col h-full">
                                            <div
                                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                </div>
                                                <div className="relative z-10">
                                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-2xl md:text-3xl font-bold text-center">
                                                        {program.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-xs md:text-sm text-gray-600 mb-3 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                {program.description}
                                            </p>

                                            {/* Блок преимуществ (более заметный) */}
                                            {(program.hasGrant || program.hasScholarship) && (
                                                <div className="bg-[#f9f1f9] rounded-lg p-3 mb-4 border-l-4 border-[#631463]">
                                                    <h4 className="text-sm font-semibold text-[#631463] mb-2">Преимущества:</h4>
                                                    <ul className="space-y-2">
                                                        {program.hasGrant && (
                                                            <li className="flex items-center text-sm">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span>Доступны гранты на обучение</span>
                                                            </li>
                                                        )}
                                                        {program.hasScholarship && (
                                                            <li className="flex items-center text-sm">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span>Стипендиальная программа</span>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            <div
                                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                style={{ zIndex: 0 }}
                                            ></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                    {program.duration}
                                                </div>
                                                <a
                                                    href="#"
                                                    className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                >
                                                    <span className="text-[#631463] text-sm font-medium mr-1">
                                                        Узнать больше
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-[#631463]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ===== ВАРИАНТ 4: Выделяющиеся бейджи ===== */}
                                {program.cardVariant === 4 && (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter relative">
                                        {/* Специальные бейджи, выходящие за пределы карточки */}
                                        {program.hasGrant && (
                                            <div className="absolute -top-1 -right-1 badge-pulse z-20">
                                                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                    Гранты
                                                </div>
                                            </div>
                                        )}
                                        {program.hasScholarship && !program.hasGrant && (
                                            <div className="absolute -top-1 -right-1 badge-pulse z-20">
                                                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                    Стипендия
                                                </div>
                                            </div>
                                        )}
                                        {program.hasGrant && program.hasScholarship && (
                                            <div className="absolute -top-1 -left-1 badge-pulse z-20">
                                                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                    Стипендия
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-4 md:p-5 flex flex-col h-full">
                                            <div className="p-4 md:p-5 flex flex-col h-full">
                                                <div
                                                    className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                                >
                                                    <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                    </div>
                                                    <div className="relative z-10">
                                                        <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                            {program.title}
                                                        </h3>
                                                        <p className="text-2xl md:text-3xl font-bold text-center">
                                                            {program.price}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                    {program.description}
                                                </p>

                                                <div
                                                    className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                    style={{ zIndex: 0 }}
                                                ></div>
                                                <div className="flex items-center justify-between relative z-10">
                                                    <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                        {program.duration}
                                                    </div>

                                                    < a href="#"
                                                        className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                    >
                                                        <span className="text-[#631463] text-sm font-medium mr-1">
                                                            Узнать больше
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5 text-[#631463]"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {/* ===== ВАРИАНТ 2: Бейджи в шапке карточки (переработано) ===== */}
                                {program.cardVariant === 2 && (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
                                        <div className="p-4 md:p-5 flex flex-col h-full">
                                            <div
                                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                                </div>

                                                <div className="relative z-10">
                                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-2xl md:text-3xl font-bold text-center mb-8">
                                                        {program.price}
                                                    </p>
                                                </div>

                                                {/* Бейджи абсолютным позиционированием внизу и посередине */}
                                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
                                                    {program.hasGrant && (
                                                        <div className="bg-white text-[#631463] px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            Гранты
                                                        </div>
                                                    )}
                                                    {program.hasScholarship && (
                                                        <div className="bg-white text-[#631463] px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                            </svg>
                                                            Стипендия
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow line-clamp-6 min-h-[6rem] relative z-10">
                                                {program.description}
                                            </p>
                                            <div
                                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                                style={{ zIndex: 0 }}
                                            ></div>
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                    {program.duration}
                                                </div>

                                                <a href="#"
                                                    className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                                >
                                                    <span className="text-[#631463] text-sm font-medium mr-1">
                                                        Узнать больше
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-[#631463]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кнопки навигации */}

                </div>
            </div>
        </section >
    );
};

export default ProgramsSlider;