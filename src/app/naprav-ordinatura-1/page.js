'use client'
import React, { useState } from 'react';
import {
    ChevronRight, ChevronDown, GraduationCap, Clock, Award,
    Stethoscope, Briefcase, Search, Globe, Star, Users
} from 'lucide-react';

// SEO Metadata
// export const metadata = {
//     title: "Направления подготовки - EMU University",
//     description: "30 направлений подготовки в EMU University: медицинские, бизнес и международные программы. Выберите свою будущую профессию.",
//     keywords: "направления EMU University, медицинские специальности, бизнес образование, международные программы, поступление в университет",
// };

const DirectionsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [expandedDirection, setExpandedDirection] = useState(null);

    // Фирменные цвета
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    const directions = {
        medical: [
            { id: 1, title: 'Лечебное дело', duration: '6 лет', rating: 4.8, icon: Stethoscope },
            { id: 2, title: 'Педиатрия', duration: '6 лет', rating: 4.9, icon: Stethoscope },
            { id: 3, title: 'Стоматология', duration: '5 лет', rating: 4.7, icon: Stethoscope },
            { id: 4, title: 'Медико-профилактическое дело', duration: '6 лет', rating: 4.6, icon: Stethoscope },
            { id: 5, title: 'Фармация', duration: '5 лет', rating: 4.6, icon: Stethoscope },
            { id: 6, title: 'Сестринское дело', duration: '4 года', rating: 4.5, icon: Stethoscope },
            { id: 7, title: 'Медицинская биохимия', duration: '6 лет', rating: 4.5, icon: Stethoscope },
            { id: 8, title: 'Медицинская биофизика', duration: '6 лет', rating: 4.4, icon: Stethoscope },
            { id: 9, title: 'Медицинская кибернетика', duration: '6 лет', rating: 4.6, icon: Stethoscope },
            { id: 10, title: 'Клиническая психология', duration: '5.5 лет', rating: 4.7, icon: Stethoscope },
        ],
        business: [
            { id: 11, title: 'Менеджмент', duration: '4 года', rating: 4.4, icon: Briefcase },
            { id: 12, title: 'Экономика', duration: '4 года', rating: 4.3, icon: Briefcase },
            { id: 13, title: 'Государственное и муниципальное управление', duration: '4 года', rating: 4.2, icon: Briefcase },
            { id: 14, title: 'Бизнес-информатика', duration: '4 года', rating: 4.6, icon: Briefcase },
            { id: 15, title: 'Торговое дело', duration: '4 года', rating: 4.1, icon: Briefcase },
            { id: 16, title: 'Товароведение', duration: '4 года', rating: 4.0, icon: Briefcase },
            { id: 17, title: 'Финансы и кредит', duration: '4 года', rating: 4.5, icon: Briefcase },
            { id: 18, title: 'Банковское дело', duration: '4 года', rating: 4.4, icon: Briefcase },
            { id: 19, title: 'Маркетинг', duration: '4 года', rating: 4.4, icon: Briefcase },
            { id: 20, title: 'Логистика и управление цепями поставок', duration: '4 года', rating: 4.3, icon: Briefcase },
        ],
        international: [
            { id: 21, title: 'Международные отношения', duration: '4 года', rating: 4.5, icon: Globe },
            { id: 22, title: 'Международная экономика', duration: '4 года', rating: 4.4, icon: Globe },
            { id: 23, title: 'Международное право', duration: '4 года', rating: 4.3, icon: Globe },
            { id: 24, title: 'Международный бизнес', duration: '4 года', rating: 4.6, icon: Globe },
            { id: 25, title: 'Туризм и гостеприимство', duration: '4 года', rating: 4.2, icon: Globe },
            { id: 26, title: 'Лингвистика', duration: '4 года', rating: 4.4, icon: Globe },
            { id: 27, title: 'Переводоведение', duration: '4 года', rating: 4.3, icon: Globe },
            { id: 28, title: 'Международная журналистика', duration: '4 года', rating: 4.1, icon: Globe },
            { id: 29, title: 'Дипломатия', duration: '4 года', rating: 4.7, icon: Globe },
            { id: 30, title: 'Международное образование', duration: '4 года', rating: 4.2, icon: Globe },
        ]
    };

    const allDirections = [...directions.medical, ...directions.business, ...directions.international];

    const filteredDirections = allDirections.filter(direction => {
        const matchesSearch = direction.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' ||
            (selectedCategory === 'medical' && direction.id <= 10) ||
            (selectedCategory === 'business' && direction.id > 10 && direction.id <= 20) ||
            (selectedCategory === 'international' && direction.id > 20);
        return matchesSearch && matchesCategory;
    });

    const medicalDirections = filteredDirections.filter(d => d.id <= 10);
    const businessDirections = filteredDirections.filter(d => d.id > 10 && d.id <= 20);
    const internationalDirections = filteredDirections.filter(d => d.id > 20);

    const toggleDirection = (directionId) => {
        setExpandedDirection(expandedDirection === directionId ? null : directionId);
    };

    const renderDirectionDetails = () => (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                    Качественное образование по данному направлению с использованием современных методик обучения.
                    Программа включает теоретические знания и практические навыки, необходимые для успешной
                    профессиональной деятельности. Обучение ведется опытными преподавателями с применением
                    инновационных технологий.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* 1 смена */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold" style={{ color: brandColor }}>1 смена</h4>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Гранты</span>
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Стипендии</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold" style={{ color: brandColor }}>27 450 000 UZS</div>
                            <div className="text-sm text-gray-600">Стоимость за семестр</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold" style={{ color: brandColor }}>54 900 000 UZS</div>
                            <div className="text-sm text-gray-600">Стоимость за учебный год</div>
                        </div>
                    </div>
                </div>

                {/* 2 смена */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-bold mb-4" style={{ color: brandColor }}>2 смена</h4>
                    <div className="space-y-3">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold" style={{ color: brandColor }}>16 450 000 UZS</div>
                            <div className="text-sm text-gray-600">Стоимость за семестр</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold" style={{ color: brandColor }}>32 900 000 UZS</div>
                            <div className="text-sm text-gray-600">Стоимость за учебный год</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center flex justify-end">
                <button
                    className="px-8 py-3 rounded-lg text-white font-bold transition-all hover:shadow-lg"
                    style={{
                        background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                    }}
                >
                    Регистрация
                </button>
            </div>
        </div>
    );

    const renderDirectionsList = (directionsList, categoryTitle, categoryIcon) => {
        if (directionsList.length === 0) return null;

        return (
            <div className="bg-white rounded-lg shadow-md mb-8">
                <div className="p-6 border-b border-gray-200" style={{ backgroundColor: brandColorLighter }}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {React.createElement(categoryIcon, { size: 24, style: { color: brandColor }, className: "mr-3" })}
                            <h2 className="text-2xl font-bold" style={{ color: brandColor }}>
                                {categoryTitle}
                            </h2>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <GraduationCap size={16} className="mr-1" />
                                {directionsList.length} программ
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {directionsList.map((direction) => {
                        const IconComponent = direction.icon;
                        const isExpanded = expandedDirection === direction.id;

                        return (
                            <div key={direction.id}>
                                <div
                                    className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() => toggleDirection(direction.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 flex items-center">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                                                style={{ backgroundColor: brandColorLighter }}
                                            >
                                                <IconComponent size={20} style={{ color: brandColor }} />
                                            </div>
                                            <div>
                                                <div className="flex items-center flex-wrap mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900 mr-3">
                                                        {direction.title}
                                                    </h3>
                                                    {/* <div className="flex items-center">
                                                        <Star size={14} className="mr-1 fill-current text-yellow-400" />
                                                        <span className="text-sm font-medium text-gray-600">{direction.rating}</span>
                                                    </div> */}
                                                </div>
                                                <div className="flex items-center space-x-6 text-sm text-gray-500">
                                                    <div className="flex items-center">
                                                        <Clock size={16} className="mr-2" />
                                                        <span>{direction.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            {isExpanded ? (
                                                <ChevronDown size={20} style={{ color: brandColor }} />
                                            ) : (
                                                <ChevronRight size={20} className="text-gray-400" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {isExpanded && renderDirectionDetails()}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Structured Data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "EMU University",
                    "url": "https://emuni.uz",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Направления подготовки",
                        "numberOfItems": 30
                    }
                })
            }} />

            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Направления подготовки</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Найдите идеальную программу обучения среди 30 направлений
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-screen-xl mx-auto px-6 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>

                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        {/* Search */}
                        <div className="relative flex-1 w-full lg:w-auto">
                            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Поиск по названию направления..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all"
                                style={{
                                    '--tw-ring-color': brandColor,
                                    focusRingColor: brandColor
                                }}
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex gap-3 w-full lg:w-auto">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`flex-1 lg:flex-none px-6 py-3 rounded-lg font-medium transition-all ${selectedCategory === 'all' ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-100 border-2 border-gray-200'
                                    }`}
                                style={{
                                    background: selectedCategory === 'all'
                                        ? `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                        : '#f3f4f6'
                                }}
                            >
                                Все (30)
                            </button>
                            <button
                                onClick={() => setSelectedCategory('medical')}
                                className={`flex-1 lg:flex-none px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${selectedCategory === 'medical' ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-100 border-2 border-gray-200'
                                    }`}
                                style={{
                                    background: selectedCategory === 'medical'
                                        ? `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                        : '#f3f4f6'
                                }}
                            >
                                <Stethoscope size={18} className="mr-2" />
                                Медицина (10)
                            </button>
                            <button
                                onClick={() => setSelectedCategory('business')}
                                className={`flex-1 lg:flex-none px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${selectedCategory === 'business' ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-100 border-2 border-gray-200'
                                    }`}
                                style={{
                                    background: selectedCategory === 'business'
                                        ? `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                        : '#f3f4f6'
                                }}
                            >
                                <Briefcase size={18} className="mr-2" />
                                Бизнес (10)
                            </button>
                            <button
                                onClick={() => setSelectedCategory('international')}
                                className={`flex-1 lg:flex-none px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${selectedCategory === 'international' ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-100 border-2 border-gray-200'
                                    }`}
                                style={{
                                    background: selectedCategory === 'international'
                                        ? `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                        : '#f3f4f6'
                                }}
                            >
                                <Globe size={18} className="mr-2" />
                                International (10)
                            </button>
                        </div>
                    </div>

                    {/* Results Counter */}
                    {searchTerm && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-600">
                                Найдено направлений: <span className="font-semibold" style={{ color: brandColor }}>
                                    {filteredDirections.length}
                                </span>
                            </p>
                        </div>
                    )}
                </div>

                {/* No Results */}
                {filteredDirections.length === 0 && searchTerm && (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center mb-8">
                        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                            <Search size={24} style={{ color: brandColor }} />
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: brandColor }}>
                            Ничего не найдено
                        </h3>
                        <p className="text-gray-600 mb-4">
                            По запросу "{searchTerm}" не найдено подходящих направлений
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="px-6 py-2 rounded-lg text-white font-medium"
                            style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        >
                            Очистить поиск
                        </button>
                    </div>
                )}

                {/* Directions Lists */}
                {(selectedCategory === 'all' || selectedCategory === 'medical') &&
                    renderDirectionsList(medicalDirections, 'Медицинские направления', Stethoscope)}

                {(selectedCategory === 'all' || selectedCategory === 'business') &&
                    renderDirectionsList(businessDirections, 'Бизнес направления', Briefcase)}

                {(selectedCategory === 'all' || selectedCategory === 'international') &&
                    renderDirectionsList(internationalDirections, 'Международные направления', Globe)}

                {/* Summary Statistics */}
                <div className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(25%, -25%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-25%, 25%)' }}></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: brandColor }}>
                            Статистика направлений EMU University
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: brandColorLighter }}
                                >
                                    <GraduationCap size={24} style={{ color: brandColor }} />
                                </div>
                                <div className="text-3xl font-bold mb-2" style={{ color: brandColor }}>30</div>
                                <div className="text-gray-600 text-sm">Направления подготовки</div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: brandColorLighter }}
                                >
                                    <Stethoscope size={24} style={{ color: brandColor }} />
                                </div>
                                <div className="text-3xl font-bold mb-2" style={{ color: brandColor }}>10</div>
                                <div className="text-gray-600 text-sm">Медицинских программ</div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: brandColorLighter }}
                                >
                                    <Briefcase size={24} style={{ color: brandColor }} />
                                </div>
                                <div className="text-3xl font-bold mb-2" style={{ color: brandColor }}>10</div>
                                <div className="text-gray-600 text-sm">Бизнес программ</div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: brandColorLighter }}
                                >
                                    <Globe size={24} style={{ color: brandColor }} />
                                </div>
                                <div className="text-3xl font-bold mb-2" style={{ color: brandColor }}>10</div>
                                <div className="text-gray-600 text-sm">Международных программ</div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12 text-center">
                            <div className="max-w-2xl mx-auto">
                                <h4 className="text-xl font-bold mb-4" style={{ color: brandColor }}>
                                    Готовы начать обучение?
                                </h4>
                                <p className="text-gray-600 mb-6">
                                    Выберите направление и подайте заявку на поступление уже сегодня
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        className="px-8 py-3 rounded-lg text-white font-bold transition-all hover:shadow-lg"
                                        style={{
                                            background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                        }}
                                    >
                                        Подать заявку
                                    </button>
                                    <button
                                        className="px-8 py-3 rounded-lg font-bold border-2 transition-all hover:shadow-md hover:bg-gray-50"
                                        style={{
                                            color: brandColor,
                                            borderColor: brandColor
                                        }}
                                    >
                                        Получить консультацию
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectionsPage;