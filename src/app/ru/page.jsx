// // app/page.js
// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// import style from './home.css'

// import HeroSection from './HeroSection';
// import BestChoiceSection from './BestChoiceSection';
// import Stats from './StatsRedesign';
// import AdvantagesSection from './AdvantagesSection';
// import RectorAppealSlider from './RectorAppealSlider';
// import CallActionSection from './CallActionSection';
// import LicenseSection from './LicenseSection';
// import SupportSection from './SupportSection';
// import StudTestimonRedesign from './StudTestimonRedesign';
// import PartnersSlider_Home from './PartnersSlider_Home';
// import Recall from './Recall';
// import FixedPhoneButton from './FixedPhoneButton';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';


// // Animations
// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 }
//     }
// };

// const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2
//         }
//     }
// };

// export default function Home() {

//     // Добавьте эти состояния и эффекты в компонент:
//     const [position, setPosition] = useState(0);
//     const [glowIntensity, setGlowIntensity] = useState(0);
//     const [pulseSize, setPulseSize] = useState(1);

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

//     return (
//         <div className="min-h-screen font-sans">

//             {/* БАННЕР */}
//             <HeroSection />


//             {/* ВЫБИРАЙТЕ ЛУЧШЕЕ */}
//             <BestChoiceSection />


//             {/* СТАТИСТИКА */}
//             <Stats />


//             {/* ПРЕИМУЩЕСТВА */}
//             <AdvantagesSection />


//             {/* БАННЕР С ОСНОВАТЕЛЕМ */}
//             <RectorAppealSlider />


//             {/* БАННЕР ДЛЯ ЗАЗЫВА РЕГИСТРАЦИИ */}
//             <CallActionSection />


//             {/* ЛИЦЕНЗИЯ */}
//             <LicenseSection />


//             {/* ПОДДЕРЖИВАЕМ И ПОМОГАЕМ */}
//             <SupportSection />


//             {/* ОТЗЫВЫ */}
//             <StudTestimonRedesign />


//             {/* ПАРТНЕРЫ */}
//             <PartnersSlider_Home />


//             {/* ОСТАВИТЬ ЗАЯВКУ */}
//             <Recall />


//             {/* КНОПКА ЗВОНКА */}
//             <FixedPhoneButton />

//         </div >
//     );
// }






// app/page.js

// Метаданные для SEO
export const metadata = {
    title: "EMU University - Ведущий медицинский и бизнес университет в Ташкенте",
    description: "EMU University – высшее образование в области медицины, фармации, бизнеса и менеджмента. Современные методики обучения, международные связи и практика в ведущих клиниках.",
    keywords: "медицинский университет, бизнес университет, высшее образование, EMU University, медицинское образование, медицина, Ташкент, поступление, абитуриентам, медицинский вуз",
    openGraph: {
        title: "EMU University – высшее образование мирового уровня",
        description: "Качественное образование в области медицины, фармации и здравоохранения. Международные программы обучения и лучшие преподаватели.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
        locale: 'ru_RU',
        type: 'website',
        siteName: 'EMU University',
    },
    alternates: {
        canonical: 'https://emuni.uz/',
        languages: {
            'ru-RU': 'https://emuni.uz/ru',
            'uz-UZ': 'https://emuni.uz/uz',
            'en-US': 'https://emuni.uz/en',
        },
    },
};

// Необходимо для ISR - обновление каждые 24 часа
export const revalidate = 86400;

// Импортируем клиентский компонент, который уже содержит все необходимые компоненты
import HomeClient from './HomeClient';
import './home.css';

export default function Home() {
    return (
        <>
            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "EMU University",
                        "url": "https://emuni.uz",
                        "logo": "https://emuni.uz/logo.png",
                        "description": "EMU University – ведущий медицинский университет в Ташкенте, предлагающий высококачественное образование в области медицины, фармации и бизнес направлений.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ташкент",
                            "addressRegion": "Ташкент",
                            "addressCountry": "Узбекистан"
                        },
                        "telephone": "+998781470007",
                        "email": "info@emuni.uz",
                        "sameAs": [
                            "https://www.facebook.com/European-Medical-University-100381125622674",
                            "https://instagram.com/emu_university",
                            "https://t.me/emuintash",
                        ],
                        "offers": {
                            "@type": "Offer",
                            "category": "Высшее образование",
                            "description": "Программы бакалавриата и магистратуры по направлениям медицины и бизнеса"
                        }
                    })
                }}
            />

            {/* Рендерим клиентский компонент, который содержит все секции */}
            <HomeClient />
        </>
    );
}