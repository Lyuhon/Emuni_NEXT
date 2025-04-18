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
        console.log('Форма отправлена:', formData);
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">
                    {/* Левая часть - изображение */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/recall-section.webp" // Замените на ваше изображение
                            alt="Консультация специалиста"
                            fill
                            className="object-cover"
                        />
                        {/* Градиентный оверлей для лучшей читаемости текста на изображении */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#631463]/30 to-transparent"></div>

                        {/* Декоративные элементы */}
                        <div className="absolute bottom-6 left-6 p-4 bg-white/90 rounded-lg shadow-md max-w-xs hidden md:block">
                            <p className="text-[#631463] font-semibold">Профессиональная консультация для абитуриентов</p>
                        </div>
                    </div>

                    {/* Правая часть - форма */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
                        <div className="max-w-md mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Получите бесплатную консультацию</h2>
                            <div className="h-1 w-20 bg-[#631463] mb-6"></div>

                            <p className="text-gray-600 mb-8">
                                Оставьте свои контактные данные, и наш специалист свяжется с вами в ближайшее время, чтобы ответить на все ваши вопросы.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
                                >
                                    <p className="font-medium">Спасибо за заявку!</p>
                                    <p className="text-sm">Мы свяжемся с вами в ближайшее время.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Ваше имя
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#631463] focus:border-[#631463] transition-colors"
                                            placeholder="Введите ваше имя"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Номер телефона
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
                                        Отправить заявку
                                    </button>
                                </form>
                            )}

                            {/* Блок с Телеграм */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-gray-600 mb-3">
                                    Если вам удобнее, вы можете написать нам в Телеграм для получения консультации:
                                </p>
                                <a
                                    href="https://t.me/your_telegram" // Замените на вашу ссылку
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#631463] font-medium hover:underline"
                                >
                                    {/* <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.033-.696-.08l-3.24.815 1.075-3.12c-.668-.602-1.096-1.457-1.096-2.415 0-1.828 1.58-3.313 3.524-3.313 1.942 0 3.524 1.486 3.524 3.313s-1.582 3.313-3.524 3.313h-.567V19.018zm5.034-3.966c.258-.507.398-1.078.398-1.675 0-2.235-1.992-4.05-4.45-4.05s-4.45 1.815-4.45 4.05 1.992 4.05 4.45 4.05c.51 0 .996-.086 1.453-.25l.89.57-2.82 1.115 1.38-3.536.08-.273z" />
                                    </svg> */}
                                    Написать в Телеграм
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