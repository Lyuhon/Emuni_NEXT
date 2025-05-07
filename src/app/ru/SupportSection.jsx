'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SupportSection = () => {
    // Animation states for the golden button
    const [position, setPosition] = useState(45);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    // Animation effects for the button
    useEffect(() => {
        // Button glow animation
        const glowInterval = setInterval(() => {
            setGlowIntensity(prev => (prev >= 1 ? 0 : prev + 0.1));
        }, 200);

        // Button gradient animation
        const positionInterval = setInterval(() => {
            setPosition(prev => (prev >= 360 ? 0 : prev + 1));
        }, 100);

        // Button pulse animation
        const pulseInterval = setInterval(() => {
            setPulseSize(prev => (prev >= 1.03 ? 1 : 1.03));
        }, 2000);

        return () => {
            clearInterval(glowInterval);
            clearInterval(positionInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    // Card data array
    const supportCards = [
        {
            title: "Студенческое сообщество",
            description: "Наша дружная комьюнити даёт возможность заводить полезные знакомства, участвовать в научных кружках и клубах по интересам, а также реализовывать собственные инициативы. Мы поддерживаем активное взаимодействие и взаимопомощь, чтобы каждый студент мог раскрыть свой потенциал и укрепить лидерские качества.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            ),
            tag: "Гарантия 100%"
        },
        {
            title: "Дополнительные курсы английского языка",
            description: "Мы предлагаем специальные программы, которые помогут укрепить языковые навыки и уверенно ориентироваться в академической среде. Интерактивные занятия, практика разговорной речи и изучение профильной лексики позволяют студентам быстрее адаптироваться и успешно взаимодействовать с преподавателями и международными партнёрами.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            ),
            tag: "Персонализация"
        },
        {
            title: "Современные методики обучения",
            description: "Мы объединяем традиционные академические практики с инновационными технологиями, делая образовательный процесс интерактивным, увлекательным и по-настоящему эффективным. Это позволяет студентам глубже осваивать материал и успешно применять полученные знания на практике.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            ),
            tag: "Интерактивность"
        },
        {
            title: "Развитие клинического мышления",
            description: "Учебная программа ориентирована на формирование у будущих врачей навыков глубокого анализа клинических случаев и умения быстро принимать обоснованные решения. Такой подход помогает эффективно справляться с профессиональными вызовами, обеспечивая высокое качество и безопасность медицинской помощи.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            ),
            tag: "Экспертность"
        },
        {
            title: "Квалифицированные преподаватели и передовые лаборатории",
            description: "Учебный процесс ведётся под руководством экспертов, которые используют современное оборудование и инновационные методы обучения. Это даёт студентам глубокие практические навыки и уверенность в применении теоретических знаний.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            tag: "Гибкость"
        },
        {
            title: "Удобная локация и современные кампусы",
            description: "EMU University располагает двумя комфортными кампусами: один предназначен для медицинских направлений, а второй — для обучения бизнесу и социальным наукам. Каждый кампус оснащён современными аудиториями, лабораториями и зонами отдыха, обеспечивая благоприятную среду для учёбы, исследований и развития студентов.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            ),
            tag: "Развитие"
        }
    ];

    return (
        <section id="mission_support" className="py-10 md:py-24 md:pb-6 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#f9eef5] to-white">
            {/* Декоративные элементы */}
            <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#6b0e55] opacity-5 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#6b0e55] opacity-5 blur-3xl"></div>
            <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-[#6b0e55] opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-[#6b0e55] opacity-15"></div>

            {/* Геометрические фигуры */}
            <div className="absolute top-20 right-40 w-12 h-12 border-4 border-[#6b0e55] border-opacity-10 rounded-lg transform rotate-45"></div>
            <div className="absolute bottom-32 left-24 w-10 h-10 border-4 border-[#6b0e55] border-opacity-10 rounded-full"></div>
            <div className="absolute top-1/3 left-16 w-20 h-3 bg-[#6b0e55] bg-opacity-5 rounded-full transform rotate-45"></div>

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
                        {/* <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#6b0e55] to-[#8f3178] opacity-70 rounded-full"></div> */}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#6b0e55] mb-6">прийти к результату</h3>
                    <p className="text-gray-600 text-lg">
                        Наша миссия — не просто обучать, но обеспечить каждому студенту путь к успешному поступлению
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(107, 14, 85, 0.1), 0 10px 10px -5px rgba(107, 14, 85, 0.04)"
                            }}
                            className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Верхний цветной круг */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#6b0e55] to-[#8f3178] group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6b0e55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {card.icon}
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#6b0e55] transition-colors duration-300">
                                    {card.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {card.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium bg-[#f9eef5] text-[#6b0e55] py-1 px-3 rounded-full">{card.tag}</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#6b0e55] font-medium text-sm flex items-center hover:underline hidden"
                                    >
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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
                        className="pop-form-trigger mb-10 py-4 px-10 text-[#6b0e55] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
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
    );
};

export default SupportSection;