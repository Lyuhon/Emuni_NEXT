// // 'use client';
// // import React, { useRef } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // // Импорт Swiper
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination, EffectCards } from 'swiper/modules';
// // // Импорт стилей Swiper
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/effect-cards';

// // const TeacherSlider = () => {
// //     // Референции для кнопок навигации
// //     const prevRef = useRef(null);
// //     const nextRef = useRef(null);

// //     // Массив с данными преподавателей
// //     const teachers = [
// //         {
// //             id: 1,
// //             name: 'Доктор Музаммад Сайфул Ислам Хан',
// //             position: 'Преподаватель модуля химии',
// //             description: 'Мои занятия действительно информативны и увлекательны. Я обещаю сделать все сложные темы химии простыми и доступными для вас. Central Asian University ждет вас, чтобы раскрыть ваш огромный потенциал.',
// //             image: '/teacher-chemistry.jpg',
// //             experience: '15+ лет',
// //             publications: '32 научные работы',
// //             degree: 'PhD в Химии',
// //             socialLinks: {
// //                 facebook: '#',
// //                 linkedin: '#',
// //                 github: '#'
// //             }
// //         },
// //         {
// //             id: 2,
// //             name: 'Профессор Анна Михайлова',
// //             position: 'Преподаватель математики',
// //             description: 'Математика — это не просто цифры и формулы, это способ мышления. На моих занятиях вы научитесь видеть логические связи и применять математические концепции к реальным задачам. Моя цель — сделать математику доступной и увлекательной для всех студентов.',
// //             image: '/teacher-math.jpg',
// //             experience: '12 лет',
// //             publications: '24 научные работы',
// //             degree: 'PhD в Математике',
// //             socialLinks: {
// //                 facebook: '#',
// //                 linkedin: '#',
// //                 github: '#'
// //             }
// //         },
// //         {
// //             id: 3,
// //             name: 'Др. Джонатан Стоун',
// //             position: 'Преподаватель английского языка',
// //             description: 'Владение английским открывает двери к мировым знаниям и возможностям. Мои методики обучения сфокусированы на практическом применении языка, что поможет вам быстро прогрессировать и уверенно общаться в международной среде.',
// //             image: '/teacher-english.jpg',
// //             experience: '10 лет',
// //             publications: '16 научных работ',
// //             degree: 'MA в Лингвистике',
// //             socialLinks: {
// //                 facebook: '#',
// //                 linkedin: '#',
// //                 github: '#'
// //             }
// //         },
// //         {
// //             id: 4,
// //             name: 'Профессор Елена Ковалева',
// //             position: 'Преподаватель биологии',
// //             description: 'Биология — наука о жизни во всех её проявлениях. В моих классах мы исследуем удивительный мир живых организмов, от клеточного уровня до экосистем. Я использую инновационные подходы, чтобы сделать сложные концепции понятными и запоминающимися.',
// //             image: '/teacher-biology.jpg',
// //             experience: '18 лет',
// //             publications: '45 научных работ',
// //             degree: 'PhD в Биологии',
// //             socialLinks: {
// //                 facebook: '#',
// //                 linkedin: '#',
// //                 github: '#'
// //             }
// //         }
// //     ];

// //     return (
// //         <div className="relative">
// //             {/* Swiper слайдер */}
// //             <Swiper
// //                 modules={[Navigation, Pagination, EffectCards]}
// //                 navigation={{
// //                     prevEl: prevRef.current,
// //                     nextEl: nextRef.current,
// //                 }}
// //                 pagination={{
// //                     clickable: true,
// //                     dynamicBullets: true
// //                 }}
// //                 onBeforeInit={(swiper) => {
// //                     // Привязка кнопок навигации после инициализации Swiper
// //                     swiper.params.navigation.prevEl = prevRef.current;
// //                     swiper.params.navigation.nextEl = nextRef.current;
// //                 }}
// //                 slidesPerView={1}
// //                 spaceBetween={30}
// //                 grabCursor={true}
// //                 className="pb-14"
// //             >
// //                 {teachers.map((teacher) => (
// //                     <SwiperSlide key={teacher.id}>
// //                         <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-3xl shadow-xl overflow-hidden h-full">
// //                             <div className="md:w-1/3 relative overflow-hidden group h-full">
// //                                 <div className="absolute inset-0 bg-gradient-to-t from-[#631463] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
// //                                 <Image
// //                                     src={teacher.image}
// //                                     alt={teacher.name}
// //                                     width={400}
// //                                     height={500}
// //                                     className="w-full h-full object-cover"
// //                                 />
// //                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-6 pt-16">
// //                                     <div className="text-white space-y-1">
// //                                         <div className="font-medium">Стаж преподавания</div>
// //                                         <div className="text-2xl font-bold">{teacher.experience}</div>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="md:w-2/3 p-8 flex flex-col h-full">
// //                                 <div className="mb-1 text-[#631463] font-semibold">{teacher.position}</div>
// //                                 <h3 className="text-2xl font-bold mb-2 text-gray-900">{teacher.name}</h3>

