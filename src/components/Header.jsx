// // // // app/components/Header.jsx
// // // "use client";

// // // import React, { useState } from "react";
// // // import Link from 'next/link';
// // // import Popup from './Popup'; // Импортируем новый компонент
// // // import {
// // //     MapPin,
// // //     Telegram,
// // //     Instagram,
// // //     Facebook,
// // //     Youtube,
// // //     Menu,
// // //     X,
// // // } from "lucide-react";

// // // export default function Header() {
// // //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //     const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для попапа

// // //     const menuItems = [
// // //         // { name: "Новости", href: "/news" },
// // //         // { name: "Наши кампусы", href: "/campus" },
// // //         // { name: "Клинические базы", href: "/clinic-base" },
// // //         // { name: "Баклавриат", href: "/napravleniya" },
// // //         // { name: "Вакансии", href: "/vacancy" },
// // //         // { name: "Фотогаллерея", href: "/photogallery" },
// // //         // { name: "Научный журнал", href: "/journal" },
// // //         // { name: "Техникум EMU", href: "https://texnikum.emuni.uz/" },
// // //         // // { name: "Medical Foundation", href: "/pre-courses/" },
// // //         // { name: "Как нас найти", href: "/contacts" },
// // //         // { name: "Гранты", href: "/grants" },
// // //         // { name: "FAQ", href: "/faq" },

// // //         { name: "Приём 25-26", href: "https://apply.emuni.uz/" },
// // //         { name: "Баклавриат", href: "/napravleniya" },
// // //         { name: "Наши кампусы", href: "/campus" },
// // //         { name: "Клинические базы", href: "/clinic-base" },
// // //         { name: "Фотогаллерея", href: "/photogallery" },
// // //         { name: "Научный журнал", href: "/journal" },
// // //         { name: "Техникум EMU", href: "https://texnikum.emuni.uz/" },
// // //         { name: "Новости", href: "/news" },
// // //         { name: "Гранты", href: "/grants" },
// // //         { name: "Как нас найти", href: "/contacts" },
// // //         { name: "FAQ", href: "/faq" },
// // //         { name: "Вакансии", href: "/vacancy" },


// // //         // { name: "Medical Foundation", href: "/pre-courses/" },
// // //     ];

// // //     return (
// // //         <>
// // //             <header className="fixed top-0 w-full bg-[#5f1464] z-[10000] shadow-md">
// // //                 <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
// // //                     {/* Logo */}
// // //                     <Link href="/">
// // //                         <div className="flex items-center">
// // //                             <img
// // //                                 src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
// // //                                 alt="EMU University Logo"
// // //                                 width={140}
// // //                                 height={50}
// // //                                 className="w-[100px] md:w-[150px] object-contain"
// // //                             />
// // //                         </div>
// // //                     </Link>

// // //                     {/* Right Section */}
// // //                     <div className="flex items-center space-x-4">
// // //                         {/* Registration Button */}
// // //                         {/* <button
// // //                             onClick={() => setIsPopupOpen(true)}
// // //                             className="hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
// // //                         >
// // //                             Регистрация
// // //                         </button> */}

// // //                         {/* Social Icons */}
// // //                         <div className="flex space-x-2">
// // //                             <a href="#" className="text-white hover:text-gray-200 transition-colors">
// // //                                 <Instagram className="w-5 h-5" />
// // //                             </a>
// // //                             <a href="#" className="text-white hover:text-gray-200 transition-colors">
// // //                                 <Facebook className="w-5 h-5" />
// // //                             </a>
// // //                             <a href="#" className="text-white hover:text-gray-200 transition-colors">
// // //                                 <Youtube className="w-5 h-5" />
// // //                             </a>
// // //                         </div>

// // //                         {/* Phone */}
// // //                         <span className="text-white text-sm hidden md:inline">+998(78) 147-00-07</span>

// // //                         {/* Language Switch */}
// // //                         <div className="flex items-center space-x-2">
// // //                             <span className="text-white text-sm">RU</span>
// // //                             <span className="text-white text-sm">|</span>
// // //                             <span className="text-white text-sm">UZ</span>
// // //                         </div>

// // //                         {/* Location Icon */}
// // //                         <a href="#" className="text-white hover:text-gray-200 transition-colors">
// // //                             <MapPin className="w-5 h-5" />
// // //                         </a>

// // //                         <button
// // //                             onClick={() => setIsPopupOpen(true)}
// // //                             className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
// // //                         >
// // //                             Подать заявку
// // //                         </button>

// // //                         {/* Mobile Menu Button */}
// // //                         <button
// // //                             className="md:hidden text-white hover:text-gray-200 transition-colors"
// // //                             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //                         >
// // //                             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // //                         </button>
// // //                     </div>
// // //                 </div>

// // //                 {/* Mobile Menu */}
// // //                 {isMenuOpen && (
// // //                     <div className="md:hidden bg-[#5f1464] py-4 px-4">
// // //                         <ul className="space-y-4 text-white">
// // //                             {menuItems.map((item) => (
// // //                                 <li key={item.name}>
// // //                                     <a
// // //                                         href={item.href}
// // //                                         className="block px-4 py-2 hover:bg-[#7a407f] rounded transition-colors"
// // //                                     >
// // //                                         {item.name}
// // //                                     </a>
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </div>
// // //                 )}

// // //                 {/* Desktop Menu */}
// // //                 <div className="hidden md:block bg-[#5f1464] py-3 border-t-[2px] border-white">
// // //                     <ul className="max-w-screen-xl- mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
// // //                         {menuItems.map((item) => (
// // //                             <li key={item.name}>
// // //                                 <a
// // //                                     href={item.href}
// // //                                     className="px-4 py-1 hover:bg-[#7a407f] rounded transition-colors"
// // //                                 >
// // //                                     {item.name}
// // //                                 </a>
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>
// // //             </header>

// // //             {/* Popup */}
// // //             <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
// // //         </>
// // //     );
// // // }



// // // app/components/Header.jsx
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import Popup from './Popup';
// // import PopupUz from './Popup_uz';
// // import {
// //     MapPin,
// //     Telegram,
// //     Menu,
// //     X,
// // } from "lucide-react";
// // import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';


// // export default function Header() {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const [isPopupOpen, setIsPopupOpen] = useState(false);
// //     const [isUzLang, setIsUzLang] = useState(false);

// //     const pathname = usePathname();

// //     // Определяем текущий язык на основе URL
// //     useEffect(() => {
// //         setIsUzLang(pathname?.startsWith('/uz'));
// //     }, [pathname]);

// //     const menuItems = [
// //         { name: "Приём 25-26", name_uz: "Qabul 25-26", href: "https://apply.emuni.uz/", href_uz: "https://apply.emuni.uz/" },
// //         { name: "Баклавриат", name_uz: "Bakalavriat", href: "/napravleniya", href_uz: "/uz/napravleniya" },
// //         { name: "Наши кампусы", name_uz: "Bizning kampuslar", href: "/campus", href_uz: "/uz/campus" },
// //         { name: "Клинические базы", name_uz: "Klinik bazalar", href: "/clinic-base", href_uz: "/uz/clinic-base" },
// //         { name: "Фотогаллерея", name_uz: "Fotogalereya", href: "/photogallery", href_uz: "/uz/photogallery" },
// //         { name: "Научный журнал", name_uz: "Ilmiy jurnal", href: "/journal", href_uz: "/uz/journal" },
// //         { name: "Техникум EMU", name_uz: "EMU texnikumi", href: "https://texnikum.emuni.uz/", href_uz: "https://texnikum.emuni.uz/" },
// //         { name: "Новости", name_uz: "Yangiliklar", href: "/news", href_uz: "/uz/news" },
// //         { name: "Гранты", name_uz: "Grantlar", href: "/grants", href_uz: "/uz/grants" },
// //         { name: "Как нас найти", name_uz: "Bizni qanday topish mumkin", href: "/contacts", href_uz: "/uz/contacts" },
// //         { name: "FAQ", name_uz: "FAQ", href: "/faq", href_uz: "/uz/faq" },
// //         { name: "Вакансии", name_uz: "Vakansiyalar", href: "/vacancy", href_uz: "/uz/vacancy" },
// //     ];

