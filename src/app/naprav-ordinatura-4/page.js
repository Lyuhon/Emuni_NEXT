'use client'

import { useState } from 'react';
import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital, ArrowLeft, ChevronRight } from 'lucide-react';

export default function OrdinaturaPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const categories = [
        { id: 'medicine', name: 'Медицина', icon: GraduationCap, color: 'bg-red-500' },
        { id: 'business', name: 'Бизнес', icon: Building2, color: 'bg-blue-500' },
        { id: 'international', name: 'International', icon: Globe, color: 'bg-green-500' }
    ];

    const originalPrograms = [
        {
            id: 1,
            title: 'Кардиология',
            category: 'medicine',
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
            category: 'medicine',
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
            category: 'medicine',
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
            category: 'business',
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
            category: 'business',
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
            category: 'international',
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
            category: 'international',
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
            category: 'business',
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

    // Увеличиваем массив программ, повторяя их 5 раз
    const programs = [];
    for (let i = 0; i < 5; i++) {
        originalPrograms.forEach((program, index) => {
            programs.push({
                ...program,
                id: i * originalPrograms.length + program.id,
                title: `${program.title} ${i > 0 ? `(№${i + 1})` : ''}`
            });
        });
    }

    const filteredPrograms = programs.filter(program => program.category === selectedCategory);

    const getBenefitColor = (benefit) => {
        if (benefit.includes('Стипендия')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
        if (benefit.includes('Гранты')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
    };

    const resetToCategories = () => {
        setSelectedCategory(null);
        setSelectedProgram(null);
    };

    const resetToPrograms = () => {
        setSelectedProgram(null);
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
                {/* Breadcrumb */}
                {(selectedCategory || selectedProgram) && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <button
                                onClick={resetToCategories}
                                className="hover:text-[#6b0e55] transition-colors"
                            >
                                Категории
                            </button>
                            {selectedCategory && (
                                <>
                                    <ChevronRight className="w-4 h-4" />
                                    <button
                                        onClick={resetToPrograms}
                                        className={`hover:text-[#6b0e55] transition-colors ${!selectedProgram ? 'text-[#6b0e55] font-medium' : ''}`}
                                    >
                                        {categories.find(cat => cat.id === selectedCategory)?.name}
                                    </button>
                                </>
                            )}
                            {selectedProgram && (
                                <>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-[#6b0e55] font-medium">{selectedProgram.title}</span>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Step 1: Category Selection */}
                {!selectedCategory && (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Выберите напрвление</h2>
                        <p className="text-gray-600 mb-8">Выберите интересующую вас область обучения</p>

                        <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#6b0e55] transition-all duration-300"
                                >
                                    {/* <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div> */}
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        {category.id === 'medicine' && 'Медицинские специальности и клиническая практика'}
                                        {category.id === 'business' && 'Управление, финансы и маркетинг'}
                                        {category.id === 'international' && 'Международные программы на английском языке'}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Program Selection */}
                {selectedCategory && !selectedProgram && (
                    <div>
                        <div className="text-center mb-8">
                            <button
                                onClick={resetToCategories}
                                className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-colors mb-4"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Назад к категориям
                            </button>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Выберите направление в категории "{categories.find(cat => cat.id === selectedCategory)?.name}"
                            </h2>
                            <p className="text-gray-600">
                                Найдено <span className="font-semibold text-[#6b0e55]">{filteredPrograms.length}</span> направлений
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredPrograms.map((program) => (
                                <button
                                    key={program.id}
                                    onClick={() => setSelectedProgram(program)}
                                    className="group p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#6b0e55] transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6b0e55]/20 transition-colors">
                                        <program.icon className="w-6 h-6 text-[#6b0e55]" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                        {program.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Program Details */}
                {selectedProgram && (
                    <div>
                        <div className="mb-8">
                            <button
                                onClick={resetToPrograms}
                                className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-colors mb-4"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Назад к направлениям
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            {/* Program Header */}
                            <div className="bg-gradient-to-r from-[#6b0e55] to-[#5a0b47] p-8 text-white">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <selectedProgram.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-3xl font-bold mb-2">{selectedProgram.title}</h1>
                                        <p className="text-lg opacity-90">{selectedProgram.description}</p>
                                        <div className="flex items-center gap-4 mt-4 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {selectedProgram.duration}
                                            </div>
                                            <span className="px-3 py-1 bg-white/20 rounded-full">
                                                {categories.find(cat => cat.id === selectedProgram.category)?.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Program Content */}
                            <div className="p-8">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Left Column */}
                                    <div className="space-y-6">
                                        {/* Benefits */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">Льготы и преимущества</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProgram.benefits.map((benefit, index) => (
                                                    <span
                                                        key={index}
                                                        className={getBenefitColor(benefit)}
                                                    >
                                                        {benefit}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Duration Details */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">Продолжительность обучения</h3>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-5 h-5 text-[#6b0e55]" />
                                                    <span className="font-semibold text-[#6b0e55]">{selectedProgram.duration}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    Полная программа с практикой и дипломным проектом
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Pricing */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">Стоимость обучения</h3>
                                            <div className="space-y-4">
                                                <div className="bg-[#6b0e55]/5 rounded-lg p-4 border border-[#6b0e55]/20">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-600">За семестр:</span>
                                                            <div className="text-xl font-bold text-[#6b0e55]">{selectedProgram.semesterPrice} сум</div>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-600">За год:</span>
                                                            <div className="text-xl font-bold text-[#6b0e55]">{selectedProgram.yearPrice} сум</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-gray-50 rounded-lg p-3">
                                                        <span className="text-sm text-gray-600">1 смена:</span>
                                                        <div className="font-semibold text-gray-900">{selectedProgram.shift1Price} сум</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-lg p-3">
                                                        <span className="text-sm text-gray-600">2 смена:</span>
                                                        <div className="font-semibold text-gray-900">{selectedProgram.shift2Price} сум</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="flex-1 bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a0b47] transition-colors">
                                            Подать документы
                                        </button>
                                        <button className="flex-1 border border-[#6b0e55] text-[#6b0e55] py-3 px-6 rounded-lg font-medium hover:bg-[#6b0e55] hover:text-white transition-colors">
                                            Получить консультацию
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom CTA - показываем только на первом этапе */}
                {!selectedCategory && (
                    <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border">
                        <div className="max-w-2xl mx-auto">
                            <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Подача документов на 2025/2026 учебный год
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Приемная комиссия принимает документы до 25 августа 2025 года. Получите персональную консультацию по выбору программы обучения.
                            </p>
                            <button className="px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-colors">
                                Получить консультацию
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}