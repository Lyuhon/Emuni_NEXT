// // /green/page.jsx
// import GreenPage from './GreenPage';
// import GreenPostsServer from './GreenPostsServer';

// // SEO метаданные
// export const metadata = {
//     title: "Зеленый Университет - EMU University",
//     description: "EMU University за осознанное потребление ресурсов. Узнайте о наших инициативах в области устойчивого развития, экологии и зеленой экономики.",
//     keywords: "зеленый университет, устойчивое развитие, экология, зеленая экономика, EMU University, осознанное потребление, цели ООН",
//     openGraph: {
//         title: "Зеленый Университет EMU",
//         description: "Практичный подход к использованию ресурсов — меньше отходов, больше пользы. EMU University делает акцент на устойчивом развитии.",
//         images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-emu-university.jpg'],
//     },
// };

// // ISR конфигурация
// export const revalidate = 86400; // Обновление каждые 24 часа

// // Структурированные данные для SEO
// const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "EMU University - Зеленый Университет",
//     "description": "EMU University за осознанное потребление ресурсов и устойчивое развитие",
//     "url": "https://emuni.uz/green-university",
//     "sameAs": [
//         "https://www.facebook.com/emuuniversity",
//         "https://www.instagram.com/emuuniversity/"
//     ],
//     "knowsAbout": [
//         "Зеленая экономика",
//         "Устойчивое развитие",
//         "Экологическое образование",
//         "Цели устойчивого развития ООН"
//     ]
// };

// // Функция для получения постов на стороне сервера
// async function fetchGreenPosts() {
//     const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
//     const postsUrl = `${wpBaseUrl}/posts?lang=ru&per_page=3&tag=green`;

//     try {
//         const postsRes = await fetch(postsUrl, {
//             next: { revalidate: 86400 }, // ISR: обновление каждые 24 часа
//         });

//         if (!postsRes.ok) {
//             throw new Error(`Failed to fetch posts: ${postsRes.status}`);
//         }

//         const postsData = await postsRes.json();
//         return postsData;
//     } catch (error) {
//         console.error('Error fetching green posts:', error);
//         return { posts: [] };
//     }
// }

// export default async function GreenUniversityPage() {
//     // Получаем данные о постах
//     const postsData = await fetchGreenPosts();

//     return (
//         <>
//             {/* Структурированные данные */}
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify(structuredData)
//                 }}
//             />
//             <GreenPage />
//             <GreenPostsServer postsData={postsData} />
//         </>
//     );
// }


// /green/page.jsx
import GreenPage from './GreenPage';
import GreenPostsServer from './GreenPostsServer';

// SEO метаданные
export const metadata = {
    title: "Зеленый Университет - EMU University",
    description: "EMU University за осознанное потребление ресурсов. Узнайте о наших инициативах в области устойчивого развития, экологии и зеленой экономики.",
    keywords: "зеленый университет, устойчивое развитие, экология, зеленая экономика, EMU University, осознанное потребление, цели ООН",
    openGraph: {
        title: "Зеленый Университет EMU",
        description: "Практичный подход к использованию ресурсов — меньше отходов, больше пользы. EMU University делает акцент на устойчивом развитии.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-emu-university.jpg'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Зеленый Университет",
    "description": "EMU University за осознанное потребление ресурсов и устойчивое развитие",
    "url": "https://emuni.uz/green-university",
    "sameAs": [
        "https://www.facebook.com/emuuniversity",
        "https://www.instagram.com/emuuniversity/"
    ],
    "knowsAbout": [
        "Зеленая экономика",
        "Устойчивое развитие",
        "Экологическое образование",
        "Цели устойчивого развития ООН"
    ]
};

// Функция для получения постов на стороне сервера
async function fetchGreenPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=ru&per_page=3&tag=green`;

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
            <GreenPage language="ru" />
            <GreenPostsServer postsData={postsData} />
        </>
    );
}