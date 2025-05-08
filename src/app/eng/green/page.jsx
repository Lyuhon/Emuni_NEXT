// app\eng\green\page.jsx
import GreenPage from './GreenPage';
import GreenPostsServer from './GreenPostsServer';

// SEO metadata
export const metadata = {
    title: "Green University - EMU University",
    description: "EMU University for conscious resource consumption. Learn about our initiatives in sustainable development, ecology, and green economy.",
    keywords: "green university, sustainable development, ecology, green economy, EMU University, conscious consumption, UN goals",
    openGraph: {
        title: "EMU Green University",
        description: "A practical approach to resource use — less waste, more benefits. EMU University emphasizes sustainable development.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/green-emu-university.jpg'],
    },
};

// ISR configuration
export const revalidate = 86400; // Update every 24 hours

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EMU University - Green University",
    "description": "EMU University for conscious resource consumption and sustainable development",
    "url": "https://emuni.uz/green-university",
    "sameAs": [
        "https://www.facebook.com/emuuniversity",
        "https://www.instagram.com/emuuniversity/"
    ],
    "knowsAbout": [
        "Green Economy",
        "Sustainable Development",
        "Environmental Education",
        "UN Sustainable Development Goals"
    ]
};

// Function to fetch posts on the server side
async function fetchGreenPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=ru&per_page=3&tag=green`;

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
        console.error('Error fetching green posts:', error);
        return { posts: [] };
    }
}

export default async function GreenUniversityPage() {
    // Get post data
    const postsData = await fetchGreenPosts();

    return (
        <>
            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <GreenPage />
            <GreenPostsServer postsData={postsData} />
        </>
    );
}