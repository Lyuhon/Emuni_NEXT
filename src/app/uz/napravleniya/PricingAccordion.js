'use client';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-modal';
import { ChevronDown, ZoomIn } from 'lucide-react';

// Mijozda montaj qilish paytida appElement'ni o'rnatamiz
const initializeModal = () => {
    if (typeof window !== 'undefined') {
        // O'zgartirilgan: #__next o'rniga document.body'ni tekshiramiz
        Modal.setAppElement(document.body);
    }
};

const PricingAccordion = ({ tarifImages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('medical'); // medical yoki business

    // Komponent montaj qilinganda react-modal'ni ishga tushiramiz
    useEffect(() => {
        initializeModal();
        console.log("PricingAccordion received data:", tarifImages);
    }, [tarifImages]);

    const brandColor = '#6b0e55';         // Asosiy — to'q pushti-qizil
    const brandColorLight = '#9c3f84';    // Och — yumshoqroq, lekin hali ham to'yingan
    const brandColorLighter = '#f6eaf2';  // Eng och — deyarli oq pushti ton bilan

    // Ko'rish uchun joriy tasvirni olish
    const currentImage = activeImage === 'medical'
        ? tarifImages?.medical
        : tarifImages?.business;

    // API ma'lumotlarni qaytarmasa, zaxira tasvir
    const fallbackImage = 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-ru-scaled.jpg';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const switchImage = (type) => {
        setActiveImage(type);
    };

    return (
        <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center p-6 text-left"
                style={{ backgroundColor: brandColor, color: 'white' }}
            >
                <h3 className="text-xl font-bold">Ta'lim narxlari</h3>
                <ChevronDown
                    size={24}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-6">
                    {/* Tasvirlar almashtirgichi */}
                    <div className="flex mb-4 gap-4">
                        <button
                            onClick={() => switchImage('medical')}
                            className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'medical'
                                ? 'text-white shadow-md'
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            style={{
                                backgroundColor: activeImage === 'medical' ? brandColor : undefined
                            }}
                        >
                            Tibbiyot maktabi
                        </button>
                        <button
                            onClick={() => switchImage('business')}
                            className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'business'
                                ? 'text-white shadow-md'
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            style={{
                                backgroundColor: activeImage === 'business' ? brandColor : undefined
                            }}
                        >
                            Biznes va ijtimoiy maktab
                        </button>
                    </div>

                    {!tarifImages ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: brandColor }}></div>
                        </div>
                    ) : (
                        <div className="relative mb-6">
                            <LazyLoadImage
                                src={currentImage || fallbackImage}
                                alt={activeImage === 'medical' ? "Ta'lim narxlari - Tibbiyot maktabi" : "Ta'lim narxlari - Biznes maktabi"}
                                effect="blur"
                                className="w-full h-auto rounded-lg shadow-md"
                                placeholderSrc="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/clinic-emu.jpg"
                            />
                            <button
                                onClick={openModal}
                                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Tasvirni kattalashtirish"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>
                    )}

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
                                zIndex: 10000,
                            },
                        }}
                    >
                        <div className="relative">
                            <img
                                src={currentImage || fallbackImage}
                                alt={activeImage === 'medical' ? "Ta'lim narxlari - Tibbiyot maktabi" : "Ta'lim narxlari - Biznes maktabi"}
                                className="max-w-full max-h-[90vh] rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Yopish"
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
                            Yuqoridagi tasvirlarda universitetimizning barcha fakultetlari uchun ta'lim narxlari haqida dolzarb ma'lumotlar ko'rsatilgan. 1 o'quv yili uchun narxlar keltirilgan.
                        </p>
                        <p>
                            Quyidagi xususiyatlarga e'tibor bering:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Grantlar:</strong> A'lochi talabalar va olimpiada g'oliblari uchun ta'lim xarajatlarining 25% dan 100% gacha qoplaydigan grantlar mavjud.
                            </li>
                            <li>
                                <strong>Stipendiyalar:</strong> Muvaffaqiyatli talabalarga yo'nalishga qarab oylik stipendiyalar olish imkoniyati mavjud.
                            </li>
                            <li>
                                <strong>To'lov shakllari:</strong> Butun o'quv yili uchun ham, semestrlar bo'yicha ham to'lash mumkin.
                            </li>
                        </ul>
                        <p>
                            Ta'lim narxlari, grantlar va to'lov shartlari haqida batafsil ma'lumot olish uchun qabul komissiyasiga telefon orqali murojaat qiling:{' '}

                            <a href="tel:+998781470007"
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