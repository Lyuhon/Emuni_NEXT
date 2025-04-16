// LicenseSection.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Анимации
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const LicenseSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Лицензионные документы
    const licenses = [
        {
            id: 1,
            title: "Государственная лицензия",
            src: "https://emuni.uz/wp-content/uploads/2024/08/liczenziya-novaya_page-0001-min.jpg", // Замените на реальный путь
            alt: "Лицензия на образовательную деятельность"
        },
        {
            id: 2,
            title: "Государственная лицензия",
            src: "https://emuni.uz/wp-content/uploads/2024/08/liczenziya-novaya_page-0002-min.jpg", // Замените на реальный путь
            alt: "Лицензия на образовательную деятельность"
        },
        {
            id: 3,
            title: "Государственная лицензия",
            src: "https://emuni.uz/wp-content/uploads/2024/08/liczenziya-novaya_page-0003-min.jpg", // Замените на реальный путь
            alt: "Лицензия на образовательную деятельность"
        }
    ];

    // Функция для открытия модального окна с увеличенным изображением
    const openModal = (license) => {
        setSelectedImage(license);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Градиентный фиолетовый фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#631463] to-[#3a0d5c] z-0"></div>

            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-full h-64 bg-[#8a3c8a] opacity-20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-[#470e47] opacity-20 blur-3xl -z-10"></div>

            {/* Декоративные круги */}
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#8a3c8a] opacity-10"></div>
            <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#470e47] opacity-10"></div>

            {/* Сетка */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" className="absolute top-0 left-0">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>

            {/* Плавающие элементы */}
            <motion.div
                className="absolute top-1/4 left-10 w-4 h-12 bg-white opacity-20 rounded-full"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

            <motion.div
                className="absolute bottom-1/3 right-20 w-8 h-8 bg-white opacity-10 rounded-full"
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

            <motion.div
                className="absolute top-1/2 right-1/4 w-16 h-3 bg-white opacity-10 rounded-full transform rotate-45"
                animate={{
                    rotate: [45, 60, 45]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 md:gap-12">

                    {/* Правая колонка со слайдером */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[40%]"
                    >
                        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl relative">
                            {/* Декоративные элементы вокруг слайдера */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-md"></div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-md"></div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                className="license-swiper"
                            >
                                {licenses.map((license) => (
                                    <SwiperSlide key={license.id}>
                                        <div
                                            className="relative cursor-pointer group"
                                            onClick={() => openModal(license)}
                                        >
                                            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
                                                <Image
                                                    src={license.src}
                                                    alt={license.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />

                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#631463]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                                    <span className="text-white font-medium text-lg px-4 py-2 rounded-full bg-[#631463]/70 backdrop-blur-sm">
                                                        Нажмите для увеличения
                                                    </span>
                                                </div> */}
                                            </div>

                                            {/* <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                                                <p className="text-[#631463] text-sm font-medium">{license.title}</p>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>


                    {/* Левая колонка с текстом */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[60%] flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Лицензированное <br />превосходство<br />в образовании
                        </h2>

                        <div className="space-y-6 text-white/90 text-lg">
                            <p>
                                EMU University официально лицензирован для предоставления частных образовательных услуг. Это признание, предоставленное Министерством образования Республики под лицензией номер 337775.
                            </p>

                            <p>
                                Обладая этой лицензией, EMU University гарантирует, что его учебная программа, преподавательский состав и образовательные практики соответствуют комплексным требованиям, необходимым для предоставления исключительного образовательного опыта своим студентам.
                            </p>
                        </div>

                        {/* <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 bg-white text-[#631463] py-3 px-8 rounded-full font-medium shadow-lg transition-all duration-300 flex items-center self-start hover:bg-[#f7eef7]"
                        >
                            Подробнее о лицензии
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button> */}
                    </motion.div>


                </div>
            </div>

            {/* Модальное окно для увеличенного изображения */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="relative md:max-w-[30vw] w-full bg-white rounded-xl overflow-hidden p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative md:h-[70vh] h-[60vh]">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-xl font-bold text-[#631463] mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-600">{selectedImage.alt}</p>
                        </div>
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Добавляем стили для слайдера */}
            <style jsx global>{`
                .license-swiper .swiper-button-next,
                .license-swiper .swiper-button-prev {
                    color: #631463;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .license-swiper .swiper-button-next:after,
                .license-swiper .swiper-button-prev:after {
                    font-size: 18px;
                }
                
                .license-swiper .swiper-button-next:hover,
                .license-swiper .swiper-button-prev:hover {
                    background: #f7eef7;
                }
            `}</style>
        </section>
    );
};

export default LicenseSection;