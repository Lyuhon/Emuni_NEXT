// // Stats.jsx
// 'use client';
// import { motion } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';

// // Анимации
// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 }
//     }
// };

// const Counter = ({ target, title, suffix = "", duration = 2000 }) => {
//     const [count, setCount] = useState(0);
//     const counterRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             const [entry] = entries;
//             setIsVisible(entry.isIntersecting);
//         }, { threshold: 0.1 });

//         if (counterRef.current) {
//             observer.observe(counterRef.current);
//         }

//         return () => {
//             if (counterRef.current) {
//                 observer.unobserve(counterRef.current);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         if (!isVisible) return;

//         let startTime;
//         const startValue = 0;
//         const endValue = parseInt(target);

//         const countUp = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             const currentCount = Math.floor(progress * (endValue - startValue) + startValue);

//             setCount(currentCount);

//             if (progress < 1) {
//                 requestAnimationFrame(countUp);
//             } else {
//                 setCount(endValue);
//             }
//         };

//         requestAnimationFrame(countUp);
//     }, [isVisible, target, duration]);

//     return (
//         <div ref={counterRef} className="text-center">
//             <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6B00] mb-2">
//                 {count}{suffix}
//             </h3>
//             <p className="text-gray-700 font-medium text-sm md:text-base">{title}</p>
//         </div>
//     );
// };

// const Stats = () => {
//     return (
//         <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeIn}
//             className="py-16 md:py-24 px-4 relative overflow-hidden bg-white"
//         >
//             {/* Декоративные элементы */}
//             <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7eef7] rounded-bl-full opacity-50 z-0 hidden md:block"></div>
//             <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f7eef7] rounded-tr-full opacity-30 z-0 hidden md:block"></div>
//             <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>

//             <div className="max-w-screen-xl container mx-auto relative z-10">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-col md:flex-row items-center mb-12 md:mb-16"
//                 >
//                     <div className="md:w-2/5 mb-8 md:mb-0">
//                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#292D5A] leading-tight mb-4">
//                             Academic<br />excellence with<br />a global<br />perspective
//                         </h2>
//                         <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full"></div>
//                     </div>

//                     <div className="md:w-3/5 md:pl-8">
//                         <p className="text-gray-600 text-base md:text-lg mb-6">
//                             EMU University is one of the most rapidly developing universities in the country. We are proud of our high-quality Academic Programs.
//                         </p>
//                         <p className="text-gray-600 text-base md:text-lg mb-6">
//                             The University brings together various departments and develops interdisciplinary science, engineering, business, medicine, dental and hospitality management programs.
//                         </p>
//                         <a href="#" className="text-[#FF6B00] font-medium hover:underline inline-flex items-center">
//                             Our mission and vision
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
//                 >
//                     <Counter target="2200" suffix="+" title="Happy students" />
//                     <Counter target="250" suffix="+" title="Qualified teachers" />
//                     <Counter target="15" title="Academic Programs" />
//                     <Counter target="98" suffix="%" title="Students Satisfaction Level" />
//                 </motion.div>
//             </div>
//         </motion.section>
//     );
// };

// export default Stats;

// Stats.jsx
'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Анимации
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Counter = ({ target, title, suffix = "", duration = 2000 }) => {
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
            className="text-center relative p-6 rounded-lg"
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(99, 20, 99, 0.1), 0 10px 10px -5px rgba(99, 20, 99, 0.04)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f7eef7] to-white rounded-lg -z-10"></div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#631463] mb-3">
                {count}{suffix}
            </h3>
            <p className="text-gray-700 font-medium text-sm md:text-base">{title}</p>
        </motion.div>
    );
};

const Stats = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="py-16 md:py-24 px-4 relative overflow-hidden bg-white"
        >
            {/* Декоративные элементы внутри контейнера */}
            <div className="max-w-screen-xl container mx-auto relative z-10">
                {/* Декоративные элементы внутри контейнера */}
                <div className="absolute top-20 right-10 w-12 h-12 border-4 border-[#631463] border-opacity-10 rounded-lg transform rotate-45"></div>
                <div className="absolute bottom-32 left-24 w-10 h-10 border-4 border-[#631463] border-opacity-10 rounded-full"></div>
                <div className="absolute top-1/3 left-16 w-20 h-3 bg-[#631463] bg-opacity-5 rounded-full transform rotate-45"></div>
                <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl -z-5"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center mb-12 md:mb-16"
                >
                    <div className="md:w-2/5 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#631463] leading-tight mb-4">
                            Академическое<br />превосходство с<br />глобальной<br />перспективой
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full"></div>
                    </div>

                    <div className="md:w-3/5 md:pl-8">
                        <p className="text-gray-600 text-base md:text-lg mb-6">
                            EMU University — один из самых быстроразвивающихся университетов в стране. Мы гордимся нашими высококачественными академическими программами.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg mb-6">
                            Университет объединяет различные факультеты и развивает междисциплинарные направления науки, инженерии, бизнеса, медицины, стоматологии и управления гостиничным бизнесом.
                        </p>
                        <a href="#" className="text-[#631463] font-medium hover:underline inline-flex items-center group">
                            Наша миссия и видение
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    <Counter target="2200" suffix="+" title="Счастливых студентов" />
                    <Counter target="250" suffix="+" title="Квалифицированных преподавателей" />
                    <Counter target="15" title="Академических программ" />
                    <Counter target="98" suffix="%" title="Уровень удовлетворенности студентов" />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Stats;