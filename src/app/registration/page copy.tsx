'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        city: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="pt-20- bg-white min-h-screen- relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Tilted Rectangle */}
                <div className="absolute top-10 left-20 w-48 h-32 bg-[#f9eef5]/50 rotate-12 rounded-lg blur-lg opacity-60 animate-pulse" />
                {/* Small Floating Dot */}
                <div className="absolute top-40 right-16 w-12 h-12 bg-[#8f3178]/40 rounded-full blur-md opacity-50 animate-bounce [animation-delay:300ms]" />
                {/* Small Circle */}
                <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
                {/* Rotating Square */}
                <div className="absolute bottom-10 left-40 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
            </div>

            <div className="container max-w-screen-xl mx-auto px-4 py-2.5 pb-10 md:py-5 lg:py-20">
                <div className="flex flex-col md:flex-row md:items-start gap-x-10">
                    {/* Left Section */}
                    <div className="md:w-1/3 flex-grow md:mr-20">
                        <h1 className="font-bold text-3xl text-center lg:text-start lg:mb-8 mb-5 text-gray-900 md:text-5xl lg:text-7xl relative">
                            Хотите выучить английский язык?
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-[12deg]" />
                        </h1>
                        <Image
                            src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/main-banner-new.webp"
                            alt="Cambridge LC advantages"
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-3xl"
                        />
                    </div>

                    {/* Right Section (Form) */}
                    <div className="md:w-1/3 max-w-[30rem] flex-grow border-2 border-[#f9eef5] rounded-[30px] my-9 md:mt-0 bg-white sm:mx-auto md:mx-0 relative">
                        <svg
                            className="absolute top-2.5 right-[110%] hidden md:block"
                            width="64"
                            height="46"
                            viewBox="0 0 64 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M56.7209 5.40605C56.7827 6.1656 56.8446 6.92516 56.8181 7.73139C46.786 -0.779873 32.4866 -2.1719 20.5207 4.71075C7.45239 12.2886 -1.51059 29.3561 1.33808 44.602C1.44667 45.45 3.01641 45.6399 3.17303 44.6519C5.46419 31.2196 8.34762 18.2669 20.7353 10.2562C30.4343 4.00433 44.6933 3.60689 53.239 11.6579C51.5341 11.4262 49.7876 11.3296 48.0827 11.0979C43.7789 10.6537 43.5716 17.3272 47.7403 17.7295L60.4283 19.0668C62.0865 19.2101 64.0629 17.6008 63.9341 15.858C63.7233 12.4609 63.6009 9.01718 63.3901 5.62009C63.3826 1.32344 56.5315 0.979048 56.7209 5.40605Z"
                                fill="#6b0e55"
                            />
                        </svg>
                        <div className="bg-white p-7 lg:p-10 rounded-[30px]">
                            <h2 className="font-bold text-center text-3xl xl:text-4xl pb-3 text-gray-900">
                                Зарегистрируйтесь сейчас, чтобы записаться на занятия
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] hover:border-[#8f3178] transition-colors"
                                        placeholder="Имя"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] hover:border-[#8f3178] transition-colors"
                                        placeholder="Номер телефона"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <select
                                        name="age"
                                        id="age"
                                        className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] hover:border-[#8f3178] transition-colors appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Возраст
                                        </option>
                                        {[...Array(18)].map((_, i) => (
                                            <option key={i + 13} value={i + 13}>
                                                {i + 13}
                                            </option>
                                        ))}
                                        <option value="30+">30+</option>
                                    </select>
                                </div>
                                <div>
                                    <select
                                        name="city"
                                        id="city"
                                        className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] hover:border-[#8f3178] transition-colors appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Выберите город
                                        </option>
                                        <option value="Ташкент">Ташкент</option>
                                        <option value="Фергана">Фергана</option>
                                        <option value="Самарканд">Самарканд</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl hover:scale-105 transition-transform"
                                >
                                    Позвоните мне!
                                </button>
                            </form>
                            <p className="text-center mt-4 text-gray-600 opacity-50">
                                Занятия проводятся оффлайн в Ташкенте, Фергане и Самарканде.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}