// app/not-found.jsx - универсальная страница 404 с определением языка по URL

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
    // Фирменные цвета
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    const pathname = usePathname();
    const [language, setLanguage] = useState('ru'); // По умолчанию русский

    useEffect(() => {
        // Определяем язык на основе URL
        if (pathname?.startsWith('/uz/')) {
            setLanguage('uz');
        } else if (pathname?.startsWith('/eng/')) {
            setLanguage('en');
        } else {
            setLanguage('ru');
        }
    }, [pathname]);

    // Контент для разных языков
    const content = {
        ru: {
            title: "Страница не найдена",
            description: "К сожалению, запрашиваемая страница не существует или была перемещена. Пожалуйста, проверьте URL или вернитесь на главную страницу.",
            homeButton: "Вернуться на главную",
            contactButton: "Связаться с нами",
            homeLink: "/",
            contactLink: "/contacts"
        },
        uz: {
            title: "Sahifa topilmadi",
            description: "Afsuski, so'ralgan sahifa mavjud emas yoki ko'chirilgan. Iltimos, URL manzilini tekshiring yoki bosh sahifaga qayting.",
            homeButton: "Bosh sahifaga qaytish",
            contactButton: "Biz bilan bog'lanish",
            homeLink: "/uz",
            contactLink: "/uz/contacts"
        },
        en: {
            title: "Page Not Found",
            description: "Sorry, the page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.",
            homeButton: "Return to Homepage",
            contactButton: "Contact Us",
            homeLink: "/eng",
            contactLink: "/eng/contacts"
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
            {/* Декоративные элементы фона */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse" />
                <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-pulse delay-700" />
                <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-4 relative z-10 text-center">
                <div className="flex flex-col items-center">
                    {/* Номер ошибки */}
                    <div className="relative mb-6">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                        <h1 className="text-8xl font-bold text-[#6b0e55]">404</h1>
                    </div>

                    {/* Заголовок ошибки */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        {content[language].title}
                    </h2>

                    {/* Описание ошибки */}
                    <p className="text-gray-600 mb-10 max-w-md">
                        {content[language].description}
                    </p>

                    {/* Кнопки */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href={content[language].homeLink}
                            className="px-6 py-3 bg-[#6b0e55] text-white font-medium rounded-lg hover:bg-[#8f3178] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {content[language].homeButton}
                        </Link>
                        <Link
                            href={content[language].contactLink}
                            className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                        >
                            {content[language].contactButton}
                        </Link>
                    </div>

                    {/* Языковые переключатели */}
                    {/* <div className="mt-8 pt-6 border-t border-gray-100 w-full flex justify-center gap-3">
                        <Link
                            href="/not-found"
                            className={language === 'ru' ? "text-[#6b0e55] font-medium" : "text-gray-400 hover:text-[#6b0e55]"}
                        >
                            RU
                        </Link>
                        <Link
                            href="/uz/not-found"
                            className={language === 'uz' ? "text-[#6b0e55] font-medium" : "text-gray-400 hover:text-[#6b0e55]"}
                        >
                            UZ
                        </Link>
                        <Link
                            href="/eng/not-found"
                            className={language === 'en' ? "text-[#6b0e55] font-medium" : "text-gray-400 hover:text-[#6b0e55]"}
                        >
                            EN
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
}