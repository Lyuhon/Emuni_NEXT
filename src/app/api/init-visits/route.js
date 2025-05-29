import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const today = new Date().toISOString().split('T')[0]; // 2025-05-29
        const weekNumber = getWeekNumber(new Date()); // Текущая неделя
        const month = today.slice(0, 7); // 2025-05

        const todayKey = `visits:today:${today}`;
        const weekKey = `visits:week:${weekNumber}`;
        const monthKey = `visits:month:${month}`;
        const totalKey = 'visits:total';

        await Promise.all([
            kv.set(todayKey, 1, { ex: 60 * 60 * 24 }), // Сегодня: 1
            kv.set(weekKey, 2, { ex: 60 * 60 * 24 * 7 }), // Неделя: 2
            kv.set(monthKey, 1761, { ex: 60 * 60 * 24 * 30 }), // Месяц: 1761
            kv.set(totalKey, 403899), // Всего: 403899
        ]);

        return NextResponse.json({ message: 'Initial data set successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to initialize data' }, { status: 500 });
    }
}

function getWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
}