'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FAQSection = () => {
    // Массив с данными вопросов и ответов
    const faqItems = [
        {
            id: 1,
            question: '1.Когда состоятся вступительные экзамены?',
            answer: 'В наш университет вступительные экзамены происходят в несколько этапов. Все информации о датах их проведения будут опубликованы в наших социальных сетях'
        },
        {
            id: 2,
            question: '2.Сколько студентов обучаются в одной группе?',
            answer: 'В одной группе максимальное количество студентов достигает 12 человек.'
        },
        {
            id: 3,
            question: '3.Есть ли возможность оплатить сумму договора на несколько частей ?',
            answer: 'Да, конечно . Вы свободно можете разделить сумму оплаты на 2 части и на каждом семестре оплачивать в наш университет.'
        },
        {
            id: 4,
            question: '4.Основан ли процесс обучения на кредитно-модульной системе?',
            answer: 'Да, процесс обучения основан на кредитно-модульной системе.'
        },
        {
            id: 5,
            question: '5.Сколько дней в неделю и в какие дни проходит обучение?',
            answer: 'В нашем университете обучение с понедельника по субботу.'
        },
        {
            id: 6,
            question: '6.Обязательно ли носить форму в университете?',
            answer: 'Нет , единственная важная составляющая вашей формы это медицинский халат.'
        },
        {
            "id": 7,
            "question": "7.На каком языке проходит обучение в вашем университете?",
            "answer": "В университете занятия проводятся на узбекском и русском языках, а с 4 курса все предметы преподаются на английском языке."
        },
        {
            "id": 8,
            "question": "8.Как можно подать документы в ЕМУ Университет?",
            "answer": "Первым этапом подачи документов является онлайн-регистрация через сайт emuni.uz."
        },
        {
            "id": 9,
            "question": "9.Какие предметы абитуриенты сдают на приёмных экзаменах?",
            "answer": "Приёмные экзамены проводятся по двум предметам: химия и биология."
        },
        {
            "id": 10,
            "question": "10.Есть ли лицензия у ЕМУ Университета?",
            "answer": "Да, у ЕМУ Университета есть лицензия под номером N°038700. Подробную информацию можно получить на сайте emuni.uz, а также на license.gov.uz."
        },
        {
            "id": 11,
            "question": "11.Можно ли обучаться в ЕМУ университете на грантовой основе?",
            "answer": "В настоящее время в нашем университете есть два вида грантов. Первый – государственный грант, предоставляемый абитуриентам, набравшим максимальный балл на вступительных экзаменах. Второй – грант от учредителя, который получают студенты в зависимости от их успеваемости в каждом семестре."
        },
        {
            "id": 12,
            "question": "12.Могу ли я перевестись из заграничного университета в ЕМУ?",
            "answer": "Конечно, для этого необходимо предоставить ваш транскрипт (оценочный лист), написать заявление в комиссию ЕМУ Университета и сдать переходные экзамены."
        },
        {
            "id": 13,
            "question": "13.Сколько составляет сумма контракта на обучение в ЕМУ университете?",
            "answer": "Сумма контракта составляет 150 БРВ (базовая расчетная величина) за один академический год."
        },
        {
            "id": 14,
            "question": "14.Признаётся ли диплом ЕМУ Университета в Узбекистане?",
            "answer": "В соответствии со статьей 31 Закона «Об образовании» выпускникам негосударственных образовательных учреждений, предоставляющих услуги в соответствии с государственными образовательными стандартами, выдается диплом государственного образца."
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
                            href="https://t.me/emuni"
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