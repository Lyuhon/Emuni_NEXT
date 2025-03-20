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
        deviceSizes: [320, 640, 750, 828, 1080, 1200], // Ограничиваем ширину
        imageSizes: [16, 32, 48, 64, 96], // Для маленьких изображений
    },
};

export default nextConfig;