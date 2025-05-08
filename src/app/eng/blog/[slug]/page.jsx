// \src\app\eng\blog\[slug]\page.jsx

import Link from "next/link";
import "../../blog/[slug]/post.css";

// SEO metadata (dynamic for each post)
export async function generateMetadata({ params }) {
    const slug = params.slug;
    const post = await getPostMetadata(slug);

    if (!post) {
        return {
            title: "Page Not Found | EMU University",
            description: "The requested article does not exist or is unavailable.",
        };
    }

    return {
        title: `${post.title} - EMU University Blog`,
        description: post.description,
        keywords: `${post.category}, EMU University, university blog, education in Tashkent`,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

// Function to get post metadata for SEO
async function getPostMetadata(slug) {
    try {
        const wpBaseUrl = "https://next.emu.web-perfomance.uz/wp-json";
        const postRes = await fetch(
            `${wpBaseUrl}/custom/v1/post-by-slug/${slug}?lang=en`,
            { next: { revalidate: 86400 } }
        );

        if (!postRes.ok) {
            return null;
        }

        const postData = await postRes.json();

        if (postData.code === "no_post" || postData.language !== "en") {
            return null;
        }

        return {
            title: decodeHTMLEntities(postData.title),
            description: decodeHTMLEntities(postData.excerpt).slice(0, 150).trim() + "...",
            image: postData.featured_image,
            category: postData.category.name || "Blog",
        };
    } catch (error) {
        return null;
    }
}

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
            .replace(/»/g, '»');
    }

    // Client-side decoding
    textArea.innerHTML = text;
    return textArea.value;
}

// Transform \r\n to <p> for paragraphs
function formatContent(content) {
    if (!content) return '';

    // Decode HTML entities
    let formatted = decodeHTMLEntities(content);

    // Split by double line breaks (\r\n\r\n) and wrap in <p>
    formatted = formatted
        .split(/\r\n\r\n+/)
        .map(paragraph => paragraph.trim())
        .filter(paragraph => paragraph)
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');

    // Replace single \r\n with <br> inside paragraphs
    formatted = formatted.replace(/\r\n/g, '<br>');

    return formatted;
}

// Fetch single post and related posts
async function fetchPostData(slug) {
    const wpBaseUrl = "https://next.emu.web-perfomance.uz/wp-json";

    try {
        if (!slug || slug.trim() === '') {
            console.error("Empty slug received");
            return { post: null, relatedPosts: [], sidebarContent: {} };
        }

        const postRes = await fetch(
            `${wpBaseUrl}/custom/v1/post-by-slug/${slug}?lang=en`,
            { next: { revalidate: 86400 } }
        );

        if (!postRes.ok) {
            console.error(`Failed to fetch post: ${postRes.status}`);
            throw new Error(`Failed to fetch post: ${postRes.status}`);
        }

        const postData = await postRes.json();

        if (postData.code === "no_post" || postData.language !== "en") {
            console.error(`No post found for slug: ${slug} or language is not eng: ${postData.language}`);
            return { post: null, relatedPosts: [], sidebarContent: {} };
        }

        const post = postData;

        const formattedPost = {
            id: post.id,
            title: decodeHTMLEntities(post.title),
            image: post.featured_image,
            category: post.category.name || "Uncategorized", // Use category name
            categoryId: post.category.slug ? await getCategoryId(post.category.slug) : 0,
            categorySlug: post.category.slug || "uncategorized", // Slug for link
            content: formatContent(post.content),
            date: post.date
                ? new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })
                : "Date not specified",
            views: Math.floor(Math.random() * 2000) + 500,
            slug: post.slug,
            author: "Author not specified",
        };

        async function getCategoryId(categorySlug) {
            const categoryRes = await fetch(
                `${wpBaseUrl}/wp/v2/categories?slug=${categorySlug}`,
                { next: { revalidate: 86400 } }
            );
            const categoryData = await categoryRes.json();
            return categoryData[0]?.id || 0;
        }

        let relatedPosts = [];
        if (formattedPost.categoryId) {
            const relatedPostsRes = await fetch(
                `${wpBaseUrl}/wp/v2/posts?_embed&per_page=3&categories=${formattedPost.categoryId}&exclude=${post.id}&lang=en`,
                { next: { revalidate: 86400 } }
            );

            if (relatedPostsRes.ok) {
                const relatedPostsData = await relatedPostsRes.json();

                relatedPosts = relatedPostsData.map((related) => ({
                    id: related.id,
                    title: decodeHTMLEntities(related.title.rendered),
                    image:
                        related._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/01/placeholder-image-1024x1024.png",
                    slug: related.slug,
                    category: decodeHTMLEntities(related._embedded?.["wp:term"]?.[0]?.[0]?.name) || "Uncategorized",
                }));
            }
        }

        const sidebarContent = {
            quickLinks: [
                { title: "Programs", href: "/eng/napravleniya" },
                { title: "Scientific Journal", href: "/eng/journal" },
                { title: "FAQ", href: "/eng/faq" },
            ],
            contacts: [
                { label: "Phone", value: "+998(78) 147-00-07" },
                { label: "Email", value: "info@emuni.uz" },
                { label: "Address", value: "7/1 Mukimi Street, Tashkent, Uzbekistan" },
            ],
        };

        return { post: formattedPost, relatedPosts, sidebarContent };
    } catch (error) {
        console.error("Error fetching post data:", error);
        return { post: null, relatedPosts: [], sidebarContent: {} };
    }
}

