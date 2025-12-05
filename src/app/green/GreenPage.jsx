// // /green/GreenPage.jsx
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Wind, Droplets, TreePine, Globe, Users, Book, DollarSign } from 'lucide-react';
// import Image from 'next/image';
// import './green.css';

// export default function GreenPage() {
//     // Состояния для анимаций
//     const [position, setPosition] = useState(0);
//     const [glowIntensity, setGlowIntensity] = useState(0);
//     const [pulseSize, setPulseSize] = useState(1);
//     const [activeTab, setActiveTab] = useState(0);
//     const videoRef = useRef(null);

//     // Эффекты для анимаций
//     useEffect(() => {
//         // Угловой градиент
//         const interval = setInterval(() => {
//             setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
//         }, 40);

//         // Пульсация свечения
//         const glowInterval = setInterval(() => {
//             setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
//         }, 50);

//         // Пульсация размера
//         const pulseInterval = setInterval(() => {
//             setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
//         }, 50);

//         return () => {
//             clearInterval(interval);
//             clearInterval(glowInterval);
//             clearInterval(pulseInterval);
//         };
//     }, []);

//     // Эффект для управления видео
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.playbackRate = 0.9; // Немного замедляем видео для лучшего эффекта
//         }
//     }, []);

//     return (
//         <main className="min-h-screen font-sans">
//             {/* Hero секция с видео-фоном */}
//             <section className="relative py-8 md:py-0 md:h-screen flex items-center overflow-hidden">
//                 {/* Видео фон */}
//                 <div className="absolute inset-0 z-0">
//                     <div className="relative w-full h-full overflow-hidden">
//                         {/* MP4 видео */}
//                         <video
//                             ref={videoRef}
//                             className="absolute w-full h-full object-cover"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             preload="auto"
//                         >
//                             <source src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-uni-compressed.mp4" type="video/mp4" />
//                         </video>
//                     </div>
//                 </div>

//                 {/* Темный оверлей */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/85 to-green-800/60 z-10"></div>

//                 {/* Декоративная сетка */}
//                 <div className="absolute inset-0 z-20">
//                     <div className="w-full h-full grid grid-cols-12 grid-rows-6">
//                         {Array.from({ length: 12 * 6 }).map((_, i) => (
//                             <div key={i} className="relative">
//                                 <div className="absolute inset-0 border border-green-500/5"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Плавающие элементы */}
//                 <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-500/10 blur-3xl animate-float-slow z-20"></div>
//                 <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-green-300/10 blur-3xl animate-float-medium z-20"></div>
//                 <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-green-400/10 blur-3xl animate-float-fast z-20"></div>

//                 {/* Главное содержимое - перемещено влево */}
//                 <div className="relative z-30 max-w-screen-xl mx-auto px-6 w-full">
//                     <div className="md:max-w-xl">
//                         <div className="relative inline-block mb-4">
//                             <div
//                                 className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
//                             ></div>
//                             <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
//                                 Образование для будущего
//                             </span>
//                         </div>

//                         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg text-left">
//                             Зелёная экономика
//                         </h1>

//                         <p className="text-xl text-white/80 mb-12 leading-relaxed text-left">
//                             Практичный подход к использованию ресурсов — меньше отходов, больше пользы.
//                             EMU University делает акцент на устойчивом развитии и обучает студентов тому,
//                             как применять экологические принципы в реальной жизни и профессии.
//                         </p>

