// app/masters/page.js
import DirectionsClient from './DirectionsClient';

// Add metadata for SEO
export const metadata = {
    title: "Master's and Residency Programs in Tashkent - EMU University",
    description: "Get prestigious medical and business education at EMU University. Master's and residency programs in Tashkent with practice in leading European clinics.",
    keywords: "master's programs, residency, EMU University, tashkent, medical education, business education, internship, clinical residency",
    openGraph: {
        title: "Master's and Residency Programs | EMU University Tashkent",
        description: "High-quality postgraduate education in medical and business fields with international practice in leading clinics and organizations",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// Add ISR configuration
export const revalidate = 43200; // Update every 12 hours

async function fetchDirections() {
    const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/58725', {
        next: { revalidate: 43200 }, // ISR: update every 12 hours
    });
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    const data = await res.json();

    if (!data.acf) {
        console.error('No ACF found:', data);
        return { directions: {}, directionContent: {}, acf: {} };
    }

    // Transform data from accordion_repeater
    const directions = {};
    const directionContent = {};

    if (data.acf.accordion_repeater) {
        data.acf.accordion_repeater.forEach((item) => {
            const title = item.accordion_title_eng || item.accordion_title_uz || item.accordion_title_eng || 'Unknown';
            const slug = title.toLowerCase().replace(/\s+/g, '-');
            directions[title] = {
                title_icon: item.title_icon || '/default-icon.png', // Use title_icon instead of icon_url
                bgImage: item.bg_image_url || '/api/placeholder/400/200',
            };
            directionContent[title] = {
                title: `«${title}» EMU UNIVERSITY`,
                description: item.text_eng || 'Description not available.',
                goal: item.goal || 'Learning goal not specified.',
                practice: item.practice || 'Practice information not available.',
                duration: item.duration || 'Duration unknown.',
                language: item.language || 'Language of instruction not specified.',
                key_subjects: item.key_subjects || ['Subjects not specified'],
                price: item.price || { semester: 'Not specified', year: 'Not specified' },
                stats: [
                    { label: 'Cost per semester', value: item.semester_price || 'Not specified' },
                    { label: 'Cost per academic year', value: item.full_price || 'Not specified' },
                ],
                title_icon: item.title_icon || '/default-image.png',
            };
        });
    } else {
        console.warn('No accordion_repeater found in data.acf');
    }

    return { directions, directionContent, acf: data.acf };
}

export default async function DirectionsPage() {
    const { directions, directionContent, acf } = await fetchDirections();

    // For debugging
    console.log("Page data:", {
        directionsCount: Object.keys(directions).length,
        acfData: acf ? 'Available' : 'Not available',
        businessDirections: acf?.accordion_repeater_2 ? acf.accordion_repeater_2.length : 'None'
    });

    return (
        <>
            {/* Add Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "EMU University",
                        "url": "https://emuni.uz/masters",
                        "logo": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.pngg",
                        "description": "EMU University offers high-quality higher education in Tashkent",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Tashkent",
                            "addressRegion": "Tashkent",
                            "addressCountry": "Uzbekistan"
                        },
                        "offers": {
                            "@type": "Offer",
                            "category": "Higher Education",
                            "description": "Master's and residency programs with international practice"
                        }
                    })
                }}
            />
            <DirectionsClient
                directions={directions}
                directionContent={directionContent}
                acf={acf}
            />
        </>
    );
}