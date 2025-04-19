// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const ProgramsSlider = () => {
//     const [activeTab, setActiveTab] = useState('medical'); // По умолчанию "Медицинские направления"
//     const [medicalPrograms, setMedicalPrograms] = useState([]);
//     const [businessPrograms, setBusinessPrograms] = useState([]);
//     const [zaochnoePrograms, setZaochnoePrograms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [isTooltipVisible, setIsTooltipVisible] = useState({}); // Состояние для управления видимостью тултипов

//     // Текст для тултипов
//     const grantTooltipText =
//         "Грант — это финансовая поддержка, предоставляемая университетом для покрытия части или полной стоимости обучения, основанная на академических достижениях или других критериях.";
//     const stipendiyaTooltipText =
//         "Стипендия — это регулярные выплаты студентам за успехи в учебе, научной деятельности или другие достижения, предоставляемые университетом или другими организациями.";

//     // Функция для переключения видимости тултипа
//     const toggleTooltip = (index, type) => {
//         setIsTooltipVisible((prev) => ({
//             ...prev,
//             [`${type}-${index}`]: !prev[`${type}-${index}`],
//         }));
//     };

//     // Функция для очистки HTML-тегов из описания
//     const stripHtml = (html) => {
//         const div = document.createElement('div');
//         div.innerHTML = html;
//         return div.textContent || div.innerText || '';
//     };

//     // Получение данных из API
//     useEffect(() => {
//         const fetchPrograms = async () => {
//             try {
//                 const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81209');
//                 const data = await response.json();

//                 // Медицинские направления
//                 const medical = data.acf.napravleniya_v_med.map((program) => ({
//                     title: program.nazvanie,
//                     price: program.stoimost,
//                     description: stripHtml(program.opisanie_napravleniya),
//                     duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
//                     icon: 'https://emuni.uz/wp-content/uploads/2024/02/stethoscope.png',
//                     color: 'from-[#8a3c8a] to-[#631463]',
//                     iconBg: 'bg-[#8a3c8a]',
//                     bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
//                     textColor: 'text-white',
//                     granty: program.granty, // Добавляем гранты
//                     stipendiya: program.stipendiya, // Добавляем стипендии
//                 }));

//                 // Бизнес-направления
//                 const business = data.acf.napravleniya_v_biznes.map((program) => ({
//                     title: program.nazvanie,
//                     price: program.stoimost,
//                     description: stripHtml(program.opisanie_napravleniya),
//                     duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
//                     icon: 'https://emuni.uz/wp-content/uploads/2024/07/calculator.png',
//                     color: 'from-[#8a3c8a] to-[#631463]',
//                     iconBg: 'bg-[#8a3c8a]',
//                     bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
//                     textColor: 'text-white',
//                     granty: program.granty, // Добавляем гранты
//                     stipendiya: program.stipendiya, // Добавляем стипендии
//                 }));

//                 // Заочные направления
//                 const zaochnoe = data.acf.napravleniya_dlya_zaochki.map((program) => ({
//                     title: program.nazvanie,
//                     price: program.stoimost,
//                     description: stripHtml(program.opisanie_napravleniya),
//                     duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
//                     icon: 'https://emuni.uz/wp-content/uploads/2024/02/book-open.png',
//                     color: 'from-[#8a3c8a] to-[#631463]',
//                     iconBg: 'bg-[#8a3c8a]',
//                     bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
//                     textColor: 'text-white',
//                     granty: program.granty, // Добавляем гранты
//                     stipendiya: program.stipendiya, // Добавляем стипендии
//                 }));

//                 setMedicalPrograms(medical);
//                 setBusinessPrograms(business);
//                 setZaochnoePrograms(zaochnoe);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Ошибка при загрузке данных:', error);
//                 setLoading(false);
//             }
//         };

//         fetchPrograms();
//     }, []);

//     // Выбор активных программ в зависимости от таба
//     const activePrograms = activeTab === 'medical'
//         ? medicalPrograms
//         : activeTab === 'business'
//             ? businessPrograms
//             : zaochnoePrograms;

//     if (loading) {
//         return (
//             <div className="py-8 md:py-12 px-4 text-center">
//                 <p className="text-[#631463] text-lg">Загрузка программ...</p>
//             </div>
//         );
//     }

//     return (
//         <section id='directions_slider' className="py-8 md:py-12 px-4 relative overflow-hidden">
//             <div className="py-8 md:py-12 px-4 relative overflow-visible">
//                 <style jsx>{`
//                     .slide-animation-enter {
//                         animation: slideIn 0.5s ease-in-out forwards;
//                     }
//                     .slide-animation-exit {
//                         animation: slideOut 0.5s ease-in-out forwards;
//                     }
//                     @keyframes slideIn {
//                         0% { opacity: 0; transform: translateY(20px); }
//                         100% { opacity: 1; transform: translateY(0); }
//                     }
//                     @keyframes slideOut {
//                         0% { opacity: 1; transform: translateY(0); }
//                         100% { opacity: 0; transform: translateY(-20px); }
//                     }
//                 `}</style>

