// app/components/CampusSlider.jsx
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

export default function CampusSlider({ campuses, campusIndex }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState({
        isOpen: false,
        imageIndex: null,
    });

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        touchMove: false,
        afterChange: (index) => setCurrentSlide(index),
        appendDots: (dots) => (
            <div className="mt-6 flex justify-center space-x-2">{dots}</div>
        ),
        customPaging: (i) => (
            <button
                className="w-200 h-200 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md"
                onClick={() => setCurrentSlide(i)}
            >
                <Image
                    src={campuses[campusIndex].images[i]}
                    alt={`${campuses[campusIndex].title} Preview ${i + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
            </button>
        ),
    };

    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors z-10"
        >
            <ChevronLeft className="w-6 h-6 text-white" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors z-10"
        >
            <ChevronRight className="w-6 h-6 text-white" />
        </button>
    );

    const handleFullScreenOpen = (imageIndex) => {
        setIsFullScreen({ isOpen: true, imageIndex });
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen({ isOpen: false, imageIndex: null });
    };

    return (
        <>
            <div className="relative mb-6">
                <Slider
                    {...sliderSettings}
                    prevArrow={<CustomPrevArrow />}
                    nextArrow={<CustomNextArrow />}
                >
                    {campuses[campusIndex].images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
                            onClick={() => handleFullScreenOpen(index)}
                        >
                            <Image
                                src={image}
                                alt={`${campuses[campusIndex].title} Slide ${index + 1}`}
                                width={1200}
                                height={1200}
                                className="w-full h-[250px] md:h-[400px] object-cover"
                                crossOrigin="anonymous"
                            />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">{campuses[campusIndex].title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Full Screen Modal (клиентский компонент) */}
            {isFullScreen.isOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl h-[40vh] md:h-[fit-content] bg-white rounded-xl overflow-hidden">
                        <button
                            onClick={handleCloseFullScreen}
                            className="absolute top-4 right-4 text-white bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <Image
                            src={campuses[campusIndex].images[isFullScreen.imageIndex]}
                            alt={campuses[campusIndex].title}
                            width={1200}
                            height={1200}
                            className="w-full h-full object-cover"
                            crossOrigin="anonymous"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                            <h2 className="text-2xl font-bold">
                                {campuses[campusIndex].title}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}