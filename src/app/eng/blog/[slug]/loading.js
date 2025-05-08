export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse [animation-delay:700ms]" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse" />
                </div>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-pulse" />
                            <div className="h-12 md:h-16 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
                            <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse" />
                            <span className="text-gray-500">•</span>
                            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
                {/* Post Content */}
                <main className="w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 md:h-96 bg-gray-200 animate-pulse" />
                        <div className="p-6 md:p-8">
                            {/* Metadata */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
                            </div>
                            {/* Content Placeholder */}
                            <div className="space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
                                <div className="h-6 bg-gray-200 rounded w-5/6 animate-pulse" />
                                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                                <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse" />
                            </div>
                            {/* Share Section */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="h-6 bg-gray-200 rounded w-40 mb-3 animate-pulse" />
                                <div className="flex space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts Placeholder */}
                    <div className="mt-12">
                        <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse flex flex-col h-full"
                                >
                                    <div className="w-full h-40 bg-gray-200" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse" />
                                        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="w-full md:w-1/3">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-[140px]">
                        {/* Quick Links */}
                        <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse" />
                        <ul className="space-y-3">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <li key={index}>
                                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                                </li>
                            ))}
                        </ul>
                        {/* Contacts */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse" />
                            <ul className="space-y-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mt-1 mr-3 w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
                                        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}