// import OrdinaturaClient from './OrdinaturaClient';

// // Получение данных с API
// async function getOrdinaturaData() {
//     try {
//         const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84344', {
//             next: { revalidate: 3600 } // Revalidate каждый час
//         });

//         if (!res.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching ordinatura data:', error);
//         return null;
//     }
// }

// // Мапинг категорий
// const categoryMapping = {
//     'accordion_repeater': {
//         id: 'surgery',
//         name: 'Jarrohlik yo\'nalishlari',
//         color: 'bg-red-500'
//     },
//     'accordion_repeater_2': {
//         id: 'pediatric',
//         name: 'Pediatriya yo\'nalishlari',
//         color: 'bg-green-500'
//     },
//     'accordion_repeater_3': {
//         id: 'therapeutic',
//         name: 'Terapevtik yo\'nalishlar',
//         color: 'bg-blue-500'
//     },
//     'accordion_repeater_4': {
//         id: 'stomatology',
//         name: 'Stomatologiya yo\'nalishlari',
//         color: 'bg-purple-500'
//     }
// };

// // Преобразование данных API в формат компонента
// function transformApiData(apiData) {
//     if (!apiData || !apiData.acf) {
//         return { categories: [], programs: [] };
//     }

//     const categories = [];
//     const programs = [];
//     let programId = 1;

//     Object.keys(categoryMapping).forEach(apiKey => {
//         const categoryData = apiData.acf[apiKey];
//         const categoryInfo = categoryMapping[apiKey];

//         if (categoryData && Array.isArray(categoryData) && categoryData.length > 0) {
//             // Добавляем категорию только если в ней есть программы
//             categories.push(categoryInfo);

//             // Преобразуем программы
//             categoryData.forEach(program => {
//                 if (program.accordion_title_uz && program.accordion_title_uz.trim()) {
//                     programs.push({
//                         id: programId++,
//                         title: program.accordion_title_uz,
//                         category: categoryInfo.id,
//                         description: program.text_uz ? program.text_uz.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'Описание программы',
//                         semesterPrice: program.semester_price || '0',
//                         yearPrice: program.full_price || (program.semester_price ? (parseInt(program.semester_price.replace(/\s/g, '')) * 2).toString() : '0'),
//                         shift1Price: program.semester_price || '0',
//                         shift2Price: program.semester_price_2_smena || program.semester_price || '0',
//                         duration: program.let_obucheniya ? `${program.let_obucheniya} года` : '2 года',
//                         benefits: [
//                             ...(program.grant ? ['Grant'] : []),
//                             ...(program.stipendiya ? ['Stipendiya'] : [])
//                         ],
//                         fullDescription: program.text_uz || '',
//                         iconUrl: program.title_icon || null,
//                         availableFor: program.dostupno_dlya_napravlenij ? program.dostupno_dlya_napravlenij.split(',').map(s => s.trim()).filter(s => s) : [],
//                     });
//                 }
//             });
//         }
//     });

//     return { categories, programs };
// }

// export default async function OrdinaturaPage() {
//     const apiData = await getOrdinaturaData();
//     const { categories, programs } = transformApiData(apiData);

//     // Если данные не загрузились, показываем fallback
//     if (!apiData) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold text-gray-900 mb-4">
//                         Программы Ординатуры
//                     </h1>
//                     <p className="text-gray-600">
//                         Данные временно недоступны. Попробуйте обновить страницу.
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return <OrdinaturaClient categories={categories} programs={programs} />;
// }


import OrdinaturaClient from './OrdinaturaClient';
import Head from 'next/head';

// SEO metama'lumotlar o'zbek tilida (lotin)
export const metadata = {
    title: "EMU University - Ordinatura",
    description: "Toshkent Yevropa tibbiyot universitetining ordinatura dasturlari. Jarrohlik, terapevtik, pediatriya va stomatologiya yo'nalishlari. O'zbekistonda sifatli tibbiyot ta'limi.",
    keywords: "ordinatura Toshkent, tibbiy ordinatura O'zbekiston, EMU ordinatura, yevropa tibbiyot universiteti, jarrohlik ordinatura, terapevtik ordinatura, pediatriya ordinatura, stomatologiya ordinatura, tibbiyot ta'limi, rezidentura",
    openGraph: {
        title: "Ordinatura EMU University",
        description: "Toshkent Yevropa tibbiyot universitetining ordinatura dasturlari. Jarrohlik, terapevtik, pediatriya va stomatologiya yo'nalishlari.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
        url: 'https://www.emuni.uz/ordinatura',
        type: 'website',
        locale: 'uz_UZ',
        siteName: 'EMU University'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ordinatura EMU University",
        description: "Toshkent Yevropa tibbiyot universitetining ordinatura dasturlari.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.emuni.uz/ordinatura',
    }
};

// ISR konfiguratsiyasi
export const revalidate = 3600; // Har soatda yangilash

// Ma'lumotlarni olish
async function getOrdinaturaData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84344', {
            next: { revalidate: 3600 } // Har soatda yangilash
        });

        if (!res.ok) {
            throw new Error('Ma\'lumotlarni olishda xatolik');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Ordinatura ma\'lumotlarini olishda xatolik:', error);
        return null;
    }
}

