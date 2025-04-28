// // GrantsSlider.js
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';

// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 }
//     }
// };

// const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2
//         }
//     }
// };

// const GrantsSlider = () => {
//     // Animation states
//     const [position, setPosition] = useState(0);
//     const [glowIntensity, setGlowIntensity] = useState(0);
//     const [pulseSize, setPulseSize] = useState(1);

//     useEffect(() => {
//         // Angular gradient
//         const interval = setInterval(() => {
//             setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
//         }, 40);

//         // Glow pulsation
//         const glowInterval = setInterval(() => {
//             setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
//         }, 50);

//         // Size pulsation
//         const pulseInterval = setInterval(() => {
//             setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
//         }, 50);

//         return () => {
//             clearInterval(interval);
//             clearInterval(glowInterval);
//             clearInterval(pulseInterval);
//         };
//     }, []);

//     // Grants data
//     // Grants data
//     const grants = [
//         { id: 1, name: "Tibbiyot akusherlik ishi", direction: "Davolash fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-1.webp" },
//         { id: 2, status: 'check', name: "Asqarov Mirazam", direction: "Farmatsiay 2-kurs", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-2.webp" },
//         { id: 3, name: "Komiljonov Avazbek", direction: "Stomatologiya 3-kurs", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-3.webp" },
//         { id: 4, name: "Pediatriya", direction: "Davolash fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-5.webp" },
//         { id: 5, status: 'check', name: "Farxodova Maryam", direction: "Stomatologiya 3-kurs", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-4.webp" },
//         { id: 6, name: "Biotibbiyot muhandisligi", direction: "Muhandislik fakulteti", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-6.webp" },
//         { id: 7, name: "Tibbiyot psixologiyasi", direction: "Psixologiya fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-7.webp" },
//         { id: 8, name: "Stomatologiya", direction: "Stomatologiya fakulteti", percentage: "50%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-8.webp" },
//         { id: 9, name: "Tibbiy profilaktika", direction: "Profilaktika fakulteti", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-9.webp" },
//         { id: 10, name: "Biotexnologiya", direction: "Muhandislik fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-10.webp" },
//         { id: 11, name: "Umumiy amaliyot hamshiraligi", direction: "Davolash fakulteti", percentage: "50%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-11.webp" },
//         { id: 12, name: "Laboratoriya diagnostikasi", direction: "Diagnostika fakulteti", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-12.webp" },
//         { id: 13, name: "Xalqaro tibbiyot", direction: "Xalqaro fakultet", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-13.webp" },
//         { id: 14, name: "Sport tibbiyoti", direction: "Sport fakulteti", percentage: "50%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-14.webp" },
//         { id: 15, name: "Neyrotibbiyot", direction: "Davolash fakulteti", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-15.webp" },
//         { id: 16, name: "Yuqumli kasalliklar", direction: "Davolash fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-16.webp" },
//         { id: 17, name: "Travmatologiya-ortopediya", direction: "Davolash fakulteti", percentage: "50%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-17.webp" },
//         { id: 18, name: "Kardiologiya", direction: "Davolash fakulteti", percentage: "75%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-18.webp" },
//         { id: 19, status: 'check', name: "Maxmudjanov Ataxan", direction: "Stomatologiya 3-kurs", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-19.webp" },
//         { id: 20, name: "Onkologiya", direction: "Davolash fakulteti", percentage: "50%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-20.webp" },
//         { id: 21, status: 'check', name: "Yugay Alina", direction: "Stomatologiya 3-kurs", percentage: "25%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-21.webp" },
//         { id: 22, name: "Nuklear tibbiyot", direction: "Davolash fakulteti", percentage: "100%", image: "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-22.webp" },
//     ];

//     // Данные для блока 200+ Ta'sischilar granti egalar
//     const testimonialImages = [
//         "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-1.webp",
//         "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-2.webp",
//         "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-3.webp",
//         "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-4.webp",
//         "http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/grants_item-5.webp"
//     ];

//     return (
//         <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeIn}
//             className="py-6 md:pt-10 md:pb-10 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#f7eef7] to-white"
//         >
//             {/* Decorative elements */}
//             <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
//             <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8a3c8a] opacity-5 blur-3xl"></div>
//             <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>

//             <div className="max-w-screen-xl container mx-auto relative z-10">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center max-w-3xl mx-auto mb-16"
//                 >
//                     <div className="inline-block mb-4">
//                         <div className="h-1 w-20 bg-gradient-to-r from-[#dbb845] to-[#f7e282] rounded-full mx-auto"></div>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Grantlar va moliyalashtirish
//                     </h2>
//                     <p className="text-gray-600 text-lg">
//                         EMU Universitetida 2025-2026 o'quv yili uchun 5 200 000 000 so'mlik grantlar ajratildi
//                     </p>
//                 </motion.div>

//                 <div className="relative">
//                     <Swiper
//                         modules={[Navigation, Autoplay, EffectCoverflow]}
//                         effect="coverflow"
//                         grabCursor={true}
//                         centeredSlides={true}
//                         slidesPerView={1.5}
//                         initialSlide={4}
//                         breakpoints={{
//                             640: { slidesPerView: 2.5 },
//                             768: { slidesPerView: 3 },
//                             1024: { slidesPerView: 5 }
//                         }}
//                         coverflowEffect={{
//                             rotate: 0,
//                             stretch: 0,
//                             depth: 100,
//                             modifier: 1,
//                             slideShadows: false,
//                             scale: 0.9
//                         }}
//                         navigation={{
//                             nextEl: '.swiper-button-next-grants',
//                             prevEl: '.swiper-button-prev-grants',
//                         }}
//                         autoplay={{
//                             delay: 300000,
//                             disableOnInteraction: false,
//                         }}
//                         loop={true}
//                         className="grants-swiper py-10"
//                     >
//                         {grants.map((grant) => (
//                             <SwiperSlide key={grant.id} className="transition-all duration-300">
//                                 <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 my-1 mb-2 mx-2 md:mx-4 h-full select-none">
//                                     {/* Метки "Grant" и процент в углах без поворота */}
//                                     <div className="absolute top-3 left-3 z-10">
//                                         <div className="bg-gradient-to-r from-[#f7e282] to-[#dbb845] text-[#631463] font-bold text-xs md:text-sm py-1 px-3 rounded-full shadow-md">
//                                             Grant
//                                         </div>
//                                     </div>
//                                     <div className="absolute top-3 right-3 z-10">
//                                         <div className="bg-gradient-to-r from-[#f7e282] to-[#dbb845] text-[#631463] font-bold text-xs md:text-sm py-1 px-3 rounded-full shadow-md">
//                                             {grant.percentage}
//                                         </div>
//                                     </div>

//                                     {/* Изображение с очень легким затемнением */}
//                                     <div className="relative h-56 md:h-64 rounded-t-xl overflow-hidden">
//                                         <Image
//                                             src={grant.image}
//                                             alt={grant.name}
//                                             width={300}
//                                             height={300}
//                                             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                                             draggable="false"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-[#631463]/20 to-transparent"></div>
//                                     </div>

//                                     {/* Информация */}
//                                     <div className="p-4 bg-white rounded-b-xl">
//                                         <h3 className="text-lg font-bold text-[#631463] mb-2 line-clamp-2">{grant.name}</h3>
//                                         <p className="text-sm text-gray-600 line-clamp-1">{grant.direction}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom navigation buttons */}
//                     <div
//                         style={{ border: '2px solid #f7eef7', background: '#883088' }}
//                         className="swiper-button-prev-grants absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#631463] rounded-full flex items-center justify-center cursor-pointer"
//                     >
//                         <svg
//                             className="w-5 h-5 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                         </svg>
//                     </div>
//                     <div
//                         style={{ border: '2px solid #f7eef7', background: '#883088' }}
//                         className="swiper-button-next-grants absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#631463] rounded-full flex items-center justify-center cursor-pointer"
//                     >
//                         <svg
//                             className="w-5 h-5 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                         </svg>
//                     </div>
//                 </div>

//                 {/* Новый блок "200+ Ta'sischilar granti egalar" */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="flex items-center justify-center mt-4 md:mt-8 p-4 md:p-6"
//                 >
//                     {/* Изображения студентов и галочка */}
//                     <div className="flex items-center -space-x-4 mr-4 md:mr-6">
//                         {testimonialImages.map((img, index) => (
//                             <div
//                                 key={index}
//                                 className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden"
//                             >
//                                 <Image
//                                     src={img}
//                                     alt={`Student ${index + 1}`}
//                                     width={48}
//                                     height={48}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         ))}
//                         {/* Иконка галочки */}
//                         <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#DDBB4A] text-white border-2 border-white">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5 md:h-6 md:w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M5 13l4 4L19 7"
//                                 />
//                             </svg>
//                         </div>
//                     </div>

//                     {/* Текст */}
//                     <h3 className="text-lg md:text-xl font-bold text-gray-800">
//                         200+ Ta'sischilar granti egalar
//                     </h3>
//                 </motion.div>
//             </div>

//             <style jsx global>{`
//                 .grants-swiper {
//                     user-select: none;
//                 }

//                 .grants-swiper .swiper-slide {
//                     transition: all 0.3s ease;
//                     filter: blur(0);
//                     opacity: 0.8;
//                     transform: scale(0.9);
//                     pointer-events: none;
//                 }

//                 .grants-swiper .swiper-slide-active {
//                     pointer-events: auto;
//                 }

//                 /* Стили для десктопа */
//                 @media (min-width: 768px) {
//                     .grants-swiper .swiper-slide-active {
//                         opacity: 1;
//                         filter: blur(0);
//                         transform: scale(1);
//                     }

//                     .grants-swiper .swiper-slide-prev,
//                     .grants-swiper .swiper-slide-next {
//                         opacity: 0.7;
//                         filter: blur(1px);
//                         transform: scale(0.85);
//                     }

//                     .grants-swiper .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
//                         opacity: 0.5;
//                         filter: blur(2px);
//                         transform: scale(0.8);
//                     }
//                 }

//                 /* Стили для мобильных устройств */
//                 @media (max-width: 767px) {
//                     .grants-swiper .swiper-slide-active {
//                         opacity: 1;
//                         filter: blur(0);
//                         transform: scale(0.92);
//                     }

//                     .grants-swiper .swiper-slide-prev,
//                     .grants-swiper .swiper-slide-next {
//                         opacity: 0.7;
//                         filter: blur(1px);
//                         transform: scale(0.85);
//                         visibility: visible;
//                     }
//                 }
//             `}</style>
//         </motion.section>
//     );
// };

// export default GrantsSlider;



