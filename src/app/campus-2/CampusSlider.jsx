// // app/components/CampusSlider.jsx
// "use client";
// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight, X, Maximize, Image as ImageIcon } from "lucide-react";
// import Image from "next/image";

// export default function CampusSlider({ campuses, campusIndex }) {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isFullScreen, setIsFullScreen] = useState({
//         isOpen: false,
//         imageIndex: null,
//     });
//     const sliderRef = useRef(null);

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         beforeChange: (current, next) => setCurrentSlide(next),
//     };

//     const handleFullScreenOpen = (imageIndex) => {
//         setIsFullScreen({ isOpen: true, imageIndex });
//     };

//     const handleCloseFullScreen = () => {
//         setIsFullScreen({ isOpen: false, imageIndex: null });
//     };

//     const goToSlide = (index) => {
//         sliderRef.current.slickGoTo(index);
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext();
//     };

//     return (
//         <>
//             <div className="relative bg-gray-100">
//                 {/* Основной слайдер */}
//                 <div className="relative">
//                     <Slider ref={sliderRef} {...sliderSettings}>
//                         {campuses[campusIndex].images.map((image, index) => (
//                             <div key={index} className="relative">
//                                 <div className="relative h-[300px] md:h-[450px]">
//                                     <Image
//                                         src={image}
//                                         alt={`${campuses[campusIndex].title} Slide ${index + 1}`}
//                                         fill
//                                         className="object-cover"
//                                         crossOrigin="anonymous"
//                                     />
//                                 </div>

//                                 {/* Кнопка для увеличения изображения */}
//                                 <button
//                                     onClick={() => handleFullScreenOpen(index)}
//                                     className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
//                                     aria-label="Открыть в полном размере"
//                                 >
//                                     <Maximize className="w-5 h-5 text-gray-800" />
//                                 </button>
//                             </div>
//                         ))}
//                     </Slider>

//                     {/* Кнопки для навигации */}
//                     <button
//                         onClick={goToPrev}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
//                         aria-label="Предыдущее изображение"
//                     >
//                         <ChevronLeft className="w-5 h-5 text-gray-800" />
//                     </button>

//                     <button
//                         onClick={goToNext}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
//                         aria-label="Следующее изображение"
//                     >
//                         <ChevronRight className="w-5 h-5 text-gray-800" />
//                     </button>
//                 </div>

//                 {/* Миниатюры изображений */}
//                 <div className="py-3 px-4 flex space-x-2 overflow-x-auto scrollbar-hide">
//                     {campuses[campusIndex].images.map((image, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${currentSlide === index ? "ring-2 ring-[#5f1464] opacity-100" : "opacity-60 hover:opacity-100"
//                                 }`}
//                         >
//                             <div className="relative w-16 h-16">
//                                 <Image
//                                     src={image}
//                                     alt={`Миниатюра ${index + 1}`}
//                                     fill
//                                     className="object-cover"
//                                     crossOrigin="anonymous"
//                                 />
//                             </div>
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Модальное окно для просмотра в полном размере */}
//             {isFullScreen.isOpen && (
//                 <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4">
//                     <div className="relative w-full max-w-6xl">
//                         {/* Кнопка закрытия */}
//                         <button
//                             onClick={handleCloseFullScreen}
//                             className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60 transition-colors"
//                             aria-label="Закрыть"
//                         >
//                             <X className="w-6 h-6 text-white" />
//                         </button>

//                         {/* Основное изображение */}
//                         <div className="w-full h-[70vh] md:h-[80vh] relative">
//                             <Image
//                                 src={campuses[campusIndex].images[isFullScreen.imageIndex]}
//                                 alt={campuses[campusIndex].title}
//                                 fill
//                                 className="object-contain"
//                                 crossOrigin="anonymous"
//                             />
//                         </div>

//                         {/* Навигация по изображениям в фуллскрине */}
//                         <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm p-4 text-white">
//                             <div className="flex justify-between items-center">
//                                 <button
//                                     onClick={() => setIsFullScreen(prev => ({
//                                         ...prev,
//                                         imageIndex: prev.imageIndex > 0
//                                             ? prev.imageIndex - 1
//                                             : campuses[campusIndex].images.length - 1
//                                     }))}
//                                     className="p-2 rounded-full hover:bg-white/20 transition-colors"
//                                     aria-label="Предыдущее изображение"
//                                 >
//                                     <ChevronLeft className="w-6 h-6" />
//                                 </button>

