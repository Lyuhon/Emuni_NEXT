// // // components/TestimonialsSection.js
// // 'use client';
// // import React, { useState, useRef, useEffect } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/navigation';

// // const TestimonialsSection = () => {
// //     // Данные для видео-отзывов
// //     const videoTestimonials = [
// //         {
// //             id: 1,
// //             name: 'Анна',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 2,
// //             name: 'Александр',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 3,
// //             name: 'Михаил',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 4,
// //             name: 'Дмитрий',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 5,
// //             name: 'Елена',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 6,
// //             name: 'Елена',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //         {
// //             id: 7,
// //             name: 'Елена',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             videoId: 'ANjUT3pcD7A',
// //             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
// //         },
// //     ];

// //     // Данные для текстовых отзывов
// //     const textTestimonials = [
// //         {
// //             id: 1,
// //             name: 'Ziyoda',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Курс помог мне уверенно подготовиться к университету и улучшить знания английского языка!'
// //         },
// //         {
// //             id: 2,
// //             name: 'Azizbek',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Отличные преподаватели и полезные материалы — всё, что нужно для успешного старта!'
// //         },
// //         {
// //             id: 3,
// //             name: 'Mukhammadjon',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Занятия действительно помогли мне разобраться в сложных темах и улучшить знания по биологии.'
// //         },
// //         {
// //             id: 4,
// //             name: 'Khanifa',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Благодаря курсам я чувствую себя уверенно и готов к учебе в университете!'
// //         },
// //         {
// //             id: 5,
// //             name: 'Muslima',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Курс помог мне разобраться в математике, советую его всем, кто хочет подтянуть свои знания!'
// //         },
// //         {
// //             id: 6,
// //             name: 'Siddiqho`ja',
// //             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
// //             text: 'Это отличный выбор для тех, кто хочет не просто учиться, а уверенно идти к своим целям в университете!'
// //         },
// //     ];

// //     // Состояние для управления воспроизведением видео
// //     const [playingVideoId, setPlayingVideoId] = useState(null);

// //     // Переключение воспроизведения видео
// //     const toggleVideoPlay = (videoId) => {
// //         if (playingVideoId === videoId) {
// //             setPlayingVideoId(null);
// //         } else {
// //             setPlayingVideoId(videoId);
// //         }
// //     };

// //     return (
// //         <section className="py-16 md:py-24 bg-white md:pb-[0]">
// //             <div className="max-w-screen-xl mx-auto px-4">
// //                 {/* Заголовок секции */}
// //                 <div className="text-center mb-12">
// //                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //                         Вдохновитесь нашими историями
// //                     </h2>
// //                     <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
// //                         Узнайте, как наши программы помогли студентам достичь успеха в учебе и карьере. Истории наших
// //                         выпускников вдохновляют на новые свершения и показывают, какие возможности открываются после
// //                         завершения обучения.
// //                     </p>
// //                 </div>

