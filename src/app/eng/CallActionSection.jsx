'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (

        <section>

            <section className="hidden md:block relative w-full md:h-[90vh]">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/web-banner-2-scaled.webp" // Replace with your image path
                        alt="University campus"
                        fill
                        className="object-cover object-center"
                        priority
                        unoptimized
                    />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 h-full flex items-center relative">
                    <div className="bg-[#00000030] backdrop-blur-md p-8 rounded-xl border border-white/20 text-white max-w-xl">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Education that opens doors <span className="text-[#f3c6f3]-">to the future</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
                            Get quality international-level education with internship opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://apply.emuni.uz/eng"
                                className="px-8 py-3 bg-white text-[#6b0e55] font-semibold rounded-lg shadow-lg hover:bg-[#f3c6f3] transition duration-300 flex items-center justify-center"
                            >
                                Apply Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            <a
                                href="https://t.me/emu_universityuz"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center"
                            >
                                Contact Us
                            </a>
                        </div>

                    </div>
                </div>
            </section>





            <section className="md:hidden block relative w-full h-[500px]">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/web-banner-2-scaled.webp"
                        alt="University campus"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center' }}
                        priority
                        unoptimized
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6b0e55]/80 via-[#6b0e55]/60 to-[#6b0e55]/20"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-center relative">
                    <div className="max-w-xl text-center-">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Education <br></br>that opens <span className="text-[#f3c6f3]-"><br></br>doors to the future</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto">
                            Get quality international-level education.
                        </p>

                        <div className="flex flex-col gap-4 w-full">
                            <a
                                href="https://apply.emuni.uz/ru"
                                className="px-8 py-3 bg-white text-[#631463] font-semibold rounded-lg shadow-lg hover:bg-[#f3c6f3] transition duration-300 flex items-center justify-center w-full"
                            >
                                Apply Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            <a
                                href="https://t.me/emu_universityuz"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center w-full"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </section>

    );
};

export default HeroSection;