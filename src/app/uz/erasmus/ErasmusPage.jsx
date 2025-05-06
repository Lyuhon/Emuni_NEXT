'use client';

import React, { useState } from 'react';
import { Globe, BookOpen, Award, Users, MapPin, Calendar, Download, FileText, ExternalLink, Coffee, Book } from 'lucide-react';
import './erasmus.css';

export default function ErasmusPage({ brandColors }) {
    const [activeTab, setActiveTab] = useState('about');

    // Agar brend ranglari uzatilmasa, yangi standart ranglardan foydalanamiz
    const brandColor = brandColors?.primary || '#6b0e55';      // Yangi asosiy rang
    const brandColorLight = brandColors?.light || '#8f3178';   // Yangi ochroq rang
    const brandColorLighter = brandColors?.lighter || '#f9eef5'; // Yangi eng och rang (fon)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden shadow-md">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{ backgroundColor: brandColor }} />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-lg transform rotate-12 animate-spin-slow" style={{ backgroundColor: `${brandColor}10` }} />
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                    Erasmus+
                                    <br />
                                    <span className="relative" style={{ color: brandColor }}>
                                        Dasturi
                                        <div className="absolute -bottom-2 left-0 w-full h-1 transform skew-x-12" style={{ backgroundColor: `${brandColor}20` }} />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                Erasmus+ — Yevropa Ittifoqining taʼlim, oʻqitish, yoshlar va sport sohalarida loyihalar, hamkorliklar, tadbirlar va mobillikni qoʻllab-quvvatlashga qaratilgan dasturi.
                            </p>
                        </div>

                        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-56 h-56 md:w-80 md:h-80 transform hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-full shadow-2xl flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(to right, ${brandColor}, blue-600)` }}>
                                    <div className="absolute inset-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/eramus-logo.png"
                                            alt="Erasmus+ Logotipi"
                                            className="w-5/6 h-5/6 object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/eramus-logo.png";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-200 rounded-full animate-float" />
                            <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-200 rounded-full animate-float-delay" />
                            <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full animate-float-delay-2" style={{ backgroundColor: `${brandColor}20` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-20 relative overflow-hidden shadow-md">
                {/* Dekorativ elementlar */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full blur-3xl" style={{ backgroundColor: `${brandColor}05` }}></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <div className="inline-block rounded-lg px-3 py-1 text-sm font-medium mb-4" style={{ backgroundColor: `${brandColor}10`, color: brandColor }}>Erasmus+ Dasturi Haqida</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>Xalqaro Taʼlim <br />Imkoniyatlari</h2>
                    </div>

                    {/* Informatsiya kartochkalari - silliq oʻtishlar bilan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}20, purple-500/20)` }}></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-[#5f1464] to-purple-600 text-white p-3 rounded-lg shadow-md">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Xalqaro Hamkorlik</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Erasmus+ Yevropa davlatlari (dastur davlatlari deb ataladi) oʻrtasida va ushbu Yevropa davlatlari bilan dunyo boʻylab hamkor-davlatlar oʻrtasida hamkorlik uchun moliyaviy imkoniyatlar taqdim etadi.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Dastur universitetlar va hamkor-davlatlarda oliy taʼlim tizimlariga uzoq muddatli taʼsir koʻrsatishga qaratilgan turli loyihalarni qoʻllab-quvvatlaydi.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg shadow-md">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Taʼlim Initsiativalari</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Erasmus+ CBHE (Oliy Taʼlimda Salohiyatni Oshirish) doirasida Yevropa Ittifoqi oliy oʻquv yurtlarining salohiyatini oshirishga qaratilgan loyihalarni qoʻllab-quvvatlaydi.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Salohiyatni oshirish loyihalari 34 ta dastur davlati va 150 dan ortiq hamkor-davlatlardan oliy oʻquv yurtlari oʻrtasidagi koʻp tomonlama hamkorlikka asoslanadi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section - Horizontal Cards Layout */}
            <section id="programs" className="py-16 bg-white shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="max-w-lg mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Loyihalar va Imkoniyatlar</h2>
                            <p className="text-gray-600">
                                Taʼlim salohiyatini rivojlantirish dasturlari
                            </p>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p className="inline-flex items-center">
                                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: brandColor }}></span>
                                Yevropa Ittifoqidan qoʻllab-quvvatlash
                            </p>
                        </div>
                    </div>

                    {/* Gorizontal kartochkalar bir xil dizayn bilan */}
                    <div className="space-y-6">
                        {/* Kartochka 1 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-500 flex items-center justify-center p-8 md:p-6">
                                    <Users className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Talabalar va Xodimlar Mobilligi</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Talabalar va oʻqituvchilar uchun xorijda oʻqish va amaliyot oʻtash imkoniyatlari.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">3-12 oy oʻqish</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Amaliyotlar</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Oʻqituvchilik</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartochka 2 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 flex items-center justify-center p-8 md:p-6" style={{ backgroundColor: brandColor }}>
                                    <Globe className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Salohiyatni Oshirish</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Xalqaro hamkorlik va modernizatsiya orqali oliy taʼlimni yangilash loyihalari.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Dastur ishlab chiqish</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Boshqaruvni modernizatsiya qilish</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Jamiyat bilan aloqa</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartochka 3 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-teal-500 flex items-center justify-center p-8 md:p-6">
                                    <Award className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Birgalikda Magistratura Dasturlari</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Turli mamlakatlardagi universitetlar konsorsiumi tomonidan taklif qilinadigan nufuzli dasturlar.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Turli mamlakatlarda oʻqish</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Stipendiyalar</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Ikki diplom</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartochka 4 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-orange-500 flex items-center justify-center p-8 md:p-6">
                                    <Book className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Bilim Alyanslari</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/knowledge-alliances"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Oliy taʼlim va biznes oʻrtasidagi hamkorlik innovatsion salohiyatni rivojlantirish uchun.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Innovatsion yondashuvlar</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Tadbirkorlik fikrlash</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Bilim almashish</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartochka 5 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-amber-500 flex items-center justify-center p-8 md:p-6">
                                    <MapPin className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Jan Monnet</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/jean-monnet-actions-stimulating-teaching-and-research-on-the-eu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Yevropa tadqiqotlari sohasida oʻqitish va tadqiqotlarda mukammallikni rivojlantirishga qaratilgan tashabbuslar.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Modullar va kafedralar</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Loyihalar va tarmoqlar</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Muassasalarni qoʻllab-quvvatlash</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartochka 6 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8 md:p-6">
                                    <Calendar className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Strategik Hamkorliklar</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/partnerships-for-cooperation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Batafsil <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Taʼlimning barcha darajalarida innovatsion amaliyotlarni ishlab chiqish va tarqatishga qaratilgan loyihalar.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Innovatsion usullar</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Hamkorlik</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Amaliyot almashish</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-12 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative">
                        <div className="inline-block rounded-full backdrop-blur-sm px-4 py-1 text-sm font-medium mb-4" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                            Talabalar va Muassasalar Uchun
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="relative">
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>
                                    Erasmus+da Ishtirok Etishning Afzalliklari
                                </span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 opacity-70 rounded-full" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}></span>
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Erasmus+ dasturi dunyo boʻylab talabalar, oʻqituvchilar va taʼlim muassasalari uchun koʻplab afzalliklarni taqdim etadi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Afzallik 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Globe className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Xalqaro Tajriba</h3>
                            <p className="text-gray-600">
                                Xalqaro muhitda oʻqish, oʻqitish va tadqiqot olib borish, turli madaniyatlar va taʼlim metodlari bilan tanishish imkoniyati.
                            </p>
                        </div>

                        {/* Afzallik 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Koʻnikmalarni Rivojlantirish</h3>
                            <p className="text-gray-600">
                                Til kompetensiyalarini yaxshilash, madaniyatlararo koʻnikmalar, moslashuvchanlik, mustaqillik va mehnat bozorida raqobatbardoshlikni oshirish.
                            </p>
                        </div>

                        {/* Afzallik 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Award className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Nufuzli Imkoniyatlar</h3>
                            <p className="text-gray-600">
                                Dunyo boʻylab ish beruvchilar tomonidan qadrlanadigan yuqori sifatli taʼlim dasturlari, tan olingan diplomlar va sertifikatlarga ega boʻlish.
                            </p>
                        </div>

                        {/* Afzallik 4 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taʼlimni Modernizatsiya Qilish</h3>
                            <p className="text-gray-600">
                                Oʻquv yurtlari uchun taʼlim dasturlarini, oʻqitish metodlarini va maʼmuriy jarayonlarni xalqaro standartlarga muvofiq modernizatsiya qilish imkoniyati.
                            </p>
                        </div>

                        {/* Afzallik 5 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <Coffee className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Dunyoqarashni Kengaytirish</h3>
                            <p className="text-gray-600">
                                Yangi odamlar, gʻoyalar va istiqbollar bilan tanishish, shaxsiy va professional tajribani boyitadi.
                            </p>
                        </div>

                        {/* Afzallik 6 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}10` }}>
                                <MapPin className="w-7 h-7" style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Moliyaviy Qoʻllab-quvvatlash</h3>
                            <p className="text-gray-600">
                                Xorijda oʻqish, amaliyot va yashash uchun grantlar, bu xalqaro mobillikni koʻplab talabalar va oʻqituvchilar uchun ochiq qiladi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-20 relative overflow-hidden">
                {/* Dekorativ elementlar */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}10, purple-500/5)` }}></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    {/* Qoʻshimcha harakatga chaqiruv bloki */}
                    <div className="mt-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>

                        <div className="relative p-1 rounded-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}30, ${brandColorLight}30)` }}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-8 md:mb-0 md:mr-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Erasmus+ bilan Sayohatingizni Boshlashga Tayyormisiz?</h3>
                                    <p className="text-gray-600 max-w-xl">
                                        Dastur imkoniyatlari haqida koʻproq bilib oling va uning bir qismi boʻlish yoʻllarini aniqlang. Bugun universitetingizning xalqaro boʻlimi bilan bogʻlaning!
                                    </p>
                                </div>

                                <a
                                    href="https://erasmus-plus.ec.europa.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center py-3 px-6 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                                >
                                    Rasmiy Sayt
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}