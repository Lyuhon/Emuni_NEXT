'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const UTMTracker = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        // Проверяем, есть ли уже сохранённые UTM-метки в сессии
        const savedUTM = sessionStorage.getItem('utm_query');
        // console.log('savedUTM:', savedUTM);

        if (!savedUTM) {
            // Пробуем два способа получения параметров

            // Способ 1: через searchParams
            const utmParams = [];
            // console.log('searchParams entries:', Array.from(searchParams.entries()));

            for (const [key, value] of searchParams.entries()) {
                if (key.startsWith('utm_')) {
                    utmParams.push(`${key}=${value}`);
                }
            }

            // Способ 2: через window.location (fallback)
            if (utmParams.length === 0 && typeof window !== 'undefined') {
                const urlParams = new URLSearchParams(window.location.search);
                // console.log('window.location.search:', window.location.search);

                for (const [key, value] of urlParams.entries()) {
                    if (key.startsWith('utm_')) {
                        utmParams.push(`${key}=${value}`);
                    }
                }
            }

            // Если есть UTM-параметры, сохраняем их
            if (utmParams.length > 0) {
                const utmQuery = '?' + utmParams.join('&');
                sessionStorage.setItem('utm_query', utmQuery);
                // console.log('UTM-фрагмент сохранён:', utmQuery);
            } else {
                // console.log('UTM-параметры не найдены');
            }
        }
    }, [searchParams]);

    return null;
};

// Функция для получения сохранённого UTM-фрагмента
export const getUTMQuery = () => {
    if (typeof window === 'undefined') return '';

    const utmQuery = sessionStorage.getItem('utm_query');
    return utmQuery || '';
};

// Функция для добавления UTM к любой ссылке
export const addUTMToUrl = (url) => {
    const utmQuery = getUTMQuery();
    if (!utmQuery) return url;

    const separator = url.includes('?') ? '&' : '?';
    return url + separator + utmQuery.substring(1); // убираем первый ?
};

export default UTMTracker;