// app/blog/[slug]/page.jsx
"use client";
import React from "react";
import { Clock, Eye, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage({ params }) {
    // Пример данных поста (в реале это будет приходить из API или базы)
    const post = {
        id: params.id,
        title: "Стипендия Университета Хериот-Уотт",
        image: "https://emuni.uz/wp-content/uploads/2024/12/16a-1024x1024.jpg",
        category: "Образование",
        content: `
      <p>Подготовка к вступительным экзаменам — это не только зубрёжка, но и правильная стратегия. Вот наши топ-5 советов, которые помогут вам блестяще справиться с испытаниями в ЕМУ Университет:</p>
      <ol class="list-decimal pl-6 my-4">
        <li><strong>Планируйте заранее.</strong> Составьте расписание и придерживайтесь его.</li>
        <li><strong>Фокус на слабых местах.</strong> Уделите больше времени темам, которые даются сложнее.</li>
        <li><strong>Практика.</strong> Решайте прошлогодние тесты каждый день.</li>
        <li><strong>Отдых.</strong> Не забывайте про сон и перерывы — это повышает продуктивность.</li>
        <li><strong>Консультации.</strong> Задавайте вопросы преподавателям ЕМУ!</li>
      </ol>
      <p>Следуя этим шагам, вы сможете не только успешно сдать экзамены, но и сохранить спокойствие в процессе подготовки.</p>
    `,
        date: "10 февраля 2025",
        views: 1243,
    };

    // Похожие посты (пример)
    const relatedPosts = [
        {
            id: 6,
            title: "Студенты Университета  EМУ посетили Парк Победы",
            image: "https://emuni.uz/wp-content/uploads/2024/12/16a-1024x1024.jpg",
        },
        {
            id: 3,
            title: "Стипендия UM Global Studies",
            image: "https://emuni.uz/wp-content/uploads/2024/12/16a-1024x1024.jpg",
        },
        {
            id: 7,
            title: "Магистерская стипендия Женевского университета",
            image: "https://emuni.uz/wp-content/uploads/2024/12/16a-1024x1024.jpg",
        },
    ];

    // Контент для сайдбара (мед и бизнес тематика)
    const sidebarContent = {
        quickLinks: [
            { title: "Расписание занятий", href: "#" },
            { title: "Подача документов", href: "#" },
            { title: "Направления", href: "#" },
            { title: "Научный журнал", href: "#" },
        ],
        contacts: [
            { label: "Телефон", value: "+998(78) 147-00-07" },
            { label: "Email", value: "info@emuni.uz" },
            { label: "Адрес", value: "Улица Мукими 7/1, Ташкент, Узбекистан" },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                {post.title}
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            {post.category} • {post.date}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
                {/* Post Content */}
                <main className="w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-46 md:h-96 object-cover rounded-lg mb-6"
                        />
                        <div
                            className="prose prose-lg text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        {/* <div className="mt-8 flex items-center space-x-6 text-gray-500"> */}
                        <div className="mt-8 flex flex-col md:flex-row gap-[10px] md:gap-[20px] items-center text-gray-500">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <Eye className="w-5 h-5" />
                                <span>{post.views.toLocaleString()} просмотров</span>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#5f1464] mb-6">
                            Похожие статьи
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`#`}
                                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                >
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                                            {related.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="w-full md:w-1/3">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky md:top-[140px]">
                        <h2 className="text-xl font-bold text-[#5f1464] mb-4">
                            Полезные ссылки
                        </h2>
                        <ul className="space-y-3">
                            {sidebarContent.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="flex items-center text-gray-700 hover:text-[#5f1464] transition-colors"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-bold text-[#5f1464] mt-6 mb-4">
                            Контакты
                        </h2>
                        <ul className="space-y-3">
                            {sidebarContent.contacts.map((contact, index) => (
                                <li key={index} className="text-gray-700">
                                    <span className="font-semibold">{contact.label}:</span>{" "}
                                    {contact.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
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
        .prose ul,
        .prose ol {
          margin-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}