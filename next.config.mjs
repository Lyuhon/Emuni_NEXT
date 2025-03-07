/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "emuni.uz",
                pathname: "**", // Разрешить любой путь
            },
            {
                protocol: "http",
                hostname: "next.emu.web-perfomance.uz",
                pathname: "**", // Разрешить любой путь
            },
        ],
    },
};

export default nextConfig;

