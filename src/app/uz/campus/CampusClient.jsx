"use client";
import React, { useState } from "react";
import CampusSlider from "./CampusSlider";
import { MapPin, Phone, School } from "lucide-react";

export default function CampusClient({ campuses }) {
    const [activeTab, setActiveTab] = useState(0);

    // Новые фирменные цвета
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HERO Section с более современным дизайном */}
            <div className="bg-white relative overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0">
                    <div className="absolute -top-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ backgroundColor: `${brandColorLighter}` }} />
                    <div className="absolute top-40 -left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700" style={{ backgroundColor: `${brandColorLight}40` }} />
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Bizning <span style={{ color: brandColor }}>kampuslarimiz</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Talabalarning qulay ta'lim olishi va har tomonlama rivojlanishi uchun yaratilgan zamonaviy ta'lim joylari
                        </p>
                    </div>

                    {/* Tabs для переключения между кампусами */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex flex-col md:flex-row rounded-lg bg-gray-100 p-1">
                            {campuses.map((campus, index) => (
                                <button
                                    key={campus.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center px-4 py-2 rounded-md transition-all ${activeTab === index
                                        ? `bg-white shadow-md font-medium`
                                        : "text-gray-600 hover:text-gray-800"
                                        }`}
                                    style={{
                                        color: activeTab === index ? brandColor : undefined,
                                    }}
                                >
                                    <School className="w-4 h-4 mr-2" />
                                    <span className="hidden- md:inline">{campus.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content с единой вертикальной структурой */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Левая колонка - слайдер занимает 60% ширины на десктопе */}
                        <div className="md:w-3/5">
                            <CampusSlider
                                campuses={campuses}
                                campusIndex={activeTab}
                                brandColor={brandColor}
                            />
                        </div>

                        {/* Правая колонка - информация занимает 40% ширины на десктопе */}
                        <div className="md:w-2/5 p-6 bg-white">
                            <h2 className="text-2xl font-bold mb-3" style={{ color: brandColor }}>
                                {campuses[activeTab].title}
                            </h2>

                            <p className="text-gray-700 mb-6">
                                {campuses[activeTab].description}
                            </p>

                            <div className="flex items-start mb-4">
                                <MapPin className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: brandColor }} />
                                <span className="text-gray-700">{campuses[activeTab].location}</span>
                            </div>

                            <div className="flex items-center mb-6">
                                <Phone className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: brandColor }} />
                                <a href={`tel:${campuses[activeTab].phone}`} className="hover:underline" style={{ color: brandColor }}>
                                    {campuses[activeTab].phone}
                                </a>
                            </div>

                            {/* Удобства кампуса */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-3">Infratuzilma:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {campuses[activeTab].facilities.map((facility, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3 py-1 text-gray-700 text-sm rounded-full"
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            {facility}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карта и контактная информация */}
                    <div className="p-6 border-t border-gray-100">
                        <div className="mb-4">
                            <iframe
                                src={campuses[activeTab].mapUrl}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>

                        {/* Кнопки действий */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a
                                href={`tel:${campuses[activeTab].phone}`}
                                className="bg-white border-2 font-medium py-3 px-4 rounded-md transition-all text-center"
                                style={{
                                    borderColor: brandColor,
                                    color: brandColor,
                                    backgroundColor: 'white',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = `${brandColorLighter}`;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                }}
                            >
                                <Phone size={18} className="inline mr-2" />
                                Qo'ng'iroq qiling
                            </a>

                            <a
                                href={`https://3.redirect.appmetrica.yandex.com/route?end-lat=41.2794427&end-lon=69.2385207&appmetrica_tracking_id=1178268795219780156`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center text-white"
                                style={{
                                    background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`,
                                }}
                            >
                                <MapPin size={18} className="inline mr-2" />
                                Taksi buyurtma qiling
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}