// /app\uz\faq\page.jsx
import React from "react";
import FAQItem from "./FAQItem";
import style from "./faq.css"

// SEO Metadata
export const metadata = {
    title: "Ko‘p so‘raladigan savollar - EMU University",
    description: "EMU University Toshkentdagi qabul jarayoni, ta'lim dasturlari, narxlar va bitiruvchilarning imkoniyatlari haqida tez-tez so‘raladigan savollarga javoblar oling.",
    keywords: "EMU University FAQ, universitet savollari, EMUga qabul, Toshkentda ta'lim, EMU savollar va javoblar",
    openGraph: {
        title: "Ko‘p so‘raladigan savollar - EMU University",
        description: "EMU Universitydagi qabul, o‘qish va bitirgandan keyingi imkoniyatlar haqida eng ommabop savollarga javoblar",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};


async function fetchFAQData() {
    try {
        const res = await fetch("https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81596", {
            next: { revalidate: 86400 }, // ISR: Revalidate every 1 day
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        // Filter _uz fields
        const faqs = data.acf.razdel_chastyh_voprosov.map((item) => ({
            vopros_uz: item.vopros_uz,
            otvet_uz: item.otvet_uz,
        }));

        return {
            faqs,
            title: data.acf.zagolovok_straniczy_uz,
            description: data.acf.kratkoe_opisanie_uz,
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
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#f9eef5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-[#ffedf7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative">
                                {title}
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-12" />
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Structured data for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.vopros_ru,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.otvet_ru
                            }
                        }))
                    })
                }} />

                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.vopros_uz} answer={faq.otvet_uz} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600">Не удалось загрузить вопросы. Попробуйте позже.</p>
                    )}
                </div>
            </div>

            {/* Related Links for SEO */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#6b0e55] mb-6">Qo‘shimcha ma’lumot</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/napravleniya" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Ta’lim dasturlari</h3>
                        <p className="text-gray-600 text-sm">Ta’lim yo‘nalishlari va mutaxassisliklar haqida ko‘proq bilib oling</p>
                    </a>
                    <a href="https://apply.emuni.uz/" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Qabul</h3>
                        <p className="text-gray-600 text-sm">Hujjat topshirish jarayoni va abituriyentlar uchun talablar</p>
                    </a>
                    <a href="/contacts" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all">
                        <h3 className="font-semibold text-[#6b0e55] mb-2">Biz bilan bog‘laning</h3>
                        <p className="text-gray-600 text-sm">Savollaringiz bormi? EMU University qabul komissiyasi bilan bog‘laning</p>
                    </a>
                </div>
            </div>

        </div>
    );
}