'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitWidget() {
    const pathname = usePathname();
    const isUzLang = pathname?.startsWith('/uz');
    const isEngLang = pathname?.startsWith('/eng');

    const [visits, setVisits] = useState({
        today: 0,
        week: 0,
        month: 0,
        total: 0,
    });

    useEffect(() => {
        // Проверяем кэш в localStorage
        const cacheKey = 'visit_stats';
        const cached = localStorage.getItem(cacheKey);
        const cacheTime = 15 * 60 * 1000; // 15 минут в миллисекундах

        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            const isExpired = Date.now() - timestamp > cacheTime;

            if (!isExpired) {
                setVisits(data);
                return; // Используем кэш, не делаем запрос
            }
        }

        // Если кэша нет или он устарел - делаем запрос
        fetch('/api/visit')
            .then((res) => res.json())
            .then((data) => {
                setVisits(data);
                // Сохраняем в кэш
                localStorage.setItem(cacheKey, JSON.stringify({
                    data,
                    timestamp: Date.now()
                }));
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="text-white text-sm">
            <p>
                {isUzLang
                    ? `Bugungi tashriflar: ${visits.today}`
                    : isEngLang
                        ? `Visits today: ${visits.today}`
                        : `Посещений сегодня: ${visits.today}`}
            </p>
            <p>
                {isUzLang
                    ? `Hafta davomida tashriflar: ${visits.week}`
                    : isEngLang
                        ? `Visits this week: ${visits.week}`
                        : `Посещений за неделю: ${visits.week}`}
            </p>
            <p>
                {isUzLang
                    ? `Oy davomida tashriflar: ${visits.month}`
                    : isEngLang
                        ? `Visits this month: ${visits.month}`
                        : `Посещений за месяц: ${visits.month}`}
            </p>
            <p>
                📶{' '}
                {isUzLang
                    ? `Jami tashriflar: ${visits.total}`
                    : isEngLang
                        ? `Total visits: ${visits.total}`
                        : `Всего посещений: ${visits.total}`}
            </p>
        </div>
    );
}