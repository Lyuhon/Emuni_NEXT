import JournalPage from './JournalPage';

// SEO метаданные на узбекском
export const metadata = {
    title: "Ilmiy jurnal - EMU University",
    description: "EMU University ilmiy jurnali fan sohalarida maqolalar va tadqiqot natijalarini nashr etadi. Jurnal sonlari, nashr qilish talablari va maqola yuborish tartibi.",
    keywords: "ilmiy jurnal, EMU University, nashrlar, ilmiy maqolalar, akademik tadqiqotlar, tahririyat kengashi",
    openGraph: {
        title: "EMU University ilmiy jurnali",
        description: "EMU University jurnalida ilmiy maqolalar va tadqiqotlar nashri",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR конфигурация
export const revalidate = 86400; // Обновление каждые 24 часа

// Структурированные данные для SEO на узбекском
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "EMU University ilmiy jurnali",
    "publisher": {
        "@type": "Organization",
        "name": "EMU University",
        "logo": {
            "@type": "ImageObject",
            "url": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png"
        }
    },
    "url": "https://emu.uz/uz/journal",
    "description": "Professor-o'qituvchilar va tadqiqotchilarning turli sohalardagi ilmiy maqolalari nashri"
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