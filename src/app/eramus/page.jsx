// 'use client';

// import React, { useState } from 'react';
// import { Globe, BookOpen, Award, Users, MapPin, Calendar, Download, FileText, ExternalLink, Coffee, Book } from 'lucide-react';
// import './erasmus.css';

// export default function ErasmusPage() {
//     const [activeTab, setActiveTab] = useState('about');

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="bg-white relative overflow-hidden">
//                 <div className="absolute inset-0">
//                     <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
//                     <div className="absolute top-40 right-40 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
//                     <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
//                 </div>

//                 <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24">
//                     <div className="flex flex-col md:flex-row items-center justify-between">
//                         <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
//                             <div className="relative">
//                                 <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
//                                 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                                     Программа
//                                     <br />
//                                     <span className="text-[#5f1464] relative">
//                                         Erasmus+
//                                         <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
//                                     </span>
//                                 </h1>
//                             </div>
//                             <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
//                                 Erasmus+ — программа Европейского Союза, направленная на поддержку проектов, партнерств, мероприятий и мобильности в сферах образования, обучения, молодежи и спорта.
//                             </p>

//                         </div>

//                         <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
//                             <div className="relative w-56 h-56 md:w-80 md:h-80 transform hover:scale-105 transition-transform duration-300">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464] to-blue-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                                     <div className="absolute inset-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
//                                         <img
//                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTHC8Mwick5435lf2FJgubV6-Bc5o2fnDWA&s"
//                                             alt="Логотип Erasmus+"
//                                             className="w-5/6 h-5/6 object-contain"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTHC8Mwick5435lf2FJgubV6-Bc5o2fnDWA&s";
//                                             }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-200 rounded-full animate-float" />
//                             <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-200 rounded-full animate-float-delay" />
//                             <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-[#5f1464]/20 rounded-full animate-float-delay-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Tabs Navigation */}
//             <div className="bg-white sticky top-0 z-50 shadow-md">
//                 <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                     <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#5f1464]/30 scrollbar-track-transparent py-2">
//                         <button
//                             onClick={() => setActiveTab('about')}
//                             className={`px-4 py-2 md:px-6 md:py-3 mx-1 md:mx-2 whitespace-nowrap rounded-full transition-all ${activeTab === 'about'
//                                 ? 'bg-[#5f1464] text-white font-medium'
//                                 : 'text-gray-600 hover:bg-[#5f1464]/10'
//                                 }`}
//                         >
//                             О программе
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('programs')}
//                             className={`px-4 py-2 md:px-6 md:py-3 mx-1 md:mx-2 whitespace-nowrap rounded-full transition-all ${activeTab === 'programs'
//                                 ? 'bg-[#5f1464] text-white font-medium'
//                                 : 'text-gray-600 hover:bg-[#5f1464]/10'
//                                 }`}
//                         >
//                             Проекты и возможности
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('benefits')}
//                             className={`px-4 py-2 md:px-6 md:py-3 mx-1 md:mx-2 whitespace-nowrap rounded-full transition-all ${activeTab === 'benefits'
//                                 ? 'bg-[#5f1464] text-white font-medium'
//                                 : 'text-gray-600 hover:bg-[#5f1464]/10'
//                                 }`}
//                         >
//                             Преимущества
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('how')}
//                             className={`px-4 py-2 md:px-6 md:py-3 mx-1 md:mx-2 whitespace-nowrap rounded-full transition-all ${activeTab === 'how'
//                                 ? 'bg-[#5f1464] text-white font-medium'
//                                 : 'text-gray-600 hover:bg-[#5f1464]/10'
//                                 }`}
//                         >
//                             Как участвовать
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Section */}
//             {/* {activeTab === 'about' && (
//                 <div className="py-12 md:py-16">
//                     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                 <div className="flex items-center space-x-4 mb-4">
//                                     <div className="p-3 bg-[#5f1464]/10 rounded-full">
//                                         <Globe className="w-6 h-6 text-[#5f1464]" />
//                                     </div>
//                                     <h3 className="text-xl md:text-2xl font-bold text-gray-900">Международное сотрудничество</h3>
//                                 </div>
//                                 <p className="text-gray-600 mb-4">
//                                     Erasmus+ предоставляет возможности финансирования для сотрудничества как между европейскими странами (так называемыми странами программы), так и между этими европейскими странами и странами-партнерами по всему миру.
//                                 </p>
//                                 <p className="text-gray-600">
//                                     Программа поддерживает разнообразные проекты, направленные на достижение долгосрочного воздействия на университеты и системы высшего образования в странах-партнерах.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                 <div className="flex items-center space-x-4 mb-4">
//                                     <div className="p-3 bg-[#5f1464]/10 rounded-full">
//                                         <BookOpen className="w-6 h-6 text-[#5f1464]" />
//                                     </div>
//                                     <h3 className="text-xl md:text-2xl font-bold text-gray-900">Образовательные инициативы</h3>
//                                 </div>
//                                 <p className="text-gray-600 mb-4">
//                                     В рамках Erasmus+ CBHE (Capacity Building in Higher Education) Европейский Союз поддерживает проекты, направленные на повышение потенциала высших учебных заведений.
//                                 </p>
//                                 <p className="text-gray-600">
//                                     Проекты по наращиванию потенциала основаны на многостороннем партнерстве, в первую очередь между высшими учебными заведениями (ВУЗами) из 34 стран программы и более чем 150 стран-партнеров.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-8">
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">О странах участниках</h3>
//                                 <p className="text-gray-600 mb-4">
//                                     Страны программы, финансово вносящие вклад в Erasmus+, включают 27 государств-членов ЕС, а также Исландию, Лихтенштейн, Норвегию, Сербию, Турцию и Северную Македонию.
//                                 </p>
//                                 <p className="text-gray-600 mb-4">
//                                     Казахстан является страной-партнером, имеющей право участвовать в компоненте CBHE. Многие университеты из Узбекистана и Центральной Азии также активно участвуют в программе.
//                                 </p>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                                     <div className="bg-gray-50 p-4 rounded-lg">
//                                         <h4 className="font-bold text-lg text-gray-900 mb-2">Страны программы:</h4>
//                                         <ul className="text-gray-600 list-disc list-inside space-y-1">
//                                             <li>27 государств-членов ЕС</li>
//                                             <li>Исландия</li>
//                                             <li>Лихтенштейн</li>
//                                             <li>Норвегия</li>
//                                             <li>Сербия</li>
//                                             <li>Турция</li>
//                                             <li>Северная Македония</li>
//                                         </ul>
//                                     </div>
//                                     <div className="bg-gray-50 p-4 rounded-lg">
//                                         <h4 className="font-bold text-lg text-gray-900 mb-2">Регионы стран-партнеров:</h4>
//                                         <ul className="text-gray-600 list-disc list-inside space-y-1">
//                                             <li>Западные Балканы</li>
//                                             <li>Страны Восточного партнерства</li>
//                                             <li>Южное Средиземноморье</li>
//                                             <li>Российская Федерация</li>
//                                             <li>Азия, включая Центральную Азию</li>
//                                             <li>Латинская Америка</li>
//                                             <li>Африка, Карибский бассейн и Тихоокеанский регион</li>
//                                             <li>Промышленно развитые страны</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )} */}

//             {/* About Section */}
//             {activeTab === 'about' && (
//                 <section className="py-20 relative overflow-hidden">
//                     {/* Декоративные элементы */}
//                     <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//                         <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
//                         <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
//                         <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-[#5f1464]/5 blur-3xl"></div>
//                     </div>

//                     <div className="max-w-screen-xl mx-auto px-4 relative z-10">
//                         <div className="mb-16">
//                             <div className="inline-block rounded-lg bg-[#5f1464]/10 px-3 py-1 text-sm text-[#5f1464] font-medium mb-4">О программе Erasmus+</div>
//                             <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">Международные образовательные <br />возможности</h2>
//                         </div>

//                         {/* Карточки с информацией - с плавными переходами */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
//                                 <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
//                                     <div className="flex items-center mb-6 space-x-4">
//                                         <div className="bg-gradient-to-r from-[#5f1464] to-purple-600 text-white p-3 rounded-lg shadow-md">
//                                             <Globe className="w-6 h-6" />
//                                         </div>
//                                         <h3 className="text-2xl font-bold text-gray-800">Международное сотрудничество</h3>
//                                     </div>
//                                     <p className="text-gray-600 leading-relaxed mb-5">
//                                         Erasmus+ предоставляет возможности финансирования для сотрудничества как между европейскими странами (так называемыми странами программы), так и между этими европейскими странами и странами-партнерами по всему миру.
//                                     </p>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         Программа поддерживает разнообразные проекты, направленные на достижение долгосрочного воздействия на университеты и системы высшего образования в странах-партнерах.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
//                                 <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
//                                     <div className="flex items-center mb-6 space-x-4">
//                                         <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg shadow-md">
//                                             <BookOpen className="w-6 h-6" />
//                                         </div>
//                                         <h3 className="text-2xl font-bold text-gray-800">Образовательные инициативы</h3>
//                                     </div>
//                                     <p className="text-gray-600 leading-relaxed mb-5">
//                                         В рамках Erasmus+ CBHE (Capacity Building in Higher Education) Европейский Союз поддерживает проекты, направленные на повышение потенциала высших учебных заведений.
//                                     </p>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         Проекты по наращиванию потенциала основаны на многостороннем партнерстве, в первую очередь между высшими учебными заведениями (ВУЗами) из 34 стран программы и более чем 150 стран-партнеров.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Стран-участницы с асимметричным дизайном */}

