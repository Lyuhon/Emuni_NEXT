// // app/photogallery/GalleryAccordion.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryAccordion({ videos, gallerySections, brandColors }) {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0); // Для направления анимации в лайтбоксе

    // Если брендовые цвета не переданы, используем новые по умолчанию
    const brandColor = brandColors?.primary || '#6b0e55';      // Новый основной цвет
    const brandColorLight = brandColors?.light || '#8f3178';   // Новый светлый оттенок
    const brandColorLighter = brandColors?.lighter || '#f9eef5'; // Новый самый светлый оттенок (фон)

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setDirection(1); // Направление вправо
        setCurrentImageIndex((prev) => (prev + 1) % gallerySections[activeAccordion]?.images.length);
    };

    const prevImage = () => {
        setDirection(-1); // Направление влево
        setCurrentImageIndex((prev) =>
            prev === 0 ? gallerySections[activeAccordion]?.images.length - 1 : prev - 1
        );
    };

    // Анимации для аккордеона
    const accordionVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                style={{
                    background: `linear-gradient(rgba(107, 14, 85, 0.85), rgba(107, 14, 85, 0.95)), url('/api/placeholder/1200/600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Photo Gallery</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Explore university life through our photo and video materials
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="#f8f9fa"
                            opacity=".8"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="#f8f9fa"
                            opacity=".5"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="#f8f9fa"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
                {/* Video Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: brandColor }}>
                        Video Materials
                    </h2>
                    {videos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <div className="relative pb-[56.25%] h-0">
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium" style={{ color: brandColor }}>
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">
                            Videos are missing or failed to load.
                        </p>
                    )}
                </div>

                {/* Photo Gallery Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: brandColor }}>
                        Photos
                    </h2>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {gallerySections.length > 0 ? (
                            gallerySections.map((section, index) => {
                                const isActive = activeAccordion === index;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                    >
                                        {/* Accordion Header */}
                                        <button
                                            className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className="mr-3 w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: brandColorLighter }}
                                                >
                                                    <Camera size={24} style={{ color: brandColor }} />
                                                </div>
                                                <h3 className="text-left text-lg font-medium" style={{ color: brandColor }}>
                                                    {section.title}
                                                </h3>
                                            </div>
                                            {isActive ? (
                                                <ChevronUp size={20} style={{ color: brandColor }} />
                                            ) : (
                                                <ChevronDown size={20} style={{ color: brandColor }} />
                                            )}
                                        </button>

                                        {/* Accordion Content */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={accordionVariants}
                                                    className="px-6 pb-6"
                                                >
                                                    {/* Masonry Grid */}
                                                    <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
                                                        {section.images.map((image, imageIndex) => (
                                                            <motion.div
                                                                key={imageIndex}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="cursor-pointer overflow-hidden rounded-lg relative group mb-3 break-inside-avoid"
                                                                onClick={() => openLightbox(imageIndex)}
                                                            >
                                                                <Image
                                                                    src={image.src}
                                                                    alt={image.alt}
                                                                    width='300'
                                                                    height='200'
                                                                    className="w-full h-auto object-cover"
                                                                    loading="lazy"
                                                                    quality={10}
                                                                />
                                                                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-30 transition-opacity duration-300">
                                                                    <Camera size={24} className="text-white" />
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <p className="text-center text-gray-500">
                                Photos are missing or failed to load.
                            </p>
                        )}
                    </div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {lightboxOpen && gallerySections[activeAccordion]?.images && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9000]"
                                onClick={closeLightbox}
                            >
                                <motion.div
                                    className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на изображение
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
                                                src={gallerySections[activeAccordion].images[currentImageIndex].src}
                                                alt={gallerySections[activeAccordion].images[currentImageIndex].alt}
                                                width={gallerySections[activeAccordion].images[currentImageIndex].width || 1200}
                                                height={gallerySections[activeAccordion].images[currentImageIndex].height || 800}
                                                className="max-w-full max-h-full object-contain rounded-lg"
                                                quality={20}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                    <button
                                        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white shadow-md transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: brandColor,
                                            borderColor: 'white',
                                            hoverBackgroundColor: brandColorLight
                                        }}
                                        onClick={closeLightbox}
                                    >
                                        <X size={24} />
                                    </button>
                                    <button
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                                        onClick={prevImage}
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                                        onClick={nextImage}
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}