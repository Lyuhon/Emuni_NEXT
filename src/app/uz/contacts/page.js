// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { Phone, Mail, Clock, MapPin, Home, ExternalLink, Car } from 'lucide-react';

// // // // Анимации
// // // const fadeIn = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.8 } }
// // // };

// // // const slideInFromLeft = {
// // //     hidden: { x: -50, opacity: 0 },
// // //     visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
// // // };

// // // const slideInFromRight = {
// // //     hidden: { x: 50, opacity: 0 },
// // //     visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
// // // };

// // // const ContactsPage = () => {
// // //     // Состояние для переключения между локациями
// // //     const [activeLocation, setActiveLocation] = useState('main');

// // //     // Фирменные цвета
// // //     const brandColor = '#631463';
// // //     const brandColorLight = '#8a3c8a';
// // //     const brandColorLighter = '#f7eef7';

// // //     // Функция смены локации с анимацией
// // //     const changeLocation = (location) => {
// // //         if (location !== activeLocation) {
// // //             setActiveLocation(location);
// // //         }
// // //     };

// // //     // Данные о локациях
// // //     const locations = {
// // //         main: {
// // //             title: 'EMU University',
// // //             address: 'г. Ташкент, ул. Мукими',
// // //             phone: '+998 (71) 147-00-57',
// // //             email: 'info@emuni.uz',
// // //             workingHours: 'Пн-Пт: 9:00 - 17:00, Сб: 9:00 - 15:00',
// // //             mapPosition: { lat: 41.291876, lng: 69.301332 },
// // //             zoom: 15
// // //         },
// // //         clinic: {
// // //             title: 'EMU Medical School',
// // //             address: 'г. Ташкент, ----',
// // //             phone: '+998 (99) 999-99-99',
// // //             email: 'info@emuni.uz',
// // //             workingHours: 'Пн-Пт: 9:00 - 17:00, Сб: 9:00 - 15:00',
// // //             mapPosition: { lat: 41.297241, lng: 69.252472 },
// // //             zoom: 15
// // //         }
// // //     };

// // //     // Получаем данные для активной локации
// // //     const currentLocation = locations[activeLocation];

// // //     return (
// // //         <div className="min-h-screen bg-gray-50">
// // //             {/* Hero Section */}
// // //             <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
// // //                 background: `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('https://emuni.uz/wp-content/uploads/2023/10/glavnyj-korpus.webp')`,
// // //                 backgroundSize: 'cover',
// // //                 backgroundPosition: 'center'
// // //             }}>
// // //                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
// // //                 <div className="text-center z-10 px-4">
// // //                     <h1 className="text-5xl font-bold text-white mb-4">Контакты</h1>
// // //                     <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
// // //                     <p className="text-xl text-white max-w-3xl">
// // //                         Мы всегда рады видеть вас в нашем университете
// // //                     </p>
// // //                 </div>
// // //                 <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
// // //                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
// // //                         <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
// // //                         <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
// // //                         <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
// // //                     </svg>
// // //                 </div>
// // //             </div>

// // //             {/* Main Content */}
// // //             <div className="max-w-screen-xl mx-auto px-6 py-12">
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                     {/* Контактная информация */}
// // //                     <motion.div
// // //                         initial="hidden"
// // //                         whileInView="visible"
// // //                         viewport={{ once: true }}
// // //                         variants={slideInFromLeft}
// // //                         className="lg:col-span-1"
// // //                     >
// // //                         <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
// // //                             {/* Переключатель локаций */}
// // //                             <div className="flex border-b">
// // //                                 <button
// // //                                     className={`flex-1 text-center py-4 font-medium ${activeLocation === 'main'
// // //                                         ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white'
// // //                                         : 'bg-gray-50 text-gray-700'}`}
// // //                                     onClick={() => changeLocation('main')}
// // //                                 >
// // //                                     University
// // //                                 </button>
// // //                                 <button
// // //                                     className={`flex-1 text-center py-4 font-medium ${activeLocation === 'clinic'
// // //                                         ? 'bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white'
// // //                                         : 'bg-gray-50 text-gray-700'}`}
// // //                                     onClick={() => changeLocation('clinic')}
// // //                                 >
// // //                                     Medical School
// // //                                 </button>
// // //                             </div>