// Kategoriyalar moslashuvi
const categoryMapping = {
    'accordion_repeater': {
        id: 'surgery',
        name: 'Jarrohlik yo\'nalishlari',
        color: 'bg-red-500'
    },
    'accordion_repeater_2': {
        id: 'pediatric',
        name: 'Pediatriya yo\'nalishlari',
        color: 'bg-green-500'
    },
    'accordion_repeater_3': {
        id: 'therapeutic',
        name: 'Terapevtik yo\'nalishlar',
        color: 'bg-blue-500'
    },
    'accordion_repeater_4': {
        id: 'stomatology',
        name: 'Stomatologiya yo\'nalishlari',
        color: 'bg-purple-500'
    }
};

// Tuzilgan ma'lumotlar SEO uchun
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yevropa Tibbiyot Universiteti",
    "alternateName": "EMU University",
    "url": "https://www.emuni.uz/ordinatura",
    "description": "Toshkent Yevropa tibbiyot universitetining ordinatura dasturlari",
    "publisher": {
        "@type": "Organization",
        "name": "EMU University",
        "logo": {
            "@type": "ImageObject",
            "url": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png"
        }
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toshkent",
        "addressCountry": "UZ"
    },
    "telephone": "+998(78) 147-00-07",
    "email": "info@emuni.uz",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ordinatura dasturlari",
        "itemListElement": [
            {
                "@type": "Course",
                "name": "Jarrohlik ordinaturasi",
                "description": "Jarrohlik sohasida ixtisoslashgan ordinatura dasturlari",
                "provider": {
                    "@type": "Organization",
                    "name": "EMU University"
                }
            },
            {
                "@type": "Course",
                "name": "Pediatriya ordinaturasi",
                "description": "Bolalar kasalliklari bo'yicha ixtisoslashgan ordinatura dasturlari",
                "provider": {
                    "@type": "Organization",
                    "name": "EMU University"
                }
            },
            {
                "@type": "Course",
                "name": "Terapevtik ordinatura",
                "description": "Ichki kasalliklar bo'yicha ixtisoslashgan ordinatura dasturlari",
                "provider": {
                    "@type": "Organization",
                    "name": "EMU University"
                }
            },
            {
                "@type": "Course",
                "name": "Stomatologiya ordinaturasi",
                "description": "Tish kasalliklari bo'yicha ixtisoslashgan ordinatura dasturlari",
                "provider": {
                    "@type": "Organization",
                    "name": "EMU University"
                }
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5"
    }
};

// API ma'lumotlarini komponent formatiga aylantirish
function transformApiData(apiData) {
    if (!apiData || !apiData.acf) {
        return { categories: [], programs: [] };
    }

    const categories = [];
    const programs = [];
    let programId = 1;

    Object.keys(categoryMapping).forEach(apiKey => {
        const categoryData = apiData.acf[apiKey];
        const categoryInfo = categoryMapping[apiKey];

        if (categoryData && Array.isArray(categoryData) && categoryData.length > 0) {
            // Kategoriyani faqat dasturlar mavjud bo'lsa qo'shamiz
            categories.push(categoryInfo);

            // Dasturlarni aylantiramiz
            categoryData.forEach(program => {
                if (program.accordion_title_uz && program.accordion_title_uz.trim()) {
                    programs.push({
                        id: programId++,
                        title: program.accordion_title_uz,
                        category: categoryInfo.id,
                        description: program.text_uz ? program.text_uz.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'Dastur tavsifi',
                        semesterPrice: program.semester_price || '0',
                        yearPrice: program.full_price || (program.semester_price ? (parseInt(program.semester_price.replace(/\s/g, '')) * 2).toString() : '0'),
                        shift1Price: program.semester_price || '0',
                        shift2Price: program.semester_price_2_smena || program.semester_price || '0',
                        duration: program.let_obucheniya ? `${program.let_obucheniya} yil` : '2 yil',
                        benefits: [
                            ...(program.grant ? ['Grant'] : []),
                            ...(program.stipendiya ? ['Stipendiya'] : [])
                        ],
                        fullDescription: program.text_uz || '',
                        iconUrl: program.title_icon || null,
                        availableFor: program.dostupno_dlya_napravlenij ? program.dostupno_dlya_napravlenij.split(',').map(s => s.trim()).filter(s => s) : [],
                    });
                }
            });
        }
    });

    return { categories, programs };
}

export default async function OrdinaturaPage() {
    const apiData = await getOrdinaturaData();
    const { categories, programs } = transformApiData(apiData);

    // Agar ma'lumotlar yuklanmasa, zaxira variantni ko'rsatamiz
    if (!apiData) {
        return (
            <>
                <Head>
                    <title>EMU University - Ordinatura</title>
                    <meta name="description" content="Toshkent Yevropa tibbiyot universitetining ordinatura dasturlari vaqtinchalik mavjud emas." />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(structuredData)
                        }}
                    />
                </Head>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Ordinatura Dasturlari
                        </h1>
                        <p className="text-gray-600">
                            Ma'lumotlar vaqtinchalik mavjud emas. Sahifani yangilashga harakat qiling.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
                <meta name="google-site-verification" content="your-google-verification-code" />
                <meta name="yandex-verification" content="your-yandex-verification-code" />
                <link rel="canonical" href="https://www.emuni.uz/ordinatura" />
                <meta httpEquiv="Content-Language" content="uz" />
                <meta name="geo.region" content="UZ-TO" />
                <meta name="geo.placename" content="Toshkent" />
                <meta name="geo.position" content="41.2995;69.2401" />
                <meta name="ICBM" content="41.2995, 69.2401" />
            </Head>
            <OrdinaturaClient categories={categories} programs={programs} />
        </>
    );
}