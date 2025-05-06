'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        review: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81569');
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`);
                }
                const data = await response.json();
                if (data && data.acf && data.acf.otzyv && Array.isArray(data.acf.otzyv)) {
                    const formattedTestimonials = data.acf.otzyv.map((item, index) => ({
                        id: index + 1,
                        name: item.fio_ru || '',
                        program: item.fakultet_ru || '',
                        testimonial: item.otzyv_studenta_ru || '',
                        image: item.izobrazhenie?.url || '/api/placeholder/400/500',
                        year: item.podpis_year_ru || '',
                        achievement: ''
                    }));
                    setTestimonials(formattedTestimonials);
                } else {
                    throw new Error('Неверный формат данных');
                }
            } catch (err) {
                console.error('Ошибка при загрузке отзывов:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Phone number formatting
        if (name === 'phone') {
            let formattedValue = value.replace(/\D/g, '');
            if (formattedValue.length > 2) {
                formattedValue = `(${formattedValue.slice(0, 2)})${formattedValue.slice(2)}`;
            }
            if (formattedValue.length > 7) {
                formattedValue = `${formattedValue.slice(0, 7)}-${formattedValue.slice(7)}`;
            }
            if (formattedValue.length > 10) {
                formattedValue = `${formattedValue.slice(0, 10)}-${formattedValue.slice(10, 12)}`;
            }
            setFormData(prev => ({ ...prev, phone: formattedValue }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.phone.match(/^\(\d{2}\)\d{3}-\d{2}-\d{2}$/)) newErrors.phone = true;
        if (!formData.review.trim()) newErrors.review = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            // Здесь можно добавить реальный API-вызов для отправки отзыва
            // const response = await fetch('/api/submit-review', { ... });
            // Для демонстрации просто показываем сообщение
            setMessage('Отзыв успешно отправлен!');
            setFormData({ name: '', phone: '', review: '' });
            setErrors({});
            setTimeout(() => {
                setIsPopupOpen(false);
                setMessage('');
            }, 2000);
        } catch (err) {
            setMessage('Ошибка при отправке отзыва');
        }
    };

    if (loading) {
        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Загрузка отзывов...</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Ошибка загрузки отзывов</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto mb-6"></div>
                    <p className="text-gray-700">Произошла ошибка при загрузке отзывов. Пожалуйста, попробуйте позже.</p>
                </div>
            </section>
        );
    }

    if (testimonials.length === 0) {
        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Отзывы наших студентов</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto mb-6"></div>
                    <p className="text-gray-700">В настоящее время отзывы отсутствуют.</p>
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
            </section>
        );
    }

    return (
        <section>
            <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF]">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Отзывы наших студентов</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto"></div>
                </div>

                {/* Эту кнопку можно оставить или удалить, т.к. теперь она будет в каждом слайде */}
                {/* <div className="flex justify-end mb-6">
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
                </div> */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    className="pb-14"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden h-full bg-white shadow-lg">
                                <div className="md:hidden w-full relative h-[350px]">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover rounded-2xl"
                                        style={{ objectPosition: 'center 20%' }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-4 rounded-b-2xl">
                                        <div className="text-white">
                                            <div className="text-xl font-bold">{testimonial.year}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/3 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#631463] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10 rounded-2xl"></div>
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={400}
                                        height={500}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-6 pt-16 rounded-b-2xl">
                                        <div className="text-white space-y-1">
                                            <div className="text-2xl font-bold">{testimonial.year}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-6 md:p-8 flex flex-col h-full">
                                    <div className="mb-1 text-[#631463] font-semibold">{testimonial.program}</div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{testimonial.name}</h3>
                                    {testimonial.achievement && (
                                        <div className="flex items-center space-x-2 mb-4 md:mb-6">
                                            <div className="h-0.5 w-12 bg-[#631463]"></div>
                                            <span className="text-sm font-medium text-gray-500">{testimonial.achievement}</span>
                                        </div>
                                    )}
                                    <div className="bg-[#f7eef7] rounded-2xl p-4 md:p-6 mb-4 md:mb-6 relative overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#631463] opacity-10 absolute top-0 right-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p className="text-gray-700 text-base md:text-lg relative z-10">{testimonial.testimonial}</p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                            <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                </svg>
                                                <span className="text-xs md:text-sm text-gray-700">Рекомендует университет</span>
                                            </div>
                                            <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                                <span className="text-xs md:text-sm text-gray-700">Активный участник студенческой жизни</span>
                                            </div>
                                        </div>

                                        {/* Кнопка "Оставить отзыв" внутри каждого слайда */}
                                        <motion.button
                                            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(99, 20, 99, 0.2)" }}
                                            whileTap={{ scale: 0.98 }}
                                            className="md:w-fit w-full mt-3 bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-2.5 px-5 rounded-full font-medium shadow-md transition-all duration-300 flex items-center justify-center"
                                            onClick={() => setIsPopupOpen(true)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2"
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
                                            Оставить свой отзыв
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

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
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm animate-pulse">
                                                Пожалуйста, введите ваше имя.
                                            </p>
                                        )}
                                    </div>
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
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm animate-pulse">
                                                Пожалуйста, введите номер телефона в формате (99)999-99-99.
                                            </p>
                                        )}
                                    </div>
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
                                            className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors.review ? 'border-red-500' : 'border-gray-300'}`}
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
                                        className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
                                    >
                                        {message}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section >
    );
}

export default TestimonialSlider;