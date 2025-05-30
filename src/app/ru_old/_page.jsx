// app/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TestimonialsSection from './TestimonialsSection';

import Testimon1 from './Testimon1';
import Stats from './StatsRedesign';
import LicenseSection from './LicenseSection';
import FixedPhoneButton from './FixedPhoneButton';
import CallActionSection from './CallActionSection';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import PartnersSlider_Home from './PartnersSlider_Home';
import RectorAppealSlider from './RectorAppealSlider';
import StudTestimonRedesign from './StudTestimonRedesign';
import Recall from './Recall';



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

    // Добавьте эти состояния и эффекты в компонент:
    const [position, setPosition] = useState(0);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    useEffect(() => {
        // Угловой градиент
        const interval = setInterval(() => {
            setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
        }, 40);

        // Пульсация свечения
        const glowInterval = setInterval(() => {
            setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
        }, 50);

        // Пульсация размера
        const pulseInterval = setInterval(() => {
            setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(glowInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    return (
        <div className="min-h-screen font-sans">
            {/* <Header /> */}

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="md:hidden flex relative bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] text-white py-20 md:py-32 overflow-hidden md:mt-[0px] mt-[-50px]"
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                                Выбирай будущее, достойное тебя
                            </h1>




                            {/* <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-white opacity-90 md:flex hidden items-center justify-center text-[#6B0E55] font-bold text-xl">
                                EMU
                            </div> */}
                            <h1 className="hidden text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                EMU University <br />
                                <span className='hidden font-[500] text-1xl md:text-2xl lg:text-3xl'>приём на 2025–2026 год</span>
                                {/* <span className='text-5xl md:text-5xl lg:text-6xl'>2025–2026 год</span> */}

                            </h1>
                        </div>
                        <p className="hidden text-xl mb-8 opacity-90 max-w-lg">
                            <span className='font-[500] text-1xl md:text-2xl lg:text-3xl'> Выбирай будущее, достойное тебя. </span>
                            Образование высокого уровня — твой ключ к успеху.
                        </p>
                        <div className="flex flex-wrap gap-4">

                            {/* https://claude.ai/chat/019a1e84-354b-45bc-8174-ad7a9bc589ea */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: pulseSize }}
                                transition={{ duration: 0.2 }}
                                className="pop-form-trigger mt-8 mb-10 py-4 px-10 text-[#4a1942] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
                                style={{
                                    background: `linear-gradient(${position}deg, 
                                    #f7e282 0%, 
                                    #e4c254 25%, 
                                    #f3d651 50%, 
                                    #dbb845 75%,
                                    #f7e282 100%)`,
                                    boxShadow: `0 5px 15px rgba(198, 144, 38, 0.5),
               0 0 ${20 + glowIntensity * 20}px rgba(247, 226, 130, ${0.5 + glowIntensity * 0.3})`
                                }}
                            >
                                Подать заявку
                            </motion.button>

                        </div>

                        <span className='font-[500] text-base md:base lg:text-lg'>
                            EMU University приём на 2025–2026 год
                        </span>

                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/main-banner-new.webp"
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

            {/* ФОН КАРТИНКА 2 */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="hidden md:flex items-center relative min-h-[600px] md:min-h-[700px] py-20 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/main-banner-new.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right 0 top 0',
                }}
            >
                {/* Overlay с более светлым наложением */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/10"></div> */}

                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
                        <defs>
                            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                    <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl container mx-auto px-4 flex items-center justify-start relative z-10">
                    <motion.div
                        className="bg-[#00000030] backdrop-blur-md p-8 rounded-xl border border-white/20 text-white max-w-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-tight">
                            Выбирай будущее, достойное тебя
                        </h1>

                        <p className="text-lg md:text-xl mb-8 opacity-90">
                            Качественное образование в Университете EMU — ваш ключ к успеху
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: pulseSize }}
                                transition={{ duration: 0.2 }}
                                className="pop-form-trigger py-4 px-10 font-bold rounded-full shadow-xl transition-all duration-300 text-lg"
                                style={{
                                    background: `linear-gradient(${position}deg, #f7e282 0%, #e4c254 25%, #f3d651 50%, #dbb845 75%, #f7e282 100%)`,
                                    color: '#4a1942',
                                    boxShadow: `0 5px 15px rgba(198, 144, 38, 0.4)`,
                                }}
                            >
                                Подать заявку
                            </motion.button>

                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-sm md:text-base font-medium">
                                    EMU University приём на 2025–2026 год
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            {/* ФОН КАРТИНКА 2 */}





            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5 } }
                }}
                className="py-10 md:py-20 px-4 relative overflow-hidden bg-white -min-h-screen -md:min-h-[90vh]"
            >
                {/* Декоративный полукруг */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#6B0E55]/5 rounded-tl-[100%]"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-[#6B0E55] to-[#892c73] text-white text-center py-4 md:py-6 rounded-lg mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Выбирайте лучшее для своего будущего!
                        </h2>
                        <p className="text-sm md:text-base mt-2 opacity-80">
                            EMU University – ваш путь к успеху
                        </p>
                    </motion.div>

                    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 flex flex-col justify-center"
                        >
                            <div className="relative pl-4 md:pl-8">
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#ddb74b]"></div>
                                <h3 className="text-lg md:text-2xl font-semibold text-[#6B0E55] mb-3">
                                    Современные методики обучения
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 mb-4">
                                    С 2020 года EMU University лидирует в медицинском образовании. Мы удостоены наград <span className="text-[#ddb74b] font-semibold">«Лучший медицинский университет 2024»</span> и <span className="text-[#ddb74b] font-semibold">«Лучший негосударственный университет».</span>
                                </p>
                                <div className="space-y-3 text-sm md:text-base text-gray-600">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-[#8a3c8a] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Международные программы и партнёрства с ведущими университетами.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-[#8a3c8a] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Современные кампусы с передовыми лабораториями.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-[#8a3c8a] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Карьерные перспективы в мировой индустрии.</p>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    className="h-1 bg-[#8a3c8a] mt-6 rounded-full"
                                >
                                    <div className="h-full bg-[#ddb74b] rounded-full" style={{ width: '75%' }}></div>
                                </motion.div>
                                <p className="text-xs md:text-sm text-gray-500 mt-2">Студентов: 2500+ и растём!</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 flex flex-col items-end"
                        >
                            <div className="relative rounded-lg overflow-hidden shadow-xl w-full">
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    className="w-full h-auto"
                                >
                                    <source src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/welcome.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-0 left-0 w-16 h-16 bg-[#6B0E55]/20 rounded-br-full"></div>
                            </div>
                            <motion.a
                                href="https://apply.emuni.uz/ru"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                                className="mt-4 w-fit ml-auto md:ml-auto relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-white rounded-lg text-sm md:text-base text-center overflow-hidden group"
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
                                    className="absolute inset-0 bg-gradient-to-r from-[#6B0E55]/50 to-[#8a3c8a]/50 rounded-lg"
                                ></motion.div>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                <style jsx global>{`
                @media (max-width: 767px) {
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .text-sm {
                        font-size: 0.875rem;
                    }
                    .py-10 {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                    .min-h-screen {
                        min-height: 100vh;
                    }
                }
            `}</style>
            </motion.section>


            <Stats />


            {/* ПРЕИМУЩЕСТВА */}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="py-6 md:py-6 md:mb-16 px-4 relative bg-gradient-to-b from-white via-[#f7eef7] to-white overflow-hidden"
            >
                {/* Декоративные элементы */}
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#6B0E55] opacity-5 blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8a3c8a] opacity-5 blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#6B0E55] opacity-15"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block mb-4">
                            <div className="h-1 w-20 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] rounded-full mx-auto"></div>
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
                                <div className="h-2 w-full bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a]"></div>
                                <div className="p-6">
                                    <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                        <span className="text-2xl font-bold bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-transparent bg-clip-text">
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


            <RectorAppealSlider />


            {/* Программы обучения */}
            {/* <ProgramsSlider /> */}
            <CallActionSection />

            <LicenseSection />

            {/* <Stats /> */}

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
                            {/* <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] opacity-70 rounded-full -z-10"></div> */}
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
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-transparent bg-clip-text">01</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#6B0E55]">Уровень образования</h3>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#6B0E55] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Наличие аттестата о среднем образовании</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B0E55" className="w-full h-full">
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
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-transparent bg-clip-text">02</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#6B0E55]">Уровень английского языка</h3>

                                <div className="bg-[#f7eef7] rounded-xl p-4 mt-6 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center mb-3">
                                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#6B0E55] mr-3">
                                                <span className="font-bold">A2</span>
                                            </div>
                                            <span className="font-semibold text-[#6B0E55]">Минимальный уровень</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            Определяется согласно Общей европейской системе оценки владения языком (CEFR)
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#6B0E55] mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">Уровень будет проверен на вступительном тесте</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f7eef7] flex items-center justify-center text-[#6B0E55] mr-3 mt-0.5">
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
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a]"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#f7eef7] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-transparent bg-clip-text">03</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-[#6B0E55]">Необходимые документы</h3>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="pop-form-trigger bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] text-white py-3 px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full mb-6"
                                >
                                    Подать заявку
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#6B0E55] bg-opacity-10 text-[#6B0E55] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            1
                                        </div>
                                        <p className="text-gray-700 text-sm">Академические справки или аттестат о среднем образовании</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#6B0E55] bg-opacity-10 text-[#6B0E55] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            2
                                        </div>
                                        <p className="text-gray-700 text-sm">Документ, подтверждающий личность и возраст</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#6B0E55] bg-opacity-10 text-[#6B0E55] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            3
                                        </div>
                                        <p className="text-gray-700 text-sm">Удостоверение личности родителя/опекуна</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 rounded-full bg-[#6B0E55] bg-opacity-10 text-[#6B0E55] w-7 h-7 flex items-center justify-center font-bold mr-3 mt-0.5">
                                            4
                                        </div>
                                        <p className="text-gray-700 text-sm">Результаты тестирования по модулям <strong>Базовый</strong> и <strong>Продвинутый</strong></p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B0E55" className="w-full h-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>









            {/* Поддерживаем и помогаем прийти к результату - улучшенная версия */}
            <section id="mission_support" className="py-10 md:py-24 md:pb-6 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#f7eef7] to-white">
                {/* Декоративные элементы */}
                <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#6B0E55] opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#6B0E55] opacity-5 blur-3xl"></div>
                <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-[#6B0E55] opacity-20"></div>
                <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-[#6B0E55] opacity-15"></div>

                {/* Геометрические фигуры */}
                <div className="absolute top-20 right-40 w-12 h-12 border-4 border-[#6B0E55] border-opacity-10 rounded-lg transform rotate-45"></div>
                <div className="absolute bottom-32 left-24 w-10 h-10 border-4 border-[#6B0E55] border-opacity-10 rounded-full"></div>
                <div className="absolute top-1/3 left-16 w-20 h-3 bg-[#6B0E55] bg-opacity-5 rounded-full transform rotate-45"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto mb-8 md:mb-20"
                    >
                        <div className="inline-block relative mb-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                                Поддерживаем и помогаем
                            </h2>
                            {/* <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#6B0E55] to-[#8a3c8a] opacity-70 rounded-full"></div> */}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#6B0E55] mb-6">прийти к результату</h3>
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Студенческое сообщество
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Наша дружная комьюнити даёт возможность заводить полезные знакомства, участвовать в научных кружках и клубах по интересам, а также реализовывать собственные инициативы. Мы поддерживаем активное взаимодействие и взаимопомощь, чтобы каждый студент мог раскрыть свой потенциал и укрепить лидерские качества.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Гарантия 100%</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Дополнительные курсы английского языка
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Мы предлагаем специальные программы, которые помогут укрепить языковые навыки и уверенно ориентироваться в академической среде. Интерактивные занятия, практика разговорной речи и изучение профильной лексики позволяют студентам быстрее адаптироваться и успешно взаимодействовать с преподавателями и международными партнёрами.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Персонализация</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Современные методики обучения
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Мы объединяем традиционные академические практики с инновационными технологиями, делая образовательный процесс интерактивным, увлекательным и по-настоящему эффективным. Это позволяет студентам глубже осваивать материал и успешно применять полученные знания на практике.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Интерактивность</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Развитие клинического мышления
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Учебная программа ориентирована на формирование у будущих врачей навыков глубокого анализа клинических случаев и умения быстро принимать обоснованные решения. Такой подход помогает эффективно справляться с профессиональными вызовами, обеспечивая высокое качество и безопасность медицинской помощи.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Экспертность</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Квалифицированные преподаватели и передовые лаборатории
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    Учебный процесс ведётся под руководством экспертов, которые используют современное оборудование и инновационные методы обучения. Это даёт студентам глубокие практические навыки и уверенность в применении теоретических знаний.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Гибкость</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6B0E55] to-[#8a3c8a] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B0E55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6B0E55] transition-colors duration-300">
                                    Удобная локация и современные кампусы
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    EMU University располагает двумя комфортными кампусами: один предназначен для медицинских направлений, а второй — для обучения бизнесу и социальным наукам. Каждый кампус оснащён современными аудиториями, лабораториями и зонами отдыха, обеспечивая благоприятную среду для учёбы, исследований и развития студентов.
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f7eef7] text-[#6B0E55] py-1 px-3 rounded-full">Развитие</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6B0E55] font-medium text-sm flex items-center hover:underline hidden"
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
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ scale: pulseSize }}
                            transition={{ duration: 0.2 }}
                            className="pop-form-trigger mb-10 py-4 px-10 text-[#4a1942] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
                            style={{
                                background: `linear-gradient(${position}deg, 
                                    #f7e282 0%, 
                                    #e4c254 25%, 
                                    #f3d651 50%, 
                                    #dbb845 75%,
                                    #f7e282 100%)`,
                                boxShadow: `0 5px 15px rgba(198, 144, 38, 0.5),
                                0 0 ${20 + glowIntensity * 20}px rgba(247, 226, 130, ${0.5 + glowIntensity * 0.3})`
                            }}
                        >
                            Подать заявку
                        </motion.button>

                    </motion.div>
                </div>
            </section>

            {/* <GrantsSlider /> */}

            <StudTestimonRedesign />

            <PartnersSlider_Home />

            <Recall />

            {/* <Faq /> */}

            <FixedPhoneButton />

            {/* <Footer /> */}


        </div >
    );
}