// //                 {/* Слайдер с видео-отзывами */}
// //                 <div className="relative mb-16">
// //                     <Swiper
// //                         modules={[Navigation, Autoplay]}
// //                         spaceBetween={16}
// //                         slidesPerView={1}
// //                         autoplay={{
// //                             delay: 8000,
// //                             disableOnInteraction: false,
// //                         }}
// //                         breakpoints={{
// //                             640: { slidesPerView: 2 },
// //                             1024: { slidesPerView: 3 },
// //                             1280: { slidesPerView: 5 },
// //                         }}
// //                         navigation={{
// //                             prevEl: '.video-swiper-button-prev',
// //                             nextEl: '.video-swiper-button-next',
// //                         }}
// //                         // className="!overflow-visible py-4"
// //                         className="py-4"
// //                     >
// //                         {videoTestimonials.map((testimonial) => (
// //                             <SwiperSlide key={testimonial.id} className="h-auto">
// //                                 <div className="rounded-lg overflow-hidden relative group">
// //                                     {playingVideoId === testimonial.id ? (
// //                                         // Воспроизведение YouTube Shorts видео
// //                                         <div className="aspect-[9/16] relative bg-gray-900">
// //                                             <iframe
// //                                                 src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&controls=1&rel=0&showinfo=0`}
// //                                                 title={`Отзыв от ${testimonial.name}`}
// //                                                 className="w-full h-full absolute top-0 left-0"
// //                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                                                 allowFullScreen
// //                                             ></iframe>
// //                                         </div>
// //                                     ) : (
// //                                         // Превью изображение
// //                                         <>
// //                                             <div className="aspect-[9/16] relative bg-gray-900">
// //                                                 <Image
// //                                                     src={testimonial.thumbnailImage}
// //                                                     alt={`Отзыв от ${testimonial.name}`}
// //                                                     fill
// //                                                     className="object-cover"
// //                                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
// //                                                 />
// //                                             </div>
// //                                             {/* Кнопка воспроизведения видео */}
// //                                             <button
// //                                                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 hover:bg-red-700 transition-colors"
// //                                                 onClick={() => toggleVideoPlay(testimonial.id)}
// //                                                 aria-label="Воспроизвести видео"
// //                                             >
// //                                                 <svg
// //                                                     xmlns="http://www.w3.org/2000/svg"
// //                                                     className="h-8 w-8 text-white"
// //                                                     fill="none"
// //                                                     viewBox="0 0 24 24"
// //                                                     stroke="currentColor"
// //                                                 >
// //                                                     <path
// //                                                         strokeLinecap="round"
// //                                                         strokeLinejoin="round"
// //                                                         strokeWidth={2}
// //                                                         d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
// //                                                     />
// //                                                     <path
// //                                                         strokeLinecap="round"
// //                                                         strokeLinejoin="round"
// //                                                         strokeWidth={2}
// //                                                         d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //                                                     />
// //                                                 </svg>
// //                                             </button>
// //                                         </>
// //                                     )}
// //                                 </div>
// //                             </SwiperSlide>
// //                         ))}
// //                     </Swiper>

// //                     {/* Кнопки навигации для видео-слайдера */}
// //                     <div className="flex justify-center gap-4 mt-8">
// //                         <div className="video-swiper-button-prev">
// //                             <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
// //                                 <svg
// //                                     xmlns="http://www.w3.org/2000/svg"
// //                                     className="h-6 w-6"
// //                                     fill="none"
// //                                     viewBox="0 0 24 24"
// //                                     stroke="currentColor"
// //                                 >
// //                                     <path
// //                                         strokeLinecap="round"
// //                                         strokeLinejoin="round"
// //                                         strokeWidth={2}
// //                                         d="M15 19l-7-7 7-7"
// //                                     />
// //                                 </svg>
// //                             </button>
// //                         </div>
// //                         <div className="video-swiper-button-next">
// //                             <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
// //                                 <svg
// //                                     xmlns="http://www.w3.org/2000/svg"
// //                                     className="h-6 w-6"
// //                                     fill="none"
// //                                     viewBox="0 0 24 24"
// //                                     stroke="currentColor"
// //                                 >
// //                                     <path
// //                                         strokeLinecap="round"
// //                                         strokeLinejoin="round"
// //                                         strokeWidth={2}
// //                                         d="M9 5l7 7-7 7"
// //                                     />
// //                                 </svg>
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Паралакс с текстовыми отзывами */}

// //             </div>


// //         </section>
// //     );
// // };

// // export default TestimonialsSection;














// // components/TestimonialsSection.js
// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const TestimonialsSection = () => {
//     // Данные для видео-отзывов
//     const videoTestimonials = [
//         {
//             id: 1,
//             name: 'Анна',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 2,
//             name: 'Александр',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 3,
//             name: 'Михаил',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 4,
//             name: 'Дмитрий',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 5,
//             name: 'Елена',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 6,
//             name: 'Елена',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//         {
//             id: 7,
//             name: 'Елена',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             videoId: 'ANjUT3pcD7A',
//             thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
//         },
//     ];

