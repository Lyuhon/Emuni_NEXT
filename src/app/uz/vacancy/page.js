import React from 'react';
import { Mail, MapPin, Clock, Award, CheckCircle, Send, Calendar, BookOpen, Users, PartyPopper } from 'lucide-react';

const VacanciesPage = () => {
    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLight = '#8a3c8a';
    const brandColorLighter = '#f7eef7';

    // Преимущества работы
    const benefits = [
        { title: "Yuqori oylik maosh", icon: <Award size={24} /> },
        { title: "Pul to'lanuvchi ta'til", icon: <Calendar size={24} /> },
        { title: "Rasmiy ishga joylashish", icon: <CheckCircle size={24} /> },
        { title: "Ijtimoiy paket", icon: <Users size={24} /> },
        { title: "Xorijdagi amaliyotlar", icon: <MapPin size={24} /> },
        { title: "Korporativ tadbirlar", icon: <PartyPopper size={24} /> }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(99, 20, 99, 0.60), rgba(99, 20, 99, 0.70)), url('https://emuni.uz/wp-content/uploads/2022/06/vakansiya-new-2-min.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Vakansiyalar</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">
                        Yetakchi tibbiyot universitetimizning professional jamoasiga a'zo bo'ling
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

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Vacancies Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>Mavjud bo'lishi mumkin bo'lgan vakansiyalar</h2>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Ortiqcha qog'ozbozlikdan charchadingizmi?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Talabalar bilan astoydil shug'ullanishga imkon berishmayaptimi?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>Keraksiz bayonnomalar to'ldirish joningizga tegdim?</p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle size={18} className="mr-2 mt-1 flex-shrink-0" style={{ color: brandColor }} />
                            <p>O'z ustingizda ishlashga vaqt yetishmayaptimi? Oilangizga yetarli vaqt ajrata olmayapsizmi?</p>
                        </div>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg mb-8 border-l-4" style={{ borderColor: brandColor }}>
                        <p className="font-medium">Unda bizning safimizga qo'shiling!</p>
                        <p className="mt-2">EMU University Sizning ta'lim sohasiga bo'lgan yuqori intellektual qarashlaringizni tubdan o'zgartiradi.</p>
                    </div>

                    <h3 className="text-xl font-bold mb-4" style={{ color: brandColor }}>Biz nimalarni taklif qilamiz</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                                <div className="mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                                    <div style={{ color: brandColor }}>{benefit.icon}</div>
                                </div>
                                <span className="font-medium">{benefit.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Timbuildinglar, bayramlar, shahar tashqarisiga sayohatlar</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Ijtimoiy paket (EMU ko'p tarmoqli klinikalari tizimida barcha turdagi tibbiy va diagnostika xizmatlari uchun maxsus imtiyozlar)</p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg mb-6">
                        <p>Eng yaxshi o'qituvchilar uchun Universitet Ta'sischilar fondi hisobidan xorijiy markazlar va oliygohlarda amaliyot o'tash imkoniyati.</p>
                    </div>

                    <p className="text-center font-medium text-lg mb-8">Biz o'ziga, o'z kelajagiga ishongan har bir insonni safimizga chorlaymiz. Biz siz bilan rivojlanish sari qadam tashlashga tayyormiz!</p>

                    <div className="p-6 bg-purple-50 rounded-lg border border-purple-100 flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <Send size={24} className="mr-3" style={{ color: brandColor }} />
                            <span>O'zingiz haqida qisqa ma'lumot va CV (ma'lumotnoma) yuboring:</span>
                        </div>
                        <div className='flex flex-wrap'>
                            <a href="mailto:vacancy_emuni@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>vacancy_emuni@emuni.uz</a>,&nbsp;
                            <a href="mailto:hr@emuni.uz" className="font-bold text-lg hover:underline" style={{ color: brandColor }}>hr@emuni.uz</a>
                        </div>
                    </div>

                    <p className="text-center mt-4 text-sm text-gray-500">Biz shaxsiy ma'lumotlaringiz sir saqlanishini kafolatlaymiz!</p>
                </div>

                {/* Internship Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(20%, -20%)' }}></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: brandColor, transform: 'translate(-20%, 20%)' }}></div>

                    <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>Universitetda o'tilishi mumkin bo'lgan stajirovka</h2>

                    <p className="mb-6">Bizning jamoamiz shifokorlar va pedagoglarning qayta tayyorlov o'tishlari va malaka oshirishlari uchun baza tayyorlash ustida faol ish olib borishmoqda. Yaqin kunlarda qisqa va uzoq muddatli malaka oshirish kurslari o'z faoliyatini boshlaydi.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <BookOpen size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>O'quv dasturlari</h3>
                            <p>Zamonaviy metodikalar va yetakchi xalqaro tibbiyot universitetlarining ilg'or tajribasi</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Clock size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Moslashuvchan jadval</h3>
                            <p>Stajirovkani asosiy ish bilan birgalikda olib borish imkoniyati qulay dars jadvallari tufayli</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-t-4" style={{ borderColor: brandColor }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'white' }}>
                                <Award size={24} style={{ color: brandColor }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>Sertifikatsiya</h3>
                            <p>Stajirovka yakunida belgilangan namunadagi malaka oshirish sertifikati beriladi</p>
                        </div>
                    </div>

                    <div className="mt-10 text-center hidden">
                        <button
                            className="inline-flex items-center justify-center text-white font-bold py-3 px-10 rounded-lg text-lg shadow-md transition-all"
                            style={{ background: `linear-gradient(to right, ${brandColor}, ${brandColorLight})` }}
                        >
                            <Mail size={20} className="mr-2" />
                            Dasturlar haqida batafsil ma'lumot oling
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacanciesPage;