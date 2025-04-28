'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ConsultationBlock = () => {
    // Состояние для хранения данных формы
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    // Состояние для уведомления об отправке
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер
        console.log('Forma yuborildi:', formData);
        // Показываем уведомление об успешной отправке
        setIsSubmitted(true);
        // Сбрасываем состояние через 3 секунды
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '' });
        }, 3000);
    };

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">
                    {/* Левая часть - изображение */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/contacts-banner-2.webp"
                            alt="Mutaxassis bilan maslahatlashish"
                            fill
                            className="object-cover object-left-center"
                        />
                        {/* Градиентный оверлей для лучшей читаемости текста на изображении */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/30 to-transparent"></div>

                        {/* Декоративные элементы */}
                        {/* <div className="hidden absolute top-6 left-6 p-5 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg max-w-xs hidden md:block border-l-4 border-[#631463] transform -rotate-1">
                            <div className="flex items-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#631463] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-bold text-[#631463] mb-1">Abituriyentlar uchun professional maslahat</h3>
                                    <p className="text-gray-600 text-sm">Qabul bo‘yicha barcha savollarga javob beramiz</p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Правая часть - форма */}
                    <div className="w-full md:w-1/2 p-8 md:p-8 bg-white">
                        <div className="max-w-md mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Bepul maslahat oling</h2>
                            <div className="h-1 w-20 bg-[#631463] mb-6"></div>

                            <p className="text-gray-600 mb-8">
                                Kontakt ma’lumotlaringizni qoldiring, va bizning mutaxassisimiz tez orada siz bilan bog‘lanib, barcha savollaringizga javob beradi.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
                                >
                                    <p className="font-medium">Ariza uchun rahmat!</p>
                                    <p className="text-sm">Tez orada siz bilan bog‘lanamiz.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Ismingiz
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#631463] focus:border-[#631463] transition-colors"
                                            placeholder="Ismingizni kiriting"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Telefon raqami
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#631463] focus:border-[#631463] transition-colors"
                                            placeholder="+998 (__) ___-__-__"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#631463] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#7a2a7a] transition-colors duration-300"
                                    >
                                        Ariza yuborish
                                    </button>
                                </form>
                            )}

                            {/* Блок с Телеграм */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="inline text-gray-600 mb-3 mr-[10px]">
                                    Agar sizga qulay bo‘lsa, maslahat olish uchun Telegram’da yozishingiz mumkin:
                                </p>
                                <a
                                    href="https://t.me/your_telegram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline text-[#631463] font-medium hover:underline"
                                >
                                    Telegram’da yozish
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