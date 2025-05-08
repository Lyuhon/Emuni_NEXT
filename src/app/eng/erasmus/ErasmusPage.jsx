// emu-uni\src\app\eng\erasmus\ErasmusPage.jsx
'use client';

import React, { useState } from 'react';
import { Globe, BookOpen, Award, Users, MapPin, Calendar, Download, FileText, ExternalLink, Coffee, Book } from 'lucide-react';
import './erasmus.css';

export default function ErasmusPage({ brandColors }) {
    const [activeTab, setActiveTab] = useState('about');

    // If brand colors are not provided, use new defaults
    const brandColor = brandColors?.primary || '#6b0e55';      // New primary color
    const brandColorLight = brandColors?.light || '#8f3178';   // New light shade
    const brandColorLighter = brandColors?.lighter || '#f9eef5'; // New lightest shade (background)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden shadow-md">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{ backgroundColor: brandColor }} />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-lg transform rotate-12 animate-spin-slow" style={{ backgroundColor: `${brandColor}10` }} />
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                    Program
                                    <br />
                                    <span className="relative" style={{ color: brandColor }}>
                                        Erasmus+
                                        <div className="absolute -bottom-2 left-0 w-full h-1 transform skew-x-12" style={{ backgroundColor: `${brandColor}20` }} />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                Erasmus+ is a European Union program aimed at supporting projects, partnerships, events, and mobility in the fields of education, training, youth, and sports.
                            </p>

                        </div>

                        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-56 h-56 md:w-80 md:h-80 transform hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-full shadow-2xl flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(to right, ${brandColor}, blue-600)` }}>
                                    <div className="absolute inset-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/eramus-logo.png"
                                            alt="Erasmus+ Logo"
                                            className="w-5/6 h-5/6 object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/eramus-logo.png";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-200 rounded-full animate-float" />
                            <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-200 rounded-full animate-float-delay" />
                            <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full animate-float-delay-2" style={{ backgroundColor: `${brandColor}20` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-20 relative overflow-hidden shadow-md">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full blur-3xl" style={{ backgroundColor: `${brandColor}05` }}></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <div className="inline-block rounded-lg px-3 py-1 text-sm font-medium mb-4" style={{ backgroundColor: `${brandColor}10`, color: brandColor }}>About Erasmus+ Program</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>International Educational <br />Opportunities</h2>
                    </div>

                    {/* Information cards - with smooth transitions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}20, purple-500/20)` }}></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-[#5f1464] to-purple-600 text-white p-3 rounded-lg shadow-md">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">International Cooperation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Erasmus+ provides funding opportunities for cooperation both between European countries (so-called program countries) and between these European countries and partner countries around the world.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    The program supports a variety of projects aimed at achieving long-term impact on universities and higher education systems in partner countries.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg shadow-md">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Educational Initiatives</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Within Erasmus+ CBHE (Capacity Building in Higher Education), the European Union supports projects aimed at enhancing the capacity of higher education institutions.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Capacity building projects are based on multilateral partnerships, primarily between higher education institutions (HEIs) from 34 program countries and more than 150 partner countries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section - Horizontal Cards Layout */}
            <section id="programs" className="py-16 bg-white shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="max-w-lg mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Projects and Opportunities</h2>
                            <p className="text-gray-600">
                                Programs for educational capacity development
                            </p>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p className="inline-flex items-center">
                                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: brandColor }}></span>
                                Support from the European Union
                            </p>
                        </div>
                    </div>

                    {/* Horizontal cards with unified design */}
                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-500 flex items-center justify-center p-8 md:p-6">
                                    <Users className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Student and Staff Mobility</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Study and internship opportunities abroad for students and teachers.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">3-12 months of study</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Internships</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Teaching</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 flex items-center justify-center p-8 md:p-6" style={{ backgroundColor: brandColor }}>
                                    <Globe className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Capacity Building</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Higher education modernization projects through internationalization and cooperation.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Program Development</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Management Modernization</span>
                                        <span className="text-xs py-1 px-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>Connection with Society</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-teal-500 flex items-center justify-center p-8 md:p-6">
                                    <Award className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Joint Master's Programs</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Prestigious programs offered by consortia of universities from different countries.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Study in Different Countries</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Scholarships</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Double Degrees</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-orange-500 flex items-center justify-center p-8 md:p-6">
                                    <Book className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Knowledge Alliances</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/knowledge-alliances"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Collaboration between higher education and business to develop innovative potential.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Innovative Approaches</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Entrepreneurial Mindset</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Knowledge Exchange</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-amber-500 flex items-center justify-center p-8 md:p-6">
                                    <MapPin className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Jean Monnet</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/jean-monnet-actions-stimulating-teaching-and-research-on-the-eu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Initiatives aimed at promoting excellence in teaching and research in the field of European studies.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Modules and Chairs</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Projects and Networks</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Institutional Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8 md:p-6">
                                    <Calendar className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Strategic Partnerships</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/partnerships-for-cooperation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium hover:underline"
                                            style={{ color: brandColor }}
                                        >
                                            Learn More <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Projects aimed at developing and disseminating innovative practices in education at all levels.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Innovative Methods</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Cooperation</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Practice Exchange</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-12 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 relative">
                        <div className="inline-block rounded-full backdrop-blur-sm px-4 py-1 text-sm font-medium mb-4" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                            For Students and Institutions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="relative">
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}>
                                    Benefits of Participating in Erasmus+
                                </span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 opacity-70 rounded-full" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}></span>
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            The Erasmus+ program offers many benefits for students, teachers,
                            and educational institutions around the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Globe className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">International Experience</h3>
                            <p className="text-gray-600">
                                Opportunity to study, teach and conduct research in an international environment, get acquainted with different cultures and teaching methods.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Skills Development</h3>
                            <p className="text-gray-600">
                                Improvement of language competencies, intercultural skills, adaptability, independence, and increased competitiveness in the job market.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Award className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Prestigious Opportunities</h3>
                            <p className="text-gray-600">
                                Access to high-quality educational programs, recognized diplomas and certificates that are valued by employers worldwide.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Education Modernization</h3>
                            <p className="text-gray-600">
                                For educational institutions — the opportunity to modernize curricula, teaching methods, and administrative processes in accordance with international standards.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <Coffee className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Broadening Horizons</h3>
                            <p className="text-gray-600">
                                Meeting new people, ideas, and perspectives that enrich participants' personal and professional experiences.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}10` }}>
                                <MapPin className="w-7 h-7" style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Support</h3>
                            <p className="text-gray-600">
                                Grants for studying, internships, and living abroad that make international mobility accessible to many students and teachers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}10, purple-500/5)` }}></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    {/* Additional call-to-action block */}
                    <div className="mt-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>

                        <div className="relative p-1 rounded-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}30, ${brandColorLight}30)` }}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-8 md:mb-0 md:mr-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to start your journey with Erasmus+?</h3>
                                    <p className="text-gray-600 max-w-xl">
                                        Learn more about the program’s opportunities and how you can become a part of it.
                                        Contact your university’s international office today!
                                    </p>
                                </div>

                                <a
                                    href="https://erasmus-plus.ec.europa.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center py-3 px-6 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                                >
                                    Official Website
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}