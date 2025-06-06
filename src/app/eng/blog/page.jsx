// eng/blog/page.jsx
import Link from "next/link";
import PostsWithLoader from "./PostsWithLoader";
import BlogPostCard from "./BlogPostCard";

// SEO metadata
export const metadata = {
    title: "Blog, News, Articles and Events - EMU University",
    description: "Official EMU University blog with current news, useful articles for students and applicants, event announcements and success stories.",
    keywords: "EMU University blog, medical university news, articles for applicants, events at EMU, medical education",
    openGraph: {
        title: "Blog, News, Articles and Events - EMU University",
        description: "Read current news, useful tips and interesting stories from EMU University life",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

// Helper function for decoding HTML entities
function decodeHTMLEntities(text) {
    if (!text) return '';

    const textArea = typeof document !== 'undefined' ? document.createElement('textarea') : null;

    // Server-side decoding
    if (!textArea) {
        return text
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>')
            .replace(/"/g, '"')
            .replace(/'/g, "'")
            .replace(/—/g, '—')
            .replace(/–/g, '–')
            .replace(/'/g, "'")
            .replace(/'/g, "'")
            .replace(/"/g, '"')
            .replace(/"/g, '"')
            .replace(/«/g, '«')
            .replace(/»/g, '»')
            .replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
    }

    // Client-side decoding
    textArea.innerHTML = text;
    return textArea.value.replace(/<\/?[^>]+(>|$)/g, '');
}

// Fetch posts and categories from custom REST API
async function fetchBlogData(category = "all", page = 1) {
    const postsPerPage = 6;
    const wpBaseUrl = "https://next.emu.web-perfomance.uz/wp-json/custom/v1";
    let postsUrl = `${wpBaseUrl}/posts?lang=en&per_page=${postsPerPage}&page=${page}`;

    try {
        // Fetch categories
        const categoriesRes = await fetch(`${wpBaseUrl}/categories?lang=en`, {
            next: { revalidate: 86400 },
        });

        if (!categoriesRes.ok) {
            throw new Error(`Failed to fetch categories: ${categoriesRes.status}`);
        }

        const categoriesData = await categoriesRes.json();

        const categories = [
            { id: "all", slug: "all", name: "All Articles" },
            ...categoriesData.map((cat) => ({
                id: cat.slug,
                slug: cat.slug,
                name: cat.name,
            })),
        ];

        // Add category filter to posts URL
        if (category !== "all") {
            postsUrl += `&category=${category}`;
        }

        // Fetch posts
        const postsRes = await fetch(postsUrl, {
            next: { revalidate: 86400 },
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!postsRes.ok) {
            throw new Error(`Failed to fetch posts: ${postsRes.status}`);
        }

        const postsData = await postsRes.json();
        const totalPages = postsData.total_pages || 1;

        const posts = postsData.posts.map((post) => ({
            id: post.id,
            title: decodeHTMLEntities(post.title),
            image: post.featured_image,
            category: post.category.slug || "uncategorized",
            categoryName: decodeHTMLEntities(post.category.name) || "Uncategorized",
            description: decodeHTMLEntities(post.excerpt).slice(0, 150).trim() + "...",
            slug: post.slug,
            language: post.language || "en",
            date: post.date
                ? new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })
                : "Date not specified",
        }));

        return { posts, categories, totalPages };
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return { posts: [], categories: [{ id: "all", slug: "all", name: "All Articles" }], totalPages: 1 };
    }
}

// Updated function for pagination optimization without ellipsis for 5 or fewer pages
function getPaginationItems(page, totalPages) {
    // If there are 5 or fewer pages - show all pages without ellipsis
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // For more pages use logic with ellipsis
    const items = [];
    items.push(1);

    if (page > 3) {
        items.push("...");
    }

    // Show current page and pages around it
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
        items.push(i);
    }

    if (page < totalPages - 2) {
        items.push("...");
    }

    if (totalPages > 1) {
        items.push(totalPages);
    }

    return [...new Set(items)];
}

export default async function BlogPage({ searchParams }) {
    const category = searchParams.category || "all";
    const page = parseInt(searchParams.page) || 1;
    const { posts, categories, totalPages } = await fetchBlogData(category, page);

    // Brand colors
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Structured data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "headline": "EMU University Blog",
                    "description": "Official EMU University blog with current news, useful articles and events",
                    "url": "https://emuni.uz/eng/blog",
                    "publisher": {
                        "@type": "Organization",
                        "name": "EMU University",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png"
                        }
                    },
                    "blogPost": posts.map(post => ({
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "datePublished": post.date,
                        "articleSection": post.categoryName,
                        "url": `https://emuni.uz/eng/blog/${post.slug}`
                    }))
                })
            }} />

            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse [animation-delay:700ms]" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
                </div>
                <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 [animation:spin_4s_linear_infinite]" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Blog
                                <br />
                                <span className="text-[#6b0e55] relative">
                                    EMU University
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-[12deg]" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            News, events and useful articles for students and applicants
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4">
                    <div className="bg-white rounded-xl shadow-md md:shadow-none">
                        {/* Mobile Sidebar */}
                        <div className="md:hidden">
                            <details className="w-full">
                                <summary className="text-left px-6 py-4 flex justify-between items-center bg-[#6b0e55] text-white rounded-t-xl cursor-pointer">
                                    <h2 className="text-xl font-bold">Categories</h2>
                                    <svg
                                        className="w-6 h-6 open:hidden"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <svg
                                        className="w-6 h-6 hidden open:block"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </summary>
                                <ul className="p-6 space-y-2 animate-[fadeIn_0.3s_ease-in-out]">
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <Link
                                                href={`/eng/blog?category=${cat.slug}`}
                                                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${category === cat.slug
                                                    ? "bg-[#6b0e55] text-white"
                                                    : "text-gray-700 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </div>
                        {/* Desktop Sidebar */}
                        <div className="hidden md:block p-6 sticky top-8">
                            <h2 className="text-xl font-bold text-[#6b0e55] mb-4">
                                Categories
                            </h2>
                            <ul className="space-y-2">
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <Link
                                            href={`/eng/blog?category=${cat.slug}`}
                                            className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${category === cat.slug
                                                ? "bg-[#6b0e55] text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Blog Posts */}
                <main className="w-full md:w-3/4">
                    <PostsWithLoader>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <BlogPostCard
                                        key={post.id}
                                        post={post}
                                        categoryName={
                                            categories.find((cat) => cat.slug === post.category)?.name ||
                                            post.categoryName
                                        }
                                        brandColor={brandColor}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <h3 className="text-xl text-gray-600">No posts found</h3>
                                    <p className="mt-2 text-gray-500">Try selecting a different category</p>
                                </div>
                            )}
                        </div>
                    </PostsWithLoader>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center items-center space-x-2 sm:space-x-3">
                            <Link
                                href={`/eng/blog?category=${category}&page=${Math.max(page - 1, 1)}`}
                                className={`p-1 sm:p-2 rounded-full bg-[#6b0e55] text-white ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8f3178]"
                                    } transition-colors`}
                            >
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </Link>
                            <div className="flex space-x-1 sm:space-x-2">
                                {getPaginationItems(page, totalPages).map((item, index) =>
                                    item === "..." ? (
                                        <span
                                            key={`ellipsis-${index}`}
                                            className="px-2 sm:px-4 py-1 sm:py-2 text-gray-700 text-sm sm:text-base"
                                        >
                                            ...
                                        </span>
                                    ) : (
                                        <Link
                                            key={item}
                                            href={`/eng/blog?category=${category}&page=${item}`}
                                            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${page === item
                                                ? "bg-[#6b0e55] text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    )
                                )}
                            </div>
                            <Link
                                href={`/eng/blog?category=${category}&page=${Math.min(page + 1, totalPages)}`}
                                className={`p-1 sm:p-2 rounded-full bg-[#6b0e55] text-white ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8f3178]"
                                    } transition-colors`}
                            >
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

// Update page every 24 hours
export const revalidate = 86400;