// // //                             <div className="p-6">
// // //                                 <AnimatePresence mode="wait">
// // //                                     <motion.div
// // //                                         key={activeLocation}
// // //                                         initial={{ opacity: 0, y: 20 }}
// // //                                         animate={{ opacity: 1, y: 0 }}
// // //                                         exit={{ opacity: 0, y: -20 }}
// // //                                         transition={{ duration: 0.3 }}
// // //                                     >
// // //                                         <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>
// // //                                             {currentLocation.title}
// // //                                         </h2>

// // //                                         <ul className="space-y-6 mb-8">
// // //                                             <li className="flex items-start">
// // //                                                 <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: brandColorLighter }}>
// // //                                                     <MapPin size={20} style={{ color: brandColor }} />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <p className="font-medium text-gray-800">Адрес:</p>
// // //                                                     <p className="text-gray-600">{currentLocation.address}</p>
// // //                                                 </div>
// // //                                             </li>
// // //                                             <li className="flex items-start">
// // //                                                 <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: brandColorLighter }}>
// // //                                                     <Phone size={20} style={{ color: brandColor }} />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <p className="font-medium text-gray-800">Телефон:</p>
// // //                                                     <a href={`tel:${currentLocation.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-[#631463] transition-colors">
// // //                                                         {currentLocation.phone}
// // //                                                     </a>
// // //                                                 </div>
// // //                                             </li>
// // //                                             <li className="flex items-start">
// // //                                                 <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: brandColorLighter }}>
// // //                                                     <Mail size={20} style={{ color: brandColor }} />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <p className="font-medium text-gray-800">Email:</p>
// // //                                                     <a href={`mailto:${currentLocation.email}`} className="text-gray-600 hover:text-[#631463] transition-colors">
// // //                                                         {currentLocation.email}
// // //                                                     </a>
// // //                                                 </div>
// // //                                             </li>
// // //                                             <li className="flex items-start">
// // //                                                 <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: brandColorLighter }}>
// // //                                                     <Clock size={20} style={{ color: brandColor }} />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <p className="font-medium text-gray-800">Время работы:</p>
// // //                                                     <p className="text-gray-600">{currentLocation.workingHours}</p>
// // //                                                 </div>
// // //                                             </li>
// // //                                         </ul>

// // //                                         {/* Открыть в Google Maps */}
// // //                                         <a
// // //                                             href={`https://www.google.com/maps?q=${currentLocation.mapPosition.lat},${currentLocation.mapPosition.lng}`}
// // //                                             target="_blank"
// // //                                             rel="noopener noreferrer"
// // //                                             className="block w-full bg-gradient-to-r from-[#631463] to-[#8a3c8a] text-white font-bold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center mt-4"
// // //                                         >
// // //                                             <ExternalLink size={18} className="inline mr-2" />
// // //                                             Заказать такси
// // //                                         </a>
// // //                                     </motion.div>
// // //                                 </AnimatePresence>
// // //                             </div>
// // //                         </div>
// // //                     </motion.div>

// // //                     {/* Карта */}
// // //                     <motion.div
// // //                         initial="hidden"
// // //                         whileInView="visible"
// // //                         viewport={{ once: true }}
// // //                         variants={slideInFromRight}
// // //                         className="lg:col-span-2"
// // //                     >
// // //                         <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
// // //                             <div className="relative flex-grow w-full h-[350px] sm:h-[400px] md:h-full">
// // //                                 <iframe
// // //                                     src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.674141073725!2d${currentLocation.mapPosition.lng}!3d${currentLocation.mapPosition.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzMwLjgiTiA2OcKwMTgnMDUuMCJF!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus`}
// // //                                     className="absolute top-0 left-0 w-full h-full"
// // //                                     frameBorder="0"
// // //                                     style={{ border: 0 }}
// // //                                     allowFullScreen=""
// // //                                     aria-hidden="false"
// // //                                     tabIndex="0"
// // //                                     loading="lazy"
// // //                                     referrerPolicy="no-referrer-when-downgrade"
// // //                                 ></iframe>
// // //                             </div>
// // //                         </div>
// // //                     </motion.div>
// // //                 </div>

// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default ContactsPage;


// // 'use client';

// // import React from 'react';
// // import ContactInfo from './ContactInfo';

