// // app/components/Header.jsx
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Popup from './Popup';
// import PopupUz from './Popup_uz';
// import {
//     MapPin,
//     Menu,
//     X,
//     User,
//     CalendarClock,
//     LogIn,
//     GraduationCap,
//     ChevronDown,
//     ChevronRight,
//     Locate
// } from "lucide-react";
// import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [isUzLang, setIsUzLang] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);

//     const dropdownRef = useRef(null);
//     const pathname = usePathname();

//     // Закрываем выпадающее меню при клике вне его
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Определяем текущий язык на основе URL
//     useEffect(() => {
//         setIsUzLang(pathname?.startsWith('/uz'));
//     }, [pathname]);

//     // Структура меню с подпунктами (более компактный формат)
//     const menuItems = [
//         { name: "Приём 25-26", name_uz: "Qabul 25-26", href: "https://apply.emuni.uz/", href_uz: "https://apply.emuni.uz/" },

//         {
//             name: "Направления", name_uz: "Yo'nalishlar", isDropdown: true,
//             subItems: [
//                 { name: "Баклавриат", name_uz: "Bakalavriat", href: "/napravleniya", href_uz: "/uz/napravleniya" },
//                 { name: "Магистратура", name_uz: "Magistratura", href: "/magistratura", href_uz: "/uz/magistratura" },
//                 { name: "Eramus +", name_uz: "Eramus +", href: "/eramus", href_uz: "/uz/eramus" },
//             ]
//         },

//         { name: "Гранты", name_uz: "Grantlar", href: "/grants", href_uz: "/uz/grants" },

//         {
//             name: "Об университете", name_uz: "Universitet haqida", isDropdown: true,
//             subItems: [
//                 { name: "Наши кампусы", name_uz: "Bizning kampuslar", href: "/campus", href_uz: "/uz/campus" },
//                 { name: "Клинические базы", name_uz: "Klinik bazalar", href: "/clinic-base", href_uz: "/uz/clinic-base" },
//                 { name: "Фотогаллерея", name_uz: "Fotogalereya", href: "/photogallery", href_uz: "/uz/photogallery" },
//                 { name: "Научный журнал", name_uz: "Ilmiy jurnal", href: "/journal", href_uz: "/uz/journal" },
//             ]
//         },


//         { name: "Техникум EMU", name_uz: "EMU texnikumi", href: "https://texnikum.emuni.uz/", href_uz: "https://texnikum.emuni.uz/" },
//         { name: "Новости", name_uz: "Yangiliklar", href: "/blog", href_uz: "/uz/news" },
//         { name: "Как нас найти", name_uz: "Bizni qanday topish mumkin", href: "/contacts", href_uz: "/uz/contacts" },
//         { name: "FAQ", name_uz: "FAQ", href: "/faq", href_uz: "/uz/faq" },
//         { name: "Вакансии", name_uz: "Vakansiyalar", href: "/vacancy", href_uz: "/uz/vacancy" },
//     ];

//     // Переключение языка - исправленная версия
//     const switchLanguage = (lang) => {
//         if (lang === 'uz' && !isUzLang) {
//             // Переключаемся на узбекский
//             if (pathname === '/' || pathname === '/ru') {
//                 window.location.href = '/uz';
//             } else if (!pathname.startsWith('/uz')) {
//                 window.location.href = `/uz${pathname}`;
//             }
//         } else if (lang === 'ru' && isUzLang) {
//             // Переключаемся на русский
//             if (pathname === '/uz') {
//                 window.location.href = '/ru';
//             } else {
//                 window.location.href = pathname.replace('/uz', '');
//             }
//         }
//     };

//     // Обработчик для выпадающего меню
//     const handleDropdownToggle = (index, e) => {
//         e.preventDefault();
//         setOpenDropdown(openDropdown === index ? null : index);
//     };

//     // Обработчик для мобильного выпадающего меню
//     const handleMobileDropdownToggle = (index, e) => {
//         e.preventDefault();
//         setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
//     };

//     return (
//         <>
//             <header className="fixed top-0 w-full bg-[#6B0E55] z-[8000] shadow-lg">
//                 <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
//                     {/* Logo */}
//                     <Link href={isUzLang ? "/uz" : "/"}>
//                         <div className="flex items-center">
//                             <img
//                                 src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
//                                 alt="EMU University Logo"
//                                 width={140}
//                                 height={50}
//                                 className="w-[100px] md:w-[150px] object-contain"
//                             />
//                         </div>
//                     </Link>

//                     {/* Right Section */}
//                     <div className="flex items-center space-x-2 md:space-x-4">
//                         <a
//                             href="https://edu.emuni.uz/"
//                             className="hidden md:flex items-center text-white px-3 py-1 text-xs rounded-md border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
//                         >
//                             <LogIn className="w-3 h-3 mr-1" />
//                             <span>{isUzLang ? "Kirish" : "Войти"}</span>
//                         </a>
//                         <a
//                             href="https://emu.edupage.org/timetable"
//                             className="hidden md:flex items-center text-white px-3 py-1 text-xs rounded-md border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
//                         >
//                             <CalendarClock className="w-3 h-3 mr-1" />
//                             <span>{isUzLang ? "Dars jadvali" : "Расписание"}</span>
//                         </a>

//                         {/* Social Icons */}
//                         <div className="hidden md:flex space-x-2">
//                             <a href="https://t.me/emuintash" className="text-white hover:text-gray-200 transition-colors">
//                                 <SiTelegram className="w-5 h-5" />
//                             </a>
//                             <a href="https://instagram.com/emu_university" className="text-white hover:text-gray-200 transition-colors">
//                                 <SiInstagram className="w-5 h-5" />
//                             </a>
//                             <a href="https://www.facebook.com/European-Medical-University-100381125622674" className="text-white hover:text-gray-200 transition-colors">
//                                 <SiFacebook className="w-5 h-5" />
//                             </a>
//                             <a href="https://youtube.com/channel/UC_qXV-RChHnDVP0OPhdYnQQ" className="text-white hover:text-gray-200 transition-colors">
//                                 <SiYoutube className="w-5 h-5" />
//                             </a>
//                         </div>

//                         {/* Phone */}
//                         <span className="text-white text-sm hidden md:inline">+998(78) 147-00-07</span>

//                         {/* Language Switch */}
//                         <div className="flex items-center space-x-2">
//                             <button
//                                 onClick={() => switchLanguage('ru')}
//                                 className={`text-white text-sm ${!isUzLang ? 'font-bold' : ''}`}
//                             >
//                                 RU
//                             </button>
//                             <span className="text-white text-sm">|</span>
//                             <button
//                                 onClick={() => switchLanguage('uz')}
//                                 className={`text-white text-sm ${isUzLang ? 'font-bold' : ''}`}
//                             >
//                                 UZ
//                             </button>
//                         </div>

//                         {/* 360 View Link */}
//                         <a
//                             href="https://emuni.uz/tour_360/"
//                             className="hidden md:flex flex-col items-center justify-center text-white"
//                         >
//                             <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all">
//                                 <Locate className="w-4 h-4" />
//                             </div>
//                             <span className="text-[10px] mt-1">360°</span>
//                         </a>

//                         <button
//                             onClick={() => setIsPopupOpen(true)}
//                             className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#6B0E55] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
//                         >
//                             {isUzLang ? "Ariza topshirish" : "Подать заявку"}
//                         </button>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="pl-2 md:hidden text-white hover:text-gray-200 transition-colors"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-[#6B0E55] py-4 px-4">
//                         {/* Student Platform and Timetable Mobile Buttons */}
//                         <div className="flex flex-col gap-3 mb-5 bg-[#4a1050] p-4 rounded-xl">
//                             <h3 className="text-white text-sm font-semibold flex items-center mb-2">
//                                 <GraduationCap className="w-4 h-4 mr-2" />
//                                 {isUzLang ? "Talaba zonasi" : "Студенческая зона"}
//                             </h3>
//                             <a
//                                 href="https://edu.emuni.uz/"
//                                 className="flex items-center px-4 py-2 bg-white/90 text-[#6B0E55] rounded-lg text-sm font-medium shadow-md"
//                             >
//                                 <LogIn className="w-4 h-4 mr-2" />
//                                 {isUzLang ? "Kirish" : "Войти"}
//                             </a>
//                             <a
//                                 href={isUzLang ? "https://emu.edupage.org/timetable" : "https://emu.edupage.org/timetable"}
//                                 className="flex items-center px-4 py-2 bg-white/90 text-[#6B0E55] rounded-lg text-sm font-medium shadow-md"
//                             >
//                                 <CalendarClock className="w-4 h-4 mr-2" />
//                                 {isUzLang ? "Dars jadvali" : "Расписание"}
//                             </a>

//                         </div>

//                         {/* <button
//                             onClick={() => setIsPopupOpen(true)}
//                             className="pop-form-trigger flex items-center justify-center px-4 py-2 bg-white/90 text-[#6B0E55] rounded-lg text-sm font-medium shadow-md"
//                         >
//                             {isUzLang ? "Ariza topshirish" : "Подать заявку"}
//                         </button> */}

//                         <ul className="space-y-2 text-white">
//                             {menuItems.map((item, index) => (
//                                 <li key={item.name} className="border-b border-white/10 pb-2">
//                                     {item.isDropdown ? (
//                                         <div>
//                                             <a
//                                                 href="#"
//                                                 onClick={(e) => handleMobileDropdownToggle(index, e)}
//                                                 className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#7a407f] rounded-lg transition-colors"
//                                             >
//                                                 <span>{isUzLang ? item.name_uz : item.name}</span>
//                                                 <ChevronDown
//                                                     className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === index ? 'rotate-180' : ''}`}
//                                                 />
//                                             </a>
//                                             {mobileOpenDropdown === index && (
//                                                 <ul className="mt-1 ml-4 space-y-1 border-l-2 border-white/20 pl-2">
//                                                     {item.subItems.map((subItem) => (
//                                                         <li key={subItem.name}>
//                                                             <a
//                                                                 href={isUzLang ? subItem.href_uz : subItem.href}
//                                                                 className="block px-4 py-2 text-sm hover:bg-[#7a407f] rounded-lg transition-colors"
//                                                             >
//                                                                 {isUzLang ? subItem.name_uz : subItem.name}
//                                                             </a>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </div>
//                                     ) : (
//                                         <a
//                                             href={isUzLang ? item.href_uz : item.href}
//                                             className="block px-4 py-2 hover:bg-[#7a407f] rounded-lg transition-colors"
//                                         >
//                                             {isUzLang ? item.name_uz : item.name}
//                                         </a>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Desktop Menu */}
//                 <div className="hidden md:block bg-[#6B0E55] py-3 border-t border-white/30" ref={dropdownRef}>
//                     <ul className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
//                         {menuItems.map((item, index) => (
//                             <li key={item.name} className="relative">
//                                 {item.isDropdown ? (
//                                     <div className="relative inline-block">
//                                         <a
//                                             href="#"
//                                             onClick={(e) => handleDropdownToggle(index, e)}
//                                             className="inline-flex items-center px-4 py-1 hover:bg-[#7a407f] rounded-lg transition-colors"
//                                         >
//                                             {isUzLang ? item.name_uz : item.name}
//                                             <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
//                                         </a>
//                                         {openDropdown === index && (
//                                             <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20">
//                                                 {item.subItems.map((subItem) => (
//                                                     <a
//                                                         key={subItem.name}
//                                                         href={isUzLang ? subItem.href_uz : subItem.href}
//                                                         className="block px-4 py-2 text-[#6B0E55] hover:bg-[#6B0E55] hover:text-white transition-colors"
//                                                     >
//                                                         {isUzLang ? subItem.name_uz : subItem.name}
//                                                     </a>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <a
//                                         href={isUzLang ? item.href_uz : item.href}
//                                         className="inline-block px-4 py-1 hover:bg-[#7a407f] rounded-lg transition-colors"
//                                     >
//                                         {isUzLang ? item.name_uz : item.name}
//                                     </a>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </header>

//             {/* Popup - разные компоненты для русского и узбекского */}
//             {isUzLang
//                 ? <PopupUz isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
//                 : <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
//             }
//         </>
//     );
// }


// app/components/Header.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Popup from './Popup';
import PopupUz from './Popup_uz';
import {
    MapPin,
    Menu,
    X,
    User,
    CalendarClock,
    LogIn,
    GraduationCap,
    ChevronDown,
    ChevronRight,
    Locate
} from "lucide-react";
import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isUzLang, setIsUzLang] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);

    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const pathname = usePathname();

    // Закрываем выпадающее меню при клике вне его
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Управление скроллом body при открытии меню
    useEffect(() => {
        if (isMenuOpen) {
            // Disable body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable body scroll when menu is closed
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure scroll is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Определяем текущий язык на основе URL
    useEffect(() => {
        setIsUzLang(pathname?.startsWith('/uz'));
    }, [pathname]);

    // Структура меню с подпунктами (более компактный формат)
    const menuItems = [
        { name: "Приём 25-26", name_uz: "Qabul 25-26", href: "https://apply.emuni.uz/", href_uz: "https://apply.emuni.uz/" },

        {
            name: "Направления", name_uz: "Yo'nalishlar", isDropdown: true,
            subItems: [
                { name: "Баклавриат", name_uz: "Bakalavriat", href: "/napravleniya", href_uz: "/uz/napravleniya" },
                { name: "Магистратура", name_uz: "Magistratura", href: "/magistratura", href_uz: "/uz/magistratura" },
                { name: "Erasmus +", name_uz: "Erasmus +", href: "/erasmus", href_uz: "/uz/erasmus" },
            ]
        },

        { name: "Гранты", name_uz: "Grantlar", href: "/grants", href_uz: "/uz/grants" },

        {
            name: "Об университете", name_uz: "Universitet haqida", isDropdown: true,
            subItems: [
                { name: "Наши кампусы", name_uz: "Bizning kampuslar", href: "/campus", href_uz: "/uz/campus" },
                { name: "Клинические базы", name_uz: "Klinik bazalar", href: "/clinic-base", href_uz: "/uz/clinic-base" },
                { name: "Фотогаллерея", name_uz: "Fotogalereya", href: "/photogallery", href_uz: "/uz/photogallery" },
                { name: "Зеленый Университет", name_uz: "Yashil Universitet", href: "/green", href_uz: "/uz/green" },
                { name: "Научный журнал", name_uz: "Ilmiy jurnal", href: "/journal", href_uz: "/uz/journal" },
            ]
        },


        { name: "Техникум EMU", name_uz: "EMU texnikumi", href: "https://texnikum.emuni.uz/", href_uz: "https://texnikum.emuni.uz/" },
        { name: "Новости", name_uz: "Yangiliklar", href: "/blog", href_uz: "/uz/news" },
        { name: "Как нас найти", name_uz: "Bizni qanday topish mumkin", href: "/contacts", href_uz: "/uz/contacts" },
        { name: "FAQ", name_uz: "FAQ", href: "/faq", href_uz: "/uz/faq" },
        { name: "Вакансии", name_uz: "Vakansiyalar", href: "/vacancy", href_uz: "/uz/vacancy" },
    ];

    // Переключение языка - исправленная версия
    const switchLanguage = (lang) => {
        if (lang === 'uz' && !isUzLang) {
            // Переключаемся на узбекский
            if (pathname === '/' || pathname === '/ru') {
                window.location.href = '/uz';
            } else if (!pathname.startsWith('/uz')) {
                window.location.href = `/uz${pathname}`;
            }
        } else if (lang === 'ru' && isUzLang) {
            // Переключаемся на русский
            if (pathname === '/uz') {
                window.location.href = '/ru';
            } else {
                window.location.href = pathname.replace('/uz', '');
            }
        }
    };

    // Обработчик для выпадающего меню
    const handleDropdownToggle = (index, e) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // Обработчик для мобильного выпадающего меню
    const handleMobileDropdownToggle = (index, e) => {
        e.preventDefault();
        setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
    };

    // Обработчик для переключения меню с анимацией
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className="fixed top-0 w-full bg-[#6B0E55] z-[8000] shadow-lg">
                <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href={isUzLang ? "/uz" : "/"} onClick={() => setIsMenuOpen(false)}>
                        <div className="flex items-center">
                            <img
                                src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
                                alt="EMU University Logo"
                                width={140}
                                height={50}
                                className="w-[100px] md:w-[150px] object-contain"
                            />
                        </div>
                    </Link>

                    {/* Right Section */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <a
                            href="https://edu.emuni.uz/"
                            className="hidden md:flex items-center text-white px-3 py-1 text-xs rounded-md border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                        >
                            <LogIn className="w-3 h-3 mr-1" />
                            <span>{isUzLang ? "Kirish" : "Войти"}</span>
                        </a>
                        <a
                            href="https://emu.edupage.org/timetable"
                            className="hidden md:flex items-center text-white px-3 py-1 text-xs rounded-md border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                        >
                            <CalendarClock className="w-3 h-3 mr-1" />
                            <span>{isUzLang ? "Dars jadvali" : "Расписание"}</span>
                        </a>

                        {/* Social Icons */}
                        <div className="hidden md:flex space-x-2">
                            <a href="https://t.me/emuintash" className="text-white hover:text-gray-200 transition-colors">
                                <SiTelegram className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/emu_university" className="text-white hover:text-gray-200 transition-colors">
                                <SiInstagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/European-Medical-University-100381125622674" className="text-white hover:text-gray-200 transition-colors">
                                <SiFacebook className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/channel/UC_qXV-RChHnDVP0OPhdYnQQ" className="text-white hover:text-gray-200 transition-colors">
                                <SiYoutube className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Phone */}
                        <span className="text-white text-sm hidden md:inline">+998(78) 147-00-07</span>

                        {/* Language Switch */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => switchLanguage('ru')}
                                className={`text-white text-sm ${!isUzLang ? 'font-bold' : ''}`}
                            >
                                RU
                            </button>
                            <span className="text-white text-sm">|</span>
                            <button
                                onClick={() => switchLanguage('uz')}
                                className={`text-white text-sm ${isUzLang ? 'font-bold' : ''}`}
                            >
                                UZ
                            </button>
                        </div>

                        {/* 360 View Link */}
                        <a
                            href="https://old.emuni.uz/tour_360/"
                            className="hidden md:flex flex-col items-center justify-center text-white"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all">
                                <Locate className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] mt-1">360°</span>
                        </a>

                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#6B0E55] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                            {isUzLang ? "Ariza topshirish" : "Подать заявку"}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="pl-2 md:hidden text-white hover:text-gray-200 transition-colors"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 animate-spin-once" />
                            ) : (
                                <Menu className="w-6 h-6 hover:scale-110 transition-transform" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Animated from Right Side */}
                <div
                    ref={mobileMenuRef}
                    className={`md:hidden bg-[#6B0E55] fixed top-[78px] right-0 z-[7999] w-[90%] h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="py-4 px-4">
                        {/* Student Platform and Timetable Mobile Buttons */}
                        <div className="flex flex-col gap-3 mb-5 bg-[#9c3f84] p-4 rounded-xl">
                            <h3 className="text-white text-sm font-semibold flex items-center mb-2">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                {isUzLang ? "Talaba zonasi" : "Студенческая зона"}
                            </h3>
                            <a
                                href="https://edu.emuni.uz/"
                                className="flex items-center px-4 py-2 bg-white/90 text-[#6B0E55] rounded-lg text-sm font-medium shadow-md hover:bg-white transition-colors"
                            >
                                <LogIn className="w-4 h-4 mr-2" />
                                {isUzLang ? "Kirish" : "Войти"}
                            </a>
                            <a
                                href={isUzLang ? "https://emu.edupage.org/timetable" : "https://emu.edupage.org/timetable"}
                                className="flex items-center px-4 py-2 bg-white/90 text-[#6B0E55] rounded-lg text-sm font-medium shadow-md hover:bg-white transition-colors"
                            >
                                <CalendarClock className="w-4 h-4 mr-2" />
                                {isUzLang ? "Dars jadvali" : "Расписание"}
                            </a>
                        </div>

                        <button
                            onClick={() => {
                                setIsPopupOpen(true);
                                setIsMenuOpen(false);
                            }}
                            className="w-full pop-form-trigger flex items-center justify-center px-4 py-3 mb-4 bg-white text-[#6B0E55] rounded-lg text-sm font-medium shadow-md hover:bg-gray-100 transition-colors"
                        >
                            {isUzLang ? "Ariza topshirish" : "Подать заявку"}
                        </button>

                        <ul className="space-y-2 text-white">
                            {menuItems.map((item, index) => (
                                <li key={item.name} className="border-b border-white/10 pb-2">
                                    {item.isDropdown ? (
                                        <div>
                                            <a
                                                href="#"
                                                onClick={(e) => handleMobileDropdownToggle(index, e)}
                                                className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#7a407f] rounded-lg transition-colors"
                                            >
                                                <span>{isUzLang ? item.name_uz : item.name}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${mobileOpenDropdown === index ? 'rotate-180' : ''}`}
                                                />
                                            </a>
                                            {/* <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenDropdown === index
                                                    ? 'max-h-96 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <ul className="mt-1 ml-4 space-y-1 border-l-2 border-white/20 pl-2">
                                                    {item.subItems.map((subItem) => (
                                                        <li key={subItem.name} className="transform transition-transform duration-300 ease-in-out hover:translate-x-1">
                                                            <a
                                                                href={isUzLang ? subItem.href_uz : subItem.href}
                                                                className="block px-4 py-2 text-sm hover:bg-[#7a407f] rounded-lg transition-colors"
                                                            >
                                                                {isUzLang ? subItem.name_uz : subItem.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div> */}

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenDropdown === index
                                                    ? 'max-h-96 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <ul className="mt-1 ml-4 space-y-1 border-l-2 border-white/20 pl-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li
                                                            key={subItem.name}
                                                            className={`transform transition-all duration-300 ease-in-out hover:translate-x-1 ${mobileOpenDropdown === index
                                                                ? 'translate-x-0 opacity-100'
                                                                : 'translate-x-8 opacity-0'
                                                                }`}
                                                            style={{
                                                                transitionDelay: mobileOpenDropdown === index
                                                                    ? `${subIndex * 80}ms`
                                                                    : '0ms'
                                                            }}
                                                        >
                                                            <a
                                                                href={isUzLang ? subItem.href_uz : subItem.href}
                                                                className="block px-4 py-2 text-sm hover:bg-[#7a407f] rounded-lg transition-colors"
                                                            >
                                                                {isUzLang ? subItem.name_uz : subItem.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <style jsx global>{`
                                                @keyframes fadeIn {
                                                    from { opacity: 0; }
                                                    to { opacity: 1; }
                                                }
                                                
                                                .animate-fadeIn {
                                                    animation: fadeIn 0.3s ease-in-out forwards;
                                                }
                                                
                                                @keyframes spin-once {
                                                    from { transform: rotate(0deg); }
                                                    to { transform: rotate(360deg); }
                                                }
                                                
                                                .animate-spin-once {
                                                    animation: spin-once 0.5s ease-in-out forwards;
                                                }
                                            `}</style>
                                        </div>
                                    ) : (
                                        <a
                                            href={isUzLang ? item.href_uz : item.href}
                                            className="block px-4 py-2 hover:bg-[#7a407f] rounded-lg transition-colors hover:translate-x-1 transform transition-transform duration-300 ease-in-out"
                                        >
                                            {isUzLang ? item.name_uz : item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons Mobile */}
                        <div className="flex justify-center space-x-6 mt-6 pt-4 border-t- border-white/10">
                            <a href="https://t.me/emuintash" className="text-white hover:text-gray-200 transition-colors hover:scale-110 transform">
                                <SiTelegram className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/emu_university" className="text-white hover:text-gray-200 transition-colors hover:scale-110 transform">
                                <SiInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/European-Medical-University-100381125622674" className="text-white hover:text-gray-200 transition-colors hover:scale-110 transform">
                                <SiFacebook className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com/channel/UC_qXV-RChHnDVP0OPhdYnQQ" className="text-white hover:text-gray-200 transition-colors hover:scale-110 transform">
                                <SiYoutube className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Phone Mobile */}
                        <div className="text-white text-center mt-4 pb-6">
                            {/* <p className="text-sm opacity-70">Телефон:</p> */}
                            <a href="tel:+998781470007" className="text-lg font-medium hover:underline">
                                +998(78) 147-00-07
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block bg-[#6B0E55] py-3 border-t border-white/30" ref={dropdownRef}>
                    <ul className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
                        {menuItems.map((item, index) => (
                            <li key={item.name} className="relative">
                                {item.isDropdown ? (
                                    <div className="relative inline-block">
                                        <a
                                            href="#"
                                            onClick={(e) => handleDropdownToggle(index, e)}
                                            className="inline-flex items-center px-4 py-1 hover:bg-[#9c3f84] rounded-lg transition-colors"
                                        >
                                            {isUzLang ? item.name_uz : item.name}
                                            <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                                        </a>
                                        {openDropdown === index && (
                                            <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20 animate-fadeIn">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={isUzLang ? subItem.href_uz : subItem.href}
                                                        className="block px-4 py-2 text-[#9c3f84] hover:bg-[#9c3f84] hover:text-white transition-colors"
                                                    >
                                                        {isUzLang ? subItem.name_uz : subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={isUzLang ? item.href_uz : item.href}
                                        className="inline-block px-4 py-1 hover:bg-[#9c3f84] rounded-lg transition-colors"
                                    >
                                        {isUzLang ? item.name_uz : item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </header >

            {/* Additional space to account for the fixed header */}
            {/* <div className="h-[144px] md:h-[120px]"></div> */}

            {/* Background overlay when menu is open */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[7998] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Popup - разные компоненты для русского и узбекского */}
            {
                isUzLang
                    ? <PopupUz isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                    : <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            }
        </>
    );
}