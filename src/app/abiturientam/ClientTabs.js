// Файл: app/components/ClientTabs.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function ClientTabs({ medicalSchoolRu, businessSchoolRu, brandColor }) {
    const [activeTab, setActiveTab] = useState('medical');
    const [modalImage, setModalImage] = useState(null);
    const [mounted, setMounted] = useState(false);

    // Установка флага mounted после монтирования компонента
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const tabs = [
        { id: 'medical', title: 'Медицинская школа', image: medicalSchoolRu },
        { id: 'business', title: 'Школа бизнеса и социальных наук', image: businessSchoolRu }
    ];

    // Обработчик закрытия модального окна
    const handleCloseModal = () => {
        setModalImage(null);
    };

    // Модальное окно, которое будет рендериться через портал
    const Modal = () => {
        if (!modalImage) return null;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
                onClick={handleCloseModal}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-[90vw] h-[90vh] relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Используем обычный img вместо Image для полного контроля */}
                    <img
                        src={modalImage}
                        alt="Fullscreen Subject Image"
                        className="w-full h-full object-contain"
                    />
                    <motion.button
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={handleCloseModal}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    tab.image?.url && (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-lg font-medium transition-colors ${activeTab === tab.id
                                    ? 'border-b-2'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                            style={{
                                borderColor: activeTab === tab.id ? brandColor : 'transparent',
                                color: activeTab === tab.id ? brandColor : undefined
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab.title}
                        </motion.button>
                    )
                ))}
            </div>

            {/* Tab Content with Animation */}
            <div>
                <AnimatePresence mode="wait">
                    {tabs.map((tab) => (
                        tab.image?.url && activeTab === tab.id && (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-64 cursor-pointer"
                                onClick={() => setModalImage(tab.image.url)}
                            >
                                <Image
                                    src={tab.image.url}
                                    alt={`${tab.title} Subjects`}
                                    fill
                                    className="object-contain"
                                    unoptimized={true} // Отключаем оптимизацию Next.js для сохранения качества
                                />

                                {/* Overlay hint to click for fullscreen */}
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 flex items-center justify-center transition-all duration-300">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="bg-white/80 rounded-full p-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={brandColor}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Рендерим модальное окно через портал для корректного позиционирования */}
            {mounted && modalImage && createPortal(<Modal />, document.body)}
        </div>
    );
}