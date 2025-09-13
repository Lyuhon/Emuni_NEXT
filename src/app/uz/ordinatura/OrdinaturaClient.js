'use client'
import ApplicationModal from './ApplicationModal';
import style from './styles.css';
import { useState, useRef } from 'react';
import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital, ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function OrdinaturaClient({ categories, programs }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const programsRef = useRef(null);
    const programDetailsRef = useRef(null);

    // Дефолтные иконки для каждой категории
    const defaultIcons = {
        surgery: Heart,
        pediatric: Users,
        therapeutic: Stethoscope,
        stomatology: Brain
    };

    // попап
    const [showApplicationModal, setShowApplicationModal] = useState(false);

    const filteredPrograms = programs.filter(program => program.category === selectedCategory);

    const getBenefitColor = (benefit) => {
        if (benefit.includes('Стипендия') || benefit.includes('Stipendiya')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
        if (benefit.includes('Гранты') || benefit.includes('Grant')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
    };

    const resetToCategories = () => {
        setSelectedCategory(null);
        setSelectedProgram(null);
    };

    const scrollToPrograms = () => {
        if (programsRef.current) {
            const elementTop = programsRef.current.getBoundingClientRect().top;
            const offset = window.innerWidth >= 768 ? 160 : 110; // 160px для ПК, 100px для мобилки
            const offsetPosition = elementTop + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const selectProgram = (program) => {
        setSelectedProgram(program);
        setTimeout(() => {
            if (programDetailsRef.current) {
                const elementTop = programDetailsRef.current.getBoundingClientRect().top;
                const offset = window.innerWidth >= 768 ? 160 : 110; // 160px для ПК, 100px для мобилки
                const offsetPosition = elementTop + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 500);
    };

    // Функция для получения иконки программы
    const getProgramIcon = (program) => {
        if (program.iconUrl) {
            return () => (
                <img
                    src={program.iconUrl}
                    alt={program.title}
                    className="w-6 h-6 object-contain"
                />
            );
        }
        // Возвращаем дефолтную иконку на основе категории
        return defaultIcons[program.category] || BookOpen;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/magistratua-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ordinatura dasturlari</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-white max-w-3xl">
                        Diplomdan keyingi professional tibbiy ta'lim dasturlari
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className={`mb-8 transition-all duration-500 ${(selectedCategory || selectedProgram) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <div className="md:flex hidden items-center gap-2 text-sm text-gray-600">
                        <button
                            onClick={resetToCategories}
                            className="hover:text-[#6b0e55] transition-colors duration-300"
                        >
                            Kategoriyalar
                        </button>
                        {selectedCategory && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <button
                                    onClick={scrollToPrograms}
                                    className={`hover:text-[#6b0e55] transition-colors duration-300 ${!selectedProgram ? 'text-[#6b0e55] font-medium' : ''}`}
                                >
                                    {categories.find(cat => cat.id === selectedCategory)?.name}
                                </button>
                            </>
                        )}
                        {selectedProgram && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <span className="text-[#6b0e55] font-medium">{selectedProgram.title}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Step 1: Category Selection */}
                <div className={`transition-all duration-700 ease-in-out ${selectedProgram
                    ? 'opacity-100 translate-y-0 scale-95 md:mb-8 mb-4'
                    : 'opacity-100 translate-y-0 scale-100'
                    }`}>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Yo'nalishni tanlang</h2>
                        <p className="text-gray-600 mb-8">Sizni qiziqtirgan o'quv sohasini tanlang</p>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                            {categories.map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setSelectedCategory(category.id);
                                        setTimeout(() => {
                                            scrollToPrograms();
                                        }, 300);
                                    }}
                                    className={`group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-300 ${selectedCategory === category.id ? 'ring-1 ring-[#6b0e55] border-[#6b0e55] shadow-lg' : ''
                                        }`}
                                >
                                    <h3 className="text-sx font-[600] text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step 2: Program Selection */}
                <div ref={programsRef} className={`transition-all duration-700 ease-in-out ${selectedCategory && !selectedProgram
                    ? 'opacity-100 translate-y-0 scale-100 animate-slide-in-programs'
                    : selectedProgram
                        ? 'opacity-100 translate-y-0 scale-95- mb-8'
                        : 'opacity-0 translate-y-8- scale-95- pointer-events-none p-0 m-0 h-0 overflow-hidden'
                    }`}>
                    {selectedCategory && (
                        <div>
                            <div className="text-center mb-8 mt-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    "{categories.find(cat => cat.id === selectedCategory)?.name}" kategoriyasidan yo'nalishni tanlang
                                </h2>
                                <p className="text-gray-600">
                                    <span className="font-semibold text-[#6b0e55]">{filteredPrograms.length}</span> ta yo'nalish topildi
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredPrograms.map((program, index) => {
                                    const IconComponent = getProgramIcon(program);
                                    return (
                                        <button
                                            key={program.id}
                                            onClick={() => selectProgram(program)}
                                            className={`group relative p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-300 text-left animate-slide-in-program-card ${selectedProgram?.id === program.id ? 'ring-1 ring-[#6b0e55] border-[#6b0e55] shadow-lg' : ''
                                                }`}
                                            style={{
                                                animationDelay: `${index * 100}ms`
                                            }}
                                        >
                                            {/* Продолжительность в правом верхнем углу */}
                                            <div className="absolute top-6 right-6 flex items-center gap-1 bg-[#6b0e55]/10 px-2 py-1 rounded-md">
                                                <Clock className="w-3 h-3 text-[#6b0e55] mt-[-1px]" />
                                                <span className="text-xs text-[#6b0e55] font-medium">{program.duration}</span>
                                            </div>
                                            <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6b0e55]/20 transition-all duration-300">
                                                <IconComponent className="w-6 h-6 text-[#6b0e55]" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300">
                                                {program.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                                                {program.description}
                                            </p>


                                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                                <div className="text-right">
                                                    <div className="text-sm font-semibold text-[#6b0e55]">
                                                        {parseInt(program.yearPrice.replace(/\s/g, '')).toLocaleString()} <span className='text-xs font-[400] text-gray-500'> so'm/ yil</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Step 3: Program Details */}
                <div ref={programDetailsRef} className={`transition-all duration-700 ease-in-out ${selectedProgram
                    ? 'opacity-100 translate-y-0 scale-100 animate-slide-in-details'
                    : 'opacity-0 translate-y-8- scale-95 pointer-events-none'
                    }`}>
                    {selectedProgram && (
                        <div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500">
                                {/* Program Header */}
                                <div className="bg-gradient-to-r from-[#6b0e55] to-[#5a0b47] p-8 text-white">
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl md:flex hidden items-center justify-center">
                                            {(() => {
                                                const IconComponent = getProgramIcon(selectedProgram);
                                                return <IconComponent className="w-8 h-8 text-white" />;
                                            })()}
                                        </div>
                                        <div className="flex-1">
                                            <h1 className="md:text-2xl text-xl font-bold mb-2">{selectedProgram.title}</h1>
                                            <p className="md:text-base text-sm opacity-90">{selectedProgram.description}</p>
                                            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                                                <span className="px-3 py-1 bg-white/20 rounded-full">
                                                    {categories.find(cat => cat.id === selectedProgram.category)?.name}
                                                </span>

                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProgram.benefits.map((benefit, index) => (
                                                        <span
                                                            key={index}
                                                            className={getBenefitColor(benefit)}
                                                        >
                                                            {benefit}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Content */}
                                <div className="md:p-8 p-4">
                                    <div className="grid lg:grid-cols-2 md:gap-8 gap-2">
                                        {/* Left Column */}
                                        <div className="space-y-6">
                                            {/* Duration Details */}
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">O'quv muddati</h3>
                                                <div className="bg-gray-50 rounded-lg p-4 border border-[#6b0e55]/20">
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-5 h-5 text-[#6b0e55]" />
                                                        <span className="font-semibold text-[#6b0e55]">{selectedProgram.duration}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Amaliyot va diplom loyihasi bilan to'liq dastur
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Available Specialties */}
                                            {selectedProgram.availableFor && selectedProgram.availableFor.length > 0 && (
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Quyidagi yo'nalishlarda bakalavr diplomiga ega mutaxassislar uchun mavjud:</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProgram.availableFor.map((specialty, index) => {
                                                            const colors = [
                                                                'bg-blue-100 text-blue-800',
                                                                'bg-green-100 text-green-800',
                                                                'bg-purple-100 text-purple-800',
                                                                'bg-pink-100 text-pink-800',
                                                                'bg-indigo-100 text-indigo-800',
                                                                'bg-yellow-100 text-yellow-800',
                                                                'bg-red-100 text-red-800',
                                                                'bg-orange-100 text-orange-800',
                                                                'bg-teal-100 text-teal-800'
                                                            ];
                                                            const colorClass = colors[index % colors.length];

                                                            return (
                                                                <span
                                                                    key={index}
                                                                    className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}
                                                                >
                                                                    {specialty}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-6">
                                            {/* Pricing */}
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">O'qish narxi</h3>
                                                <div className="space-y-4">
                                                    <div className="bg-[#6b0e55]/5 rounded-lg p-4 border border-[#6b0e55]/20">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <span className="text-sm text-gray-600">Semestr uchun:</span>
                                                                <div className="md:text-xl text-sx font-bold text-[#6b0e55]">
                                                                    {parseInt(selectedProgram.semesterPrice.replace(/\s/g, '')).toLocaleString()} <span className='text-sm md:md:text-xl'>so'm</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-gray-600">Yil uchun:</span>
                                                                <div className="md:text-xl text-sx font-bold text-[#6b0e55]">
                                                                    {parseInt(selectedProgram.yearPrice.replace(/\s/g, '')).toLocaleString()} <span className='text-sm md:md:text-xl'>so'm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Full Description */}
                                    {selectedProgram.fullDescription && (
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mt-4 mb-3">Dastur tavsifi</h3>
                                            <div
                                                className="text-sm text-gray-900 prose prose-sm max-w-none desc-content"
                                                dangerouslySetInnerHTML={{ __html: selectedProgram.fullDescription }}
                                            />
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="md:mt-8 mt-4 pt-6 border-t border-gray-200">
                                        <div className="flex flex-col sm:flex-row md:gap-8 gap-4">
                                            <button
                                                onClick={() => setShowApplicationModal(true)}
                                                className="flex-1 bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300"
                                            >
                                                Hujjat topshirish
                                            </button>
                                            <a href="tel:+998(78) 147-00-07" className="text-center flex-1 border border-[#6b0e55] text-[#6b0e55] py-3 px-6 rounded-lg font-medium hover:bg-[#6b0e55] hover:text-white transition-all duration-300">
                                                Maslahat olish
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom CTA - показываем только на первом этапе */}
                <div className={`mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-500 ${!selectedCategory
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none p-0 m-0 h-0 overflow-hidden'
                    }`}>
                    <div className="max-w-2xl mx-auto">
                        <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2025/2026 o'quv yili uchun hujjat topshirish
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Qabul komissiyasi 2025 yil 25 avgustgacha hujjatlarni qabul qiladi. O'quv dasturini tanlash bo'yicha shaxsiy maslahat oling.
                        </p>
                        <a href="tel:+998(78) 147-00-07" className="text-center px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300">
                            Maslahat olish
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-in-programs {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in-program-card {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in-details {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-in-programs {
                    animation: slide-in-programs 0.6s ease-out forwards;
                }

                .animate-slide-in-program-card {
                    animation: slide-in-program-card 0.5s ease-out forwards;
                    opacity: 0;
                }

                .animate-slide-in-details {
                    animation: slide-in-details 0.6s ease-out forwards;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .desc-content p {
                    margin-bottom: 15px !important;
                }
            `}</style>

            <ApplicationModal
                isOpen={showApplicationModal}
                onClose={() => setShowApplicationModal(false)}
                programs={programs}
                categories={categories}
                selectedProgram={selectedProgram}
            />

        </div>
    );
}