//                         <div className="flex flex-wrap gap-6 justify-start">
//                             <a
//                                 href="#more-info"
//                                 className="relative group overflow-hidden py-4 px-10 font-bold rounded-full transition-all duration-500 text-lg inline-block"
//                                 style={{
//                                     background: `linear-gradient(${position}deg, #4ade80 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #4ade80 100%)`,
//                                     color: '#022c22',
//                                     transform: `scale(${pulseSize})`,
//                                 }}
//                             >
//                                 <span className="relative z-10 text-white">Подробнее</span>
//                                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/20 to-transparent transition-transform duration-500"></div>
//                             </a>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Индикатор скролла */}
//                 <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center z-50">
//                     <div className="w-0.5 h-16 bg-white/30 mb-2 relative overflow-hidden">
//                         <div className="w-full h-1/2 bg-white absolute top-0 animate-scrollDown"></div>
//                     </div>
//                     <span className="text-white/70 text-xs uppercase tracking-widest">Вниз</span>
//                 </div>
//             </section>

//             {/* Секция "О нас" */}
//             <section id="more-info" className="py-16 md:py-24 px-6 bg-white relative">
//                 {/* Декоративные элементы */}
//                 <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 -z-10"></div>
//                 <div className="absolute top-1/4 left-10 w-32 h-32 rotate-45 border-4 border-green-100 rounded-3xl -z-10"></div>
//                 <div className="absolute bottom-10 right-32 w-16 h-16 bg-green-100 rounded-full -z-10"></div>

//                 <div className="max-w-screen-xl mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:gap-[50px] gap-[10px]">
//                         <div>
//                             <div className="relative inline-block mb-4">
//                                 <div
//                                     className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
//                                 ></div>
//                                 <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
//                                     Образование для будущего
//                                 </span>
//                             </div>


//                             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">EMU University за <span className="text-green-600">осознанное потребление</span></h2>

//                             <div className="prose prose-lg max-w-none">
//                                 <p className="text-gray-700 mb-6">
//                                     В университете постепенно внедряются принципы зелёной экономики — меньше бумаги, разумное использование электроэнергии,
//                                     сортировка отходов и бережное отношение к ресурсам стали нормой повседневной жизни на кампусе. Мы не стремимся к показухе,
//                                     просто делаем то, что считаем логичным и нужным.
//                                 </p>

//                                 <p className="text-gray-700 mb-6">
//                                     Отдельное внимание — повседневным мелочам: выключать свет в пустых аудиториях, не печатать лишнего, использовать повторно
//                                     то, что ещё можно использовать. Это всё не требует особых усилий, зато в долгосрочной перспективе даёт результат.
//                                 </p>

//                                 <p className="text-gray-700 mb-6">
//                                     В учебных курсах появляются темы, связанные с устойчивым развитием, энергосбережением и экологией — не как отдельная дисциплина,
//                                     а как часть реальной картины мира. Многие студенты сами выходят с инициативами — организуют акции, проекты, делают что-то на местах.
//                                 </p>

//                                 <p className="text-gray-700 mb-8">
//                                     Нам важно, чтобы устойчивый подход был не обязанностью, а частью образа мышления. Без давления, без лозунгов. Просто привычка
//                                     думать наперёд и использовать ресурсы с умом.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
//                                 <Image
//                                     src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green_university.webp"
//                                     alt="Студенты Зеленого университета"
//                                     width={600}
//                                     height={700}
//                                     className="w-full h-auto object-cover"
//                                 />
//                             </div>

