'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PriceSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    // Данные для одиночных модулей
    const singleModules = [
        {
            id: 1,
            title: 'Английский язык',
            price: '4 500 000',
            hours: 72,
            certificate: true,
        },
        {
            id: 2,
            title: 'Математика',
            price: '4 500 000',
            hours: 72,
            certificate: true,
        },
        {
            id: 3,
            title: 'Химия',
            price: '3 000 000',
            hours: 48,
            certificate: true,
        },
        {
            id: 4,
            title: 'Биология',
            price: '3 000 000',
            hours: 48,
            certificate: true,
        },
    ];

    // Данные для пакетных предложений
    const packages = [
        {
            id: 1,
            title: 'Пакетное предложение №1',
            price: '8 100 000',
            subjects: ['Английский', 'Математика'],
            discount: 10
        },
        {
            id: 2,
            title: 'Пакетное предложение №2',
            price: '9 450 000',
            subjects: ['Английский язык', 'Биология', 'Химия'],
            discount: 10
        },
        {
            id: 3,
            title: 'Пакетное предложение №3',
            price: '5 400 000',
            subjects: ['Биология', 'Химия'],
            discount: 10
        },
        {
            id: 4,
            title: 'Пакетное предложение №4',
            price: '13 500 000',
            subjects: ['Английский', 'Математика', 'Биология', 'Химия'],
            discount: 10
        },
    ];

    return (
        <section className="py-8 md:py-24 px-4 bg-white relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f7eef7] opacity-20 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-[#f7eef7] opacity-15 -z-10"></div>

            <div className="max-w-screen-xl container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                        Стоимость обучения
                    </h2>

                    <p className="text-gray-700 text-lg max-w-4xl mx-auto">
                        Все предметы программы Pre-Foundation делятся на два уровня: <span className="font-semibold">Базовый и Продвинутый</span>. Во время тестирования каждому
                        студенту подбирается индивидуальная программа, состоящая из комбинации модулей соответствующая его текущему
                        уровню знаний и учебным потребностям. Продолжительность каждого модуля составляет 12 недель, что позволяет глубже
                        освоить материал и подготовиться к дальнейшему обучению на уровне бакалавриата.
                    </p>
                </motion.div>

                {/* Одиночные модули */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {singleModules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <p className="text-gray-500 text-sm mb-2">Стоимость каждого модуля</p>

                                <div className="mb-4 bg-[#f7eef7] p-4 rounded-xl text-center">
                                    <h3 className="text-lg font-bold mb-2 text-[#631463]">{module.title}</h3>
                                    <p className="text-2xl font-bold text-gray-800">{module.price} UZS</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full bg-[#f7eef7] flex items-center justify-center mr-3 text-[#631463]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm">{module.hours} академических часа{module.hours !== 72 ? 'в' : ''}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full bg-[#f7eef7] flex items-center justify-center mr-3 text-[#631463]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm">Сертификат по окончании обучения</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Пакетные предложения */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {packages.map((pack, index) => (
                        <motion.div
                            key={pack.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <p className="text-gray-500 text-sm mb-2">Стоимость каждого модуля</p>

                                <div className="bg-gradient-to-r from-[#f7eef7] to-[#f0e6f0] p-4 rounded-xl relative">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-bold mb-1 text-[#631463]">{pack.title}</h3>
                                            <p className="text-2xl md:text-3xl font-bold text-gray-800">{pack.price} UZS</p>
                                        </div>
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-lg transform rotate-3">
                                            -{pack.discount}%
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full bg-[#f7eef7] flex items-center justify-center mr-3 text-[#631463]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{pack.subjects.join(' + ')}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA кнопка */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button className="bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        Получить консультацию
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PriceSection;