// //     // Переключение языка
// //     const switchLanguage = (lang) => {
// //         if (lang === 'uz' && !isUzLang) {
// //             // Переключаемся на узбекский
// //             if (pathname === '/') {
// //                 window.location.href = '/uz';
// //             } else if (!pathname.startsWith('/uz')) {
// //                 window.location.href = `/uz${pathname}`;
// //             }
// //         } else if (lang === 'ru' && isUzLang) {
// //             // Переключаемся на русский
// //             window.location.href = pathname.replace('/uz', '');
// //         }
// //     };

// //     return (
// //         <>
// //             <header className="fixed top-0 w-full bg-[#5f1464] z-[10000] shadow-md">
// //                 <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
// //                     {/* Logo */}
// //                     <Link href={isUzLang ? "/uz" : "/"}>
// //                         <div className="flex items-center">
// //                             <img
// //                                 src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
// //                                 alt="EMU University Logo"
// //                                 width={140}
// //                                 height={50}
// //                                 className="w-[100px] md:w-[150px] object-contain"
// //                             />
// //                         </div>
// //                     </Link>

// //                     {/* Right Section */}
// //                     <div className="flex items-center space-x-4">
// //                         {/* Social Icons */}
// //                         <div className="flex space-x-2">
// //                             <a href="https://t.me/emuintash" className="text-white hover:text-gray-200 transition-colors">
// //                                 <SiTelegram className="w-5 h-5" />
// //                             </a>
// //                             <a href="https://instagram.com/emu_university" className="text-white hover:text-gray-200 transition-colors">
// //                                 <SiInstagram className="w-5 h-5" />
// //                             </a>
// //                             <a href="https://www.facebook.com/European-Medical-University-100381125622674" className="text-white hover:text-gray-200 transition-colors">
// //                                 <SiFacebook className="w-5 h-5" />
// //                             </a>
// //                             <a href="https://youtube.com/channel/UC_qXV-RChHnDVP0OPhdYnQQ" className="text-white hover:text-gray-200 transition-colors">
// //                                 <SiYoutube className="w-5 h-5" />
// //                             </a>
// //                         </div>

// //                         {/* Phone */}
// //                         <span className="text-white text-sm hidden md:inline">+998(78) 147-00-07</span>

// //                         {/* Language Switch */}
// //                         <div className="flex items-center space-x-2">
// //                             <button
// //                                 onClick={() => switchLanguage('ru')}
// //                                 className={`text-white text-sm ${!isUzLang ? 'font-bold' : ''}`}
// //                             >
// //                                 RU
// //                             </button>
// //                             <span className="text-white text-sm">|</span>
// //                             <button
// //                                 onClick={() => switchLanguage('uz')}
// //                                 className={`text-white text-sm ${isUzLang ? 'font-bold' : ''}`}
// //                             >
// //                                 UZ
// //                             </button>
// //                         </div>

// //                         {/* Location Icon */}
// //                         <a href="#" className="text-white hover:text-gray-200 transition-colors">
// //                             <MapPin className="w-5 h-5" />
// //                         </a>

// //                         <button
// //                             onClick={() => setIsPopupOpen(true)}
// //                             className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
// //                         >
// //                             {isUzLang ? "Ariza topshirish" : "Подать заявку"}
// //                         </button>

// //                         {/* Mobile Menu Button */}
// //                         <button
// //                             className="md:hidden text-white hover:text-gray-200 transition-colors"
// //                             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                         >
// //                             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Mobile Menu */}
// //                 {isMenuOpen && (
// //                     <div className="md:hidden bg-[#5f1464] py-4 px-4">
// //                         <ul className="space-y-4 text-white">
// //                             {menuItems.map((item) => (
// //                                 <li key={item.name}>
// //                                     <a
// //                                         href={isUzLang ? item.href_uz : item.href}
// //                                         className="block px-4 py-2 hover:bg-[#7a407f] rounded transition-colors"
// //                                     >
// //                                         {isUzLang ? item.name_uz : item.name}
// //                                     </a>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 )}

// //                 {/* Desktop Menu */}
// //                 <div className="hidden md:block bg-[#5f1464] py-3 border-t-[2px] border-white">
// //                     <ul className="max-w-screen-xl- mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
// //                         {menuItems.map((item) => (
// //                             <li key={item.name}>
// //                                 <a
// //                                     href={isUzLang ? item.href_uz : item.href}
// //                                     className="px-4 py-1 hover:bg-[#7a407f] rounded transition-colors"
// //                                 >
// //                                     {isUzLang ? item.name_uz : item.name}
// //                                 </a>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </header>

