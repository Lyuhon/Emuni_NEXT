import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
        const today = new Date().toISOString().split('T')[0];
        const ipDateKey = `visit:${ip}:${today}`;

        const hasVisitedToday = await kv.get(ipDateKey);

        if (!hasVisitedToday) {
            await kv.set(ipDateKey, '1', { ex: 60 * 60 * 24 }); // 24 часа

            const todayKey = `visits:today:${today}`;
            const weekKey = `visits:week:${getWeekNumber(new Date())}`;
            const monthKey = `visits:month:${today.slice(0, 7)}`;
            const totalKey = 'visits:total';

            await Promise.all([
                kv.incr(todayKey),
                kv.incr(weekKey),
                kv.incr(monthKey),
                kv.incr(totalKey),
            ]);

            await Promise.all([
                kv.expire(todayKey, 60 * 60 * 24),
                kv.expire(weekKey, 60 * 60 * 24 * 7),
                kv.expire(monthKey, 60 * 60 * 24 * 30),
            ]);
        }

        const todayVisits = (await kv.get(`visits:today:${today}`)) || 0;
        const weekVisits = (await kv.get(`visits:week:${getWeekNumber(new Date())}`)) || 0;
        const monthVisits = (await kv.get(`visits:month:${today.slice(0, 7)}`)) || 0;
        const totalVisits = (await kv.get('visits:total')) || 0;

        return NextResponse.json({
            today: todayVisits,
            week: weekVisits,
            month: monthVisits,
            total: totalVisits,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

function getWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
}