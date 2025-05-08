// GreenPosts.jsx
'use client';
import Link from 'next/link';
import BlogPostCard from '../blog/BlogPostCard';
import { useEffect, useState } from 'react';

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

// Fetch 3 posts with tag "Green"
async function fetchGreenPosts() {
    const wpBaseUrl = 'https://next.emu.web-perfomance.uz/wp-json/custom/v1';
    const postsUrl = `${wpBaseUrl}/posts?lang=en&per_page=3&tag=green-en`;

    try {
        const postsRes = await fetch(postsUrl, {
            next: { revalidate: 86400 },
            headers: {
                Accept: 'application/json',
            },
        });

        if (!postsRes.ok) {
            throw new Error(`Failed to fetch posts: ${postsRes.status}`);
        }

        const postsData = await postsRes.json();

        const posts = postsData.posts.map((post) => ({
            id: post.id,
            title: decodeHTMLEntities(post.title),
            image: post.featured_image,
            category: post.category?.slug || 'uncategorized',
            categoryName: decodeHTMLEntities(post.category?.name) || 'Uncategorized',
            description: decodeHTMLEntities(post.excerpt).slice(0, 150).trim() + '...',
            slug: post.slug,
            language: post.language || 'en',
            date: post.date
                ? new Date(post.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })
                : 'Date not specified',
        }));

        return posts;
    } catch (error) {
        console.error('Error fetching green posts:', error);
        return [];
    }
}

/**
 * Component for displaying 3 posts with the "Green" tag
 * @returns {JSX.Element} - Component with post cards
 */
export default function GreenPosts() {
    const [posts, setPosts] = useState([]);
    const brandColor = '#6b0e55';

    // Fetch posts on component mount
    useEffect(() => {
        fetchGreenPosts().then((data) => setPosts(data));
    }, []);

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="relative text-center mb-8 md:mb-12">
                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 [animation:spin_4s_linear_infinite]" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Green Initiatives
                        <span className="text-[#6b0e55] relative">
                            {' '}
                            EMU
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-[12deg]" />
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Learn about our projects in ecology, health, and sustainable development. EMU University is committed to a green future!
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {posts.map((post) => (
                            <BlogPostCard
                                key={post.id}
                                post={post}
                                categoryName={post.categoryName}
                                brandColor={brandColor}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-xl text-gray-600">Posts not found</h3>
                        <p className="mt-2 text-gray-500">
                            Posts with the "Green" tag have not been added yet.{' '}
                            <Link href="/blog" className="text-[#6b0e55] underline">
                                View all posts
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}