// //             {/* Popup - разные компоненты для русского и узбекского */}
// //             {isUzLang
// //                 ? <PopupUz isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
// //                 : <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
// //             }
// //         </>
// //     );
// // }


// // app/components/Header.jsx
// "use client";

// import React, { useState, useEffect } from "react";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Popup from './Popup';
// import PopupUz from './Popup_uz';
// import {
//     MapPin,
//     Telegram,
//     Menu,
//     X,
// } from "lucide-react";
// import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';


// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [isUzLang, setIsUzLang] = useState(false);

//     const pathname = usePathname();

//     // Определяем текущий язык на основе URL
//     useEffect(() => {
//         setIsUzLang(pathname?.startsWith('/uz'));
//     }, [pathname]);

//     const menuItems = [
//         { name: "Приём 25-26", name_uz: "Qabul 25-26", href: "https://apply.emuni.uz/", href_uz: "https://apply.emuni.uz/" },
//         { name: "Баклавриат", name_uz: "Bakalavriat", href: "/napravleniya", href_uz: "/uz/napravleniya" },
//         { name: "Наши кампусы", name_uz: "Bizning kampuslar", href: "/campus", href_uz: "/uz/campus" },
//         { name: "Клинические базы", name_uz: "Klinik bazalar", href: "/clinic-base", href_uz: "/uz/clinic-base" },
//         { name: "Фотогаллерея", name_uz: "Fotogalereya", href: "/photogallery", href_uz: "/uz/photogallery" },
//         { name: "Научный журнал", name_uz: "Ilmiy jurnal", href: "/journal", href_uz: "/uz/journal" },
//         { name: "Техникум EMU", name_uz: "EMU texnikumi", href: "https://texnikum.emuni.uz/", href_uz: "https://texnikum.emuni.uz/" },
//         { name: "Новости", name_uz: "Yangiliklar", href: "/blog", href_uz: "/uz/news" },
//         { name: "Гранты", name_uz: "Grantlar", href: "/grants", href_uz: "/uz/grants" },
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

//     return (
//         <>
//             <header className="fixed top-0 w-full bg-[#5f1464] z-[8000] shadow-md">
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
//                     <div className="flex items-center space-x-4">
//                         {/* Social Icons */}
//                         <div className="flex space-x-2">
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

//                         {/* Location Icon */}
//                         <a href="#" className="text-white hover:text-gray-200 transition-colors">
//                             <MapPin className="w-5 h-5" />
//                         </a>

//                         <button
//                             onClick={() => setIsPopupOpen(true)}
//                             className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
//                         >
//                             {isUzLang ? "Ariza topshirish" : "Подать заявку"}
//                         </button>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden text-white hover:text-gray-200 transition-colors"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-[#5f1464] py-4 px-4">
//                         <ul className="space-y-4 text-white">
//                             {menuItems.map((item) => (
//                                 <li key={item.name}>
//                                     <a
//                                         href={isUzLang ? item.href_uz : item.href}
//                                         className="block px-4 py-2 hover:bg-[#7a407f] rounded transition-colors"
//                                     >
//                                         {isUzLang ? item.name_uz : item.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Desktop Menu */}
//                 <div className="hidden md:block bg-[#5f1464] py-3 border-t-[2px] border-white">
//                     <ul className="max-w-screen-xl- mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
//                         {menuItems.map((item) => (
//                             <li key={item.name}>
//                                 <a
//                                     href={isUzLang ? item.href_uz : item.href}
//                                     className="px-4 py-1 hover:bg-[#7a407f] rounded transition-colors"
//                                 >
//                                     {isUzLang ? item.name_uz : item.name}
//                                 </a>
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

import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isUzLang, setIsUzLang] = useState(false);

    const pathname = usePathname();

    // Определяем текущий язык на основе URL
    useEffect(() => {
        setIsUzLang(pathname?.startsWith('/uz'));
    }, [pathname]);

    const menuItems = [
        { name: "Приём 25-26", name_uz: "Qabul 25-26", href: "https://apply.emuni.uz/", href_uz: "https://apply.emuni.uz/" },
        { name: "Баклавриат", name_uz: "Bakalavriat", href: "/napravleniya", href_uz: "/uz/napravleniya" },
        { name: "Магистратура", name_uz: "Magistratura", href: "/magistratura", href_uz: "/uz/magistratura" },
        { name: "Наши кампусы", name_uz: "Bizning kampuslar", href: "/campus", href_uz: "/uz/campus" },
        { name: "Клинические базы", name_uz: "Klinik bazalar", href: "/clinic-base", href_uz: "/uz/clinic-base" },
        { name: "Фотогаллерея", name_uz: "Fotogalereya", href: "/photogallery", href_uz: "/uz/photogallery" },
        { name: "Научный журнал", name_uz: "Ilmiy jurnal", href: "/journal", href_uz: "/uz/journal" },
        { name: "Техникум EMU", name_uz: "EMU texnikumi", href: "https://texnikum.emuni.uz/", href_uz: "https://texnikum.emuni.uz/" },
        { name: "Новости", name_uz: "Yangiliklar", href: "/blog", href_uz: "/uz/news" },
        { name: "Гранты", name_uz: "Grantlar", href: "/grants", href_uz: "/uz/grants" },
        { name: "Как нас найти", name_uz: "Bizni qanday topish mumkin", href: "/contacts", href_uz: "/uz/contacts" },
        { name: "FAQ", name_uz: "FAQ", href: "/faq", href_uz: "/uz/faq" },
        { name: "Вакансии", name_uz: "Vakansiyalar", href: "/vacancy", href_uz: "/uz/vacancy" },
        // { name: "Расписание", name_uz: "Dars jadvali", href: "/timetable", href_uz: "/uz/timetable" },
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

    return (
        <>
            <header className="fixed top-0 w-full bg-[#5f1464] z-[8000] shadow-lg">
                {/* Верхняя панель для студентов */}


                <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href={isUzLang ? "/uz" : "/"}>
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

                        {/* Location Icon */}
                        <a href="#" className="text-white hover:text-gray-200 transition-colors">
                            <MapPin className="w-5 h-5" />
                        </a>

                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                            {isUzLang ? "Ariza topshirish" : "Подать заявку"}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white hover:text-gray-200 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#5f1464] py-4 px-4">
                        {/* Student Platform and Timetable Mobile Buttons */}
                        <div className="flex flex-col gap-3 mb-5 bg-[#4a1050] p-4 rounded-xl">
                            <h3 className="text-white text-sm font-semibold flex items-center mb-2">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                {isUzLang ? "Talaba zonasi" : "Студенческая зона"}
                            </h3>
                            <a
                                href="https://edu.emuni.uz/"
                                className="flex items-center px-4 py-2 bg-white/90 text-[#5f1464] rounded-lg text-sm font-medium shadow-md"
                            >
                                <LogIn className="w-4 h-4 mr-2" />
                                {isUzLang ? "Kirish" : "Войти"}
                            </a>
                            <a
                                href={isUzLang ? "https://emu.edupage.org/timetable" : "https://emu.edupage.org/timetable"}
                                className="flex items-center px-4 py-2 bg-white/90 text-[#5f1464] rounded-lg text-sm font-medium shadow-md"
                            >
                                <CalendarClock className="w-4 h-4 mr-2" />
                                {isUzLang ? "Dars jadvali" : "Расписание"}
                            </a>
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="pop-form-trigger hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                            >
                                {isUzLang ? "Ariza topshirish" : "Подать заявку"}
                            </button>
                        </div>
                        <ul className="space-y-3 text-white">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={isUzLang ? item.href_uz : item.href}
                                        className="block px-4 py-2 hover:bg-[#7a407f] rounded-lg transition-colors"
                                    >
                                        {isUzLang ? item.name_uz : item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:block bg-[#5f1464] py-3 border-t border-white/30">
                    <ul className="max-w-screen-xl- mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-white text-sm">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={isUzLang ? item.href_uz : item.href}
                                    className="px-4 py-1 hover:bg-[#7a407f] rounded-lg transition-colors"
                                >
                                    {isUzLang ? item.name_uz : item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            {/* Popup - разные компоненты для русского и узбекского */}
            {isUzLang
                ? <PopupUz isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                : <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            }
        </>
    );
}