//                 {/* Заголовок и табы */}
//                 <div className="mb-8 md:mb-12 text-center">
//                     <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-[#631463]">
//                         Программы обучения
//                     </h3>
//                     <div className="flex flex-col md:flex-row justify-center gap-4">
//                         <button
//                             onClick={() => setActiveTab('medical')}
//                             className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'medical'
//                                 ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
//                                 : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
//                                 }`}
//                         >
//                             Медицинские направления
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('business')}
//                             className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'business'
//                                 ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
//                                 : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
//                                 }`}
//                         >
//                             Бизнес и социальные направления
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('zaochnoe')}
//                             className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'zaochnoe'
//                                 ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
//                                 : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
//                                 }`}
//                         >
//                             Заочные направления
//                         </button>
//                     </div>
//                 </div>

//                 {/* Слайдер */}
//                 <div className="relative max-w-screen-xl mx-auto overflow-visible">
//                     <Swiper
//                         modules={[Navigation, Autoplay]}
//                         spaceBetween={24}
//                         slidesPerView={1}
//                         loop={false}
//                         autoplay={{ delay: 5000, disableOnInteraction: false }}
//                         breakpoints={{
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 3 },
//                         }}
//                         navigation={{
//                             prevEl: '.swiper-button-prev-custom',
//                             nextEl: '.swiper-button-next-custom',
//                         }}
//                         className="pb-16 !overflow-visible"
//                         key={activeTab}
//                     >
//                         {activePrograms.map((program, index) => (
//                             <SwiperSlide key={index} className="h-auto">
//                                 <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
//                                     <div className="p-4 md:p-5 flex flex-col h-full">
//                                         <div
//                                             className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
//                                         >
//                                             <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
//                                                 <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
//                                                 <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
//                                             </div>
//                                             <div className="relative z-10">
//                                                 <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
//                                                     {program.title}
//                                                 </h3>
//                                                 <p className="text-2xl md:text-3xl font-bold text-center">
//                                                     {program.price}
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* Блок преимуществ (Гранты и Стипендии) */}
//                                         {/* <div className="flex gap-2 mb-3">
//                                             {program.granty && (
//                                                 <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                     </svg>
//                                                     Гранты
//                                                 </div>
//                                             )}
//                                             {program.stipendiya && (
//                                                 <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                                     </svg>
//                                                     Стипендия
//                                                 </div>
//                                             )}
//                                         </div> */}

//                                         <div className="flex gap-2 mb-3 relative">
//                                             {program.granty && (
//                                                 <div className="relative group">
//                                                     <div
//                                                         className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
//                                                         onClick={() => toggleTooltip(index, 'grant')}
//                                                     >
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             className="h-4 w-4 mr-1"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                             stroke="currentColor"
//                                                         >
//                                                             <path
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth={2}
//                                                                 d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                                             />
//                                                         </svg>
//                                                         Гранты
//                                                     </div>
//                                                     <div
//                                                         className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
//                                                             md:group-hover:opacity-100 md:opacity-0 
//                                                             ${isTooltipVisible[`grant-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
//                                                             top-full mt-1 left-0`}
//                                                     >
//                                                         {grantTooltipText}
//                                                         <div className="absolute left-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
//                                                     </div>
//                                                 </div>
//                                             )}
//                                             {program.stipendiya && (
//                                                 <div className="relative group">
//                                                     <div
//                                                         className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
//                                                         onClick={() => toggleTooltip(index, 'stipendiya')}
//                                                     >
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             className="h-4 w-4 mr-1"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                             stroke="currentColor"
//                                                         >
//                                                             <path
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth={2}
//                                                                 d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                                                             />
//                                                         </svg>
//                                                         Степендии
//                                                     </div>
//                                                     <div
//                                                         className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
//                                                             md:group-hover:opacity-100 md:opacity-0 
//                                                             ${isTooltipVisible[`stipendiya-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
//                                                             top-full mt-1 right-0`}
//                                                     >
//                                                         {stipendiyaTooltipText}
//                                                         <div className="absolute right-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>

