// TestimonialsSection.jsx - Вариант 4
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Анимации
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const TestimonialsSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Примеры отзывов
    const testimonials = [
        {
            id: 1,
            name: "Алексей Петров",
            role: "Студент 3 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/student1.jpg",
            comment: "EMU University превзошел все мои ожидания! Преподаватели не только знают свой предмет, но и всегда готовы помочь. Благодаря университету я получил возможность пройти стажировку в ведущей клинике."
        },
        {
            id: 2,
            name: "Мария Иванова",
            role: "Выпускница 2024",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/student2.jpg",
            comment: "Учеба в EMU University стала важнейшим этапом в моей жизни. Здесь я нашла не только качественное образование, но и друзей на всю жизнь. Полученные знания уже помогли мне устроиться на работу мечты."
        },
        {
            id: 3,
            name: "Дмитрий Соколов",
            role: "Студент 2 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/student3.jpg",
            comment: "Отличная инфраструктура, современное оборудование и заботливые преподаватели — всё это EMU University. Особенно нравится практическая направленность обучения, мы получаем реальные навыки, а не только теорию."
        },
        {
            id: 4,
            name: "Анна Сергеева",
            role: "Студентка 1 курса",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/student4.jpg",
            comment: "Я выбрала EMU University после долгих поисков и не жалею! Уже в первый семестр я поняла, что сделала правильный выбор. Атмосфера поддержки и стремления к знаниям просто потрясающая."
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-white">
            {/* Геометрические декоративные элементы */}
            <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-[#f7eef7] -z-10 rounded-bl-[200px] opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#631463] rounded-full opacity-10"></div>
            <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-lg bg-[#631463] rotate-45 opacity-20"></div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Левая колонка - заголовок и выбранный отзыв */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#631463] leading-tight mb-6">
                                    Впечатления <br />наших студентов
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full"></div>
                            </div>

                            <p className="text-gray-600 text-lg mb-10">
                                Узнайте, что думают студенты о своем опыте обучения в EMU University, и почему они рекомендуют нас своим друзьям и близким.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                                Оставить отзыв
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Правая колонка - отзыв с полноразмерной картинкой */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full">
                                <div className="w-full h-full relative rounded-tr-2xl overflow-hidden">
                                    <Image
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#631463]/80 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3 relative z-10">
                                <svg className="w-10 h-10 text-[#631463] opacity-30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>

                                <p className="text-gray-700 text-lg mb-6 italic">
                                    "{testimonials[activeTestimonial].comment}"
                                </p>

                                <div className="flex items-center mb-10">
                                    <div className="mr-4">
                                        <h3 className="font-bold text-[#631463]">{testimonials[activeTestimonial].name}</h3>
                                        <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>

                                <div className="flex space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Навигация по отзывам */}
                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-[#631463] w-8' : 'bg-gray-300'}`}
                                            aria-label={`Просмотреть отзыв ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Карточки других отзывов */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`cursor-pointer p-3 rounded-xl transition-all duration-300 ${activeTestimonial === index ? 'bg-[#f7eef7] ring-2 ring-[#631463]' : 'bg-gray-50 hover:bg-[#f7eef7]/50'}`}
                            onClick={() => setActiveTestimonial(index)}
                        >
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#631463] text-sm">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;