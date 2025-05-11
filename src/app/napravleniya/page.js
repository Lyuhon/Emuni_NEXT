// // app/napravleniya/page.js
// import DirectionsClient from './DirectionsClient';

// async function fetchDirections() {
//     const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857', {
//         next: { revalidate: 0 }, // ISR: обновление каждые 1 часов
//     });
//     if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     const data = await res.json();

//     if (!data.acf) {
//         console.error('No ACF found:', data);
//         return { directions: {}, directionContent: {}, zaochkaDirections: {}, zaochkaDirectionContent: {}, acf: {} };
//     }

//     // Преобразование данных из accordion_repeater
//     const directions = {};
//     const directionContent = {};

//     // Заочные направления
//     const zaochkaDirections = {};
//     const zaochkaDirectionContent = {};

//     // Обработка обычных направлений (медицинских)
//     if (data.acf.accordion_repeater) {
//         data.acf.accordion_repeater.forEach((item) => {
//             const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
//             const slug = title.toLowerCase().replace(/\s+/g, '-');
//             directions[title] = {
//                 title_icon: item.title_icon || '/default-icon.png',
//                 bgImage: item.bg_image_url || '/api/placeholder/400/200',
//             };
//             directionContent[title] = {
//                 title: `«${title}» EMU UNIVERSITY`,
//                 description: item.text || 'Описание отсутствует.',
//                 goal: item.goal || 'Цель обучения отсутствует.',
//                 practice: item.practice || 'Информация о практике отсутствует.',
//                 // duration: item.duration || 'Длительность неизвестна.',
//                 duration: item.let_obucheniya || '',
//                 language: item.language || 'Язык обучения не указан.',
//                 key_subjects: item.key_subjects || ['Предметы не указаны'],
//                 price: item.price || { semester: 'Не указано', year: 'Не указано' },
//                 stats: [
//                     { label: 'Стоимость за семестр', value: item.semester_price || 'Не указано' },
//                     { label: 'Стоимость за учебный год', value: item.full_price || 'Не указано' },
//                 ],
//                 title_icon: item.title_icon || '/default-image.png',
//                 // Поля для бейджей
//                 grant: item.grant === true,
//                 stipendiya: item.stipendiya === true,
//                 '1_smena': item['1_smena'] === true,
//                 '2_smena': item['2_smena'] === true,
//                 // Новые поля для 2-й смены
//                 semester_price_2_smena: item.semester_price_2_smena || 'Не указано',
//                 full_price_2_smena: item.full_price_2_smena || 'Не указано',
//                 grant_2_smena: item.grant_2_smena === true,
//                 stipendiya_2_smena: item.stipendiya_2_smena === true,
//             };
//         });
//     }

//     // Обработка заочных направлений
//     if (data.acf.accordion_repeater_3) {
//         data.acf.accordion_repeater_3.forEach((item) => {
//             const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
//             const slug = title.toLowerCase().replace(/\s+/g, '-');
//             zaochkaDirections[title] = {
//                 title_icon: item.title_icon || '/default-icon.png',
//                 bgImage: item.bg_image_url || '/api/placeholder/400/200',
//             };
//             zaochkaDirectionContent[title] = {
//                 title: `«${title}» EMU UNIVERSITY`,
//                 description: item.text || 'Описание отсутствует.',
//                 goal: item.goal || 'Цель обучения отсутствует.',
//                 practice: item.practice || 'Информация о практике отсутствует.',
//                 // duration: item.duration || 'Длительность неизвестна.',
//                 duration: item.let_obucheniya || '',
//                 language: item.language || 'Язык обучения не указан.',
//                 key_subjects: item.key_subjects || ['Предметы не указаны'],
//                 price: item.price || { semester: 'Не указано', year: 'Не указано' },
//                 stats: [
//                     { label: 'Стоиомсть за семестр', value: item.semester_price || 'Не указано' },
//                     { label: 'Стоиомсть за учебный год', value: item.full_price || 'Не указано' },
//                 ],
//                 title_icon: item.title_icon || '/default-image.png',
//                 // Поля для бейджей
//                 grant: item.grant === true,
//                 stipendiya: item.stipendiya === true,
//                 '1_smena': item['1_smena'] === true,
//                 '2_smena': item['2_smena'] === true,
//                 // Новые поля для 2-й смены
//                 semester_price_2_smena: item.semester_price_2_smena || 'Не указано',
//                 full_price_2_smena: item.full_price_2_smena || 'Не указано',
//                 grant_2_smena: item.grant_2_smena === true,
//                 stipendiya_2_smena: item.stipendiya_2_smena === true,
//             };
//         });
//     }

//     return {
//         directions,
//         directionContent,
//         zaochkaDirections,
//         zaochkaDirectionContent,
//         acf: data.acf
//     };
// }

// export default async function DirectionsPage() {
//     const { directions, directionContent, zaochkaDirections, zaochkaDirectionContent, acf } = await fetchDirections();

//     // Для отладки
//     console.log("Page data:", {
//         directionsCount: Object.keys(directions).length,
//         acfData: acf ? 'Available' : 'Not available',
//         businessDirections: acf?.accordion_repeater_2 ? acf.accordion_repeater_2.length : 'None',
//         zaochkaDirections: Object.keys(zaochkaDirections).length,
//     });

//     return <DirectionsClient
//         directions={directions}
//         directionContent={directionContent}
//         zaochkaDirections={zaochkaDirections}
//         zaochkaDirectionContent={zaochkaDirectionContent}
//         acf={acf}
//     />;
// }



