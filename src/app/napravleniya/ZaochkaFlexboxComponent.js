// ZaochkaFlexboxComponent.js
'use client';
import React, { useState } from 'react';

const ZaochkaFlexboxComponent = () => {
    // Состояние для тултипов
    const [isTooltipVisible, setIsTooltipVisible] = useState({});

    // Функция для переключения тултипов
    const toggleTooltip = (index, type) => {
        const key = `${type}-${index}`;
        setIsTooltipVisible(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Тексты для тултипов
    const grantTooltipText = "Grant — bu universitet tomonidan o'qish uchun to'liq yoki qisman moliyaviy yordam bo'lib, akademik yutuqlar yoki boshqa mezonlarga asoslanadi.";
    const stipendiyaTooltipText = "Stipendiya — bu universitet yoki boshqa tashkilotlar tomonidan talabalarga o'qishda, ilmiy faoliyatda yoki boshqa yutuqlari uchun beriladigan muntazam to'lovlar.";

    // Статические данные для примера (можно заменить на props)
    const zaochnoePrograms = [
        {
            title: "General medicine (international)",
            price: "150 000 000 UZS",
            description: "The main strategic task of the Faculty of Dentistry is to train a new generation of highly qualified specialists able to work with next-generation equipment using modern diagnostic and treatment methods.\nThe teaching process is based on continuity, modeling student activity close to a doctor's work — from the first days, students develop manual skills, observe clinical practice under top specialists in high-tech clinics, and gradually start independent clinical work under teacher supervision.\nTraining focuses on specialized disciplines: therapeutic and orthopedic dentistry, pediatric dentistry, surgical dentistry, and orthodontics.\nDepending on their specialization after the bachelor's degree, graduates can work as dental therapists, maxillofacial surgeons, orthodontists, or orthopedic dentists.",
            duration: "6 years",
            granty: true,
            stipendiya: true,
            firstShift: true,
            secondShift: false,
            bgGradient: 'bg-gradient-to-br from-[#8f3178] to-[#6b0e55]',
            textColor: 'text-white'
        },
        {
            title: "Dentistry (international)",
            price: "150 000 000 UZS",
            description: "The main goal of the Faculty of General Medicine (MBBS) at our European Medical University is to prepare highly qualified doctors who meet the standards of modern medicine based on the state standard of the Republic of Uzbekistan.\nTheoretical knowledge from leading specialists enables students to compete globally, while training in modern classrooms, labs, and internships at top clinics and hospitals ensures they stay current with international medical advancements.\nCourses in therapeutic, surgical, gynecological, laboratory, and diagnostic disciplines help students shape an individual path toward their future profession.\nGraduates can work immediately in leading private clinics or public healthcare institutions, or pursue further specialization in their chosen field.\nThe program lasts 6 years, full-time.\nIn the first year, education is in Uzbek and Russian; after mandatory English training, from the third year all instruction is conducted in English.",
            duration: "5 years",
            granty: true,
            stipendiya: true,
            firstShift: true,
            secondShift: false,
            bgGradient: 'bg-gradient-to-br from-[#8f3178] to-[#6b0e55]',
            textColor: 'text-white'
        }
    ];

    return (
        <div className="relative max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                {zaochnoePrograms.map((program, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter max-w-md- mx-auto">
                        <div className="p-4 md:p-5 flex flex-col h-full">
                            <div
                                className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                            >
                                {/* Декоративный блок */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center text-[#f5e0a0]">
                                        {program.title}
                                    </h3>
                                    <p className="text-2xl md:text-3xl font-bold text-center text-[#f5e0a0]">
                                        {program.price}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 mb-3 relative">
                                {program.granty && (
                                    <div className="relative group">
                                        <div
                                            className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                                            onClick={() => toggleTooltip(index, 'grant')}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            Grants
                                        </div>
                                        <div
                                            className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                                            md:group-hover:opacity-100 md:opacity-0 
                                            ${isTooltipVisible[`grant-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
                                            top-full mt-1 left-0`}
                                        >
                                            {grantTooltipText}
                                            <div className="absolute left-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
                                        </div>
                                    </div>
                                )}
                                {program.stipendiya && (
                                    <div className="relative group">
                                        <div
                                            className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                                            onClick={() => toggleTooltip(index, 'stipendiya')}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                            Scholarship
                                        </div>
                                        <div
                                            className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                                            md:group-hover:opacity-100 md:opacity-0 
                                            ${isTooltipVisible[`stipendiya-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
                                            top-full mt-1 right-0`}
                                        >
                                            {stipendiyaTooltipText}
                                            <div className="absolute right-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
                                        </div>
                                    </div>
                                )}

                                {program.firstShift && (
                                    <div className="flex items-center bg-[#ffe0ac] text-[#f59e0b] px-3 py-[2px] rounded-full text-xs font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        1 shift
                                    </div>
                                )}
                                {program.secondShift && (
                                    <div className="flex items-center bg-[#eaeaea] text-[#6b7280] px-3 py-[2px] rounded-full text-xs font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        2 shift
                                    </div>
                                )}
                            </div>

                            <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow min-h-[6rem] relative z-10 whitespace-pre-line">
                                {program.description}
                            </p>
                            <div
                                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f9eef5] opacity-30"
                                style={{ zIndex: 0 }}
                            ></div>
                            <div className="flex items-center justify-between relative z-10">
                                <div className="bg-[#f9eef5] text-[#6b0e55] py-2 px-4 rounded-full text-center font-medium">
                                    {program.duration}
                                </div>
                                <div
                                    className="pop-form-trigger cursor-pointer flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f9eef5] transition-colors duration-300"
                                >
                                    <span className="text-[#6b0e55] text-sm font-medium mr-1">Apply</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#6b0e55]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ZaochkaFlexboxComponent;