// /app/eng/success/page.jsx
import Image from 'next/image';
import Link from 'next/link';

// ISR configuration - page will be regenerated every 24 hours
export const revalidate = 86400; // 24 hours in seconds

// Page metadata
export const metadata = {
    title: 'Thank You - EMU',
    description: 'Thank you for your application!',
};

export default function ThankYouPage() {
    return (
        <div className="pt-20 md:pt-10 pb-20 md:pb-0 bg-white md:min-h-[80wh] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Tilted Rectangle */}
                <div className="absolute top-10 left-20 w-48 h-32 bg-[#f9eef5]/50 rotate-12 rounded-lg blur-lg opacity-60 animate-pulse" />
                {/* Small Floating Dot */}
                <div className="absolute top-40 right-16 w-12 h-12 bg-[#8f3178]/40 rounded-full blur-md opacity-50 animate-bounce [animation-delay:300ms]" />
                {/* Existing Small Circle */}
                <div className="absolute top-16 left-16 w-20 h-20 bg-[#6b0e55] rounded-full mix-blend-multiply blur-xl opacity-20 animate-bounce" />
                {/* Existing Rotating Square */}
                <div className="absolute bottom-10 left-40 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />

            </div>

            {/* Bottom Wave SVG */}
            {/* <svg
                className="absolute bottom-0 left-0 w-full h-24 text-[#f9eef5]/50"
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
                    fill="currentColor"
                />
            </svg> */}

            {/* Main Content */}
            <div className="md:min-h-[80vh] flex justify-center items-center relative z-10">
                <div className="p-5 sm:p-7 md:p-10 md:pt-2 md:pb-16 text-center max-w-[96%] md:max-w-[478px] flex flex-col items-center">
                    {/* Heart Icon with Glow Effect */}
                    <div className="relative group">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 84 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(107,14,85,0.5)]"
                        >
                            <circle cx="42" cy="42" r="42" fill="url(#paint0_linear_1264_2851)"></circle>
                            <path
                                d="M50.1413 27.6831C46.823 27.6831 43.853 29.2964 42.0013 31.7714C40.1496 29.2964 37.1796 27.6831 33.8613 27.6831C28.233 27.6831 23.668 32.2664 23.668 37.9314C23.668 40.1131 24.0163 42.1298 24.6213 43.9998C27.518 53.1664 36.4463 58.6481 40.8646 60.1514C41.488 60.3714 42.5146 60.3714 43.138 60.1514C47.5563 58.6481 56.4846 53.1664 59.3813 43.9998C59.9863 42.1298 60.3346 40.1131 60.3346 37.9314C60.3346 32.2664 55.7696 27.6831 50.1413 27.6831Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1264_2851"
                                    x1="15.8146"
                                    y1="76.3303"
                                    x2="76.8126"
                                    y2="44.1492"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#6b0e55" />
                                    <stop offset="1" stopColor="#8f3178" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#6b0e55]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                    </div>

                    {/* Heading and Text */}
                    <div className="relative inline-block">
                        <h1 className="font-bold text-4xl my-8 md:my-5 md:text-5xl text-gray-900 relative">
                            We appreciate your trust in us
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6b0e55]/20 transform skew-x-[12deg]" />
                        </h1>
                    </div>
                    <p className="text-base md:text-xl text-gray-600 mb-3">
                        Our operators will contact you shortly at <br />
                        <a
                            className="underline text-[#6b0e55] hover:text-[#8f3178]"
                            href="tel:+998781470007"
                        >
                            +998(78) 147-00-07
                        </a>
                        . Please don't miss the call.<br /><br />
                        What begins at EMU changes the world, and it all starts with you!
                    </p>
                    {/* <p className="text-base md:text-xl text-gray-600">
            We hope you can achieve a score of{' '}
            <span className="font-semibold text-[#6b0e55]">8.5</span> on IELTS and earn{' '}
            <span className="font-semibold text-[#6b0e55]">$1000 cashback</span> while studying at Cambridge!
          </p> */}

                    {/* Telegram Button */}
                    <a
                        target="_blank"
                        href="https://t.me/emuintash"
                        className="rounded-3xl p-3 flex items-center md:p-4 bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white mt-7 overflow-hidden hover:scale-105 transform transition-transform duration-300"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="telegram-icon"
                            width="50"
                            height="50"
                            viewBox="0 0 63 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M58.9035 12.1329L50.5855 51.3603C49.9575 54.1283 48.3214 54.8174 45.9964 53.5141L33.3215 44.1743L27.2066 50.057C26.5293 50.7342 25.9643 51.2992 24.659 51.2992L25.5706 38.3921L49.0597 17.167C50.0815 16.2575 48.8373 15.7515 47.4729 16.663L18.4338 34.9488L5.93228 31.0349C3.21344 30.1864 3.16422 28.316 6.49928 27.0108L55.3971 8.1718C57.6612 7.32327 59.6418 8.67383 58.9035 12.1329Z"
                                fill="white"
                            />
                        </svg>
                        <div className="pl-6 md:pl-4 flex items-center md:flex-col md:items-start md:gap-0 gap-2">
                            <p className="font-medium text-lg md:text-xl text-left md:whitespace-nowrap">
                                Don't forget to follow our Telegram
                            </p>
                            <p className="text-base md:text-lg flex items-center gap-1">
                                <span className="opacity-70 hidden md:block">Join our Telegram</span>
                                <span className="arrow-animation">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12H19"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13 18L19 12"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13 6L19 12"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    );
}