//     // Данные для текстовых отзывов (6 реальных + 2 пустых для визуального эффекта)
//     const textTestimonials = [
//         {
//             id: 1,
//             name: 'Ziyoda',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Курс помог мне уверенно подготовиться к университету и улучшить знания английского языка!',
//         },
//         {
//             id: 2,
//             name: 'Azizbek',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Отличные преподаватели и полезные материалы — всё, что нужно для успешного старта!',
//         },
//         {
//             id: 3,
//             name: 'Mukhammadjon',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Занятия действительно помогли мне разобраться в сложных темах и улучшить знания по биологии.',
//         },
//         {
//             id: 4,
//             name: '', // Пустая карточка для визуального эффекта
//             image: '',
//             text: '',
//         },
//         {
//             id: 5,
//             name: 'Khanifa',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Благодаря курсам я чувствую себя уверенно и готов к учебе в университете!',
//         },
//         {
//             id: 6,
//             name: 'Muslima',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Курс помог мне разобраться в математике, советую его всем, кто хочет подтянуть свои знания!',
//         },
//         {
//             id: 7,
//             name: 'Siddiqho`ja',
//             image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
//             text: 'Это отличный выбор для тех, кто хочет не просто учиться, а уверенно идти к своим целям в университете!',
//         },
//         {
//             id: 8,
//             name: '', // Пустая карточка для визуального эффекта
//             image: '',
//             text: '',
//         },
//     ];

//     // Состояние для управления воспроизведением видео
//     const [playingVideoId, setPlayingVideoId] = useState(null);

//     // Переключение воспроизведения видео
//     const toggleVideoPlay = (videoId) => {
//         if (playingVideoId === videoId) {
//             setPlayingVideoId(null);
//         } else {
//             setPlayingVideoId(videoId);
//         }
//     };

//     // Разделение отзывов на два ряда
//     const topRow = textTestimonials.slice(0, 4); // Первые 4 отзыва (3 реальных + 1 пустой)
//     const bottomRow = textTestimonials.slice(4, 8); // Следующие 4 отзыва (3 реальных + 1 пустой)

//     // Параллакс-эффект
//     const testimonialsRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: testimonialsRef,
//         offset: ['start end', 'end start'],
//     });

//     // Движение верхнего ряда вправо, нижнего влево
//     const topRowX = useTransform(scrollYProgress, [0, 1], [0, 100]); // Движение вправо
//     const bottomRowX = useTransform(scrollYProgress, [0, 1], [0, -100]); // Движение влево

//     return (
//         <section className="py-16 md:py-24 bg-white md:pb-[0]">
//             <div className="max-w-screen-xl mx-auto px-4">
//                 {/* Заголовок секции */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Вдохновитесь нашими историями
//                     </h2>
//                     <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
//                         Узнайте, как наши программы помогли студентам достичь успеха в учебе и карьере. Истории наших
//                         выпускников вдохновляют на новые свершения и показывают, какие возможности открываются после
//                         завершения обучения.
//                     </p>
//                 </motion.div>

//                 {/* Слайдер с видео-отзывами */}
//                 <div className="relative mb-16">
//                     <Swiper
//                         modules={[Navigation, Autoplay]}
//                         spaceBetween={16}
//                         slidesPerView={1}
//                         autoplay={{
//                             delay: 8000,
//                             disableOnInteraction: false,
//                         }}
//                         breakpoints={{
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 3 },
//                             1280: { slidesPerView: 5 },
//                         }}
//                         navigation={{
//                             prevEl: '.video-swiper-button-prev',
//                             nextEl: '.video-swiper-button-next',
//                         }}
//                         className="py-4"
//                     >
//                         {videoTestimonials.map((testimonial) => (
//                             <SwiperSlide key={testimonial.id} className="h-auto">
//                                 <div className="rounded-lg overflow-hidden relative group">
//                                     {playingVideoId === testimonial.id ? (
//                                         // Воспроизведение YouTube Shorts видео
//                                         <div className="aspect-[9/16] relative bg-gray-900">
//                                             <iframe
//                                                 src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&controls=1&rel=0&showinfo=0`}
//                                                 title={`Отзыв от ${testimonial.name}`}
//                                                 className="w-full h-full absolute top-0 left-0"
//                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                                 allowFullScreen
//                                             ></iframe>
//                                         </div>
//                                     ) : (
//                                         // Превью изображение
//                                         <>
//                                             <div className="aspect-[9/16] relative bg-gray-900">
//                                                 <Image
//                                                     src={testimonial.thumbnailImage}
//                                                     alt={`Отзыв от ${testimonial.name}`}
//                                                     fill
//                                                     className="object-cover"
//                                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
//                                                 />
//                                             </div>
//                                             {/* Кнопка воспроизведения видео */}
//                                             <button
//                                                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 hover:bg-red-700 transition-colors"
//                                                 onClick={() => toggleVideoPlay(testimonial.id)}
//                                                 aria-label="Воспроизвести видео"
//                                             >
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="h-8 w-8 text-white"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                                                     />
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </>
//                                     )}
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Кнопки навигации для видео-слайдера */}
//                     <div className="flex justify-center gap-4 mt-8">
//                         <div className="video-swiper-button-prev">
//                             <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M15 19l-7-7 7-7"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="video-swiper-button-next">
//                             <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M9 5l7 7-7 7"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Паралакс с текстовыми отзывами */}
//                 <div ref={testimonialsRef} className="relative overflow-hidden">
//                     {/* Верхний ряд (движение вправо) */}
//                     <motion.div
//                         style={{ x: topRowX }}
//                         className="flex gap-4 mb-6"
//                     >
//                         {topRow.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className="flex-shrink-0 w-[300px] bg-[#f7faff] rounded-lg p-4 shadow-md"
//                             >
//                                 {testimonial.text ? (
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
//                                             <Image
//                                                 src={testimonial.image}
//                                                 alt={testimonial.name}
//                                                 width={40}
//                                                 height={40}
//                                                 className="object-cover"
//                                             />
//                                         </div>
//                                         <div>
//                                             <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
//                                             <p className="text-sm text-gray-600">{testimonial.text}</p>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="w-[300px] h-[100px] opacity-50 bg-gray-100 rounded-lg"></div>
//                                 )}
//                             </div>
//                         ))}
//                     </motion.div>

