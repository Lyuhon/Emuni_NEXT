// Файл: app/admission/page.js (или где находится ваш основной компонент)
import Image from 'next/image';
import ClientTabs from './ClientTabs';
import HtmlEmbed from './HtmlEmbed'; // Импортируем новый компонент

// Класс для обработки WYSIWYG контента
class WYSIWYGProcessor {
    // Метод для обработки контента
    static process(content) {
        if (!content) return '';

        // Если контент уже содержит HTML-теги, просто декодируем его
        let processed = content
            .replace(/\\u003C/g, '<')
            .replace(/\\u003E/g, '>')
            .replace(/\\n/g, '\n');

        // Если нет тегов параграфов, добавляем их
        if (!processed.includes('<p>') && !processed.includes('</p>')) {
            // Разделяем по двойным переносам строк для создания параграфов
            const paragraphs = processed.split(/\n\n+/);
            processed = paragraphs
                .map(p => p.trim() ? `<p>${p.trim().replace(/\n/g, '<br>')}</p>` : '')
                .join('');
        }

        return processed;
    }
}

// Server Component
export default async function AdmissionPage() {
    // Brand colors
    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    // Fetch data with ISR (revalidate every 10 minutes)
    const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81345', {
        next: { revalidate: 600 }
    });
    const data = await res.json();

    // Destructure API data with aliases to avoid hyphen issues
    const {
        hiro_sekcziya: { fonovoe_izobrazhenie: heroImage, zagolovok_ru: heroTitleRu } = {},
        tekstovyj_blok_1: { testovaya_informacziya_ru: block1 } = {},
        tekstovyj_blok_2: { testovaya_informacziya_ru: block2 } = {},
        tekstovyj_blok_3: { testovaya_informacziya_ru: block3 } = {},
        predmety_dlya_vstupitelnyh_ekzamenov: {
            'medical_school_-_ru': medicalSchoolRu,
            'business_and_social_school_-_ru': businessSchoolRu
        } = {},
        // Данные для секции с iframe
        kolichestvo_zayavok: {
            'skryt_sekcziyu': hideSection = [],
            'medical_school_-_zagolovok': medicalSchoolTitle,
            'business_and_social_school_-_zagolovok': businessSchoolTitle,
            'medical_school_-_html': medicalSchoolHtml,
            'business_and_social_school_-_html': businessSchoolHtml
        } = {}
    } = data?.acf || {};

    // Процессим контент WYSIWYG
    const processedBlock1 = WYSIWYGProcessor.process(block1);
    const processedBlock2 = WYSIWYGProcessor.process(block2);
    const processedBlock3 = WYSIWYGProcessor.process(block3);

    // Проверяем, нужно ли скрыть секцию с iframe
    const showIframeSection = !hideSection || hideSection.length === 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Обновленная Hero Section */}
            <div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                style={{
                    background: heroImage?.url
                        ? `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('${heroImage.url}')`
                        : `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80))`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">{heroTitleRu || 'Абитуриентам'}</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    {/* {heroDescriptionRu && (
                        <p className="text-xl text-white max-w-3xl">{heroDescriptionRu}</p>
                    )} */}
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="#f8f9fa"
                            opacity=".8"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="#f8f9fa"
                            opacity=".5"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="#f8f9fa"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16">
                {/* Text Block 1 */}
                {processedBlock1 && (
                    <div className="mb-12">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="wysiwyg-content"
                                dangerouslySetInnerHTML={{ __html: processedBlock1 }}
                            />
                        </div>
                    </div>
                )}

                {showIframeSection && (medicalSchoolHtml || businessSchoolHtml) && (
                    <div className="mb-12">
                        <h2
                            className="text-3xl font-bold mb-8 text-center"
                            style={{ color: brandColor }}
                        >
                            Количество заявок
                        </h2>
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {medicalSchoolHtml && (
                                    <div>
                                        <HtmlEmbed
                                            htmlContent={medicalSchoolHtml}
                                            title={medicalSchoolTitle || "Medical School"}
                                        />
                                    </div>
                                )}
                                {businessSchoolHtml && (
                                    <div>
                                        <HtmlEmbed
                                            htmlContent={businessSchoolHtml}
                                            title={businessSchoolTitle || "Business and Social School"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}


                {/* Text Block 2 */}
                {processedBlock2 && (
                    <div className="mb-12">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="wysiwyg-content"
                                dangerouslySetInnerHTML={{ __html: processedBlock2 }}
                            />
                        </div>
                    </div>
                )}

                {/* Exam Subjects - Используем ClientTabs компонент */}
                {(medicalSchoolRu?.url || businessSchoolRu?.url) && (
                    <div className="mb-12">
                        <h2
                            className="text-3xl font-bold mb-8 text-center"
                            style={{ color: brandColor }}
                        >
                            Предметы для вступительных экзаменов
                        </h2>
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <ClientTabs
                                medicalSchoolRu={medicalSchoolRu}
                                businessSchoolRu={businessSchoolRu}
                                brandColor={brandColor}
                            />
                        </div>
                    </div>
                )}

                {/* Iframe Section - Используем HtmlEmbed компонент */}
                {showIframeSection && (medicalSchoolHtml || businessSchoolHtml) && (
                    <div className="mb-12">
                        <h2
                            className="text-3xl font-bold mb-8 text-center"
                            style={{ color: brandColor }}
                        >
                            Количество заявок
                        </h2>
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {medicalSchoolHtml && (
                                    <div>
                                        <HtmlEmbed
                                            htmlContent={medicalSchoolHtml}
                                            title={medicalSchoolTitle || "Medical School"}
                                        />
                                    </div>
                                )}
                                {businessSchoolHtml && (
                                    <div>
                                        <HtmlEmbed
                                            htmlContent={businessSchoolHtml}
                                            title={businessSchoolTitle || "Business and Social School"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Text Block 3 */}
                {processedBlock3 && (
                    <div>
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="wysiwyg-content"
                                dangerouslySetInnerHTML={{ __html: processedBlock3 }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}