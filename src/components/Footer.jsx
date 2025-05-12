// // app/components/Footer.jsx
// 'use client'
// import React from "react";
// import Image from "next/image";
// import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';
// import { usePathname } from 'next/navigation';

// export default function Footer() {
//     const pathname = usePathname();
//     const isUzLang = pathname?.startsWith('/uz');

//     return (
//         <footer className="bg-[#6B0E55] text-white py-8">
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6">
//                     {/* Logo and Address */}
//                     <div>
//                         <div className="flex items-center mb-4">
//                             <img
//                                 src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
//                                 alt="EMU University Logo"
//                                 width={180}
//                                 height={50}
//                                 className="md:hidden block object-contain"
//                             />
//                             <img
//                                 src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emuni-footer-logo.png"
//                                 alt="EMU University Logo"
//                                 width={546}
//                                 height={623}
//                                 className="hidden md:block w-[70%] object-contain"
//                             />
//                         </div>
//                         <p className="hidden text-sm">
//                             {isUzLang ? "Bugungi tashrif: 205" : "Посещаемость сегодня: 205"}
//                             <br />
//                             {isUzLang ? "Haftalik tashrif: 1594" : "Посещаемость за неделю: 1594"}
//                             <br />
//                             {isUzLang ? "Oylik tashrif: 7775" : "Посещаемость за месяц: 7775"}
//                             <br />
//                             {isUzLang ? "Jami tashrif: 387104" : "Всего посещений: 387104"}
//                         </p>
//                     </div>

//                     {/* Benefits */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4">
//                             {isUzLang ? "Bizni tanlang va qabul qiling" : "Выберите нас и получите"}
//                         </h3>
//                         <p className="text-sm">
//                             {isUzLang
//                                 ? "Bizni tanlang va Toshkent shahrida nufuzli ta'lim oling! Bizda buyuk shifokorlarning munosib vorislari – ajoyib insonlar, dunyoga mashhur olimlar, ajoyib mutaxassislar va yetuk pedagoglar faoliyat olib boradilar."
//                                 : "Престижное медицинское образование в Ташкенте! Мы разработали доступные приемные величины — замечательные люди, учеба с мировым именем, прекрасные специалисты и блестящие педагоги."}
//                         </p>
//                     </div>

//                     {/* Social Media and Hours */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4">
//                             {isUzLang ? "Ijtimoiy tarmoqlar" : "Мы в социальных сетях"}
//                         </h3>
//                         <div className="flex space-x-4 mb-4">
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
//                         <br />

//                         <h3 className="text-lg font-bold mb-2">
//                             {isUzLang ? "Ish grafigi:" : "График работы:"}
//                         </h3>
//                         <p className="text-sm">
//                             {isUzLang ? "Dushanba-juma: 9:00-17:00" : "Понедельник-пятница: 9:00-17:00"}
//                             <br />
//                             {isUzLang ? "Shanba: 9:00-15:00" : "Суббота: 9:00-15:00"}
//                             <br />
//                             {isUzLang ? "Yakshanba: dam olish kuni" : "Воскресенье: выходной день"}
//                         </p>
//                     </div>

//                     {/* Contacts */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4">
//                             {isUzLang ? "Murojaat uchun kontaktlar" : "Контакты"}
//                         </h3>
//                         <p className="text-sm">
//                             +998(78) 147-00-07
//                             <br />
//                             <br />
//                             {isUzLang ? "Muqimiy ko'chasi 7/1, Toshkent, O'zbekiston" : "Улица Мукими 7/1, Ташкент, Узбекистан"}
//                             <br />
//                             <br />
//                             info@emuni.uz
//                         </p>

//                         <a href={isUzLang ? "/uz/faq" : "/faq"}
//                             className="text-sm text-white hover:underline"
//                         >
//                             <h3 className="text-lg font-bold mt-4 mb-2">FAQ</h3>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Copyright */}
//                 <div className="text-center text-sm pt-4 border-t border-white">
//                     © 2020 EMU University
//                 </div>
//             </div>

//             {/* Custom Styles */}
//             <style jsx global>{`
//                 @keyframes pulse {
//                     0%,
//                     100% {
//                         opacity: 0.7;
//                     }
//                     50% {
//                         opacity: 0.5;
//                     }
//                 }
//             `}</style>
//         </footer >
//     );
// }

