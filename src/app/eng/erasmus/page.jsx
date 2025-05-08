// app\eng\erasmus\page.jsx
import ErasmusPage from './ErasmusPage';
import ErasmusPostsServer from './ErasmusPostsServer';

// SEO metadata
export const metadata = {
    title: "Erasmus+ | EMU University",
    description: "Erasmus+ program at EMU University — international opportunities for students and faculty. Learn about scholarships, grants, and European cooperation projects.",
    keywords: "erasmus+, international cooperation, academic mobility, EMU University, student exchanges, grants, European programs",
    openGraph: {
        title: "Erasmus+ at EMU University",
        description: "European Union program aimed at supporting projects, partnerships, events, and mobility in the fields of education and training",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/erasmus-news.webp'],
    },
};

// ISR configuration
export const revalidate = 86400; // Update every 24 hours

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Erasmus+ Program",
    "description": "Erasmus+ program — a European Union initiative for the development of international cooperation in education",
    "url": "https://emuni.uz/erasmus",
    "sameAs": [
        "https://erasmus-plus.ec.europa.eu/",
        "https://www.facebook.com/EUErasmusPlusProgramme/"
    ],
    "knowsAbout": [
        "Academic Mobility",
        "International Cooperation",
        "Educational Grants",
        "Joint Master's Programs"
    ]
};

// Function to fetch Erasmus posts on the server side
async function fetchErasmusPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=en&per_page=3&tag=erasmus-en`;

    try {
        const postsRes = await fetch(postsUrl, {
            next: { revalidate: 86400 }, // ISR: update every 24 hours
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
    // Get post data
    const postsData = await fetchErasmusPosts();

    // New brand colors
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
            <ErasmusPage brandColors={brandColors} />
            <ErasmusPostsServer postsData={postsData} brandColors={brandColors} />
        </>
    );
}