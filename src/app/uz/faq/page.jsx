// app/faq/page.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
    const [openFAQ, setOpenFAQ] = useState(null); // Для раскрытия/скрытия ответов

    const faqs = [
        {
            question: "Kirish imtihonlari qachon boʻladi?",
            answer: "Kirish imtihonlari bir necha bosqichda bo`lib o’tadi. Imtihon sanalarini ijtimoiy tarmoqlarda e’lon qilib boramiz."
        },
        {
            question: "Bir guruhda nechta talaba tahsil oladi?",
            answer: "Bir guruhda maksimal 12 ta talaba tahsil oladi."
        },
        {
            question: "Shartnoma toʻlovini boʻlib toʻlash imkoni bormi?",
            answer: "To’lov shartnomani 2 ga bo’lib, har semestr boshida to`lash imkoniyatiga egasiz."
        },
        {
            question: "Oʻquv jarayoni kredit-modul tizimga asoslanganmi?",
            answer: "Ha, o`quv jarayoni kredit modul tizimiga asoslangan."
        },
        {
            question: "Oʻqish haftaning qaysi kunlari, haftada necha kun?",
            answer: "O`qish kunlari dushanbadan shanbagacha."
        },
        {
            question: "Universitetda forma kiyish majburiymi?",
            answer: "Yo`q, bizning universitetimizda asosiysi tibbiyot formasi bo’lishi."
        },
        {
            question: "Universitetda darslar qaysi tilda olib boriladi?",
            answer: "Universitetda darslar o’zbek va rus tillarida olib boriladi. 4-kursdan boshlab to’liq ingliz tiliga o`tiladi."
        },
        {
            question: "EMU Universitetiga qanday qilib hujjat topshirish mumkin?",
            answer: "Avval <a href='https://emuni.uz/uz/qabul' class='text-[#5f1464] underline hover:text-[#7a407f]'>emuni.uz</a> sayti orqali onlayn ro’yhatdan o’tiladi."
        },
        {
            question: "Qanday fanlardan kirish imtihonlarini topshirish talab etiladi?",
            answer: "Kirish imtihonlari 2 ta fandan bo’lib o’tadi: Biologiya va kimyo fanlari."
        },
        {
            question: "Universitetning litsenziyasi bormi?",
            answer: "Ha, Universitetning litsenziyasi bor (litsenziya raqami №038700). Batafsil ma’lumotni <a href='https://emuni.uz' class='text-[#5f1464] underline hover:text-[#7a407f]'>emuni.uz</a> sayti, hamda <a href='https://license.gov.uz' class='text-[#5f1464] underline hover:text-[#7a407f]'>license.gov.uz</a> saytidan olishingiz mumkin."
        },
        {
            question: "Unversitetda grant asosida o’qisa bo’ladimi?",
            answer: "Hozirgi kunda Universitetda 2 turdagi grant o’rinlari mavjud. Birinchisi, davlat granti (kirish imtihonida maksimal ball toplagan talabalarga beriladi). Ikkinchi turdagi grant – tasischilar granti (har o’quv semestri davomida eng yuqori o’zlashtirish ko’rsatikichiga ega bo’lgan talabalarga beriladi)."
        },
        {
            question: "Xorijiy universitetdan EMU University ga “perevod” qilsam boʻladimi?",
            answer: "Albatta, buning uchun siz transcript (baholar qaydnomasi)ni taqdim qilishingiz, qabul komissiyasiga ariza yozishingiz va o’qishni ko’chirish uchun imtixon topshirishingiz kerak."
        },
        {
            question: "O’qishning to’lov kontrakt summasi qanday miqdorni tashkil etadi?",
            answer: "Kontrakt summasi 1 o’quv yili uchun 150 BXMga teng (tolov vaqtidagi O`zbekiston Respublikasida belgilangan bazaviy hisoblash miqdori)."
        },
        {
            question: "EMU Universiteti diplomi O’zbekistonda tan olinadimi?",
            answer: "“Ta’lim to’g’risida”gi Qonunning 31-moddasiga asosan, davlat ta’lim standartlari va davlat ta’lim talablariga muvofiq ta’lim xizmatlarini ko’rsatuvchi nodavlat ta’lim tashkilotlari bitiruvchilariga davlat tomonidan tasdiqlangan namunadagi ta’lim to’g’risidagi hujjat (diplom) beriladi."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
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
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Tez-tez beriladigan
                                <br />
                                <span className="text-[#5f1464] relative">
                                    savollar
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            EMU Universiteti qabul komissiyasi uchun eng ko'p beriladigan savollarga javoblar
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center"
                            >
                                <h2 className="text-lg md:text-xl font-bold text-[#5f1464]">
                                    {faq.question}
                                </h2>
                                {openFAQ === index ? (
                                    <ChevronUp className="w-6 h-6 text-[#5f1464]" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-[#5f1464]" />
                                )}
                            </button>
                            {openFAQ === index && (
                                <div
                                    className="px-6 py-4 bg-gray-50 text-gray-700 text-sm md:text-base animate-fade-in"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}