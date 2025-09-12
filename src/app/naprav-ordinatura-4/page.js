// // 'use client'

// // import { useState } from 'react';
// // import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital, ArrowLeft, ChevronRight } from 'lucide-react';

// // export default function OrdinaturaPage() {
// //     const [selectedCategory, setSelectedCategory] = useState(null);
// //     const [selectedProgram, setSelectedProgram] = useState(null);

// //     const categories = [
// //         { id: 'medicine', name: 'Медицина', icon: GraduationCap, color: 'bg-red-500' },
// //         { id: 'business', name: 'Бизнес', icon: Building2, color: 'bg-blue-500' },
// //         { id: 'international', name: 'International', icon: Globe, color: 'bg-green-500' }
// //     ];

// //     const originalPrograms = [
// //         {
// //             id: 1,
// //             title: 'Кардиология',
// //             category: 'medicine',
// //             description: 'Углубленное изучение заболеваний сердечно-сосудистой системы с практикой в ведущих клиниках',
// //             semesterPrice: '18 500 000',
// //             yearPrice: '37 000 000',
// //             shift1Price: '18 500 000',
// //             shift2Price: '19 200 000',
// //             duration: '2 года',
// //             icon: Heart,
// //             benefits: ['Стипендия', 'Гранты']
// //         },
// //         {
// //             id: 2,
// //             title: 'Хирургия',
// //             category: 'medicine',
// //             description: 'Комплексная подготовка хирургов с использованием современных технологий и методик',
// //             semesterPrice: '22 800 000',
// //             yearPrice: '45 600 000',
// //             shift1Price: '22 800 000',
// //             shift2Price: '23 500 000',
// //             duration: '3 года',
// //             icon: Stethoscope,
// //             benefits: ['Гранты']
// //         },
// //         {
// //             id: 3,
// //             title: 'Неврология',
// //             category: 'medicine',
// //             description: 'Изучение нервной системы и современных методов диагностики и лечения',
// //             semesterPrice: '17 300 000',
// //             yearPrice: '34 600 000',
// //             shift1Price: '17 300 000',
// //             shift2Price: '18 000 000',
// //             duration: '2 года',
// //             icon: Brain,
// //             benefits: ['Стипендия']
// //         },
// //         {
// //             id: 4,
// //             title: 'Финансовый менеджмент',
// //             category: 'business',
// //             description: 'Управление финансами предприятий и инвестиционными портфелями',
// //             semesterPrice: '15 800 000',
// //             yearPrice: '31 600 000',
// //             shift1Price: '15 800 000',
// //             shift2Price: '16 200 000',
// //             duration: '2 года',
// //             icon: TrendingUp,
// //             benefits: ['Стипендия', 'Гранты']
// //         },
// //         {
// //             id: 5,
// //             title: 'Маркетинг и продажи',
// //             category: 'business',
// //             description: 'Современные стратегии продвижения и digital-маркетинг',
// //             semesterPrice: '16 600 000',
// //             yearPrice: '33 200 000',
// //             shift1Price: '16 600 000',
// //             shift2Price: '17 100 000',
// //             duration: '2 года',
// //             icon: BarChart3,
// //             benefits: ['Стипендия']
// //         },
// //         {
// //             id: 6,
// //             title: 'International Business',
// //             category: 'international',
// //             description: 'Global business strategies and cross-cultural management',
// //             semesterPrice: '28 300 000',
// //             yearPrice: '56 600 000',
// //             shift1Price: '28 300 000',
// //             shift2Price: '29 000 000',
// //             duration: '2 года',
// //             icon: Globe2,
// //             benefits: ['Гранты']
// //         },
// //         {
// //             id: 7,
// //             title: 'Global Healthcare Management',
// //             category: 'international',
// //             description: 'International healthcare systems and management practices',
// //             semesterPrice: '25 900 000',
// //             yearPrice: '51 800 000',
// //             shift1Price: '25 900 000',
// //             shift2Price: '26 500 000',
// //             duration: '2 года',
// //             icon: Hospital,
// //             benefits: ['Стипендия', 'Гранты']
// //         },
// //         {
// //             id: 8,
// //             title: 'Операционный менеджмент',
// //             category: 'business',
// //             description: 'Оптимизация бизнес-процессов и управление цепочками поставок',
// //             semesterPrice: '17 700 000',
// //             yearPrice: '35 400 000',
// //             shift1Price: '17 700 000',
// //             shift2Price: '18 300 000',
// //             duration: '2 года',
// //             icon: Target,
// //             benefits: ['Стипендия']
// //         }
// //     ];

// //     // Увеличиваем массив программ, повторяя их 5 раз
// //     const programs = [];
// //     for (let i = 0; i < 5; i++) {
// //         originalPrograms.forEach((program, index) => {
// //             programs.push({
// //                 ...program,
// //                 id: i * originalPrograms.length + program.id,
// //                 title: `${program.title} ${i > 0 ? `(№${i + 1})` : ''}`
// //             });
// //         });
// //     }

// //     const filteredPrograms = programs.filter(program => program.category === selectedCategory);

// //     const getBenefitColor = (benefit) => {
// //         if (benefit.includes('Стипендия')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
// //         if (benefit.includes('Гранты')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
// //         return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
// //     };

// //     const resetToCategories = () => {
// //         setSelectedCategory(null);
// //         setSelectedProgram(null);
// //     };

// //     const resetToPrograms = () => {
// //         setSelectedProgram(null);
// //     };

// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             {/* Hero Section */}
// //             <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
// //                 background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center'
// //             }}>
// //                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
// //                 <div className="text-center z-10 px-4">
// //                     <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Программы Ординатуры</h1>
// //                     <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
// //                     <p className="text-lg md:text-xl text-white max-w-3xl">
// //                         Профессиональные программы последипломного медицинского образования
// //                     </p>
// //                 </div>
// //                 <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
// //                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
// //                         <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
// //                         <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
// //                         <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
// //                     </svg>
// //                 </div>
// //             </div>

// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //                 {/* Breadcrumb */}
// //                 {(selectedCategory || selectedProgram) && (
// //                     <div className="mb-8">
// //                         <div className="flex items-center gap-2 text-sm text-gray-600">
// //                             <button
// //                                 onClick={resetToCategories}
// //                                 className="hover:text-[#6b0e55] transition-colors"
// //                             >
// //                                 Категории
// //                             </button>
// //                             {selectedCategory && (
// //                                 <>
// //                                     <ChevronRight className="w-4 h-4" />
// //                                     <button
// //                                         onClick={resetToPrograms}
// //                                         className={`hover:text-[#6b0e55] transition-colors ${!selectedProgram ? 'text-[#6b0e55] font-medium' : ''}`}
// //                                     >
// //                                         {categories.find(cat => cat.id === selectedCategory)?.name}
// //                                     </button>
// //                                 </>
// //                             )}
// //                             {selectedProgram && (
// //                                 <>
// //                                     <ChevronRight className="w-4 h-4" />
// //                                     <span className="text-[#6b0e55] font-medium">{selectedProgram.title}</span>
// //                                 </>
// //                             )}
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Step 1: Category Selection */}
// //                 {!selectedCategory && (
// //                     <div className="text-center">
// //                         <h2 className="text-2xl font-bold text-gray-900 mb-2">Выберите напрвление</h2>
// //                         <p className="text-gray-600 mb-8">Выберите интересующую вас область обучения</p>

// //                         <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
// //                             {categories.map((category) => (
// //                                 <button
// //                                     key={category.id}
// //                                     onClick={() => setSelectedCategory(category.id)}
// //                                     className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#6b0e55] transition-all duration-300"
// //                                 >
// //                                     {/* <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
// //                                         <category.icon className="w-8 h-8 text-white" />
// //                                     </div> */}
// //                                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors">
// //                                         {category.name}
// //                                     </h3>
// //                                     <p className="text-gray-600 mt-2">
// //                                         {category.id === 'medicine' && 'Медицинские специальности и клиническая практика'}
// //                                         {category.id === 'business' && 'Управление, финансы и маркетинг'}
// //                                         {category.id === 'international' && 'Международные программы на английском языке'}
// //                                     </p>
// //                                 </button>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Step 2: Program Selection */}
// //                 {selectedCategory && !selectedProgram && (
// //                     <div>
// //                         <div className="text-center mb-8">
// //                             <button
// //                                 onClick={resetToCategories}
// //                                 className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-colors mb-4"
// //                             >
// //                                 <ArrowLeft className="w-4 h-4" />
// //                                 Назад к категориям
// //                             </button>
// //                             <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //                                 Выберите направление в категории "{categories.find(cat => cat.id === selectedCategory)?.name}"
// //                             </h2>
// //                             <p className="text-gray-600">
// //                                 Найдено <span className="font-semibold text-[#6b0e55]">{filteredPrograms.length}</span> направлений
// //                             </p>
// //                         </div>

// //                         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //                             {filteredPrograms.map((program) => (
// //                                 <button
// //                                     key={program.id}
// //                                     onClick={() => setSelectedProgram(program)}
// //                                     className="group p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#6b0e55] transition-all duration-300 text-left"
// //                                 >
// //                                     <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6b0e55]/20 transition-colors">
// //                                         <program.icon className="w-6 h-6 text-[#6b0e55]" />
// //                                     </div>
// //                                     <h3 className="font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors">
// //                                         {program.title}
// //                                     </h3>
// //                                     <p className="text-sm text-gray-600 mt-2 line-clamp-2">
// //                                         {program.description}
// //                                     </p>
// //                                 </button>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Step 3: Program Details */}
// //                 {selectedProgram && (
// //                     <div>
// //                         <div className="mb-8">
// //                             <button
// //                                 onClick={resetToPrograms}
// //                                 className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-colors mb-4"
// //                             >
// //                                 <ArrowLeft className="w-4 h-4" />
// //                                 Назад к направлениям
// //                             </button>
// //                         </div>

// //                         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
// //                             {/* Program Header */}
// //                             <div className="bg-gradient-to-r from-[#6b0e55] to-[#5a0b47] p-8 text-white">
// //                                 <div className="flex items-start gap-6">
// //                                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
// //                                         <selectedProgram.icon className="w-8 h-8 text-white" />
// //                                     </div>
// //                                     <div className="flex-1">
// //                                         <h1 className="text-3xl font-bold mb-2">{selectedProgram.title}</h1>
// //                                         <p className="text-lg opacity-90">{selectedProgram.description}</p>
// //                                         <div className="flex items-center gap-4 mt-4 text-sm">
// //                                             <div className="flex items-center gap-1">
// //                                                 <Clock className="w-4 h-4" />
// //                                                 {selectedProgram.duration}
// //                                             </div>
// //                                             <span className="px-3 py-1 bg-white/20 rounded-full">
// //                                                 {categories.find(cat => cat.id === selectedProgram.category)?.name}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Program Content */}
// //                             <div className="p-8">
// //                                 <div className="grid lg:grid-cols-2 gap-8">
// //                                     {/* Left Column */}
// //                                     <div className="space-y-6">
// //                                         {/* Benefits */}
// //                                         <div>
// //                                             <h3 className="text-lg font-bold text-gray-900 mb-3">Льготы и преимущества</h3>
// //                                             <div className="flex flex-wrap gap-2">
// //                                                 {selectedProgram.benefits.map((benefit, index) => (
// //                                                     <span
// //                                                         key={index}
// //                                                         className={getBenefitColor(benefit)}
// //                                                     >
// //                                                         {benefit}
// //                                                     </span>
// //                                                 ))}
// //                                             </div>
// //                                         </div>

