// LicenseSection.jsx
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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const LicenseSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Лицензионные документы
    const licenses = [
        {
            id: 1,
            title: "Основная лицензия",
            src: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/02/capmus-slide-main-1.jpg", // Замените на реальный путь
            alt: "Лицензия на образовательную деятельность"
        },
        {
            id: 2,
            title: "Аккредитация",
            src: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/02/capmus-slide-main-1.jpg", // Замените на реальный путь
            alt: "Свидетельство о государственной аккредитации"
        },
        {
            id: 3,
            title: "Международный сертификат",
            src: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/02/capmus-slide-main-1.jpg", // Замените на реальный путь
            alt: "Международный сертификат качества образования"
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
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#f7eef7] via-white to-[#f7eef7]">
            {/* Декоративные элементы */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8a3c8a] opacity-5 blur-3xl"></div>
            <div className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>
            <div className="absolute top-40 right-1/4 w-12 h-12 border-4 border-[#631463] border-opacity-10 rounded-lg transform rotate-45"></div>
            <div className="absolute bottom-32 left-1/4 w-10 h-10 border-4 border-[#631463] border-opacity-10 rounded-full"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#631463] relative z-10 mb-6">
                            Лицензия
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mx-auto"></div>
                    </div>
                    <p className="text-gray-600 text-lg">
                        EMU University осуществляет образовательную деятельность на основании государственной лицензии и имеет международную аккредитацию, подтверждающую высокое качество образовательных программ
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
                >
                    {licenses.map((license) => (
                        <motion.div
                            key={license.id}
                            variants={fadeIn}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(99, 20, 99, 0.25)",
                                scale: 1.02
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                            onClick={() => openModal(license)}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={license.src}
                                    alt={license.alt}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#631463]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                    <span className="text-white font-medium text-lg px-4 py-2 rounded-full bg-[#631463]/70 backdrop-blur-sm">
                                        Нажмите для увеличения
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 border-t border-gray-100">
                                <h3 className="text-xl font-semibold text-[#631463] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                    {license.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {license.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Вся информация о лицензиях и аккредитациях доступна в публичном реестре образовательных организаций.
                        Наши студенты получают дипломы государственного образца, признаваемые как в стране, так и за рубежом.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(99, 20, 99, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-3 px-8 rounded-full font-medium shadow-lg transition-all duration-300 flex items-center mx-auto"
                    >
                        Подробнее о наших лицензиях
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Модальное окно для увеличенного изображения */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1001] p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-[70vh]">
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
        </section>
    );
};

export default LicenseSection;