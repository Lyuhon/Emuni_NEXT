// app/napravleniya/DirectionsClient.js
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Book, Beaker, Heart, BookOpen, Clock, Globe, DollarSign, User } from 'lucide-react';
import Image from 'next/image';
import parse from 'html-react-parser';
import PricingAccordion from './PricingAccordion';

// export default function DirectionsClient({ directions, directionContent, zaochkaDirections, zaochkaDirectionContent, acf }) {
export default function DirectionsClient({ directions, directionContent, zaochkaDirections, zaochkaDirectionContent, acf, tarifImages }) {
    // Для отладки - выводим данные в консоль
    console.log("Компонент рендерится с данными:");
    console.log("acf:", JSON.stringify(acf));
    console.log("acf?.accordion_repeater_2:", acf?.accordion_repeater_2);
    console.log("zaochkaDirections:", zaochkaDirections);
    console.log("typeof acf:", typeof acf);

    // Решение проблемы - преобразуем строку в объект, если acf пришёл в виде строки
    if (typeof acf === 'string') {
        try {
            acf = JSON.parse(acf);
            console.log("acf после парсинга:", acf);
        } catch (e) {
            console.error("Ошибка парсинга acf:", e);
        }
    }

    const [activeDirection, setActiveDirection] = useState('Фармация');
    const [activeTab, setActiveTab] = useState('medical');

    // Фирменные цвета
    // const brandColor = '#631463';
    // const brandColorLight = '#8a3c8a';
    // const brandColorLighter = '#f7eef7';
    const brandColor = '#6b0e55';         // Основной — глубокий пурпурно-розовый
    const brandColorLight = '#9c3f84';    // Светлее — более мягкий, но всё ещё насыщенный
    const brandColorLighter = '#f6eaf2';  // Самый светлый — почти белый с розовым оттенком


    // Преимущества
    const advantages = [
        {
            title: 'Международная практика',
            description: 'Стажировка в ведущих клиниках Европы',
            icon: <Globe size={24} />,
        },
        {
            title: 'Опытные специалисты',
            description: 'Обучение под руководством профессионалов',
            icon: <User size={24} />,
        },
        {
            title: 'Современное оборудование',
            description: 'Доступ к передовым технологиям',
            icon: <Beaker size={24} />,
        },
        {
            title: 'Помощь в трудоустройстве',
            description: 'Поддержка в построении карьере',
            icon: <Award size={24} />,
        },
    ];

    // При изменении активного таба, обновляем активное направление
    useEffect(() => {
        console.log("Активный таб изменился на:", activeTab);

        // Если таб "бизнес" и есть бизнес-направления
        if (activeTab === 'business' && acf && acf.accordion_repeater_2 && acf.accordion_repeater_2.length > 0) {
            console.log("Устанавливаем первое бизнес-направление:", acf.accordion_repeater_2[0].accordion_title);
            setActiveDirection(acf.accordion_repeater_2[0].accordion_title);
        }
        // Если таб "медицинский" и есть медицинские направления
        else if (activeTab === 'medical' && directions && Object.keys(directions).length > 0) {
            const firstDirection = Object.keys(directions)[0];
            console.log("Устанавливаем первое мед-направление:", firstDirection);
            setActiveDirection(firstDirection);
        }
        // Если таб "заочный" и есть заочные направления
        else if (activeTab === 'zaochka' && zaochkaDirections && Object.keys(zaochkaDirections).length > 0) {
            const firstZaochkaDirection = Object.keys(zaochkaDirections)[0];
            console.log("Устанавливаем первое заочное направление:", firstZaochkaDirection);
            setActiveDirection(firstZaochkaDirection);
        }
    }, [activeTab, directions, acf, zaochkaDirections]);

    // Получаем активное направление с учетом вкладки
    const currentDirection = activeTab === 'medical'
        ? (directionContent[activeDirection] || directionContent[Object.keys(directionContent)[0]] || null)
        : null;

    const currentBusinessDirection = activeTab === 'business' && acf?.accordion_repeater_2
        ? {
            ...acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection),
            // Обеспечиваем что поля преобразованы в правильный формат (boolean)
            grant: acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.grant === true,
            stipendiya: acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.stipendiya === true,
            '1_smena': acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.['1_smena'] === true,
            '2_smena': acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.['2_smena'] === true,
            grant_2_smena: acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.grant_2_smena === true,
            stipendiya_2_smena: acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.stipendiya_2_smena === true
        }
        : null;

    const currentZaochkaDirection = activeTab === 'zaochka'
        ? (zaochkaDirectionContent[activeDirection] || zaochkaDirectionContent[Object.keys(zaochkaDirectionContent)[0]] || null)
        : null;

    // Обновленный массив вкладок с новой вкладкой "Заочное обучение"
    const tabs = [
        { id: 'medical', name: acf?.med_napravleniya || 'Медицинская школа' },
        { id: 'business', name: acf?.business_napravleniya || 'Бизнес и социальная школа' },
        { id: 'zaochka', name: acf?.zaochka_napravleniya || 'Заочное обучение' },
    ];


    // Количесвто лет обучения
    const getStudyDuration = () => {
        if (activeTab === 'medical' && currentDirection) {
            return currentDirection.duration;
        } else if (activeTab === 'business' && currentBusinessDirection) {
            return currentBusinessDirection.duration || currentBusinessDirection.let_obucheniya;
        } else if (activeTab === 'zaochka' && currentZaochkaDirection) {
            return currentZaochkaDirection.duration;
        }
        return null;
    };


    // Функция для рендеринга бейджей (меток) на основе данных
    const renderBadges = (data) => {
        if (!data) return null;

        // Массив для хранения бейджей
        const badges = [];

        // Проверяем наличие меток и добавляем их
        if (data['1_smena'] === true) {
            badges.push(
                <div key="1_smena" className="whitespace-nowrap flex items-center bg-[#ffe0ac] text-[#f59e0b] px-3 py-[2px] rounded-full text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    1 смена
                </div>
            );
        }

        if (data['2_smena'] === true) {
            badges.push(
                <div key="2_smena" className="second_shift_badge flex items-center bg-[#eaeaea] text-[#6b7280] px-3 py-[2px] rounded-full text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 смена
                </div>
            );
        }

        if (data.grant === true) {
            badges.push(
                <div key="grant" className="relative group">
                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Гранты
                    </div>
                    <div className="absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                    md:group-hover:opacity-100 md:opacity-0 
                    opacity-0 md:opacity-0 
                    top-full mt-1 left-0">
                        Грант — это финансовая поддержка, предоставляемая университетом для покрытия части или полной стоимости обучения, основанная на академических достижениях или других критериях.
                        <div className="absolute left-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800"></div>
                    </div>
                </div>
            );
        }

        if (data.stipendiya === true) {
            badges.push(
                <div key="stipendiya" className="relative group">
                    <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Стипендии
                    </div>
                    <div className="absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                    md:group-hover:opacity-100 md:opacity-0 
                    opacity-0 md:opacity-0 
                    top-full mt-1 right-0">
                        Стипендия — это регулярные выплаты студентам за успехи в учебе, научной деятельности или другие достижения, предоставляемые университетом или другими организациями.
                        <div className="absolute right-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800"></div>
                    </div>
                </div>
            );
        }

        // Добавляем бейдж с количеством лет обучения, если оно указано
        const duration = data.duration || data.let_obucheniya;
        if (duration && duration !== 'Длительность неизвестна') {
            // Преобразуем в строку и очищаем от пробелов
            const years = String(duration).trim();
            // Если после очистки остался текст, и это число, то добавляем бейдж
            if (years && !isNaN(parseInt(years))) {
                const yearsText = years === '1' ? 'год' : (years >= '2' && years <= '4') ? 'года' : 'лет';

                badges.push(
                    <div key="duration" className="hidden md:flex items-center bg-[#f3e5f5] text-[#8e24aa] px-3 py-1 rounded-full text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {years} {yearsText}
                    </div>
                );
            }
        }

        // Если есть бейджи, возвращаем их в контейнере
        if (badges.length > 0) {
            return <div className="info_first_shift flex gap-2 mb-3 relative">{badges}</div>;
        }

        return null;
    };

    // Функция для рендеринга бейджей для второй смены
    const renderBadges2Smena = (data) => {
        if (!data || !data['2_smena']) return null;

        // Массив для хранения бейджей
        const badges = [];

        // Всегда добавляем бейдж 2 смены
        badges.push(
            <div key="2_smena_badge" className="second_shift flex items-center bg-[#eaeaea] text-[#6b7280] px-3 py-[2px] rounded-full text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                2 смена
            </div>
        );

        // Проверяем гранты и стипендии для 2 смены
        if (data.grant_2_smena === true) {
            badges.push(
                <div key="grant_2_smena" className="relative group">
                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Гранты
                    </div>
                    <div className="absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                    md:group-hover:opacity-100 md:opacity-0 
                    opacity-0 md:opacity-0 
                    top-full mt-1 left-0">
                        Грант — это финансовая поддержка, предоставляемая университетом для покрытия части или полной стоимости обучения, основанная на академических достижениях или других критериях.
                        <div className="absolute left-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800"></div>
                    </div>
                </div>
            );
        }

        if (data.stipendiya_2_smena === true) {
            badges.push(
                <div key="stipendiya_2_smena" className="relative group">
                    <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Стипендии
                    </div>
                    <div className="absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                    md:group-hover:opacity-100 md:opacity-0 
                    opacity-0 md:opacity-0 
                    top-full mt-1 right-0">
                        Стипендия — это регулярные выплаты студентам за успехи в учебе, научной деятельности или другие достижения, предоставляемые университетом или другими организациями.
                        <div className="absolute right-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800"></div>
                    </div>
                </div>
            );
        }

        // Если есть бейджи, возвращаем их в контейнере
        if (badges.length > 0) {
            return <div className="info_second_shift flex gap-2 mb-3 relative">{badges}</div>;
        }

        return null;
    };

    // Функция для рендеринга блока цен для второй смены
    const renderPrices2Smena = (data) => {
        if (!data || !data['2_smena']) return null;

        return (
            <div className="mt-6">
                {/* <h4 className="text-lg font-medium mb-3" style={{ color: brandColor }}>Стоимость для 2-й смены</h4> */}
                {/* Бейджи для 2 смены */}
                {renderBadges2Smena(data)}
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                        <p className="text-xl font-bold" style={{ color: brandColor }}>
                            {data.semester_price_2_smena || 'Не указано'}
                        </p>
                        <p className="text-gray-600 text-sm">Стоимость за семестр</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                        <p className="text-xl font-bold" style={{ color: brandColor }}>
                            {data.full_price_2_smena || 'Не указано'}
                        </p>
                        <p className="text-gray-600 text-sm">Стоимость за учебный год</p>
                    </div>
                </div>
            </div>
        );
    };

    // Функция для получения текущего контента в зависимости от активной вкладки
    const getCurrentContent = () => {
        switch (activeTab) {
            case 'medical':
                return currentDirection;
            case 'business':
                return currentBusinessDirection;
            case 'zaochka':
                return currentZaochkaDirection;
            default:
                return null;
        }
    };

    // Функция для отображения текущего заголовка в зависимости от активной вкладки
    const getCurrentDirectionTitle = () => {
        if (activeTab === 'medical') {
            return currentDirection?.title || activeDirection;
        } else if (activeTab === 'business') {
            return activeDirection;
        } else if (activeTab === 'zaochka') {
            return currentZaochkaDirection?.title || activeDirection;
        }
        return 'Направление не выбрано';
    };

    // Функция для отображения текущего описания в зависимости от активной вкладки
    const getCurrentDirectionDescription = () => {
        if (activeTab === 'medical') {
            return currentDirection?.description && parse(currentDirection.description);
        } else if (activeTab === 'business') {
            return acf && acf.accordion_repeater_2 &&
                acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection)?.text &&
                parse(acf.accordion_repeater_2.find(item => item.accordion_title === activeDirection).text);
        } else if (activeTab === 'zaochka') {
            return currentZaochkaDirection?.description && parse(currentZaochkaDirection.description);
        }
        return 'Описание отсутствует';
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section с фоновым изображением */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(rgba(99, 20, 99, 0.39), rgba(99, 20, 99, 0.66)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4 mb-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Направления</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">С нами Вы получите востребованную специальность и пройдёте практику в ведущих клиниках и организациях</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>

            {/* Преимущества - визуальные блоки */}
            <div className="max-w-screen-xl mx-auto px-6 -mt-16 md:mb-16 mb-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {advantages.map((adv, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: brandColorLighter }}>
                                <div style={{ color: brandColor }}>{adv.icon}</div>
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>{adv.title}</h3>
                            <p className="text-gray-600">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-4">
                {/* Intro text с декоративными элементами */}
                {/* Pricing Accordion */}
                <PricingAccordion tarifImages={tarifImages} />

                {/* Tabs - стилизованные */}
                <div className="mb-10">
                    <div className="inline-flex flex-col md:flex-row gap-[10px] p-2 bg-gray-100 rounded-xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 border-2 ${activeTab === tab.id && tab.id !== 'zaochka'
                                    ? 'text-white'
                                    : tab.id === 'zaochka'
                                        ? `text-[#4a1942] rounded-full font-semibold text-sm md:text-base ${activeTab === 'zaochka' ? 'shadow-[0_0_15px_rgba(249,232,160,0.8),0_8px_10px_rgba(0,0,0,0.1)]' : ''
                                        }`
                                        : 'bg-white hover:border-opacity-100'
                                    }`}
                                style={{
                                    backgroundColor: activeTab === tab.id && tab.id !== 'zaochka' ? brandColor : 'white',
                                    color: activeTab === tab.id && tab.id !== 'zaochka' ? 'white' : tab.id === 'zaochka' ? '#4a1942' : '#666',
                                    borderColor: tab.id === 'zaochka' ? '#f5e0a0' : brandColor,
                                    borderOpacity: activeTab === tab.id ? '1' : '0.5',
                                    margin: '0 4px',
                                    background: tab.id === 'zaochka'
                                        ? activeTab === 'zaochka'
                                            ? 'linear-gradient(to bottom, #f9e8a0, #e0c260, #d4a73a)'
                                            : 'linear-gradient(to bottom, #fff5cc, #f0d890, #e6c270)'
                                        : activeTab === tab.id ? brandColor : 'white'
                                }}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Layout */}
                <div className="md:flex gap-6">
                    {/* Direction Sidebar - стилизованный */}
                    <div className="md:w-1/4 md:mb-[0] mb-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-5 text-white font-medium text-center relative" style={{ backgroundColor: brandColor }}>
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                <h3 className="text-xl font-bold relative z-10">Направления</h3>
                            </div>
                            <div className="py-2">
                                {activeTab === 'medical' ? (
                                    // Для медицинской школы - используем directions
                                    directions && Object.keys(directions).map((direction) => (
                                        <button
                                            key={direction}
                                            onClick={() => setActiveDirection(direction)}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: activeDirection === direction ? brandColorLighter : 'transparent',
                                                borderLeft: activeDirection === direction ? `4px solid ${brandColor}` : '4px solid transparent',
                                            }}
                                        >
                                            <div className="bg-[#8d1d72] p-[7px] rounded-full mr-3">
                                                <Image src={directions[direction].title_icon} alt={`${direction} icon`} width={20} height={20} className="" />
                                            </div>
                                            <span
                                                style={{ color: activeDirection === direction ? brandColor : '#333', fontWeight: activeDirection === direction ? '500' : '400' }}
                                            >
                                                {direction}
                                            </span>
                                        </button>
                                    ))
                                ) : activeTab === 'business' ? (
                                    // Для бизнес-школы - используем acf.accordion_repeater_2
                                    acf && acf.accordion_repeater_2 && acf.accordion_repeater_2.length > 0 ? acf.accordion_repeater_2.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveDirection(item.accordion_title)}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: activeDirection === item.accordion_title ? brandColorLighter : 'transparent',
                                                borderLeft: activeDirection === item.accordion_title ? `4px solid ${brandColor}` : '4px solid transparent',
                                            }}
                                        >
                                            {item.title_icon ? (
                                                <div className="bg-[#8d1d72] p-[7px] rounded-full mr-3">
                                                    <Image src={item.title_icon} alt={`${item.accordion_title} icon`} width={20} height={20} className="" />
                                                </div>
                                            ) : (
                                                <div className="p-2 rounded-full mr-3" style={{ backgroundColor: brandColorLighter }}>
                                                    <Book size={16} style={{ color: brandColor }} />
                                                </div>
                                            )}
                                            <span
                                                style={{ color: activeDirection === item.accordion_title ? brandColor : '#333', fontWeight: activeDirection === item.accordion_title ? '500' : '400' }}
                                            >
                                                {item.accordion_title}
                                            </span>
                                        </button>
                                    )) : (
                                        <div className="px-4 py-3 text-center text-gray-500">
                                            Нет доступных направлений
                                        </div>
                                    )
                                ) : (
                                    // Для заочной школы - используем zaochkaDirections
                                    zaochkaDirections && Object.keys(zaochkaDirections).length > 0 ? Object.keys(zaochkaDirections).map((direction) => (
                                        <button
                                            key={direction}
                                            onClick={() => setActiveDirection(direction)}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: activeDirection === direction ? brandColorLighter : 'transparent',
                                                borderLeft: activeDirection === direction ? `4px solid ${brandColor}` : '4px solid transparent',
                                            }}
                                        >
                                            <div className="p-2 rounded-full mr-3" style={{ backgroundColor: brandColorLighter }}>
                                                <Book size={16} style={{ color: brandColor }} />
                                            </div>
                                            <span
                                                style={{ color: activeDirection === direction ? brandColor : '#333', fontWeight: activeDirection === direction ? '500' : '400' }}
                                            >
                                                {direction}
                                            </span>
                                        </button>
                                    )) : (
                                        <div className="px-4 py-3 text-center text-gray-500">
                                            Нет доступных направлений
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Direction Content - с элементами дизайна */}
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Заголовок с фоном */}
                            <div
                                // className={`p-6 pt-10 md:pt-8 md:p-8 relative ${activeTab === 'zaochka' ? 'text-[#4a1942]' : 'text-white'}`}
                                // style={{
                                //     background: activeTab === 'zaochka'
                                //         ? 'linear-gradient(to right, #f9e8a0, #d4a73a)'
                                //         : `linear-gradient(to right, ${brandColor}, ${brandColorLight})`,
                                //     backgroundSize: 'cover'
                                // }}
                                className="p-6 pt-10 md:pt-8 md:p-8 text-white relative"
                                style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`, backgroundSize: 'cover' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: 'white' }}></div>

                                {/* Бейдж с количеством лет обучения */}
                                {getStudyDuration() && (
                                    <div className="absolute top-4 right-4 bg-white text-[#6b0e55] px-3 py-1 rounded-full text-sm font-medium shadow-md z-20 flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {getStudyDuration()} {getStudyDuration() === '1' ? 'год' : (getStudyDuration() >= '2' && getStudyDuration() <= '4') ? 'года' : 'лет'}
                                    </div>
                                )}

                                <h2
                                    className="text-3xl font-bold mb-3 relative z-10"
                                    style={{
                                        color: activeTab === 'zaochka'
                                            ? '#f5e0a0'
                                            : `#ffffff`,
                                    }}
                                >
                                    {getCurrentDirectionTitle()}
                                </h2>
                                <p
                                    className="text-white text-opacity-80 relative z-10 max-w-2xl"
                                    style={{
                                        color: activeTab === 'zaochka'
                                            ? '#f5e0a0'
                                            : `#ffffff`,
                                    }}
                                >Станьте высококвалифицированным специалистом вместе с Университетом EMU!</p>
                            </div>

                            <div className="p-4 md:p-8">
                                {/* Бейджи для направлений */}
                                {renderBadges(getCurrentContent())}

                                {/* Инфо-карточки для медицинских направлений */}
                                {activeTab === 'medical' && currentDirection?.stats && (
                                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                                        {currentDirection.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                                <p className="text-xl font-bold" style={{ color: brandColor }}>{stat.value}</p>
                                                <p className="text-gray-600 text-sm">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Блок с ценами для бизнес-направлений */}
                                {activeTab === 'business' && currentBusinessDirection && (
                                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                                        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                            <p className="text-xl font-bold" style={{ color: brandColor }}>
                                                {currentBusinessDirection.semester_price || 'Не указано'}
                                            </p>
                                            <p className="text-gray-600 text-sm">Стоимость за семестр</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                            <p className="text-xl font-bold" style={{ color: brandColor }}>
                                                {currentBusinessDirection.full_price || 'Не указано'}
                                            </p>
                                            <p className="text-gray-600 text-sm">Стоимость за учебный год</p>
                                        </div>
                                    </div>
                                )}

                                {/* Инфо-карточки для заочных направлений */}
                                {activeTab === 'zaochka' && currentZaochkaDirection?.stats && (
                                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                                        {currentZaochkaDirection.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                                <p className="text-xl font-bold" style={{ color: brandColor }}>{stat.value}</p>
                                                <p className="text-gray-600 text-sm">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Добавляем блок цен для 2 смены */}
                                {renderPrices2Smena(getCurrentContent())}

                                {/* Основной контент */}
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="hidden md:block mr-4 mt-1">
                                            <Book size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Описание программы</h3>
                                            <div className="text-gray-700 direction-fetch-text">
                                                {getCurrentDirectionDescription()}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Кнопка регистрации */}
                                <div className="flex justify-center mt-10">
                                    <button
                                        className="pop-form-trigger flex items-center justify-center text-white font-bold py-4 px-12 rounded-lg text-lg shadow-md transition-all hover:shadow-lg"
                                        style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                                    >
                                        Регистрация
                                        <ChevronRight size={20} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mt-12 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: brandColor }}></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, 30%)' }}></div>
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, -30%)' }}></div>

                    <p className="mb-4 text-lg leading-relaxed relative z-10">
                        С нами Вы получите востребованную специальность, пройдёте практику в ведущих частных и государственных клиниках и организациях нашей столицы под руководством опытных специалистов, а также{' '}
                        <span className="font-semibold" style={{ color: brandColor }}>стажировку в ведущих организациях, клиниках и ВУЗах Европейских стран</span>*
                    </p>
                    <p className="mb-6 font-semibold text-sm bg-gray-100 p-4 rounded-lg border-l-4--" style={{ borderColor: brandColor }}>
                        * Студенты с наивысшими результатами академической успеваемости будут стажироваться за счет фонда поддержки учреждения.
                    </p>
                    <p className="font-medium">Не упустите свою возможность в самореализации, мы открываем набор по следующим направлениям бакалавриата:</p>
                </div>

                {/* Contact Info */}
                {acf?.pricing_info ? (
                    <div className="mt-12 mb-12 bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                        <div className="text-3xl p-4 rounded-full" style={{ backgroundColor: brandColorLighter, color: brandColor }}>
                            ℹ️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: brandColor }}>Нужна консультация?</h3>
                            <div>{parse(acf.pricing_info)}</div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-12 mb-12 bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                        <div className="text-3xl p-4 rounded-full" style={{ backgroundColor: brandColorLighter, color: brandColor }}>
                            ℹ️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: brandColor }}>Нужна консультация?</h3>
                            <p>
                                Получите консультацию по факультетам, приемной комиссии и вступительным экзаменам позвонив нам:{' '}
                                <strong style={{ color: brandColor }}>+998(78) 147-00-07</strong>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}