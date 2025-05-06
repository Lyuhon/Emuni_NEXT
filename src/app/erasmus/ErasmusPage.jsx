'use client';

import React, { useState } from 'react';
import { Globe, BookOpen, Award, Users, MapPin, Calendar, Download, FileText, ExternalLink, Coffee, Book } from 'lucide-react';
import './erasmus.css';

export default function ErasmusPage({ brandColors }) {
    const [activeTab, setActiveTab] = useState('about');

    // Если брендовые цвета не переданы, используем новые по умолчанию
    const brandColor = brandColors?.primary || '#6b0e55';      // Новый основной цвет
    const brandColorLight = brandColors?.light || '#8f3178';   // Новый светлый оттенок
    const brandColorLighter = brandColors?.lighter || '#f9eef5'; // Новый самый светлый оттенок (фон)

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
                                    Программа
                                    <br />
                                    <span className="relative" style={{ color: brandColor }}>
                                        Erasmus+
                                        <div className="absolute -bottom-2 left-0 w-full h-1 transform skew-x-12" style={{ backgroundColor: `${brandColor}20` }} />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                Erasmus+ — программа Европейского Союза, направленная на поддержку проектов, партнерств, мероприятий и мобильности в сферах образования, обучения, молодежи и спорта.
                            </p>

                        </div>

                        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-56 h-56 md:w-80 md:h-80 transform hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-full shadow-2xl flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(to right, ${brandColor}, blue-600)` }}>
                                    <div className="absolute inset-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/eramus-logo.png"
                                            alt="Логотип Erasmus+"
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
                {/* Декоративные элементы */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full blur-3xl" style={{ backgroundColor: `${brandColor}05` }}></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <div className="inline-block rounded-lg px-3 py-1 text-sm font-medium mb-4" style={{ backgroundColor: `${brandColor}10`, color: brandColor }}>О программе Erasmus+</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>Международные образовательные <br />возможности</h2>
                    </div>

                    {/* Карточки с информацией - с плавными переходами */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}20, purple-500/20)` }}></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-[#5f1464] to-purple-600 text-white p-3 rounded-lg shadow-md">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Международное сотрудничество</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Erasmus+ предоставляет возможности финансирования для сотрудничества как между европейскими странами (так называемыми странами программы), так и между этими европейскими странами и странами-партнерами по всему миру.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Программа поддерживает разнообразные проекты, направленные на достижение долгосрочного воздействия на университеты и системы высшего образования в странах-партнерах.
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
                                    <h3 className="text-2xl font-bold text-gray-800">Образовательные инициативы</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    В рамках Erasmus+ CBHE (Capacity Building in Higher Education) Европейский Союз поддерживает проекты, направленные на повышение потенциала высших учебных заведений.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Проекты по наращиванию потенциала основаны на многостороннем партнерстве, в первую очередь между высшими учебными заведениями (ВУЗами) из 34 стран программы и более чем 150 стран-партнеров.
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Проекты и возможности</h2>
                            <p className="text-gray-600">
                                Программы для развития образовательного потенциала
                            </p>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p className="inline-flex items-center">
                                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: brandColor }}></span>
                                Поддержка от Европейского Союза
                            </p>
                        </div>
                    </div>

                    {/* Горизонтальные карточки с единым дизайном */}
                    <div className="space-y-6">
                        {/* Карточка 1 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-500 flex items-center justify-center p-8 md:p-6">
                                    <Users className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Мобильность студентов и персонала</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Возможности обучения и стажировки за рубежом для студентов и преподавателей.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">3-12 месяцев обучения</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Стажировки</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Преподавание</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 2 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 flex items-center justify-center p-8 md:p-6" style={{ backgroundColor: brandColor }}>
                                    <Globe className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Наращивание потенциала</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Проекты модернизации высшего образования через интернационализацию и сотрудничество.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Разработка программ</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Модернизация управления</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Связь с обществом</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 3 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-teal-500 flex items-center justify-center p-8 md:p-6">
                                    <Award className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Совместные магистерские программы</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Престижные программы, предлагаемые консорциумом университетов из разных стран.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Обучение в разных странах</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Стипендии</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Двойные дипломы</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 4 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-orange-500 flex items-center justify-center p-8 md:p-6">
                                    <Book className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Альянсы знаний</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/knowledge-alliances"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Сотрудничество между высшим образованием и бизнесом для развития инновационного потенциала.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Инновационные подходы</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Предпринимательское мышление</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Обмен знаниями</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 5 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-amber-500 flex items-center justify-center p-8 md:p-6">
                                    <MapPin className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Жан Монне</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/jean-monnet-actions-stimulating-teaching-and-research-on-the-eu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Инициативы, направленные на продвижение совершенства в преподавании и исследованиях в области европейских исследований.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Модули и кафедры</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Проекты и сети</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Поддержка институтов</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 6 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8 md:p-6">
                                    <Calendar className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Стратегические партнерства</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/partnerships-for-cooperation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Проекты, направленные на разработку и распространение инновационных практик в образовании на всех уровнях.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Инновационные методы</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Сотрудничество</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Обмен практиками</span>
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
                            Для студентов и учреждений
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="relative">
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>
                                    Преимущества участия в Erasmus+
                                </span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 opacity-70 rounded-full" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}></span>
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Программа Erasmus+ предлагает множество преимуществ для студентов, преподавателей
                            и образовательных учреждений по всему миру.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Globe className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Международный опыт</h3>
                            <p className="text-gray-600">
                                Возможность учиться, преподавать и проводить исследования в международной среде, знакомиться с различными культурами и методиками обучения.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Развитие навыков</h3>
                            <p className="text-gray-600">
                                Улучшение языковых компетенций, межкультурных навыков, адаптивности, самостоятельности и повышение конкурентоспособности на рынке труда.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Award className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Престижные возможности</h3>
                            <p className="text-gray-600">
                                Доступ к высококачественным образовательным программам, признанным дипломам и сертификатам, которые ценятся работодателями во всем мире.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Модернизация образования</h3>
                            <p className="text-gray-600">
                                Для учебных заведений — возможность модернизировать программы обучения, методики преподавания и административные процессы в соответствии с международными стандартами.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <Coffee className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Расширение кругозора</h3>
                            <p className="text-gray-600">
                                Знакомство с новыми людьми, идеями и перспективами, которые обогащают личный и профессиональный опыт участников.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}10` }}>
                                <MapPin className="w-7 h-7" style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Финансовая поддержка</h3>
                            <p className="text-gray-600">
                                Гранты на обучение, стажировку и проживание за рубежом, которые делают международную мобильность доступной для многих студентов и преподавателей.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-20 relative overflow-hidden">
                {/* Декоративные элементы */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}10, purple-500/5)` }}></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    {/* Дополнительный блок с призывом к действию */}
                    <div className="mt-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>

                        <div className="relative p-1 rounded-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}30, ${brandColorLight}30)` }}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-8 md:mb-0 md:mr-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Готовы начать свое путешествие с Erasmus+?</h3>
                                    <p className="text-gray-600 max-w-xl">
                                        Узнайте больше о возможностях программы и о том, как вы можете стать ее частью.
                                        Свяжитесь с международным отделом вашего университета сегодня!
                                    </p>
                                </div>

                                <a
                                    href="https://erasmus-plus.ec.europa.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center py-3 px-6 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                                >
                                    Официальный сайт
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