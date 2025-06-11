// app/page.js 
import RegForm from './reg_form';

// UZBEK
export const metadata_uz = {
    title: "Ro'yxatdan o'tish - EMU University",
    description: "EMU University - Toshkentdagi yetakchi universitetda ro'yxatdan o'ting. Onlayn qabul uchun ariza bering. Toshkent, O'zbekistonda sifatli tibbiy ta'lim.",
    keywords: "EMU University ro'yxatdan o'tish, tibbiy universitetga qabul, EMU arizasi, Toshkent tibbiy ta'lim, O'zbekistondagi universitet",
    openGraph: {
        title: "Ro'yxatdan o'tish - EMU University",
        description: "EMU University - Toshkentdagi yetakchi universitetda ro'yxatdan o'ting. Onlayn qabul uchun ariza bering. Toshkent, O'zbekistonda sifatli tibbiy ta'lim.",
        images: ['https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/emu-university-open-graph-logo-min.png'],
    },
};

export async function generateStaticParams() {
    return [];
}

// ISR
export const revalidate = 86400; // 24 часа

export default function RegPage() {
    return (
        <section className='max-w-[700px] p-[40px] md:pt-[80px] m-auto'>
            <h1 className='text-2xl md:text-4xl font-bold text-gray-900 mb-8 relative'>Ro'yxatdan o'tish</h1>
            <RegForm />
        </section>
    );
}