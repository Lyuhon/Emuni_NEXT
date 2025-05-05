'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Award, CheckCircle, Send, Calendar, BookOpen, Users } from 'lucide-react';

import GrantsSlider from './GrantsSlider';


// Animations and variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const SupportFundPage = () => {
    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(99, 20, 99, 0.60), rgba(99, 20, 99, 0.70)), url('http://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/grants-hero-min.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Фонд Поддержки EMU</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Поддержка молодых и преуспевающих студентов
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>


            {/* Image Gallery */}
            <GrantsSlider />


            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Main Title Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-3xl font-bold text-center mb-8" style={{ color: brandColor }}>
                        Учредителями Университета EMU организован ФОНД ПОДДЕРЖКИ<br />
                        МОЛОДЫХ И ПРЕУСПЕВАЮЩИХ СТУДЕНТОВ
                    </h2>

                    {/* <div className="flex justify-center mb-10">
                        <div className="bg-[#ff3a57] text-white py-4 px-8 rounded-lg shadow-md">
                            <p className="text-lg font-bold text-center">ФОНД<br />ПОДДЕРЖКИ<br />EMU</p>
                        </div>
                    </div> */}

                    {/* Circular Benefits */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <div className="relative p-6">
                            <div className="rounded-full border-4 border-[#8232c8] p-1 mx-auto w-64 h-64 flex items-center justify-center">
                                <div className="bg-[#ff3a57] rounded-full w-48 h-48 flex items-center justify-center text-white p-4">
                                    <p className="text-center font-bold">Студенты с высокими показателями академической успеваемости</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-6">
                            <div className="rounded-full border-4 border-[#20c997] p-1 mx-auto w-64 h-64 flex items-center justify-center">
                                <div className="bg-[#00c5d7] rounded-full w-48 h-48 flex items-center justify-center text-white p-4">
                                    <p className="text-center font-bold">Покрытие расходов поездок на стажировки и участие в научных конференциях**</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-6">
                            <div className="rounded-full border-4 border-[#ff6384] p-1 mx-auto w-64 h-64 flex items-center justify-center">
                                <div className="bg-[#ff9f40] rounded-full w-48 h-48 flex items-center justify-center text-white p-4">
                                    <p className="text-center font-bold">Грант учредителей на бесплатное обучение*</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex justify-center mb-10">
                        <Image
                            src="https://emuni.uz/wp-content/uploads/2022/07/Grant-min.png" // Замените на реальный URL изображения
                            alt="EMU Qo'llab-quvvatlash Fondi logotipi"
                            width={1200}
                            height={800}
                            className="object-contain rounded-lg"
                        />
                    </div>

                    {/* Policy Details */}
                    <div className="p-5 bg-purple-50 rounded-lg mb-8 border-l-4" style={{ borderColor: brandColor }}>
                        <p className="mb-3">
                            * Согласно внутренней политике Университета каждый студент, поступивший на учебу на контрактной основе имеет шанс получить грант учредителей на бесплатное обучение за один семестр по итогам средних показателях академической успеваемости каждого семестра обучения и активном участии в жизни Университета. При этом к итоговому среднему показателю студента дополнительно начисляются баллы за:
                        </p>
                        <ul className="space-y-3 mb-6 ml-6">
                            <li className="flex items-start">
                                <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                                <p>участие в конференциях, выступление с докладами;</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                                <p>участие в победы на олимпиадах;</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                                <p>рационализаторское предложение как в теоретической так и практической сферах;</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                                <p>разработка и внедрение инновационных разработок;</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                                <p>разработка и внедрение стартапов, получение призовых мест в отборах.</p>
                            </li>
                        </ul>
                        <p>
                            ** Фонд покрывает 25%, 50%, 75% или 100% расходов в зависимости от выполнения студентами требований и задач, поставленных перед ними.
                        </p>
                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default SupportFundPage;