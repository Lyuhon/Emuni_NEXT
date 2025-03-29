'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FAQSection = () => {
    // Массив с данными вопросов и ответов
    const faqItems = [
        {
            id: 1,
            question: 'Как долго длится программа подготовительных курсов?',
            answer: 'Программа длится 3 или 6 месяцев, в зависимости от выбранного уровня и успеваемости студента.'
        },
        {
            id: 2,
            question: 'Какой уровень английского языка требуется для поступления?',
            answer: 'Минимальный уровень владения английским языком А2, как определено Общей европейской системой оценки владения языком (CEFR). Уровень владения языком будет проверен на вступительном тесте.'
        },
        {
            id: 3,
            question: 'Дает ли прохождение подготовительных курсов гарантию поступления в университет?',
            answer: 'Да, после успешного прохождения курса и выполнения всех требований, мы гарантируем зачисление в университет без вступительных экзаменов.'
        },
        {
            id: 4,
            question: 'Нужно ли предоставлять документы для поступления на подготовительные курсы?',
            answer: 'Да, необходимо предоставить заполненную форму заявления, справку из учебного заведения или аттестат, копию документа, удостоверяющего личность, и пройти распределительный тест.'
        },
        {
            id: 5,
            question: 'Предоставляются ли скидки на обучение в рамках подготовительных курсов?',
            answer: 'Да, мы предлагаем скидки 10% на комплексные программы, включающие несколько предметов, как указано в разделе "Стоимость обучения".'
        },
        {
            id: 6,
            question: 'Как я могу с вами связаться?',
            answer: 'Вы можете связаться с нами через форму на сайте, по телефону или написать в наш Telegram. Наши специалисты ответят на все ваши вопросы в кратчайшие сроки.'
        }
    ];

    // Состояние для отслеживания открытого вопроса
    const [openItemId, setOpenItemId] = useState(1);

    // Функция для переключения состояния открытого вопроса
    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <section className="py-4 md:py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Часто задаваемые вопросы
                    </h2>
                    <p className="text-gray-600">
                        Найдите ответы на популярные вопросы о программе и процессе поступления
                    </p>
                </motion.div>

                {/* FAQ аккордеон */}
                <div className="mb-12 border rounded-2xl overflow-hidden shadow-sm">
                    {faqItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: item.id * 0.1 }}
                            viewport={{ once: true }}
                            className="border-b last:border-b-0"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                            >
                                <span className="font-medium text-gray-800">{item.question}</span>
                                <span className="transform transition-transform duration-200">
                                    {openItemId === item.id ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#631463]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openItemId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 bg-[#f7eef7] bg-opacity-30 text-gray-700">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Блок с контактами */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#f0f4f8] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Декоративные элементы */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7eef7] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f7eef7] rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10">

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">Остались вопросы?</h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            Наши специалисты с радостью проконсультируют вас на всех этапах подачи заявки и обучения.
                        </p>

                        <motion.a
                            href="https://t.me/cau_consultant"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center bg-[#0088cc] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.44 4.56a3.38 3.38 0 0 0-2.39-1.01c-.61 0-1.18.14-1.69.4l-13.83 8.36c-.38.23-.58.53-.58.91 0 .38.19.68.56.9l3.5 1.53.16.07 2.14.93c.17.08.31.08.43 0l7.26-4.69c.11-.08.21-.12.31-.12.14 0 .24.05.31.16.06.11.05.22-.03.34l-5.2 6.66-.04.05-.04.08c-.04.09-.04.18-.01.28l.93 3.98c.06.23.18.42.35.57a.9.9 0 0 0 .62.25c.23 0 .45-.08.64-.25l2.15-2.07c.18-.17.36-.34.53-.52l2.49 1.88c.22.17.46.25.73.25.42 0 .71-.16.89-.48.06-.12.1-.24.13-.37l2.9-13.94a2.18 2.18 0 0 0-.42-1.9z" />
                            </svg> */}
                            НАПИСАТЬ В TELEGRAM
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;