//                             <div className="absolute -top-5 -right-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
//                             <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Цели устойчивого развития */}
//             <section className="py-16 px-6 bg-gray-50- bg-white">
//                 <div className="max-w-screen-xl mx-auto">
//                     <div className="text-center mb-16">
//                         <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">Цели ООН</span>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Цели устойчивого развития</h2>
//                         <p className="text-gray-600 max-w-2xl mx-auto">
//                             Зеленый университет поддерживает и внедряет в свою деятельность цели устойчивого развития,
//                             определенные Организацией Объединенных Наций
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {[
//                             {
//                                 number: "07",
//                                 title: "Доступная и чистая энергия",
//                                 description: "Развитие возобновляемых источников энергии для создания устойчивой энергетической системы",
//                                 icon: <Wind size={28} />,
//                                 color: "bg-yellow-500",
//                                 hover: "group-hover:bg-yellow-400",
//                                 border: "border-yellow-500",
//                             },
//                             {
//                                 number: "13",
//                                 title: "Борьба с изменением климата",
//                                 description: "Принятие мер по борьбе с изменением климата и устранение экологических проблем",
//                                 icon: <Leaf size={28} />,
//                                 color: "bg-blue-500",
//                                 hover: "group-hover:bg-blue-400",
//                                 border: "border-blue-500",
//                             },
//                             {
//                                 number: "14",
//                                 title: "Сохранение водных экосистем",
//                                 description: "Сохранение и рациональное использование океанов, морей и морских ресурсов",
//                                 icon: <Droplets size={28} />,
//                                 color: "bg-blue-700",
//                                 hover: "group-hover:bg-blue-600",
//                                 border: "border-blue-700",
//                             },
//                             {
//                                 number: "15",
//                                 title: "Сохранение экосистем суши",
//                                 description: "Защита и восстановление экосистем суши и борьба с опустыниванием",
//                                 icon: <TreePine size={28} />,
//                                 color: "bg-green-600",
//                                 hover: "group-hover:bg-green-500",
//                                 border: "border-green-600",
//                             },
//                         ].map((goal, index) => (
//                             <div
//                                 key={index}
//                                 className={`bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 relative ${goal.border} border-l-4`}
//                             >
//                                 <div className="p-6">
//                                     <div className="flex items-center mb-4">
//                                         <div className={`w-12 h-12 ${goal.color} text-white rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 ${goal.hover}`}>
//                                             {goal.icon}
//                                         </div>
//                                         <span className="text-4xl font-bold text-gray-300">{goal.number}</span>
//                                     </div>
//                                     <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
//                                     <p className="text-gray-600">{goal.description}</p>
//                                 </div>
//                                 <div className="hidden h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }





// /green/GreenPage.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Wind, Droplets, TreePine, Globe, Users, Book, DollarSign } from 'lucide-react';
import Image from 'next/image';
import GreenGallery from './GreenGallery';
import './green.css';

export default function GreenPage({ language = 'ru' }) {
    // Состояния для анимаций
    const [position, setPosition] = useState(0);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);
    const [activeTab, setActiveTab] = useState(0);
    const videoRef = useRef(null);

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

    // Эффект для управления видео
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.9; // Немного замедляем видео для лучшего эффекта
        }
    }, []);

    return (
        <main className="min-h-screen font-sans">
            {/* Hero секция с видео-фоном */}
            <section className="relative py-8 md:py-0 md:h-screen flex items-center overflow-hidden">
                {/* Видео фон */}
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* MP4 видео */}
                        <video
                            ref={videoRef}
                            className="absolute w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-uni-compressed.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Темный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/85 to-green-800/60 z-10"></div>

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

                {/* Главное содержимое - перемещено влево */}
                <div className="relative z-30 max-w-screen-xl mx-auto px-6 w-full">
                    <div className="md:max-w-xl">
                        <div className="relative inline-block mb-4">
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
                            ></div>
                            <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
                                Образование для будущего
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg text-left">
                            Зелёная экономика
                        </h1>

                        <p className="text-xl text-white/80 mb-12 leading-relaxed text-left">
                            Практичный подход к использованию ресурсов — меньше отходов, больше пользы.
                            EMU University делает акцент на устойчивом развитии и обучает студентов тому,
                            как применять экологические принципы в реальной жизни и профессии.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-start">
                            <a
                                href="#more-info"
                                className="relative group overflow-hidden py-4 px-10 font-bold rounded-full transition-all duration-500 text-lg inline-block"
                                style={{
                                    background: `linear-gradient(${position}deg, #4ade80 0%, #16a34a 25%, #22c55e 50%, #15803d 75%, #4ade80 100%)`,
                                    color: '#022c22',
                                    transform: `scale(${pulseSize})`,
                                }}
                            >
                                <span className="relative z-10 text-white">Подробнее</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/20 to-transparent transition-transform duration-500"></div>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Индикатор скролла */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center z-50">
                    <div className="w-0.5 h-16 bg-white/30 mb-2 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-white absolute top-0 animate-scrollDown"></div>
                    </div>
                    <span className="text-white/70 text-xs uppercase tracking-widest">Вниз</span>
                </div>
            </section>

            {/* Секция "О нас" */}
            <section id="more-info" className="py-16 md:py-24 px-6 bg-white relative">
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 -z-10"></div>
                <div className="absolute top-1/4 left-10 w-32 h-32 rotate-45 border-4 border-green-100 rounded-3xl -z-10"></div>
                <div className="absolute bottom-10 right-32 w-16 h-16 bg-green-100 rounded-full -z-10"></div>

                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:gap-[50px] gap-[10px]">
                        <div>
                            <div className="relative inline-block mb-4">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"
                                ></div>
                                <span className="relative px-3 py-1 text-sm font-medium text-white bg-green-800/50 rounded-lg border border-green-600/30 uppercase tracking-wider">
                                    Образование для будущего
                                </span>
                            </div>


                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">EMU University за <span className="text-green-600">осознанное потребление</span></h2>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 mb-6">
                                    В университете постепенно внедряются принципы зелёной экономики — меньше бумаги, разумное использование электроэнергии,
                                    сортировка отходов и бережное отношение к ресурсам стали нормой повседневной жизни на кампусе. Мы не стремимся к показухе,
                                    просто делаем то, что считаем логичным и нужным.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Отдельное внимание — повседневным мелочам: выключать свет в пустых аудиториях, не печатать лишнего, использовать повторно
                                    то, что ещё можно использовать. Это всё не требует особых усилий, зато в долгосрочной перспективе даёт результат.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    В учебных курсах появляются темы, связанные с устойчивым развитием, энергосбережением и экологией — не как отдельная дисциплина,
                                    а как часть реальной картины мира. Многие студенты сами выходят с инициативами — организуют акции, проекты, делают что-то на местах.
                                </p>

                                <p className="text-gray-700 mb-8">
                                    Нам важно, чтобы устойчивый подход был не обязанностью, а частью образа мышления. Без давления, без лозунгов. Просто привычка
                                    думать наперёд и использовать ресурсы с умом.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green_university.webp"
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

            {/* Цели устойчивого развития */}
            <section className="py-16 px-6 bg-gray-50- bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-2">Цели ООН</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Цели устойчивого развития</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Зеленый университет поддерживает и внедряет в свою деятельность цели устойчивого развития,
                            определенные Организацией Объединенных Наций
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "07",
                                title: "Доступная и чистая энергия",
                                description: "Развитие возобновляемых источников энергии для создания устойчивой энергетической системы",
                                icon: <Wind size={28} />,
                                color: "bg-yellow-500",
                                hover: "group-hover:bg-yellow-400",
                                border: "border-yellow-500",
                            },
                            {
                                number: "13",
                                title: "Борьба с изменением климата",
                                description: "Принятие мер по борьбе с изменением климата и устранение экологических проблем",
                                icon: <Leaf size={28} />,
                                color: "bg-blue-500",
                                hover: "group-hover:bg-blue-400",
                                border: "border-blue-500",
                            },
                            {
                                number: "14",
                                title: "Сохранение водных экосистем",
                                description: "Сохранение и рациональное использование океанов, морей и морских ресурсов",
                                icon: <Droplets size={28} />,
                                color: "bg-blue-700",
                                hover: "group-hover:bg-blue-600",
                                border: "border-blue-700",
                            },
                            {
                                number: "15",
                                title: "Сохранение экосистем суши",
                                description: "Защита и восстановление экосистем суши и борьба с опустыниванием",
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
                                <div className="hidden h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Компонент галереи ЭКО волонтеров */}
            <GreenGallery language={language} />
        </main>
    );
}