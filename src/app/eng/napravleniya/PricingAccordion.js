'use client';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-modal';
import { ChevronDown, ZoomIn } from 'lucide-react';

// Initialize Modal only on the client side after mounting
const initializeModal = () => {
    if (typeof window !== 'undefined') {
        // Changed: check document.body instead of #__next
        Modal.setAppElement(document.body);
    }
};

const PricingAccordion = ({ tarifImages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('medical'); // medical or business

    // Initialize react-modal after component mounting
    useEffect(() => {
        initializeModal();
        console.log("PricingAccordion received data:", tarifImages);
    }, [tarifImages]);

    const brandColor = '#6b0e55';         // Primary — deep purple-pink
    const brandColorLight = '#9c3f84';    // Lighter — softer but still saturated
    const brandColorLighter = '#f6eaf2';  // Lightest — almost white with pink tint

    // Get current image to display
    const currentImage = activeImage === 'medical'
        ? tarifImages?.medical
        : tarifImages?.business;

    // Fallback image if API doesn't return data
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
                <h3 className="text-xl font-bold">Tuition Costs</h3>
                <ChevronDown
                    size={24}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-6">
                    {/* Image switchers */}
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
                            Medical School
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
                            Business and Social School
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
                                alt={activeImage === 'medical' ? "Tuition Costs - Medical School" : "Tuition Costs - Business School"}
                                effect="blur"
                                className="w-full h-auto rounded-lg shadow-md"
                                placeholderSrc="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/clinic-emu.jpg"
                            />
                            <button
                                onClick={openModal}
                                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Zoom Image"
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
                                alt={activeImage === 'medical' ? "Tuition Costs - Medical School" : "Tuition Costs - Business School"}
                                className="max-w-full max-h-[90vh] rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Close"
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
                            The images above show current information about tuition costs for all departments of our university. Prices are indicated for 1 academic year.
                        </p>
                        <p>
                            Please note the following features:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Grants:</strong> For excellent students and olympiad winners, grants are available that can cover from 25% to 100% of tuition costs.
                            </li>
                            <li>
                                <strong>Scholarships:</strong> Successful students have the opportunity to receive monthly scholarships depending on their field of study.
                            </li>
                            <li>
                                <strong>Payment Options:</strong> Payment is possible either for the entire academic year or by semesters.
                            </li>
                        </ul>
                        <p>
                            For detailed information about tuition costs, grants, and payment terms, contact the admissions office by phone{' '}
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