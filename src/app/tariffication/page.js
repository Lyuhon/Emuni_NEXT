'use client';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-modal';
import { ZoomIn, ChevronRight } from 'lucide-react';

// Устанавливаем appElement для react-modal только на клиенте
const initializeModal = () => {
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
        Modal.setAppElement('#__next');
    }
};

const TariffsPage = () => {
    const [modalImage, setModalImage] = useState(null);

    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    // Инициализация react-modal
    useEffect(() => {
        initializeModal();
    }, []);

    // Данные тарифной сетки (извлечены из предоставленного JSON)
    const tariffsData = {
        med_napravleniya_uz: {
            url: 'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-ru-scaled.jpg',
            alt: 'Тарифная сетка для медицинских направлений',
        },
        biznes_napravleniya_uz: {
            url: 'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-uz-scaled.jpg',
            alt: 'Тарифная сетка для бизнес-направлений',
        },
    };

    const openModal = (imageUrl) => {
        setModalImage(imageUrl);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                style={{
                    background: `linear-gradient(rgba(99, 20, 99, 0.39), rgba(99, 20, 99, 0.66)), url('https://emuni.uz/wp-content/uploads/2022/07/pricing-hero.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Тарифы обучения</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Ознакомьтесь со стоимостью программ высшего образования в Университете EMU, обеспечивающих ваш профессиональный успех.
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
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Вступительный текст */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>
                        Стоимость программ высшего образования
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Университет EMU предлагает прозрачные и конкурентоспособные тарифы для программ бакалавриата, разработанные для подготовки высококвалифицированных специалистов в области медицины и бизнеса. Ознакомьтесь с нашими направлениями и выберите путь к вашей профессиональной карьере.
                    </p>
                </div>

                {/* Тарифные сетки */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Медицинские направления */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <LazyLoadImage
                                src={tariffsData.med_napravleniya_uz.url}
                                alt={tariffsData.med_napravleniya_uz.alt}
                                effect="blur"
                                className="w-full h-auto"
                                placeholderSrc="/placeholder.jpg" // Замените на ваш плейсхолдер
                            />
                            <button
                                onClick={() => openModal(tariffsData.med_napravleniya_uz.url)}
                                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Увеличить изображение"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2" style={{ color: brandColor }}>
                                Медицинские направления
                            </h3>
                            <p className="text-gray-600">
                                Стоимость программ медицинской школы включает обучение под руководством ведущих специалистов, доступ к современному оборудованию и практику в престижных клиниках.
                            </p>
                        </div>
                    </div>

                    {/* Бизнес-направления */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <LazyLoadImage
                                src={tariffsData.biznes_napravleniya_uz.url}
                                alt={tariffsData.biznes_napravleniya_uz.alt}
                                effect="blur"
                                className="w-full h-auto"
                                placeholderSrc="/placeholder.jpg" // Замените на ваш плейсхолдер
                            />
                            <button
                                onClick={() => openModal(tariffsData.biznes_napravleniya_uz.url)}
                                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Увеличить изображение"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2" style={{ color: brandColor }}>
                                Бизнес и социальная школа
                            </h3>
                            <p className="text-gray-600">
                                Программы бизнес-направлений предлагают конкурентоспособные тарифы, обеспечивающие подготовку лидеров с доступом к международным практикам и карьерным возможностям.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Модальное окно для увеличения изображения */}
                <Modal
                    isOpen={!!modalImage}
                    onRequestClose={closeModal}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            padding: 0,
                            border: 'none',
                            background: 'transparent',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                        },
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            zIndex: 10000,
                        },
                    }}
                >
                    <div className="relative flex flex-col items-center">
                        <img
                            src={modalImage}
                            alt="Тарифная сетка (увеличенная)"
                            className="max-w-full max-h-[90vh] rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                            style={{ color: brandColor }}
                            aria-label="Закрыть"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </Modal>

                {/* Контактная информация */}
                <div className="bg-white rounded-lg shadow-md p-8 mt-12 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: brandColor }}></div>
                    <h2 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>
                        Консультация по тарифам
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Наши специалисты готовы предоставить подробную информацию о стоимости программ, условиях поступления и возможностях финансовой поддержки. Свяжитесь с нами для индивидуальной консультации.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+998781470007"
                            className="flex items-center text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all hover:shadow-lg"
                            style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        >
                            Позвонить
                            <ChevronRight size={20} className="ml-2" />
                        </a>
                        <p className="text-lg font-semibold" style={{ color: brandColor }}>
                            +998 (78) 147-00-07
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TariffsPage;