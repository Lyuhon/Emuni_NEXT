'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ConsultationBlock = () => {
    // State for storing form data
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    // State for submission notification
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handler for form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to send data to the server
        console.log('Form submitted:', formData);
        // Show notification about successful submission
        setIsSubmitted(true);
        // Reset state after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '' });
        }, 3000);
    };

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">
                    {/* Left part - image */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/contacts-banner-2.webp" // Replace with your image
                            alt="Specialist consultation"
                            fill
                            className="object-cover object-left-center"
                        />
                        {/* Gradient overlay for better text readability on the image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6b0e55]/30 to-transparent"></div>

                        {/* Decorative elements - aligned at the top and horizontally centered */}
                        <div className="hidden absolute inset-x-0 top-8 flex justify-center">
                            <div className="p-5 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg w-full max-w-md mx-6 border-l-4 border-[#6b0e55] transform -rotate-1">
                                <div className="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#6b0e55] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <h3 className="text-lg md:text-xl font-bold text-[#6b0e55] mb-1">Professional consultation for applicants</h3>
                                    <p className="text-gray-600 text-sm">We'll answer all your questions about admission</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right part - form */}
                    <div className="w-full md:w-1/2 p-8 md:p-8 bg-white">
                        <div className="max-w-md mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Get a free consultation</h2>
                            <div className="h-1 w-20 bg-[#6b0e55] mb-6"></div>

                            <p className="text-gray-600 mb-8">
                                Leave your contact information, and our specialist will contact you shortly to answer all your questions.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
                                >
                                    <p className="font-medium">Thank you for your request!</p>
                                    <p className="text-sm">We will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] transition-colors"
                                            placeholder="+998 (__) ___-__-__"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8f3178] transition-colors duration-300"
                                    >
                                        Submit request
                                    </button>
                                </form>
                            )}

                            {/* Блок с Телеграм */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="inline text-gray-600 mb-3 mr-[10px]">
                                    If it is more convenient for you, you can write to us in Telegram for consultation:
                                </p>
                                <a
                                    href="https://t.me/your_telegram" // Замените на вашу ссылку
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline text-[#6b0e55] font-medium hover:underline"
                                >
                                    Write to Telegram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationBlock;