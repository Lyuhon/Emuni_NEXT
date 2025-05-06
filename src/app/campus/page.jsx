// // app/campus/page.jsx
// import React from "react";
// import CampusClient from "./CampusClient";

// // This enables ISR - Incremental Static Regeneration
// export const revalidate = 3600; // revalidate every hour

// // This is now a server component that fetches data
// export default async function CampusesPage() {
//     // Fetch data from the API
//     const response = await fetch(
//         "https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11",
//         {
//             next: {
//                 revalidate: 3600 // revalidate the data every hour
//             }
//         }
//     );

//     const data = await response.json();
//     const acfData = data.acf;

//     // Map the data into the format our client component expects
//     const campuses = [
//         {
//             id: "business",
//             title: "Business and Social School Campus",
//             images: acfData.slajder_business_kampusa.map(item => item.izobrazhenie.url),
//             description: acfData.opisanie_osnovnogo_kampusa,
//             location: acfData.adres_business_kampusa_ru,
//             phone: "+998(78) 147-00-07", // You may want to add a phone field to your API
//             mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.7347937995532!2d69.24784568472785!3d41.27852374533947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad37dacb2b%3A0xdff40c36cfda4e31!2sEMU%20University!5e0!3m2!1sru!2s!4v1746393790826!5m2!1sru!2s",
//             facilities: acfData.infrastruktura_business_kampusa.map(item => item.nazvanie)
//         },
//         {
//             id: "medical",
//             title: "Medical School Campus",
//             images: acfData.slajder_medical_kampusa.map(item => item.izobrazhenie.url),
//             description: acfData.opisanie_med_kampusa,
//             location: acfData.adres_medical_kampusa_ru,
//             phone: "+998(78) 147-00-07", // You may want to add a phone field to your API
//             mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2399617133647!2d69.20802277607883!3d41.28188170253281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a397f4608f3%3A0x9528fd64bb1f6ec4!2z0L_RgNC-0YHQv9C10LrRgiDQkdGD0L3RkdC00LrQvtGAIDQyLCAxMDAwOTcsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1746393708241!5m2!1sru!2s",
//             facilities: acfData.infrastruktura_medical_kampusa.map(item => item.nazvanie)
//         },
//     ];

//     // Pass the data to the client component
//     return <CampusClient campuses={campuses} />;
// }










import React from "react";
import CampusClient from "./CampusClient";

// SEO метаданные
export const metadata = {
    title: "Кампусы университета - EMU University",
    description: "Информация о кампусах EMU University в Ташкенте - Business and Social School Campus и Medical School Campus. Инфраструктура, расположение и удобства для студентов.",
    keywords: "кампусы, EMU University, бизнес-кампус, медицинский кампус, расположение, инфраструктура, университет ташкент",
    openGraph: {
        title: "Кампусы EMU University в Ташкенте",
        description: "Современные образовательные пространства EMU University, созданные для комфортного обучения и всестороннего развития студентов",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University",
    "description": "Университет EMU с двумя современными кампусами в Ташкенте",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ташкент",
        "addressCountry": "Узбекистан"
    },
    "department": [
        {
            "@type": "CollegeOrUniversity",
            "name": "Business and Social School Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ташкент",
                "addressLocality": "Ташкент",
                "addressCountry": "Узбекистан"
            }
        },
        {
            "@type": "CollegeOrUniversity",
            "name": "Medical School Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ташкент",
                "addressLocality": "Ташкент",
                "addressCountry": "Узбекистан"
            }
        }
    ]
};

// This is now a server component that fetches data
export default async function CampusesPage() {
    // Fetch data from the API
    const response = await fetch(
        "https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11",
        {
            next: {
                revalidate: 86400 // revalidate the data every 24 hours
            }
        }
    );

    const data = await response.json();
    const acfData = data.acf;

    // Map the data into the format our client component expects
    const campuses = [
        {
            id: "business",
            title: "Business and Social School Campus",
            images: acfData.slajder_business_kampusa.map(item => item.izobrazhenie.url),
            description: acfData.opisanie_osnovnogo_kampusa,
            location: acfData.adres_business_kampusa_ru,
            phone: "+998(78) 147-00-07", // You may want to add a phone field to your API
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.7347937995532!2d69.24784568472785!3d41.27852374533947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad37dacb2b%3A0xdff40c36cfda4e31!2sEMU%20University!5e0!3m2!1sru!2s!4v1746393790826!5m2!1sru!2s",
            facilities: acfData.infrastruktura_business_kampusa.map(item => item.nazvanie)
        },
        {
            id: "medical",
            title: "Medical School Campus",
            images: acfData.slajder_medical_kampusa.map(item => item.izobrazhenie.url),
            description: acfData.opisanie_med_kampusa,
            location: acfData.adres_medical_kampusa_ru,
            phone: "+998(78) 147-00-07", // You may want to add a phone field to your API
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2399617133647!2d69.20802277607883!3d41.28188170253281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a397f4608f3%3A0x9528fd64bb1f6ec4!2z0L_RgNC-0YHQv9C10LrRgiDQkdGD0L3RkdC00LrQvtGAIDQyLCAxMDAwOTcsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1746393708241!5m2!1sru!2s",
            facilities: acfData.infrastruktura_medical_kampusa.map(item => item.nazvanie)
        },
    ];

    return (
        <>
            {/* Структурированные данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <CampusClient campuses={campuses} />
        </>
    );
}