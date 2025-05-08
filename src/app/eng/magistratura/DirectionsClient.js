// app/directions/DirectionsClient.js
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Book, Beaker, Heart, BookOpen, Clock, Globe, DollarSign, User } from 'lucide-react';
import Image from 'next/image';
import parse from 'html-react-parser';
// import PricingAccordion from './PricingAccordion';
import dynamic from 'next/dynamic';

// Dynamic import of popups
const MastersPopup = dynamic(() => import('./MagistraturaPopup'), { ssr: false });
const ResidencyPopup = dynamic(() => import('./OrdinaturaPopup'), { ssr: false });

export default function DirectionsClient({ directions, directionContent, acf }) {
    // For debugging - output data to console
    console.log("Component rendering with data:");
    console.log("acf:", JSON.stringify(acf));
    console.log("acf?.accordion_repeater_2:", acf?.accordion_repeater_2);
    console.log("typeof acf:", typeof acf);

    // Problem solution - convert string to object if acf came as a string
    if (typeof acf === 'string') {
        try {
            acf = JSON.parse(acf);
            console.log("acf after parsing:", acf);
        } catch (e) {
            console.error("Error parsing acf:", e);
        }
    }

    const [activeDirection, setActiveDirection] = useState('Pharmacy');
    const [activeTab, setActiveTab] = useState('medical');
    const [showPopup, setShowPopup] = useState(false);

    const scrollToDirectionContent = () => {
        if (window.innerWidth < 768) {
            const element = document.getElementById('direction-content');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // Brand colors - updated!
    const brandColor = '#6b0e55';
    const brandColorLight = '#8f3178';
    const brandColorLighter = '#f9eef5';

    // Advantages
    const advantages = [
        {
            title: 'International Practice',
            description: 'Internships in leading European clinics',
            icon: <Globe size={24} />,
        },
        {
            title: 'Experienced Specialists',
            description: 'Training under professional guidance',
            icon: <User size={24} />,
        },
        {
            title: 'Modern Equipment',
            description: 'Access to advanced technologies',
            icon: <Beaker size={24} />,
        },
        {
            title: 'Employment Assistance',
            description: 'Support in career building',
            icon: <Award size={24} />,
        },
    ];

    // When active tab changes, update active direction
    useEffect(() => {
        console.log("Active tab changed to:", activeTab);

        // If tab is "business" and there are business directions
        if (activeTab === 'business' && acf && acf.accordion_repeater_2 && acf.accordion_repeater_2.length > 0) {
            console.log("Setting first business direction:", acf.accordion_repeater_2[0].accordion_title_eng);
            setActiveDirection(acf.accordion_repeater_2[0].accordion_title_eng);
        }
        // If tab is "medical" and there are medical directions
        else if (activeTab === 'medical' && directions && Object.keys(directions).length > 0) {
            const firstDirection = Object.keys(directions)[0];
            console.log("Setting first med direction:", firstDirection);
            setActiveDirection(firstDirection);
        }
    }, [activeTab, directions, acf]);

    // Choose current content to display in med. section
    const currentDirection = directionContent[activeDirection] || directionContent['Pharmacy'] || null;

    const currentBusinessDirection = activeTab === 'business' && acf?.accordion_repeater_2
        ? acf.accordion_repeater_2.find(item => item.accordion_title_eng === activeDirection)
        : null;

    const tabs = [
        { id: 'medical', name: acf?.med_napravleniya_eng || 'Medical School' },
        { id: 'business', name: acf?.business_napravleniya_eng || 'Business and Social School' },
    ];

    // Function to open the corresponding popup
    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section with background image */}
            <div className="relative md:h-[40vh] flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(rgba(107, 14, 85, 0.39), rgba(107, 14, 85, 0.66)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/magistratua-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4 mb-10">
                    <h1 className="text-5xl font-bold text-white mt-6 mb-4">Master's and Residency Programs</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="mb-12 text-xl text-white max-w-3xl">With us, you'll gain an in-demand specialty and practice in leading clinics and organizations</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>

            {/* Advantages - visual blocks */}
            <div className="max-w-screen-xl mx-auto px-6 -mt-16 md:mb-16 mb-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {advantages.map((adv, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: brandColorLighter }}>
                                <div style={{ color: brandColor }}>{adv.icon}</div>
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>{adv.title}</h3>
                            <p className="text-gray-600">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-4">
                {/* Intro text with decorative elements */}
                {/* Pricing Accordion */}
                {/* <PricingAccordion /> */}

                {/* Tabs - styled */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row gap-[10px] md:inline-flex p-2 bg-gray-100 rounded-xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 border-2 ${activeTab === tab.id
                                    ? 'text-white'
                                    : 'bg-white hover:border-opacity-100'
                                    }`}
                                style={{
                                    backgroundColor: activeTab === tab.id ? brandColor : 'white',
                                    color: activeTab === tab.id ? 'white' : '#666',
                                    borderColor: activeTab === tab.id ? brandColor : brandColor,
                                    borderOpacity: activeTab === tab.id ? '1' : '0.5',
                                    margin: '0 4px'
                                }}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Layout */}
                <div className="md:flex gap-6">
                    {/* Direction Sidebar - styled */}
                    <div className="md:w-1/4 md:mb-[0] mb-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-5 text-white font-medium text-center relative" style={{ backgroundColor: brandColor }}>
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                <h3 className="text-xl font-bold relative z-10">Programs</h3>
                            </div>
                            <div className="py-2">
                                {activeTab === 'medical' ? (
                                    // For medical school - use directions
                                    directions && Object.keys(directions).map((direction) => (
                                        <button
                                            key={direction}
                                            onClick={() => {
                                                setActiveDirection(direction);
                                                scrollToDirectionContent();
                                            }}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: activeDirection === direction ? brandColorLighter : 'transparent',
                                                borderLeft: activeDirection === direction ? `4px solid ${brandColor}` : '4px solid transparent',
                                            }}
                                        >
                                            <div className="p-2 rounded-full mr-3" style={{ backgroundColor: brandColorLighter }}>
                                                <Book size={16} style={{ color: brandColor }} />
                                            </div>
                                            <span
                                                style={{ color: activeDirection === direction ? brandColor : '#333', fontWeight: activeDirection === direction ? '500' : '400' }}
                                            >
                                                {direction}
                                            </span>
                                        </button>
                                    ))
                                ) : (
                                    // For business school - use acf.accordion_repeater_2
                                    acf && acf.accordion_repeater_2 && acf.accordion_repeater_2.length > 0 ? acf.accordion_repeater_2.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setActiveDirection(item.accordion_title_eng);
                                                scrollToDirectionContent();
                                            }}
                                            className="w-full text-left px-4 py-3 flex items-center transition-all relative overflow-hidden"
                                            style={{
                                                backgroundColor: activeDirection === item.accordion_title_eng ? brandColorLighter : 'transparent',
                                                borderLeft: activeDirection === item.accordion_title_eng ? `4px solid ${brandColor}` : '4px solid transparent',
                                            }}
                                        >
                                            {item.title_icon ? (
                                                <div className="bg-[#8f3178] p-[7px] rounded-full mr-3">
                                                    <Image src={item.title_icon} alt={`${item.accordion_title_eng} icon`} width={20} height={20} className="" />
                                                </div>
                                            ) : (
                                                <div className="p-2 rounded-full mr-3" style={{ backgroundColor: brandColorLighter }}>
                                                    <Book size={16} style={{ color: brandColor }} />
                                                </div>
                                            )}
                                            <span
                                                style={{ color: activeDirection === item.accordion_title_eng ? brandColor : '#333', fontWeight: activeDirection === item.accordion_title_eng ? '500' : '400' }}
                                            >
                                                {item.accordion_title_eng}
                                            </span>
                                        </button>
                                    )) : (
                                        <div className="px-4 py-3 text-center text-gray-500">
                                            No available programs
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Direction Content - with design elements */}
                    <div className="md:w-3/4" id="direction-content">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Header with background */}
                            <div
                                className="p-8 text-white relative"
                                style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})`, backgroundSize: 'cover' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'white' }}></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: 'white' }}></div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
                                    {activeTab === 'medical'
                                        ? (currentDirection?.title || activeDirection)
                                        : activeDirection}
                                </h2>
                                <p className="text-white text-opacity-80 relative z-10 max-w-2xl">Become a highly qualified specialist with EMU University!</p>
                            </div>

                            <div className="p-4 md:p-8">
                                {/* Info cards */}
                                {activeTab === 'medical' && currentDirection?.stats && (
                                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                                        {currentDirection.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                                <p className="text-xl font-bold" style={{ color: brandColor }}>{stat.value}</p>
                                                <p className="text-gray-600 text-sm">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Price block for business directions */}
                                {activeTab === 'business' && (
                                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                                        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                            <p className="text-xl font-bold" style={{ color: brandColor }}>
                                                {acf?.accordion_repeater_2?.find(item => item.accordion_title_eng === activeDirection)?.semester_price || 'Not specified'}
                                            </p>
                                            <p className="text-gray-600 text-sm">Cost per semester</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                                            <p className="text-xl font-bold" style={{ color: brandColor }}>
                                                {acf?.accordion_repeater_2?.find(item => item.accordion_title_eng === activeDirection)?.full_price || 'Not specified'}
                                            </p>
                                            <p className="text-gray-600 text-sm">Cost per academic year</p>
                                        </div>
                                    </div>
                                )}

                                {/* Main content */}
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="hidden md:flex mr-4 mt-1">
                                            <Book size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Program Description</h3>
                                            <div className="text-gray-700 direction-fetch-text prose prose-headings:text-[#6b0e55] prose-strong:text-[#6b0e55]">
                                                {activeTab === 'medical'
                                                    ? (currentDirection?.description && parse(currentDirection.description, {
                                                        replace: domNode => {
                                                            if (domNode.type === 'tag' && (domNode.name === 'p' || domNode.name === 'ul' || domNode.name === 'ol' || domNode.name === 'li' || domNode.name === 'strong')) {
                                                                return domNode; // Keep p, ul, li and strong tags
                                                            }
                                                        }
                                                    }))
                                                    : (acf && acf.accordion_repeater_2 &&
                                                        acf.accordion_repeater_2.find(item => item.accordion_title_eng === activeDirection)?.text_eng &&
                                                        parse(acf.accordion_repeater_2.find(item => item.accordion_title_eng === activeDirection).text_eng, {
                                                            replace: domNode => {
                                                                if (domNode.type === 'tag' && (domNode.name === 'p' || domNode.name === 'ul' || domNode.name === 'ol' || domNode.name === 'li' || domNode.name === 'strong')) {
                                                                    return domNode; // Keep p, ul, li and strong tags
                                                                }
                                                            }
                                                        })
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Registration button - updated to open popups */}
                                <div className="flex justify-center mt-4 md:mt-8">
                                    <button
                                        className="pop-form-trigger- flex items-center justify-center bg-[#6B0E55] text-white font-medium py-3 px-5 rounded-full text-sm shadow-md transition-all hover:bg-[#5a0b49]"
                                        onClick={() => setShowPopup(true)}
                                    >
                                        Registration
                                        <ChevronRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mt-12 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: brandColor }}></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, 30%)' }}></div>
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(30%, -30%)' }}></div>

                    <p className="mb-4 text-lg leading-relaxed relative z-10">
                        With us, you will gain an in-demand specialty, practice in leading private and public clinics and organizations in our capital under the guidance of experienced specialists, as well as{' '}
                        <span className="font-semibold" style={{ color: brandColor }}>internships in leading organizations, clinics, and universities in European countries</span>*
                    </p>
                    <p className="font-medium">Don't miss your opportunity for self-realization, we are opening enrollment in the following undergraduate programs:</p>
                </div>

                {/* Contact Info */}
                {acf?.pricing_info_eng ? (
                    <div className="mt-12 mb-12 bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                        <div className="hidden md:flex text-3xl p-4 rounded-full" style={{ backgroundColor: brandColorLighter, color: brandColor }}>
                            ℹ️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: brandColor }}>Need a consultation?</h3>
                            <div>{parse(acf.pricing_info_eng)}</div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-12 mb-12 bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                        <div className="hidden md:flex text-3xl p-4 rounded-full" style={{ backgroundColor: brandColorLighter, color: brandColor }}>
                            ℹ️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: brandColor }}>Need a consultation?</h3>
                            <p>
                                Get a consultation on faculties, admissions, and entrance exams by calling us:{' '}
                                <strong style={{ color: brandColor }}>+998(78) 147-00-07</strong>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Registration popups */}
            {showPopup && activeTab === 'medical' && (
                <ResidencyPopup
                    isOpen={showPopup}
                    onClose={() => setShowPopup(false)}
                    direction={activeDirection}
                />
            )}

            {showPopup && activeTab === 'business' && (
                <MastersPopup
                    isOpen={showPopup}
                    onClose={() => setShowPopup(false)}
                    direction={activeDirection}
                />
            )}

            {/* Add animation styles for popups and rich-text content formatting */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }
                
                /* Styles for rich-text content */
                .direction-fetch-text ul {
                    list-style-type: disc;
                    margin-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                .direction-fetch-text ol {
                    list-style-type: decimal;
                    margin-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                .direction-fetch-text li {
                    margin-bottom: 0.5rem;
                }
                .direction-fetch-text p {
                    margin-bottom: 1rem;
                }
                .direction-fetch-text strong {
                    font-weight: 700;
                }
                #direction-content {
                    scroll-margin-top: 90px;
                }
            `}</style>
        </div>
    );
}