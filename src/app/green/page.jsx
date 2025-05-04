"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, Wind, Droplets, TreePine, Globe, Users, Book, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
    // Состояния для анимаций
    const [position, setPosition] = useState(0);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    // Эффекты для анимаций
    useEffect(() => {
        // Угловой градиент
        const interval = setInterval(() => {
            setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
        }, 40);

        // Пульсация свечения
        const glowInterval = setInterval(() => {
            setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
        }, 50);

        // Пульсация размера
        const pulseInterval = setInterval(() => {
            setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(glowInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    return (
        <main className="min-h-screen font-sans">
            {/* Новая HERO секция с параллаксом и 3D эффектом */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Слои параллакса */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
                        style={{ transform: 'translateZ(-10px) scale(2)' }}
                    ></div>
                </div>

                {/* Темный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-900/80 to-green-800/70 z-10"></div>

                {/* Декоративная сетка */}
                <div className="absolute inset-0 z-20">
                    <div className="w-full h-full grid grid-cols-12 grid-rows-6">
                        {Array.from({ length: 12 * 6 }).map((_, i) => (
                            <div key={i} className="relative">
                                <div className="absolute inset-0 border border-green-500/5"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Плавающие элементы */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-500/10 blur-3xl animate-float-slow z-20"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-green-300/10 blur-3xl animate-float-medium z-20"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-green-400/10 blur-3xl animate-float-fast z-20"></div>

                {/* Главное содержимое */}
                <div className="relative z-30 max-w-screen-xl mx-auto px-6 text-center">
                    <div className="relative inline-block mb-4">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
                        ></div>
                        <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
                            Образование для будущего
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Зеленый университет
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Ведущий образовательный центр по экологии и устойчивому развитию,
                        формирующий специалистов для решения глобальных вызовов будущего
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        <button
                            className="relative group overflow-hidden py-4 px-10 font-bold rounded-full transition-all duration-500 text-lg"
                            style={{
                                background: `linear-gradient(${position}deg, #4ade80 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #4ade80 100%)`,
                                color: '#022c22',
                                transform: `scale(${pulseSize})`,
                            }}
                        >
                            <span className="relative z-10">Подробнее</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/20 to-transparent transition-transform duration-500"></div>
                        </button>

                        <button className="py-4 px-10 font-bold rounded-full border-2 border-green-500 text-white bg-transparent hover:bg-green-800/30 transition-all duration-300 text-lg">
                            Подать заявку
                        </button>
                    </div>
                </div>

                {/* Абсолютно позиционированные иконки */}
                <div className="absolute bottom-10 left-10 w-24 h-24 z-20">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-xl border border-green-500/30 backdrop-blur-sm bg-green-900/10 flex items-center justify-center text-white/70">
                            <Leaf size={32} className="text-green-500" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-10 right-10 w-24 h-24 z-20">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-xl border border-green-500/30 backdrop-blur-sm bg-green-900/10 flex items-center justify-center text-white/70">
                            <Globe size={32} className="text-green-500" />
                        </div>
                    </div>
                </div>

                {/* Индикатор скролла */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
                    <div className="w-0.5 h-16 bg-white/30 mb-2 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-white absolute top-0 animate-scrollDown"></div>
                    </div>
                    <span className="text-white/70 text-xs uppercase tracking-widest">Вниз</span>
                </div>
            </section>

            {/* Новая секция "О нас" с уникальным дизайном */}
            <section className="py-16 md:py-24 px-6 bg-white relative">
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 -z-10"></div>
                <div className="absolute top-1/4 left-10 w-32 h-32 rotate-45 border-4 border-green-100 rounded-3xl -z-10"></div>
                <div className="absolute bottom-10 right-32 w-16 h-16 bg-green-100 rounded-full -z-10"></div>

                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-green-700 text-sm font-medium tracking-wider uppercase mb-3">О Зеленом университете</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Образование для <span className="text-green-600">устойчивого будущего</span></h2>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 mb-6">
                                    Зеленый университет – это современный образовательный и исследовательский центр,
                                    сосредоточенный на подготовке специалистов в области экологии, устойчивого развития
                                    и защиты окружающей среды.
                                </p>

                                <p className="text-gray-700 mb-8">
                                    Наша миссия – сформировать новое поколение профессионалов, способных решать наиболее
                                    актуальные глобальные экологические вызовы и внедрять принципы устойчивого развития
                                    во всех сферах деятельности.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="border border-green-100 bg-green-50 p-5 rounded-lg">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-600 text-white mr-4 shrink-0">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">1200+</h3>
                                            <p className="text-gray-600">Студентов</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-green-100 bg-green-50 p-5 rounded-lg">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-600 text-white mr-4 shrink-0">
                                            <Book size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">25+</h3>
                                            <p className="text-gray-600">Программ</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-green-100 bg-green-50 p-5 rounded-lg">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-600 text-white mr-4 shrink-0">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">18+</h3>
                                            <p className="text-gray-600">Стран-партнеров</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-green-100 bg-green-50 p-5 rounded-lg">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-600 text-white mr-4 shrink-0">
                                            <DollarSign size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">90%</h3>
                                            <p className="text-gray-600">Трудоустройство</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/api/placeholder/600/700"
                                    alt="Студенты Зеленого университета"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="absolute -top-5 -right-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
                            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Barqaror rivojlanish maqsadlari */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">BMT maqsadlari</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Barqaror rivojlanish maqsadlari</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Yashil Universitet BMT tomonidan belgilangan barqaror rivojlanish maqsadlarini qo'llab-quvvatlaydi va o'z faoliyatida aks ettiradi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "07",
                                title: "Arzon va toza energiya",
                                description: "Qayta tiklanadigan energiya manbalarini rivojlantirish orqali barqaror energiya tizimini yaratish",
                                icon: <Wind size={28} />,
                                color: "bg-yellow-500",
                                hover: "group-hover:bg-yellow-400",
                                border: "border-yellow-500",
                            },
                            {
                                number: "13",
                                title: "Iqlim o'zgarishiga qarshi kurash",
                                description: "Iqlim o'zgarishiga qarshi choralarni ko'rish va ekologik muammolarni bartaraf etish",
                                icon: <Leaf size={28} />,
                                color: "bg-blue-500",
                                hover: "group-hover:bg-blue-400",
                                border: "border-blue-500",
                            },
                            {
                                number: "14",
                                title: "Suv ekotizimini muhofaza qilish",
                                description: "Dunyo okeanlari, dengizlari va suv resurslarini saqlash, ulardan oqilona foydalanish",
                                icon: <Droplets size={28} />,
                                color: "bg-blue-700",
                                hover: "group-hover:bg-blue-600",
                                border: "border-blue-700",
                            },
                            {
                                number: "15",
                                title: "Quruqlik ekotizimini himoya qilish",
                                description: "O'rmonlarni va tabiiy ekotizimlarni asrash, cho'llanishga qarshi kurashish",
                                icon: <TreePine size={28} />,
                                color: "bg-green-600",
                                hover: "group-hover:bg-green-500",
                                border: "border-green-600",
                            },
                        ].map((goal, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 relative ${goal.border} border-l-4`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 ${goal.color} text-white rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 ${goal.hover}`}>
                                            {goal.icon}
                                        </div>
                                        <span className="text-4xl font-bold text-gray-300">{goal.number}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                                    <p className="text-gray-600">{goal.description}</p>
                                </div>
                                <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <button
                            className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center group"
                        >
                            <span>Batafsil ma'lumot</span>
                            <svg
                                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Qo'llab-quvvatlash */}
            <section className="py-16 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-green-800 opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green-800 opacity-5 blur-3xl"></div>

                <div className="max-w-screen-xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">Yordam</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Natijaga erishish uchun qo'llab-quvvatlaymiz</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bizning vazifamiz — shunchaki o'qitish emas, balki kelаjаk mutаxаssislаrini tаyyorlаshdа yordаm berishdir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Talabalar hamjamiyati",
                                description: "Bizning do'stona jamiyatimiz foydali tanishuvlar o'rnatish, ilmiy to'garaklar va qiziqishlarga qarab tashkil etilgan klubarda qatnashish imkonini beradi.",
                                icon: "🌐"
                            },
                            {
                                title: "Qo'shimcha ingliz tili kurslari",
                                description: "Biz til ko'nikmalarini mustahkamlash va akademik muhitda ishonch bilan yo'naltirishga yordam beradigan maxsus dasturlarni taklif etamiz.",
                                icon: "📚"
                            },
                            {
                                title: "Zamonaviy ta'lim metodikalari",
                                description: "Biz an'anaviy akademik amaliyotlarni innovatsion texnologiyalar bilan birlashtirgan holda ta'lim jarayonini interaktiv qilamiz.",
                                icon: "💡"
                            }
                        ].map((support, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl transition-all duration-500 group relative overflow-hidden hover:-translate-y-2"
                            >
                                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-green-800 to-green-600 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="p-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-300 text-3xl">
                                        {support.icon}
                                    </div>

                                    <h3 className="text-gray-800 text-xl font-bold mb-4 group-hover:text-green-700 transition-colors duration-300">
                                        {support.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        {support.description}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-medium bg-green-50 text-green-700 py-1 px-3 rounded-full">100% kafolat</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            className="py-4 px-10 font-bold rounded-full shadow-xl transition-all duration-300 text-lg"
                            style={{
                                background: `linear-gradient(${position}deg, #4ade80 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #4ade80 100%)`,
                                color: '#022c22',
                                boxShadow: `0 5px 15px rgba(56, 161, 105, 0.4)`,
                                transform: `scale(${pulseSize})`,
                            }}
                        >
                            Ariza topshirish
                        </button>
                    </div>
                </div>
            </section>



            <style jsx global>{`
        @keyframes scrollDown {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        .animate-scrollDown {
          animation: scrollDown 1.5s infinite;
        }
      `}</style>
        </main>
    );
}