//                     {/* Нижний ряд (движение влево) */}
//                     <motion.div
//                         style={{ x: bottomRowX }}
//                         className="flex gap-4"
//                     >
//                         {bottomRow.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className="flex-shrink-0 w-[300px] bg-[#f7faff] rounded-lg p-4 shadow-md"
//                             >
//                                 {testimonial.text ? (
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
//                                             <Image
//                                                 src={testimonial.image}
//                                                 alt={testimonial.name}
//                                                 width={40}
//                                                 height={40}
//                                                 className="object-cover"
//                                             />
//                                         </div>
//                                         <div>
//                                             <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
//                                             <p className="text-sm text-gray-600">{testimonial.text}</p>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="w-[300px] h-[100px] opacity-50 bg-gray-100 rounded-lg"></div>
//                                 )}
//                             </div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TestimonialsSection;

// components/TestimonialsSection.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialsSection = () => {
    // Данные для видео-отзывов
    const videoTestimonials = [
        {
            id: 1,
            name: 'Анна',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 2,
            name: 'Александр',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 3,
            name: 'Михаил',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 4,
            name: 'Дмитрий',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 5,
            name: 'Елена',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 6,
            name: 'Елена',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
        {
            id: 7,
            name: 'Елена',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            videoId: 'ANjUT3pcD7A',
            thumbnailImage: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/video_cover_default.jpg',
        },
    ];

    // Данные для текстовых отзывов (6 реальных + 2 фейковых с заполненными данными)
    const textTestimonials = [
        {
            id: 1,
            name: 'Ziyoda',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Курс помог мне уверенно подготовиться к университету и улучшить знания английского языка!',
        },
        {
            id: 2,
            name: 'Azizbek',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Отличные преподаватели и полезные материалы — всё, что нужно для успешного старта!',
        },
        {
            id: 3,
            name: 'Mukhammadjon',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Занятия действительно помогли мне разобраться в сложных темах и улучшить знания по биологии.',
        },
        {
            id: 4,
            name: 'Mukhammadjon', // Заполненная фейковая карточка
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Занятия действительно помогли мне разобраться в сложных темах и улучшить знания по биологии.',
            isFake: true, // Добавляем флаг для идентификации фейковых отзывов
        },
        {
            id: 5,
            name: 'Khanifa',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Благодаря курсам я чувствую себя уверенно и готов к учебе в университете!',
        },
        {
            id: 6,
            name: 'Muslima',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Курс помог мне разобраться в математике, советую его всем, кто хочет подтянуть свои знания!',
        },
        {
            id: 7,
            name: 'Siddiqho`ja',
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Это отличный выбор для тех, кто хочет не просто учиться, а уверенно идти к своим целям в университете!',
        },
        {
            id: 8,
            name: 'Siddiqho`ja', // Заполненная фейковая карточка
            image: 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg',
            text: 'Это отличный выбор для тех, кто хочет не просто учиться, а уверенно идти к своим целям в университете!',
            isFake: true, // Добавляем флаг для идентификации фейковых отзывов
        },
    ];

    // Состояние для управления воспроизведением видео
    const [playingVideoId, setPlayingVideoId] = useState(null);

    // Переключение воспроизведения видео
    const toggleVideoPlay = (videoId) => {
        if (playingVideoId === videoId) {
            setPlayingVideoId(null);
        } else {
            setPlayingVideoId(videoId);
        }
    };

    // Разделение отзывов на два ряда
    const topRow = textTestimonials.slice(0, 4); // Первые 4 отзыва (3 реальных + 1 фейковый)

    // Переставляем фейковый отзыв в начало нижнего ряда
    // Берем фейковый отзыв (последний) и остальные из нижнего ряда
    const bottomRow = [textTestimonials[7]].concat(textTestimonials.slice(4, 7));

    // Параллакс-эффект
    const testimonialsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: testimonialsRef,
        offset: ['start end', 'end start'],
    });

    // Движение верхнего ряда вправо, нижнего влево
    const topRowX = useTransform(scrollYProgress, [0, 1], [0, 100]); // Движение вправо
    const bottomRowX = useTransform(scrollYProgress, [0, 1], [0, -100]); // Движение влево

    return (
        <section className="py-16 pb-8 md:py-24 bg-white md:pb-[0]">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Заголовок секции */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Вдохновитесь нашими историями
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                        Узнайте, как наши программы помогли студентам достичь успеха в учебе и карьере. Истории наших
                        выпускников вдохновляют на новые свершения и показывают, какие возможности открываются после
                        завершения обучения.
                    </p>
                </motion.div>

                {/* Слайдер с видео-отзывами */}
                <div className="relative mb-16">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 5 },
                        }}
                        navigation={{
                            prevEl: '.video-swiper-button-prev',
                            nextEl: '.video-swiper-button-next',
                        }}
                        className="py-4"
                    >
                        {videoTestimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="h-auto">
                                <div className="rounded-lg overflow-hidden relative group">
                                    {playingVideoId === testimonial.id ? (
                                        // Воспроизведение YouTube Shorts видео
                                        <div className="aspect-[9/16] relative bg-gray-900">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&controls=1&rel=0&showinfo=0`}
                                                title={`Отзыв от ${testimonial.name}`}
                                                className="w-full h-full absolute top-0 left-0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        // Превью изображение
                                        <>
                                            <div className="aspect-[9/16] relative bg-gray-900">
                                                <Image
                                                    src={testimonial.thumbnailImage}
                                                    alt={`Отзыв от ${testimonial.name}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                                />
                                            </div>
                                            {/* Кнопка воспроизведения видео */}
                                            <button
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 hover:bg-red-700 transition-colors"
                                                onClick={() => toggleVideoPlay(testimonial.id)}
                                                aria-label="Воспроизвести видео"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кнопки навигации для видео-слайдера */}
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="video-swiper-button-prev">
                            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="video-swiper-button-next">
                            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Паралакс с текстовыми отзывами */}
                <div ref={testimonialsRef} className="hidden relative overflow-hidden pb-[20px]">
                    {/* Верхний ряд (движение вправо) */}
                    <motion.div
                        style={{ x: topRowX }}
                        className="flex gap-4 mb-6"
                    >
                        {topRow.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`flex-shrink-0 w-[95%] md:w-[30%] bg-[#f7faff] rounded-lg p-4 shadow-md ${index === 0 ? 'ml-[-14%] md:ml-[-4%]' : ''}`}
                            >
                                <div className={`flex items-start gap-3 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                    <div className="w-10 h-10 relative">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Нижний ряд (движение влево) */}
                    <motion.div
                        style={{ x: bottomRowX }}
                        className="flex gap-4"
                    >
                        {bottomRow.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`flex-shrink-0 w-[90%] md:w-[30%] bg-[#f7faff] rounded-lg p-4 shadow-md ${index === bottomRow.length - 4 ? 'ml-[-70%] md:ml-[-20%]' : ''}`}
                            >
                                <div className={`flex items-start gap-3 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                    <div className="w-10 h-10 relative">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;