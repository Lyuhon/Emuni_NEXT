// // page.jsx
// import JournalPage from './JournalPage';

// export default async function ServerJournalPage() {
//     const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/83679', {
//         next: { revalidate: 3600 }, // Revalidate every hour
//     });
//     const data = await response.json();

//     return <JournalPage pageData={data} />;
// }

import JournalPage from './JournalPage';

// SEO метаданные
export const metadata = {
    title: "Научный журнал - EMU University",
    description: "Научный журнал EMU University публикует статьи в различных областях науки. Ознакомьтесь с выпусками журнала, требованиями к публикациям и отправьте свою статью.",
    keywords: "научный журнал, EMU University, публикации, научные статьи, академические исследования, редакционная коллегия",
    openGraph: {
        title: "Научный журнал EMU University",
        description: "Публикации научных статей и исследований в журнале EMU University",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "Научный журнал EMU University",
    "publisher": {
        "@type": "Organization",
        "name": "EMU University",
        "logo": {
            "@type": "ImageObject",
            "url": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png"
        }
    },
    "url": "https://emu.uz/journal",
    "description": "Научный журнал с публикациями от преподавателей и исследователей в различных областях науки"
};

export default async function ServerJournalPage() {
    const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/83679', {
        next: { revalidate: 86400 }, // Обновлено до 24 часов
    });
    const data = await response.json();

    // Передаем брендовые цвета в компонент
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
            <JournalPage pageData={data} brandColors={brandColors} />
        </>
    );
}