// //                                 <div className="flex items-center space-x-2 mb-6">
// //                                     <div className="h-0.5 w-12 bg-[#631463]"></div>
// //                                     <span className="text-sm font-medium text-gray-500">{teacher.degree}</span>
// //                                 </div>

// //                                 <div className="bg-[#f7eef7] rounded-2xl p-6 mb-6 relative overflow-hidden">
// //                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 absolute -top-6 -left-6 text-[#631463] opacity-10" fill="currentColor" viewBox="0 0 24 24">
// //                                         <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
// //                                     </svg>
// //                                     <p className="text-gray-700 text-lg relative z-10">{teacher.description}</p>
// //                                 </div>

// //                                 <div className="flex flex-wrap items-center gap-4 mb-6">
// //                                     <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
// //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
// //                                         </svg>
// //                                         <span className="text-sm text-gray-700">{teacher.publications}</span>
// //                                     </div>

// //                                     <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
// //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                                         </svg>
// //                                         <span className="text-sm text-gray-700">Активный исследователь</span>
// //                                     </div>
// //                                 </div>

// //                                 <div className="mt-auto flex items-center justify-between">
// //                                     <div className="flex space-x-3">
// //                                         <a href={teacher.socialLinks.facebook} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#631463] hover:text-white transition-colors duration-300">
// //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
// //                                                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
// //                                             </svg>
// //                                         </a>
// //                                         <a href={teacher.socialLinks.linkedin} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#631463] hover:text-white transition-colors duration-300">
// //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
// //                                                 <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
// //                                             </svg>
// //                                         </a>
// //                                         <a href={teacher.socialLinks.github} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#631463] hover:text-white transition-colors duration-300">
// //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
// //                                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //                                             </svg>
// //                                         </a>
// //                                     </div>
// //                                     <motion.button
// //                                         whileHover={{ x: 3 }}
// //                                         className="text-[#631463] font-medium flex items-center hover:underline"
// //                                     >
// //                                         Подробнее о преподавателе
// //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //                                         </svg>
// //                                     </motion.button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </SwiperSlide>
// //                 ))}
// //             </Swiper>

// //             {/* Кнопки навигации */}
// //             <div className="flex justify-center mt-8 space-x-4">
// //                 <motion.button
// //                     ref={prevRef}
// //                     whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
// //                 >
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //                     </svg>
// //                 </motion.button>
// //                 <motion.button
// //                     ref={nextRef}
// //                     whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
// //                 >
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                 </motion.button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TeacherSlider;

// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// // Импорт Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// // Импорт стилей Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const TeacherSlider = () => {
//     // Референции для кнопок навигации
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     // Массив с данными преподавателей
//     const teachers = [
//         {
//             id: 1,
//             name: 'Доктор Музаммад Сайфул Ислам Хан',
//             position: 'Преподаватель модуля химии',
//             description: 'Мои занятия действительно информативны и увлекательны. Я обещаю сделать все сложные темы химии простыми и доступными для вас. Central Asian University ждет вас, чтобы раскрыть ваш огромный потенциал.',
//             image: '/teacher-chemistry.jpg',
//             experience: '15+ лет',
//             publications: '32 научные работы',
//             degree: 'PhD в Химии'
//         },
//         {
//             id: 2,
//             name: 'Профессор Анна Михайлова',
//             position: 'Преподаватель математики',
//             description: 'Математика — это не просто цифры и формулы, это способ мышления. На моих занятиях вы научитесь видеть логические связи и применять математические концепции к реальным задачам. Моя цель — сделать математику доступной и увлекательной для всех студентов.',
//             image: '/teacher-math.jpg',
//             experience: '12 лет',
//             publications: '24 научные работы',
//             degree: 'PhD в Математике'
//         },
//         {
//             id: 3,
//             name: 'Др. Джонатан Стоун',
//             position: 'Преподаватель английского языка',
//             description: 'Владение английским открывает двери к мировым знаниям и возможностям. Мои методики обучения сфокусированы на практическом применении языка, что поможет вам быстро прогрессировать и уверенно общаться в международной среде.',
//             image: '/teacher-english.jpg',
//             experience: '10 лет',
//             publications: '16 научных работ',
//             degree: 'MA в Лингвистике'
//         },
//         {
//             id: 4,
//             name: 'Профессор Елена Ковалева',
//             position: 'Преподаватель биологии',
//             description: 'Биология — наука о жизни во всех её проявлениях. В моих классах мы исследуем удивительный мир живых организмов, от клеточного уровня до экосистем. Я использую инновационные подходы, чтобы сделать сложные концепции понятными и запоминающимися.',
//             image: '/teacher-biology.jpg',
//             experience: '18 лет',
//             publications: '45 научных работ',
//             degree: 'PhD в Биологии'
//         }
//     ];

//     return (
//         <div className="relative max-w-5xl mx-auto">
//             {/* Swiper слайдер */}
//             <Swiper
//                 modules={[Navigation, Pagination]}
//                 navigation={{
//                     prevEl: prevRef.current,
//                     nextEl: nextRef.current,
//                 }}
//                 pagination={{
//                     clickable: true,
//                     dynamicBullets: true
//                 }}
//                 onBeforeInit={(swiper) => {
//                     // Привязка кнопок навигации после инициализации Swiper
//                     swiper.params.navigation.prevEl = prevRef.current;
//                     swiper.params.navigation.nextEl = nextRef.current;
//                 }}
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 grabCursor={true}
//                 className="pb-14"
//             >
//                 {teachers.map((teacher) => (
//                     <SwiperSlide key={teacher.id}>
//                         <div className="flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden h-full bg-white">
//                             {/* Мобильный вид - фото и информация о стаже вверху */}
//                             <div className="md:hidden w-full relative h-64">
//                                 <Image
//                                     src={teacher.image}
//                                     alt={teacher.name}
//                                     width={400}
//                                     height={300}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-4">
//                                     <div className="text-white">
//                                         <div className="font-medium text-sm">Стаж преподавания</div>
//                                         <div className="text-xl font-bold">{teacher.experience}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Десктопный вид - фото слева */}
//                             <div className="hidden md:block md:w-1/3 relative overflow-hidden group">
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#631463] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
//                                 <Image
//                                     src={teacher.image}
//                                     alt={teacher.name}
//                                     width={400}
//                                     height={500}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-6 pt-16">
//                                     <div className="text-white space-y-1">
//                                         <div className="font-medium">Стаж преподавания</div>
//                                         <div className="text-2xl font-bold">{teacher.experience}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="md:w-2/3 p-6 md:p-8 flex flex-col h-full">
//                                 <div className="mb-1 text-[#631463] font-semibold">{teacher.position}</div>
//                                 <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{teacher.name}</h3>

//                                 <div className="flex items-center space-x-2 mb-4 md:mb-6">
//                                     <div className="h-0.5 w-12 bg-[#631463]"></div>
//                                     <span className="text-sm font-medium text-gray-500">{teacher.degree}</span>
//                                 </div>

//                                 <div className="bg-[#f7eef7] rounded-2xl p-4 md:p-6 mb-4 md:mb-6 relative overflow-hidden">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 md:h-24 w-16 md:w-24 absolute -top-6 -left-6 text-[#631463] opacity-10" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
//                                     </svg>
//                                     <p className="text-gray-700 text-base md:text-lg relative z-10">{teacher.description}</p>
//                                 </div>

//                                 <div className="flex flex-wrap items-center gap-3 md:gap-4">
//                                     <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                         </svg>
//                                         <span className="text-xs md:text-sm text-gray-700">{teacher.publications}</span>
//                                     </div>

//                                     <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                         </svg>
//                                         <span className="text-xs md:text-sm text-gray-700">Активный исследователь</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Кнопки навигации */}
//             <div className="flex justify-center mt-8 space-x-4">
//                 <motion.button
//                     ref={prevRef}
//                     whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </motion.button>
//                 <motion.button
//                     ref={nextRef}
//                     whileHover={{ scale: 1.1, backgroundColor: "#f7eef7" }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#631463] transition-all duration-300"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </motion.button>
//             </div>
//         </div>
//     );
// }

// export default TeacherSlider; 


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
        <div className="relative max-w-5xl mx-auto py-12">
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