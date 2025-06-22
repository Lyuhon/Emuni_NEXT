'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import HeroSection from './HeroSection';
import BestChoiceSection from './BestChoiceSection';
import Stats from './StatsRedesign';
import AdvantagesSection from './AdvantagesSection';
import RectorAppealSlider from './RectorAppealSlider';
import CallActionSection from './CallActionSection';
import LicenseSection from './LicenseSection';
import SupportSection from './SupportSection';
import StudTestimonRedesign from './StudTestimonRedesign';
import PartnersSlider_Home from './PartnersSlider_Home';
import Recall from './Recall';
import FixedPhoneButton from './FixedPhoneButton';

export default function HomeClient() {
    // Состояния для анимаций
    // const [position, setPosition] = useState(0);
    // const [glowIntensity, setGlowIntensity] = useState(0);
    // const [pulseSize, setPulseSize] = useState(1);

    // useEffect(() => {
    //     // Угловой градиент
    //     const interval = setInterval(() => {
    //         setPosition((prev) => (prev >= 360 ? 0 : prev + 3));
    //     }, 40);

    //     // Пульсация свечения
    //     const glowInterval = setInterval(() => {
    //         setGlowIntensity((prev) => Math.abs(Math.sin(Date.now() / 1000)));
    //     }, 50);

    //     // Пульсация размера
    //     const pulseInterval = setInterval(() => {
    //         setPulseSize((prev) => 1 + 0.03 * Math.sin(Date.now() / 500));
    //     }, 50);

    //     return () => {
    //         clearInterval(interval);
    //         clearInterval(glowInterval);
    //         clearInterval(pulseInterval);
    //     };
    // }, []);

    return (
        <div className="min-h-screen font-sans">
            {/* БАННЕР */}
            <HeroSection />

            {/* ВЫБИРАЙТЕ ЛУЧШЕЕ */}
            <BestChoiceSection />

            {/* СТАТИСТИКА */}
            <Stats />

            {/* ПРЕИМУЩЕСТВА */}
            <AdvantagesSection />

            {/* БАННЕР С ОСНОВАТЕЛЕМ */}
            <RectorAppealSlider />

            {/* БАННЕР ДЛЯ ЗАЗЫВА РЕГИСТРАЦИИ */}
            <CallActionSection />

            {/* ЛИЦЕНЗИЯ */}
            <LicenseSection />

            {/* ПОДДЕРЖИВАЕМ И ПОМОГАЕМ */}
            <SupportSection />

            {/* ОТЗЫВЫ */}
            <StudTestimonRedesign />

            {/* ПАРТНЕРЫ */}
            <PartnersSlider_Home />

            {/* ОСТАВИТЬ ЗАЯВКУ */}
            <Recall />

            {/* КНОПКА ЗВОНКА */}
            <FixedPhoneButton />
        </div>
    );
}