import ErasmusPage from './ErasmusPage';
import ErasmusPostsServer from './ErasmusPostsServer';

// SEO метаданные
export const metadata = {
    title: "Erasmus+ | EMU University",
    description: "Программа Erasmus+ в EMU University — международные возможности для студентов и преподавателей. Узнайте о стипендиях, грантах и проектах европейского сотрудничества.",
    keywords: "erasmus+, международное сотрудничество, академическая мобильность, EMU University, студенческие обмены, гранты, европейские программы",
    openGraph: {
        title: "Erasmus+ в EMU University",
        description: "Программа Европейского Союза, направленная на поддержку проектов, партнерств, мероприятий и мобильности в сферах образования и обучения",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/erasmus-news.webp'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Программа Erasmus+",
    "description": "Программа Erasmus+ — инициатива Европейского Союза для развития международного сотрудничества в образовании",
    "url": "https://emuni.uz/erasmus",
    "sameAs": [
        "https://erasmus-plus.ec.europa.eu/",
        "https://www.facebook.com/EUErasmusPlusProgramme/"
    ],
    "knowsAbout": [
        "Академическая мобильность",
        "Международное сотрудничество",
        "Образовательные гранты",
        "Совместные магистерские программы"
    ]
};

// Функция для получения постов Erasmus на стороне сервера
async function fetchErasmusPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=ru&per_page=3&tag=erasmus`;

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
        console.error('Error fetching erasmus posts:', error);
        return { posts: [] };
    }
}

export default async function ErasmusProgramPage() {
    // Получаем данные о постах
    const postsData = await fetchErasmusPosts();

    // Новые фирменные цвета
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
            <ErasmusPage brandColors={brandColors} />
            <ErasmusPostsServer postsData={postsData} brandColors={brandColors} />
        </>
    );
}