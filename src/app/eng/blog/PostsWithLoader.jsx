// PostsWithLoader.jsx
"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PostsWithLoader({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Основной эффект для управления лоадером
    useEffect(() => {
        // Отключаем автоматический сброс скролла браузером
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        // Показываем лоадер
        setIsLoading(true);

        // Таймер для минимального времени лоадера
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        // Обработчик изменений URL
        const handleRouteChange = () => {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 6000);
            return () => clearTimeout(timer);
        };

        // Обработчик кликов по ссылкам
        const handleLinkClick = (e) => {
            const href = e.currentTarget.getAttribute("href");
            if (href && href.startsWith("/blog")) {
                setIsLoading(true);
            }
        };

        // Добавляем обработчики
        window.addEventListener("popstate", handleRouteChange);
        const blogLinks = document.querySelectorAll('a[href^="/blog"]');
        blogLinks.forEach((link) => {
            link.addEventListener("click", handleLinkClick);
        });

        // Очистка
        return () => {
            clearTimeout(timer);
            window.removeEventListener("popstate", handleRouteChange);
            blogLinks.forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "auto";
            }
        };
    }, [pathname, searchParams]);

    // Отдельный эффект для скролла
    useEffect(() => {
        if (!isLoading) {
            const page = searchParams.get("page");
            if (page) {
                const mainContent = document.querySelector(
                    ".max-w-screen-2xl.mx-auto.px-4.md\\:px-8.py-12.md\\:py-16.flex.flex-col.md\\:flex-row.gap-8"
                );
                if (mainContent) {
                    const offset = 100; // Отступ 100 пикселей сверху
                    const elementPosition = mainContent.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                }
            }
        }
    }, [isLoading, searchParams]);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse flex flex-col h-full"
                    >
                        <div className="w-full h-48 bg-gray-200" />
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="h-4 bg-gray-200 rounded-full w-24 mb-2" />
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                            <div className="h-4 bg-gray-200 rounded w-full mt-2" />
                            <div className="h-4 bg-gray-200 rounded w-5/6 mt-1" />
                            <div className="h-4 bg-gray-200 rounded w-4/6 mt-1" />
                            <div className="mt-auto pt-2 border-t border-gray-100 mt-2">
                                <div className="h-3 bg-gray-200 rounded w-20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return <>{children}</>;
}