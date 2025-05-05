// vacancy/page.js
import React from 'react';
import { Mail, MapPin, Clock, Award, CheckCircle, Send, Calendar, BookOpen, Users, PartyPopper } from 'lucide-react';

// SEO Metadata
export const metadata = {
    title: "Вакансии - EMU University",
    description: "Присоединяйтесь к команде EMU University: стажировки, вакансии для преподавателей и медицинских специалистов. Официальное трудоустройство, социальный пакет, возможности для развития.",
    keywords: "вакансии EMU University, работа в медицинском университете, карьера преподавателя, стажировка в университете, трудоустройство в Ташкенте",
    openGraph: {
        title: "Вакансии - EMU University",
        description: "Присоединяйтесь к команде EMU University: стажировки, вакансии для преподавателей и медицинских специалистов. Официальное трудоустройство, социальный пакет, возможности для развития.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

export async function generateStaticParams() {
    return [];
}

// ISR configuration
export const revalidate = 86400; // Revalidate every 24 hours

const VacanciesPage = () => {
    // Фирменные цвета
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    // Преимущества работы
    const benefits = [
        { title: "Достойная зарплата", icon: <Award size={24} /> },
        { title: "Оплачиваемый отпуск", icon: <Calendar size={24} /> },
        { title: "Официальное трудоустройство", icon: <CheckCircle size={24} /> },
        { title: "Социальный пакет", icon: <Users size={24} /> },
        { title: "Стажировки за рубежом", icon: <MapPin size={24} /> },
        { title: "Корпоративные мероприятия", icon: <PartyPopper size={24} /> }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/vacancy-hero.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Вакансии</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Станьте частью нашей команды профессионалов в ведущем медицинском университете
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Structured Data for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "title": "Преподаватель в EMU University",
                        "description": "EMU University приглашает талантливых преподавателей присоединиться к команде ведущего медицинского университета.",
                        "datePosted": new Date().toISOString(),
                        "employmentType": "FULL_TIME",
                        "hiringOrganization": {
                            "@type": "Organization",
                            "name": "EMU University",
                            "sameAs": "https://emuni.uz"
                        },
                        "jobLocation": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "Узбекистан",
                                "addressLocality": "Ташкент"
                            }
                        }
                    })
                }} />

                {/* Vacancies Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>Возможные вакансии</h2>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Устали от лишней документации?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Не дают нормально заниматься со студентами?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Надоело готовить никому не нужные протоколы?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Не хватает времени – для саморазвития? Для семьи?</p>
                        </div>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg mb-8 border-l-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                        <p className="font-medium">Тогда Вам к нам!</p>
                        <p className="mt-2">EMU University кардинально поменяет Ваш высоко-интеллектуальный взгляд на высшее образование.</p>
                    </div>

                    <h3 className="text-xl font-bold mb-4" style={{ color: brandColor }}>Что мы предлагаем</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                                <div className="mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                                    <div style={{ color: brandColor }}>{benefit.icon}</div>
                                </div>
                                <span className="font-medium">{benefit.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Тимбилдинги, праздники, выезды за город</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Социальный пакет (специальный льготные услуги на все виды медицинских и диагностических услуг в в сети многопрофильных клиник EMU)</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Стажировки в лучших зарубежных центрах, университетах для лучших преподавателей, за счет Фонда Учредителей Университета.</p>
                    </div>

                    <p className="text-center font-medium text-lg mb-8">Мы ждем каждого кто верит в себя, в свое будущее. Мы готовы развиваться вместе с Вами!</p>

                    <div className="p-6 bg-purple-50 rounded-lg border border-purple-100 flex flex-col md:flex-row items-center justify-between" style={{ backgroundColor: brandColorLighter, borderColor: `${brandColor}30` }}>
                        <div className="flex items-center mb-4 md:mb-0">
                            <Send size={24} className="mr-3" style={{ color: brandColor }} />
                            <span>Отправляйте Ваши CV (объективку) и краткую информацию о себе отправьте на:</span>
                        </div>
                        <div className='flex flex-wrap'>
                            <a href="mailto:vacancy_emuni@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>vacancy_emuni@emuni.uz</a>,&nbsp;
                            <a href="mailto:hr@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>hr@emuni.uz</a>
                        </div>
                    </div>

                    <p className="text-center mt-4 text-sm text-gray-500">Мы гарантируем Вашу личную конфиденциальность!</p>
                </div>

                {/* Internship Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>Возможная стажировка в университете</h2>

                    <p className="mb-6">Наша команда активно работает по созданию базы для переподготовки и повышения квалификации врачей и педагогов. В скором времени будут доступны курсы по краткосрочному повышению квалификации.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <BookOpen size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Программы обучения</h3>
                            <p>Современные методики и передовой опыт ведущих международных медицинских университетов</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Clock size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Гибкий график</h3>
                            <p>Возможность совмещать стажировку с основной работой благодаря удобному расписанию занятий</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Award size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Сертификация</h3>
                            <p>По окончании стажировки выдается сертификат о повышении квалификации установленного образца</p>
                        </div>
                    </div>

                    <div className="mt-10 text-center hidden">
                        <button
                            className="inline-flex items-center justify-center text-white font-bold py-3 px-10 rounded-lg text-lg shadow-md transition-all"
                            style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        >
                            <Mail size={20} className="mr-2" />
                            Узнать подробнее о программах
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacanciesPage;