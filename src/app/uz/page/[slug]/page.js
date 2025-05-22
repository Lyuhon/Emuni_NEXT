// page/[slug]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import './page.css'; // Импортируем стили

// Функция для декодирования HTML сущностей на сервере
function decodeHtmlEntities(text) {
    if (typeof text !== 'string') return text;

    const entities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#8217;': "'",
        '&#8220;': '"',
        '&#8221;': '"',
        '&#8211;': '–',
        '&#8212;': '—',
        '&nbsp;': '\u00A0',  // ✅ Правильный неразрывный пробел
        '&hellip;': '…',
        '&mdash;': '—',
        '&ndash;': '–',
        '&lsquo;': '`',
        '&rsquo;': '`',
        '&ldquo;': '"',
        '&rdquo;': '"',
        '&trade;': '™',
        '&copy;': '©',
        '&reg;': '®',
        '&#038;': '&'
    };

    let decoded = text;

    Object.keys(entities).forEach(entity => {
        const regex = new RegExp(entity, 'g');
        decoded = decoded.replace(regex, entities[entity]);
    });

    decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec);
    });

    decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
    });

    return decoded;
}

// Функция для очистки и форматирования контента
function cleanContent(content) {
    if (!content) return '';

    let cleaned = decodeHtmlEntities(content);
    cleaned = cleaned.replace(/<!-- wp:[^>]* -->/g, '');
    cleaned = cleaned.replace(/<!-- \/wp:[^>]* -->/g, '');
    cleaned = cleaned.replace(/\n\s*\n/g, '\n');
    cleaned = cleaned.replace(/<p>\s*<\/p>/g, '');

    return cleaned.trim();
}

// Функция для получения данных страницы
async function getPageData(slug) {
    try {
        const url = `https://next.emu.web-perfomance.uz/wp-json/wp/v2/page-next-js?slug=${slug}&_embed`;

        const res = await fetch(url, {
            next: { revalidate: 14400 },
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch page data');
        }

        const pages = await res.json();

        if (!pages || pages.length === 0) {
            return null;
        }

        return pages[0];
    } catch (error) {
        console.error('Error fetching page data:', error);
        return null;
    }
}

// Генерация метаданных
export async function generateMetadata({ params }) {
    // ИСПРАВЛЕНИЕ: правильно обрабатываем Promise
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // console.log('📋 Metadata params:', { resolvedParams, slug });

    const pageData = await getPageData(slug);

    if (!pageData) {
        // Выбрасывает системную 404 ошибку
        notFound();
    }

    const acfFields = pageData.acf || {};
    const title = acfFields.zagolovok_uz || pageData.title?.rendered || 'Страница';
    const description = acfFields.kratkoe_opisanie_uz || '';
    const image = acfFields.fonovoe_izobrazhenie?.url || 'https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png';

    return {
        title: `${title} - EMU Universiteti`,
        description: description || 'EMU Universiteti - yetakchi tibbiyot universiteti',
        keywords: `${title}, EMU Universiteti, tibbiyot universiteti`,
        openGraph: {
            title: `${title} - EMU Universiteti`,
            description: description || 'EMU Universiteti - yetakchi tibbiyot universiteti',
            images: [image],
        },
    };
}

// ISR конфигурация
export const revalidate = 14400;

// Компонент страницы
export default async function DynamicPage({ params }) {
    // Цвета бренда
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    // ИСПРАВЛЕНИЕ: правильно обрабатываем Promise
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    if (!slug) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
                    <h1 className="text-2xl font-bold text-[#6b0e55]">Ошибка</h1>
                    <p className="text-gray-600 mb-6">Не указан идентификатор страницы.</p>
                </div>
            </div>
        );
    }

    // Получаем данные страницы
    const pageData = await getPageData(slug);

    if (!pageData) {
        return (
            // Выбрасывает системную 404 ошибку
            notFound()
        );
    }

    // Получаем данные из ACF полей
    const acfFields = pageData.acf || {};

    // Извлекаем нужные поля
    const title = acfFields.zagolovok_uz || pageData.title?.rendered || 'Страница';
    const shortDescription = acfFields.kratkoe_opisanie_uz || '';
    const heroBanner = acfFields.fonovoe_izobrazhenie?.url || null;
    const content = cleanContent(acfFields.kontent_straniczy_uz) || cleanContent(pageData.content?.rendered) || '';

    // Если нет контента - показываем 404
    if (!content || content.trim() === '') {
        notFound();
    }

    // Показываем Hero только если есть заголовок ИЛИ описание
    const showHero = title || shortDescription;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Structured Data для SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": title,
                    "description": shortDescription,
                    "url": `https://emuni.uz/page/${slug}`,
                    "publisher": {
                        "@type": "Organization",
                        "name": "EMU University",
                        "sameAs": "https://emuni.uz"
                    }
                })
            }} />

            {/* Hero Section - показываем только если есть заголовок или описание */}
            {showHero && (
                <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                    background: heroBanner
                        ? `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('${heroBanner}')`
                        : `linear-gradient(135deg, ${brandColor}, ${brandColorLight})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                    <div className="text-center z-10 px-4 max-w-4xl">
                        {title && <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>}
                        {title && <div className="w-24 h-1 bg-white mx-auto mb-6"></div>}
                        {shortDescription && (
                            <p className="text-xl text-white max-w-3xl mx-auto">
                                {shortDescription}
                            </p>
                        )}
                    </div>

                    {/* Wave декорация */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                        </svg>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="bg-white- rounded-lg md:p-8 relative overflow-hidden">
                    {/* Контент страницы с кастомными стилями для WYSIWYG */}
                    <div
                        className="content-area prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </div>
    );
}