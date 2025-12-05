// GreenGallery.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GreenGallery({ language = 'ru' }) {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        fetchGalleryData();
    }, []);

    const fetchGalleryData = async () => {
        try {
            const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81192');
            const data = await response.json();

            // Фильтруем только нужный раздел "ЭКО волонтеры"
            const ecoSection = data.acf.gallereya[0].razdel.find(section =>
                section.nazvanie_razdela_ru === "ЭКО волонтеры"
            );

            setGalleryData(ecoSection);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching gallery data:', error);
            setLoading(false);
        }
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % galleryData.izobrazheniya.length);
    };

    const prevImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) =>
            prev === 0 ? galleryData.izobrazheniya.length - 1 : prev - 1
        );
    };

    // Получаем название раздела в зависимости от языка
    const getSectionTitle = () => {
        if (!galleryData) return '';
        switch (language) {
            case 'uz':
                return galleryData.nazvanie_razdela_uz;
            case 'eng':
                return galleryData.nazvanie_razdela_ang;
            default:
                return galleryData.nazvanie_razdela_ru;
        }
    };

    // Анимации для слайдов в лайтбоксе
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            position: 'absolute',
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
            position: 'absolute',
        }),
    };

    if (loading) {
        return (
            <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
                        <span className="ml-3 text-gray-600">Загрузка галереи...</span>
                    </div>
                </div>
            </section>
        );
    }

    if (!galleryData || !galleryData.izobrazheniya || galleryData.izobrazheniya.length === 0) {
        return null;
    }

    return (
        <>
            <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
                {/* Декоративные элементы */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 rotate-45 border-4 border-green-100 rounded-3xl"></div>

                <div className="max-w-screen-xl mx-auto relative z-10">
                    {/* Заголовок секции */}
                    <div className="text-center mb-12">
                        <div className="relative inline-block mb-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"></div>

                        </div>

                        <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">
                            Наши студенты
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {getSectionTitle()}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Студенты EMU активно участвуют в экологических проектах и инициативах
                        </p>
                    </div>

                    {/* Masonry Grid галерея */}
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                        {galleryData.izobrazheniya.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="cursor-pointer overflow-hidden rounded-2xl relative group mb-4 break-inside-avoid bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={image.sizes?.large || image.url}
                                        alt={image.alt || image.title}
                                        width='300'
                                        height='300'
                                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Оверлей при ховере */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <div className="text-white flex items-center">
                                            <Camera size={20} className="mr-2" />
                                            <span className="font-medium">Открыть</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && galleryData.izobrazheniya && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/85 backdrop-blur-sm- flex items-center justify-center z-[9000]"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-7xl w-full h-[90vh] flex items-center justify-center px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentImageIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={galleryData.izobrazheniya[currentImageIndex].url}
                                        alt={galleryData.izobrazheniya[currentImageIndex].alt || galleryData.izobrazheniya[currentImageIndex].title}
                                        width='600'
                                        height='600'
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Кнопка закрытия */}
                            <button
                                className='bg-[#6b0e55] absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white shadow-md transition-all duration-300 hover:scale-105'
                                onClick={closeLightbox}
                            >
                                <X size={24} />
                            </button>

                            {/* Кнопка "Назад" */}
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                onClick={prevImage}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Кнопка "Вперед" */}
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                onClick={nextImage}
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Счетчик изображений */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                                {currentImageIndex + 1} / {galleryData.izobrazheniya.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}