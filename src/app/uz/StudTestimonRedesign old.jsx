'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialSlider = () => {
    // Референции для кнопок навигации
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Состояние для хранения данных отзывов
    const [testimonials, setTestimonials] = useState([]);
    // Состояние загрузки данных
    const [loading, setLoading] = useState(true);
    // Состояние ошибки при загрузке
    const [error, setError] = useState(null);

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81569');

                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`);
                }

                const data = await response.json();

                // Проверка наличия необходимых данных
                if (data && data.acf && data.acf.otzyv && Array.isArray(data.acf.otzyv)) {
                    // Преобразуем данные из API в формат, подходящий для компонента
                    const formattedTestimonials = data.acf.otzyv.map((item, index) => ({
                        id: index + 1,
                        name: item.fio_uz || '',
                        program: item.fakultet_uz || '',
                        testimonial: item.otzyv_studenta_uz || '',
                        image: item.izobrazhenie?.url || '/api/placeholder/400/500',
                        year: item.podpis_year_uz || '',
                        achievement: '' // В API нет поля для достижений, можно оставить пустым или удалить из шаблона
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

    // Если данные загружаются, показываем сообщение о загрузке
    if (loading) {
        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Sharhlar yuklanmoqda...</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto"></div>
                </div>
            </section>
        );
    }

    // Если произошла ошибка, показываем сообщение об ошибке
    if (error) {
        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Sharhlarni yuklashda xatolik yuz berdi</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto mb-6"></div>
                    <p className="text-gray-700">Произошла ошибка при загрузке отзывов. Пожалуйста, попробуйте позже.</p>
                </div>
            </section>
        );
    }

    // Если нет отзывов, показываем сообщение
    if (testimonials.length === 0) {
        // return (
        //     <section>
        //         <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
        //             <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Talabalarimizdan fikr-mulohazalar</h2>
        //             <div className="w-24 h-1 bg-[#631463] mx-auto mb-6"></div>
        //             <p className="text-gray-700">В настоящее время отзывы отсутствуют.</p>
        //         </div>
        //     </section>
        // );

        return (
            <section>
                <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Talabalarimizdan fikr-mulohazalar</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto mb-6"></div>
                    <p className="text-gray-700">Hozircha sharhlar yo'q.</p>
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
                        Fikr qoldiring
                    </motion.button>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="relative max-w-5xl mx-auto py-12 px-3 bg-[#FFFFFF]">
                {/* Заголовок секции */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#631463] mb-4">Talabalarimizdan fikr-mulohazalar</h2>
                    <div className="w-24 h-1 bg-[#631463] mx-auto"></div>
                </div>

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
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden h-full bg-white shadow-lg">
                                {/* Мобильный вид - фото и информация о курсе вверху */}
                                <div className="md:hidden w-full relative h-64">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#631463] to-transparent p-4 rounded-b-2xl">
                                        <div className="text-white">
                                            <div className="text-xl font-bold">{testimonial.year}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Десктопный вид - фото слева (скругленное) */}
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
                                        {/* Иконка кавычек для отзыва */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#631463] opacity-10 absolute top-0 right-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p className="text-gray-700 text-base md:text-lg relative z-10">{testimonial.testimonial}</p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-auto">
                                        <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            <span className="text-xs md:text-sm text-gray-700">Universitetni tavsiya qiladi</span>
                                        </div>

                                        <div className="bg-gray-100 rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#631463] mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            <span className="text-xs md:text-sm text-gray-700">Talabalar hayotining faol ishtirokchisi</span>
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
        </section>
    );
}

export default TestimonialSlider;