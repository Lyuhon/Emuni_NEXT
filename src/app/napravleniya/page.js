// // app/napravleniya/page.js
// import DirectionsClient from './DirectionsClient';

// async function fetchDirections() {
//     const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857', {
//         next: { revalidate: 43200 }, // ISR: обновление каждые 12 часов
//     });
//     if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     const data = await res.json();

//     if (!data.acf || !data.acf.accordion_repeater) {
//         console.error('No accordion_repeater found:', data);
//         return { directions: {}, directionContent: {} };
//     }

//     // Преобразование данных из accordion_repeater
//     const directions = {};
//     const directionContent = {};
//     data.acf.accordion_repeater.forEach((item) => {
//         const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
//         const slug = title.toLowerCase().replace(/\s+/g, '-');
//         directions[title] = {
//             title_icon: item.title_icon || '/default-icon.png', // Используем title_icon вместо icon_url
//             bgImage: item.bg_image_url || '/api/placeholder/400/200',
//         };
//         directionContent[title] = {
//             title: `«${title}» EMU UNIVERSITY`,
//             description: item.text || 'Описание отсутствует.',
//             goal: item.goal || 'Цель обучения отсутствует.',
//             practice: item.practice || 'Информация о практике отсутствует.',
//             duration: item.duration || 'Длительность неизвестна.',
//             language: item.language || 'Язык обучения не указан.',
//             key_subjects: item.key_subjects || ['Предметы не указаны'],
//             price: item.price || { semester: 'Не указано', year: 'Не указано' },
//             stats: [
//                 // { label: 'Длительность', value: item.duration || 'Не указано' },
//                 // { label: 'Практика', value: item.practice_hours || 'Не указано' },
//                 // { label: 'Предметов', value: (item.key_subjects || []).length.toString() || 'Не указано' },
//                 { label: 'Стоиомсть за семестр', value: item.duration || 'Не указано' },
//                 { label: 'Стоиомсть за учебный год', value: item.practice_hours || 'Не указано' },
//             ],
//             title_icon: item.title_icon || '/default-image.png',
//         };
//     });

//     return { directions, directionContent };
// }

// export default async function DirectionsPage() {
//     const { directions, directionContent } = await fetchDirections();

//     return <DirectionsClient directions={directions} directionContent={directionContent} />;
// }


// app/napravleniya/page.js
import DirectionsClient from './DirectionsClient';

async function fetchDirections() {
    const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857', {
        next: { revalidate: 3600 }, // ISR: обновление каждые 1 часов
    });
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    const data = await res.json();

    if (!data.acf) {
        console.error('No ACF found:', data);
        return { directions: {}, directionContent: {}, acf: {} };
    }

    // Преобразование данных из accordion_repeater
    const directions = {};
    const directionContent = {};

    if (data.acf.accordion_repeater) {
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
                    // { label: 'Длительность', value: item.duration || 'Не указано' },
                    // { label: 'Практика', value: item.practice_hours || 'Не указано' },
                    // { label: 'Предметов', value: (item.key_subjects || []).length.toString() || 'Не указано' },
                    { label: 'Стоиомсть за семестр', value: item.semester_price || 'Не указано' },
                    { label: 'Стоиомсть за учебный год', value: item.full_price || 'Не указано' },
                ],
                title_icon: item.title_icon || '/default-image.png',
            };
        });
    } else {
        console.warn('No accordion_repeater found in data.acf');
    }

    return { directions, directionContent, acf: data.acf };
}

export default async function DirectionsPage() {
    const { directions, directionContent, acf } = await fetchDirections();

    // Для отладки
    console.log("Page data:", {
        directionsCount: Object.keys(directions).length,
        acfData: acf ? 'Available' : 'Not available',
        businessDirections: acf?.accordion_repeater_2 ? acf.accordion_repeater_2.length : 'None'
    });

    return <DirectionsClient
        directions={directions}
        directionContent={directionContent}
        acf={acf}
    />;
}