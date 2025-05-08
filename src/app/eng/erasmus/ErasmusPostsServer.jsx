import Link from 'next/link';
import BlogPostCard from '../blog/BlogPostCard';

// Вспомогательная функция для декодирования HTML-сущностей
function decodeHTMLEntities(text) {
    if (!text) return '';

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
        .replace(/<\/?[^>]+(>|$)/g, ''); // Удаляем HTML-теги
}

/**
 * Компонент для отображения 3 постов с тегом "erasmus" на стороне сервера
 * @param {Object} props - Свойства компонента
 * @param {Object} props.postsData - Данные о постах, полученные от сервера
 * @param {Object} props.brandColors - Фирменные цвета
 * @returns {JSX.Element} - Компонент с карточками постов
 */
export default function ErasmusPostsServer({ postsData, brandColors }) {
    const brandColor = brandColors?.primary || '#6b0e55';

    // Преобразуем данные с сервера в нужный формат
    const posts = postsData?.posts?.map((post) => ({
        id: post.id,
        title: decodeHTMLEntities(post.title),
        image: post.featured_image,
        category: post.category?.slug || 'uncategorized',
        categoryName: decodeHTMLEntities(post.category?.name) || 'Без категории',
        description: decodeHTMLEntities(post.excerpt).slice(0, 150).trim() + '...',
        slug: post.slug,
        language: post.language || 'en',
        date: post.date
            ? new Date(post.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })
            : 'Дата не указана',
    })) || [];

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="relative text-center mb-8 md:mb-12">
                    <div className="absolute -left-4 -top-4 w-12 h-12 rounded-lg transform rotate-12 [animation:spin_4s_linear_infinite]" style={{ backgroundColor: `${brandColor}10` }} />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Program News
                        <span className="relative" style={{ color: brandColor }}>
                            {' '}
                            Erasmus+
                            <div className="absolute -bottom-2 left-0 w-full h-1 transform skew-x-[12deg]" style={{ backgroundColor: `${brandColor}20` }} />
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The latest news and events of the international educational program Erasmus+ at EMU University
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
                        <h3 className="text-xl text-gray-600">Posts Not Found</h3>
                        <p className="mt-2 text-gray-500">
                            Posts with the "erasmus" tag have not been added yet.{' '}
                            <Link href="/eng/blog" className="underline" style={{ color: brandColor }}>
                                View all posts
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}