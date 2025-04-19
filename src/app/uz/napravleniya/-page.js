// pages/directions.js
'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Book, Beaker, BookOpen, Clock, Globe, User } from 'lucide-react';
import Head from 'next/head';

// Фирменные цвета
const brandColor = '#631463';
const brandColorLight = '#8a3c8a';
const brandColorLighter = '#f7eef7';

// Данные направлений
const directionsData = {
    'Стоматология': {
        icon: '🦷',
        bgImage: '/api/placeholder/400/200'
    },
    'Фармация': {
        icon: '💊',
        bgImage: '/api/placeholder/400/200'
    },
    'Лечебное дело': {
        icon: '🩺',
        bgImage: '/api/placeholder/400/200'
    },
    'Педиатрия': {
        icon: '👶',
        bgImage: '/api/placeholder/400/200'
    },
    'Высшее медсестринское дело': {
        icon: '👩‍⚕️',
        bgImage: '/api/placeholder/400/200'
    },
    'Фундаментальная медицина': {
        icon: '🧬',
        bgImage: '/api/placeholder/400/200'
    },
    'Медико-профилактическое': {
        icon: '🧪',
        bgImage: '/api/placeholder/400/200'
    },
    'Биология': {
        icon: '🔬',
        bgImage: '/api/placeholder/400/200'
    },
    'Химия': {
        icon: '⚗️',
        bgImage: '/api/placeholder/400/200'
    },
    'Косметология': {
        icon: '💄',
        bgImage: '/api/placeholder/400/200'
    }
};

// Преимущества
const advantagesData = [
    {
        title: "Международная практика",
        description: "Стажировка в ведущих клиниках Европы",
        icon: <Globe size={24} />
    },
    {
        title: "Опытные специалисты",
        description: "Обучение под руководством профессионалов",
        icon: <User size={24} />
    },
    {
        title: "Современное оборудование",
        description: "Доступ к передовым технологиям",
        icon: <Beaker size={24} />
    },
    {
        title: "Гарантия трудоустройства",
        description: "Поддержка в построении карьеры",
        icon: <Award size={24} />
    }
];

// Содержимое направлений
const directionContentData = {
    'Фармация': {
        title: 'Направление «Фармация» EMU UNIVERSITY',
        description: `Фармация в сегодняшнем современном мире одна из перспективных направлений. Нужно отметить, что высококвалифицированные фармацевты могут работать не только в аптеках, но и решать проблемы создания безопасных лекарственных средств, их хранения, производства и изготовления, а также механизмов продаж лекарственных препаратов потребителям.`,
        goal: `Целью факультета Фармация нашего Университета является обеспечение качественной фундаментальной и профессиональной подготовки кадров в области фармации. В рамках программы обучения студенты в обязательном порядке проходят такие дисциплины, как химическая фармакология, фармацевтическая химия, фармацевтическая технология, биотехнология, фармакогнозия, управление и экономика фармации.`,
        practice: `Большое место в учебном процессе данной специализации занимает практика студентов, которая проходит как на базе кафедры фармации, в зоне аптеки EMU, в сети аптеках наших партнеров, так и в фармацевтических фирмах и предприятиях, контрольных лабораториях под руководством профессионалов этой области.`,
        duration: `Обучение длится 5 лет, в очной форме.`,
        language: `Обучение на кафедрах теоретического и клинического профиля в первый год обучения будет осуществляться на узбекском и русском. После обязательной для всех студентов индивидуальной подготовки на знание английского языка, с третьего года каждым языком обучения на всех кафедрах будет английским.`,
        key_subjects: ["Химическая фармакология", "Фармацевтическая химия", "Фармацевтическая технология", "Биотехнология", "Фармакогнозия", "Управление и экономика фармации"],
        price: {
            semester: '18 375 000',
            year: '36 750 000'
        },
        stats: [
            { label: "Длительность", value: "5 лет" },
            { label: "Практика", value: "1800 часов" },
            { label: "Предметов", value: "42" }
        ]
    }
};

// Табы
const tabsData = [
    { id: 'medical', name: 'Медицинская школа' },
    { id: 'business', name: 'Бизнес и социальная школа' }
];

export default function DirectionsPage() {
    // Состояние на стороне клиента
    const [activeDirection, setActiveDirection] = useState('Фармация');
    const [activeTab, setActiveTab] = useState('medical');
    const [isClient, setIsClient] = useState(false);

    // Выполняется только на клиенте
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Текущее выбранное направление
    const currentDirection = directionContentData[activeDirection] || directionContentData['Фармация'];

    return (
        <>
            <Head>
                <title>Направления обучения | EMU UNIVERSITY</title>
                <meta name="description" content="Выберите одно из перспективных направлений обучения в EMU UNIVERSITY" />
            </Head>

            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section с фоновым изображением */}
                <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden" style={{
                    background: `linear-gradient(rgba(99, 20, 99, 0.85), rgba(99, 20, 99, 0.95)), url('/api/placeholder/1200/600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                    <div className="text-center z-10 px-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Направления</h1>
                        <div className="w-16 md:w-24 h-1 bg-white mx-auto mb-4 md:mb-6"></div>
                        <p className="text-lg md:text-xl text-white max-w-3xl px-4">
                            С нами Вы получите востребованную специальность и пройдёте практику в ведущих клиниках и организациях
                        </p>
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
                <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-10 md:-mt-16 mb-12 md:mb-16 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {advantagesData.map((adv, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-lg p-4 md:p-6 transform transition-transform hover:-translate-y-2">
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
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
                    {/* Intro text с декоративными элементами */}
                    <div className="bg-white rounded-lg shadow-md p-5 md:p-8 mb-8 md:mb-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-3 h-full" style={{ backgroundColor: brandColor }}></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, 30%)' }}></div>
                        <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, -30%)' }}></div>

                        <p className="mb-4 text-base md:text-lg leading-relaxed relative z-10">
                            С нами Вы получите востребованную специальность, пройдёте практику в ведущих частных и государственных клиниках и организациях нашей столицы под руководством опытных специалистов, а также <span className="font-semibold" style={{ color: brandColor }}>стажировку в ведущих организациях, клиниках и ВУЗах Европейских стран</span>*
                        </p>
                        <p className="mb-6 font-semibold text-sm bg-gray-100 p-4 rounded-lg border-l-4" style={{ borderColor: brandColor }}>
                            * Студенты с наивысшими результатами академической успеваемости будут стажироваться за счет фонда поддержки учреждения.
                        </p>
                        <p className="font-medium">
                            Не упустите свою возможность в самореализации, мы открываем набор по следующим направлениям бакалавриата:
                        </p>
                    </div>

                    {/* Tabs - стилизованные */}
                    <div className="mb-6 md:mb-10 overflow-x-auto">
                        <div className="inline-flex p-1 bg-gray-100 rounded-lg whitespace-nowrap">
                            {tabsData.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => isClient && setActiveTab(tab.id)}
                                    className="py-2 md:py-3 px-4 md:px-8 rounded-lg font-medium transition-all"
                                    style={{
                                        backgroundColor: (!isClient && tab.id === 'medical') || (isClient && activeTab === tab.id) ? brandColor : 'transparent',
                                        color: (!isClient && tab.id === 'medical') || (isClient && activeTab === tab.id) ? 'white' : '#666',
                                    }}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Layout */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Direction Sidebar - стилизованный и sticky */}
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden md:sticky" style={{ top: '20px' }}>
                                <div className="p-5 text-white font-medium text-center relative" style={{ backgroundColor: brandColor }}>
                                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                    <h3 className="text-xl font-bold relative z-10">Направления</h3>
                                </div>
                                <div className="py-2 max-h-[calc(100vh-150px)] overflow-y-auto">
                                    {Object.keys(directionsData).map(direction => (
                                        <button
                                            key={direction}
                                            onClick={() => isClient && setActiveDirection(direction)}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: (!isClient && direction === 'Фармация') || (isClient && activeDirection === direction) ? brandColorLighter : 'transparent',
                                                borderLeft: (!isClient && direction === 'Фармация') || (isClient && activeDirection === direction) ? `4px solid ${brandColor}` : '4px solid transparent'
                                            }}
                                        >
                                            <span className="mr-3 text-lg">{directionsData[direction].icon}</span>
                                            <span
                                                style={{
                                                    color: (!isClient && direction === 'Фармация') || (isClient && activeDirection === direction) ? brandColor : '#333',
                                                    fontWeight: (!isClient && direction === 'Фармация') || (isClient && activeDirection === direction) ? '600' : '400'
                                                }}
                                            >
                                                {direction}
                                            </span>
                                            {((!isClient && direction === 'Фармация') || (isClient && activeDirection === direction)) && (
                                                <ChevronRight
                                                    size={16}
                                                    className="ml-auto"
                                                    style={{ color: brandColor }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Direction Content - с элементами дизайна */}
                        <div className="w-full md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Заголовок с фоном */}
                                <div
                                    className="p-6 md:p-8 text-white relative"
                                    style={{
                                        background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: 'white' }}></div>

                                    <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
                                        {currentDirection.title}
                                    </h2>
                                    <p className="text-white text-opacity-80 relative z-10 max-w-2xl">
                                        Станьте высококвалифицированным специалистом в области фармации и фармакологии.
                                    </p>
                                </div>

                                <div className="p-4 md:p-8">
                                    {/* Инфо-карточки */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                                        {currentDirection.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                                <p className="text-xl font-bold" style={{ color: brandColor }}>{stat.value}</p>
                                                <p className="text-gray-600 text-sm">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Основной контент */}
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1 flex-shrink-0">
                                                <Book size={20} style={{ color: brandColor }} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Описание программы</h3>
                                                <p className="text-gray-700">{currentDirection.description}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1 flex-shrink-0">
                                                <Award size={20} style={{ color: brandColor }} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Цель обучения</h3>
                                                <p className="text-gray-700">{currentDirection.goal}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1 flex-shrink-0">
                                                <BookOpen size={20} style={{ color: brandColor }} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Практика</h3>
                                                <p className="text-gray-700">{currentDirection.practice}</p>
                                            </div>
                                        </div>

                                        {/* Ключевые предметы */}
                                        <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: brandColorLighter }}>
                                            <h3 className="text-lg font-bold mb-4" style={{ color: brandColor }}>Ключевые дисциплины</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {currentDirection.key_subjects.map((subject, idx) => (
                                                    <div key={idx} className="flex items-center">
                                                        <div className="w-2 h-2 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: brandColor }}></div>
                                                        <span>{subject}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Стоимость обучения */}
                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Стоимость обучения</h3>

                                        <div className="w-full">
                                            <img
                                                src="https://emuni.uz/wp-content/uploads/2024/05/farma.rus_-1.png"
                                                alt="Стоимость обучения"
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Кнопка регистрации */}
                                    <div className="flex justify-center mt-10">
                                        <button
                                            className="flex items-center justify-center text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-lg text-lg shadow-md transition-all hover:shadow-lg"
                                            style={{
                                                background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                            }}
                                        >
                                            Регистрация
                                            <ChevronRight size={20} className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="text-3xl p-4 rounded-full flex-shrink-0" style={{ backgroundColor: brandColorLighter, color: brandColor }}>
                            ℹ️
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold mb-1" style={{ color: brandColor }}>Нужна консультация?</h3>
                            <p>Получите консультацию по факультетам, приемной комиссии и вступительным экзаменам позвонив нам: <strong style={{ color: brandColor }}>+998(78) 147-00-07</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Используем ISR - страница будет регенерироваться каждые 60 секунд
// export async function getStaticProps() {
//     return {
//         props: {},
//         // Регенерация каждые 60 секунд
//         revalidate: 60
//     };
// }