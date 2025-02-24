// // app/blog/page.jsx
// "use client";
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

// export default function BlogPage() {
//     const [selectedCategory, setSelectedCategory] = useState("all");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Для спойлера на мобильных
//     const [animatePosts, setAnimatePosts] = useState(false); // Для анимации постов

//     // Категории для сайдбара
//     const categories = [
//         { id: "all", name: "Все статьи" },
//         { id: "education", name: "Образование" },
//         { id: "science", name: "Наука" },
//         { id: "medicine", name: "Медицина" },
//         { id: "student-life", name: "Студенческая жизнь" },
//         { id: "events", name: "События" },
//     ];

//     // Пример постов блога
//     const posts = [
//         {
//             id: 1,
//             title: "Топ-5 советов для подготовки к экзаменам",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "education",
//             description: "Как эффективно подготовиться к вступительным экзаменам в ЕМУ Университет и не сойти с ума.",
//         },
//         {
//             id: 2,
//             title: "Новые открытия в биохимии",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "science",
//             description: "Учёные ЕМУ раскрывают тайны молекулярных процессов в живых организмах.",
//         },
//         {
//             id: 3,
//             title: "Как стать врачом мечты?",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "medicine",
//             description: "Путь от студента ЕМУ до профессионала в белом халате.",
//         },
//         {
//             id: 4,
//             title: "День открытых дверей 2025",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "events",
//             description: "Присоединяйтесь к нам 15 марта для знакомства с университетом!",
//         },
//         {
//             id: 5,
//             title: "Студенческий фестиваль науки",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "student-life",
//             description: "Как студенты ЕМУ превращают науку в праздник.",
//         },
//         {
//             id: 6,
//             title: "Кредитно-модульная система: плюсы и минусы",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "education",
//             description: "Разбираем, как работает обучение в ЕМУ Университете.",
//         },
//         {
//             id: 7,
//             title: "Искры гениальности: химия в действии",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "science",
//             description: "Эксперименты, которые вдохновляют студентов ЕМУ.",
//         },
//         {
//             id: 8,
//             title: "Будущее медицины в Узбекистане",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "medicine",
//             description: "Тренды и перспективы для студентов-медиков.",
//         },
//         {
//             id: 9,
//             title: "Вечеринка первокурсников",
//             image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
//             category: "student-life",
//             description: "Как ЕМУ встречает новых студентов с размахом.",
//         },
//     ];

//     // Фильтрация постов по категории
//     const filteredPosts =
//         selectedCategory === "all"
//             ? posts
//             : posts.filter((post) => post.category === selectedCategory);

//     // Пагинация
//     const postsPerPage = 6;
//     const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//     const paginatedPosts = filteredPosts.slice(
//         (currentPage - 1) * postsPerPage,
//         currentPage * postsPerPage
//     );

//     // Анимация при смене категории
//     useEffect(() => {
//         setAnimatePosts(true);
//         const timer = setTimeout(() => setAnimatePosts(false), 300); // Длительность анимации
//         return () => clearTimeout(timer);
//     }, [selectedCategory, currentPage]);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* HERO Section */}
//             <div className="bg-white relative overflow-hidden">
//                 <div className="absolute inset-0">
//                     <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
//                     <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
//                     <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
//                 </div>

//                 <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-24">
//                     <div className="relative z-10 w-full text-center">
//                         <div className="relative inline-block">
//                             <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
//                             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                                 Блог
//                                 <br />
//                                 <span className="text-[#5f1464] relative">
//                                     ЕМУ Университета
//                                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
//                                 </span>
//                             </h1>
//                         </div>
//                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                             Новости, события и полезные статьи для студентов и абитуриентов
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">


//                 {/* Blog Posts */}
//                 <main className="w-full md:w-3/4">
//                     <div
//                         className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${animatePosts ? "animate-posts-fade" : ""
//                             }`}
//                     >
//                         {paginatedPosts.map((post) => (
//                             <div
//                                 key={post.id}
//                                 className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
//                             >
//                                 <img
//                                     src={post.image}
//                                     alt={post.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-5">
//                                     <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2">
//                                         {categories.find((cat) => cat.id === post.category)?.name}
//                                     </span>
//                                     <h3 className="text-lg font-bold text-gray-900 mb-2">
//                                         {post.title}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm line-clamp-3">
//                                         {post.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Pagination */}
//                     {totalPages > 1 && (
//                         <div className="mt-12 flex justify-center items-center space-x-4">
//                             <button
//                                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                                 disabled={currentPage === 1}
//                                 className="p-2 rounded-full bg-[#5f1464] text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#7a407f] transition-colors"
//                             >
//                                 <ChevronLeft className="w-5 h-5" />
//                             </button>
//                             <div className="flex space-x-2">
//                                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                                     (page) => (
//                                         <button
//                                             key={page}
//                                             onClick={() => setCurrentPage(page)}
//                                             className={`px-4 py-2 rounded-full text-sm font-medium ${currentPage === page
//                                                 ? "bg-[#5f1464] text-white"
//                                                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                                                 }`}
//                                         >
//                                             {page}
//                                         </button>
//                                     )
//                                 )}
//                             </div>
//                             <button
//                                 onClick={() =>
//                                     setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                                 }
//                                 disabled={currentPage === totalPages}
//                                 className="p-2 rounded-full bg-[#5f1464] text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#7a407f] transition-colors"
//                             >
//                                 <ChevronRight className="w-5 h-5" />
//                             </button>
//                         </div>
//                     )}
//                 </main>


//                 {/* Sidebar */}
//                 <aside className="w-full md:w-1/4">
//                     <div className="bg-white rounded-xl shadow-md md:shadow-none">
//                         {/* Мобильная версия - спойлер */}
//                         <div className="md:hidden">
//                             <button
//                                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                                 className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#5f1464] text-white rounded-t-xl"
//                             >
//                                 <h2 className="text-xl font-bold">Категории</h2>
//                                 {isSidebarOpen ? (
//                                     <ChevronUp className="w-6 h-6" />
//                                 ) : (
//                                     <ChevronDown className="w-6 h-6" />
//                                 )}
//                             </button>
//                             {isSidebarOpen && (
//                                 <ul className="p-6 space-y-2 animate-fade-in">
//                                     {categories.map((category) => (
//                                         <li key={category.id}>
//                                             <button
//                                                 onClick={() => {
//                                                     setSelectedCategory(category.id);
//                                                     setCurrentPage(1);
//                                                     setIsSidebarOpen(false); // Закрываем после выбора
//                                                 }}
//                                                 className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category.id
//                                                     ? "bg-[#5f1464] text-white"
//                                                     : "text-gray-700 hover:bg-gray-100"
//                                                     }`}
//                                             >
//                                                 {category.name}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         {/* Десктопная версия */}
//                         <div className="hidden md:block p-6 sticky top-8">
//                             <h2 className="text-xl font-bold text-[#5f1464] mb-4">Категории</h2>
//                             <ul className="space-y-2">
//                                 {categories.map((category) => (
//                                     <li key={category.id}>
//                                         <button
//                                             onClick={() => {
//                                                 setSelectedCategory(category.id);
//                                                 setCurrentPage(1);
//                                             }}
//                                             className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category.id
//                                                 ? "bg-[#5f1464] text-white"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                                 }`}
//                                         >
//                                             {category.name}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </aside>
//             </div>

//             {/* Custom Styles */}
//             <style jsx global>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes postsFade {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         .animate-posts-fade {
//           animation: postsFade 0.3s ease-in-out;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//         </div>
//     );
// }


