import GalleryAccordion from './GalleryAccordion';

// SEO metadata
export const metadata = {
    title: "Photo Gallery - EMU University",
    description: "Photo gallery of EMU University. Photos of the campus, events, student life and education at our university.",
    keywords: "photo gallery, EMU University, student life, events, campus photos, university videos",
    openGraph: {
        title: "Photo Gallery - EMU University",
        description: "Visual moments from EMU University - campus photos, events and student life",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR configuration
export const revalidate = 86400; // Update every 24 hours

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "EMU University Photo Gallery",
    "description": "Official photo gallery of EMU University in Tashkent",
    "url": "https://emuni.uz/photogallery",
    "author": {
        "@type": "Organization",
        "name": "EMU University",
        "url": "https://emuni.uz"
    }
};

async function fetchGalleryData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81192', {
            next: { revalidate: 86400 }, // ISR: cache for 24 hours (86400 seconds)
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

        // Process videos
        const videos = data.acf.yutub_video
            .filter((video) => video.id_videorolika)
            .map((video) => ({
                id: video.id_videorolika,
                title: video.podpis_ang || video.podpis_ru || '',
            }));

        // Process gallery
        const gallerySections = data.acf.gallereya[0].razdel.map((section) => ({
            title: section.nazvanie_razdela_ang || section.nazvanie_razdela_ru || 'Untitled',
            images: section.izobrazheniya.map((img) => ({
                src: img.url,
                alt: img.title || 'Photo',
                width: img.width,
                height: img.height,
            })),
            icon: 'Camera', // Default value, replace with dynamic field if you add it
        }));

        return { videos, gallerySections };
    } catch (error) {
        console.error('Failed to fetch gallery data:', error.message);
        return { videos: [], gallerySections: [] };
    }
}

export default async function PhotoGallery() {
    const { videos, gallerySections } = await fetchGalleryData();

    // Brand colors (pass them to the component)
    const brandColors = {
        primary: '#6b0e55',
        light: '#8f3178',
        lighter: '#f9eef5'
    };

    return (
        <>
            {/* Structured data */}
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