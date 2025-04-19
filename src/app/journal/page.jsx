// journal/page.jsx

'use client'
import React, { useState } from 'react';
import { Book, BookOpen, Download, FileText, Users, ChevronRight, Menu, Images } from 'lucide-react';

const journals = [
    { id: 1, number: 3, year: 2023, downloadUrl: "#" },
    { id: 2, number: 2, year: 2023, downloadUrl: "#" },
    { id: 3, number: 1, year: 2023, downloadUrl: "#" },
    { id: 4, number: 2, year: 2022, downloadUrl: "#" },
    { id: 5, number: 1, year: 2022, downloadUrl: "#" },
];

const JournalPage = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const filteredJournals = selectedYear === 'all'
        ? journals
        : journals.filter(journal => journal.year === parseInt(selectedYear));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navigation */}
            <nav style={{ display: 'none' }} className="bg-white shadow-sm h-16 fixed w-full top-0 z-50">
                <div className="max-w-screen-xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Book className="w-6 h-6 text-[#5f1464]" />
                        <span className="text-xl font-semibold text-gray-900">JHNS</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <button
                            onClick={() => setSelectedYear('all')}
                            className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${selectedYear === 'all'
                                ? 'text-[#5f1464] border-b-2 border-[#5f1464]'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            All Years
                        </button>
                        {[2023, 2022].map(year => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year.toString())}
                                className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${selectedYear === year.toString()
                                    ? 'text-[#5f1464] border-b-2 border-[#5f1464]'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-2">
                            <button
                                onClick={() => {
                                    setSelectedYear('all');
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm ${selectedYear === 'all'
                                    ? 'text-[#5f1464] bg-purple-50'
                                    : 'text-gray-500'
                                    }`}
                            >
                                All Years
                            </button>
                            {[2023, 2022].map(year => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedYear(year.toString());
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 text-sm ${selectedYear === year.toString()
                                        ? 'text-[#5f1464] bg-purple-50'
                                        : 'text-gray-500'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            {/* <div className="pt-16"> */}
            <div>

                {/* Hero Section */}
                {/* <div className="bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464]/10 to-purple-50" />
                    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-24">
                        <div className="relative z-10 w-full">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Journal of
                                <br />
                                <span className="text-[#5f1464]">Humanities & Natural Sciences</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                                Exploring the intersection of human knowledge and natural phenomena through rigorous research and academic excellence
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Hero Section */}
                <div className="bg-white relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                        <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                        <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                    </div>

                    {/* Main Content */}
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {/* Text Content */}
                            <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                                <div className="relative">
                                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                        Журнал
                                        <br />
                                        <span className="text-[#5f1464] relative">
                                            гуманитарных и естественных наук
                                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                        </span>
                                    </h1>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                    Наш журнал объединяет исследования и достижения в области гуманитарных и естественных наук, предоставляя платформу для обмена идеями, научных дискуссий и представления новых концепций.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <button className="px-8 py-3 bg-[#5f1464] text-white rounded-full hover:bg-opacity-90 transition-colors transform hover:-translate-y-1 duration-200">
                                        Отправить статью
                                    </button>
                                    <button className="px-8 py-3 border-2 border-[#5f1464] text-[#5f1464] rounded-full hover:bg-[#5f1464] hover:text-white transition-colors transform hover:-translate-y-1 duration-200">
                                        Просмотреть журналы
                                    </button>
                                </div>
                            </div>

                            {/* Animated Book */}
                            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                                <div className="relative w-56 h-72 md:w-72 md:h-96 transform hover:scale-105 transition-transform duration-300">
                                    {/* Book Cover */}
                                    {/* Book Cover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464] to-[#7a407f] rounded-lg shadow-2xl transform perspective-1000 rotate-y-5 animate-book-hover">
                                        <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                                            {/* Изображение обложки журнала */}
                                            <img
                                                src="https://emuni.uz/wp-content/uploads/2023/06/image_2023-06-14_10-55-50.png"
                                                alt="Обложка журнала"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Book Pages */}
                                    {/* <div className="absolute inset-y-4 -right-2 w-8 bg-white rounded-r-lg transform origin-left rotate-y-40 shadow-xl" /> */}
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-200 rounded-full animate-float" />
                                <div className="absolute bottom-8 right-8 w-8 h-8 bg-pink-200 rounded-full animate-float-delay" />
                                <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-[#5f1464]/20 rounded-full animate-float-delay-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add these styles to your global CSS or create a new style tag */}
                <style jsx global>{`
    @keyframes book-hover {
        0%, 100% { transform: perspective(1000px) rotateY(5deg) translateY(0px); }
        50% { transform: perspective(1000px) rotateY(8deg) translateY(-10px); }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }

    .animate-book-hover {
        animation: book-hover 6s infinite ease-in-out;
    }

    .animate-float {
        animation: float 4s infinite ease-in-out;
    }

    .animate-float-delay {
        animation: float 4s infinite ease-in-out 1s;
    }

    .animate-float-delay-2 {
        animation: float 4s infinite ease-in-out 2s;
    }

    .animate-spin-slow {
        animation: spin 8s linear infinite;
    }
`}</style>


                {/* Journal Grid */}
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                        {filteredJournals.map((journal) => (
                            <div
                                key={journal.id}
                                className="group cursor-pointer"
                            >
                                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2">
                                    <div className="aspect-w-3 aspect-h-4">
                                        <img
                                            src="https://emuni.uz/wp-content/uploads/2023/06/image_2023-06-14_10-55-50.png"
                                            alt={`Journal cover ${journal.year} №${journal.number}`}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                                        <h3 className="text-base md:text-lg font-bold mb-3">
                                            ЖУРНАЛ ГУМАНИТАРНЫХ И ЕСТЕСТВЕННЫХ НАУК
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm md:text-base">{journal.year}</span>
                                            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                                                <Download className="w-4 h-4" />
                                                <span className="text-xs md:text-sm font-medium">Скачать</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Editorial Board */}
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20">
                        <div className="w-full md:w-1/3">
                            <img
                                src="https://emuni.uz/wp-content/uploads/2023/06/emujur.png"
                                alt="Editorial Team"
                                className="rounded-xl w-full"
                            />
                        </div>

                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
                            <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Руководство журнала</h4>
                                        <p className="text-sm md:text-base text-gray-600">Познакомьтесь с уважаемыми членами совета, которые определяют стратегическое направление нашего журнала, формируя его научную политику и обеспечивая высокий уровень публикаций. Их опыт и знания помогают развивать междисциплинарные исследования и поддерживать академические стандарты</p>
                                    </div>
                                    {/* <ChevronRight className="w-6 h-6 text-[#5f1464]" /> */}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Международные эксперты</h4>
                                        <p className="text-sm md:text-base text-gray-600">Наш журнал гордится глобальной сетью экспертов, включающей рецензентов и членов редколлегии из разных стран. Они играют ключевую роль в обеспечении объективного и качественного отбора научных статей, а также способствуют международному обмену знаниями и лучшими практиками.</p>
                                    </div>
                                    {/* <ChevronRight className="w-6 h-6 text-[#5f1464]" /> */}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Региональные представители</h4>
                                        <p className="text-sm md:text-base text-gray-600">Наши локальные эксперты помогают развивать журнал на региональном уровне, привлекая авторов, поддерживая научное сообщество и адаптируя глобальные научные достижения к местным реалиям. Их вклад способствует укреплению связей между исследователями и расширению академического диалога.</p>
                                    </div>
                                    {/* <ChevronRight className="w-6 h-6 text-[#5f1464]" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Combined Rules Section */}
                <div className="bg-white py-12 md:py-16">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Правила для размещения
                            </h2>
                            <div className="w-24 h-1 bg-[#5f1464] mx-auto mb-6 md:mb-8"></div>
                            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                                Для публикации в Журнале гуманитарных и естественных наук авторы должны соблюдать следующие требования:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-[#5f1464]/10 rounded-full">
                                        <FileText className="w-6 h-6 text-[#5f1464]" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Структура статьи</h3>
                                </div>
                                <div className="text-sm md:text-base text-gray-600">
                                    <ul>
                                        <li>
                                            УДК-код (если имеется).
                                        </li>
                                        <li>
                                            Название статьи и аннотацию на русском, узбекском и английском языках.
                                        </li>
                                        <li>
                                            Ф.И.О. авторов, ученую степень, ученое звание, название организации, где выполнена работа (на русском, узбекском и английском).
                                        </li>
                                        <li>
                                            Ф.И.О. научного руководителя (если есть).
                                        </li>
                                        <li>
                                            Контактные данные (e-mail, телефон) для связи с редакцией.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-[#5f1464]/10 rounded-full">
                                        <BookOpen className="w-6 h-6 text-[#5f1464]" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Требования к источникам и ссылкам</h3>
                                </div>
                                <p className="text-sm md:text-base text-gray-600">Список литературы оформляется в алфавитном порядке:
                                    Сначала отечественные источники, затем иностранные.<br></br>
                                    Все ссылки должны быть пронумерованы и соответствовать порядку в тексте.<br></br>
                                    Запрещено ссылаться на неопубликованные работы.<br></br>
                                    Автор отвечает за корректность библиографии.<br></br></p>
                            </div>

                            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-[#5f1464]/10 rounded-full">
                                        <Images className="w-6 h-6 text-[#5f1464]" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Иллюстрации и таблицы</h3>
                                </div>
                                <p className="text-sm md:text-base text-gray-600">Рисунки вставляются в текст, их номер указывается под изображением.
                                    Графики и диаграммы не должны быть перегружены текстом.<br></br>
                                    Фотографии и чертежи – только в черно-белом формате.<br></br>
                                    Таблицы должны быть компактными, наглядными и точно соответствовать данным в тексте.<br></br></p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#5f1464] text-white rounded-full hover:bg-opacity-90 transition-colors">
                                <Download className="w-5 h-5 mr-2" />
                                <span className="text-sm md:text-base">Скачать</span>
                            </button>
                            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#5f1464] text-[#5f1464] rounded-full hover:bg-[#5f1464] hover:text-white transition-colors">
                                <FileText className="w-5 h-5 mr-2" />
                                <span className="text-sm md:text-base">Просмотреть онлайн</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalPage;