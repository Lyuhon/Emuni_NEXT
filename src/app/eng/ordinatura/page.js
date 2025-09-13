import OrdinaturaClient from './OrdinaturaClient';

// SEO metadata
export const metadata = {
    title: "EMU University - Residency",
    description: "Residency programs at European Medical University of Tashkent. Surgical, therapeutic, pediatric and dental specializations. Quality medical education in Uzbekistan.",
    keywords: "residency Tashkent, medical residency Uzbekistan, EMU residency, European medical university, surgical residency, therapeutic residency, pediatric residency, dental residency",
    openGraph: {
        title: "EMU University Residency",
        description: "Residency programs at European Medical University of Tashkent. Surgical, therapeutic, pediatric and dental specializations.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// ISR configuration
export const revalidate = 3600; // Update every hour

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "European Medical University",
    "alternateName": "EMU University",
    "url": "https://www.emuni.uz/ordinatura",
    "description": "Residency programs at European Medical University of Tashkent",
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
        "addressLocality": "Tashkent",
        "addressCountry": "UZ"
    },
    "telephone": "+998(78) 147-00-07"
};

// Fetch data from API
async function getOrdinaturaData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84344', {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching ordinatura data:', error);
        return null;
    }
}

// Category mapping
const categoryMapping = {
    'accordion_repeater': {
        id: 'surgery',
        name: 'Surgical Specializations',
        color: 'bg-red-500'
    },
    'accordion_repeater_2': {
        id: 'pediatric',
        name: 'Pediatric Specializations',
        color: 'bg-green-500'
    },
    'accordion_repeater_3': {
        id: 'therapeutic',
        name: 'Therapeutic Specializations',
        color: 'bg-blue-500'
    },
    'accordion_repeater_4': {
        id: 'stomatology',
        name: 'Dental Specializations',
        color: 'bg-purple-500'
    }
};

// Transform API data to component format
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
            // Add category only if it has programs
            categories.push(categoryInfo);

            // Transform programs
            categoryData.forEach(program => {
                if (program.accordion_title_eng && program.accordion_title_eng.trim()) {
                    programs.push({
                        id: programId++,
                        title: program.accordion_title_eng,
                        category: categoryInfo.id,
                        description: program.text_eng ? program.text_eng.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'Program description',
                        semesterPrice: program.semester_price || '0',
                        yearPrice: program.full_price || (program.semester_price ? (parseInt(program.semester_price.replace(/\s/g, '')) * 2).toString() : '0'),
                        shift1Price: program.semester_price || '0',
                        shift2Price: program.semester_price_2_smena || program.semester_price || '0',
                        duration: program.let_obucheniya ? `${program.let_obucheniya} years` : '2 years',
                        benefits: [
                            ...(program.grant ? ['Grants'] : []),
                            ...(program.stipendiya ? ['Scholarship'] : [])
                        ],
                        fullDescription: program.text_eng || '',
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

    // If data didn't load, show fallback
    if (!apiData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Residency Programs
                    </h1>
                    <p className="text-gray-600">
                        Data is temporarily unavailable. Please try refreshing the page.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <OrdinaturaClient categories={categories} programs={programs} />
        </>
    );
}