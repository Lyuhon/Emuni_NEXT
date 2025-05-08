// eng/vacancy/page.js
import React from 'react';
import { Mail, MapPin, Clock, Award, CheckCircle, Send, Calendar, BookOpen, Users, PartyPopper } from 'lucide-react';

// SEO Metadata
export const metadata = {
    title: "Careers - EMU University",
    description: "Join the EMU University team: internships, faculty positions, and opportunities for medical specialists. Official employment, benefits package, and professional development opportunities.",
    keywords: "EMU University vacancies, medical university jobs, teaching career, university internship, employment in Tashkent",
    openGraph: {
        title: "Careers - EMU University",
        description: "Join the EMU University team: internships, faculty positions, and opportunities for medical specialists. Official employment, benefits package, and professional development opportunities.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

export async function generateStaticParams() {
    return [];
}

// ISR configuration
export const revalidate = 86400; // Revalidate every 24 hours

const VacanciesPage = () => {
    // Brand colors
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    // Employment benefits
    const benefits = [
        { title: "Competitive Salary", icon: <Award size={24} /> },
        { title: "Paid Vacation", icon: <Calendar size={24} /> },
        { title: "Official Employment", icon: <CheckCircle size={24} /> },
        { title: "Benefits Package", icon: <Users size={24} /> },
        { title: "International Training", icon: <MapPin size={24} /> },
        { title: "Corporate Events", icon: <PartyPopper size={24} /> }
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
                    <h1 className="text-5xl font-bold text-white mb-4">Careers</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Join our team of professionals at a leading medical university
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
                        "title": "Faculty Position at EMU University",
                        "description": "EMU University invites talented educators to join the team of a leading medical university.",
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
                                "addressCountry": "Uzbekistan",
                                "addressLocality": "Tashkent"
                            }
                        }
                    })
                }} />

                {/* Vacancies Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>Available Positions</h2>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Tired of excessive paperwork?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Not allowed to properly engage with students?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Fed up with preparing unnecessary protocols?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Not enough time for self-development? For family?</p>
                        </div>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg mb-8 border-l-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                        <p className="font-medium">Then join us!</p>
                        <p className="mt-2">EMU University will fundamentally change your intellectual perspective on higher education.</p>
                    </div>

                    <h3 className="text-xl font-bold mb-4" style={{ color: brandColor }}>What We Offer</h3>

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
                        <p>Team building, celebrations, and countryside retreats</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Benefits package (special discounted services for all types of medical and diagnostic services in the EMU network of multi-profile clinics)</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Internships at leading international centers and universities for the best faculty members, funded by the University Founders' Foundation.</p>
                    </div>

                    <p className="text-center font-medium text-lg mb-8">We welcome everyone who believes in themselves and their future. We are ready to grow together with you!</p>

                    <div className="p-6 bg-purple-50 rounded-lg border border-purple-100 flex flex-col md:flex-row items-center justify-between" style={{ backgroundColor: brandColorLighter, borderColor: `${brandColor}30` }}>
                        <div className="flex items-center mb-4 md:mb-0">
                            <Send size={24} className="mr-3" style={{ color: brandColor }} />
                            <span>Send your CV and brief information about yourself to:</span>
                        </div>
                        <div className='flex flex-wrap'>
                            <a href="mailto:vacancy_emuni@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>vacancy_emuni@emuni.uz</a>,&nbsp;
                            <a href="mailto:hr@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>hr@emuni.uz</a>
                        </div>
                    </div>

                    <p className="text-center mt-4 text-sm text-gray-500">We guarantee your personal confidentiality!</p>
                </div>

                {/* Internship Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>University Internship Opportunities</h2>

                    <p className="mb-6">Our team is actively working to create a foundation for retraining and advanced training of doctors and educators. Short-term professional development courses will be available soon.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <BookOpen size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Training Programs</h3>
                            <p>Modern methodologies and cutting-edge experience from leading international medical universities</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Clock size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Flexible Schedule</h3>
                            <p>Opportunity to combine internship with your main job thanks to convenient class scheduling</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor, backgroundColor: brandColorLighter }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Award size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Certification</h3>
                            <p>Upon completion of the internship, you will receive a professional development certificate of the established format</p>
                        </div>
                    </div>

                    <div className="mt-10 text-center hidden">
                        <button
                            className="inline-flex items-center justify-center text-white font-bold py-3 px-10 rounded-lg text-lg shadow-md transition-all"
                            style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        >
                            <Mail size={20} className="mr-2" />
                            Learn more about our programs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacanciesPage;