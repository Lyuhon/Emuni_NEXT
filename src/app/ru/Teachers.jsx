'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const TeacherSlider = () => {
    // Референции для кнопок навигации
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Массив с данными преподавателей
    const teachers = [
        {
            id: 1,
            name: 'Доктор Музаммад Сайфул Ислам Хан',
            position: 'Преподаватель модуля химии',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
            // description: 'Мои занятия действительно информативны и увлекательны. Я обещаю сделать все сложные темы химии простыми и доступными для вас. Central Asian University ждет вас, чтобы раскрыть ваш огромный потенциал.',
            image: 'https://emuni.uz/wp-content/uploads/2023/03/bt.png',
            experience: '15+ лет',
            publications: '32 научные работы',
            degree: 'PhD в Химии'
        },
        {
            id: 2,
            name: 'Профессор Анна Михайлова',
            position: 'Преподаватель математики',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
            // description: 'Математика — это не просто цифры и формулы, это способ мышления. На моих занятиях вы научитесь видеть логические связи и применять математические концепции к реальным задачам. Моя цель — сделать математику доступной и увлекательной для всех студентов.',
            image: 'https://emuni.uz/wp-content/uploads/2023/03/bt.png',

            experience: '12 лет',
            publications: '24 научные работы',
            degree: 'PhD в Математике'
        },
        {
            id: 3,
            name: 'Др. Джонатан Стоун',
            position: 'Преподаватель английского языка',
            // description: 'Владение английским открывает двери к мировым знаниям и возможностям. Мои методики обучения сфокусированы на практическом применении языка, что поможет вам быстро прогрессировать и уверенно общаться в международной среде.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',

            image: 'https://emuni.uz/wp-content/uploads/2023/03/bt.png',

            experience: '10 лет',
            publications: '16 научных работ',
            degree: 'MA в Лингвистике'
        },
        {
            id: 4,
            name: 'Профессор Елена Ковалева',
            position: 'Преподаватель биологии',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
            image: 'https://emuni.uz/wp-content/uploads/2023/03/bt.png',

            experience: '18 лет',
            publications: '45 научных работ',
            degree: 'PhD в Биологии'
        }
    ];

    return (
        <div className="relative max-w-5xl mx-auto py-12 bg-[#FFFFFF]">
            {/* Swiper слайдер */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                loop={true} // Бесконечный скролл
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    // Привязка кнопок навигации после инициализации Swiper
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                className="pb-14"
            >
                {teachers.map((teacher) => (
                    <SwiperSlide key={teacher.id}>
                        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden h-full bg-white">
                            {/* Мобильный вид - фото и информация о стаже вверху */}
                            <div className="md:hidden w-full relative h-64">
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-4">
                                    <div className="text-white">
                                        <div className="font-medium text-sm">Стаж преподавания</div>
                                        <div className="text-xl font-bold">{teacher.experience}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Десктопный вид - фото слева */}
                            <div className="hidden md:block md:w-1/3 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#631463] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-6 pt-16">
                                    <div className="text-white space-y-1">
                                        <div className="font-medium">Стаж преподавания</div>
                                        <div className="text-2xl font-bold">{teacher.experience}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 p-6 md:p-8 flex flex-col h-full">
                                <div className="mb-1 text-[#631463] font-semibold">{teacher.position}</div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{teacher.name}</h3>

                                <div className="flex items-center space-x-2 mb-4 md:mb-6">
                                    <div className="h-0.5 w-12 bg-[#631463]"></div>
                                    <span className="text-sm font-medium text-gray-500">{teacher.degree}</span>
                                </div>

                                <div className="bg-[#f7eef7] rounded-2xl p-4 md:p-6 mb-4 md:mb-6 relative overflow-hidden">
                                    {/* Убрали SVG с кавычками */}
                                    <p className="text-gray-700 text-base md:text-lg relative z-10">{teacher.description}</p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                    <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span className="text-xs md:text-sm text-gray-700">{teacher.publications}</span>
                                    </div>

                                    <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-xs md:text-sm text-gray-700">Активный исследователь</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопки навигации */}
            <div className="flex justify-center mt-8 space-x-4">
                <motion.button
                    ref={prevRef}
                    whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <motion.button
                    ref={nextRef}
                    whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </div>
    );
}

export default TeacherSlider;