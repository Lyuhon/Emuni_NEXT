'use client';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-modal';
import { ChevronDown, ZoomIn } from 'lucide-react';

// Устанавливаем appElement только на клиенте после монтирования
const initializeModal = () => {
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
        Modal.setAppElement('#__next');
    }
};

const PricingAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Инициализация react-modal после монтирования компонента
    useEffect(() => {
        initializeModal();
    }, []);

    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    // URL изображения
    const pricingImage = 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-ru-scaled.jpg';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center p-6 text-left"
                style={{ backgroundColor: brandColor, color: 'white' }}
            >
                <h3 className="text-xl font-bold">Tariflar tarmog'i</h3>
                <ChevronDown
                    size={24}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-6">
                    <div className="relative mb-6">
                        <LazyLoadImage
                            src={pricingImage}
                            alt="Тарифная сетка"
                            effect="blur"
                            className="w-full h-auto rounded-lg shadow-md"
                            placeholderSrc="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/clinic-emu.jpg" // Легкий плейсхолдер
                        />
                        <button
                            onClick={openModal}
                            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                            style={{ color: brandColor }}
                            aria-label="Увеличить изображение"
                        >
                            <ZoomIn size={24} />
                        </button>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
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
                                zIndex: 10000, // Устанавливаем z-index 10000 для оверлея
                            },
                        }}
                    >
                        <div className="relative">
                            <img
                                src={pricingImage}
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


                    <div className="text-gray-700 space-y-4">
                        <p className="text-lg">
                            Bizning tariflar tizimi barcha yo‘nalishlar bo‘yicha moslashuvchan to‘lov variantlarini taqdim etadi. Moliyaviy imkoniyatlaringiz va akademik maqsadlaringizga qarab sizga mos tarifni tanlang.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Bazaviy tarif:</strong> O‘quv materiallariga to‘liq kirish, amaliy mashg‘ulotlarda ishtirok etish, kurator yordami.
                            </li>
                            <li>
                                <strong>Premium tarif:</strong> Qo‘shimcha mahorat darslari, individual maslahatlar va xalqaro dasturlarga ustuvor kirish imkonini o‘z ichiga oladi.
                            </li>
                            <li>
                                <strong>Moslashuvchan tarif:</strong> Semestr yoki modullar bo‘yicha to‘lov imkoniyati, qisman band bo‘lgan talabalar uchun mos.
                            </li>
                        </ul>
                        <p>
                            Narxlar va shartlar haqida batafsil ma’lumot olish uchun bizning qabul komissiyamizga quyidagi telefon orqali murojaat qiling{' '}
                            <a
                                href="tel:+998781470007"
                                className="font-semibold underline"
                                style={{ color: brandColor }}
                            >
                                +998(78) 147-00-07
                            </a>.
                        </p>
                    </div>

                </div>
            )}
        </div>
    );
};

export default PricingAccordion;