//                     </div>
//                 </section>
//             )}






//             {/* Programs Section - Horizontal Cards Layout */}
//             {activeTab === 'programs' && (
//                 <section id="programs" className="py-16 bg-white">
//                     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                         <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
//                             <div className="max-w-lg mb-6 md:mb-0">
//                                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Проекты и возможности</h2>
//                                 <p className="text-gray-600">
//                                     Программы для развития образовательного потенциала
//                                 </p>
//                             </div>
//                             <div className="text-gray-600 text-sm">
//                                 <p className="inline-flex items-center">
//                                     <span className="w-3 h-3 bg-[#5f1464] rounded-full mr-2"></span>
//                                     Поддержка от Европейского Союза
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Горизонтальные карточки с единым дизайном */}
//                         <div className="space-y-6">
//                             {/* Карточка 1 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-blue-500 flex items-center justify-center p-8 md:p-6">
//                                         <Users className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Мобильность студентов и персонала</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Возможности обучения и стажировки за рубежом для студентов и преподавателей.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">3-12 месяцев обучения</span>
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Стажировки</span>
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Преподавание</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Карточка 2 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-[#5f1464] flex items-center justify-center p-8 md:p-6">
//                                         <Globe className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Наращивание потенциала</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Проекты модернизации высшего образования через интернационализацию и сотрудничество.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Разработка программ</span>
//                                             <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Модернизация управления</span>
//                                             <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Связь с обществом</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Карточка 3 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-teal-500 flex items-center justify-center p-8 md:p-6">
//                                         <Award className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Совместные магистерские программы</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Престижные программы, предлагаемые консорциумом университетов из разных стран.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Обучение в разных странах</span>
//                                             <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Стипендии</span>
//                                             <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Двойные дипломы</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Карточка 4 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-orange-500 flex items-center justify-center p-8 md:p-6">
//                                         <Book className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Альянсы знаний</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/knowledge-alliances"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Сотрудничество между высшим образованием и бизнесом для развития инновационного потенциала.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Инновационные подходы</span>
//                                             <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Предпринимательское мышление</span>
//                                             <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Обмен знаниями</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Карточка 5 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-amber-500 flex items-center justify-center p-8 md:p-6">
//                                         <MapPin className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Жан Монне</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/jean-monnet-actions-stimulating-teaching-and-research-on-the-eu"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Инициативы, направленные на продвижение совершенства в преподавании и исследованиях в области европейских исследований.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Модули и кафедры</span>
//                                             <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Проекты и сети</span>
//                                             <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Поддержка институтов</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Карточка 6 */}
//                             <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
//                                 <div className="flex flex-col md:flex-row">
//                                     <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8 md:p-6">
//                                         <Calendar className="w-14 h-14 text-white" />
//                                     </div>
//                                     <div className="p-6 md:w-3/4 flex flex-col">
//                                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Стратегические партнерства</h3>
//                                             <a
//                                                 href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/partnerships-for-cooperation"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
//                                             >
//                                                 Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                                             </a>
//                                         </div>
//                                         <p className="text-gray-600 mb-4 text-sm">
//                                             Проекты, направленные на разработку и распространение инновационных практик в образовании на всех уровнях.
//                                         </p>
//                                         <div className="mt-auto flex flex-wrap gap-2">
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Инновационные методы</span>
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Сотрудничество</span>
//                                             <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Обмен практиками</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             )}


//             {/* Benefits Section */}
//             {activeTab === 'benefits' && (
//                 <div className="py-12 md:py-16">
//                     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                         <div className="text-center mb-16 relative">
//                             <div className="inline-block rounded-full bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 backdrop-blur-sm px-4 py-1 text-sm text-[#5f1464] font-medium mb-4">
//                                 Для студентов и учреждений
//                             </div>
//                             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                                 <span className="relative">
//                                     <span className="bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">
//                                         Преимущества участия в Erasmus+
//                                     </span>
//                                     <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5f1464] to-purple-600 opacity-70 rounded-full"></span>
//                                 </span>
//                             </h2>
//                             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//                                 Программа Erasmus+ предлагает множество преимуществ для студентов, преподавателей
//                                 и образовательных учреждений по всему миру.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {/* Benefit 1 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                                     <Globe className="w-7 h-7 text-blue-600" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Международный опыт</h3>
//                                 <p className="text-gray-600">
//                                     Возможность учиться, преподавать и проводить исследования в международной среде, знакомиться с различными культурами и методиками обучения.
//                                 </p>
//                             </div>

//                             {/* Benefit 2 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                                     <Users className="w-7 h-7 text-green-600" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Развитие навыков</h3>
//                                 <p className="text-gray-600">
//                                     Улучшение языковых компетенций, межкультурных навыков, адаптивности, самостоятельности и повышение конкурентоспособности на рынке труда.
//                                 </p>
//                             </div>

//                             {/* Benefit 3 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
//                                     <Award className="w-7 h-7 text-purple-600" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Престижные возможности</h3>
//                                 <p className="text-gray-600">
//                                     Доступ к высококачественным образовательным программам, признанным дипломам и сертификатам, которые ценятся работодателями во всем мире.
//                                 </p>
//                             </div>

//                             {/* Benefit 4 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
//                                     <BookOpen className="w-7 h-7 text-red-600" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Модернизация образования</h3>
//                                 <p className="text-gray-600">
//                                     Для учебных заведений — возможность модернизировать программы обучения, методики преподавания и административные процессы в соответствии с международными стандартами.
//                                 </p>
//                             </div>

//                             {/* Benefit 5 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                                     <Coffee className="w-7 h-7 text-orange-600" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Расширение кругозора</h3>
//                                 <p className="text-gray-600">
//                                     Знакомство с новыми людьми, идеями и перспективами, которые обогащают личный и профессиональный опыт участников.
//                                 </p>
//                             </div>

//                             {/* Benefit 6 */}
//                             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                                 <div className="w-14 h-14 bg-[#5f1464]/10 rounded-full flex items-center justify-center mb-4">
//                                     <MapPin className="w-7 h-7 text-[#5f1464]" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Финансовая поддержка</h3>
//                                 <p className="text-gray-600">
//                                     Гранты на обучение, стажировку и проживание за рубежом, которые делают международную мобильность доступной для многих студентов и преподавателей.
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             )}


//             {/* Benefits Section */}
//             {activeTab === 'benefits' && (
//                 <section className="py-20 relative overflow-hidden">
//                     {/* Декоративные элементы */}
//                     <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//                         <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#5f1464]/10 to-purple-500/5 blur-3xl"></div>
//                         <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl"></div>
//                         <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/5 blur-3xl"></div>
//                     </div>

//                     <div className="max-w-screen-xl mx-auto px-4 relative z-10">
//                         {/* <div className="text-center mb-16 relative">
//                             <div className="inline-block rounded-full bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 backdrop-blur-sm px-4 py-1 text-sm text-[#5f1464] font-medium mb-4">
//                                 Для студентов и учреждений
//                             </div>
//                             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                                 <span className="relative">
//                                     <span className="bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">
//                                         Преимущества участия в Erasmus+
//                                     </span>
//                                     <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5f1464] to-purple-600 opacity-70 rounded-full"></span>
//                                 </span>
//                             </h2>
//                             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//                                 Программа Erasmus+ предлагает множество преимуществ для студентов, преподавателей
//                                 и образовательных учреждений по всему миру.
//                             </p>
//                         </div> */}

//                         {/* Карточки с преимуществами - интерактивный дизайн */}


//                         {/* Дополнительный блок с призывом к действию */}
//                         <div className="mt-24 relative">
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#5f1464]/10 via-purple-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>

