// app/napravleniya/page.js
import DirectionsClient from './DirectionsClient';

async function fetchDirections() {
    const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857', {
        next: { revalidate: 43200 }, // ISR: обновление каждые 12 часов
    });
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    const data = await res.json();

    if (!data.acf || !data.acf.accordion_repeater) {
        console.error('No accordion_repeater found:', data);
        return { directions: {}, directionContent: {} };
    }

    // Преобразование данных из accordion_repeater
    const directions = {};
    const directionContent = {};
    data.acf.accordion_repeater.forEach((item) => {
        const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        directions[title] = {
            title_icon: item.title_icon || '/default-icon.png', // Используем title_icon вместо icon_url
            bgImage: item.bg_image_url || '/api/placeholder/400/200',
        };
        directionContent[title] = {
            title: `«${title}» EMU UNIVERSITY`,
            description: item.text || 'Описание отсутствует.',
            goal: item.goal || 'Цель обучения отсутствует.',
            practice: item.practice || 'Информация о практике отсутствует.',
            duration: item.duration || 'Длительность неизвестна.',
            language: item.language || 'Язык обучения не указан.',
            key_subjects: item.key_subjects || ['Предметы не указаны'],
            price: item.price || { semester: 'Не указано', year: 'Не указано' },
            stats: [
                { label: 'Длительность', value: item.duration || 'Не указано' },
                { label: 'Практика', value: item.practice_hours || 'Не указано' },
                { label: 'Предметов', value: (item.key_subjects || []).length.toString() || 'Не указано' },
            ],
            title_icon: item.title_icon || '/default-image.png',
        };
    });

    return { directions, directionContent };
}

export default async function DirectionsPage() {
    const { directions, directionContent } = await fetchDirections();

    return <DirectionsClient directions={directions} directionContent={directionContent} />;
}