// app/components/Footer.jsx
'use client'
import React from "react";
import Image from "next/image";
import { SiInstagram, SiTelegram, SiFacebook, SiYoutube } from 'react-icons/si';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isUzLang = pathname?.startsWith('/uz');
    const isEngLang = pathname?.startsWith('/eng');

    return (
        <footer className="bg-[#6B0E55] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6">
                    {/* Logo and Address */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
                                alt="EMU University Logo"
                                width={180}
                                height={50}
                                className="md:hidden block object-contain"
                            />

                            <Image
                                src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emuni-footer-logo.png"
                                alt="EMU University Logo"
                                width={546}
                                height={623}
                                className="hidden md:block w-[70%] object-contain"
                            />
                        </div>
                        <p className="hidden text-sm">
                            {isUzLang
                                ? "Bugungi tashrif: 205"
                                : isEngLang
                                    ? "Today's visitors: 205"
                                    : "Посещаемость сегодня: 205"}
                            <br />
                            {isUzLang
                                ? "Haftalik tashrif: 1594"
                                : isEngLang
                                    ? "Weekly visitors: 1594"
                                    : "Посещаемость за неделю: 1594"}
                            <br />
                            {isUzLang
                                ? "Oylik tashrif: 7775"
                                : isEngLang
                                    ? "Monthly visitors: 7775"
                                    : "Посещаемость за месяц: 7775"}
                            <br />
                            {isUzLang
                                ? "Jami tashrif: 387104"
                                : isEngLang
                                    ? "Total visitors: 387104"
                                    : "Всего посещений: 387104"}
                        </p>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            {isUzLang
                                ? "Bizni tanlang va qabul qiling"
                                : isEngLang
                                    ? "Choose us and receive"
                                    : "Выберите нас и получите"}
                        </h3>
                        <p className="text-sm">
                            {isUzLang
                                ? "Bizni tanlang va Toshkent shahrida nufuzli ta'lim oling! Bizda buyuk shifokorlarning munosib vorislari – ajoyib insonlar, dunyoga mashhur olimlar, ajoyib mutaxassislar va yetuk pedagoglar faoliyat olib boradilar."
                                : isEngLang
                                    ? "Choose us and get a prestigious medical education in Tashkent! We have worthy successors of great doctors – great people, world-renowned scientists, great specialists and mature educators."
                                    : "Престижное медицинское образование в Ташкенте! Мы разработали доступные приемные величины — замечательные люди, учеба с мировым именем, прекрасные специалисты и блестящие педагоги."}
                        </p>
                    </div>

                    {/* Social Media and Hours */}
                    <div className="md:pl-8">
                        <h3 className="text-lg font-bold mb-4">
                            {isUzLang
                                ? "Ijtimoiy tarmoqlar"
                                : isEngLang
                                    ? "Our Social Media"
                                    : "Мы в социальных сетях"}
                        </h3>
                        <div className="flex space-x-4 mb-4">
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
                        <br />

                        <h3 className="text-lg font-bold mb-2">
                            {isUzLang
                                ? "Ish grafigi:"
                                : isEngLang
                                    ? "Working Hours:"
                                    : "График работы:"}
                        </h3>
                        <p className="text-sm">
                            {isUzLang
                                ? "Dushanba-juma: 9:00-17:00"
                                : isEngLang
                                    ? "Monday-Friday: 9:00-17:00"
                                    : "Понедельник-пятница: 9:00-17:00"}
                            <br />
                            {isUzLang
                                ? "Shanba: 9:00-15:00"
                                : isEngLang
                                    ? "Saturday: 9:00-15:00"
                                    : "Суббота: 9:00-15:00"}
                            <br />
                            {isUzLang
                                ? "Yakshanba: dam olish kuni"
                                : isEngLang
                                    ? "Sunday: closed"
                                    : "Воскресенье: выходной день"}
                        </p>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            {isUzLang
                                ? "Murojaat uchun kontaktlar"
                                : isEngLang
                                    ? "Contact Information"
                                    : "Контакты"}
                        </h3>
                        <p className="text-sm">
                            +998(78) 147-00-07
                            <br />
                            <br />
                            {isUzLang
                                ? "Muqimiy ko'chasi 7/1, Toshkent, O'zbekiston"
                                : isEngLang
                                    ? "7/1 Mukimi Street, Tashkent, Uzbekistan"
                                    : "Улица Мукими 7/1, Ташкент, Узбекистан"}
                            <br />
                            <br />
                            info@emuni.uz
                        </p>

                        <a href={isUzLang
                            ? "/uz/faq"
                            : isEngLang
                                ? "/eng/faq"
                                : "/faq"}
                            className="text-sm text-white hover:underline"
                        >
                            <h3 className="text-lg font-bold mt-4 mb-2">FAQ</h3>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm pt-4 border-t border-white">
                    © 2020 EMU University
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 0.7;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </footer >
    );
}