// app/napravleniya/page.js
import DirectionsClient from './DirectionsClient';
import PricingAccordion from './PricingAccordion';

async function fetchDirections() {
    const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857', {
        next: { revalidate: 0 }, // ISR: обновление каждые 1 часов
    });
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    const data = await res.json();

    if (!data.acf) {
        console.error('No ACF found:', data);
        return { directions: {}, directionContent: {}, zaochkaDirections: {}, zaochkaDirectionContent: {}, acf: {} };
    }

    // Преобразование данных из accordion_repeater
    const directions = {};
    const directionContent = {};

    // Заочные направления
    const zaochkaDirections = {};
    const zaochkaDirectionContent = {};

    // Обработка обычных направлений (медицинских)
    if (data.acf.accordion_repeater) {
        data.acf.accordion_repeater.forEach((item) => {
            const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
            const slug = title.toLowerCase().replace(/\s+/g, '-');
            directions[title] = {
                title_icon: item.title_icon || '/default-icon.png',
                bgImage: item.bg_image_url || '/api/placeholder/400/200',
            };
            directionContent[title] = {
                title: `«${title}» EMU UNIVERSITY`,
                description: item.text || 'Описание отсутствует.',
                goal: item.goal || 'Цель обучения отсутствует.',
                practice: item.practice || 'Информация о практике отсутствует.',
                // duration: item.duration || 'Длительность неизвестна.',
                duration: item.let_obucheniya || '',
                language: item.language || 'Язык обучения не указан.',
                key_subjects: item.key_subjects || ['Предметы не указаны'],
                price: item.price || { semester: 'Не указано', year: 'Не указано' },
                stats: [
                    { label: 'Стоимость за семестр', value: item.semester_price || 'Не указано' },
                    { label: 'Стоимость за учебный год', value: item.full_price || 'Не указано' },
                ],
                title_icon: item.title_icon || '/default-image.png',
                // Поля для бейджей
                grant: item.grant === true,
                stipendiya: item.stipendiya === true,
                '1_smena': item['1_smena'] === true,
                '2_smena': item['2_smena'] === true,
                // Новые поля для 2-й смены
                semester_price_2_smena: item.semester_price_2_smena || 'Не указано',
                full_price_2_smena: item.full_price_2_smena || 'Не указано',
                grant_2_smena: item.grant_2_smena === true,
                stipendiya_2_smena: item.stipendiya_2_smena === true,
            };
        });
    }

    // Обработка заочных направлений
    if (data.acf.accordion_repeater_3) {
        data.acf.accordion_repeater_3.forEach((item) => {
            const title = item.accordion_title || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
            const slug = title.toLowerCase().replace(/\s+/g, '-');
            zaochkaDirections[title] = {
                title_icon: item.title_icon || '/default-icon.png',
                bgImage: item.bg_image_url || '/api/placeholder/400/200',
            };
            zaochkaDirectionContent[title] = {
                title: `«${title}» EMU UNIVERSITY`,
                description: item.text || 'Описание отсутствует.',
                goal: item.goal || 'Цель обучения отсутствует.',
                practice: item.practice || 'Информация о практике отсутствует.',
                // duration: item.duration || 'Длительность неизвестна.',
                duration: item.let_obucheniya || '',
                language: item.language || 'Язык обучения не указан.',
                key_subjects: item.key_subjects || ['Предметы не указаны'],
                price: item.price || { semester: 'Не указано', year: 'Не указано' },
                stats: [
                    { label: 'Стоиомсть за семестр', value: item.semester_price || 'Не указано' },
                    { label: 'Стоиомсть за учебный год', value: item.full_price || 'Не указано' },
                ],
                title_icon: item.title_icon || '/default-image.png',
                // Поля для бейджей
                grant: item.grant === true,
                stipendiya: item.stipendiya === true,
                '1_smena': item['1_smena'] === true,
                '2_smena': item['2_smena'] === true,
                // Новые поля для 2-й смены
                semester_price_2_smena: item.semester_price_2_smena || 'Не указано',
                full_price_2_smena: item.full_price_2_smena || 'Не указано',
                grant_2_smena: item.grant_2_smena === true,
                stipendiya_2_smena: item.stipendiya_2_smena === true,
            };
        });
    }

    // Подготовка данных для тарифной сетки
    const tarifImages = {
        medical: data.acf.tarifnaya_setka?.med_napravleniya_ru?.url || null,
        business: data.acf.tarifnaya_setka?.biznes_napravleniya_ru?.url || null
    };

    return {
        directions,
        directionContent,
        zaochkaDirections,
        zaochkaDirectionContent,
        acf: data.acf,
        tarifImages // Добавляем данные для тарифной сетки
    };
}

export default async function DirectionsPage() {
    const { directions, directionContent, zaochkaDirections, zaochkaDirectionContent, acf, tarifImages } = await fetchDirections();

    // Для отладки
    console.log("Page data:", {
        directionsCount: Object.keys(directions).length,
        acfData: acf ? 'Available' : 'Not available',
        businessDirections: acf?.accordion_repeater_2 ? acf.accordion_repeater_2.length : 'None',
        zaochkaDirections: Object.keys(zaochkaDirections).length,
        tarifImagesLoaded: !!tarifImages
    });

    return <DirectionsClient
        directions={directions}
        directionContent={directionContent}
        zaochkaDirections={zaochkaDirections}
        zaochkaDirectionContent={zaochkaDirectionContent}
        acf={acf}
        tarifImages={tarifImages} // Передаем данные для тарифной сетки
    />;
}