// //                                         {/* Duration Details */}
// //                                         <div>
// //                                             <h3 className="text-lg font-bold text-gray-900 mb-3">Продолжительность обучения</h3>
// //                                             <div className="bg-gray-50 rounded-lg p-4">
// //                                                 <div className="flex items-center gap-2">
// //                                                     <Clock className="w-5 h-5 text-[#6b0e55]" />
// //                                                     <span className="font-semibold text-[#6b0e55]">{selectedProgram.duration}</span>
// //                                                 </div>
// //                                                 <p className="text-sm text-gray-600 mt-1">
// //                                                     Полная программа с практикой и дипломным проектом
// //                                                 </p>
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Right Column */}
// //                                     <div className="space-y-6">
// //                                         {/* Pricing */}
// //                                         <div>
// //                                             <h3 className="text-lg font-bold text-gray-900 mb-3">Стоимость обучения</h3>
// //                                             <div className="space-y-4">
// //                                                 <div className="bg-[#6b0e55]/5 rounded-lg p-4 border border-[#6b0e55]/20">
// //                                                     <div className="grid grid-cols-2 gap-4">
// //                                                         <div>
// //                                                             <span className="text-sm text-gray-600">За семестр:</span>
// //                                                             <div className="text-xl font-bold text-[#6b0e55]">{selectedProgram.semesterPrice} сум</div>
// //                                                         </div>
// //                                                         <div>
// //                                                             <span className="text-sm text-gray-600">За год:</span>
// //                                                             <div className="text-xl font-bold text-[#6b0e55]">{selectedProgram.yearPrice} сум</div>
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>

// //                                                 <div className="grid grid-cols-2 gap-4">
// //                                                     <div className="bg-gray-50 rounded-lg p-3">
// //                                                         <span className="text-sm text-gray-600">1 смена:</span>
// //                                                         <div className="font-semibold text-gray-900">{selectedProgram.shift1Price} сум</div>
// //                                                     </div>
// //                                                     <div className="bg-gray-50 rounded-lg p-3">
// //                                                         <span className="text-sm text-gray-600">2 смена:</span>
// //                                                         <div className="font-semibold text-gray-900">{selectedProgram.shift2Price} сум</div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>

// //                                 {/* Action Buttons */}
// //                                 <div className="mt-8 pt-6 border-t border-gray-200">
// //                                     <div className="flex flex-col sm:flex-row gap-4">
// //                                         <button className="flex-1 bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a0b47] transition-colors">
// //                                             Подать документы
// //                                         </button>
// //                                         <button className="flex-1 border border-[#6b0e55] text-[#6b0e55] py-3 px-6 rounded-lg font-medium hover:bg-[#6b0e55] hover:text-white transition-colors">
// //                                             Получить консультацию
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Bottom CTA - показываем только на первом этапе */}
// //                 {!selectedCategory && (
// //                     <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border">
// //                         <div className="max-w-2xl mx-auto">
// //                             <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4" />
// //                             <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                                 Подача документов на 2025/2026 учебный год
// //                             </h2>
// //                             <p className="text-gray-600 mb-6">
// //                                 Приемная комиссия принимает документы до 25 августа 2025 года. Получите персональную консультацию по выбору программы обучения.
// //                             </p>
// //                             <button className="px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-colors">
// //                                 Получить консультацию
// //                             </button>
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }


// 'use client'

// import { useState, useRef } from 'react';
// import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital, ArrowLeft, ChevronRight } from 'lucide-react';

// export default function OrdinaturaPage() {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [selectedProgram, setSelectedProgram] = useState(null);
//     const programsRef = useRef(null);

//     const categories = [
//         { id: 'medicine', name: 'Медицина', color: 'bg-red-500' },
//         { id: 'business', name: 'Бизнес', color: 'bg-blue-500' },
//         { id: 'international', name: 'International', color: 'bg-green-500' }
//     ];

//     const originalPrograms = [
//         {
//             id: 1,
//             title: 'Кардиология',
//             category: 'medicine',
//             description: 'Углубленное изучение заболеваний сердечно-сосудистой системы с практикой в ведущих клиниках',
//             semesterPrice: '18 500 000',
//             yearPrice: '37 000 000',
//             shift1Price: '18 500 000',
//             shift2Price: '19 200 000',
//             duration: '2 года',
//             icon: Heart,
//             benefits: ['Стипендия', 'Гранты']
//         },
//         {
//             id: 2,
//             title: 'Хирургия',
//             category: 'medicine',
//             description: 'Комплексная подготовка хирургов с использованием современных технологий и методик',
//             semesterPrice: '22 800 000',
//             yearPrice: '45 600 000',
//             shift1Price: '22 800 000',
//             shift2Price: '23 500 000',
//             duration: '3 года',
//             icon: Stethoscope,
//             benefits: ['Гранты']
//         },
//         {
//             id: 3,
//             title: 'Неврология',
//             category: 'medicine',
//             description: 'Изучение нервной системы и современных методов диагностики и лечения',
//             semesterPrice: '17 300 000',
//             yearPrice: '34 600 000',
//             shift1Price: '17 300 000',
//             shift2Price: '18 000 000',
//             duration: '2 года',
//             icon: Brain,
//             benefits: ['Стипендия']
//         },
//         {
//             id: 4,
//             title: 'Финансовый менеджмент',
//             category: 'business',
//             description: 'Управление финансами предприятий и инвестиционными портфелями',
//             semesterPrice: '15 800 000',
//             yearPrice: '31 600 000',
//             shift1Price: '15 800 000',
//             shift2Price: '16 200 000',
//             duration: '2 года',
//             icon: TrendingUp,
//             benefits: ['Стипендия', 'Гранты']
//         },
//         {
//             id: 5,
//             title: 'Маркетинг и продажи',
//             category: 'business',
//             description: 'Современные стратегии продвижения и digital-маркетинг',
//             semesterPrice: '16 600 000',
//             yearPrice: '33 200 000',
//             shift1Price: '16 600 000',
//             shift2Price: '17 100 000',
//             duration: '2 года',
//             icon: BarChart3,
//             benefits: ['Стипендия']
//         },
//         {
//             id: 6,
//             title: 'International Business',
//             category: 'international',
//             description: 'Global business strategies and cross-cultural management',
//             semesterPrice: '28 300 000',
//             yearPrice: '56 600 000',
//             shift1Price: '28 300 000',
//             shift2Price: '29 000 000',
//             duration: '2 года',
//             icon: Globe2,
//             benefits: ['Гранты']
//         },
//         {
//             id: 7,
//             title: 'Global Healthcare Management',
//             category: 'international',
//             description: 'International healthcare systems and management practices',
//             semesterPrice: '25 900 000',
//             yearPrice: '51 800 000',
//             shift1Price: '25 900 000',
//             shift2Price: '26 500 000',
//             duration: '2 года',
//             icon: Hospital,
//             benefits: ['Стипендия', 'Гранты']
//         },
//         {
//             id: 8,
//             title: 'Операционный менеджмент',
//             category: 'business',
//             description: 'Оптимизация бизнес-процессов и управление цепочками поставок',
//             semesterPrice: '17 700 000',
//             yearPrice: '35 400 000',
//             shift1Price: '17 700 000',
//             shift2Price: '18 300 000',
//             duration: '2 года',
//             icon: Target,
//             benefits: ['Стипендия']
//         }
//     ];