//                             <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#5f1464]/30 to-purple-500/30">
//                                 <div className="bg-white/90 backdrop-blur-sm rounded-xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
//                                     <div className="mb-8 md:mb-0 md:mr-8">
//                                         <h3 className="text-2xl font-bold text-gray-800 mb-4">Готовы начать свое путешествие с Erasmus+?</h3>
//                                         <p className="text-gray-600 max-w-xl">
//                                             Узнайте больше о возможностях программы и о том, как вы можете стать ее частью.
//                                             Свяжитесь с международным отделом вашего университета сегодня!
//                                         </p>
//                                     </div>

//                                     <a
//                                         href="https://erasmus-plus.ec.europa.eu/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-[#5f1464] to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                                     >
//                                         Официальный сайт
//                                         <ExternalLink className="ml-2 w-4 h-4" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             )}


//             {/* How to Participate Section */}
//             {activeTab === 'how' && (
//                 <div className="py-12 md:py-16">
//                     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                         <div className="text-center mb-10">
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как участвовать в программе Erasmus+</h2>
//                             <div className="w-24 h-1 bg-[#5f1464] mx-auto mb-6"></div>
//                             <p className="text-gray-600 max-w-3xl mx-auto">
//                                 Узнайте о процессе подачи заявки и условиях участия в различных компонентах программы Erasmus+.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                             <div className="bg-white rounded-xl p-6 shadow-lg">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-4">Для студентов и преподавателей</h3>
//                                 <div className="space-y-4">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Обратитесь в международный отдел</h4>
//                                             <p className="text-gray-600">Свяжитесь с международным отделом вашего университета, чтобы узнать о доступных возможностях мобильности.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Проверьте требования</h4>
//                                             <p className="text-gray-600">Ознакомьтесь с требованиями программы, включая языковые навыки, академические достижения и необходимые документы.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Подготовьте заявку</h4>
//                                             <p className="text-gray-600">Подготовьте все необходимые документы, включая мотивационное письмо, резюме и учебный план.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">4</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Подайте заявку</h4>
//                                             <p className="text-gray-600">Подайте заявку в соответствии с процедурами и сроками, установленными вашим университетом.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-xl p-6 shadow-lg">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-4">Для организаций и учебных заведений</h3>
//                                 <div className="space-y-4">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Получите PIC/OID</h4>
//                                             <p className="text-gray-600">Зарегистрируйтесь на портале участников и получите идентификационный код организации.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Найдите партнеров</h4>
//                                             <p className="text-gray-600">Установите контакты с потенциальными партнерскими организациями для совместной подачи заявки на проект.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Разработайте проект</h4>
//                                             <p className="text-gray-600">Разработайте проектное предложение в соответствии с приоритетами и требованиями программы Erasmus+.</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-[#5f1464] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">4</div>
//                                         <div>
//                                             <h4 className="font-medium text-gray-900 mb-1">Подайте заявку онлайн</h4>
//                                             <p className="text-gray-600">Подайте заявку через онлайн-форму в соответствии с установленными сроками.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
//                             <h3 className="text-xl font-bold text-gray-900 mb-4">Полезные ресурсы</h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <a
//                                     href="https://erasmus-plus.ec.europa.eu/programme-guide"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     <FileText className="w-5 h-5 text-[#5f1464] mr-3" />
//                                     <span className="font-medium">Руководство по программе Erasmus+</span>
//                                 </a>
//                                 <a
//                                     href="https://ec.europa.eu/info/funding-tenders/opportunities/portal"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     <Globe className="w-5 h-5 text-[#5f1464] mr-3" />
//                                     <span className="font-medium">Портал финансирования и тендеров ЕС</span>
//                                 </a>
//                                 <a
//                                     href="https://erasmus-plus.ec.europa.eu/national-agencies"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     <MapPin className="w-5 h-5 text-[#5f1464] mr-3" />
//                                     <span className="font-medium">Национальные агентства</span>
//                                 </a>
//                                 <a
//                                     href="https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     <Users className="w-5 h-5 text-[#5f1464] mr-3" />
//                                     <span className="font-medium">Возможности для физических лиц</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* CSS для анимаций */}
//             <style jsx>{`
//                 @keyframes spin-slow {
//                     0% {
//                         transform: rotate(0deg);
//                     }
//                     100% {
//                         transform: rotate(360deg);
//                     }
//                 }

