'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Camera, BookOpen, Users, Award, Landmark, BookCheck, Music, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = () => {
    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    // Состояния
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentAccordion, setCurrentAccordion] = useState(0);
    const [direction, setDirection] = useState(0); // Для направления анимации слайдера (1: вправо, -1: влево)

    // YouTube видео
    const youtubeVideos = [
        { id: 'dQw4w9WgXcQ', title: 'Видеоэкскурсия по университету' },
        { id: 'mOK5DhRvbyE', title: 'Интервью с преподавателями' },
        { id: 'pXRviuL6vMY', title: 'Студенческая жизнь' }
    ];

    // Категории фотографий для аккордеона
    const accordionItems = [
        {
            title: 'Учебный процесс',
            icon: <BookOpen size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Лекция в аудитории', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Студенты на семинаре', width: 400, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Практические занятия', width: 600, height: 800 },
                { src: '/api/placeholder/800/600', alt: 'Лабораторная работа', width: 800, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Групповой проект', width: 500, height: 500 },
                { src: '/api/placeholder/600/400', alt: 'Консультация с преподавателем', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Библиотека университета', width: 400, height: 600 },
                { src: '/api/placeholder/600/600', alt: 'Зачетная неделя', width: 600, height: 600 }
            ]
        },
        {
            title: 'Студенческая жизнь',
            icon: <Users size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Студенческое собрание', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Культурное мероприятие', width: 400, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Спортивные соревнования', width: 500, height: 500 },
                { src: '/api/placeholder/800/600', alt: 'Студенческий клуб', width: 800, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Волонтерская деятельность', width: 600, height: 800 },
                { src: '/api/placeholder/600/400', alt: 'Общежитие университета', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Студенческая столовая', width: 400, height: 600 }
            ]
        },
        {
            title: 'Научные достижения',
            icon: <Award size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Научная конференция', width: 600, height: 400 },
                { src: '/api/placeholder/500/500', alt: 'Награждение победителей', width: 500, height: 500 },
                { src: '/api/placeholder/400/600', alt: 'Исследовательская лаборатория', width: 400, height: 600 },
                { src: '/api/placeholder/800/600', alt: 'Научная публикация', width: 800, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Международный симпозиум', width: 600, height: 800 },
                { src: '/api/placeholder/600/400', alt: 'Защита диссертации', width: 600, height: 400 }
            ]
        },
        {
            title: 'Университетский кампус',
            icon: <Landmark size={24} />,
            images: [
                { src: '/api/placeholder/800/600', alt: 'Главное здание университета', width: 800, height: 600 },
                { src: '/api/placeholder/600/400', alt: 'Территория кампуса', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Конференц-зал', width: 400, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Спортивный комплекс', width: 500, height: 500 },
                { src: '/api/placeholder/600/800', alt: 'Медицинский центр', width: 600, height: 800 },
                { src: '/api/placeholder/600/400', alt: 'Актовый зал', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Столовая университета', width: 400, height: 600 },
                { src: '/api/placeholder/600/600', alt: 'Парковая зона', width: 600, height: 600 }
            ]
        },
        {
            title: 'Образовательные программы',
            icon: <BookCheck size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Презентация программы', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Международное сотрудничество', width: 400, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Встреча с экспертами', width: 500, height: 500 },
                { src: '/api/placeholder/800/600', alt: 'Открытая лекция', width: 800, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Дистанционное обучение', width: 600, height: 800 }
            ]
        },
        {
            title: 'Культурные мероприятия',
            icon: <Music size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Студенческий фестиваль', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Концерт в университете', width: 400, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Творческий вечер', width: 500, height: 500 },
                { src: '/api/placeholder/800/600', alt: 'Национальные традиции', width: 800, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Театральная постановка', width: 600, height: 800 },
                { src: '/api/placeholder/600/400', alt: 'Выставка студенческих работ', width: 600, height: 400 }
            ]
        },
        {
            title: 'Международное сотрудничество',
            icon: <Globe size={24} />,
            images: [
                { src: '/api/placeholder/600/400', alt: 'Делегация из-за рубежа', width: 600, height: 400 },
                { src: '/api/placeholder/400/600', alt: 'Подписание соглашения', width: 400, height: 600 },
                { src: '/api/placeholder/500/500', alt: 'Международная конференция', width: 500, height: 500 },
                { src: '/api/placeholder/800/600', alt: 'Студенческий обмен', width: 800, height: 600 },
                { src: '/api/placeholder/600/800', alt: 'Встреча с иностранными партнерами', width: 600, height: 800 },
                { src: '/api/placeholder/600/400', alt: 'Программа двойных дипломов', width: 600, height: 400 }
            ]
        }
    ];

    // Открыть лайтбокс
    const openLightbox = (imageIndex, accordionIndex) => {
        setCurrentImage(imageIndex);
        setCurrentAccordion(accordionIndex);
        setLightboxOpen(true);

        // Блокировка прокрутки страницы
        document.body.style.overflow = 'hidden';
    };

    // Закрыть лайтбокс
    const closeLightbox = () => {
        setLightboxOpen(false);

        // Разблокировка прокрутки страницы
        document.body.style.overflow = 'auto';
    };

    // Переключение на следующее изображение
    const nextImage = () => {
        setDirection(1);
        const imagesCount = accordionItems[currentAccordion].images.length;
        setCurrentImage((currentImage + 1) % imagesCount);
    };

    // Переключение на предыдущее изображение
    const prevImage = () => {
        setDirection(-1);
        const imagesCount = accordionItems[currentAccordion].images.length;
        setCurrentImage((currentImage - 1 + imagesCount) % imagesCount);
    };

    // Обработка нажатий клавиш для лайтбокса
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImage]);

    // Очистка при размонтировании компонента
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // Варианты анимации для различных элементов
    const heroVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const heroItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const accordionVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.4, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    };

    const lightboxVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section с анимацией */}
            <motion.div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                style={{
                    background: `linear-gradient(rgba(99, 20, 99, 0.85), rgba(99, 20, 99, 0.95)), url('/api/placeholder/1200/600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <motion.h1
                        className="text-5xl font-bold text-white mb-4"
                        variants={heroItemVariants}
                    >
                        Фотогаллерея
                    </motion.h1>
                    <motion.div
                        className="w-24 h-1 bg-white mx-auto mb-6"
                        variants={heroItemVariants}
                    ></motion.div>
                    <motion.p
                        className="text-xl text-white max-w-3xl"
                        variants={heroItemVariants}
                    >
                        Ознакомьтесь с жизнью нашего университета через фото и видео материалы
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
                {/* Video Section с анимацией */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h2
                        className="text-2xl font-bold mb-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ color: brandColor }}
                    >
                        Video materiallar
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {youtubeVideos.map((video, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="relative pb-[56.25%] h-0">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium" style={{ color: brandColor }}>{video.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Photo Gallery Section с анимацией */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.h2
                        className="text-2xl font-bold mb-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{ color: brandColor }}
                    >
                        Фотографии
                    </motion.h2>

                    {/* Accordion с анимацией */}
                    <div className="space-y-4">
                        {accordionItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.07 }}
                                whileHover={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)" }}
                            >
                                {/* Accordion Header с анимацией */}
                                <motion.button
                                    className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center">
                                        <motion.div
                                            className="mr-3 w-10 h-10 rounded-full flex items-center justify-center"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: activeAccordion === index ? 360 : 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            <div style={{ color: brandColor }}>{item.icon}</div>
                                        </motion.div>
                                        <h3 className="text-lg font-medium" style={{ color: brandColor }}>{item.title}</h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeAccordion === index ?
                                            <ChevronUp size={20} style={{ color: brandColor }} /> :
                                            <ChevronDown size={20} style={{ color: brandColor }} />
                                        }
                                    </motion.div>
                                </motion.button>

                                {/* Accordion Content с анимацией */}
                                <AnimatePresence>
                                    {activeAccordion === index && (
                                        <motion.div
                                            className="px-6 pb-6"
                                            key={`accordion-${index}`}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={accordionVariants}
                                        >
                                            {/* Masonry Gallery с анимацией */}
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                                {item.images.map((image, imageIndex) => (
                                                    <motion.div
                                                        key={imageIndex}
                                                        className="cursor-pointer overflow-hidden rounded-lg relative group"
                                                        style={{
                                                            height: `${Math.min(200, image.height * 200 / image.width)}px`,
                                                            gridRow: `span ${Math.ceil(image.height * 200 / image.width / 100)}`
                                                        }}
                                                        onClick={() => openLightbox(imageIndex, index)}
                                                        variants={imageVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        whileHover="hover"
                                                        transition={{ delay: imageIndex * 0.05 }}
                                                    >
                                                        <motion.img
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="w-full h-full object-cover"
                                                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                                        />
                                                        <motion.div
                                                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <motion.div
                                                                initial={{ scale: 0.5, opacity: 0 }}
                                                                whileHover={{ scale: 1, opacity: 1 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Camera size={24} className="text-white" />
                                                            </motion.div>
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Lightbox с анимацией */}
            <AnimatePresence>
                {lightboxOpen && currentImage !== null && (
                    <motion.div
                        className="fixed inset-0 z-[1000] bg-black bg-opacity-60 flex items-center justify-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={lightboxVariants}
                    >
                        <motion.button
                            className="absolute top-4 right-4 text-white z-10 p-2"
                            onClick={closeLightbox}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-10"
                            onClick={prevImage}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft size={32} />
                        </motion.button>

                        <div className="max-w-4xl max-h-[80vh] relative overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentImage}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <img
                                        src={accordionItems[currentAccordion].images[currentImage].src}
                                        alt={accordionItems[currentAccordion].images[currentImage].alt}
                                        className="max-w-full max-h-[80vh] object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <motion.p
                                className="text-white text-center mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {accordionItems[currentAccordion].images[currentImage].alt}
                            </motion.p>
                        </div>

                        <motion.button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-10"
                            onClick={nextImage}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight size={32} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhotoGallery;