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
        fetch('/api/visit')
            .then((res) => res.json())
            .then((data) => {
                setVisits(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="border-2 border-red-600 p-3 bg-gray-100 text-gray-800 rounded">
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
            <p className="text-blue-600">
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