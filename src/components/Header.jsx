// app/components/Header.jsx
"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Popup from './Popup'; // Импортируем новый компонент
import {
    MapPin,
    Telegram,
    Instagram,
    Facebook,
    Youtube,
    Menu,
    X,
} from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для попапа

    const menuItems = [
        { name: "Новости", href: "/news" },
        { name: "Наши кампусы", href: "/campus" },
        { name: "Клинические базы", href: "/clinic-base" },
        { name: "Баклавриат", href: "/napravleniya" },
        { name: "Вакансии", href: "/vacancy" },
        { name: "Фотогаллерея", href: "/photogallery" },
        { name: "Научный журнал", href: "/journal" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <>
            <header className="fixed top-0 w-full bg-[#5f1464] z-[1000] shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 py-[40px] md:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center">
                            <img
                                src="https://emuni.uz/wp-content/uploads/2024/07/emu-logo_2024_min.webp"
                                alt="EMU University Logo"
                                width={140}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Registration Button */}
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="hidden md:block px-4 py-2 bg-white text-[#5f1464] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                            Регистрация
                        </button>

                        {/* Social Icons */}
                        <div className="flex space-x-2">
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Phone */}
                        <span className="text-white text-sm hidden md:inline">+998(78) 147-00-07</span>

                        {/* Language Switch */}
                        <div className="flex items-center space-x-2">
                            <span className="text-white text-sm">RU</span>
                            <span className="text-white text-sm">|</span>
                            <span className="text-white text-sm">EN</span>
                        </div>

                        {/* Location Icon */}
                        <a href="#" className="text-white hover:text-gray-200 transition-colors">
                            <MapPin className="w-5 h-5" />
                        </a>

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
                        <ul className="space-y-4 text-white">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block px-4 py-2 hover:bg-[#7a407f] rounded transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:block bg-[#5f1464] py-3 border-t-[2px] border-white">
                    <ul className="justify-center max-w-screen-xl mx-auto px-4 flex justify-start space-x-4 text-white text-sm">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="px-4 py-1 hover:bg-[#7a407f] rounded transition-colors"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            {/* Popup */}
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
}