//                                 <div className="text-sm">
//                                     <ImageIcon className="w-4 h-4 inline-block mr-1" />
//                                     {isFullScreen.imageIndex + 1} / {campuses[campusIndex].images.length}
//                                 </div>

//                                 <button
//                                     onClick={() => setIsFullScreen(prev => ({
//                                         ...prev,
//                                         imageIndex: prev.imageIndex < campuses[campusIndex].images.length - 1
//                                             ? prev.imageIndex + 1
//                                             : 0
//                                     }))}
//                                     className="p-2 rounded-full hover:bg-white/20 transition-colors"
//                                     aria-label="Следующее изображение"
//                                 >
//                                     <ChevronRight className="w-6 h-6" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// app/components/CampusSlider.jsx
"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, X, Maximize, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function CampusSlider({ campuses, campusIndex }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState({
        isOpen: false,
        imageIndex: null,
    });
    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const handleFullScreenOpen = (imageIndex) => {
        setIsFullScreen({ isOpen: true, imageIndex });
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen({ isOpen: false, imageIndex: null });
    };

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <div className="relative bg-gray-100">
                {/* Основной слайдер */}
                <div className="relative">
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {campuses[campusIndex].images.map((image, index) => (
                            <div key={index} className="relative">
                                <div className="relative h-[300px] md:h-[450px]">
                                    <Image
                                        src={image}
                                        alt={`${campuses[campusIndex].title} Slide ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        crossOrigin="anonymous"
                                    />
                                </div>

                                {/* Кнопка для увеличения изображения */}
                                <button
                                    onClick={() => handleFullScreenOpen(index)}
                                    className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                                    aria-label="Открыть в полном размере"
                                >
                                    <Maximize className="w-5 h-5 text-gray-800" />
                                </button>
                            </div>
                        ))}
                    </Slider>

                    {/* Кнопки для навигации */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                        aria-label="Предыдущее изображение"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                        aria-label="Следующее изображение"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                </div>

                {/* Миниатюры изображений */}
                <div className="py-3 px-4 flex space-x-2 overflow-x-auto scrollbar-hide">
                    {campuses[campusIndex].images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${currentSlide === index ? "ring-2 ring-[#5f1464] opacity-100" : "opacity-60 hover:opacity-100"
                                }`}
                        >
                            <div className="relative w-16 h-16">
                                <Image
                                    src={image}
                                    alt={`Миниатюра ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    crossOrigin="anonymous"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Модальное окно для просмотра в полном размере */}
            {isFullScreen.isOpen && (
                <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl">
                        {/* Кнопка закрытия */}
                        <button
                            onClick={handleCloseFullScreen}
                            className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60 transition-colors"
                            aria-label="Закрыть"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Стилизованное изображение с маской для округления углов */}
                        <div className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden rounded-2xl" style={{ maskImage: 'radial-gradient(white, black)' }}>
                            <Image
                                src={campuses[campusIndex].images[isFullScreen.imageIndex]}
                                alt={campuses[campusIndex].title}
                                fill
                                className="object-contain"
                                crossOrigin="anonymous"
                            />
                        </div>

                        {/* Навигация по изображениям в фуллскрине */}
                        <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm p-4 text-white">
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => setIsFullScreen(prev => ({
                                        ...prev,
                                        imageIndex: prev.imageIndex > 0
                                            ? prev.imageIndex - 1
                                            : campuses[campusIndex].images.length - 1
                                    }))}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="Предыдущее изображение"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <div className="text-sm">
                                    <ImageIcon className="w-4 h-4 inline-block mr-1" />
                                    {isFullScreen.imageIndex + 1} / {campuses[campusIndex].images.length}
                                </div>

                                <button
                                    onClick={() => setIsFullScreen(prev => ({
                                        ...prev,
                                        imageIndex: prev.imageIndex < campuses[campusIndex].images.length - 1
                                            ? prev.imageIndex + 1
                                            : 0
                                    }))}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="Следующее изображение"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}