// app/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Teachers from './Teachers';
import TestimonialsSection from './TestimonialsSection';

import Price from './Price';
import Faq from './Faq';
import ProgramsSlider from './ProgramsSlider';




// Animations
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <div className="min-h-screen font-sans">

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative bg-gradient-to-br from-[#631463] to-[#8a3c8a] text-white py-20 md:py-32 overflow-hidden md:mt-[0px] mt-[-50px]"
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
                        <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#f7eef7] blur-3xl opacity-20"></div>
                    <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-white blur-3xl opacity-10"></div>
                    <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#470e47] blur-xl opacity-30"></div>
                </div>

                <div className="max-w-screen-xl container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
                    <motion.div
                        className="md:w-1/2 mb-12 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            {/* <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-white opacity-90 md:flex hidden items-center justify-center text-[#631463] font-bold text-xl">
                                EMU
                            </div> */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                EMU University <br />
                                приём на<br />
                                <u>2025–2026</u> год
                            </h1>
                        </div>
                        <p className="text-xl mb-8 opacity-90 max-w-lg">
                            Выбирай будущее, достойное тебя. Образование высокого уровня — твой ключ к успеху.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#631463] py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Подать заявку
                            </motion.button>
                            {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                Узнать больше
                            </motion.button> */}
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/02/capmus-slide-main-1.jpg"
                                alt="Student"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 p-4 bg-[#470e47] rounded-lg shadow-xl transform -rotate-3 z-20">
                            <div className="text-sm font-bold text-white mb-1">2025-2026</div>
                            <div className="text-xl font-bold text-white">Набор открыт!</div>
                        </div>

                    </motion.div>
                </div>

                {/* Simple separator instead of wave */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-8 bg-white"></div> */}
            </motion.section>




            {/* Goal Section */}
            {/* <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="py-20 px-4 relative"
            > */}
            {/* Background decorative elements */}
            {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7eef7] rounded-bl-full opacity-50 z-0"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f7eef7] rounded-tr-full opacity-30 z-0"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <div className="inline-block mb-4">
                            <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mx-auto"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10 mb-[20px]">
                            Сделайте первый шаг на пути к своей цели
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Наша подготовительная программа — это комплексный подход к успешному
                            поступлению в ведущие университеты мира
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <div className="relative">
                                <Image
                                    src="https://emuni.uz/wp-content/uploads/2023/01/1-1.jpg"
                                    alt="Student in lab"
                                    width={600}
                                    height={350}
                                    className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                                />
                                <div className="absolute -bottom-4 -right-4 h-full w-full bg-[#631463] rounded-xl z-0"></div>
                                <div className="absolute top-6 -left-6 p-6 bg-white shadow-lg rounded-lg z-20 max-w-xs transform rotate-3">
                                    <div className="flex items-center mb-2">
                                        <div className="w-3 h-3 rounded-full bg-[#631463] mr-2"></div>
                                        <h3 className="font-bold text-lg text-[#631463]">95%</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">наших студентов успешно поступают в университет EMU</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 flex flex-col justify-center"
                        >
                            <div className="border-l-4 border-[#631463] pl-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Индивидуальный подход к каждому</h3>
                                <p className="text-gray-600">
                                    Наша программа учитывает индивидуальные особенности каждого студента,
                                    предлагая персонализированные планы обучения и регулярную обратную связь от преподавателей.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#8a3c8a] pl-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Современные методики обучения</h3>
                                <p className="text-gray-600">
                                    Мы сочетаем традиционные подходы с инновационными технологиями,
                                    делая процесс обучения интерактивным, увлекательным и эффективным.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#f7eef7] pl-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Международное признание</h3>
                                <p className="text-gray-600">
                                    Наши программы признаются ведущими университетами мира,
                                    что обеспечивает нашим выпускникам широкие возможности для дальнейшего образования.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#631463]">Наши курсы</h3>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                title: "Математика",
                                description: "Основные математические концепции: алгебра, геометрия, тригонометрия, статистика. Для будущих инженеров и экономистов.",
                                icon: "https://emuni.uz/wp-content/uploads/2024/07/calculator.png",
                                color: "from-[#631463] to-[#8a3c8a]",
                                iconBg: "bg-[#762876]"
                            },
                            {
                                title: "Английский язык",
                                description: "Развитие всех языковых навыков: разговорная речь, аудирование, чтение и письмо. Акцент на академический английский.",
                                icon: "https://emuni.uz/wp-content/uploads/2024/02/speech.png",
                                color: "from-[#8a3c8a] to-[#631463]",
                                iconBg: "bg-[#762876]"

                            },
                            {
                                title: "Химия",
                                description: "Структура атомов, химические реакции, органическая и неорганическая химия. Для будущих медиков и стоматологов.",
                                icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/chemistry.png",
                                color: "from-[#631463] to-[#8a3c8a]",
                                iconBg: "bg-[#762876]"

                            },
                            {
                                title: "Биология",
                                description: "Основы клеточной структуры, генетики, физиологии и экологии. Подготовка для студентов медицины и естественных наук.",
                                icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/leave.png",
                                color: "from-[#8a3c8a] to-[#631463]",
                                iconBg: "bg-[#762876]"

                            }
                        ].map((course, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
                                <div className="p-6">
                                    <div className={`w-14 h-14 ${course.iconBg} rounded-lg mb-4 flex items-center justify-center`}>
                                        <Image src={course.icon} alt={course.title} width={30} height={30} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm">{course.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Популярный курс</span>
                                        <button className="text-[#631463] font-medium text-sm flex items-center hover:underline">
                                            Узнать больше
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section> */}


            {/* Goal Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="py-6 md:py-20 px-4 relative overflow-hidden bg-[#FFFFFF]"
            >
                {/* Background decorative elements - без анимации для шара */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7eef7] rounded-bl-full opacity-50 z-0 hidden md:block"></div>
                {/* <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f7eef7] rounded-tr-full opacity-30 z-0 hidden md:block"></div> */}

                <div className="max-w-screen-xl container mx-auto relative z-10 px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
                    >
                        <div className="inline-block mb-3 md:mb-4">
                            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mx-auto"></div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative z-10 mb-3 md:mb-5">
                            Выбирайте лучшее для своего будущего!
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Наш университет, основанный в 2020 году, уже стал лидером в медицинском образовании. Мы — <b>«Лучший медицинский университет 2024»</b> и <b>«Лучший негосударственный университет».</b> Присоединяйтесь к нам, чтобы получить качественное образование и достичь успеха!
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 w-full"
                        >
                            <div className="relative mx-auto max-w-md md:max-w-none">
                                <Image
                                    src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/vaucher_photo.webp"
                                    alt="Student in lab"
                                    width={600}
                                    height={350}
                                    className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                                />
                                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 h-full w-full bg-[#631463] rounded-xl z-0"></div>
                                <div className="hidden absolute top-4 md:top-6 -left-3 md:-left-6 p-3 md:p-6 bg-white shadow-lg rounded-lg z-20 max-w-[150px] md:max-w-xs transform rotate-3">
                                    <div className="flex items-center mb-1 md:mb-2">
                                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#631463] mr-1 md:mr-2"></div>
                                        <h3 className="font-bold text-base md:text-lg text-[#631463]">95%</h3>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600">наших студентов успешно поступают в университет EMU</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 flex flex-col justify-center"
                        >
                            <div className="border-l-4 border-[#631463] pl-3 md:pl-6 mb-5 md:mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Индивидуальный подход к каждому</h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Наша программа учитывает индивидуальные особенности каждого студента,
                                    предлагая персонализированные планы обучения и регулярную обратную связь от преподавателей.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#8a3c8a] pl-3 md:pl-6 mb-5 md:mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Современные методики обучения</h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Мы сочетаем традиционные подходы с инновационными технологиями,
                                    делая процесс обучения интерактивным, увлекательным и эффективным.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#f7eef7] pl-3 md:pl-6">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Международное признание</h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Наши программы признаются ведущими университетами мира,
                                    что обеспечивает нашим выпускникам широкие возможности для дальнейшего образования.
                                </p>
                            </div>
                        </motion.div>
                    </div>






                    {/* ПРЕИМУЩЕСТВА */}

                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                        className="py-20 px-4 relative bg-gradient-to-b from-white via-[#f7eef7] to-white overflow-hidden"
                    >
                        {/* Декоративные элементы */}
                        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
                        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8a3c8a] opacity-5 blur-3xl"></div>
                        <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>

                        <div className="max-w-screen-xl container mx-auto relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center max-w-3xl mx-auto mb-16"
                            >
                                <div className="inline-block mb-4">
                                    <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mx-auto"></div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Преимущества обучения
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Узнайте, почему EMU University — это ваш лучший выбор для успешного будущего
                                </p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            >
                                {[
                                    {
                                        title: "Международные связи",
                                        description: "Мы активно сотрудничаем с зарубежными университетами, обеспечивая студентам доступ к передовым методикам и опыту мировых специалистов.",
                                        icon: "https://emuni.uz/wp-content/uploads/2024/02/speech.png",
                                        number: "01",
                                    },
                                    {
                                        title: "Сильная практическая база",
                                        description: "Университет располагает крупнейшим количеством клинических баз и партнёрств с больницами, что даёт возможность получать практические навыки в реальных условиях.",
                                        icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/chemistry.png",
                                        number: "02",
                                    },
                                    {
                                        title: "Стажировки в ведущих клиниках",
                                        description: "Наши студенты проходят практику в местных и частных учреждениях, а также участвуют в дополнительных стажировках дважды в год для расширения горизонтов.",
                                        icon: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/leave.png",
                                        number: "03",
                                    },
                                    {
                                        title: "Широкие возможности финансирования",
                                        description: "В 2025–2026 году доступно 20 государственных грантов, более 200 грантов учредителей и стипендии для поступающих.",
                                        icon: "https://emuni.uz/wp-content/uploads/2024/07/calculator.png",
                                        number: "04",
                                    },
                                ].map((advantage, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn}
                                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1)" }}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                                    >
                                        <div className="h-2 w-full bg-gradient-to-r from-[#631463] to-[#8a3c8a]"></div>
                                        <div className="p-6">
                                            <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                                <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">
                                                    {advantage.number}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                                            <p className="text-gray-600 text-sm">{advantage.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.section>




                    {/* Программы обучения */}
                    <ProgramsSlider />



                </div>
            </motion.section>


            {/* Требования к поступающим - новый дизайн */}
            <section className="hidden py-8 md:py-24 px-4 bg-white relative">
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-[#f7eef7] opacity-30 rounded-bl-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#f7eef7] opacity-20 rounded-tr-[100px] -z-10"></div>

                <div className="max-w-screen-xl container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block relative">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                                Требования к поступающим
                            </h2>
                            {/* <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#631463] to-[#8a3c8a] opacity-70 rounded-full -z-10"></div> */}
                        </div>

                        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
                            Для поступления необходимо соответствовать нескольким критериям. Пожалуйста, убедитесь, что все условия выполнены — мы готовы поддержать вас на каждом этапе!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Уровень образования */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(99, 20, 99, 0.25)"
                            }}
                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#631463] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">01</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#631463]">Уровень образования</h3>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">10-11 класс школы</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Последний курс лицея или колледжа</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Наличие аттестата о среднем образовании</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#631463" className="w-full h-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zM12 14v10" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Уровень владения английским языком */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(99, 20, 99, 0.25)"
                            }}
                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#631463] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">02</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#631463]">Уровень английского языка</h3>

                                <div className="bg-[#f7eef7] rounded-xl p-4 mt-6 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center mb-3">
                                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#631463] mr-3">
                                                <span className="font-bold">A2</span>
                                            </div>
                                            <span className="font-semibold text-[#631463]">Минимальный уровень</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            Определяется согласно Общей европейской системе оценки владения языком (CEFR)
                                        </p>
                                    </div>
                                    {/* <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#631463" className="w-full h-full">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                    </div> */}
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Уровень будет проверен на вступительном тесте</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Может потребоваться документальное подтверждение</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Необходимые документы */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(99, 20, 99, 0.25)"
                            }}
                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#631463] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">03</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#631463]">Необходимые документы</h3>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full mb-6"
                                >
                                    Подать заявку
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#631463] bg-opacity-10 text-[#631463] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            1
                                        </div>
                                        <p className="text-gray-700 text-sm">Академические справки или аттестат о среднем образовании</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#631463] bg-opacity-10 text-[#631463] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            2
                                        </div>
                                        <p className="text-gray-700 text-sm">Документ, подтверждающий личность и возраст</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#631463] bg-opacity-10 text-[#631463] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            3
                                        </div>
                                        <p className="text-gray-700 text-sm">Удостоверение личности родителя/опекуна</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#631463] bg-opacity-10 text-[#631463] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            4
                                        </div>
                                        <p className="text-gray-700 text-sm">Результаты тестирования по модулям <strong>Базовый</strong> и <strong>Продвинутый</strong></p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#631463" className="w-full h-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-24 px-4 bg-white relative">
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-[#f7eef7] opacity-30 rounded-bl-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#f7eef7] opacity-20 rounded-tr-[100px] -z-10"></div>

                <div className="max-w-screen-xl container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block relative">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                                Требования к поступающим
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
                            Для поступления необходимо соответствовать нескольким критериям. Пожалуйста, убедитесь, что все условия выполнены — мы готовы поддержать вас на каждом этапе!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Уровень образования */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(99, 20, 99, 0.25)",
                            }}
                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 lg:col-span-2"
                        >
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#631463] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">
                                        01
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#631463]">Уровень образования</h3>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">10-11 класс школы</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Последний курс лицея или колледжа</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Наличие аттестата о среднем образовании</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#631463] mr-3 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">
                                            Мы принимаем национальный сертификат, а также международные сертификаты, подтверждающие знание языка (например, IELTS, TOEFL и т. д.). Если на выбранном факультете предусмотрен вступительный экзамен по соответствующему языку, абитуриент, имеющий такой сертификат, может быть освобождён от сдачи данного экзамена.
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#631463"
                                        className="w-full h-full"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M12 14l9-5-9-5-9 5 9 5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M12 14l9-5-9-5-9 5 9 5zM12 14v10"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Призыв к действию */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 p-8 text-white flex flex-col items-center justify-center lg:col-span-1"
                        >
                            <div className="absolute inset-0 opacity-10">
                                <svg width="100%" height="100%" className="absolute top-0 left-0">
                                    <defs>
                                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                                </svg>
                            </div>
                            <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-transparent bg-clip-text">
                                    02
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
                                Всего <span className="text-yellow-300">1 минута</span> до твоего первого шага!
                            </h3>
                            <p className="text-lg text-center mb-6 max-w-md">
                                Заполните форму регистрации, и мы пригласим вас на ближайший экзамен!
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#631463] py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center"
                            >
                                Зарегистрироваться
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>






            {/* Поддерживаем и помогаем прийти к результату - улучшенная версия */}
            <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#f7eef7] to-white">
                {/* Декоративные элементы */}
                <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
                <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-[#631463] opacity-20"></div>
                <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>

                {/* Геометрические фигуры */}
                <div className="absolute top-20 right-40 w-12 h-12 border-4 border-[#631463] border-opacity-10 rounded-lg transform rotate-45"></div>
                <div className="absolute bottom-32 left-24 w-10 h-10 border-4 border-[#631463] border-opacity-10 rounded-full"></div>
                <div className="absolute top-1/3 left-16 w-20 h-3 bg-[#631463] bg-opacity-5 rounded-full transform rotate-45"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <div className="inline-block relative mb-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                                Поддерживаем и помогаем
                            </h2>
                            {/* <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#631463] to-[#8a3c8a] opacity-70 rounded-full"></div> */}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#631463] mb-6">прийти к результату</h3>
                        <p className="text-gray-600 text-lg">
                            Наша миссия — не просто обучать, но обеспечить каждому студенту путь к успешному поступлению
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Карточка 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Гарантированная подготовка к поступлению
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Мы гарантируем, что после прохождения курсов ваши знания и навыки будут на уровне, необходимом для обучения в CAU, и вы будете зачислены в университет автоматически, без вступительных экзаменов.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Гарантия 100%</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Карточка 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Индивидуальный подход
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Подбор учебных предметов в зависимости от ваших академических целей и уровня подготовки, с акцентом на развитие слабых сторон и устранение пробелов в знаниях.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Персонализация</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Карточка 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Интерактивное обучение
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Помимо лекций вас ждут интерактивные сессии и практические занятия, которые помогут вам лучше усвоить материал, развить уверенность в общении и применять знания на практике.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Интерактивность</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Карточка 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Опытные преподаватели и современные лаборатории
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Учебный процесс проходит под руководством профессионалов с использованием новейшего оборудования, что обеспечивает практический опыт и готовность применять теоретические знания.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Экспертность</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Карточка 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Гибкий учебный график и онлайн обучение
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Наши курсы легко вписываются в ваш график, позволяя совмещать учебу с другими делами. Благодаря <strong>онлайн-формату</strong> вы можете учиться в удобное время из любой точки мира.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Гибкость</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Карточка 6 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#631463] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#631463] transition-colors duration-300">
                                    Развитие критического и аналитического мышления
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Программа направлена на всестороннее развитие, чтобы вы были готовы к дальнейшему обучению и карьерным вызовам, эффективно анализировали сложные задачи и находили оптимальные решения.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#631463] py-1 px-3 rounded-full">Развитие</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#631463] font-medium text-sm flex items-center hover:underline"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA кнопка */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center mt-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-4 px-10 rounded-full font-semibold shadow-lg transition-all duration-300 text-lg"
                        >
                            Начать обучение сейчас
                        </motion.button>
                    </motion.div>
                </div>
            </section>


            {/* Обучайтесь у лучших преподавателей */}
            {/* <Teachers /> */}
            <TestimonialsSection />


            {/* <Price /> */}

            <Faq />



        </div >
    );
}