// app/blog/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Импортируем Link для навигации
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Для спойлера на мобильных
    const [animatePosts, setAnimatePosts] = useState(false); // Для анимации постов

    // Категории для сайдбара
    const categories = [
        { id: "all", name: "Все статьи" },
        { id: "education", name: "Образование" },
        { id: "science", name: "Наука" },
        { id: "medicine", name: "Медицина" },
        { id: "student-life", name: "Студенческая жизнь" },
        { id: "events", name: "События" },
    ];

    // Пример постов блога
    const posts = [
        {
            id: 1,
            title: "Топ-5 советов для подготовки к экзаменам",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "education",
            description: "Как эффективно подготовиться к вступительным экзаменам в ЕМУ Университет и не сойти с ума.",
        },
        {
            id: 2,
            title: "Новые открытия в биохимии",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "science",
            description: "Учёные ЕМУ раскрывают тайны молекулярных процессов в живых организмах.",
        },
        {
            id: 3,
            title: "Как стать врачом мечты?",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "medicine",
            description: "Путь от студента ЕМУ до профессионала в белом халате.",
        },
        {
            id: 4,
            title: "День открытых дверей 2025",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "events",
            description: "Присоединяйтесь к нам 15 марта для знакомства с университетом!",
        },
        {
            id: 5,
            title: "Студенческий фестиваль науки",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "student-life",
            description: "Как студенты ЕМУ превращают науку в праздник.",
        },
        {
            id: 6,
            title: "Кредитно-модульная система: плюсы и минусы",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "education",
            description: "Разбираем, как работает обучение в ЕМУ Университете.",
        },
        {
            id: 7,
            title: "Искры гениальности: химия в действии",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "science",
            description: "Эксперименты, которые вдохновляют студентов ЕМУ.",
        },
        {
            id: 8,
            title: "Будущее медицины в Узбекистане",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "medicine",
            description: "Тренды и перспективы для студентов-медиков.",
        },
        {
            id: 9,
            title: "Вечеринка первокурсников",
            image: "https://emuni.uz/wp-content/uploads/2025/01/oxford-weidenfeld-and-hoffmann-scholarship-2-1024x1024.png",
            category: "student-life",
            description: "Как ЕМУ встречает новых студентов с размахом.",
        },
    ];

    // Фильтрация постов по категории
    const filteredPosts =
        selectedCategory === "all"
            ? posts
            : posts.filter((post) => post.category === selectedCategory);

    // Пагинация
    const postsPerPage = 6;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // Анимация при смене категории
    useEffect(() => {
        setAnimatePosts(true);
        const timer = setTimeout(() => setAnimatePosts(false), 300); // Длительность анимации
        return () => clearTimeout(timer);
    }, [selectedCategory, currentPage]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Блог
                                <br />
                                <span className="text-[#5f1464] relative">
                                    ЕМУ Университета
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Новости, события и полезные статьи для студентов и абитуриентов
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4">
                    <div className="bg-white rounded-xl shadow-md md:shadow-none">
                        {/* Мобильная версия - спойлер */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#5f1464] text-white rounded-t-xl"
                            >
                                <h2 className="text-xl font-bold">Категории</h2>
                                {isSidebarOpen ? (
                                    <ChevronUp className="w-6 h-6" />
                                ) : (
                                    <ChevronDown className="w-6 h-6" />
                                )}
                            </button>
                            {isSidebarOpen && (
                                <ul className="p-6 space-y-2 animate-fade-in">
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory(category.id);
                                                    setCurrentPage(1);
                                                    setIsSidebarOpen(false); // Закрываем после выбора
                                                }}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category.id
                                                    ? "bg-[#5f1464] text-white"
                                                    : "text-gray-700 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Десктопная версия */}
                        <div className="hidden md:block p-6 sticky top-8">
                            <h2 className="text-xl font-bold text-[#5f1464] mb-4">Категории</h2>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category.id
                                                ? "bg-[#5f1464] text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Blog Posts */}
                <main className="w-full md:w-3/4">
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${animatePosts ? "animate-posts-fade" : ""
                            }`}
                    >
                        {paginatedPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/news/slug`} // Ссылка на страницу поста
                                className="block" // Убедимся, что Link охватывает всю карточку
                            >
                                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-5">
                                        <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2">
                                            {categories.find((cat) => cat.id === post.category)?.name}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center items-center space-x-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full bg-[#5f1464] text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#7a407f] transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex space-x-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                    (page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium ${currentPage === page
                                                ? "bg-[#5f1464] text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}
                            </div>
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                }
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full bg-[#5f1464] text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#7a407f] transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </main>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes postsFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-posts-fade {
          animation: postsFade 0.3s ease-in-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}