// // page.jsx
import JournalPage from './JournalPage';

// SEO metadata
export const metadata = {
    title: "Scientific Journal - EMU University",
    description: "EMU University's Scientific Journal publishes articles in various fields of science. Browse journal issues, publication requirements, and submit your article.",
    keywords: "scientific journal, EMU University, publications, scientific articles, academic research, editorial board",
    openGraph: {
        title: "EMU University Scientific Journal",
        description: "Publications of scientific articles and research in EMU University's journal",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR configuration
export const revalidate = 86400; // Update every 24 hours

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "EMU University Scientific Journal",
    "publisher": {
        "@type": "Organization",
        "name": "EMU University",
        "logo": {
            "@type": "ImageObject",
            "url": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png"
        }
    },
    "url": "https://emu.uz/journal",
    "description": "Scientific journal with publications from faculty and researchers in various fields of science"
};

export default async function ServerJournalPage() {
    const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/83679', {
        next: { revalidate: 86400 }, // Updated to 24 hours
    });
    const data = await response.json();

    // Pass brand colors to the component
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
            <JournalPage pageData={data} brandColors={brandColors} />
        </>
    );
}