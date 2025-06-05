import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import FacebookPixel from '../../FacebookPixel';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Registration - EMU University Tashkent",
    description: "Registration - EMU University Tashkent",
};

export default function CustomLayout({ children }) {
    return (
        <>
            {/* Добавляем шрифты через next/script или CSS переменные */}
            <div
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
                lang="ru"
            >
                {/* Google Fonts через next/script */}
                <Script
                    src="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                    strategy="beforeInteractive"
                />

                {/* Facebook Pixel компонент */}
                <FacebookPixel pixelId="704822382243155" />

                {children}
            </div>
        </>
    );
}