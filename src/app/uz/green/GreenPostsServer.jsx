import Link from 'next/link';
import BlogPostCard from '../../uz/blog/BlogPostCard';

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
 * Компонент для отображения 3 постов с тегом "Green" на стороне сервера (узбекская версия)
 * @param {Object} props - Свойства компонента
 * @param {Object} props.postsData - Данные о постах, полученные от сервера
 * @returns {JSX.Element} - Компонент с карточками постов
 */
export default function GreenPostsServer({ postsData }) {
    const brandColor = '#6b0e55';

    // Преобразуем данные с сервера в нужный формат
    const posts = postsData?.posts?.map((post) => ({
        id: post.id,
        title: decodeHTMLEntities(post.title),
        image: post.featured_image,
        category: post.category?.slug || 'uncategorized',
        categoryName: decodeHTMLEntities(post.category?.name) || 'Kategoriyasiz',
        description: decodeHTMLEntities(post.excerpt).slice(0, 150).trim() + '...',
        slug: post.slug,
        language: post.language || 'uz',
        date: post.date
            ? new Date(post.date).toLocaleDateString('uz-UZ', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })
            : 'Sana ko`rsatilmagan',
    })) || [];

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="relative text-center mb-8 md:mb-12">
                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 [animation:spin_4s_linear_infinite]" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        EMU ning
                        <span className="text-[#6b0e55] relative">
                            {' '}
                            yashil tashabbuslari
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-[12deg]" />
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Bizning ekologiya, sog'liq va barqaror rivojlanish sohasidagi loyihalarimiz haqida bilib oling. EMU University yashil kelajakka intiladi!
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
                        <h3 className="text-xl text-gray-600">Postlar topilmadi</h3>
                        <p className="mt-2 text-gray-500">
                            "Green" tegi bilan postlar hali qo'shilmagan.{' '}
                            <Link href="/uz/blog" className="text-[#6b0e55] underline">
                                Barcha postlarni ko'ring
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}