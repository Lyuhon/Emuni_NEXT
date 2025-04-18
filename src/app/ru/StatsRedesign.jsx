// Stats.jsx
'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Анимации
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
};

const Counter = ({ target, title, suffix = "", duration = 2000, icon }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const startValue = 0;
        const endValue = parseInt(target);

        const countUp = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * (endValue - startValue) + startValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(countUp);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(countUp);
    }, [isVisible, target, duration]);

    return (
        <motion.div
            ref={counterRef}
            className="flex flex-row items-center gap-6 p-6 relative rounded-xl border-l-4 border-[#631463]"
            variants={itemVariants}
            whileHover={{ x: 5, boxShadow: "0 4px 20px rgba(99, 20, 99, 0.08)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-white rounded-xl opacity-90 -z-10"></div>
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f7eef7]">
                {icon}
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#631463] mb-1 flex items-center">
                    <span className="counter-value">{count}</span><span>{suffix}</span>
                </h3>
                <p className="text-gray-600 font-medium text-sm">{title}</p>
            </div>
        </motion.div>
    );
};

const Stats = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Плавающий фоновый градиент */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-[#f9f5f9] to-white -z-20"></div>

            {/* Декоративные элементы */}
            <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#631463] opacity-5"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-[#631463] opacity-5"></div>
            {/* <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#631463] opacity-3"></div> */}

            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Левая колонка с заголовком */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h6 className="text-[#631463] font-semibold mb-3 uppercase tracking-wider text-sm">Статистика EMU University</h6>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                            Академическое<br />превосходство с<br />
                            <span className="text-[#631463]">глобальной перспективой</span>
                        </h2>

                        {/* <a href="#mission_support" className="inline-flex items-center group w-fit">
                            <span className="relative px-6 py-3 bg-[#631463] text-white font-medium rounded-lg overflow-hidden">
                                <span className="relative z-10">Наша миссия и видение</span>
                                <span className="absolute inset-0 bg-purple-900 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#631463] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a> */}
                    </motion.div>

                    {/* Правая колонка со счетчиками */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <Counter
                            target="2200"
                            suffix="+"
                            title="Счастливых студентов"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                        />
                        <Counter
                            target="300"
                            suffix="+"
                            title="Квалифицированных преподавателей"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            }
                        />
                        <Counter
                            target="51"
                            suffix="%"
                            title="Остепененность профессорско-преподовательского состава"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            }
                        />
                        <Counter
                            target="98"
                            suffix="%"
                            title="Уровень удовлетворенности студентов"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;