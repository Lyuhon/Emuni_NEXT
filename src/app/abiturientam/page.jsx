
import Image from 'next/image';

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
        } = {}
    } = data?.acf || {};

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {heroImage?.url && (
                    <Image
                        src={heroImage.url}
                        alt="Admission Hero"
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(99,20,99,0.9)] to-[rgba(138,60,138,0.7)]"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {heroTitleRu || 'Абитуриентам'}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-white to-transparent mx-auto mb-8"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white opacity-90">
                        <path d="M0,0C200,100,400,20,600,80S1000,100,1200,0V120H0Z" />
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16">
                {/* Text Block 1 */}
                {block1 && (
                    <div className="mb-12">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="prose prose-lg max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: block1 }}
                            />
                        </div>
                    </div>
                )}

                {/* Text Block 2 */}
                {block2 && (
                    <div className="mb-12">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="prose prose-lg max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: block2 }}
                            />
                        </div>
                    </div>
                )}

                {/* Exam Subjects */}
                {(medicalSchoolRu?.url || businessSchoolRu?.url) && (
                    <div className="mb-12">
                        <h2
                            className="text-3xl font-bold mb-8 text-center"
                            style={{ color: brandColor }}
                        >
                            Предметы для вступительных экзаменов
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {medicalSchoolRu?.url && (
                                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
                                    <div className="relative h-64">
                                        <Image
                                            src={medicalSchoolRu.url}
                                            alt="Medical School Subjects"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Медицинская школа
                                        </h3>
                                    </div>
                                </div>
                            )}
                            {businessSchoolRu?.url && (
                                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
                                    <div className="relative h-64">
                                        <Image
                                            src={businessSchoolRu.url}
                                            alt="Business School Subjects"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Школа бизнеса и социальных наук
                                        </h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Text Block 3 */}
                {block3 && (
                    <div>
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                            <div
                                className="prose prose-lg max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: block3 }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}