export default async function BlogPostPage({ params }) {
    // Brand colors
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    if (!params || !params.slug) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center animate-fadeIn">
                    <div className="relative mb-6">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                        <h1 className="text-2xl font-bold text-[#6b0e55]">Error</h1>
                    </div>
                    <p className="text-gray-600 mb-6">Article identifier not specified.</p>
                    <Link
                        href="/eng/blog"
                        className="inline-block bg-[#6b0e55] text-white px-6 py-3 rounded-lg hover:bg-[#8f3178] transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const slug = params.slug;
    const { post, relatedPosts, sidebarContent } = await fetchPostData(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse [animation-delay:700ms]" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center animate-fadeIn relative z-10">
                    <div className="relative mb-6">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                        <h1 className="text-2xl font-bold text-[#6b0e55]">Article Not Found</h1>
                    </div>
                    <p className="text-gray-600 mb-6">The requested article does not exist or is not available in English.</p>
                    <Link
                        href="/eng/blog"
                        className="inline-block bg-[#6b0e55] text-white px-6 py-3 rounded-lg hover:bg-[#8f3178] transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Structured data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "image": post.image,
                    "datePublished": post.date,
                    "author": {
                        "@type": "Organization",
                        "name": "EMU University"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "EMU University",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://emuni.uz/wp-content/uploads/2023/05/logo-light.svg"
                        }
                    },
                    "articleSection": post.category,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://emuni.uz/eng/blog/${post.slug}`
                    }
                })
            }} />

            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse [animation-delay:700ms]" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
                </div>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                {post.title}
                            </h1>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
                            <Link
                                href={`/eng/blog?category=${post.categorySlug}`}
                                className="inline-block px-3 py-1 bg-[#6b0e55]/10 text-[#6b0e55] rounded-full text-sm font-medium hover:bg-[#6b0e55]/20 transition-colors"
                            >
                                {post.category} {/* Display category name */}
                            </Link>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-600">{post.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
                {/* Post Content */}
                <main className="w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-96 object-cover bg-[#f1f1f1]"
                        />
                        <div className="p-6 md:p-8">
                            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                            <article className="post-content">
                                <div
                                    className="prose prose-lg max-w-none post-content-styles"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </article>

                            {/* Share */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Share this article:</h3>
                                <div className="flex space-x-3">

                                    <a href={`https://t.me/share/url?url=${encodeURIComponent(`https://next.emu.web-perfomance.uz/eng/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0088cc] text-white hover:opacity-90 transition-opacity"
                                        aria-label="Share on Telegram"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.955 9.211c-.146.691-.537.863-1.089.537l-3.01-2.22-1.453 1.4c-.16.16-.293.295-.603.295l.213-3.061 5.562-5.025c.24-.213-.053-.333-.373-.12l-6.871 4.326-2.962-.922c-.643-.204-.659-.643.135-.949l11.568-4.458c.538-.196 1.006.128.838.986z" />
                                        </svg>
                                    </a>

                                    <a href={`https://vk.com/share.php?url=${encodeURIComponent(`https://next.emu.web-perfomance.uz/eng/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#45668e] text-white hover:opacity-90 transition-opacity"
                                        aria-label="Share on VKontakte"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.741.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.557.258-.557.504 0 .528.788.65.869 2.138v3.228c0 .707-.128.836-.407.836-.742 0-2.546-2.725-3.617-5.844-.209-.606-.42-.852-.98-.852H2.752c-.626 0-.752.295-.752.619 0 .582.742 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.932-.197-.615-.907-1.51-1.849-2.569-.51-.606-1.277-1.254-1.51-1.579-.325-.419-.231-.606 0-.979 0 0 2.672-3.764 2.95-5.044z" />
                                        </svg>
                                    </a>

                                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - https://next.emu.web-perfomance.uz/eng/blog/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.021 2.91 9.788 9.788 0 0 1 2.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.054 12.054 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div >

                    {/* Related Posts */}
                    {
                        relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#6b0e55] mb-6">
                                    Related Articles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/eng/blog/${related.slug}`}
                                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full flex flex-col"
                                        >
                                            <div className="w-full h-40">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover bg-[#f1f1f1]"
                                                />
                                            </div>
                                            <div className="p-4 flex flex-col flex-grow">
                                                <span className="inline-block px-2 py-1 bg-[#6b0e55]/10 text-[#6b0e55] text-xs font-medium rounded-full mb-2 w-fit">
                                                    {related.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                                                    {related.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </main >

                {/* Sidebar */}
                < aside className="w-full md:w-1/3" >
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-[140px]">
                        <h2 className="text-xl font-bold text-[#6b0e55] mb-4">
                            Useful Links
                        </h2>
                        <ul className="space-y-3">
                            {sidebarContent.quickLinks.map((link, index) => (
                                <li key={index}>

                                    <a href={link.href}
                                        className="flex items-center text-gray-700 hover:text-[#6b0e55] transition-colors group"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2 text-[#6b0e55] opacity-70 group-hover:opacity-100 transition-opacity"
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
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-[#6b0e55] mb-4">
                                Contact Information
                            </h2>
                            <ul className="space-y-4">
                                {sidebarContent.contacts.map((contact, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <div className="mt-1 mr-3 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#6b0e55]/10 text-[#6b0e55]">
                                            {index === 0 && (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            )}
                                            {index === 1 && (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {index === 2 && (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <span className="font-semibold">{contact.label}:</span>{" "}
                                            <span className="text-gray-600">{contact.value}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div >
                </aside >
            </div >
        </div >
    );
}

// Обновляем страницу каждые 24 часа
export const revalidate = 86400;