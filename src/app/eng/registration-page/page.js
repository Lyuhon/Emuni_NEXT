// app/page.js
import RegForm from './reg_form';

// ENGLISH
export const metadata = {
    title: "Registration - EMU University",
    description: "Register at EMU University - the leading university in Tashkent. Apply for admission online. Quality medical education in Tashkent, Uzbekistan.",
    keywords: "EMU University registration, medical university admission, EMU application, medical education Tashkent, university in Uzbekistan",
    openGraph: {
        title: "Registration - EMU University",
        description: "Register at EMU University - the leading university in Tashkent. Apply for admission online. Quality medical education in Tashkent, Uzbekistan.",
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
            <h1 className='text-2xl md:text-4xl font-bold text-gray-900 mb-8 relative'>Registartion</h1>
            <RegForm />
        </section>
    );
}