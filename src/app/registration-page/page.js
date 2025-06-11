// app/page.js (для App Router)
import RegForm from './reg_form';

// SEO Metadata
export const metadata = {
    title: "Регистрация - EMU University",
    description: "Зарегистрируйтесь в EMU University - ведущем университете Ташкента. Подайте заявку на поступление онлайн. Качественное медицинское образование в Ташкенте, Узбекистан.",
    keywords: "регистрация EMU University, поступление в медицинский университет, подача заявки EMU, медицинское образование Ташкент, университет в Узбекистане",
    openGraph: {
        title: "Регистрация - EMU University",
        description: "Зарегистрируйтесь в EMU University - ведущем университете Ташкента. Подайте заявку на поступление онлайн. Качественное медицинское образование в Ташкенте, Узбекистан.",
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
            <h1 className='text-2xl md:text-4xl font-bold text-gray-900 mb-8 relative'>Регистрация</h1>
            <RegForm />
        </section>
    );
}