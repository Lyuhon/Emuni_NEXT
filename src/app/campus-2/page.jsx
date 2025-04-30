// app/campus/page.jsx
"use client";
import React, { useState } from "react";
import CampusSlider from "./CampusSlider";
// import CampusContactInfo from "./CampusContactInfo";
import { MapPin, Phone, School } from "lucide-react";

export default function CampusesPage() {
    // Эмуляция данных (можно заменить на fetch с API)
    const campuses = [
        {
            id: "business",
            title: "Business and Social School Campus",
            images: [
                "https://emuni.uz/wp-content/uploads/2024/05/img_9853-2-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9851-min.jpg",
                "https://emuni.uz/wp-content/uploads/2024/05/img_9022-min.jpg",
            ],
            description: "Наш кампус Business and Social School .........",
            location: "Улица Мукими 7/1, Ташкент, Узбекистан",
            phone: "+998(78) 147-00-07",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU0sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s",
            facilities: ["Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры",]
        },
        {
            id: "medical",
            title: "Medical School Campus",
            images: [
                "https://emuni.uz/wp-content/uploads/2024/05/black_cream_cutout_flowers_staff_wanted_sign_a2_landscape_poster-min.png",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-1.jpg",
                "https://emuni.uz/wp-content/uploads/2024/06/med-campus-nes-images-2.jpg",
            ],
            description: "Medical School Campus оснащен передовым оборудованием ...........",
            location: "Улица Мукими 7/1, Ташкент, Узбекистан",
            phone: "+998(78) 147-00-07",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.352015355423!2d69.23852067636528!3d41.27944267131379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8ab969dfdb%3A0xffb869ebce5d8561!2zNzZIUitYTU4sINGD0LvQuNGG0LAg0JzRg9C60LjQvNC4gNywgMTAwMDEzLCAwS0xRsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQv9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740264381790!5m2!1sru!2s",
            facilities: ["Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры", "Список инраструктуры",]
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HERO Section с более современным дизайном */}
            <div className="bg-white relative overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0">
                    <div className="absolute -top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700" />
                    {/* <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent" /> */}
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-8">
                        {/* <span className="inline-block px-4 py-1 bg-[#5f1464]/10 text-[#5f1464] text-sm font-medium rounded-full mb-4">
                            EMUNI UNIVERSITY
                        </span> */}
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Наши <span className="text-[#5f1464]">кампусы</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Современные образовательные пространства, созданные для комфортного обучения и всестороннего развития студентов
                        </p>
                    </div>

                    {/* Tabs для переключения между кампусами */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex rounded-lg bg-gray-100 p-1">
                            {campuses.map((campus, index) => (
                                <button
                                    key={campus.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center px-4 py-2 rounded-md transition-all ${activeTab === index
                                        ? "bg-white shadow-md text-[#5f1464] font-medium"
                                        : "text-gray-600 hover:text-[#5f1464]"
                                        }`}
                                >
                                    <School className="w-4 h-4 mr-2" />
                                    <span className="hidden md:inline">{campus.title}</span>
                                    <span className="md:hidden">Кампус {index + 1}</span>
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
                            />
                        </div>

                        {/* Правая колонка - информация занимает 40% ширины на десктопе */}
                        <div className="md:w-2/5 p-6 bg-white">
                            <h2 className="text-2xl font-bold text-[#5f1464] mb-3">
                                {campuses[activeTab].title}
                            </h2>

                            <p className="text-gray-700 mb-6">
                                {campuses[activeTab].description}
                            </p>

                            <div className="flex items-start mb-4">
                                <MapPin className="w-5 h-5 text-[#5f1464] mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{campuses[activeTab].location}</span>
                            </div>

                            <div className="flex items-center mb-6">
                                <Phone className="w-5 h-5 text-[#5f1464] mr-2 flex-shrink-0" />
                                <a href={`tel:${campuses[activeTab].phone}`} className="text-[#5f1464] hover:underline">
                                    {campuses[activeTab].phone}
                                </a>
                            </div>

                            {/* Удобства кампуса */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-3">Инфраструктура:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {campuses[activeTab].facilities.map((facility, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
                                className="bg-white border-2 border-[#5f1464] text-[#5f1464] font-medium py-3 px-4 rounded-md hover:bg-[#5f1464]/5 transition-all text-center"
                            >
                                <Phone size={18} className="inline mr-2" />
                                Позвонить
                            </a>

                            <a
                                href={`https://3.redirect.appmetrica.yandex.com/route?end-lat=41.2794427&end-lon=69.2385207&appmetrica_tracking_id=1178268795219780156`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#5f1464] to-[#8a3c8a] text-white font-medium py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center"
                            >
                                <MapPin size={18} className="inline mr-2" />
                                Заказать такси
                            </a>
                        </div>
                    </div>
                </div>

                {/* Виртуальный тур - дополнительная секция */}
                {/* <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Совершите виртуальный тур</h2>
                    <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                        Не можете посетить кампус лично? Познакомьтесь с нашими образовательными пространствами онлайн!
                    </p>
                    <button className="bg-[#5f1464] text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#7a407f] transition-all">
                        Начать виртуальный тур
                    </button>
                </div> */}
            </div>
        </div>
    );
}