// // // Анимации
// // const fadeIn = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { duration: 0.8 } }
// // };

// // export default async function ContactsPage() {
// //     // Fetch data with ISR (revalidate every 3600 seconds)
// //     const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81391', {
// //         next: { revalidate: 3600 }
// //     });
// //     const data = await res.json();

// //     // Фирменные цвета
// //     const brandColor = '#631463';
// //     const brandColorLighter = '#f7eef7';

// //     // Данные для hero секции
// //     const heroData = {
// //         title: data.acf.sekcziya_hiro.zagolovok_straniczy_uz,
// //         description: data.acf.sekcziya_hiro.kratkoe_opisanie_uz,
// //         background: data.acf.sekcziya_hiro.zadnij_fon.url
// //     };

// //     // Данные о локациях
// //     const locations = {
// //         main: {
// //             title: data.acf.pervyj_adres.kontakty_uz.nazvanie_lokaczii,
// //             address: data.acf.pervyj_adres.kontakty_uz.adres,
// //             phone: data.acf.pervyj_adres.telefon,
// //             email: data.acf.pervyj_adres.email,
// //             workingHours: data.acf.pervyj_adres.kontakty_uz.vremya_raboty,
// //             mapPosition: {
// //                 lat: parseFloat(data.acf.pervyj_adres.shirota),
// //                 lng: parseFloat(data.acf.pervyj_adres.dolgota)
// //             },
// //             zoom: 15
// //         },
// //         clinic: {
// //             title: data.acf.vtoroj_adres.kontakty_uz.nazvanie_lokaczii,
// //             address: data.acf.vtoroj_adres.kontakty_uz.adres,
// //             phone: data.acf.vtoroj_adres.telefon,
// //             email: data.acf.vtoroj_adres.email,
// //             workingHours: data.acf.vtoroj_adres.kontakty_uz.vremya_raboty,
// //             mapPosition: {
// //                 lat: parseFloat(data.acf.vtoroj_adres.shirota),
// //                 lng: parseFloat(data.acf.vtoroj_adres.dolgota)
// //             },
// //             zoom: 15
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             {/* Hero Section */}
// //             <div
// //                 className="relative h-80 flex items-center justify-center overflow-hidden"
// //                 style={{
// //                     background: `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('${heroData.background}')`,
// //                     backgroundSize: 'cover',
// //                     backgroundPosition: 'center'
// //                 }}
// //             >
// //                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
// //                 <div className="text-center z-10 px-4">
// //                     <h1 className="text-5xl font-bold text-white mb-4">{heroData.title}</h1>
// //                     <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
// //                     <p className="text-xl text-white max-w-3xl">{heroData.description}</p>
// //                 </div>
// //                 <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
// //                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
// //                         <path
// //                             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
// //                             fill="#f8f9fa"
// //                             opacity=".8"
// //                         ></path>
// //                         <path
// //                             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
// //                             fill="#f8f9fa"
// //                             opacity=".5"
// //                         ></path>
// //                         <path
// //                             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
// //                             fill="#f8f9fa"
// //                         ></path>
// //                     </svg>
// //                 </div>
// //             </div>

// //             {/* Main Content */}
// //             <div className="max-w-screen-xl mx-auto px-6 py-12">
// //                 <ContactInfo locations={locations} brandColor={brandColor} brandColorLighter={brandColorLighter} />
// //             </div>
// //         </div>
// //     );
// // }


// import ContactInfo from './ContactInfo';

// export default async function ContactsPage() {
//     // Fetch data with ISR (revalidate every 3600 seconds)
//     const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81391', {
//         next: { revalidate: 3600 }
//     });
//     const data = await res.json();

//     // Фирменные цвета
//     const brandColor = '#631463';
//     const brandColorLighter = '#f7eef7';

//     // Данные для hero секции
//     const heroData = {
//         title: data.acf.sekcziya_hiro.zagolovok_straniczy_uz,
//         description: data.acf.sekcziya_hiro.kratkoe_opisanie_uz,
//         background: data.acf.sekcziya_hiro.zadnij_fon.url
//     };