// GrantsSlider.js
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const GrantsSlider = () => {
    // Animation states
    const [position, setPosition] = useState(0);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    // State for grants data and testimonial images
    const [grants, setGrants] = useState([]);
    const [testimonialImages, setTestimonialImages] = useState([]);
    const [headerInfo, setHeaderInfo] = useState({
        title: "Гранты и финансирование",
        description: "Университет EMU выделил 5 200 000 000 сумов в виде грантов на 2025-2026 учебный год",
        grantsCount: "200+ учредителей-грантодержателей"
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Angular gradient
        const interval = setInterval(() => {
            setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
        }, 40);

        // Glow pulsation
        const glowInterval = setInterval(() => {
            setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
        }, 50);

        // Size pulsation
        const pulseInterval = setInterval(() => {
            setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(glowInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81515');
                const data = await response.json();

                // Extract textual information
                const textInfo = data.acf.tekstovaya_informacziya;
                setHeaderInfo({
                    title: textInfo.zagolovok_uz || "Гранты и финансирование",
                    description: textInfo.opisanie_uz || "Университет EMU выделил 5 200 000 000 сумов в виде грантов на 2025-2026 учебный год",
                    grantsCount: textInfo.kolvo_grantoderzhatelej_uz || "200+ учредителей-грантодержателей"
                });

                // Process grants data
                const grantsData = data.acf.grantnik || [];

                // Filter out items without images and map to required format
                const processedGrants = grantsData
                    .filter(grant => grant.fotografiya && grant.fotografiya.url)
                    .map((grant, index) => ({
                        id: index + 1,
                        name: grant.imya_uz || '',
                        direction: grant.napravlenie_uz || '',
                        percentage: `${grant.proczent_granta || 0}%`,
                        image: grant.fotografiya.url || '',
                        status: 'check'  // Assuming all grants from API have 'check' status
                    }));

                setGrants(processedGrants);

                // Set testimonial images (first 5 grant images)
                const firstFiveImages = processedGrants
                    .slice(0, 5)
                    .map(grant => grant.image);
                setTestimonialImages(firstFiveImages);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#631463]"></div>
            </div>
        );
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="py-6 md:pt-10 md:pb-10 px-4 relative overflow-hidden bg-gradient-to-b from-white via-[#f7eef7] to-white"
        >
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#631463] opacity-5 blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8a3c8a] opacity-5 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#631463] opacity-15"></div>

            <div className="max-w-screen-xl container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block mb-4">
                        <div className="h-1 w-20 bg-gradient-to-r from-[#dbb845] to-[#f7e282] rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {headerInfo.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {headerInfo.description}
                    </p>
                </motion.div>

                {grants.length > 0 && (
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1.5}
                            initialSlide={Math.min(4, Math.floor(grants.length / 2))}
                            breakpoints={{
                                640: { slidesPerView: 2.5 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 }
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                                scale: 0.9
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-grants',
                                prevEl: '.swiper-button-prev-grants',
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="grants-swiper py-10"
                        >
                            {grants.map((grant) => (
                                <SwiperSlide key={grant.id} className="transition-all duration-300">
                                    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 my-1 mb-2 mx-2 md:mx-4 h-full select-none">
                                        {/* Метки "Grant" и процент в углах без поворота */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <div className="bg-gradient-to-r from-[#f7e282] to-[#dbb845] text-[#631463] font-bold text-xs md:text-sm py-1 px-3 rounded-full shadow-md">
                                                Грант
                                            </div>
                                        </div>
                                        <div className="absolute top-3 right-3 z-10">
                                            <div className="bg-gradient-to-r from-[#f7e282] to-[#dbb845] text-[#631463] font-bold text-xs md:text-sm py-1 px-3 rounded-full shadow-md">
                                                {grant.percentage}
                                            </div>
                                        </div>

                                        {/* Изображение с очень легким затемнением */}
                                        <div className="relative h-56 md:h-64 rounded-t-xl overflow-hidden">
                                            <Image
                                                src={grant.image}
                                                alt={grant.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                draggable="false"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#631463]/20 to-transparent"></div>
                                        </div>

                                        {/* Информация */}
                                        <div className="p-4 bg-white rounded-b-xl">
                                            <h3 className="text-lg font-bold text-[#631463] mb-2 line-clamp-2">{grant.name}</h3>
                                            <p className="text-sm text-gray-600 line-clamp-1">{grant.direction}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom navigation buttons */}
                        <div
                            style={{ border: '2px solid #f7eef7', background: '#883088' }}
                            className="swiper-button-prev-grants absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#631463] rounded-full flex items-center justify-center cursor-pointer"
                        >
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </div>
                        <div
                            style={{ border: '2px solid #f7eef7', background: '#883088' }}
                            className="swiper-button-next-grants absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#631463] rounded-full flex items-center justify-center cursor-pointer"
                        >
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                )}

                {/* Новый блок "200+ Ta'sischilar granti egalar" */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center mt-4 md:mt-8 p-4 md:p-6"
                >
                    {/* Изображения студентов и галочка */}
                    <div className="flex items-center -space-x-4 mr-4 md:mr-6">
                        {testimonialImages.map((img, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden"
                            >
                                <Image
                                    src={img}
                                    alt={`Student ${index + 1}`}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        {/* Иконка галочки */}
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#DDBB4A] text-white border-2 border-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Текст */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        {headerInfo.grantsCount}
                    </h3>
                </motion.div>
            </div>

            <style jsx global>{`
                .grants-swiper {
                    user-select: none;
                }
                
                .grants-swiper .swiper-slide {
                    transition: all 0.3s ease;
                    filter: blur(0);
                    opacity: 0.8;
                    transform: scale(0.9);
                    pointer-events: none;
                }
                
                .grants-swiper .swiper-slide-active {
                    pointer-events: auto;
                }
                
                /* Стили для десктопа */
                @media (min-width: 768px) {
                    .grants-swiper .swiper-slide-active {
                        opacity: 1;
                        filter: blur(0);
                        transform: scale(1);
                    }
                    
                    .grants-swiper .swiper-slide-prev,
                    .grants-swiper .swiper-slide-next {
                        opacity: 0.7;
                        filter: blur(1px);
                        transform: scale(0.85);
                    }
                    
                    .grants-swiper .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
                        opacity: 0.5;
                        filter: blur(2px);
                        transform: scale(0.8);
                    }
                }
                
                /* Стили для мобильных устройств */
                @media (max-width: 767px) {
                    .grants-swiper .swiper-slide-active {
                        opacity: 1;
                        filter: blur(0);
                        transform: scale(0.92);
                    }
                    
                    .grants-swiper .swiper-slide-prev,
                    .grants-swiper .swiper-slide-next {
                        opacity: 0.7;
                        filter: blur(1px);
                        transform: scale(0.85);
                        visibility: visible;
                    }
                }
            `}</style>
        </motion.section>
    );
};

export default GrantsSlider;