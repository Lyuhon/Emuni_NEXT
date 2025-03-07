// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Central Asian University Pre-Foundation</title>
                <meta name="description" content="Образовательная программа университета" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
                <div className="flex items-center">
                    <div className="mr-10">
                        <Image src="/logo.png" alt="CAU Logo" width={120} height={40} />
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Главная</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Программы</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Студентам</Link>
                    </nav>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                    Подать заявку
                </button>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-900 text-white">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                            НОВОЕ
                        </div>
                        <h1 className="text-4xl font-bold mb-4">
                            Central Asian University Pre-Foundation
                        </h1>
                        <p className="text-xl mb-6">
                            Подготовительная программа для поступления в ведущие университеты
                        </p>
                        <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                            Узнать больше
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <div className="relative w-72 h-96">
                            <Image
                                src="/hero-image.png"
                                alt="Student"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Heading */}
            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Сделайте первый шаг на пути к своей цели
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Наша подготовительная программа помогает студентам получить необходимые знания и навыки для успешного поступления в университеты. Мы предлагаем комплексный подход, сочетающий академические дисциплины и развитие практических умений.
                </p>
            </section>

            {/* Image with Text */}
            <section className="container mx-auto px-6 pb-12">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                        src="/student-lab.png"
                        alt="Student in laboratory"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </section>

            {/* Program Categories */}
            <section className="container mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Программирование", image: "/programming.png" },
                        { title: "Бизнес-администрирование", image: "/business.png" },
                        { title: "Медицинское образование", image: "/medical.png" },
                        { title: "Инженерные науки", image: "/engineering.png" }
                    ].map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-40">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold">{category.title}</h3>
                                <button className="mt-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-900 text-white">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">
                            Запись онлайн-обучения от подготовительных курсов
                        </h2>
                        <p className="text-xl">
                            Начните обучение прямо сейчас!
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Записаться
                        </button>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-8">Требования к поступающим</h2>

                <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold text-xl mb-2">Уровень образования</h3>
                        <p className="text-gray-600">Наличие аттестата о среднем образовании или эквивалентного документа</p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold text-xl mb-2">Уровень владения английским языком</h3>
                        <p className="text-gray-600">Минимальный уровень IELTS 5.0 или эквивалент, подтвержденный сертификатом</p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold text-xl mb-2">Прохождение вступительного тестирования</h3>
                        <p className="text-gray-600">Успешная сдача внутренних экзаменов по профильным предметам</p>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="container mx-auto px-6 py-12 bg-gray-50 rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-center">Поддерживаем и помогаем прийти к результату</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "📚",
                            title: "Индивидуальные программы обучения",
                            description: "Разрабатываем план обучения с учетом ваших целей и текущего уровня подготовки"
                        },
                        {
                            icon: "👨‍🏫",
                            title: "Опытные преподаватели",
                            description: "Наши педагоги имеют международный опыт преподавания и сертификаты"
                        },
                        {
                            icon: "🌐",
                            title: "Современные методики преподавания",
                            description: "Используем интерактивные методы обучения и цифровые технологии"
                        },
                        {
                            icon: "📝",
                            title: "Гибкий учебный график",
                            description: "Выбирайте удобное время для занятий, включая вечерние часы и выходные"
                        },
                        {
                            icon: "🔍",
                            title: "Регулярное тестирование",
                            description: "Отслеживаем прогресс и корректируем программу по мере необходимости"
                        },
                        {
                            icon: "🎓",
                            title: "Помощь с поступлением в университеты",
                            description: "Консультируем по выбору вуза и помогаем с оформлением документов"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partial implementation up to this point */}
            {/* More sections would follow including Teachers, Success Stories, Pricing, FAQ */}
        </div>
    );
}