//     // Данные о локациях
//     const locations = {
//         main: {
//             title: data.acf.pervyj_adres.kontakty_uz.nazvanie_lokaczii,
//             address: data.acf.pervyj_adres.kontakty_uz.adres,
//             phone: data.acf.pervyj_adres.telefon,
//             email: data.acf.pervyj_adres.email,
//             workingHours: data.acf.pervyj_adres.kontakty_uz.vremya_raboty,
//             mapPosition: {
//                 lat: parseFloat(data.acf.pervyj_adres.shirota),
//                 lng: parseFloat(data.acf.pervyj_adres.dolgota)
//             },
//             zoom: 15
//         },
//         clinic: {
//             title: data.acf.vtoroj_adres.kontakty_uz.nazvanie_lokaczii,
//             address: data.acf.vtoroj_adres.kontakty_uz.adres,
//             phone: data.acf.vtoroj_adres.telefon,
//             email: data.acf.vtoroj_adres.email,
//             workingHours: data.acf.vtoroj_adres.kontakty_uz.vremya_raboty,
//             mapPosition: {
//                 lat: parseFloat(data.acf.vtoroj_adres.shirota),
//                 lng: parseFloat(data.acf.vtoroj_adres.dolgota)
//             },
//             zoom: 15
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <div
//                 className="relative h-80 flex items-center justify-center overflow-hidden"
//                 style={{
//                     background: `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('${heroData.background}')`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                 }}
//             >
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
//                 <div className="text-center z-10 px-4">
//                     <h1 className="text-5xl font-bold text-white mb-4">{heroData.title}</h1>
//                     <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
//                     <p className="text-xl text-white max-w-3xl">{heroData.description}</p>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
//                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
//                         <path
//                             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//                             fill="#f8f9fa"
//                             opacity=".8"
//                         ></path>
//                         <path
//                             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//                             fill="#f8f9fa"
//                             opacity=".5"
//                         ></path>
//                         <path
//                             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//                             fill="#f8f9fa"
//                         ></path>
//                     </svg>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-screen-xl mx-auto px-6 py-12">
//                 <ContactInfo locations={locations} brandColor={brandColor} brandColorLighter={brandColorLighter} />
//             </div>
//         </div>
//     );
// }

// contacts/page.js
import ContactInfo from './ContactInfo';

export default async function ContactsPage() {
    // Fetch data with ISR (revalidate every 1 day = 86400 seconds)
    const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81391', {
        next: { revalidate: 86400 }
    });
    const data = await res.json();

    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLighter = '#f7eef7';

    // Данные для hero секции
    const heroData = {
        title: data.acf.sekcziya_hiro.zagolovok_straniczy_uz,
        description: data.acf.sekcziya_hiro.kratkoe_opisanie_uz,
        background: data.acf.sekcziya_hiro.zadnij_fon.url
    };

    // Данные о локациях
    const locations = {
        main: {
            title: data.acf.pervyj_adres.kontakty_uz.nazvanie_lokaczii,
            address: data.acf.pervyj_adres.kontakty_uz.adres,
            phone: data.acf.pervyj_adres.telefon,
            email: data.acf.pervyj_adres.email,
            workingHours: data.acf.pervyj_adres.kontakty_uz.vremya_raboty,
            mapPosition: {
                lat: parseFloat(data.acf.pervyj_adres.shirota),
                lng: parseFloat(data.acf.pervyj_adres.dolgota)
            },
            zoom: 15
        },
        clinic: {
            title: data.acf.vtoroj_adres.kontakty_uz.nazvanie_lokaczii,
            address: data.acf.vtoroj_adres.kontakty_uz.adres,
            phone: data.acf.vtoroj_adres.telefon,
            email: data.acf.vtoroj_adres.email,
            workingHours: data.acf.vtoroj_adres.kontakty_uz.vremya_raboty,
            mapPosition: {
                lat: parseFloat(data.acf.vtoroj_adres.shirota),
                lng: parseFloat(data.acf.vtoroj_adres.dolgota)
            },
            zoom: 15
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                style={{
                    background: `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('${heroData.background}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">{heroData.title}</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">{heroData.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="#f8f9fa"
                            opacity=".8"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="#f8f9fa"
                            opacity=".5"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="#f8f9fa"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <ContactInfo locations={locations} brandColor={brandColor} brandColorLighter={brandColorLighter} />
            </div>
        </div>
    );
}