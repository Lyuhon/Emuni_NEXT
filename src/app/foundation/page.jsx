// app/courses/page.jsx
'use client'
import React from "react";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* HERO Section */}
            <div className="bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                    <div className="absolute top-40 right-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
                    <div className="absolute top-16 left-16 w-20 h-20 bg-[#5f1464] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-24">
                    <div className="relative z-10 w-full text-center">
                        <div className="relative inline-block">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#5f1464]/10 rounded-lg transform rotate-12 animate-spin-slow" />
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Подготовительные
                                <br />
                                <span className="text-[#5f1464] relative">
                                    курсы
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#5f1464]/20 transform skew-x-12" />
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Text Block */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-12">
                    <div className="prose prose-lg text-gray-700">
                        <h2 className="text-2xl font-bold text-[#5f1464] mb-4">
                            Medical Foundation
                        </h2>
                        <p>
                            Внимание всем желающим! EMU University объявляет об открытии
                            Подготовительных курсов на 2023/2024 учебный год. Слушателями
                            платных подготовительных курсов могут стать учащиеся школ 8-11
                            классов, а также учащиеся лицеев и колледжей. Учебные программы
                            ориентированы на подготовку к сдаче вступительных экзаменов в EMU
                            University, а также в ведущие медицинские вузы Узбекистана и
                            зарубежных стран. Набор на подготовительные курсы ведется с июля
                            по март месяц. Наполняемость групп – 10-13 человек.
                        </p>
                        <p>
                            Результаты выпускных экзаменов “Medical Foundation” EMU Courses
                            прошедшие в 05.08.2023 году показали отличные результаты,
                            многие из выпускников получили грантовые места.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mt-6">
                            Программы обучения:
                        </h3>
                        <p>
                            Medical Foundation – это специальная программа, которая готовит к
                            поступлению в EMU University. Программа Medical Foundation была
                            составлена основываясь на программу первого курса университета.
                            Проходя этот курс у учеников есть большие шансы стать студентами
                            EMU University. После окончания курса, студенты проходят
                            внутренний экзамен, исходя от набранных баллов ученика принимают в
                            ряды студентов на основе гранта или на платно-контрактной основе.
                            Большую часть грантовых мест университет выделит для выпускников
                            курса Medical Foundation.
                        </p>
                        <p className="font-semibold">Предметы программы Medical Foundation:</p>
                        <p>– Химия</p>
                        <p>– Биология</p>
                        <p>– Гистология</p>
                        <p>– Анатомия</p>
                        <p>– Физиология</p>
                        <p>
                            Подготовительные курсы предлагают годичную программу –
                            длительностью 10 месяцев. Химия и Биология будет проходить по 2
                            раза в неделю. Гистология, Анатомия и Физиология по 1 разу в
                            неделю. Длительность уроков по 120-150 минут. Для того, чтобы
                            получить право принять участие в итоговых экзаменах
                            подготовительных курсов, ученики должны полностью пройти обучение
                            в Medical Foundation. Ученик имеет право выбрать язык обучения –
                            русский или узбекский. Уровень и группа учеников могут быть
                            изменены в зависимости от уровня знаний слушателей после
                            промежуточных тестов. В первое воскресение каждого месяца будут
                            проводится экзамены в качестве проверки успеваемости и знаний.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mt-6">
                            Подготовительные курсы в Государственные Медицинские вузы:
                        </h3>
                        <p className="font-semibold">Предметы:</p>
                        <p>- Химия</p>
                        <p>- Биология</p>
                        <p>- Математика</p>
                        <p>- История</p>
                        <p>- Русский язык.</p>
                        <p>
                            Занятия по химии и биологии проходят по 3 раза в неделю. Занятия
                            по обязательным предметам проходят каждое воскресенье.
                        </p>
                    </div>
                </div>

                {/* Form and Contacts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold text-[#5f1464] mb-6">
                            Онлайн регистрация
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Ф. И. О.
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f1464]"
                                    placeholder="Введите ваше имя"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Контактный номер
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f1464]"
                                    placeholder="+998"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="courseSubject"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Предмет курса
                                </label>
                                <select
                                    id="courseSubject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f1464]"
                                >
                                    <option value="">Выберите предмет</option>
                                    <option value="medical-foundation">Medical Foundation</option>
                                    <option value="state-medical">Гос. медицинские вузы</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-[#5f1464] text-white rounded-full hover:bg-[#7a407f] transition-colors"
                            >
                                Зарегистрироваться
                            </button>
                        </form>
                    </div>

                    {/* Contacts */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold text-[#5f1464] mb-6">
                            Контакты
                        </h2>
                        <p className="text-gray-700">
                            Тел: +998(78) 1470007
                            <br />
                            Электронная почта: info@emuni.uz
                            <br />
                            Официальный сайт:{" "}
                            <a
                                href="https://www.emuni.uz"
                                className="text-[#5f1464] hover:underline"
                            >
                                www.emuni.uz
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .prose p {
          margin-bottom: 1rem;
        }
      `}</style>
        </div>
    );
}