//     // Увеличиваем массив программ, повторяя их 3 раза для демонстрации
//     const programs = [];
//     for (let i = 0; i < 3; i++) {
//         originalPrograms.forEach((program, index) => {
//             programs.push({
//                 ...program,
//                 id: i * originalPrograms.length + program.id,
//                 title: `${program.title} ${i > 0 ? `(№${i + 1})` : ''}`
//             });
//         });
//     }

//     const filteredPrograms = programs.filter(program => program.category === selectedCategory);

//     const getBenefitColor = (benefit) => {
//         if (benefit.includes('Стипендия')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
//         if (benefit.includes('Гранты')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
//         return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
//     };

//     const resetToCategories = () => {
//         setSelectedCategory(null);
//         setSelectedProgram(null);
//     };

//     const scrollToPrograms = () => {
//         if (programsRef.current) {
//             programsRef.current.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
//                 background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//             }}>
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
//                 <div className="text-center z-10 px-4 animate-fade-in-up">
//                     <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">Программы Ординатуры</h1>
//                     <div className="w-24 h-1 bg-white mx-auto mb-6 animate-expand-width"></div>
//                     <p className="text-lg md:text-xl text-white max-w-3xl animate-fade-in-delayed">
//                         Профессиональные программы последипломного медицинского образования
//                     </p>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
//                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
//                         <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
//                         <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
//                         <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
//                     </svg>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Breadcrumb */}
//                 <div className={`mb-8 transition-all duration-500 ${(selectedCategory || selectedProgram) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <button
//                             onClick={resetToCategories}
//                             className="hover:text-[#6b0e55] transition-colors duration-300 hover:scale-105"
//                         >
//                             Категории
//                         </button>
//                         {selectedCategory && (
//                             <>
//                                 <ChevronRight className="w-4 h-4 transition-transform duration-300" />
//                                 <button
//                                     onClick={scrollToPrograms}
//                                     className={`hover:text-[#6b0e55] transition-all duration-300 hover:scale-105 ${!selectedProgram ? 'text-[#6b0e55] font-medium' : ''}`}
//                                 >
//                                     {categories.find(cat => cat.id === selectedCategory)?.name}
//                                 </button>
//                             </>
//                         )}
//                         {selectedProgram && (
//                             <>
//                                 <ChevronRight className="w-4 h-4 transition-transform duration-300" />
//                                 <span className="text-[#6b0e55] font-medium animate-fade-in">{selectedProgram.title}</span>
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 {/* Step 1: Category Selection - Всегда показывается */}
//                 <div className={`transition-all duration-700 ease-in-out ${selectedProgram
//                     ? 'opacity-100 translate-y-0 scale-95 mb-8'
//                     : 'opacity-100 translate-y-0 scale-100'
//                     }`}>
//                     <div className="text-center">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in-up">Выберите направление</h2>
//                         <p className="text-gray-600 mb-8 animate-fade-in-up-delayed">Выберите интересующую вас область обучения</p>

//                         <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
//                             {categories.map((category, index) => (
//                                 <button
//                                     key={category.id}
//                                     onClick={() => setSelectedCategory(category.id)}
//                                     className={`group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slide-in-card ${selectedCategory === category.id ? 'ring-2 ring-[#6b0e55] border-[#6b0e55] shadow-lg scale-105' : ''
//                                         }`}
//                                     style={{
//                                         animationDelay: `${index * 150}ms`
//                                     }}
//                                 >
//                                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300 mb-2">
//                                         {category.name}
//                                     </h3>
//                                     <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                                         {category.id === 'medicine' && 'Медицинские специальности и клиническая практика'}
//                                         {category.id === 'business' && 'Управление, финансы и маркетинг'}
//                                         {category.id === 'international' && 'Международные программы на английском языке'}
//                                     </p>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Step 2: Program Selection */}
//                 <div ref={programsRef} className={`transition-all duration-700 ease-in-out ${selectedCategory && !selectedProgram
//                     ? 'opacity-100 translate-y-0 scale-100'
//                     : selectedProgram
//                         ? 'opacity-100 translate-y-0 scale-95 mb-8'
//                         : 'opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden'
//                     }`}>
//                     {selectedCategory && (
//                         <div>
//                             <div className="text-center mb-8">
//                                 {!selectedProgram && (
//                                     <button
//                                         onClick={resetToCategories}
//                                         className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-all duration-300 mb-4 hover:scale-105 hover:-translate-x-1"
//                                     >
//                                         <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
//                                         Назад к категориям
//                                     </button>
//                                 )}
//                                 <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in-up">
//                                     Выберите направление в категории "{categories.find(cat => cat.id === selectedCategory)?.name}"
//                                 </h2>
//                                 <p className="text-gray-600 animate-fade-in-up-delayed">
//                                     Найдено <span className="font-semibold text-[#6b0e55] animate-pulse">{filteredPrograms.length}</span> направлений
//                                 </p>
//                             </div>

