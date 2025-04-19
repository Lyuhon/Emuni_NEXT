// app/api/form-fields/route.js
import { NextResponse } from 'next/server';

// Кеш для хранения полей формы по id формы
const formsCache = new Map();
const cacheTimestamps = new Map();
const CACHE_DURATION = 604800000; // 1 неделя в миллисекундах (7 * 24 * 60 * 60 * 1000)

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const formId = searchParams.get('formId');

    if (!formId) {
        return NextResponse.json({ error: 'Form ID is required' }, { status: 400 });
    }

    // Проверяем, есть ли данные в кеше для конкретного formId и не устарели ли они
    const now = Date.now();
    const cacheTime = cacheTimestamps.get(formId);
    const cachedData = formsCache.get(formId);

    if (cachedData && cacheTime && (now - cacheTime < CACHE_DURATION)) {
        console.log(`[API] Cache hit for formId: ${formId}`);
        return NextResponse.json(cachedData, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    }

    try {
        console.log(`[API] Cache miss for formId: ${formId}, fetching from API...`);
        // Если кеша нет или он устарел, делаем запрос к API
        const response = await fetch(`https://admission.emuni.uz/wp-json/wpforms-api/v1/form/${formId}`);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Обновляем кеш и время кеширования для конкретного formId
        formsCache.set(formId, data);
        cacheTimestamps.set(formId, now);

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error(`[API] Error fetching form fields for formId: ${formId}:`, error);
        return NextResponse.json({ error: 'Failed to fetch form fields' }, { status: 500 });
    }
}