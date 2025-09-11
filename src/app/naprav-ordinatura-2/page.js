'use client'

import { useState } from 'react';
import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital } from 'lucide-react';

export default function OrdinaturaPage() {
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['Все', 'Медицина', 'Бизнес', 'International'];

    const programs = [
        {
            id: 1,
            title: 'Кардиология',
            category: 'Медицина',
            description: 'Углубленное изучение заболеваний сердечно-сосудистой системы с практикой в ведущих клиниках',
            semesterPrice: '18 500 000',
            yearPrice: '37 000 000',
            shift1Price: '18 500 000',
            shift2Price: '19 200 000',
            duration: '2 года',
            icon: Heart,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 2,
            title: 'Хирургия',
            category: 'Медицина',
            description: 'Комплексная подготовка хирургов с использованием современных технологий и методик',
            semesterPrice: '22 800 000',
            yearPrice: '45 600 000',
            shift1Price: '22 800 000',
            shift2Price: '23 500 000',
            duration: '3 года',
            icon: Stethoscope,
            benefits: ['Гранты']
        },
        {
            id: 3,
            title: 'Неврология',
            category: 'Медицина',
            description: 'Изучение нервной системы и современных методов диагностики и лечения',
            semesterPrice: '17 300 000',
            yearPrice: '34 600 000',
            shift1Price: '17 300 000',
            shift2Price: '18 000 000',
            duration: '2 года',
            icon: Brain,
            benefits: ['Стипендия']
        },
        {
            id: 4,
            title: 'Финансовый менеджмент',
            category: 'Бизнес',
            description: 'Управление финансами предприятий и инвестиционными портфелями',
            semesterPrice: '15 800 000',
            yearPrice: '31 600 000',
            shift1Price: '15 800 000',
            shift2Price: '16 200 000',
            duration: '2 года',
            icon: TrendingUp,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 5,
            title: 'Маркетинг и продажи',
            category: 'Бизнес',
            description: 'Современные стратегии продвижения и digital-маркетинг',
            semesterPrice: '16 600 000',
            yearPrice: '33 200 000',
            shift1Price: '16 600 000',
            shift2Price: '17 100 000',
            duration: '2 года',
            icon: BarChart3,
            benefits: ['Стипендия']
        },
        {
            id: 6,
            title: 'International Business',
            category: 'International',
            description: 'Global business strategies and cross-cultural management',
            semesterPrice: '28 300 000',
            yearPrice: '56 600 000',
            shift1Price: '28 300 000',
            shift2Price: '29 000 000',
            duration: '2 года',
            icon: Globe2,
            benefits: ['Гранты']
        },
        {
            id: 7,
            title: 'Global Healthcare Management',
            category: 'International',
            description: 'International healthcare systems and management practices',
            semesterPrice: '25 900 000',
            yearPrice: '51 800 000',
            shift1Price: '25 900 000',
            shift2Price: '26 500 000',
            duration: '2 года',
            icon: Hospital,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 8,
            title: 'Операционный менеджмент',
            category: 'Бизнес',
            description: 'Оптимизация бизнес-процессов и управление цепочками поставок',
            semesterPrice: '17 700 000',
            yearPrice: '35 400 000',
            shift1Price: '17 700 000',
            shift2Price: '18 300 000',
            duration: '2 года',
            icon: Target,
            benefits: ['Стипендия']
        }
    ];

    const filteredPrograms = programs.filter(program => {
        const matchesCategory = selectedCategory === 'Все' || program.category === selectedCategory;
        const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            program.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Медицина': return <GraduationCap className="w-5 h-5" />;
            case 'Бизнес': return <Building2 className="w-5 h-5" />;
            case 'International': return <Globe className="w-5 h-5" />;
            default: return <Users className="w-5 h-5" />;
        }
    };

    const getBenefitColor = (benefit) => {
        if (benefit.includes('Стипендия')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
        if (benefit.includes('Гранты')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Программы Ординатуры</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-white max-w-3xl">
                        Профессиональные программы последипломного медицинского образования
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


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    {/* Search */}
                    {/* <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Поиск направлений..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div> */}

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${selectedCategory === category
                                    ? 'bg-[#6b0e55] text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#6b0e55] hover:text-[#6b0e55]'
                                    }`}
                            >
                                {getCategoryIcon(category)}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results count */}
                <div className="mb-6 text-center">
                    <p className="text-gray-600">
                        Найдено <span className="font-semibold text-[#6b0e55]">{filteredPrograms.length}</span> направлений
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center">
                                        <program.icon className="w-6 h-6 text-[#6b0e55]" />
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                        {program.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6b0e55] transition-colors">
                                    {program.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {program.description}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 pb-4">
                                {/* Benefits */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {program.benefits.map((benefit, index) => (
                                            <span
                                                key={index}
                                                className={getBenefitColor(benefit)}
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Information */}
                                <div className="mb-4 space-y-3">
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span className="text-gray-600">За семестр:</span>
                                                <div className="font-semibold text-[#6b0e55]">{program.semesterPrice} сум</div>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">За год:</span>
                                                <div className="font-semibold text-[#6b0e55]">{program.yearPrice} сум</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                                        <div>
                                            <span>1 смена: </span>
                                            <span className="font-medium">{program.shift1Price} сум</span>
                                        </div>
                                        <div>
                                            <span>2 смена: </span>
                                            <span className="font-medium">{program.shift2Price} сум</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                                    <Clock className="w-4 h-4" />
                                    {program.duration}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 pb-6">
                                <button className="w-full bg-[#6b0e55] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#5a0b47] transition-colors duration-200 flex items-center justify-center gap-2">
                                    Подробнее
                                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPrograms.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Направления не найдены</h3>
                        <p className="text-gray-600 mb-4">
                            Попробуйте изменить критерии поиска или выбрать другую категорию
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('Все');
                            }}
                            className="px-6 py-2 bg-[#6b0e55] text-white rounded-lg hover:bg-[#5a0b47] transition-colors"
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border">
                    <div className="max-w-2xl mx-auto">
                        <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Подача документов на 2025/2026 учебный год
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Приемная комиссия принимает документы до 25 августа 2025 года. Получите персональную консультацию по выбору программы обучения.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-colors">
                                Подать документы
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}