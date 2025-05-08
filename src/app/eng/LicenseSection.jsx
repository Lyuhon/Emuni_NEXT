// LicenseSection.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Animations
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const LicenseSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // License documents
    const licenses = [
        {
            id: 1,
            title: "State License",
            src: "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/liczenziya-novaya_page-0001-min.jpg", // Replace with the real path
            alt: "License for educational activities"
        },
        {
            id: 2,
            title: "State License",
            src: "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/liczenziya-novaya_page-0002-min.jpg", // Replace with the real path
            alt: "License for educational activities"
        },
        {
            id: 3,
            title: "State License",
            src: "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/liczenziya-novaya_page-0003-min.jpg", // Replace with the real path
            alt: "License for educational activities"
        }
    ];

    // Function to open modal with enlarged image
    const openModal = (license) => {
        setSelectedImage(license);
    };

    // Function to close modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Gradient purple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6b0e55] to-[#450940] z-0"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-64 bg-[#8f3178] opacity-20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-[#4d0a3f] opacity-20 blur-3xl -z-10"></div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#8f3178] opacity-10"></div>
            <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#4d0a3f] opacity-10"></div>

            {/* Grid */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" className="absolute top-0 left-0">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>

            {/* Floating elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-4 h-12 bg-white opacity-20 rounded-full"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

            <motion.div
                className="absolute top-1/2 right-1/4 w-16 h-3 bg-white opacity-10 rounded-full transform rotate-45"
                animate={{
                    rotate: [45, 60, 45]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            ></motion.div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 md:gap-12">

                    {/* Right column with slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[40%]"
                    >
                        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl relative">
                            {/* Decorative elements around slider */}

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                // autoplay={{ delay: 5000 }}
                                loop={true}
                                className="license-swiper"
                            >
                                {licenses.map((license) => (
                                    <SwiperSlide key={license.id}>
                                        <div
                                            className="relative cursor-pointer group"
                                            onClick={() => openModal(license)}
                                        >
                                            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
                                                <Image
                                                    src={license.src}
                                                    alt={license.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>


                    {/* Left column with text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[60%] flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Licensed <br />excellence<br />in education
                        </h2>

                        <div className="space-y-6 text-white/90 text-lg">
                            <p>
                                EMU University is officially licensed to provide private educational services. This recognition is granted by the Ministry of Education of the Republic under license number 337775.
                            </p>

                            <p>
                                With this license, EMU University guarantees that its curriculum, faculty, and educational practices meet the comprehensive requirements necessary to provide an exceptional educational experience to its students.
                            </p>
                        </div>

                    </motion.div>


                </div>
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[20000] p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="relative md:max-w-[30vw] w-full bg-white rounded-xl overflow-hidden p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative md:h-[70vh] h-[60vh]">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            {/* <h3 className="text-xl font-bold text-[#631463] mb-2">{selectedImage.title}</h3> */}
                            <h3 className="text-xl font-bold text-[#6b0e55] mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-600">{selectedImage.alt}</p>
                        </div>
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                            onClick={closeModal}
                        >
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6b0e55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Add styles for slider */}
            <style jsx global>{`
                .license-swiper .swiper-button-next,
                .license-swiper .swiper-button-prev {
                    color: #6b0e55;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .license-swiper .swiper-button-next:after,
                .license-swiper .swiper-button-prev:after {
                    font-size: 18px;
                }
                
                .license-swiper .swiper-button-next:hover,
                .license-swiper .swiper-button-prev:hover {
                    background: #f9eef5;
                }
            `}</style>
        </section>
    );
};

export default LicenseSection;