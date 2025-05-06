import ErasmusPage from './ErasmusPage';
import ErasmusPostsServer from './ErasmusPostsServer';

// SEO метаданные
export const metadata = {
    title: "Erasmus+ | EMU University",
    description: "EMU University’dagi Erasmus+ dasturi — talabalar va o‘qituvchilar uchun xalqaro imkoniyatlar. Stipendiyalar, grantlar va Yevropa hamkorlik loyihalari haqida bilib oling.",
    keywords: "erasmus+, xalqaro hamkorlik, akademik mobillik, EMU University, talabalar almashinuvi, grantlar, Yevropa dasturlari",
    openGraph: {
        title: "EMU University’da Erasmus+",
        description: "Yevropa Ittifoqining ta’lim va o‘qitish sohalaridagi loyihalar, sherikliklar, tadbirlar va mobillikni qo‘llab-quvvatlashga qaratilgan dasturi",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/erasmus-news.webp'],
    },
};

export const revalidate = 86400;

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Erasmus+ dasturi",
    "description": "Erasmus+ — Yevropa Ittifoqining ta’lim sohasida xalqaro hamkorlikni rivojlantirishga qaratilgan tashabbusi",
    "url": "https://emuni.uz/erasmus",
    "sameAs": [
        "https://erasmus-plus.ec.europa.eu/",
        "https://www.facebook.com/EUErasmusPlusProgramme/"
    ],
    "knowsAbout": [
        "Akademik mobillik",
        "Xalqaro hamkorlik",
        "Ta’lim grantlari",
        "Qo‘shma magistratura dasturlari"
    ]
};

// Функция для получения постов Erasmus на стороне сервера
async function fetchErasmusPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=uz&per_page=3&tag=erasmus-uz`;

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