import { Geist, Geist_Mono } from "next/font/google";
// import "@/app/globals.css";
import Analytics from '../../Analytics';
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
    description: "Registration - EMU University Tashken",
};

export default function CustomLayout({ children }) {
    return (
        <html lang="ru">

            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

                {/* <Analytics
                    yandexId="89860815"
                    pixelId="1002302072055567"
                    gtmId="G-6NWB2GH3G6"
                /> */}

                <FacebookPixel pixelId="704822382243155" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
                {children}
            </body>


        </html>
    );
}