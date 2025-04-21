// \src\app\blog\RelatedPostCard.jsx
import Link from "next/link";

export default function RelatedPostCard({ post }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block h-full"
        >
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col h-full">
                <div className="w-full h-40">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover bg-[#f1f1f1]"
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2 w-fit">
                        {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {post.title}
                    </h3>
                    <div className="mt-auto pt-2">
                        <span className="text-[#5f1464] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Читать далее →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}