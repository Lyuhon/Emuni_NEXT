import GalleryAccordion from './GalleryAccordion';

async function fetchGalleryData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81192', {
            next: { revalidate: 43200 }, // ISR: кеш на 12 часов (43200 секунд)
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
                title: video.podpis_ru || 'Видео без подписи',
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

    return <GalleryAccordion videos={videos} gallerySections={gallerySections} />;
}