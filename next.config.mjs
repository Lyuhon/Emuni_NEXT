/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "emuni.uz",
                pathname: "**", // Разрешить любой путь
            },
        ],
    },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
// };

// export default nextConfig;

