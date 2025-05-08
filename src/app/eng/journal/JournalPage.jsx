// // JournalPage.jsx
'use client';

import React, { useState } from 'react';
import { Book, BookOpen, Download, FileText, Users, ChevronRight, Menu, Images } from 'lucide-react';
import ArticleSubmissionForm from './ArticleSubmissionForm';
import './journal.css';

export default function JournalPage({ pageData, brandColors }) {
    const [isArticleFormOpen, setIsArticleFormOpen] = useState(false);

    // If brand colors are not provided, use new defaults
    const brandColor = brandColors?.primary || '#6b0e55';      // New primary color
    const brandColorLight = brandColors?.light || '#8f3178';   // New light shade
    const brandColorLighter = brandColors?.lighter || '#f9eef5'; // New lightest shade (background)

    // This would be from the server component
    const { acf } = pageData || {};

    const title = acf?.zagolovok_straniczy_ang || 'Journal';
    const description = acf?.kratkoe_opisanie_ang || '';
    const bannerCoverUrl = acf?.oblozhka_na_bannere?.url || '';
    const journals = acf?.stati_v_zhurnale?.map((journal) => ({
        id: journal.fajl_zhurnala.ID,
        number: journal.nazvanie_ang.match(/№(\d+)/)?.[1] || 'Unknown',
        year: journal.god,
        downloadUrl: journal.fajl_zhurnala.url,
        coverUrl: journal.oblozhka.url,
        name: journal.nazvanie_ang // Adding journal name
    })) || [];

    const editorialBoard = acf?.testovyj_blok_info_ang || {};
    const rules = acf?.testovyj_blok_info_ang?.spisok_pravil || {};
    const rulesFileUrl = acf?.testovyj_blok_info_ang?.fajl_pravil_oformleniya?.url || '';

    const titleWords = title.split(' ');
    const mainTitle = titleWords.slice(0, 2).join(' ');
    const highlightedTitle = titleWords.slice(2).join(' ');

    // Unique years for filtering
    const years = [...new Set(journals.map(j => j.year))].sort((a, b) => b - a);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ backgroundColor: brandColorLighter }} />
                    <div className="absolute top-40 right-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" style={{ backgroundColor: `${brandColorLight}40` }} />
                    <div className="absolute top-16 left-16 w-20 h-20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{ backgroundColor: brandColor }} />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-lg transform rotate-12 animate-spin-slow" style={{ backgroundColor: `${brandColor}10` }} />
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                    {mainTitle}
                                    <br />
                                    <span className="relative" style={{ color: brandColor }}>
                                        {highlightedTitle}
                                        <div className="absolute -bottom-2 left-0 w-full h-1 transform skew-x-12" style={{ backgroundColor: `${brandColor}20` }} />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                {description}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={() => setIsArticleFormOpen(true)}
                                    className="transition-all px-8 py-3 text-white rounded-full hover:bg-opacity-90 hover:-translate-y-1 duration-300 ease-in-out"
                                    style={{ backgroundColor: brandColor }}
                                >
                                    Submit Article
                                </button>

                                <button
                                    onClick={() => {
                                        const section = document.getElementById("journal-list");
                                        if (section) {
                                            const top = section.getBoundingClientRect().top + window.pageYOffset - 90;
                                            window.scrollTo({ top, behavior: "smooth" });
                                        }
                                    }}
                                    className="transition-all px-8 py-3 border-2 rounded-full hover:text-white hover:-translate-y-1 duration-300 ease-in-out"
                                    style={{
                                        borderColor: brandColor,
                                        color: brandColor,
                                        backgroundColor: 'white',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = brandColor;
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'white';
                                        e.currentTarget.style.color = brandColor;
                                    }}
                                >
                                    View Journals
                                </button>
                            </div>
                        </div>

                        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-56 h-72 md:w-72 md:h-96 transform hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-lg shadow-2xl transform perspective-1000 rotate-y-5 animate-book-hover"
                                    style={{
                                        background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`
                                    }}>
                                    <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                                        <img
                                            src={bannerCoverUrl}
                                            alt="Journal cover"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full animate-float" style={{ backgroundColor: brandColorLighter }} />
                            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full animate-float-delay" style={{ backgroundColor: `${brandColorLight}40` }} />
                            <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full animate-float-delay-2" style={{ backgroundColor: `${brandColor}20` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Journal Grid */}
            <div id="journal-list" className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {journals.map((journal) => (
                        <div key={journal.id} className="group cursor-pointer">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2">
                                <div className="aspect-w-3 aspect-h-4">
                                    <img
                                        src={journal.coverUrl}
                                        alt={`Journal cover ${journal.year} №${journal.number}`}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                                    <h3 className="text-base md:text-base font-bold mb-3">
                                        {journal.name || 'JOURNAL OF HUMANITIES AND NATURAL SCIENCES'}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm md:text-base">{journal.year}</span>
                                        <a
                                            href={journal.downloadUrl}
                                            className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download className="w-4 h-4" />
                                            <span className="text-xs md:text-sm font-medium">Download</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Editorial Board */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20">
                    <div className="w-full md:w-1/3">
                        <img
                            src={editorialBoard.spisok_redakczii?.url}
                            alt="Editorial Team"
                            className="rounded-xl w-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
                        <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{editorialBoard.zagolovok_1}</h4>
                                    <p className="text-sm md:text-base text-gray-600">{editorialBoard.opisanie_1}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{editorialBoard.zagolovok_2}</h4>
                                    <p className="text-sm md:text-base text-gray-600">{editorialBoard.opisanie_2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{editorialBoard.zagolovok_3}</h4>
                                    <p className="text-sm md:text-base text-gray-600">{editorialBoard.opisanie_3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Combined Rules Section */}
            <div className="bg-white py-12 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{rules.zagolovok_pravil}</h2>
                        <div className="w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: brandColor }}></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">{rules.kratkoe_opisanie}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColor}10` }}>
                                    <FileText className="w-6 h-6" style={{ color: brandColor }} />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">{rules.zagolovok_bloka_1}</h3>
                            </div>
                            <div
                                className="text-sm md:text-base text-gray-600"
                                dangerouslySetInnerHTML={{ __html: rules.opisanie_bloka_1 }}
                            />
                        </div>
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColor}10` }}>
                                    <BookOpen className="w-6 h-6" style={{ color: brandColor }} />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">{rules.zagolovok_bloka_2}</h3>
                            </div>
                            <div
                                className="text-sm md:text-base text-gray-600"
                                dangerouslySetInnerHTML={{ __html: rules.opisanie_bloka_2 }}
                            />
                        </div>
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColor}10` }}>
                                    <Images className="w-6 h-6" style={{ color: brandColor }} />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">{rules.zagolovok_bloka_3}</h3>
                            </div>
                            <div
                                className="text-sm md:text-base text-gray-600"
                                dangerouslySetInnerHTML={{ __html: rules.opisanie_bloka_3 }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a
                            href={rulesFileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 rounded-full transition-colors"
                            style={{
                                borderColor: brandColor,
                                color: brandColor,
                                backgroundColor: 'white',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = brandColor;
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = brandColor;
                            }}
                        >
                            <FileText className="w-5 h-5 mr-2" />
                            <span className="text-sm md:text-base">View Rules</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Article Submission Form Popup */}
            <ArticleSubmissionForm
                isOpen={isArticleFormOpen}
                onClose={() => setIsArticleFormOpen(false)}
                brandColors={brandColors}
            />
        </div>
    );
}