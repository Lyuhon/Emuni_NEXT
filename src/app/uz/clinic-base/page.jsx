
import React from "react";
import { MapPin } from "lucide-react";
import './clinic-base.css';

export default async function ClinicalBasesPage() {
    const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/83611', {
        next: { revalidate: 3600 }, // Revalidate every hour
    });
    const data = await response.json();
    const title = data.acf.zagolovok_straniczy_uz;
    const description = data.acf.kratkoe_opisanie_uz;
    const clinics = data.acf.kliniki;

    const clinicalBases = clinics.map(clinic => ({
        name: clinic.nazvanie_uz,
        location: clinic.adres_uz,
        image: clinic.fotka_kliniki.url,
        mapLink: clinic.ssylka_na_yandeks_karty_kliniki, // Добавляем ссылку на Яндекс.Карты
    }));

    const titleWords = title.split(' ');
    const mainTitle = titleWords.slice(0, -1).join(' ');
    const highlightedWord = titleWords[titleWords.length - 1];

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
                                {mainTitle}
                                <br />
                                <span className="text-[#5f1464] relative">
                                    {highlightedWord}
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinicalBases.map((base, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                        >
                            <img
                                src={base.image}
                                alt={base.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                    {base.name}
                                </h3>
                                {base.location && (
                                    <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full">
                                        <MapPin className="w-3 h-3 inline-block mr-1" />
                                        {base.mapLink ? (
                                            <a href={base.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {base.location}
                                            </a>
                                        ) : (
                                            base.location
                                        )}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}