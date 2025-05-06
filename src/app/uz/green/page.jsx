import GreenPage from './GreenPage';
import GreenPostsServer from './GreenPostsServer';

// SEO метаданные на узбекском
export const metadata = {
    title: "Yashil Universitet - EMU University",
    description: "EMU University resurslarni ongli ravishda ishlatishni qo'llab-quvvatlaydi. Barqaror rivojlanish, ekologiya va yashil iqtisodiyot sohasidagi tashabbuslarimiz haqida bilib oling.",
    keywords: "yashil universitet, barqaror rivojlanish, ekologiya, yashil iqtisodiyot, EMU University, ongli iste'mol, BMT maqsadlari",
    openGraph: {
        title: "EMU Yashil Universiteti",
        description: "Resurslardan foydalanishga amaliy yondashuv — kamroq chiqindi, ko'proq foyda. EMU University barqaror rivojlanishga urg'u beradi.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-emu-university.jpg'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO на узбекском
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Yashil Universitet",
    "description": "EMU University resurslarni ongli ravishda ishlatishni va barqaror rivojlanishni qo'llab-quvvatlaydi",
    "url": "https://emuni.uz/uz/green",
    "sameAs": [
        "https://www.facebook.com/emuuniversity",
        "https://www.instagram.com/emuuniversity/"
    ],
    "knowsAbout": [
        "Yashil iqtisodiyot",
        "Barqaror rivojlanish",
        "Ekologik ta'lim",
        "BMT barqaror rivojlanish maqsadlari"
    ]
};

// Функция для получения постов на стороне сервера
async function fetchGreenPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=uz&per_page=3&tag=green-uz`;

    try {
        const postsRes = await fetch(postsUrl, {
            next: { revalidate: 86400 }, // ISR: обновление каждые 24 часа
        });

        if (!postsRes.ok) {
            throw new Error(`Failed to fetch posts: ${postsRes.status}`);
        }

        const postsData = await postsRes.json();
        return postsData;
    } catch (error) {
        console.error('Error fetching green posts:', error);
        return { posts: [] };
    }
}

export default async function GreenUniversityPage() {
    // Получаем данные о постах
    const postsData = await fetchGreenPosts();

    return (
        <>
            {/* Структурированные данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <GreenPage />
            <GreenPostsServer postsData={postsData} />
        </>
    );
}