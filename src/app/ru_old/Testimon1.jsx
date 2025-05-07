// // ParallaxTestimonialsSection.jsx
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const ParallaxTestimonialsSection = () => {
//     // Референс для секции отзывов
//     const testimonialsRef = useRef(null);

//     // Состояния для анимации движения рядов
//     const [topRowX, setTopRowX] = useState(0);
//     const [bottomRowX, setBottomRowX] = useState(0);

//     // Состояние для определения, мобильное ли устройство
//     const [isMobile, setIsMobile] = useState(false);

//     // Примеры отзывов для верхнего ряда
//     const topRow = [
//         {
//             id: 1,
//             name: "Алишер П.",
//             role: "Студент медицины",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "EMU University превзошел все мои ожидания! Преподаватели всегда готовы помочь вне занятий.",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 2,
//             name: "Дилора И.",
//             role: "Выпускница 2024",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Благодаря университету я смогла найти работу мечты сразу после выпуска. Качество образования на высоте!",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 3,
//             name: "Жасур С.",
//             role: "Магистрант",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Программа магистратуры действительно помогла мне углубить знания и стать настоящим специалистом.",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 4,
//             name: "Гулнора К.",
//             role: "Студентка 2 курса",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Атмосфера в университете способствует учебе. Преподаватели увлечены своим делом и вдохновляют нас.",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 5,
//             name: "Фарход Л.",
//             role: "Выпускник 2023",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Практические занятия особенно ценны. Благодаря им я получил навыки, которые сразу пригодились на работе.",
//             rating: 4,
//             isFake: false,
//         },
//     ];

//     // Данные отзывов для нижнего ряда
//     const bottomRow = [
//         {
//             id: 6,
//             name: "Зарина М.",
//             role: "Студентка стоматологии",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Стоматологическое оборудование новейшее, а преподаватели — практикующие врачи с огромным опытом.",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 7,
//             name: "Бекзод В.",
//             role: "Студент 3 курса",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Международные стажировки открыли для меня новые возможности. Спасибо EMU за эти программы!",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 8,
//             name: "Лола Т.",
//             role: "Магистрантка",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Научная работа в университете на высоком уровне, есть все возможности для исследований.",
//             rating: 5,
//             isFake: false,
//         },
//         {
//             id: 9,
//             name: "Шерзод Н.",
//             role: "Выпускник 2024",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Активная студенческая жизнь и профессиональное образование — отличное сочетание в EMU University.",
//             rating: 4,
//             isFake: false,
//         },
//         {
//             id: 10,
//             name: "Малика К.",
//             role: "Студентка 1 курса",
//             image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/03/emu_gold_logo.jpg",
//             text: "Даже на первом курсе чувствуется серьезный подход к образованию. Я сделала правильный выбор!",
//             rating: 5,
//             isFake: false,
//         },
//     ];

//     // Объединяем все отзывы в один массив для слайдера на мобильных устройствах
//     const allTestimonials = [...topRow, ...bottomRow];

//     // Эффект для определения мобильного устройства
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         handleResize(); // Проверяем при загрузке
//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Эффект для анимации параллакса при скролле (только для десктопа)
//     useEffect(() => {
//         if (isMobile) return; // Параллакс не нужен на мобильных

//         const handleScroll = () => {
//             if (!testimonialsRef.current) return;

//             // Получаем позицию элемента относительно окна просмотра
//             const rect = testimonialsRef.current.getBoundingClientRect();
//             const scrollPosition = window.innerHeight - rect.top;

//             // Если секция в поле зрения
//             if (scrollPosition > 0 && rect.bottom > 0) {
//                 const speedFactor = 0.15; // Скорость движения для десктопа
//                 const topRowOffset = scrollPosition * speedFactor;
//                 const bottomRowOffset = -scrollPosition * speedFactor;

//                 setTopRowX(-topRowOffset);
//                 setBottomRowX(bottomRowOffset);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [isMobile]);

//     // Функция для отображения рейтинга звездами
//     const renderRating = (rating) => {
//         return (
//             <div className="flex mt-2">
//                 {[...Array(5)].map((_, i) => (
//                     <svg
//                         key={i}
//                         className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                     >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                 ))}
//             </div>
//         );
//     };


//     // ТУТ ДЛЯ ПОПАП И ФОРМЫ
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         review: '',
//     });
//     const [errors, setErrors] = useState({});
//     const [message, setMessage] = useState('');

//     const formatPhone = (value) => {
//         const cleaned = value.replace(/\D/g, '').slice(0, 9);
//         const part1 = cleaned.slice(0, 2);
//         const part2 = cleaned.slice(2, 5);
//         const part3 = cleaned.slice(5, 7);
//         const part4 = cleaned.slice(7, 9);
//         let formatted = '';
//         if (part1) formatted += '(' + part1;
//         if (part2) formatted += ')' + part2;
//         if (part3) formatted += '-' + part3;
//         if (part4) formatted += '-' + part4;
//         return formatted;
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.name.trim()) {
//             newErrors.name = 'Пожалуйста, введите ваше имя.';
//         }
//         const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
//         if (!formData.phone || !phoneRegex.test(formData.phone)) {
//             newErrors.phone = 'Введите номер в формате (99)999-99-99.';
//         }
//         if (!formData.review.trim()) {
//             newErrors.review = 'Пожалуйста, напишите ваш отзыв.';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         let newValue = value;

//         if (name === 'phone') {
//             newValue = formatPhone(value);
//         }

//         setFormData((prev) => ({
//             ...prev,
//             [name]: newValue,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         try {
//             const response = await fetch('/api/send-review', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 setMessage('Отзыв успешно отправлен!');
//                 setFormData({ name: '', phone: '', review: '' });
//                 setErrors({});
//                 setTimeout(() => {
//                     setIsPopupOpen(false);
//                     setMessage('');
//                 }, 2000);
//             } else {
//                 throw new Error(result.error || 'API error');
//             }
//         } catch (error) {
//             setMessage('Произошла ошибка при отправке отзыва.');
//             console.error('Submit error:', error);
//         }
//     };
//     // ТУТ ДЛЯ ПОПАП И ФОРМЫ



//     return (
//         <section className="py-0 pb-12 md:pd-[0] md:pt-12 px-4 bg-white relative overflow-hidden">
//             <div className="max-w-screen-xl mx-auto mb-8 md:mb-16">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//                     <div className="text-left md:max-w-2xl">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                             Отзывы наших студентов
//                         </h2>
//                         <div className="h-1 w-32 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mb-6"></div>
//                         <p className="text-gray-600 text-lg">
//                             Узнайте, что говорят студенты о своем опыте обучения в EMU University
//                         </p>
//                     </div>

//                     <motion.button
//                         whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="hidden md:flex bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center whitespace-nowrap"
//                         onClick={() => setIsPopupOpen(true)}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 mr-2"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
//                             />
//                         </svg>

//                         Оставить отзыв
//                     </motion.button>
//                 </div>

//                 {/* Попап с формой */}
//                 <AnimatePresence>
//                     {isPopupOpen && (
//                         <motion.div
//                             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             onClick={() => setIsPopupOpen(false)}
//                         >
//                             <motion.div
//                                 // className="bg-white p-6 md:p-9 rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
//                                 className="bg-white p-6 md:p-9 rounded-xl shadow-2xl w-[96vw] md:max-w-lg max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar scrollbar-track-transparent"
//                                 initial={{ opacity: 0, scale: 0.95 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.95 }}
//                                 transition={{ duration: 0.3 }}
//                                 onClick={(e) => e.stopPropagation()}
//                             >
//                                 <div className="flex justify-between items-center mb-6">
//                                     <h2 className="text-2xl font-bold text-gray-800">Оставить отзыв</h2>
//                                     <button
//                                         onClick={() => setIsPopupOpen(false)}
//                                         className="text-gray-500 hover:text-gray-700"
//                                     >
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     </button>
//                                 </div>

//                                 <form onSubmit={handleSubmit} className="space-y-4">
//                                     {/* Поле: Имя */}
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-semibold text-gray-700">
//                                             Имя <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             placeholder="Ваше имя"
//                                             className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                         />
//                                         {errors.name && (
//                                             <p className="text-red-500 text-sm animate-pulse">
//                                                 Введите свое имя.
//                                             </p>
//                                         )}
//                                     </div>

//                                     {/* Поле: Номер телефона */}
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-semibold text-gray-700">
//                                             Номер телефона <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             placeholder="(99)999-99-99"
//                                             maxLength={13}
//                                             className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                         />
//                                         {errors.phone && (
//                                             <p className="text-red-500 text-sm animate-pulse">
//                                                 Введите номер в формате (99)999-99-99.
//                                             </p>
//                                         )}
//                                     </div>

//                                     {/* Поле: Отзыв */}
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-semibold text-gray-700">
//                                             Отзыв <span className="text-red-500">*</span>
//                                         </label>
//                                         <textarea
//                                             name="review"
//                                             value={formData.review}
//                                             onChange={handleChange}
//                                             placeholder="Ваш отзыв"
//                                             rows={4}
//                                             className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.review ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                         ></textarea>
//                                         {errors.review && (
//                                             <p className="text-red-500 text-sm animate-pulse">
//                                                 Пожалуйста, напишите свое мнение.
//                                             </p>
//                                         )}
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
//                                     >
//                                         Отправить
//                                     </button>
//                                 </form>

//                                 {message && (
//                                     <p
//                                         className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'
//                                             } animate-fade-in`}
//                                     >
//                                         {message}
//                                     </p>
//                                 )}
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>

//             {/* Контейнер для отзывов */}
//             <div ref={testimonialsRef} className="relative pb-8">
//                 {isMobile ? (
//                     // Слайдер для мобильных устройств
//                     <div className="relative">
//                         <style>{`
//                             .custom-swiper {
//                                 padding: 10px !important;
//                                 margin-bottom: 10px !important;
//                             }
//                         `}</style>
//                         <Swiper
//                             modules={[Navigation, Autoplay]}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: true,
//                             }}
//                             navigation={{
//                                 prevEl: '.swiper-button-prev-custom',
//                                 nextEl: '.swiper-button-next-custom',
//                             }}
//                             className="custom-swiper p-[10px] mb-[10px]"
//                         >
//                             {allTestimonials.map((testimonial, index) => (
//                                 <SwiperSlide key={testimonial.id}>
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                                         className="w-full bg-white rounded-xl p-5 shadow-md border border-[#f7eef7]"
//                                     >
//                                         <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
//                                             <div className="relative">
//                                                 <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#631463]/20">
//                                                     <Image
//                                                         src={testimonial.image}
//                                                         alt={testimonial.name}
//                                                         width={48}
//                                                         height={48}
//                                                         className="rounded-full object-cover"
//                                                     />
//                                                 </div>
//                                                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#631463] rounded-full flex items-center justify-center text-white">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h4 className="font-semibold text-[#631463] text-sm">{testimonial.name}</h4>
//                                                 <p className="text-xs text-gray-500">{testimonial.role}</p>
//                                                 {renderRating(testimonial.rating)}
//                                             </div>
//                                         </div>
//                                         <div className="mt-3 pt-3 border-t border-gray-100">
//                                             <p className="text-xs text-gray-600">{testimonial.text}</p>
//                                         </div>
//                                     </motion.div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* Кнопки навигации для слайдера */}
//                         <div className="flex justify-center gap-4 mt-4">
//                             <div className="swiper-button-prev-custom">
//                                 <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M15 19l-7-7 7-7"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="swiper-button-next-custom">
//                                 <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 5l7 7-7 7"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     // Параллакс для десктопа
//                     <div className="relative overflow-hidden py-4">
//                         {/* Инструкция для мобильных устройств (скрыта на десктопе) */}
//                         <div className="md:hidden text-center text-gray-500 text-sm mb-4 italic">
//                             Прокрутите для просмотра всех отзывов ⟶
//                         </div>

//                         {/* Верхний ряд (движение вправо) */}
//                         <motion.div style={{ x: topRowX }} className="flex gap-6 mb-8">
//                             {topRow.map((testimonial, index) => (
//                                 <motion.div
//                                     key={testimonial.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     className={`flex-shrink-0 w-[85%] md:w-[30%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[-14%] md:ml-[-5%]' : ''
//                                         }`}
//                                 >
//                                     <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
//                                         <div className="relative">
//                                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#631463]/20">
//                                                 <Image
//                                                     src={testimonial.image}
//                                                     alt={testimonial.name}
//                                                     width={48}
//                                                     height={48}
//                                                     className="rounded-full object-cover"
//                                                 />
//                                             </div>
//                                             <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#631463] rounded-full flex items-center justify-center text-white">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="h-2 w-2 md:h-3 md:w-3"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <h4 className="font-semibold text-[#631463] text-sm md:text-base">{testimonial.name}</h4>
//                                             <p className="text-xs md:text-xs text-gray-500">{testimonial.role}</p>
//                                             {renderRating(testimonial.rating)}
//                                         </div>
//                                     </div>
//                                     <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
//                                         <p className="text-xs md:text-sm text-gray-600">{testimonial.text}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>

//                         {/* Нижний ряд (движение влево) */}
//                         <motion.div style={{ x: bottomRowX }} className="flex gap-6">
//                             {bottomRow.map((testimonial, index) => (
//                                 <motion.div
//                                     key={testimonial.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                                     className={`flex-shrink-0 w-[85%] md:w-[30%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[5%] md:ml-[0%]' : ''
//                                         }`}
//                                 >
//                                     <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
//                                         <div className="relative">
//                                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#631463]/20">
//                                                 <Image
//                                                     src={testimonial.image}
//                                                     alt={testimonial.name}
//                                                     width={48}
//                                                     height={48}
//                                                     className="rounded-full object-cover"
//                                                 />
//                                             </div>
//                                             <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#631463] rounded-full flex items-center justify-center text-white">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="h-2 w-2 md:h-3 md:w-3"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <h4 className="font-semibold text-[#631463] text-sm md:text-base">{testimonial.name}</h4>
//                                             <p className="text-xs md:text-xs text-gray-500">{testimonial.role}</p>
//                                             {renderRating(testimonial.rating)}
//                                         </div>
//                                     </div>
//                                     <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
//                                         <p className="text-xs md:text-sm text-gray-600">{testimonial.text}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 )}
//             </div>

//             <div className="md:hidden flex flex-col md:flex-row items-center justify-between gap-6">
//                 <motion.button
//                     whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center whitespace-nowrap"
//                     onClick={() => setIsPopupOpen(true)}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
//                         />
//                     </svg>
//                     Отсавить отзыв
//                 </motion.button>
//             </div>
//         </section>
//     );
// };

// export default ParallaxTestimonialsSection;


// ParallaxTestimonialsSection.jsx
'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ParallaxTestimonialsSection = () => {
    // Ссылка на секцию отзывов
    const testimonialsRef = useRef(null);

    // Состояния для анимации движения рядов
    const [topRowX, setTopRowX] = useState(0);
    const [bottomRowX, setBottomRowX] = useState(0);

    // Состояние для определения мобильного устройства
    const [isMobile, setIsMobile] = useState(false);

    // Пример отзывов для верхнего ряда
    const topRow = [
        {
            id: 1,
            name: "Мубина Максудова",
            role: "Технический колледж EMU, 2-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-10.webp",
            text: "Технический колледж EMU превзошел мои ожидания! Преподаватели всегда готовы помочь за пределами занятий, предоставляя ценные рекомендации.",
            rating: 5,
            isFake: false,
        },
        {
            id: 2,
            name: "Рахмонкулов Нодир",
            role: "Бизнес-менеджмент, 1-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-9.webp",
            text: "Благодаря университету я с первого дня приобрел практические навыки в бизнесе. Качество образования на высшем уровне, готовит меня к успешной карьере.",
            rating: 5,
            isFake: false,
        },
        {
            id: 3,
            name: "Ибадуллаева Нурангизхон",
            role: "Общая медицина, 4-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-8.webp",
            text: "Программа общей медицины углубила мои медицинские знания и отточила навыки, подготовив меня к тому, чтобы стать компетентным врачом.",
            rating: 5,
            isFake: false,
        },
        {
            id: 4,
            name: "Халиджанова Муниса",
            role: "Общая медицина, 4-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-7.webp",
            text: "Поддерживающая атмосфера в EMU способствует обучению. Преподаватели увлечены своим делом и вдохновляют нас преуспевать в медицине.",
            rating: 5,
            isFake: false,
        },
        {
            id: 5,
            name: "Юсупжонов Бекзод",
            role: "Общая медицина, 2-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-4.webp",
            text: "Практические занятия невероятно ценны, они дают мне клинические навыки, которые пригодятся в моей будущей медицинской карьере.",
            rating: 5,
            isFake: false,
        },
    ];

    // Данные отзывов для нижнего ряда
    const bottomRow = [
        {
            id: 6,
            name: "Оллоназарова Настарин",
            role: "Фармация, 4-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-6.webp",
            text: "Программа фармации предлагает практическое обучение с современным оборудованием, а преподаватели — опытные профессионалы, которые эффективно нас направляют.",
            rating: 5,
            isFake: false,
        },
        {
            id: 7,
            name: "Рахматуллаева Самира",
            role: "Общая медицина, 2-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-3.webp",
            text: "Международные стажировки открыли для меня новые возможности. Спасибо EMU за эти замечательные программы!",
            rating: 5,
            isFake: false,
        },
        {
            id: 8,
            name: "Мухаммедов Ходжиакбар",
            role: "Стоматология, 4-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-1.webp",
            text: "Программа стоматологии предоставляет передовые возможности и экспертных преподавателей, что позволяет мне преуспевать в современных стоматологических техниках.",
            rating: 5,
            isFake: false,
        },
        {
            id: 9,
            name: "Афузова Лилия",
            role: "Стоматология, 2-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-5.webp",
            text: "EMU сочетает яркую студенческую жизнь с профессиональным стоматологическим образованием, создавая идеальный баланс для роста и обучения.",
            rating: 5,
            isFake: false,
        },
        {
            id: 10,
            name: "Шокиров Файзулло",
            role: "Маркетинг, 1-й курс",
            image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/testimonial_image_item-2.webp",
            text: "Уже на первом курсе заметен серьезный подход к обучению маркетингу. Я сделал правильный выбор с EMU!",
            rating: 5,
            isFake: false,
        },
    ];

    // Объединяем все отзывы в один массив для мобильного слайдера
    const allTestimonials = [...topRow, ...bottomRow];

    // Эффект для определения мобильного устройства
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Эффект для параллакс-анимации при прокрутке (только для десктопа)
    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (!testimonialsRef.current) return;

            const rect = testimonialsRef.current.getBoundingClientRect();
            const scrollPosition = window.innerHeight - rect.top;

            if (scrollPosition > 0 && rect.bottom > 0) {
                const speedFactor = 0.15;
                const topRowOffset = scrollPosition * speedFactor;
                const bottomRowOffset = -scrollPosition * speedFactor;

                setTopRowX(-topRowOffset);
                setBottomRowX(bottomRowOffset);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Функция для отображения рейтинга в виде звезд
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

    // Логика попапа и формы
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        review: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const formatPhone = (value) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 9);
        const part1 = cleaned.slice(0, 2);
        const part2 = cleaned.slice(2, 5);
        const part3 = cleaned.slice(5, 7);
        const part4 = cleaned.slice(7, 9);
        let formatted = '';
        if (part1) formatted += '(' + part1;
        if (part2) formatted += ')' + part2;
        if (part3) formatted += '-' + part3;
        if (part4) formatted += '-' + part4;
        return formatted;
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, введите ваше имя.';
        }
        const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Пожалуйста, введите номер телефона в формате (99)999-99-99.';
        }
        if (!formData.review.trim()) {
            newErrors.review = 'Пожалуйста, напишите ваш отзыв.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === 'phone') {
            newValue = formatPhone(value);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch('/api/send-review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('Отзыв успешно отправлен!');
                setFormData({ name: '', phone: '', review: '' });
                setErrors({});
                setTimeout(() => {
                    setIsPopupOpen(false);
                    setMessage('');
                }, 2000);
            } else {
                throw new Error(result.error || 'Ошибка API');
            }
        } catch (error) {
            setMessage('Произошла ошибка при отправке отзыва.');
            console.error('Ошибка отправки:', error);
        }
    };

    return (
        <section className="py-0 pb-12 md:pd-[0] md:pt-12 px-4 bg-white relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto mb-8 md:mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left md:max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Отзывы наших студентов
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Узнайте, что говорят студенты о своем опыте обучения в университете EMU
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center whitespace-nowrap"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                            />
                        </svg>
                        Оставить отзыв
                    </motion.button>
                </div>

                {/* Попап с формой */}
                <AnimatePresence>
                    {isPopupOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsPopupOpen(false)}
                        >
                            <motion.div
                                className="bg-white p-6 md:p-9 rounded-xl shadow-2xl w-[96vw] md:max-w-lg max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar scrollbar-track-transparent"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Оставить отзыв</h2>
                                    <button
                                        onClick={() => setIsPopupOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Поле имени */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Имя <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ваше имя"
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm animate-pulse">
                                                Пожалуйста, введите ваше имя.
                                            </p>
                                        )}
                                    </div>

                                    {/* Поле номера телефона */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Номер телефона <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(99)999-99-99"
                                            maxLength={13}
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm animate-pulse">
                                                Пожалуйста, введите номер телефона в формате (99)999-99-99.
                                            </p>
                                        )}
                                    </div>

                                    {/* Поле отзыва */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Отзыв <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="review"
                                            value={formData.review}
                                            onChange={handleChange}
                                            placeholder="Напишите ваш отзыв"
                                            rows={4}
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.review ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        ></textarea>
                                        {errors.review && (
                                            <p className="text-red-500 text-sm animate-pulse">
                                                Пожалуйста, напишите ваш отзыв.
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                    >
                                        Отправить
                                    </button>
                                </form>

                                {message && (
                                    <p
                                        className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'
                                            } animate-fade-in`}
                                    >
                                        {message}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Контейнер для отзывов */}
            <div ref={testimonialsRef} className="relative pb-8">
                {isMobile ? (
                    // Слайдер для мобильных устройств
                    <div className="relative">
                        <style>{`
                            .custom-swiper {
                                padding: 10px !important;
                                margin-bottom: 10px !important;
                            }
                        `}</style>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true,
                            }}
                            navigation={{
                                prevEl: '.swiper-button-prev-custom',
                                nextEl: '.swiper-button-next-custom',
                            }}
                            className="custom-swiper p-[10px] mb-[10px]"
                        >
                            {allTestimonials.map((testimonial, index) => (
                                <SwiperSlide key={testimonial.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="w-full bg-white rounded-xl p-4 shadow-md border border-[#f7eef7]"
                                    >
                                        <div className={`flex items-start gap-3 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                            {/* Изображение слева */}
                                            <div className="relative flex-shrink-0">
                                                <div className="w-18 h-32 rounded-lg overflow-hidden ring-2 ring-[#631463]/20">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        width={80}
                                                        height={53}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#631463] rounded-full flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Контент справа */}
                                            <div className="flex-1">
                                                <div>
                                                    <h4 className="font-semibold text-[#631463] text-base">{testimonial.name}</h4>
                                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                                    <div className="mt-1">
                                                        {renderRating(testimonial.rating)}
                                                    </div>
                                                </div>
                                                <div className="mt-2 pt-2 border-t border-gray-100">
                                                    <p className="text-xs text-gray-600">{testimonial.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Кнопки навигации для слайдера */}
                        <div className="flex justify-center gap-4 mt-4">
                            <div className="swiper-button-prev-custom">
                                <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
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
                            <div className="swiper-button-next-custom">
                                <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors">
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
                ) : (
                    // Параллакс для десктопа
                    <div className="relative overflow-hidden py-4">
                        {/* Инструкция для мобильных устройств (скрыта на десктопе) */}
                        <div className="md:hidden text-center text-gray-500 text-sm mb-4 italic">
                            Прокрутите, чтобы просмотреть все отзывы ⟶
                        </div>

                        {/* Верхний ряд (движется вправо) */}
                        <motion.div style={{ x: topRowX }} className="flex gap-6 mb-8">
                            {topRow.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex-shrink-0 w-[85%] md:w-[25%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[-14%] md:ml-[-5%]' : ''}`}
                                >
                                    <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                        {/* Изображение слева */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-18 h-32 md:w-24 md:h-40 rounded-lg overflow-hidden ring-2 ring-[#631463]/20">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={96}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#631463] rounded-full flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 md:h-3.5 md:w-3.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Контент справа */}
                                        <div className="flex-1">
                                            <div>
                                                <h4 className="font-semibold text-[#631463] text-base md:text-lg">{testimonial.name}</h4>
                                                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                                                <div className="mt-1">
                                                    {renderRating(testimonial.rating)}
                                                </div>
                                            </div>
                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                <p className="text-sm md:text-base text-gray-600">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Нижний ряд (движется влево) */}
                        <motion.div style={{ x: bottomRowX }} className="flex gap-6">
                            {bottomRow.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className={`flex-shrink-0 w-[85%] md:w-[25%] bg-white rounded-xl p-5 shadow-md border border-[#f7eef7] ${index === 0 ? 'ml-[5%] md:ml-[0%]' : ''}`}
                                >
                                    <div className={`flex items-start gap-4 ${testimonial.isFake ? 'opacity-50' : ''}`}>
                                        {/* Изображение слева */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-18 h-32 md:w-24 md:h-40 rounded-lg overflow-hidden ring-2 ring-[#631463]/20">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={96}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#631463] rounded-full flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 md:h-3.5 md:w-3.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Контент справа */}
                                        <div className="flex-1">
                                            <div>
                                                <h4 className="font-semibold text-[#631463] text-base md:text-lg">{testimonial.name}</h4>
                                                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                                                <div className="mt-1">
                                                    {renderRating(testimonial.rating)}
                                                </div>
                                            </div>
                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                <p className="text-sm md:text-base text-gray-600">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>

            <div className="md:hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-flex items-center whitespace-nowrap"
                    onClick={() => setIsPopupOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                    </svg>
                    Оставить отзыв
                </motion.button>
            </div>
        </section>
    );
};

export default ParallaxTestimonialsSection;