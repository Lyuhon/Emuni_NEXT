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



            <CallActionSection />

            <CallActionSection_2 />


            <RectorAppealSlider />

            <RectorAppealSlider_2 />

            <RectorAppealSlider_3 />





        </div >
    );
}