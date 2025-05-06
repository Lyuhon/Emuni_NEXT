// import GalleryAccordion from './GalleryAccordion';

// async function fetchGalleryData() {
//     try {
//         const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81192', {
//             next: { revalidate: 43200 }, // ISR: кеш на 12 часов (43200 секунд)
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}, statusText: ${res.statusText}`);
//         }

//         const data = await res.json();

//         if (!data.acf || !data.acf.yutub_video || !data.acf.gallereya) {
//             console.warn('No valid gallery data found, returning empty data:', data);
//             return { videos: [], gallerySections: [] };
//         }

//         // Обработка видео
//         const videos = data.acf.yutub_video
//             .filter((video) => video.id_videorolika)
//             .map((video) => ({
//                 id: video.id_videorolika,
//                 title: video.podpis_ru || '',
//             }));

//         // Обработка галереи
//         const gallerySections = data.acf.gallereya[0].razdel.map((section) => ({
//             title: section.nazvanie_razdela_ru || 'Без названия',
//             images: section.izobrazheniya.map((img) => ({
//                 src: img.url,
//                 alt: img.title || 'Фотография',
//                 width: img.width,
//                 height: img.height,
//             })),
//             icon: 'Camera', // По умолчанию, заменить на динамическое поле, если добавите
//         }));

//         return { videos, gallerySections };
//     } catch (error) {
//         console.error('Failed to fetch gallery data:', error.message);
//         return { videos: [], gallerySections: [] };
//     }
// }

// export default async function PhotoGallery() {
//     const { videos, gallerySections } = await fetchGalleryData();

//     return <GalleryAccordion videos={videos} gallerySections={gallerySections} />;
// }

import GalleryAccordion from './GalleryAccordion';

// SEO метаданные
export const metadata = {
    title: "Фотогалерея - EMU University",
    description: "Фотогалерея EMU University. Фотографии кампуса, мероприятий, студенческой жизни и обучения в нашем университете.",
    keywords: "фотогалерея, EMU University, студенческая жизнь, мероприятия, фото кампуса, видео университета",
    openGraph: {
        title: "Фотогалерея EMU University",
        description: "Визуальные моменты из жизни EMU University - фотографии кампуса, мероприятий и студенческой жизни",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Фотогалерея EMU University",
    "description": "Официальная фотогалерея университета EMU в Ташкенте",
    "url": "https://emu.uz/photo-gallery",
    "author": {
        "@type": "Organization",
        "name": "EMU University",
        "url": "https://emu.uz"
    }
};

async function fetchGalleryData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81192', {
            next: { revalidate: 86400 }, // ISR: кеш на 24 часа (86400 секунд)
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}, statusText: ${res.statusText}`);
        }

        const data = await res.json();

        if (!data.acf || !data.acf.yutub_video || !data.acf.gallereya) {
            console.warn('No valid gallery data found, returning empty data:', data);
            return { videos: [], gallerySections: [] };
        }

        // Обработка видео
        const videos = data.acf.yutub_video
            .filter((video) => video.id_videorolika)
            .map((video) => ({
                id: video.id_videorolika,
                title: video.podpis_ru || '',
            }));

        // Обработка галереи
        const gallerySections = data.acf.gallereya[0].razdel.map((section) => ({
            title: section.nazvanie_razdela_ru || 'Без названия',
            images: section.izobrazheniya.map((img) => ({
                src: img.url,
                alt: img.title || 'Фотография',
                width: img.width,
                height: img.height,
            })),
            icon: 'Camera', // По умолчанию, заменить на динамическое поле, если добавите
        }));

        return { videos, gallerySections };
    } catch (error) {
        console.error('Failed to fetch gallery data:', error.message);
        return { videos: [], gallerySections: [] };
    }
}

export default async function PhotoGallery() {
    const { videos, gallerySections } = await fetchGalleryData();

    // Новые фирменные цвета (передаем их в компонент)
    const brandColors = {
        primary: '#6b0e55',
        light: '#8f3178',
        lighter: '#f9eef5'
    };

    return (
        <>
            {/* Структурированные данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <GalleryAccordion
                videos={videos}
                gallerySections={gallerySections}
                brandColors={brandColors}
            />
        </>
    );
}