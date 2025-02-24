// app/components/Footer.jsx
'use client'
import React from "react";
import Image from "next/image";
import {
    Telegram,
    Instagram,
    Facebook,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#5f1464] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6">
                    {/* Logo and Address */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://emuni.uz/wp-content/uploads/2024/07/emu-logo_2024_min.webp"
                                alt="EMU University Logo"
                                width={180} // Немного увеличил для футера
                                height={50}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm">
                            Посещаемость сегодня: 205
                            <br />
                            Посещаемость за неделю: 1594
                            <br />
                            Посещаемость за месяц: 7775
                            <br />
                            Всего посещений: 387104
                        </p>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Выберите нас и получите</h3>
                        <p className="text-sm">
                            престижное медицинское образование в Ташкенте! Мы разработали
                            доступные приемные величины — замечательные люди, учеба с мировым
                            именем, прекрасные специалисты и блестящие педагоги.
                        </p>
                    </div>

                    {/* Social Media and Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Мы в социальных сетях</h3>
                        <div className="flex space-x-4 mb-4">
                            {/* <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Telegram className="w-5 h-5" />
                            </a> */}
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                        <br />

                        <h3 className="text-lg font-bold mb-2">График работы:</h3>
                        <p className="text-sm">
                            Понедельник-пятница: 9:00-17:00
                            <br />
                            Суббота: 9:00-15:00
                            <br />
                            Воскресенье: выходной день
                        </p>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Контакты</h3>
                        <p className="text-sm">
                            +998(78) 147-00-07
                            <br />
                            <br />
                            Улица Мукими 7/1, Ташкент, Узбекистан
                            <br />
                            <br />
                            info@emuni.uz
                        </p>
                        {/* <h3 className="text-lg font-bold mt-4 mb-2">FAQ</h3> */}
                        <a
                            href="/faq"
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
        </footer>
    );
}