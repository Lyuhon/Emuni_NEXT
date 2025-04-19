// // app/campuses/page.jsx
// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick"; // Библиотека для слайдера
// import "slick-carousel/slick/slick.css"; // Стили для react-slick
// import "slick-carousel/slick/slick-theme.css"; // Тема для react-slick
// import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
// import Image from "next/image"; // Импорт Image из Next.js

// export const revalidate = 60;

// export default function CampusesPage() {
//     // Данные для кампусов (твои изображения)
//     const campuses = [
//         {
//             title: "Business and Social School Campus",
//             images: [
//                 "https://emuni.uz/wp-content/uploads/2024/05/img_9853-2-min.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
//             ],
//             location: "Улица Мукими 7/1, Ташкент, Узбекистан",
//             phone: "+998(78) 147-00-07",
//             mapUrl: "https://www.google.com/maps?q=Chinaz,+Buzukur+St,+42-a",
//         },
//         {
//             title: "Medical School Campus",
//             images: [
//                 "https://emuni.uz/wp-content/uploads/2024/05/black_cream_cutout_flowers_staff_wanted_sign_a2_landscape_poster-min.png",
//                 "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
//                 "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
//             ],
//             location: "Улица Мукими 7/1, Ташкент, Узбекистан",
//             phone: "+998(78) 147-00-07",
//             mapUrl: "https://www.google.com/maps?q=Muhammad+St+7/1,+Tashkent",
//         },
//     ];

//     const [isFullScreen, setIsFullScreen] = useState({
//         isOpen: false,
//         campusIndex: null,
//         imageIndex: null,
//     });

//     // Настройки для react-slick
//     const sliderSettings = {
//         dots: true, // Буллеты внизу
//         infinite: true, // Бесконечная прокрутка
//         speed: 500, // Скорость анимации (в мс)
//         slidesToShow: 1, // Один слайд за раз
//         slidesToScroll: 1, // Прокручиваем по одному слайду
//         arrows: false, // Убираем стандартные стрелки react-slick, используем свои
//         swipe: false, // Запрещаем drag-and-drop
//         touchMove: false, // Запрещаем касание для перетаскивания
//         afterChange: (index) => console.log("Slide changed to:", index), // Для отслеживания индекса
//         appendDots: (dots) => (
//             <div className="mt-6 flex justify-center space-x-2">{dots}</div>
//         ),
//         customPaging: (i) => (
//             <button
//                 className="w-200 h-200 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md"
//                 onClick={() => handleBulletClick(0, i)}
//             >
//                 <Image
//                     src={campuses[0].images[i]} // Для Business Campus (индекс 0)
//                     alt={`${campuses[0].title} Preview ${i + 1}`}
//                     width={200} // Размеры буллетов 200x200
//                     height={200}
//                     className="w-full h-full object-cover"
//                     crossOrigin="anonymous" // Добавлено для решения CORS
//                 />
//             </button>
//         ),
//     };

//     const sliderSettingsMedical = {
//         ...sliderSettings,
//         customPaging: (i) => (
//             <button
//                 className="w-200 h-200 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md"
//                 onClick={() => handleBulletClick(1, i)}
//             >
//                 <Image
//                     src={campuses[1].images[i]} // Для Medical Campus (индекс 1)
//                     alt={`${campuses[1].title} Preview ${i + 1}`}
//                     width={200} // Размеры буллетов 200x200
//                     height={200}
//                     className="w-full h-full object-cover"
//                     crossOrigin="anonymous" // Добавлено для решения CORS
//                 />
//             </button>
//         ),
//     };

//     const handleBulletClick = (campusIndex, slideIndex) => {
//         if (campusIndex === 0) setBusinessSlide(slideIndex);
//         else setMedicalSlide(slideIndex);
//     };

//     const handleFullScreen = (campusIndex, imageIndex) => {
//         setIsFullScreen({ isOpen: true, campusIndex, imageIndex });
//     };

//     const handleCloseFullScreen = () => {
//         setIsFullScreen({ isOpen: false, campusIndex: null, imageIndex: null });
//     };

//     const CustomPrevArrow = ({ onClick }) => (
//         <button
//             onClick={onClick}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors z-10"
//         >
//             <ChevronLeft className="w-6 h-6 text-white" />
//         </button>
//     );

//     const CustomNextArrow = ({ onClick }) => (
//         <button
//             onClick={onClick}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors z-10"
//         >
//             <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//     );

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* HERO Section */}
//             <div className="bg-white relative overflow-hidden">
//                 <div className="absolute inset-0">
//                     <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
//                     <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
//                     <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
//                 </div>

//                 <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
//                     <div className="relative z-10 w-full text-center">
//                         <div className="relative inline-block">
//                             <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
//                             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                                 Наши
//                                 <br />
//                                 <span className="text-[#5f1464] relative">
//                                     кампусы
//                                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
//                                 </span>
//                             </h1>
//                         </div>
//                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                             Откройте для себя наши современные кампусы
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
//                 {/* Campuses Layout */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Business and Social School Campus */}
//                     <div>
//                         <h2 className="text-2xl font-bold text-[#5f1464] mb-6 text-center">
//                             {campuses[0].title}
//                         </h2>
//                         <div className="relative mb-6">
//                             <Slider
//                                 {...sliderSettings}
//                                 prevArrow={<CustomPrevArrow />}
//                                 nextArrow={<CustomNextArrow />}
//                             >
//                                 {campuses[0].images.map((image, index) => (
//                                     <div
//                                         key={index}
//                                         className="w-full cursor-pointer transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
//                                         onClick={() => handleFullScreen(0, index)}
//                                     >
//                                         <Image
//                                             src={image}
//                                             alt={`${campuses[0].title} Slide ${index + 1}`}
//                                             width={1200} // Размеры слайдера 1200x1200
//                                             height={1200}
//                                             className="w-full h-[250px] md:h-[400px] object-cover"
//                                             crossOrigin="anonymous" // Для решения CORS
//                                         />
//                                         <div className="absolute bottom-4 left-4 text-white">
//                                             <h3 className="text-xl font-bold">{campuses[0].title}</h3>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-md p-6 mt-[40px]">
//                             <p className="text-gray-700">
//                                 <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2">
//                                     <MapPin className="w-3 h-3 inline-block mr-1" />
//                                     {campuses[0].location}
//                                 </span>
//                             </p>
//                             <p className="text-gray-700 mt-2">
//                                 <a
//                                     href={`tel:${campuses[0].phone}`}
//                                     className="text-[#5f1464] hover:underline"
//                                 >
//                                     {campuses[0].phone}
//                                 </a>
//                             </p>
//                             <div className="mt-4">
//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU0sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s"
//                                     width="100%"
//                                     height="300"
//                                     style={{ border: 0 }}
//                                     loading="lazy" // Ленивая загрузка
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                     className="rounded-lg shadow-md"
//                                 ></iframe>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Medical School Campus */}
//                     <div>
//                         <h2 className="text-2xl font-bold text-[#5f1464] mb-6 text-center">
//                             {campuses[1].title}
//                         </h2>
//                         <div className="relative mb-6">
//                             <Slider
//                                 {...sliderSettingsMedical}
//                                 prevArrow={<CustomPrevArrow />}
//                                 nextArrow={<CustomNextArrow />}
//                             >
//                                 {campuses[1].images.map((image, index) => (
//                                     <div
//                                         key={index}
//                                         className="w-full cursor-pointer transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
//                                         onClick={() => handleFullScreen(1, index)}
//                                     >
//                                         <Image
//                                             src={image}
//                                             alt={`${campuses[1].title} Slide ${index + 1}`}
//                                             width={1200} // Размеры слайдера 1200x1200
//                                             height={1200}
//                                             className="w-full h-[250px] md:h-[400px] object-cover"
//                                             crossOrigin="anonymous" // Для решения CORS
//                                         />
//                                         <div className="absolute bottom-4 left-4 text-white">
//                                             <h3 className="text-xl font-bold">{campuses[1].title}</h3>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-md p-6 mt-[40px]">
//                             <p className="text-gray-700">
//                                 <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2">
//                                     <MapPin className="w-3 h-3 inline-block mr-1" />
//                                     {campuses[1].location}
//                                 </span>
//                             </p>
//                             <p className="text-gray-700 mt-2">
//                                 <a
//                                     href={`tel:${campuses[1].phone}`}
//                                     className="text-[#5f1464] hover:underline"
//                                 >
//                                     {campuses[1].phone}
//                                 </a>
//                             </p>
//                             <div className="mt-4">
//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU4sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s"
//                                     width="100%"
//                                     height="300"
//                                     style={{ border: 0 }}
//                                     loading="lazy" // Ленивая загрузка
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                     className="rounded-lg shadow-md"
//                                 ></iframe>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Full Screen Modal */}
//             {isFullScreen.isOpen && (
//                 <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//                     <div className="relative w-full max-w-4xl h-[40vh] md:h-[fit-content] bg-white rounded-xl overflow-hidden">
//                         <button
//                             onClick={handleCloseFullScreen}
//                             className="absolute top-4 right-4 text-white bg-[#5f1464] p-2 rounded-full hover:bg-[#7a407f] transition-colors"
//                         >
//                             <X className="w-6 h-6" />
//                         </button>
//                         <Image
//                             src={
//                                 campuses[isFullScreen.campusIndex].images[isFullScreen.imageIndex]
//                             }
//                             alt={campuses[isFullScreen.campusIndex].title}
//                             width={1200} // Размеры полноэкранного изображения
//                             height={1200}
//                             className="w-full h-full object-cover"
//                             crossOrigin="anonymous" // Для решения CORS
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
//                             <h2 className="text-2xl font-bold">
//                                 {campuses[isFullScreen.campusIndex].title}
//                             </h2>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Custom Styles */}
//             <style jsx global>{`
//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.7;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .slick-slide {
//           transition: transform 0.5s ease-in-out; /* Анимация для слайдов */
//         }
//         .slick-dots li button:before {
//           color: transparent !important; /* Убираем стандартные точки */
//         }
//         .slick-dots li.slick-active button {
//           border: 2px solid #5f1464 !important; /* Активная точка с рамкой */
//         }
//       `}</style>
//         </div>
//     );
// }



// app/campus/page.jsx
import React from "react";
import CampusSlider from "./CampusSlider";
import CampusContactInfo from "./CampusContactInfo";

export const revalidate = 60; // ISR: обновление каждые 60 секунд

export default async function CampusesPage() {
    // Эмуляция данных (можно заменить на fetch с API)
    const campuses = [
        {
            title: "Business and Social School Campus",
            images: [
                "https://emuni.uz/wp-content/uploads/2024/05/img_9853-2-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
            ],
            location: "Улица Мукими 7/1, Ташкент, Узбекистан",
            phone: "+998(78) 147-00-07",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU0sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s",
        },
        {
            title: "Medical School Campus",
            images: [
                "https://emuni.uz/wp-content/uploads/2024/05/black_cream_cutout_flowers_staff_wanted_sign_a2_landscape_poster-min.png",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
            ],
            location: "Улица Мукими 7/1, Ташкент, Узбекистан",
            phone: "+998(78) 147-00-07",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU4sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Bizning
                                <br />
                                <span className="text-[#5f1464] relative">
                                    kampuslarimiz
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Zamonaviy kampuslarimizni kashf eting
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Campuses Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Business and Social School Campus */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#5f1464] mb-6 text-center">
                            {campuses[0].title}
                        </h2>
                        <CampusSlider
                            campuses={campuses}
                            campusIndex={0}
                        />
                        <CampusContactInfo
                            title={campuses[0].title}
                            location={campuses[0].location}
                            phone={campuses[0].phone}
                            mapUrl={campuses[0].mapUrl}
                        />
                    </div>

                    {/* Medical School Campus */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#5f1464] mb-6 text-center">
                            {campuses[1].title}
                        </h2>
                        <CampusSlider
                            campuses={campuses}
                            campusIndex={1}
                        />
                        <CampusContactInfo
                            title={campuses[1].title}
                            location={campuses[1].location}
                            phone={campuses[1].phone}
                            mapUrl={campuses[1].mapUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}