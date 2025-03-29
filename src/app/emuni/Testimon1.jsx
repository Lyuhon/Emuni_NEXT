// ParallaxTestimonialsSection.jsx
'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ParallaxTestimonialsSection = () => {
    // Референс для секции отзывов
    const testimonialsRef = useRef(null);

    // Состояния для анимации движения рядов
    const [topRowX, setTopRowX] = useState(0);
    const [bottomRowX, setBottomRowX] = useState(0);

    // Примеры отзывов для верхнего ряда
    const topRow = [
        {
            id: 1,
            name: "Алексей П.",
            role: "Студент медицины",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "EMU University превзошел все мои ожидания! Преподаватели всегда готовы помочь вне занятий.",
            rating: 5,
            isFake: false
        },
        {
            id: 2,
            name: "Мария И.",
            role: "Выпускница 2024",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Благодаря университету я смогла найти работу мечты сразу после выпуска. Качество образования на высоте!",
            rating: 5,
            isFake: false
        },
        {
            id: 3,
            name: "Иван С.",
            role: "Магистрант",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Программа магистратуры действительно помогла мне углубить знания и стать настоящим специалистом.",
            rating: 5,
            isFake: false
        },
        {
            id: 4,
            name: "Ольга К.",
            role: "Студентка 2 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Атмосфера в университете способствует учебе. Преподаватели увлечены своим делом и вдохновляют нас.",
            rating: 5,
            isFake: false
        },
        {
            id: 5,
            name: "Дмитрий Л.",
            role: "Выпускник 2023",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Практические занятия особенно ценны. Благодаря им я получил навыки, которые сразу пригодились на работе.",
            rating: 4,
            isFake: false
        }
    ];

    // Данные отзывов для нижнего ряда
    const bottomRow = [
        {
            id: 6,
            name: "Анна М.",
            role: "Студентка стоматологии",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Стоматологическое оборудование новейшее, а преподаватели — практикующие врачи с огромным опытом.",
            rating: 5,
            isFake: false
        },
        {
            id: 7,
            name: "Сергей В.",
            role: "Студент 3 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Международные стажировки открыли для меня новые возможности. Спасибо EMU за эти программы!",
            rating: 5,
            isFake: false
        },
        {
            id: 8,
            name: "Елена Т.",
            role: "Магистрантка",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Научная работа в университете на высоком уровне, есть все возможности для исследований.",
            rating: 5,
            isFake: false
        },
        {
            id: 9,
            name: "Виктор Н.",
            role: "Выпускник 2024",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Активная студенческая жизнь и профессиональное образование — отличное сочетание в EMU University.",
            rating: 4,
            isFake: false
        },
        {
            id: 10,
            name: "Наталья К.",
            role: "Студентка 1 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
            text: "Даже на первом курсе чувствуется серьезный подход к образованию. Я сделала правильный выбор!",
            rating: 5,
            isFake: false
        }
    ];

    // Эффект для анимации параллакса при скролле
    useEffect(() => {
        const handleScroll = () => {
            if (!testimonialsRef.current) return;

            // Получаем позицию элемента относительно окна просмотра
            const rect = testimonialsRef.current.getBoundingClientRect();
            const scrollPosition = window.innerHeight - rect.top;

            // Если секция в поле зрения
            if (scrollPosition > 0 && rect.bottom > 0) {
                // Расчет значений смещения для анимации
                // Уменьшим скорость движения для лучшего восприятия на мобильных устройствах
                const isMobile = window.innerWidth < 768;
                const speedFactor = isMobile ? 0.05 : 0.15;

                const topRowOffset = scrollPosition * speedFactor; // Медленнее
                const bottomRowOffset = -scrollPosition * speedFactor; // В противоположную сторону

                setTopRowX(-topRowOffset);
                setBottomRowX(bottomRowOffset);
            }
        };

        // Добавляем слушатель события скролла
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Инициализация при первой загрузке

        // Очистка слушателя при размонтировании компонента
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Функция для отображения рейтинга звездами
    const renderRating = (rating) => {
        return (
            <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left md:max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#631463] mb-6">
                            Отзывы наших студентов
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Узнайте, что говорят студенты о своем опыте обучения в EMU University
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center whitespace-nowrap"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        Оставить отзыв
                    </motion.button>
                </div>
            </div>

            {/* Контейнер для параллакс эффекта */}
            <div ref={testimonialsRef} className="relative overflow-hidden pb-20">
                {/* Инструкция для мобильных устройств */}
                <div className="md:hidden text-center text-gray-500 text-sm mb-4 italic">
                    Прокрутите для просмотра всех отзывов ⟶
                </div>

                {/* Верхний ряд (движение вправо) */}
                <motion.div
                    style={{ x: topRowX }}
                    className="flex gap-6 mb-8"
                >
                    {topRow.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex-shrink-0 w-[85%] md:w-[30%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[-14%] md:ml-[-5%]' : ''}`}
                        >
                            <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                <div className="relative">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#631463]/20">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    {/* Индикатор проверенного отзыва */}
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#631463] rounded-full flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 md:h-3 md:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#631463] text-sm md:text-base">{testimonial.name}</h4>
                                    <p className="text-xs md:text-xs text-gray-500">{testimonial.role}</p>
                                    {renderRating(testimonial.rating)}
                                </div>
                            </div>
                            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                                <p className="text-xs md:text-sm text-gray-600">{testimonial.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Нижний ряд (движение влево) */}
                <motion.div
                    style={{ x: bottomRowX }}
                    className="flex gap-6"
                >
                    {bottomRow.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className={`flex-shrink-0 w-[85%] md:w-[30%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[5%] md:ml-[0%]' : ''}`}
                        >
                            <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                <div className="relative">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#631463]/20">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    {/* Индикатор проверенного отзыва */}
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#631463] rounded-full flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 md:h-3 md:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#631463] text-sm md:text-base">{testimonial.name}</h4>
                                    <p className="text-xs md:text-xs text-gray-500">{testimonial.role}</p>
                                    {renderRating(testimonial.rating)}
                                </div>
                            </div>
                            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                                <p className="text-xs md:text-sm text-gray-600">{testimonial.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Убираем нижнюю кнопку "Оставить отзыв", так как она уже есть вверху */}
        </section>
    );
};

export default ParallaxTestimonialsSection;