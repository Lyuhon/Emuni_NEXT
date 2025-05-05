// \src\app\blog\BlogPostCard.jsx
import Link from "next/link";

export default function BlogPostCard({ post, categoryName }) {
    return (
        <Link
            href={`/uz/blog/${post.slug}`}
            className="block h-full"
        >
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col h-full">
                <div className="w-full h-48">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover bg-[#f1f1f1]"
                    />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2 w-fit">
                        {categoryName}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                        {post.description}
                    </p>
                    <div className="mt-3 pt-2 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[#5f1464] text-xs font-medium">Подробнее →</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}