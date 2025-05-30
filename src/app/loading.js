// // app/loading.js
// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Loading() {
//     // Фирменные цвета сайта
//     const brandColor = '#6b0e55';
//     const brandColorLight = '#9c3f84';

//     return (
//         <div className="fixed inset-0 z-[9000] flex items-center justify-center bg-white">
//             <div className="flex flex-col items-center">
//                 {/* Логотип */}
//                 <div className="mb-8 relative">
//                     <img
//                         src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-loading-js.webp"
//                         alt="EMU University Logo"
//                         className="w-[200px] object-contain"
//                     />
//                     <motion.div
//                         className="absolute inset-0 bg-white"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: [0, 0.5, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                     />
//                 </div>

//                 {/* Анимированный индикатор загрузки */}
//                 <div className="relative h-1 w-48 overflow-hidden bg-gray-200 rounded-full">
//                     <motion.div
//                         className="absolute top-0 bottom-0 left-0 rounded-full"
//                         style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
//                         initial={{ width: "0%" }}
//                         animate={{ width: ["0%", "100%", "0%"] }}
//                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                     />
//                 </div>

//                 {/* Текст загрузки */}
//                 <motion.p
//                     className="mt-4 text-sm text-gray-600"
//                     initial={{ opacity: 0.5 }}
//                     animate={{ opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                     ...
//                 </motion.p>

//                 {/* Декоративные элементы, характерные для дизайна сайта */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ transform: 'rotate(180deg)' }}>
//                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-gray-50" fill="currentColor">
//                         <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".8"></path>
//                         <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
//                         <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
//                     </svg>
//                 </div>

//                 {/* Круглые декоративные элементы */}
//                 <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor }}></div>
//                 <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: brandColorLight }}></div>
//             </div>
//         </div>
//     );
// }



// app/loading.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    // Фирменные цвета сайта
    const brandColor = '#6b0e55';
    const brandColorLight = '#9c3f84';

    return (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                {/* Логотип */}
                {/* <div className="mb-8 relative">
                    <img
                        src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-loading-js.webp"
                        alt="EMU University Logo"
                        className="w-[210px] md:w-[400px] object-contain rounded-lg"
                    />
                    <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div> */}

                {/* Анимированный индикатор загрузки */}
                <div className="relative h-1 w-48 overflow-hidden bg-gray-200 rounded-full">
                    <motion.div
                        className="absolute top-0 bottom-0 left-0 rounded-full"
                        style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Текст загрузки */}
                {/* <motion.p
                    className="mt-4 text-sm text-gray-600"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    EMU University
                </motion.p> */}

                {/* Декоративные элементы, характерные для дизайна сайта */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ transform: 'rotate(180deg)' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-gray-50" fill="currentColor">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                </div>

                {/* Круглые декоративные элементы */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: brandColorLight }}></div>
            </div>
        </div>
    );
}