// // components/ProgramsSlider.js
// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 },
//     },
// };

// const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2,
//         },
//     },
// };

// const ProgramsSlider = () => {
//     const programs = [
//         {
//             title: "Математика",
//             description: "Основные математические концепции: алгебра, геометрия, тригонометрия, статистика. Для будущих инженеров и экономистов.",
//             icon: "https://emuni.uz/wp-content/uploads/2024/07/calculator.png",
//             color: "from-[#631463] to-[#8a3c8a]",
//             iconBg: "bg-[#762876]",
//         },
//         {
//             title: "Английский язык",
//             description: "Развитие всех языковых навыков: разговорная речь, аудирование, чтение и письмо. Акцент на академический английский.",
//             icon: "https://emuni.uz/wp-content/uploads/2024/02/speech.png",
//             color: "from-[#8a3c8a] to-[#631463]",
//             iconBg: "bg-[#762876]",
//         },
//         {
//             title: "Химия",
//             description: "Структура атомов, химические реакции, органическая и неорганическая химия. Для будущих медиков и стоматологов.",
//             icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/chemistry.png",
//             color: "from-[#631463] to-[#8a3c8a]",
//             iconBg: "bg-[#762876]",
//         },
//         {
//             title: "Биология",
//             description: "Основы клеточной структуры, генетики, физиологии и экологии. Подготовка для студентов медицины и естественных наук.",
//             icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/leave.png",
//             color: "from-[#8a3c8a] to-[#631463]",
//             iconBg: "bg-[#762876]",
//         },
//     ];

//     return (
//         <div className="py-8 md:py-12 px-4 relative">
//             {/* Заголовок */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="mb-8 md:mb-12"
//             >
//                 <h3 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-[#631463]">
//                     Программы обучения
//                 </h3>
//             </motion.div>

//             {/* Слайдер */}
//             <div className="relative max-w-screen-xl mx-auto">
//                 <Swiper
//                     modules={[Navigation]}
//                     spaceBetween={24}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 4 },
//                     }}
//                     navigation={{
//                         prevEl: '.swiper-button-prev-custom',
//                         nextEl: '.swiper-button-next-custom',
//                     }}
//                     className="pb-12"
//                 >
//                     {programs.map((course, index) => (
//                         <SwiperSlide key={index}>
//                             <motion.div
//                                 variants={fadeIn}
//                                 whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//                                 className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
//                             >
//                                 <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
//                                 <div className="p-4 md:p-6">
//                                     <div
//                                         className={`w-12 h-12 md:w-14 md:h-14 ${course.iconBg} rounded-lg mb-3 md:mb-4 flex items-center justify-center`}
//                                     >
//                                         <Image
//                                             src={course.icon}
//                                             alt={course.title}
//                                             width={24}
//                                             height={24}
//                                             className="w-6 h-6 md:w-8 md:h-8"
//                                         />
//                                     </div>
//                                     <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">
//                                         {course.title}
//                                     </h3>
//                                     <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
//                                         {course.description}
//                                     </p>
//                                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
//                                         <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">
//                                             Популярный курс
//                                         </span>
//                                         <button className="text-[#631463] font-medium text-xs md:text-sm flex items-center hover:underline">
//                                             Узнать больше
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="h-3 w-3 md:h-4 md:w-4 ml-1"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth={2}
//                                                     d="M9 5l7 7-7 7"
//                                                 />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Кнопки навигации */}
//                 <div className="swiper-button-prev-custom absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 hidden md:block">
//                     <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M15 19l-7-7 7-7"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="swiper-button-next-custom absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 hidden md:block">
//                     <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 5l7 7-7 7"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgramsSlider;

// components/ProgramsSlider.js
'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProgramsSlider = () => {
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
        },
        {
            title: "Биология",
            price: "41 200 000 UZS",
            description: "Основы клеточной структуры, генетики, физиологии и экологии. Подготовка для студентов медицины и естественных наук.",
            duration: "4 года",
            icon: "https://emuni.uz/wp-content/uploads/2024/02/leave.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
        },
        {
            title: "Информатика",
            price: "45 600 000 UZS",
            description: "Программирование, алгоритмы, базы данных и компьютерные сети. Для будущих IT-специалистов и разработчиков.",
            duration: "4 года",
            icon: "https://emuni.uz/wp-content/uploads/2024/02/computer.png",
            color: "from-[#631463] to-[#8a3c8a]",
            iconBg: "bg-[#631463]",
            bgGradient: "bg-gradient-to-br from-[#631463] to-[#8a3c8a]",
            textColor: "text-white",
        },
    ];

    return (
        <div className="py-8 md:py-12 px-4 relative overflow-visible">
            {/* Заголовок */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 md:mb-12"
            >
                <h3 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-[#631463]">
                    Программы обучения
                </h3>
            </motion.div>

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
                >
                    {programs.map((program, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <motion.div
                                variants={fadeIn}
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
                                style={{ position: 'relative' }}
                            >
                                <div className="p-4 md:p-5 flex flex-col h-full">
                                    <div className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}>
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
                                    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30" style={{ zIndex: 0 }}></div>
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                            {program.duration}
                                        </div>
                                        <a href="#" className="flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors">
                                            <span className="text-[#631463] text-sm font-medium mr-1">Узнать больше</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кнопки навигации */}
                {/* Мобильные и десктопные кнопки навигации перемещены вниз */}
                <div className="flex justify-center gap-4 mt-8">
                    <div className="swiper-button-prev-custom">
                        <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
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
                        <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
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
    );
};

export default ProgramsSlider;