//                 @keyframes float {
//                     0% {
//                         transform: translateY(0px);
//                         0% {
//                             transform: translateY(0px);
//                         }
//                         50% {
//                             transform: translateY(-10px);
//                         }
//                         100% {
//                             transform: translateY(0px);
//                         }
//                     }

//                     @keyframes float-delay {
//                         0% {
//                             transform: translateY(0px);
//                         }
//                         50% {
//                             transform: translateY(-10px);
//                         }
//                         100% {
//                             transform: translateY(0px);
//                         }
//                     }

//                     @keyframes float-delay-2 {
//                         0% {
//                             transform: translateY(0px);
//                         }
//                         50% {
//                             transform: translateY(-5px);
//                         }
//                         100% {
//                             transform: translateY(0px);
//                         }
//                     }

//                     @keyframes book-hover {
//                         0% {
//                             transform: perspective(1000px) rotateY(5deg);
//                         }
//                         50% {
//                             transform: perspective(1000px) rotateY(-5deg);
//                         }
//                         100% {
//                             transform: perspective(1000px) rotateY(5deg);
//                         }
//                     }

//                     .animate-spin-slow {
//                         animation: spin-slow 15s linear infinite;
//                     }

//                     .animate-float {
//                         animation: float 4s ease-in-out infinite;
//                     }

//                     .animate-float-delay {
//                         animation: float-delay 5s ease-in-out 1s infinite;
//                     }

//                     .animate-float-delay-2 {
//                         animation: float-delay-2 3s ease-in-out 0.5s infinite;
//                     }

//                     .animate-book-hover {
//                         animation: book-hover 6s ease-in-out infinite;
//                     }

//                     .animate-fade-in {
//                         animation: fadeIn 0.5s ease-in-out;
//                     }

//                     @keyframes fadeIn {
//                         from {
//                             opacity: 0;
//                         }
//                         to {
//                             opacity: 1;
//                         }
//                     }
//                 `}</style>
//         </div>
//     );
// }

// // Файл erasmus.css для дополнительных стилей
// // Можно создать отдельно или вставить стили в JSX-код

// /*

// */











'use client';

import React, { useState } from 'react';
import { Globe, BookOpen, Award, Users, MapPin, Calendar, Download, FileText, ExternalLink, Coffee, Book } from 'lucide-react';
import './erasmus.css';

export default function ErasmusPage() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden shadow-md">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                    Программа
                                    <br />
                                    <span className="text-[#5f1464] relative">
                                        Erasmus+
                                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6">
                                Erasmus+ — программа Европейского Союза, направленная на поддержку проектов, партнерств, мероприятий и мобильности в сферах образования, обучения, молодежи и спорта.
                            </p>

                        </div>

                        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-56 h-56 md:w-80 md:h-80 transform hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464] to-blue-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTHC8Mwick5435lf2FJgubV6-Bc5o2fnDWA&s"
                                            alt="Логотип Erasmus+"
                                            className="w-5/6 h-5/6 object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTHC8Mwick5435lf2FJgubV6-Bc5o2fnDWA&s";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-200 rounded-full animate-float" />
                            <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-200 rounded-full animate-float-delay" />
                            <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-[#5f1464]/20 rounded-full animate-float-delay-2" />
                        </div>
                    </div>
                </div>
            </div>



            {/* About Section */}
            <section className="py-20 relative overflow-hidden shadow-md">
                {/* Декоративные элементы */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-[#5f1464]/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <div className="inline-block rounded-lg bg-[#5f1464]/10 px-3 py-1 text-sm text-[#5f1464] font-medium mb-4">О программе Erasmus+</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">Международные образовательные <br />возможности</h2>
                    </div>

                    {/* Карточки с информацией - с плавными переходами */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-6 space-x-4">
                                    <div className="bg-gradient-to-r from-[#5f1464] to-purple-600 text-white p-3 rounded-lg shadow-md">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Международное сотрудничество</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Erasmus+ предоставляет возможности финансирования для сотрудничества как между европейскими странами (так называемыми странами программы), так и между этими европейскими странами и странами-партнерами по всему миру.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Программа поддерживает разнообразные проекты, направленные на достижение долгосрочного воздействия на университеты и системы высшего образования в странах-партнерах.
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
                                    <h3 className="text-2xl font-bold text-gray-800">Образовательные инициативы</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    В рамках Erasmus+ CBHE (Capacity Building in Higher Education) Европейский Союз поддерживает проекты, направленные на повышение потенциала высших учебных заведений.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Проекты по наращиванию потенциала основаны на многостороннем партнерстве, в первую очередь между высшими учебными заведениями (ВУЗами) из 34 стран программы и более чем 150 стран-партнеров.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Стран-участницы с асимметричным дизайном */}

                </div>
            </section>






            {/* Programs Section - Horizontal Cards Layout */}
            <section id="programs" className="py-16 bg-white shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="max-w-lg mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Проекты и возможности</h2>
                            <p className="text-gray-600">
                                Программы для развития образовательного потенциала
                            </p>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p className="inline-flex items-center">
                                <span className="w-3 h-3 bg-[#5f1464] rounded-full mr-2"></span>
                                Поддержка от Европейского Союза
                            </p>
                        </div>
                    </div>

                    {/* Горизонтальные карточки с единым дизайном */}
                    <div className="space-y-6">
                        {/* Карточка 1 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-500 flex items-center justify-center p-8 md:p-6">
                                    <Users className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Мобильность студентов и персонала</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Возможности обучения и стажировки за рубежом для студентов и преподавателей.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">3-12 месяцев обучения</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Стажировки</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Преподавание</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 2 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-[#5f1464] flex items-center justify-center p-8 md:p-6">
                                    <Globe className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Наращивание потенциала</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Проекты модернизации высшего образования через интернационализацию и сотрудничество.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Разработка программ</span>
                                        <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Модернизация управления</span>
                                        <span className="text-xs py-1 px-3 bg-purple-100 text-purple-700 rounded-full">Связь с обществом</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 3 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-teal-500 flex items-center justify-center p-8 md:p-6">
                                    <Award className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Совместные магистерские программы</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Престижные программы, предлагаемые консорциумом университетов из разных стран.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Обучение в разных странах</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Стипендии</span>
                                        <span className="text-xs py-1 px-3 bg-teal-100 text-teal-700 rounded-full">Двойные дипломы</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 4 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-orange-500 flex items-center justify-center p-8 md:p-6">
                                    <Book className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Альянсы знаний</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/knowledge-alliances"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Сотрудничество между высшим образованием и бизнесом для развития инновационного потенциала.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Инновационные подходы</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Предпринимательское мышление</span>
                                        <span className="text-xs py-1 px-3 bg-orange-100 text-orange-700 rounded-full">Обмен знаниями</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 5 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-amber-500 flex items-center justify-center p-8 md:p-6">
                                    <MapPin className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Жан Монне</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/jean-monnet-actions-stimulating-teaching-and-research-on-the-eu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Инициативы, направленные на продвижение совершенства в преподавании и исследованиях в области европейских исследований.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Модули и кафедры</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Проекты и сети</span>
                                        <span className="text-xs py-1 px-3 bg-amber-100 text-amber-700 rounded-full">Поддержка институтов</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Карточка 6 */}
                        <div className="group bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 bg-blue-600 flex items-center justify-center p-8 md:p-6">
                                    <Calendar className="w-14 h-14 text-white" />
                                </div>
                                <div className="p-6 md:w-3/4 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Стратегические партнерства</h3>
                                        <a
                                            href="https://erasmus-plus.ec.europa.eu/opportunities/organisations/cooperation-among-organisations-and-institutions/partnerships-for-cooperation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#5f1464] text-sm font-medium hover:underline"
                                        >
                                            Подробнее <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Проекты, направленные на разработку и распространение инновационных практик в образовании на всех уровнях.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Инновационные методы</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Сотрудничество</span>
                                        <span className="text-xs py-1 px-3 bg-blue-100 text-blue-700 rounded-full">Обмен практиками</span>
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
                        <div className="inline-block rounded-full bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 backdrop-blur-sm px-4 py-1 text-sm text-[#5f1464] font-medium mb-4">
                            Для студентов и учреждений
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="relative">
                                <span className="bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">
                                    Преимущества участия в Erasmus+
                                </span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5f1464] to-purple-600 opacity-70 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Программа Erasmus+ предлагает множество преимуществ для студентов, преподавателей
                            и образовательных учреждений по всему миру.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Globe className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Международный опыт</h3>
                            <p className="text-gray-600">
                                Возможность учиться, преподавать и проводить исследования в международной среде, знакомиться с различными культурами и методиками обучения.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Развитие навыков</h3>
                            <p className="text-gray-600">
                                Улучшение языковых компетенций, межкультурных навыков, адаптивности, самостоятельности и повышение конкурентоспособности на рынке труда.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Award className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Престижные возможности</h3>
                            <p className="text-gray-600">
                                Доступ к высококачественным образовательным программам, признанным дипломам и сертификатам, которые ценятся работодателями во всем мире.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Модернизация образования</h3>
                            <p className="text-gray-600">
                                Для учебных заведений — возможность модернизировать программы обучения, методики преподавания и административные процессы в соответствии с международными стандартами.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <Coffee className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Расширение кругозора</h3>
                            <p className="text-gray-600">
                                Знакомство с новыми людьми, идеями и перспективами, которые обогащают личный и профессиональный опыт участников.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-[#5f1464]/10 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-[#5f1464]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Финансовая поддержка</h3>
                            <p className="text-gray-600">
                                Гранты на обучение, стажировку и проживание за рубежом, которые делают международную мобильность доступной для многих студентов и преподавателей.
                            </p>
                        </div>
                    </div>

                </div>
            </div>



            <section className="pb-20 relative overflow-hidden">
                {/* Декоративные элементы */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#5f1464]/10 to-purple-500/5 blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/5 blur-3xl"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                    {/* <div className="text-center mb-16 relative">
                            <div className="inline-block rounded-full bg-gradient-to-r from-[#5f1464]/20 to-purple-500/20 backdrop-blur-sm px-4 py-1 text-sm text-[#5f1464] font-medium mb-4">
                                Для студентов и учреждений
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-[#5f1464] to-purple-600 bg-clip-text text-transparent">
                                        Преимущества участия в Erasmus+
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5f1464] to-purple-600 opacity-70 rounded-full"></span>
                                </span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Программа Erasmus+ предлагает множество преимуществ для студентов, преподавателей
                                и образовательных учреждений по всему миру.
                            </p>
                        </div> */}

                    {/* Карточки с преимуществами - интерактивный дизайн */}


                    {/* Дополнительный блок с призывом к действию */}
                    <div className="mt-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5f1464]/10 via-purple-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>

                        <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#5f1464]/30 to-purple-500/30">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-8 md:mb-0 md:mr-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Готовы начать свое путешествие с Erasmus+?</h3>
                                    <p className="text-gray-600 max-w-xl">
                                        Узнайте больше о возможностях программы и о том, как вы можете стать ее частью.
                                        Свяжитесь с международным отделом вашего университета сегодня!
                                    </p>
                                </div>

                                <a
                                    href="https://erasmus-plus.ec.europa.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-[#5f1464] to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Официальный сайт
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CSS для анимаций */}
            <style jsx>{`
                @keyframes spin-slow {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes float {
                    0% {
                        transform: translateY(0px);
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }

                    @keyframes float-delay {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }

                    @keyframes float-delay-2 {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-5px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }

                    @keyframes book-hover {
                        0% {
                            transform: perspective(1000px) rotateY(5deg);
                        }
                        50% {
                            transform: perspective(1000px) rotateY(-5deg);
                        }
                        100% {
                            transform: perspective(1000px) rotateY(5deg);
                        }
                    }

                    .animate-spin-slow {
                        animation: spin-slow 15s linear infinite;
                    }

                    .animate-float {
                        animation: float 4s ease-in-out infinite;
                    }

                    .animate-float-delay {
                        animation: float-delay 5s ease-in-out 1s infinite;
                    }

                    .animate-float-delay-2 {
                        animation: float-delay-2 3s ease-in-out 0.5s infinite;
                    }

                    .animate-book-hover {
                        animation: book-hover 6s ease-in-out infinite;
                    }

                    .animate-fade-in {
                        animation: fadeIn 0.5s ease-in-out;
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}</style>
        </div>
    );
}