//                             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                                 {filteredPrograms.map((program, index) => (
//                                     <button
//                                         key={program.id}
//                                         onClick={() => setSelectedProgram(program)}
//                                         className={`group p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-500 text-left hover:-translate-y-1 hover:scale-105 animate-slide-in-card ${selectedProgram?.id === program.id ? 'ring-2 ring-[#6b0e55] border-[#6b0e55] shadow-lg scale-105' : ''
//                                             }`}
//                                         style={{
//                                             animationDelay: `${index * 100}ms`
//                                         }}
//                                     >
//                                         <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6b0e55]/20 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
//                                             <program.icon className="w-6 h-6 text-[#6b0e55] transition-all duration-300 group-hover:scale-110" />
//                                         </div>
//                                         <h3 className="font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300">
//                                             {program.title}
//                                         </h3>
//                                         <p className="text-sm text-gray-600 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
//                                             {program.description}
//                                         </p>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Step 3: Program Details */}
//                 <div className={`transition-all duration-700 ease-in-out ${selectedProgram
//                     ? 'opacity-100 translate-y-0 scale-100'
//                     : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
//                     }`}>
//                     {selectedProgram && (
//                         <div>
//                             <div className="mb-8">
//                                 <button
//                                     onClick={scrollToPrograms}
//                                     className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-all duration-300 mb-4 hover:scale-105 hover:-translate-x-1 animate-fade-in"
//                                 >
//                                     <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
//                                     Назад к направлениям
//                                 </button>
//                             </div>

//                             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden animate-slide-in-up hover:shadow-lg transition-all duration-500">
//                                 {/* Program Header */}
//                                 <div className="bg-gradient-to-r from-[#6b0e55] to-[#5a0b47] p-8 text-white animate-gradient-shift">
//                                     <div className="flex items-start gap-6">
//                                         <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500">
//                                             <selectedProgram.icon className="w-8 h-8 text-white" />
//                                         </div>
//                                         <div className="flex-1">
//                                             <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">{selectedProgram.title}</h1>
//                                             <p className="text-lg opacity-90 animate-fade-in-up-delayed">{selectedProgram.description}</p>
//                                             <div className="flex items-center gap-4 mt-4 text-sm animate-fade-in-up-more-delayed">
//                                                 <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
//                                                     <Clock className="w-4 h-4" />
//                                                     {selectedProgram.duration}
//                                                 </div>
//                                                 <span className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-105">
//                                                     {categories.find(cat => cat.id === selectedProgram.category)?.name}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Program Content */}
//                                 <div className="p-8 animate-fade-in-up-delayed">
//                                     <div className="grid lg:grid-cols-2 gap-8">
//                                         {/* Left Column */}
//                                         <div className="space-y-6">
//                                             {/* Benefits */}
//                                             <div className="animate-slide-in-left">
//                                                 <h3 className="text-lg font-bold text-gray-900 mb-3">Льготы и преимущества</h3>
//                                                 <div className="flex flex-wrap gap-2">
//                                                     {selectedProgram.benefits.map((benefit, index) => (
//                                                         <span
//                                                             key={index}
//                                                             className={`${getBenefitColor(benefit)} hover:scale-110 transition-all duration-300 animate-fade-in cursor-pointer`}
//                                                             style={{
//                                                                 animationDelay: `${index * 100}ms`
//                                                             }}
//                                                         >
//                                                             {benefit}
//                                                         </span>
//                                                     ))}
//                                                 </div>
//                                             </div>

