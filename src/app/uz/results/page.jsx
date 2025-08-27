// app/rezultaty-ekzamenov/page.jsx

import React from "react";
import ExamResultsItemIframe from "./ExamResultsItem"; // Обновленный импорт

// SEO Metadata
export const metadata = {
    title: "Imtihon natijalari - EMU University",
    description: "EMU University kirish imtihonlarining natijalarini ko'ring",
    keywords: "EMU imtihon natijalari, EMU University kirish imtihonlari, EMU qabul natijalari, Toshkent imtihonlari",
    openGraph: {
        title: "Imtihon natijalari - EMU University",
        description: "EMU University kirish imtihonlarining rasmiy natijalari",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

async function fetchExamResultsData() {
    try {
        const res = await fetch("https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84325", {
            next: { revalidate: 36000 }, // ISR: Revalidate every 10 hours
        });
        if (!res.ok) {
            throw new Error("Failed to fetch exam results data");
        }
        const data = await res.json();

        // Process exam subjects
        const subjects = data.acf.predmet.map((item) => ({
            nameRu: item.nazvanie_predmeta_ru,
            nameUz: item.nazvanie_predmeta_uz,
            nameEng: item.nazvanie_predmeta_eng,
            pdfFile: {
                ...item.rezultat_v_pdf,
                // Заменяем прямой URL на наш прокси
                proxyUrl: `/api/pdf/${item.rezultat_v_pdf.ID}`
            }
        }));

        return { subjects };
    } catch (error) {
        console.error("Error fetching exam results data:", error);
        return { subjects: [] };
    }
}

export default async function ExamResultsPage() {
    const { subjects } = await fetchExamResultsData();

    // Publication date
    const publicationDate = "15 iyul 2025";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#f9eef5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-[#ffedf7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative">
                                Imtihon natijalari
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-12" />
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                            EMU University kirish imtihonlarining rasmiy natijalari
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-[#6b0e55]/10 rounded-full text-[#6b0e55] font-medium">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            E'lon qilindi: {publicationDate}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="max-w-screen-xl- max-w-[1000px] mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Info Banner */}
                <div className="mb-8 p-6 bg-white border-l-4 border-[#6b0e55] rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold text-[#6b0e55] mb-4">Muhim ma'lumot</h2>
                    <div className="text-gray-900 space-y-2">
                        <p>
                            <strong>Rasmiy natijalar:</strong> Taqdim etilgan barcha hujjatlar EMU University kirish imtihonlarining rasmiy natijalaridir.
                        </p>
                        <p>
                            <strong>Hujjatda qidirish:</strong> O'z natijalaringizni familiya yoki raqam bo'yicha tez topish uchun Ctrl+F dan foydalaning.
                        </p>
                        <p>
                            <strong>Savollar:</strong> Natijalar bo'yicha barcha savollaringiz uchun EMU University qabul komissiyasiga murojaat qiling.
                        </p>
                    </div>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {subjects.length > 0 ? (
                        subjects.map((subject, index) => (
                            <ExamResultsItemIframe
                                key={index}
                                subject={subject}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <p className="text-gray-600">Imtihon natijalari vaqtincha mavjud emas. Keyinroq urinib ko'ring.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-screen-xl- max-w-[1000px] mx-auto px-4 md:px-8 py-8 md:py-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#6b0e55] mb-6">Savollaringiz qoldimi?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/contacts" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Qabul komissiyasi</h3>
                        <p className="text-gray-600 text-sm">Qo'shimcha ma'lumot olish uchun biz bilan bog'laning</p>
                    </a>
                    <a href="/faq" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Ko'p so'raladigan savollar</h3>
                        <p className="text-gray-600 text-sm">Qabul va o'qish bo'yicha mashhur savollarga javoblar</p>
                    </a>
                    <a href="https://apply.emuni.uz/" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Hujjatlarni taqdim etish</h3>
                        <p className="text-gray-600 text-sm">EMU University'ga qabul uchun arizani onlayn taqdim etish</p>
                    </a>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Imtihon natijalari - EMU University",
                    "description": "EMU University kirish imtihonlarining rasmiy natijalari qidiruv imkoniyati bilan",
                    "publisher": {
                        "@type": "Organization",
                        "name": "EMU University"
                    },
                    "datePublished": "2025-07-15",
                    "about": subjects.map(subject => ({
                        "@type": "EducationalOccupationalCredential",
                        "name": subject.nameUz
                    }))
                })
            }} />
        </div>
    );
}




