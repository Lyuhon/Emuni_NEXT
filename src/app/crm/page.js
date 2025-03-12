'use client'
import React, { useState, useEffect } from 'react';

const MprCabinet = () => {
    const [selectedBroker, setSelectedBroker] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const [showGift, setShowGift] = useState(false);
    const [activeTab, setActiveTab] = useState('brokers');
    const [countdownTime, setCountdownTime] = useState(3600); // 1 час в секундах

    // Обратный отсчет
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdownTime(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Форматирование времени для отображения
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return {
            hours: h.toString().padStart(2, '0'),
            minutes: m.toString().padStart(2, '0'),
            seconds: s.toString().padStart(2, '0')
        };
    };

    const time = formatTime(countdownTime);

    // Данные о брокерах
    const brokers = [
        {
            name: 'XM',
            logo: '/api/placeholder/150/60',
            advantages: ['Past spred', '$5000 gacha bonus', 'Svopsiz hisoblar'],
            rating: 5,
            details: [
                'Spred 0 punktdan boshlanadi',
                '$5000 gacha bonus',
                'Svopsiz hisoblar',
                'Shaxsiy menejer',
                'Birinchi depozitga 50% bonus',
                'VIP shartlar',
            ],
            badge: 'TOP',
            color: 'from-emerald-400 to-teal-500',
            minDeposit: '$5',
            platforms: ['MT4', 'MT5', 'WebTrader'],
            instruments: ['Forex', 'Stocks', 'Crypto', 'Metals', 'Indices']
        },
        {
            name: 'Libertex',
            logo: '/api/placeholder/150/60',
            advantages: ['Tez pul yechish', '0.1 punkt spred', 'Oddiy interfeys'],
            rating: 4,
            details: [
                'Tez pul yechish',
                'Spred 0.1 punktdan',
                'Foydalanuvchilar uchun qulay interfeys',
                '24/7 qo`llab - quvvatlash',
            ],
            badge: 'YANGI',
            color: 'from-sky-400 to-blue-500',
            minDeposit: '$10',
            platforms: ['PlatformX', 'Mobile App'],
            instruments: ['Forex', 'Crypto', 'Commodities']
        },
        {
            name: 'Exness',
            logo: '/api/placeholder/150/60',
            advantages: ['Sekundlarda pul yechish', '0 punkt spred', 'VIP shartlar'],
            rating: 5,
            details: [
                'Sekundlarda pul yechish',
                'Spred 0 punktdan',
                'VIP shartlar',
                'Tezkor tranzaksiyalar',
            ],
            badge: 'PREMIUM',
            color: 'from-amber-400 to-yellow-500',
            minDeposit: '$1',
            platforms: ['MT4', 'MT5', 'Exness Terminal'],
            instruments: ['Forex', 'Stocks', 'Indices', 'Crypto', 'Metals']
        },
    ];

    // Таблица сравнения
    const comparisonData = [
        { feature: 'Min Depozit', xm: '$5', libertex: '$10', exness: '$1' },
        { feature: 'Max Leverej', xm: '1:1000', libertex: '1:500', exness: '1:2000' },
        { feature: 'Spred', xm: '0 punktdan', libertex: '0.1 punktdan', exness: '0 punktdan' },
        { feature: 'Bonus', xm: '$5000 gacha', libertex: 'VIP 30 kun', exness: '70% depozitga' },
        { feature: 'Pul yechish', xm: '~24 soat', libertex: '~2-3 soat', exness: 'Sekundlar' },
        { feature: 'Markets', xm: '7+', libertex: '5+', exness: '10+' },
    ];

    // Отзывы
    const testimonials = [
        {
            name: 'Akmal T.',
            avatar: '/api/placeholder/60/60',
            text: 'Men 8 oydan beri XM broker bilan ishlayapman. Juda ishonchli va qulay. MPR Cabinet orqali ro`yxatdan o`tib juda ko`p bonuslarni qo`lga kiritdim.'
        },
        {
            name: 'Laziza M.',
            avatar: '/api/placeholder/60/60',
            text: 'Exness brokerida savdo qilishni bu platforma orqali boshladim. Menedjerlar profesional darajada yordam berishdi va birinchi depozitimga ajoyib bonus oldim.'
        },
        {
            name: 'Jahongir S.',
            avatar: '/api/placeholder/60/60',
            text: 'Libertex platformasi juda sodda va tushunarli ekan. Yangi boshlovchilar uchun eng yaxshi tanlov, qo`shimchasiga ajoyib bonuslar ham beriladi!'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
            {/* Эффекты размытия на фоне */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-yellow-600/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Главный контейнер */}
            <div className="relative z-10">
                {/* Хедер */}
                <header className="backdrop-blur-md bg-black/40 sticky top-0 z-50 border-b border-gray-800">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black font-bold">MPR</div>
                            <h1 className="text-xl font-bold">Cabinet</h1>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a className={`cursor-pointer ${activeTab === 'brokers' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('brokers')}>Brokerlar</a>
                            <a className={`cursor-pointer ${activeTab === 'comparison' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('comparison')}>Taqqoslash</a>
                            <a className={`cursor-pointer ${activeTab === 'reviews' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('reviews')}>Sharhlar</a>
                            <a className={`cursor-pointer ${activeTab === 'bonus' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('bonus')}>Bonuslar</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <span className="text-xs text-gray-400">Bonus taklif tugashiga:</span>
                                <div className="text-yellow-400 font-mono font-bold">
                                    {time.hours}:{time.minutes}:{time.seconds}
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300">
                                Ro'yxatdan o'tish
                            </button>
                        </div>
                    </div>
                </header>

                {/* Основной контент */}
                <main className="container mx-auto px-4 py-8">
                    {/* Герой-секция */}
                    <section className="py-10 md:py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                                    Traderlarning maxfiy klubiga xush kelibsiz!
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Eng yaxshi brokerlardan eksklyuziv bonuslar bilan ishonchli shartlarni
                                qo'lga kiriting!
                            </p>
                            <div className="inline-block animate-bounce">
                                <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    {/* Вкладки контента */}
                    <div className="mt-8">
                        {/* Табы для мобильных устройств */}
                        <div className="md:hidden flex overflow-x-auto space-x-4 pb-4">
                            <button
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${activeTab === 'brokers' ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}
                                onClick={() => setActiveTab('brokers')}
                            >
                                Brokerlar
                            </button>
                            <button
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${activeTab === 'comparison' ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}
                                onClick={() => setActiveTab('comparison')}
                            >
                                Taqqoslash
                            </button>
                            <button
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${activeTab === 'reviews' ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}
                                onClick={() => setActiveTab('reviews')}
                            >
                                Sharhlar
                            </button>
                            <button
                                className={`px-4 py-2 whitespace-nowrap rounded-lg ${activeTab === 'bonus' ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}
                                onClick={() => setActiveTab('bonus')}
                            >
                                Bonuslar
                            </button>
                        </div>

                        {/* Вкладка брокеров */}
                        {activeTab === 'brokers' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {brokers.map((broker, index) => (
                                    <div
                                        key={index}
                                        className="relative backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group"
                                        onClick={() => setSelectedBroker(broker)}
                                    >
                                        {/* Бейдж */}
                                        <div className={`absolute top-0 right-0 bg-gradient-to-r ${broker.color} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                            {broker.badge}
                                        </div>

                                        {/* Эффект размытия при наведении */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
                                        </div>

                                        {/* Лого */}
                                        <div className="p-6 border-b border-gray-800 flex justify-center items-center">
                                            <img src={broker.logo} alt={broker.name} className="h-12" />
                                        </div>

                                        {/* Информация */}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                                {broker.name}
                                                <div className="text-yellow-400">
                                                    {'★'.repeat(broker.rating)}
                                                    {'☆'.repeat(5 - broker.rating)}
                                                </div>
                                            </h3>

                                            <ul className="mt-4 space-y-2">
                                                {broker.advantages.map((adv, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-200">
                                                        <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{adv}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="my-6 grid grid-cols-2 gap-3 text-sm">
                                                <div>
                                                    <div className="text-gray-400">Min. depozit</div>
                                                    <div className="font-semibold">{broker.minDeposit}</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-400">Platformalar</div>
                                                    <div className="font-semibold flex flex-wrap gap-1">
                                                        {broker.platforms.map((p, i) => (
                                                            <span key={i} className="bg-gray-800 text-xs px-1 rounded">{p}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 flex-wrap">
                                                {broker.instruments.map((inst, i) => (
                                                    <span key={i} className="bg-gray-800/60 text-gray-300 text-xs px-2 py-1 rounded-full">{inst}</span>
                                                ))}
                                            </div>

                                            <button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:-translate-y-1">
                                                Batafsil ko'rish
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Вкладка сравнения */}
                        {activeTab === 'comparison' && (
                            <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-900/60">
                                                <th className="py-4 px-6 text-left">Xususiyat</th>
                                                <th className="py-4 px-6 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <img src="/api/placeholder/80/30" alt="XM" className="mb-2" />
                                                        <span>XM</span>
                                                    </div>
                                                </th>
                                                <th className="py-4 px-6 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <img src="/api/placeholder/80/30" alt="Libertex" className="mb-2" />
                                                        <span>Libertex</span>
                                                    </div>
                                                </th>
                                                <th className="py-4 px-6 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <img src="/api/placeholder/80/30" alt="Exness" className="mb-2" />
                                                        <span>Exness</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.map((row, index) => (
                                                <tr key={index} className={index % 2 === 0 ? 'bg-black/30' : 'bg-black/10'}>
                                                    <td className="py-3 px-6 font-medium">{row.feature}</td>
                                                    <td className="py-3 px-6 text-center">{row.xm}</td>
                                                    <td className="py-3 px-6 text-center">{row.libertex}</td>
                                                    <td className="py-3 px-6 text-center">{row.exness}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-black/30">
                                                <td className="py-3 px-6 font-medium">Ro'yxatdan o'tish</td>
                                                <td className="py-3 px-6 text-center">
                                                    <button className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-lg text-sm">
                                                        Ro'yxatdan o'tish
                                                    </button>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                                                        Ro'yxatdan o'tish
                                                    </button>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-1 rounded-lg text-sm">
                                                        Ro'yxatdan o'tish
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Вкладка отзывов */}
                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                                        <div className="flex gap-4 items-start">
                                            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400" />
                                            <div>
                                                <h3 className="font-bold text-white">{testimonial.name}</h3>
                                                <p className="text-gray-300 mt-2">{testimonial.text}</p>
                                                <div className="flex mt-3 text-yellow-400">
                                                    {'★'.repeat(5)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
                                    <h3 className="text-xl font-bold text-white mb-3">O'z fikringizni qoldiring!</h3>
                                    <p className="text-gray-300 mb-6">Platformamiz va xizmatlarimiz haqida fikringizni bildiring. Sizning sharhlaringiz bizning xizmatlarimizni yanada yaxshilashga yordam beradi.</p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="text"
                                            placeholder="Ismingiz"
                                            className="flex-1 bg-black/30 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                                        />
                                        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-2 px-6 rounded-lg transition-all duration-300">
                                            Sharh qoldirish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Вкладка бонусов */}
                        {activeTab === 'bonus' && (
                            <div className="space-y-8">
                                <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl overflow-hidden">
                                    <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-8 relative">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                                        <h3 className="text-2xl font-bold text-white mb-2">$5000 gacha gacha bonus!</h3>
                                        <p className="text-gray-300 mb-6 max-w-2xl">
                                            Bizning maxsus hamkorlik orqali ro'yxatdan o'ting va XM brokeridan $5000 gacha bonus qo'lga kiriting.
                                            Bu bonus faqat bizning hamkorlik havola orqali ro'yxatdan o'tganlarga taqdim etiladi.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="backdrop-blur-sm bg-black/20 p-3 rounded-lg text-center flex-1">
                                                <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                                                <div className="text-gray-400 text-sm">Birinchi depozitga bonus</div>
                                            </div>
                                            <div className="backdrop-blur-sm bg-black/20 p-3 rounded-lg text-center flex-1">
                                                <div className="text-2xl font-bold text-yellow-400 mb-1">$20</div>
                                                <div className="text-gray-400 text-sm">Minimum depozit</div>
                                            </div>
                                            <div className="backdrop-blur-sm bg-black/20 p-3 rounded-lg text-center flex-1">
                                                <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                                                <div className="text-gray-400 text-sm">Qo'llab quvvatlash</div>
                                            </div>
                                        </div>

                                        <button
                                            className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                                            onClick={() => setShowVideo(true)}
                                        >
                                            Bonus olish
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-gray-800">
                                        <div className="p-6 text-center">
                                            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Ro'yxatdan o'ting</h4>
                                            <p className="text-gray-300 text-sm">Bizning havola orqali broker saytida ro'yxatdan o'ting</p>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Hisobingizni to'ldiring</h4>
                                            <p className="text-gray-300 text-sm">Minimal $20 miqdorida hisobingizni to'ldiring</p>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Bonusni qo'lga kiriting</h4>
                                            <p className="text-gray-300 text-sm">Bonus avtomatik ravishda hisobingizga tushadi</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center text-black font-bold text-lg">VIP</div>
                                            <h3 className="text-xl font-bold text-white">VIP shartlar va bonuslar</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            $1000 dan ortiq depozit qilganingizda, siz VIP mijoz maqomini olasiz va
                                            quyidagi bonuslarga ega bo'lasiz:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Shaxsiy VIP menejer</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Maxsus VIP signallar</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Tezkor pul yechish</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>VIP analitik ma'lumotlar</span>
                                            </li>
                                        </ul>
                                        <button className="mt-4 w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300">
                                            VIP bonuslar haqida batafsil
                                        </button>
                                    </div>

                                    <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-black font-bold text-lg">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Cashback dasturi</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Bizning hamkorlik bo'yicha ro'yxatdan o'tgan mijozlar uchun maxsus cashback dasturi.
                                            Har bir savdo hajmidan 10% gacha cashback olishingiz mumkin!
                                        </p>
                                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 p-4 rounded-lg mb-4">
                                            <div className="text-center">
                                                <span className="text-2xl font-bold text-white">10%</span>
                                                <span className="text-gray-400 text-sm ml-2">gacha cashback</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Har oyda hisob-kitob</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Minimal savdo hajmi yo'q</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-200">
                                                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Cash yoki kripto valyutada</span>
                                            </li>
                                        </ul>
                                        <button className="mt-4 w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300">
                                            Cashback dasturiga ulanish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Секция "Как получить бонус" */}
                    <section className="mt-12 py-12 relative overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
                            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-yellow-600/10 blur-3xl"></div>
                        </div>

                        <div className="relative">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                                    Bonusni qanday olish mumkin?
                                </h2>
                                <p className="text-gray-300 max-w-2xl mx-auto">
                                    Biz taqdim etadigan bonuslarni olish juda oson. Faqat uchta oddiy qadamni bajaring va
                                    eksklyuziv bonuslar sizniki!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4 text-purple-400 text-2xl font-bold">1</div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Ro'yxatdan o'ting</h3>
                                        <p className="text-gray-300">
                                            Bizning hamkorlik havolamiz orqali broker saytida ro'yxatdan o'ting. Bu juda oson va tez.
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-gray-800">
                                            <button
                                                className="text-yellow-400 flex items-center gap-1 hover:underline"
                                                onClick={() => setShowVideo(true)}
                                            >
                                                <span>Qanday ro'yxatdan o'tish kerak?</span>
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4 text-blue-400 text-2xl font-bold">2</div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Hisobingizni to'ldiring</h3>
                                        <p className="text-gray-300">
                                            Broker hisobingizni minimal miqdorda to'ldiring. Har bir broker uchun minimal depozit miqdori farq qiladi.
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-gray-800">
                                            <div className="flex flex-wrap gap-2">
                                                <div className="bg-gray-800/60 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                                                    <span className="text-gray-400">XM:</span>
                                                    <span className="text-white">$5</span>
                                                </div>
                                                <div className="bg-gray-800/60 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                                                    <span className="text-gray-400">Libertex:</span>
                                                    <span className="text-white">$10</span>
                                                </div>
                                                <div className="bg-gray-800/60 px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                                                    <span className="text-gray-400">Exness:</span>
                                                    <span className="text-white">$1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4 text-yellow-400 text-2xl font-bold">3</div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Bonusni qo'lga kiriting</h3>
                                        <p className="text-gray-300">
                                            Bonuslar avtomatik ravishda hisobingizga tushadi. Shaxsiy kabinet orqali tekshirishingiz mumkin.
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-gray-800">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-300">100% avtomatik jarayon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <button
                                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                                    onClick={() => setShowVideo(true)}
                                >
                                    Bonus bilan ro'yxatdan o'tish
                                </button>
                            </div>
                        </div>
                    </section>


                    {/* Модальное окно с деталями брокера */}
                    {selectedBroker && (
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl max-w-2xl w-full overflow-hidden animate-fadeIn">
                                <div className="p-6 flex justify-between border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <img src={selectedBroker.logo} alt={selectedBroker.name} className="h-8" />
                                        <h3 className="text-xl font-bold text-white">{selectedBroker.name}</h3>
                                    </div>
                                    <button
                                        className="text-gray-400 hover:text-white"
                                        onClick={() => setSelectedBroker(null)}
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="text-yellow-400">
                                            {'★'.repeat(selectedBroker.rating)}
                                            {'☆'.repeat(5 - selectedBroker.rating)}
                                        </div>
                                        <span className="text-gray-400 text-sm">({selectedBroker.rating}/5)</span>
                                    </div>

                                    <h4 className="text-lg font-semibold text-yellow-400 mb-4">Broker xususiyatlari</h4>
                                    <ul className="space-y-3 mb-6">
                                        {selectedBroker.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-200">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3">Savdo shartlari</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-gray-400 text-sm">Min. depozit</div>
                                                <div className="font-medium">{selectedBroker.minDeposit}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400 text-sm">Platformalar</div>
                                                <div className="font-medium">{selectedBroker.platforms.join(', ')}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400 text-sm">Instrumentlar</div>
                                                <div className="font-medium">{selectedBroker.instruments.join(', ')}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400 text-sm">Bonus</div>
                                                <div className="font-medium text-yellow-400">{selectedBroker.badge}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            onClick={() => {
                                                setSelectedBroker(null);
                                                setShowVideo(true);
                                            }}
                                        >
                                            Bonus bilan ro'yxatdan o'tish
                                        </button>
                                        <button
                                            className="flex-1 border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            onClick={() => setSelectedBroker(null)}
                                        >
                                            Bekor qilish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Модальное окно с видеоинструкцией */}
                    {showVideo && (
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl max-w-2xl w-full overflow-hidden animate-fadeIn">
                                <div className="p-6 flex justify-between border-b border-gray-800">
                                    <h3 className="text-xl font-bold text-white">Qanday qilib bonus olish kerak</h3>
                                    <button
                                        className="text-gray-400 hover:text-white"
                                        onClick={() => setShowVideo(false)}
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="aspect-video bg-gray-900 relative">
                                    <img src="/api/placeholder/800/450" alt="Video thumbnail" className="w-full h-full object-cover opacity-70" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="w-16 h-16 rounded-full bg-yellow-500/90 flex items-center justify-center hover:bg-yellow-600/90 transition-all">
                                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Qadamlar:</h4>
                                    <ol className="space-y-4 mb-6">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5">1</div>
                                            <div>
                                                <p className="text-gray-200">Havola orqali broker saytiga o'ting</p>
                                                <p className="text-gray-400 text-sm mt-1">Broker saytida hamkorlik havola orqali ro'yxatdan o'ting. Bu haqiqiy hisobingizda bonuslarni olish uchun kerak.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5">2</div>
                                            <div>
                                                <p className="text-gray-200">Ro'yxatdan o'tish shaklini to'ldiring</p>
                                                <p className="text-gray-400 text-sm mt-1">Barcha kerakli maydonlarni to'ldiring va verifikatsiyadan o'ting. Bu jarayon 5-10 daqiqa vaqt oladi.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5">3</div>
                                            <div>
                                                <p className="text-gray-200">Depozit qiling va bonusni faollashtiring</p>
                                                <p className="text-gray-400 text-sm mt-1">Hisobingizni to'ldiring va bonus avtomatik ravishda hisobingizga tushadi.</p>
                                            </div>
                                        </li>
                                    </ol>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            onClick={() => {
                                                setShowVideo(false);
                                                setShowGift(true);
                                            }}
                                        >
                                            Bonus bilan ro'yxatdan o'tish
                                        </button>
                                        <button
                                            className="flex-1 border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            onClick={() => setShowVideo(false)}
                                        >
                                            Keyinroq
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Модальное окно с подарком */}
                    {showGift && (
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl max-w-lg w-full overflow-hidden animate-fadeIn">
                                <div className="p-6 text-center relative">
                                    <button
                                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                        onClick={() => setShowGift(false)}
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-2 0v1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-2.17a3 3 0 01-5.66 0H5zm9 0a1 1 0 100-2h-2.17a3 3 0 01-5.66 0H4a1 1 0 100 2h.17a3 3 0 015.66 0h2.17zM9 11a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">Tabriklaymiz!</h3>
                                    <p className="text-gray-300 mb-6">
                                        Siz bizning maxsus bonuslarni olish uchun ro'yxatdan o'tdingiz.
                                        Qo'shimcha ravishda bizdan quyidagi sovg'alarni qabul qiling:
                                    </p>

                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-6">
                                        <ul className="space-y-3 text-left">
                                            <li className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <div>
                                                    <span className="text-white">Trading strategiyasi bo'yicha PDF qo'llanma</span>
                                                    <p className="text-gray-400 text-sm mt-1">Bozorni tahlil qilish va savdo strategiyalari bo'yicha to'liq qo'llanma</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <div>
                                                    <span className="text-white">VIP Telegram guruhiga kirish</span>
                                                    <p className="text-gray-400 text-sm mt-1">Maxsus signallar va bozor tahlillari bilan Telegram guruhiga kirish</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <div>
                                                    <span className="text-white">Savdo indikatorlari to'plami</span>
                                                    <p className="text-gray-400 text-sm mt-1">Professional savdogarlar tomonidan ishlab chiqilgan maxsus indikatorlar</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            onClick={() => setShowGift(false)}
                                        >
                                            Sovg'alarni olish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>

                {/* Футер */}
                <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-md mt-16">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black font-bold">MPR</div>
                                    <h1 className="text-xl font-bold">Cabinet</h1>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Treyderlar uchun eng yaxshi brokerlarni topish va ulardan eksklyuziv bonuslarni olish platformasi.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Asosiy bo'limlar</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Brokerlar</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Taqqoslash</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Bonuslar</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Ta'lim</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">FAQ</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Brokerlar</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">XM</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Libertex</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Exness</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Boshqa brokerlar</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Aloqa</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-400">info@mprcabinet.com</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-400">+1 123 456 7890</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-400">123 Trading St, Market City</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                            <p>© 2024 MPR Cabinet. Barcha huquqlar himoyalangan.</p>
                            <p className="mt-2">
                                <a href="#" className="hover:text-gray-400">Foydalanish shartlari</a> ·
                                <a href="#" className="hover:text-gray-400 ml-4">Maxfiylik siyosati</a> ·
                                <a href="#" className="hover:text-gray-400 ml-4">Cookies</a>
                            </p>
                            <p className="mt-4 text-xs">
                                Risk ogohlantirishi: Forex va CFD bilan savdo qilish katta risk bilan bog'liq va siz kiritgan mablag'laringizni yo'qotishingiz mumkin.
                                Iltimos, savdo qilishdan oldin risklarni yaxshilab o'rganing.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MprCabinet;