//                                             {/* Duration Details */}
//                                             <div className="animate-slide-in-left-delayed">
//                                                 <h3 className="text-lg font-bold text-gray-900 mb-3">Продолжительность обучения</h3>
//                                                 <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 hover:scale-105 hover:shadow-md">
//                                                     <div className="flex items-center gap-2">
//                                                         <Clock className="w-5 h-5 text-[#6b0e55] animate-spin-slow" />
//                                                         <span className="font-semibold text-[#6b0e55]">{selectedProgram.duration}</span>
//                                                     </div>
//                                                     <p className="text-sm text-gray-600 mt-1">
//                                                         Полная программа с практикой и дипломным проектом
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Right Column */}
//                                         <div className="space-y-6">
//                                             {/* Pricing */}
//                                             <div className="animate-slide-in-right">
//                                                 <h3 className="text-lg font-bold text-gray-900 mb-3">Стоимость обучения</h3>
//                                                 <div className="space-y-4">
//                                                     <div className="bg-[#6b0e55]/5 rounded-lg p-4 border border-[#6b0e55]/20 hover:bg-[#6b0e55]/10 hover:border-[#6b0e55]/30 transition-all duration-300 hover:scale-105 hover:shadow-md">
//                                                         <div className="grid grid-cols-2 gap-4">
//                                                             <div className="hover:scale-105 transition-transform duration-300">
//                                                                 <span className="text-sm text-gray-600">За семестр:</span>
//                                                                 <div className="text-xl font-bold text-[#6b0e55] animate-pulse-slow">{selectedProgram.semesterPrice} сум</div>
//                                                             </div>
//                                                             <div className="hover:scale-105 transition-transform duration-300">
//                                                                 <span className="text-sm text-gray-600">За год:</span>
//                                                                 <div className="text-xl font-bold text-[#6b0e55] animate-pulse-slow">{selectedProgram.yearPrice} сум</div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="grid grid-cols-2 gap-4">
//                                                         <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
//                                                             <span className="text-sm text-gray-600">1 смена:</span>
//                                                             <div className="font-semibold text-gray-900">{selectedProgram.shift1Price} сум</div>
//                                                         </div>
//                                                         <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
//                                                             <span className="text-sm text-gray-600">2 смена:</span>
//                                                             <div className="font-semibold text-gray-900">{selectedProgram.shift2Price} сум</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up-more-delayed">
//                                         <div className="flex flex-col sm:flex-row gap-4">
//                                             <button className="flex-1 bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
//                                                 Подать документы
//                                             </button>
//                                             <button className="flex-1 border border-[#6b0e55] text-[#6b0e55] py-3 px-6 rounded-lg font-medium hover:bg-[#6b0e55] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
//                                                 Получить консультацию
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Bottom CTA - показываем только на первом этапе */}
//                 <div className={`mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-500 ${!selectedCategory
//                     ? 'opacity-100 translate-y-0 scale-100'
//                     : 'opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden'
//                     }`}>
//                     <div className="max-w-2xl mx-auto">
//                         <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4 animate-bounce-slow hover:scale-110 transition-transform duration-300" />
//                         <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up">
//                             Подача документов на 2025/2026 учебный год
//                         </h2>
//                         <p className="text-gray-600 mb-6 animate-fade-in-up-delayed">
//                             Приемная комиссия принимает документы до 25 августа 2025 года. Получите персональную консультацию по выбору программы обучения.
//                         </p>
//                         <button className="px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up-more-delayed">
//                             Получить консультацию
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes fade-in-up {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slide-in-down {
//                     from {
//                         opacity: 0;
//                         transform: translateY(-30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes expand-width {
//                     from {
//                         width: 0;
//                     }
//                     to {
//                         width: 6rem;
//                     }
//                 }

//                 @keyframes slide-in-card {
//                     from {
//                         opacity: 0;
//                         transform: translateY(50px) scale(0.9);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0) scale(1);
//                     }
//                 }

//                 @keyframes slide-in-left {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-50px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes slide-in-right {
//                     from {
//                         opacity: 0;
//                         transform: translateX(50px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes gradient-shift {
//                     0%, 100% {
//                         background-position: 0% 50%;
//                     }
//                     50% {
//                         background-position: 100% 50%;
//                     }
//                 }

//                 @keyframes pulse-slow {
//                     0%, 100% {
//                         opacity: 1;
//                     }
//                     50% {
//                         opacity: 0.8;
//                     }
//                 }

//                 @keyframes bounce-slow {
//                     0%, 100% {
//                         transform: translateY(0);
//                     }
//                     50% {
//                         transform: translateY(-10px);
//                     }
//                 }

//                 @keyframes spin-slow {
//                     from {
//                         transform: rotate(0deg);
//                     }
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }

//                 @keyframes fade-in {
//                     from {
//                         opacity: 0;
//                     }
//                     to {
//                         opacity: 1;
//                     }
//                 }

//                 .animate-fade-in-up {
//                     animation: fade-in-up 0.8s ease-out forwards;
//                 }

//                 .animate-fade-in-up-delayed {
//                     animation: fade-in-up 0.8s ease-out 0.3s forwards;
//                     opacity: 0;
//                 }

//                 .animate-fade-in-up-more-delayed {
//                     animation: fade-in-up 0.8s ease-out 0.6s forwards;
//                     opacity: 0;
//                 }

//                 .animate-slide-in-down {
//                     animation: slide-in-down 1s ease-out forwards;
//                 }

//                 .animate-fade-in-delayed {
//                     animation: fade-in-up 1s ease-out 0.5s forwards;
//                     opacity: 0;
//                 }

//                 .animate-expand-width {
//                     animation: expand-width 1.2s ease-out 0.8s forwards;
//                     width: 0;
//                 }

//                 .animate-slide-in-card {
//                     animation: slide-in-card 0.6s ease-out forwards;
//                     opacity: 0;
//                 }

//                 .animate-slide-in-up {
//                     animation: fade-in-up 0.8s ease-out forwards;
//                 }

//                 .animate-slide-in-left {
//                     animation: slide-in-left 0.8s ease-out forwards;
//                 }

//                 .animate-slide-in-left-delayed {
//                     animation: slide-in-left 0.8s ease-out 0.2s forwards;
//                     opacity: 0;
//                 }

//                 .animate-slide-in-right {
//                     animation: slide-in-right 0.8s ease-out forwards;
//                 }

//                 .animate-gradient-shift {
//                     background: linear-gradient(-45deg, #6b0e55, #5a0b47, #6b0e55, #5a0b47);
//                     background-size: 400% 400%;
//                     animation: gradient-shift 6s ease infinite;
//                 }

//                 .animate-pulse-slow {
//                     animation: pulse-slow 2s ease-in-out infinite;
//                 }

//                 .animate-bounce-slow {
//                     animation: bounce-slow 3s ease-in-out infinite;
//                 }

//                 .animate-spin-slow {
//                     animation: spin-slow 4s linear infinite;
//                 }

//                 .animate-fade-in {
//                     animation: fade-in 0.6s ease-out forwards;
//                 }
//             `}</style>
//         </div>
//     );
// }


'use client'

import { useState, useRef } from 'react';
import { Search, GraduationCap, Building2, Globe, Users, Clock, Award, ChevronDown, Heart, Stethoscope, Brain, TrendingUp, BarChart3, Target, Globe2, Hospital, ArrowLeft, ChevronRight } from 'lucide-react';

export default function OrdinaturaPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const programsRef = useRef(null);
    const programDetailsRef = useRef(null);

    const categories = [
        { id: 'medicine', name: 'Медицина', color: 'bg-red-500' },
        { id: 'business', name: 'Бизнес', color: 'bg-blue-500' },
        { id: 'international', name: 'International', color: 'bg-green-500' }
    ];

    const originalPrograms = [
        {
            id: 1,
            title: 'Кардиология',
            category: 'medicine',
            description: 'Углубленное изучение заболеваний сердечно-сосудистой системы с практикой в ведущих клиниках',
            semesterPrice: '18 500 000',
            yearPrice: '37 000 000',
            shift1Price: '18 500 000',
            shift2Price: '19 200 000',
            duration: '2 года',
            icon: Heart,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 2,
            title: 'Хирургия',
            category: 'medicine',
            description: 'Комплексная подготовка хирургов с использованием современных технологий и методик',
            semesterPrice: '22 800 000',
            yearPrice: '45 600 000',
            shift1Price: '22 800 000',
            shift2Price: '23 500 000',
            duration: '3 года',
            icon: Stethoscope,
            benefits: ['Гранты']
        },
        {
            id: 3,
            title: 'Неврология',
            category: 'medicine',
            description: 'Изучение нервной системы и современных методов диагностики и лечения',
            semesterPrice: '17 300 000',
            yearPrice: '34 600 000',
            shift1Price: '17 300 000',
            shift2Price: '18 000 000',
            duration: '2 года',
            icon: Brain,
            benefits: ['Стипендия']
        },
        {
            id: 4,
            title: 'Финансовый менеджмент',
            category: 'business',
            description: 'Управление финансами предприятий и инвестиционными портфелями',
            semesterPrice: '15 800 000',
            yearPrice: '31 600 000',
            shift1Price: '15 800 000',
            shift2Price: '16 200 000',
            duration: '2 года',
            icon: TrendingUp,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 5,
            title: 'Маркетинг и продажи',
            category: 'business',
            description: 'Современные стратегии продвижения и digital-маркетинг',
            semesterPrice: '16 600 000',
            yearPrice: '33 200 000',
            shift1Price: '16 600 000',
            shift2Price: '17 100 000',
            duration: '2 года',
            icon: BarChart3,
            benefits: ['Стипендия']
        },
        {
            id: 6,
            title: 'International Business',
            category: 'international',
            description: 'Global business strategies and cross-cultural management',
            semesterPrice: '28 300 000',
            yearPrice: '56 600 000',
            shift1Price: '28 300 000',
            shift2Price: '29 000 000',
            duration: '2 года',
            icon: Globe2,
            benefits: ['Гранты']
        },
        {
            id: 7,
            title: 'Global Healthcare Management',
            category: 'international',
            description: 'International healthcare systems and management practices',
            semesterPrice: '25 900 000',
            yearPrice: '51 800 000',
            shift1Price: '25 900 000',
            shift2Price: '26 500 000',
            duration: '2 года',
            icon: Hospital,
            benefits: ['Стипендия', 'Гранты']
        },
        {
            id: 8,
            title: 'Операционный менеджмент',
            category: 'business',
            description: 'Оптимизация бизнес-процессов и управление цепочками поставок',
            semesterPrice: '17 700 000',
            yearPrice: '35 400 000',
            shift1Price: '17 700 000',
            shift2Price: '18 300 000',
            duration: '2 года',
            icon: Target,
            benefits: ['Стипендия']
        }
    ];

    // Увеличиваем массив программ, повторяя их 3 раза для демонстрации
    const programs = [];
    for (let i = 0; i < 3; i++) {
        originalPrograms.forEach((program, index) => {
            programs.push({
                ...program,
                id: i * originalPrograms.length + program.id,
                title: `${program.title} ${i > 0 ? `(№${i + 1})` : ''}`
            });
        });
    }

    const filteredPrograms = programs.filter(program => program.category === selectedCategory);

    const getBenefitColor = (benefit) => {
        if (benefit.includes('Стипендия')) return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
        if (benefit.includes('Гранты')) return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800';
    };

    const resetToCategories = () => {
        setSelectedCategory(null);
        setSelectedProgram(null);
    };

    const scrollToPrograms = () => {
        if (programsRef.current) {
            programsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const selectProgram = (program) => {
        setSelectedProgram(program);
        setTimeout(() => {
            if (programDetailsRef.current) {
                const elementTop = programDetailsRef.current.getBoundingClientRect().top;
                const offsetPosition = elementTop + window.pageYOffset - 160; // 100px отступ сверху

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4 animate-fade-in-up">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">Программы Ординатуры</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6 animate-expand-width"></div>
                    <p className="text-lg md:text-xl text-white max-w-3xl animate-fade-in-delayed">
                        Профессиональные программы последипломного медицинского образования
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
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <button
                            onClick={resetToCategories}
                            className="hover:text-[#6b0e55] transition-colors duration-300 hover:scale-105"
                        >
                            Категории
                        </button>
                        {selectedCategory && (
                            <>
                                <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                                <button
                                    onClick={scrollToPrograms}
                                    className={`hover:text-[#6b0e55] transition-all duration-300 hover:scale-105 ${!selectedProgram ? 'text-[#6b0e55] font-medium' : ''}`}
                                >
                                    {categories.find(cat => cat.id === selectedCategory)?.name}
                                </button>
                            </>
                        )}
                        {selectedProgram && (
                            <>
                                <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                                <span className="text-[#6b0e55] font-medium animate-fade-in">{selectedProgram.title}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Step 1: Category Selection - Всегда показывается */}
                <div className={`transition-all duration-700 ease-in-out ${selectedProgram
                    ? 'opacity-100 translate-y-0 scale-95 mb-8'
                    : 'opacity-100 translate-y-0 scale-100'
                    }`}>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in-up">Выберите направление</h2>
                        <p className="text-gray-600 mb-8 animate-fade-in-up-delayed">Выберите интересующую вас область обучения</p>

                        <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
                            {categories.map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slide-in-card ${selectedCategory === category.id ? 'ring-2 ring-[#6b0e55] border-[#6b0e55] shadow-lg scale-105' : ''
                                        }`}
                                    style={{
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300 mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                        {category.id === 'medicine' && 'Медицинские специальности и клиническая практика'}
                                        {category.id === 'business' && 'Управление, финансы и маркетинг'}
                                        {category.id === 'international' && 'Международные программы на английском языке'}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step 2: Program Selection */}
                <div ref={programsRef} className={`transition-all duration-700 ease-in-out ${selectedCategory && !selectedProgram
                    ? 'opacity-100 translate-y-0 scale-100'
                    : selectedProgram
                        ? 'opacity-100 translate-y-0 scale-95 mb-8'
                        : 'opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden'
                    }`}>
                    {selectedCategory && (
                        <div>
                            <div className="text-center mb-8 mt-12">
                                {/* {!selectedProgram && (
                                    <button
                                        onClick={resetToCategories}
                                        className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-all duration-300 mb-4 hover:scale-105 hover:-translate-x-1"
                                    >
                                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                        Назад к категориям
                                    </button>
                                )} */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in-up">
                                    Выберите направление в категории "{categories.find(cat => cat.id === selectedCategory)?.name}"
                                </h2>
                                <p className="text-gray-600 animate-fade-in-up-delayed">
                                    Найдено <span className="font-semibold text-[#6b0e55] animate-pulse">{filteredPrograms.length}</span> направлений
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredPrograms.map((program, index) => (
                                    <button
                                        key={program.id}
                                        onClick={() => selectProgram(program)}
                                        className={`group p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#6b0e55] transition-all duration-500 text-left hover:-translate-y-1 hover:scale-105 animate-slide-in-card ${selectedProgram?.id === program.id ? 'ring-2 ring-[#6b0e55] border-[#6b0e55] shadow-lg scale-105' : ''
                                            }`}
                                        style={{
                                            animationDelay: `${index * 100}ms`
                                        }}
                                    >
                                        <div className="w-12 h-12 bg-[#6b0e55]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6b0e55]/20 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                                            <program.icon className="w-6 h-6 text-[#6b0e55] transition-all duration-300 group-hover:scale-110" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 group-hover:text-[#6b0e55] transition-colors duration-300">
                                            {program.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                                            {program.description}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Step 3: Program Details */}
                <div ref={programDetailsRef} className={`transition-all duration-700 ease-in-out ${selectedProgram
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                    }`}>
                    {selectedProgram && (
                        <div>
                            {/* <div className="mb-8">
                                <button
                                    onClick={scrollToPrograms}
                                    className="inline-flex items-center gap-2 text-[#6b0e55] hover:text-[#5a0b47] transition-all duration-300 mb-4 hover:scale-105 hover:-translate-x-1 animate-fade-in"
                                >
                                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                    Назад к направлениям
                                </button>
                            </div> */}

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden animate-slide-in-up hover:shadow-lg transition-all duration-500">
                                {/* Program Header */}
                                <div className="bg-gradient-to-r from-[#6b0e55] to-[#5a0b47] p-8 text-white animate-gradient-shift">
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500">
                                            <selectedProgram.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">{selectedProgram.title}</h1>
                                            <p className="text-lg opacity-90 animate-fade-in-up-delayed">{selectedProgram.description}</p>
                                            <div className="flex items-center gap-4 mt-4 text-sm animate-fade-in-up-more-delayed">
                                                <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
                                                    <Clock className="w-4 h-4" />
                                                    {selectedProgram.duration}
                                                </div>
                                                <span className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-105">
                                                    {categories.find(cat => cat.id === selectedProgram.category)?.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Content */}
                                <div className="p-8 animate-fade-in-up-delayed">
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {/* Left Column */}
                                        <div className="space-y-6">
                                            {/* Benefits */}
                                            <div className="animate-slide-in-left">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">Льготы и преимущества</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProgram.benefits.map((benefit, index) => (
                                                        <span
                                                            key={index}
                                                            className={`${getBenefitColor(benefit)} hover:scale-110 transition-all duration-300 animate-fade-in cursor-pointer`}
                                                            style={{
                                                                animationDelay: `${index * 100}ms`
                                                            }}
                                                        >
                                                            {benefit}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Duration Details */}
                                            <div className="animate-slide-in-left-delayed">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">Продолжительность обучения</h3>
                                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 hover:scale-105 hover:shadow-md">
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-5 h-5 text-[#6b0e55] animate-spin-slow" />
                                                        <span className="font-semibold text-[#6b0e55]">{selectedProgram.duration}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Полная программа с практикой и дипломным проектом
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-6">
                                            {/* Pricing */}
                                            <div className="animate-slide-in-right">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">Стоимость обучения</h3>
                                                <div className="space-y-4">
                                                    <div className="bg-[#6b0e55]/5 rounded-lg p-4 border border-[#6b0e55]/20 hover:bg-[#6b0e55]/10 hover:border-[#6b0e55]/30 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="hover:scale-105 transition-transform duration-300">
                                                                <span className="text-sm text-gray-600">За семестр:</span>
                                                                <div className="text-xl font-bold text-[#6b0e55] animate-pulse-slow">{selectedProgram.semesterPrice} сум</div>
                                                            </div>
                                                            <div className="hover:scale-105 transition-transform duration-300">
                                                                <span className="text-sm text-gray-600">За год:</span>
                                                                <div className="text-xl font-bold text-[#6b0e55] animate-pulse-slow">{selectedProgram.yearPrice} сум</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                            <span className="text-sm text-gray-600">1 смена:</span>
                                                            <div className="font-semibold text-gray-900">{selectedProgram.shift1Price} сум</div>
                                                        </div>
                                                        <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                            <span className="text-sm text-gray-600">2 смена:</span>
                                                            <div className="font-semibold text-gray-900">{selectedProgram.shift2Price} сум</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up-more-delayed">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button className="flex-1 bg-[#6b0e55] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                                                Подать документы
                                            </button>
                                            <button className="flex-1 border border-[#6b0e55] text-[#6b0e55] py-3 px-6 rounded-lg font-medium hover:bg-[#6b0e55] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                                                Получить консультацию
                                            </button>
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
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden'
                    }`}>
                    <div className="max-w-2xl mx-auto">
                        <Award className="w-12 h-12 text-[#6b0e55] mx-auto mb-4 animate-bounce-slow hover:scale-110 transition-transform duration-300" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                            Подача документов на 2025/2026 учебный год
                        </h2>
                        <p className="text-gray-600 mb-6 animate-fade-in-up-delayed">
                            Приемная комиссия принимает документы до 25 августа 2025 года. Получите персональную консультацию по выбору программы обучения.
                        </p>
                        <button className="px-8 py-3 bg-[#6b0e55] text-white rounded-lg font-medium hover:bg-[#5a0b47] transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up-more-delayed">
                            Получить консультацию
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes expand-width {
                    from {
                        width: 0;
                    }
                    to {
                        width: 6rem;
                    }
                }

                @keyframes slide-in-card {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes slide-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in-up-delayed {
                    animation: fade-in-up 0.8s ease-out 0.3s forwards;
                    opacity: 0;
                }

                .animate-fade-in-up-more-delayed {
                    animation: fade-in-up 0.8s ease-out 0.6s forwards;
                    opacity: 0;
                }

                .animate-slide-in-down {
                    animation: slide-in-down 1s ease-out forwards;
                }

                .animate-fade-in-delayed {
                    animation: fade-in-up 1s ease-out 0.5s forwards;
                    opacity: 0;
                }

                .animate-expand-width {
                    animation: expand-width 1.2s ease-out 0.8s forwards;
                    width: 0;
                }

                .animate-slide-in-card {
                    animation: slide-in-card 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-slide-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out forwards;
                }

                .animate-slide-in-left-delayed {
                    animation: slide-in-left 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out forwards;
                }

                .animate-gradient-shift {
                    background: linear-gradient(-45deg, #6b0e55, #5a0b47, #6b0e55, #5a0b47);
                    background-size: 400% 400%;
                    animation: gradient-shift 6s ease infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}