//                                         <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow min-h-[6rem] relative z-10">
//                                             {program.description}
//                                         </p>
//                                         <div
//                                             className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
//                                             style={{ zIndex: 0 }}
//                                         ></div>
//                                         <div className="flex items-center justify-between relative z-10">
//                                             <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
//                                                 {program.duration}
//                                             </div>
//                                             <div
//                                                 className="pop-form-trigger cursor-pointer flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
//                                             >
//                                                 <span className="text-[#631463] text-sm font-medium mr-1">
//                                                     Подать заявку
//                                                 </span>
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="h-5 w-5 text-[#631463]"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M9 5l7 7-7 7"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Кнопки навигации */}
//                     <div className="flex justify-center gap-4 mt-8">
//                         <div className="swiper-button-prev-custom">
//                             <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M15 19l-7-7 7-7"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="swiper-button-next-custom">
//                             <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M9 5l7 7-7 7"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProgramsSlider;

'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProgramsSlider = () => {
    const [activeTab, setActiveTab] = useState('medical'); // По умолчанию "Медицинские направления"
    const [medicalPrograms, setMedicalPrograms] = useState([]);
    const [businessPrograms, setBusinessPrograms] = useState([]);
    const [zaochnoePrograms, setZaochnoePrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isTooltipVisible, setIsTooltipVisible] = useState({}); // Состояние для управления видимостью тултипов

    // Текст для тултипов
    const grantTooltipText =
        "Грант — это финансовая поддержка, предоставляемая университетом для покрытия части или полной стоимости обучения, основанная на академических достижениях или других критериях.";
    const stipendiyaTooltipText =
        "Стипендия — это регулярные выплаты студентам за успехи в учебе, научной деятельности или другие достижения, предоставляемые университетом или другими организациями.";

    // Функция для переключения видимости тултипа
    const toggleTooltip = (index, type) => {
        setIsTooltipVisible((prev) => ({
            ...prev,
            [`${type}-${index}`]: !prev[`${type}-${index}`],
        }));
    };

    // Функция для очистки HTML-тегов из описания
    const stripHtml = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    // Получение данных из API
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81209');
                const data = await response.json();

                // Медицинские направления
                const medical = data.acf.napravleniya_v_med.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/02/stethoscope.png',
                    color: 'from-[#8a3c8a] to-[#631463]',
                    iconBg: 'bg-[#8a3c8a]',
                    bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
                    textColor: 'text-white',
                    granty: program.granty, // Добавляем гранты
                    stipendiya: program.stipendiya, // Добавляем стипендии
                    firstShift: program['1_smena'], // Добавляем первую смену
                    secondShift: program['2_smena'], // Добавляем вторую смену
                }));

                // Бизнес-направления
                const business = data.acf.napravleniya_v_biznes.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/07/calculator.png',
                    color: 'from-[#8a3c8a] to-[#631463]',
                    iconBg: 'bg-[#8a3c8a]',
                    bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
                    textColor: 'text-white',
                    granty: program.granty, // Добавляем гранты
                    stipendiya: program.stipendiya, // Добавляем стипендии
                    firstShift: program['1_smena'], // Добавляем первую смену
                    secondShift: program['2_smena'], // Добавляем вторую смену
                }));

                // Заочные направления
                const zaochnoe = data.acf.napravleniya_dlya_zaochki.map((program) => ({
                    title: program.nazvanie,
                    price: program.stoimost,
                    description: stripHtml(program.opisanie_napravleniya),
                    duration: `${program.let_obucheniya} ${program.let_obucheniya === '1' ? 'год' : 'лет'}`,
                    icon: 'https://emuni.uz/wp-content/uploads/2024/02/book-open.png',
                    color: 'from-[#8a3c8a] to-[#631463]',
                    iconBg: 'bg-[#8a3c8a]',
                    bgGradient: 'bg-gradient-to-br from-[#8a3c8a] to-[#631463]',
                    textColor: 'text-white',
                    granty: program.granty, // Добавляем гранты
                    stipendiya: program.stipendiya, // Добавляем стипендии
                    firstShift: program['1_smena'], // Добавляем первую смену
                    secondShift: program['2_smena'], // Добавляем вторую смену
                }));

                setMedicalPrograms(medical);
                setBusinessPrograms(business);
                setZaochnoePrograms(zaochnoe);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    // Выбор активных программ в зависимости от таба
    const activePrograms = activeTab === 'medical'
        ? medicalPrograms
        : activeTab === 'business'
            ? businessPrograms
            : zaochnoePrograms;

    if (loading) {
        return (
            <div className="py-8 md:py-12 px-4 text-center">
                <p className="text-[#631463] text-lg">Загрузка программ...</p>
            </div>
        );
    }

    return (
        <section id='directions_slider' className="py-8 md:py-12 px-4 relative overflow-hidden">
            <div className="py-8 md:py-12 px-4 relative overflow-visible">
                <style jsx>{`
                    .slide-animation-enter {
                        animation: slideIn 0.5s ease-in-out forwards;
                    }
                    .slide-animation-exit {
                        animation: slideOut 0.5s ease-in-out forwards;
                    }
                    @keyframes slideIn {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideOut {
                        0% { opacity: 1; transform: translateY(0); }
                        100% { opacity: 0; transform: translateY(-20px); }
                    }
                `}</style>

                {/* Заголовок и табы */}
                <div className="mb-8 md:mb-12 text-center">
                    <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-[#631463]">
                        Программы обучения
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('medical')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'medical'
                                ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
                                : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
                                }`}
                        >
                            Медицинские направления
                        </button>
                        <button
                            onClick={() => setActiveTab('business')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'business'
                                ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
                                : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
                                }`}
                        >
                            Бизнес и социальные направления
                        </button>
                        <button
                            onClick={() => setActiveTab('zaochnoe')}
                            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === 'zaochnoe'
                                ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white shadow-lg'
                                : 'bg-white text-[#631463] border-2 border-[#631463] hover:bg-[#f7eef7]'
                                }`}
                        >
                            Заочные направления
                        </button>
                    </div>
                </div>

                {/* Слайдер */}
                <div className="relative max-w-screen-xl mx-auto overflow-visible">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={false}
                        autoplay={{ delay: 500000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        className="pb-16 !overflow-visible"
                        key={activeTab}
                    >
                        {activePrograms.map((program, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 slide-animation-enter">
                                    <div className="p-4 md:p-5 flex flex-col h-full">
                                        <div
                                            className={`${program.bgGradient} ${program.textColor} rounded-lg p-4 md:p-5 mb-4 relative overflow-hidden`}
                                        >
                                            {/* Декоративный блок с информацией о сменах */}
                                            <div className="absolute top-0 left-0 w-full h-full opacity-20- z-0">
                                                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                                                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>

                                                {/* Блоки с информацией о сменах */}
                                                <div className="absolute top-2 left-2 flex gap-2 z-[1000]">
                                                    {program.firstShift && (
                                                        <div className="flex items-center bg-[#ffe0ac] text-[#f59e0b] px-3 py-[2px] rounded-full text-xs font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            1 смена
                                                        </div>
                                                    )}
                                                    {program.secondShift && (
                                                        <div className="flex items-center bg-[#eaeaea] text-[#6b7280] px-3 py-[2px] rounded-full text-xs font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            2 смена
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative z-10">
                                                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                                                    {program.title}
                                                </h3>
                                                <p className="text-2xl md:text-3xl font-bold text-center">
                                                    {program.price}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 mb-3 relative">
                                            {program.granty && (
                                                <div className="relative group">
                                                    <div
                                                        className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                                                        onClick={() => toggleTooltip(index, 'grant')}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
                                                        </svg>
                                                        Гранты
                                                    </div>
                                                    <div
                                                        className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                                                            md:group-hover:opacity-100 md:opacity-0 
                                                            ${isTooltipVisible[`grant-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
                                                            top-full mt-1 left-0`}
                                                    >
                                                        {grantTooltipText}
                                                        <div className="absolute left-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
                                                    </div>
                                                </div>
                                            )}
                                            {program.stipendiya && (
                                                <div className="relative group">
                                                    <div
                                                        className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                                                        onClick={() => toggleTooltip(index, 'stipendiya')}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                            />
                                                        </svg>
                                                        Степендии
                                                    </div>
                                                    <div
                                                        className={`absolute z-[999] w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg transition-opacity duration-300 
                                                            md:group-hover:opacity-100 md:opacity-0 
                                                            ${isTooltipVisible[`stipendiya-${index}`] ? "opacity-100" : "opacity-0 md:opacity-0"} 
                                                            top-full mt-1 right-0`}
                                                    >
                                                        {stipendiyaTooltipText}
                                                        <div className="absolute right-4 top-[-6px] w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-xs md:text-sm text-gray-600 mb-6 flex-grow min-h-[6rem] relative z-10">
                                            {program.description}
                                        </p>
                                        <div
                                            className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[#f7eef7] opacity-30"
                                            style={{ zIndex: 0 }}
                                        ></div>
                                        <div className="flex items-center justify-between relative z-10">
                                            <div className="bg-[#f7eef7] text-[#631463] py-2 px-4 rounded-full text-center font-medium">
                                                {program.duration}
                                            </div>
                                            <div
                                                className="pop-form-trigger cursor-pointer flex items-center bg-white rounded-full py-2 px-4 shadow-md hover:bg-[#f7eef7] transition-colors duration-300"
                                            >
                                                <span className="text-[#631463] text-sm font-medium mr-1">
                                                    Подать заявку
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-[#631463]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кнопки навигации */}
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="swiper-button-prev-custom">
                            <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="swiper-button-next-custom">
                            <button className="w-10 h-10 bg-[#631463] text-white rounded-full flex items-center justify-center hover:bg-[#8a3c8a] transition-colors transform hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSlider;