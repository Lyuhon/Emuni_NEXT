// // app/faq/page.jsx
// "use client";
// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function FAQPage() {
//     const [openFAQ, setOpenFAQ] = useState(null); // Для раскрытия/скрытия ответов

//     const faqs = [
//         {
//             question: "Когда состоятся вступительные экзамены?",
//             answer:
//                 "В наш университет вступительные экзамены проходят в несколько этапов. Вся информация о датах их проведения будет опубликована в наших социальных сетях.",
//         },
//         {
//             question: "Сколько студентов обучаются в одной группе?",
//             answer: "В одной группе максимальное количество студентов достигает 12 человек.",
//         },
//         {
//             question: "Есть ли возможность оплатить сумму договора на несколько частей?",
//             answer:
//                 "Да, конечно. Вы свободно можете разделить сумму оплаты на 2 части и в каждом семестре оплачивать в наш университет.",
//         },
//         {
//             question: "Основан ли процесс обучения на кредитно-модульной системе?",
//             answer: "Да, процесс обучения основан на кредитно-модульной системе.",
//         },
//         {
//             question: "Сколько дней в неделю и в какие дни проходит обучение?",
//             answer: "В нашем университете обучение проходит с понедельника по субботу.",
//         },
//         {
//             question: "Обязательно ли носить форму в университете?",
//             answer: "Нет, единственная важная составляющая вашей формы — это медицинский халат.",
//         },
//         {
//             question: "На каком языке проходит обучение в вашем университете?",
//             answer:
//                 "В университете пары проходят на узбекском и русском языках, а с 4 курса все предметы будут полностью обучаться на английском языке.",
//         },
//         {
//             question: "Как можно подать документы в ЕМУ Университет?",
//             answer:
//                 "Первым этапом подачи документов — это онлайн-регистрация через сайт <a href='https://emuni.uz' class='text-[#5f1464] underline hover:text-[#7a407f]'>emuni.uz</a>.",
//         },
//         {
//             question: "Какие предметы абитуриенты сдают на приёмных экзаменах?",
//             answer: "Приёмные экзамены проходят по 2 предметам: химия и биология.",
//         },
//         {
//             question: "Есть ли лицензия у ЕМУ Университета?",
//             answer:
//                 "Да, у ЕМУ Университета есть лицензия под номером №038700. Подробную информацию можете получить на сайте <a href='https://emuni.uz' class='text-[#5f1464] underline hover:text-[#7a407f]'>emuni.uz</a> и, конечно же, через сайт <a href='https://license.gov.uz' class='text-[#5f1464] underline hover:text-[#7a407f]'>license.gov.uz</a>.",
//         },
//         {
//             question: "Можно ли обучиться в ЕМУ Университете на грантовой основе?",
//             answer:
//                 "В данное время в нашем университете есть 2 вида гранта. Первый из них — государственный грант для абитуриентов, набравших максимальный балл при вступительных экзаменах. Второй — это грант от учредителя, который получают студенты в зависимости от их успеваемости в каждом семестре.",
//         },
//         {
//             question: "Могу ли я перевестись с заграничных университетов в ЕМУ?",
//             answer:
//                 "Конечно, для этого вы должны предоставить ваш транскрипт (оценочный лист), написать заявление в комиссию ЕМУ Университета и сдать переходные экзамены.",
//         },
//         {
//             question: "Сколько составляет сумма контракта на обучение в ЕМУ Университете?",
//             answer: "Сумма контракта составляет 150 БРВ (базовая расчётная величина) на один академический год.",
//         },
//         {
//             question: "Признаётся ли диплом ЕМУ Университета в Узбекистане?",
//             answer:
//                 "В соответствии со статьёй 31 Закона “Об образовании” выпускникам негосударственных организаций образования, оказывающих образовательные услуги в соответствии с государственными образовательными стандартами и государственными образовательными требованиями, выдаётся документ (диплом) государственного образца.",
//         },
//     ];

//     const toggleFAQ = (index) => {
//         setOpenFAQ(openFAQ === index ? null : index);
//     };

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
//                                 Часто задаваемые
//                                 <br />
//                                 <span className="text-[#5f1464] relative">
//                                     вопросы
//                                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
//                                 </span>
//                             </h1>
//                         </div>
//                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                             Ответы на самые часто встречающиеся вопросы для приёмной комиссии ЕМУ Университета
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* FAQ Section */}
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
//                 <div className="grid grid-cols-1 gap-6 md:gap-8">
//                     {faqs.map((faq, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
//                         >
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="w-full text-left px-6 py-5 flex justify-between items-center"
//                             >
//                                 <h2 className="text-lg md:text-xl font-bold text-[#5f1464]">
//                                     {faq.question}
//                                 </h2>
//                                 {openFAQ === index ? (
//                                     <ChevronUp className="w-6 h-6 text-[#5f1464]" />
//                                 ) : (
//                                     <ChevronDown className="w-6 h-6 text-[#5f1464]" />
//                                 )}
//                             </button>
//                             {openFAQ === index && (
//                                 <div
//                                     className="px-6 py-4 bg-gray-50 text-gray-700 text-sm md:text-base animate-fade-in"
//                                     dangerouslySetInnerHTML={{ __html: faq.answer }}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Custom Styles */}
//             <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//         </div>
//     );
// }




import React from "react";
import FAQItem from "./FAQItem";
import style from "./faq.css"

async function fetchFAQData() {
    try {
        const res = await fetch("https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81596", {
            next: { revalidate: 86400 }, // ISR: Revalidate every 1 day
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        // Filter _ru fields
        const faqs = data.acf.razdel_chastyh_voprosov.map((item) => ({
            vopros_ru: item.vopros_ru,
            otvet_ru: item.otvet_ru,
        }));

        return {
            faqs,
            title: data.acf.zagolovok_straniczy_ru,
            description: data.acf.kratkoe_opisanie_ru,
        };
    } catch (error) {
        console.error("Error fetching FAQ data:", error);
        return {
            faqs: [],
            title: "Часто задаваемые вопросы",
            description: "Ответы на самые часто встречающиеся вопросы",
        };
    }
}

export default async function FAQPage() {
    const { faqs, title, description } = await fetchFAQData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
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

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative">
                                {title}
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                            </h1>

                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.vopros_ru} answer={faq.otvet_ru} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600">Не удалось загрузить вопросы. Попробуйте позже.</p>
                    )}
                </div>
            </div>


        </div>
    );
}