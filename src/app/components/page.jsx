// app/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// import Header from "/src/components/Header";
// import Footer from "/src/components/Footer";

import StudTestimonRedesign from './StudTestimonRedesign';
import Recall from './Recall';
import CallActionSection from './CallActionSection';
import CallActionSection_2 from './CallActionSection_2';


import RectorAppealSlider from './RectorAppealSlider';
import RectorAppealSlider_2 from './RectorAppealSlider_2';
import RectorAppealSlider_3 from './RectorAppealSlider_3';
import RectorAppealSlider_4 from './RectorAppealSlider_4';

import AwardsSection from './AwardsSection';













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


            {/* <Recall /> */}



            <StudTestimonRedesign />





            {/* Goal Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="py-6 md:py-20 md:pb-8 px-4 relative overflow-hidden bg-[#FFFFFF]"
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7eef7] rounded-bl-full opacity-50 z-0 hidden md:block"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10 px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative z-10 mb-3 md:mb-5">
                            Выбирайте лучшее для своего будущего!
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 w-full"
                        >
                            <div className="relative">
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                                >
                                    <source src="https://emuni.uz/wp-content/uploads/2025/04/rolik.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 h-full w-full bg-[#631463] rounded-xl z-0"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 flex flex-col justify-center"
                        >
                            <div className="border-l-4 border-[#8a3c8a] pl-3 md:pl-6 mb-5 md:mb-8">
                                <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Современные методики обучения</h3>
                                <p className="text-sm md:text-xl text-gray-600">
                                    Наш университет, основанный в 2020 году, уже стал лидером в медицинском образовании. Мы — <b className='text-[#ddb74b]'>«Лучший медицинский университет 2024»</b> и <b className='text-[#ddb74b]'>«Лучший негосударственный университет».</b> Присоединяйтесь к нам, чтобы получить качественное образование и достичь успеха!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
































            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5 } }
                }}
                className="py-10 md:py-20 px-4 relative overflow-hidden bg-white min-h-screen md:min-h-[90vh]"
            >
                {/* Декоративный полукруг */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#631463]/5 rounded-tl-[100%]"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white text-center py-4 md:py-6 rounded-lg mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Выбирайте лучшее для своего будущего!
                        </h2>
                        <p className="text-sm md:text-base mt-2 opacity-80">
                            EMU University – ваш путь к успеху в медицине
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
                                <h3 className="text-lg md:text-2xl font-semibold text-[#631463] mb-3">
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
                                        <p>Карьерные перспективы в мировой медицинской индустрии.</p>
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
                                <p className="text-xs md:text-sm text-gray-500 mt-2">Студентов: 5000+ и растём!</p>
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
                                    <source src="https://emuni.uz/wp-content/uploads/2025/04/rolik.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-0 left-0 w-16 h-16 bg-[#631463]/20 rounded-br-full"></div>
                            </div>
                            <motion.a
                                href="https://apply.emuni.uz/ru"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                                className="mt-4 w-fit ml-auto md:ml-auto relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white rounded-lg text-sm md:text-base text-center overflow-hidden group"
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
                                    className="absolute inset-0 bg-gradient-to-r from-[#631463]/50 to-[#8a3c8a]/50 rounded-lg"
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







            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="relative py-6 h-[60vh] md:py-20 px-4 overflow-hidden bg-[#FFFFFF]"
            >
                {/* Full-section video background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        className="w-full h-full object-cover"
                    >
                        <source src="https://emuni.uz/wp-content/uploads/2025/04/rolik.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Purple overlay with semi-transparency */}
                    <div className="absolute inset-0 bg-[#631463] opacity-60"></div>
                </div>

                {/* Content container */}
                <div className="max-w-screen-xl container mx-auto relative z-10 px-2 md:px-4 flex items-center justify-center h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10 mb-3 md:mb-5">
                            Выбирайте лучшее для <br></br>своего будущего!
                        </h2>
                    </motion.div>
                </div>
            </motion.section>









            {/* Goal Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="py-6 md:py-20 md:pb-8 px-4 relative overflow-hidden bg-[#FFFFFF]"
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7eef7] rounded-bl-full opacity-50 z-0 hidden md:block"></div>

                <div className="max-w-screen-xl container mx-auto relative z-10 px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative z-10 mb-3 md:mb-5">
                            Станьте частью лучшего университета!
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 flex flex-col justify-center"
                        >
                            <div className="border-l-4 border-[#8a3c8a] pl-3 md:pl-6 mb-5 md:mb-8">
                                <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Наши достижения</h3>
                                <p className="text-sm md:text-xl text-gray-600">
                                    С момента основания в 2020 году наш университет стал лидером в медицинском образовании. Мы гордимся наградами:
                                </p>
                                <ul className="mt-3 space-y-2">
                                    <li className="flex items-center text-sm md:text-lg text-gray-800">
                                        <span className="text-[#ddb74b] mr-2">🏆</span>
                                        <b>«Лучший медицинский университет 2024»</b>
                                    </li>
                                    <li className="flex items-center text-sm md:text-lg text-gray-800">
                                        <span className="text-[#ddb74b] mr-2">🏆</span>
                                        <b>«Лучший негосударственный университет»</b>
                                    </li>
                                </ul>
                                <p className="text-sm md:text-xl text-gray-600 mt-4">
                                    Выберите нас для качественного образования и успешной карьеры!
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 w-full"
                        >
                            <div className="relative">
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                                >
                                    <source src="https://emuni.uz/wp-content/uploads/2025/04/rolik.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 h-full w-full bg-[#631463] rounded-xl z-0"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>


            <CallActionSection />

            <CallActionSection_2 />


            <RectorAppealSlider />

            {/* <AwardsSection /> */}


            <RectorAppealSlider_2 />

            <RectorAppealSlider_3 />





        </div >
    );
}