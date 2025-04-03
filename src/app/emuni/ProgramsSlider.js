'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProgramsSlider = () => {
    const [activeTab, setActiveTab] = useState('medical'); // По умолчанию "Медицинские направления"
    const [medicalPrograms, setMedicalPrograms] = useState([]);
    const [businessPrograms, setBusinessPrograms] = useState([]);
    const [zaochnoePrograms, setZaochnoePrograms] = useState([]); // Новый массив для заочных направлений
    const [loading, setLoading] = useState(true);

    // Функция для очистки HTML-тегов из описания
    const stripHtml = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    // Получение данных из API
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81209');
                const data = await response.json();

                // Медицинские направления
                const medical = data.acf.napravleniya_v_med.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/02/stethoscope.png', // Иконка для медицинских
                    color: 'from-[#631463] to-[#8a3c8a]',
                    iconBg: 'bg-[#631463]',
                    bgGradient: 'bg-gradient-to-br from-[#631463] to-[#8a3c8a]',
                    textColor: 'text-white',
                }));

                // Бизнес-направления
                const business = data.acf.napravleniya_v_biznes.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/07/calculator.png', // Иконка для бизнеса
                    color: 'from-[#8a3c8a] to-[#631463]',
                    iconBg: 'bg-[#8a3c8a]',
                    bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
                    textColor: 'text-white',
                }));

                // Заочные направления
                const zaochnoe = data.acf.napravleniya_dlya_zaochki.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/02/book-open.png', // Иконка для заочных (пример)
                    color: 'from-[#4a704a] to-[#6b926b]', // Зелёные оттенки для заочных
                    iconBg: 'bg-[#4a704a]',
                    bgGradient: 'bg-gradient-to-br from-[#4a704a] to-[#6b926b]',
                    textColor: 'text-white',
                }));

                setMedicalPrograms(medical);
                setBusinessPrograms(business);
                setZaochnoePrograms(zaochnoe); // Устанавливаем данные заочных направлений
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    // Выбор активных программ в зависимости от таба
    const activePrograms = activeTab === 'medical'
        ? medicalPrograms
        : activeTab === 'business'
            ? businessPrograms
            : zaochnoePrograms; // Добавили заочные направления

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
                        key={activeTab} // Перерендеринг при смене таба
                    >
                        {activePrograms.map((program, index) => (
                            <SwiperSlide key={index} className="h-auto">
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кнопки навигации */}
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="swiper-button-prev-custom">
                            <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="swiper-button-next-custom">
                            <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSlider;