'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PartnersSlider = () => {
    const [partnersData, setPartnersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [swiper, setSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperContainerRef = useRef(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/options/options');
                const data = await response.json();
                if (data && data.acf && data.acf.slider_block) {
                    setPartnersData(data.acf.slider_block);
                }
            } catch (error) {
                console.error('Error fetching partners data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <section className="partners-section py-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-100 opacity-20"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-100 opacity-20"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-purple-200 opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 max-w-[1700px] relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1 w-20 bg-gradient-to-r from-[#631463] to-[#8a3c8a] rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning hamkorlarimiz</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Sifatli ta’limni ta’minlash uchun yetakchi tibbiyot muassasalari va kompaniyalari bilan hamkorlik
                    </p>
                </div>

                <div className="relative partners-slider-container" ref={swiperContainerRef}>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={setSwiper}
                        initialSlide={0}
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            el: '.swiper-pagination-custom',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class="${className}"></span>`;
                            }
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="partners-swiper"
                    >
                        {partnersData.map((slideItem, slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                                <div className="partners-card bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <div className="p-4 md:p-6">
                                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                                            {/* Партнер 1 */}
                                            {slideItem.name_uz_1 && (
                                                <a
                                                    href={slideItem.link_1 || "#"}
                                                    className="partner-item flex flex-col items-center mb-4 md:mb-6"
                                                    target={slideItem.link_1 && slideItem.link_1 !== '#' ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="h-[110px] flex items-center justify-center mb-3 md:mb-4 p-2 md:p-4 rounded-lg w-full">
                                                        {slideItem.partner_1 && slideItem.partner_1.url ? (
                                                            <img
                                                                src={slideItem.partner_1.url}
                                                                alt={slideItem.name_uz_1}
                                                                className="max-h-[110px] w-auto object-contain filter drop-shadow-sm"
                                                            />
                                                        ) : (
                                                            <div className="w-[110px] h-[110px] rounded-full bg-gray-200 flex items-center justify-center">
                                                                <span className="text-[#631463] font-medium text-center px-2 text-sm">
                                                                    {slideItem.name_uz_1}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="partner-title text-center" style={{
                                                        textAlign: 'center',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        color: '#000000',
                                                        height: '80px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        {slideItem.name_uz_1}
                                                    </p>
                                                </a>
                                            )}

                                            {/* Партнер 2 */}
                                            {slideItem.name_ru_2 && (
                                                <a
                                                    href={slideItem.link_2 || "#"}
                                                    className="partner-item flex flex-col items-center mb-4 md:mb-6"
                                                    target={slideItem.link_2 && slideItem.link_2 !== '#' ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="h-[110px] flex items-center justify-center mb-3 md:mb-4 p-2 md:p-4 rounded-lg w-full">
                                                        {slideItem.partner_2 && slideItem.partner_2.url ? (
                                                            <img
                                                                src={slideItem.partner_2.url}
                                                                alt={slideItem.name_ru_2}
                                                                className="max-h-[110px] w-auto object-contain filter drop-shadow-sm"
                                                            />
                                                        ) : (
                                                            <div className="w-[110px] h-[110px] rounded-full bg-gray-200 flex items-center justify-center">
                                                                <span className="text-[#631463] font-medium text-center px-2 text-sm">
                                                                    {slideItem.name_ru_2}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="partner-title text-center" style={{
                                                        textAlign: 'center',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        color: '#000000',
                                                        height: '80px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        {slideItem.name_ru_2}
                                                    </p>
                                                </a>
                                            )}

                                            {/* Партнер 3 */}
                                            {slideItem.name_ru_3 && (
                                                <a
                                                    href={slideItem.link_3 || "#"}
                                                    className="partner-item flex flex-col items-center transition-transform"
                                                    target={slideItem.link_3 && slideItem.link_3 !== '#' ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="h-[110px] flex items-center justify-center mb-3 md:mb-4 p-2 md:p-4 rounded-lg w-full">
                                                        {slideItem.partner_3 && slideItem.partner_3.url ? (
                                                            <img
                                                                src={slideItem.partner_3.url}
                                                                alt={slideItem.name_ru_3}
                                                                className="max-h-[110px] w-auto object-contain filter drop-shadow-sm"
                                                            />
                                                        ) : (
                                                            <div className="w-[110px] h-[110px] rounded-full bg-gray-200 flex items-center justify-center">
                                                                <span className="text-[#631463] font-medium text-center px-2 text-sm">
                                                                    {slideItem.name_ru_3}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="partner-title text-center" style={{
                                                        textAlign: 'center',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        color: '#000000',
                                                        height: '80px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        {slideItem.name_ru_3}
                                                    </p>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white text-[#631463] rounded-full shadow-lg focus:outline-none hover:bg-[#631463] hover:text-white transition-all duration-300 border-2 border-[#631463]"
                        onClick={() => swiper?.slidePrev()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white text-[#631463] rounded-full shadow-lg focus:outline-none hover:bg-[#631463] hover:text-white transition-all duration-300 border-2 border-[#631463]"
                        onClick={() => swiper?.slideNext()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Pagination Bullets */}
                <div className="swiper-pagination-custom flex justify-center mt-8 md:mt-10 space-x-2"></div>
            </div>

            {/* Styling */}
            <style jsx global>{`
                .partners-section {
                    background: linear-gradient(180deg, #ffffff 0%, #f7eef7 50%, #ffffff 100%);
                }
                
                .partners-card {
                    backface-visibility: hidden;
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                }
                
                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #d1d1d1;
                    opacity: 1;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                
                .swiper-pagination-bullet-active {
                    width: 24px;
                    background: #631463;
                }
                
                .loader {
                    position: relative;
                    margin: 0 auto;
                    width: 60px;
                }
                
                .loader:before {
                    content: '';
                    display: block;
                    padding-top: 100%;
                }
                
                .circular {
                    animation: rotate 2s linear infinite;
                    height: 100%;
                    transform-origin: center center;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
                
                .path {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                    stroke-linecap: round;
                    stroke: #631463;
                }
                
                @keyframes rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes dash {
                    0% {
                        stroke-dasharray: 1, 200;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 89, 200;
                        stroke-dashoffset: -35px;
                    }
                    100% {
                        stroke-dasharray: 89, 200;
                        stroke-dashoffset: -124px;
                    }
                }
                
                @keyframes color {
                    0%, 100% {
                        stroke: #631463;
                    }
                    40% {
                        stroke: #8a3c8a;
                    }
                    66% {
                        stroke: #631463;
                    }
                    80%, 90% {
                        stroke: #8a3c8a;
                    }
                }
                
                /* Additional responsive styles */
                @media (max-width: 640px) {
                    .partner-title {
                        font-size: 14px !important;
                        height: 60px !important;
                    }
                    
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        width: 36px;
                        height: 36px;
                    }
                    
                    .swiper-button-prev-custom svg,
                    .swiper-button-next-custom svg {
                        width: 16px;
                        height: 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnersSlider;