'use client'

import { useState } from 'react';
import { Heart, Brain, Eye, Stethoscope, Baby, Bone, Award, DollarSign, CheckCircle, Users, BookOpen, Activity, Filter, ChevronUp, ChevronDown } from 'lucide-react';

export default function ResidencyPrograms() {
    const [activeCategory, setActiveCategory] = useState('medical');
    const [selectedShift, setSelectedShift] = useState('first');
    const [expandedProgram, setExpandedProgram] = useState(null);

    const categories = [
        {
            id: 'medical',
            title: 'Медицинские',
            // subtitle: 'Основные направления клинической медицины',
            count: 3
        },
        {
            id: 'business',
            title: 'Бизнес',
            // subtitle: 'Управление и предпринимательство',
            count: 3
        },
        {
            id: 'international',
            title: 'international',
            // subtitle: 'Международные программы',
            count: 3
        }
    ];

    const programs = {
        medical: [
            {
                title: 'Кардиология',
                description: 'Диагностика и лечение заболеваний сердечно-сосудистой системы с использованием современных методов исследования',
                fullDescription: 'Программа ординатуры по кардиологии представляет собой углубленное изучение диагностики, лечения и профилактики заболеваний сердечно-сосудистой системы. Студенты изучают современные методы инструментальной диагностики, включая ЭКГ, эхокардиографию, коронарографию, компьютерную томографию сердца. Программа включает практическую подготовку в кардиологических отделениях, отделениях реанимации и интенсивной терапии. Особое внимание уделяется изучению интервенционной кардиологии, кардиохирургии и современных методов лечения острого коронарного синдрома.',
                prices: {
                    first_shift: { semester: '28 300 000', year: '56 600 000' },
                    second_shift: { semester: '25 500 000', year: '51 000 000' }
                },
                icon: Heart,
                benefits: ['Гранты', 'Степендия']
            },
            {
                title: 'Неврология',
                description: 'Изучение и лечение заболеваний нервной системы, включая современные нейрохирургические методы',
                fullDescription: 'Ординатура по неврологии охватывает широкий спектр заболеваний центральной и периферической нервной системы. Программа включает изучение клинической неврологии, нейрофизиологии, нейрорадиологии и нейрохирургии. Студенты получают практические навыки проведения неврологического обследования, интерпретации результатов ЭЭГ, МРТ, КТ головного мозга. Особое внимание уделяется лечению инсультов, эпилепсии, нейродегенеративных заболеваний и функциональных расстройств нервной системы.',
                prices: {
                    first_shift: { semester: '26 800 000', year: '53 600 000' },
                    second_shift: { semester: '24 200 000', year: '48 400 000' }
                },
                icon: Brain,
                benefits: ['Степендия']
            },
            {
                title: 'Педиатрия',
                description: 'Комплексная медицинская помощь детям от рождения до совершеннолетия',
                fullDescription: 'Программа ординатуры по педиатрии направлена на подготовку высококвалифицированных специалистов в области детского здравоохранения. Обучение включает изучение особенностей развития детского организма, диагностики и лечения детских заболеваний, вакцинопрофилактики и диспансеризации. Студенты проходят практику в детских поликлиниках, стационарах, отделениях реанимации новорожденных. Программа охватывает неонатологию, детскую кардиологию, пульмонологию, гастроэнтерологию и другие педиатрические специальности.',
                prices: {
                    first_shift: { semester: '22 400 000', year: '44 800 000' },
                    second_shift: { semester: '20 100 000', year: '40 200 000' }
                },
                icon: Baby,
                benefits: ['Гранты', 'Степендия']
            }
        ],
        business: [
            {
                title: 'Менеджмент здравоохранения',
                description: 'Управление медицинскими организациями и системами здравоохранения',
                fullDescription: 'Программа направлена на подготовку руководителей для системы здравоохранения. Изучаются основы менеджмента, экономики здравоохранения, маркетинга медицинских услуг, управления персоналом. Особое внимание уделяется стратегическому планированию, финансовому менеджменту, управлению качеством медицинской помощи. Студенты изучают правовые аспекты деятельности медицинских организаций, медицинское страхование, современные информационные технологии в здравоохранении.',
                prices: {
                    first_shift: { semester: '24 500 000', year: '49 000 000' },
                    second_shift: { semester: '22 000 000', year: '44 000 000' }
                },
                icon: Users,
                benefits: ['Гранты', 'Степендия']
            },
            {
                title: 'Медицинский маркетинг',
                description: 'Продвижение медицинских услуг и фармацевтических продуктов',
                fullDescription: 'Инновационная программа, сочетающая медицинские знания с современными маркетинговыми технологиями. Студенты изучают особенности продвижения медицинских услуг, этические аспекты медицинского маркетинга, цифровой маркетинг в здравоохранении. Программа включает изучение фармацевтического маркетинга, медицинского PR, брендинга медицинских услуг, анализа рынка здравоохранения.',
                prices: {
                    first_shift: { semester: '26 200 000', year: '52 400 000' },
                    second_shift: { semester: '23 500 000', year: '47 000 000' }
                },
                icon: DollarSign,
                benefits: ['Гранты']
            },
            {
                title: 'Медицинская экономика',
                description: 'Экономический анализ и планирование в сфере здравоохранения',
                fullDescription: 'Программа готовит специалистов по экономическому анализу в здравоохранении. Изучаются методы оценки эффективности медицинских технологий, фармакоэкономика, планирование и анализ бюджетов медицинских организаций. Особое внимание уделяется международным стандартам оценки медицинских технологий, моделированию затрат на лечение, анализу экономической эффективности профилактических программ.',
                prices: {
                    first_shift: { semester: '23 800 000', year: '47 600 000' },
                    second_shift: { semester: '21 400 000', year: '42 800 000' }
                },
                icon: BookOpen,
                benefits: ['Гранты']
            }
        ],
        international: [
            {
                title: 'Global Health',
                description: 'Международные программы общественного здравоохранения',
                fullDescription: 'Программа международного здравоохранения готовит специалистов для работы в глобальных проектах. Обучение ведется на английском языке в сотрудничестве с ведущими зарубежными университетами. Изучаются эпидемиология инфекционных заболеваний, организация здравоохранения в разных странах, международное медицинское право, гуманитарная медицина. Студенты проходят стажировки в международных организациях и NGO.',
                prices: {
                    first_shift: { semester: '35 000 000', year: '70 000 000' },
                    second_shift: { semester: '31 500 000', year: '63 000 000' }
                },
                icon: Activity,
                benefits: ['Гранты']
            },
            {
                title: 'Tropical Medicine',
                description: 'Тропическая медицина и инфекционные заболевания',
                fullDescription: 'Специализированная программа по тропической медицине и паразитологии. Изучаются особенности диагностики и лечения тропических заболеваний, малярии, лихорадки денге, туберкулеза, ВИЧ-инфекции. Программа включает изучение эпидемиологии инфекционных заболеваний в развивающихся странах, вакцинопрофилактики, организации противоэпидемических мероприятий. Обучение проводится совместно с London School of Hygiene & Tropical Medicine.',
                prices: {
                    first_shift: { semester: '38 200 000', year: '76 400 000' },
                    second_shift: { semester: '34 300 000', year: '68 600 000' }
                },
                icon: Eye,
                benefits: ['Степендия']
            },
            {
                title: 'Digital Health',
                description: 'Цифровые технологии в медицине и телемедицина',
                fullDescription: 'Инновационная программа на стыке медицины и IT-технологий. Изучаются принципы телемедицины, мобильного здравоохранения, больших данных в медицине, искусственного интеллекта в диагностике. Студенты получают навыки разработки медицинских приложений, анализа медицинских данных, создания систем поддержки принятия клинических решений. Программа реализуется в партнерстве с ведущими IT-компаниями.',
                prices: {
                    first_shift: { semester: '32 500 000', year: '65 000 000' },
                    second_shift: { semester: '29 200 000', year: '58 400 000' }
                },
                icon: Award,
                benefits: ['Гранты', 'Степендия']
            }
        ]
    };

    const currentPrograms = programs[activeCategory];
    const activeTab = categories.find(cat => cat.id === activeCategory);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('uz-UZ').format(parseInt(price.replace(/\s/g, '')));
    };

    const getBenefitStyle = (benefit) => {
        if (benefit.toLowerCase().includes('грант') || benefit.toLowerCase().includes('стажировка') || benefit.toLowerCase().includes('сертификация')) {
            return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800';
        } else {
            return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
        }
    };

    const toggleProgramExpansion = (index) => {
        setExpandedProgram(expandedProgram === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center overflow-hidden" style={{
                background: `linear-gradient(rgba(107, 14, 85, 0.60), rgba(107, 14, 85, 0.70)), url('https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/bakalavriat-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Программы Ординатуры</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-white max-w-3xl">
                        Профессиональные программы последипломного медицинского образования
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[1000] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8f9fa" opacity=".8"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8f9fa" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa"></path>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Сайдбар с категориями */}
                    <div className="w-full lg:w-80 lg:flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-8">
                            <div className="flex items-center mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">Направления</h2>
                            </div>

                            <div className="space-y-2 mb-8">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${activeCategory === category.id
                                            ? 'text-white border-transparent'
                                            : 'text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                                            }`}
                                        style={{
                                            backgroundColor: activeCategory === category.id ? '#6b0e55' : 'transparent'
                                        }}
                                    >
                                        <div className="font-medium text-sm">{category.title}</div>
                                        <div className={`text-xs mt-1 ${activeCategory === category.id ? 'text-purple-100' : 'text-gray-500'
                                            }`}>
                                            {category.subtitle}
                                        </div>
                                        <div className={`text-xs mt-2 ${activeCategory === category.id ? 'text-purple-200' : 'text-gray-400'
                                            }`}>
                                            {category.count} программ
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Переключатель смен */}
                            <div className="border-t border-gray-100 pt-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-4">Смена обучения</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedShift('first')}
                                        className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 ${selectedShift === 'first'
                                            ? 'text-white'
                                            : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                                            }`}
                                        style={{
                                            backgroundColor: selectedShift === 'first' ? '#6b0e55' : undefined
                                        }}
                                    >
                                        1 смена
                                    </button>
                                    <button
                                        onClick={() => setSelectedShift('second')}
                                        className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 ${selectedShift === 'second'
                                            ? 'text-white'
                                            : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                                            }`}
                                        style={{
                                            backgroundColor: selectedShift === 'second' ? '#6b0e55' : undefined
                                        }}
                                    >
                                        2 смена
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Основной контент */}
                    <div className="flex-1">
                        {/* Заголовок секции */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{activeTab?.title}</h2>
                            <p className="text-gray-600">{activeTab?.subtitle}</p>
                        </div>

                        {/* Программы */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {currentPrograms.map((program, index) => {
                                const IconComponent = program.icon;
                                const currentPrices = program.prices[selectedShift === 'first' ? 'first_shift' : 'second_shift'];
                                const isExpanded = expandedProgram === index;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
                                    >
                                        {/* Заголовок с иконкой */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-50 mr-4">
                                                    <IconComponent
                                                        className="w-6 h-6"
                                                        style={{ color: '#6b0e55' }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">
                                                        {program.title}
                                                    </h3>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {selectedShift === 'first' ? '1 смена' : '2 смена'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Описание с анимацией */}
                                        <div className="flex-grow">
                                            <div className="mb-6">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {program.description}
                                                </p>
                                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                    }`}>
                                                    <div className="border-l-4 border-purple-200 pl-4 bg-gray-50 p-4 rounded-r-lg">
                                                        <p className="text-gray-700 text-sm leading-relaxed">
                                                            {program.fullDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Стоимость */}
                                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">За семестр</div>
                                                        <div className="text-base md:text-lg font-bold text-gray-900">
                                                            {formatPrice(currentPrices.semester)}
                                                        </div>
                                                        <div className="text-xs text-gray-500">сум</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">За учебный год</div>
                                                        <div className="text-base md:text-lg font-bold" style={{ color: '#6b0e55' }}>
                                                            {formatPrice(currentPrices.year)}
                                                        </div>
                                                        <div className="text-xs text-gray-500">сум</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Преимущества */}
                                            <div className="mb-6">
                                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                                    Преимущества
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {program.benefits.map((benefit, benefitIndex) => (
                                                        <span
                                                            key={benefitIndex}
                                                            className={getBenefitStyle(benefit)}
                                                        >
                                                            {benefit}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Кнопка внизу */}
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => toggleProgramExpansion(index)}
                                                className="w-full py-3 text-white font-medium rounded-lg transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2"
                                                style={{ backgroundColor: '#6b0e55' }}
                                            >
                                                {isExpanded ? 'Скрыть детали' : 'Подробнее о программе'}
                                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Призыв к действию */}
                        <div className="mt-12">
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                                    Подача документов на 2025/2026 учебный год
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Приемная комиссия принимает документы до 25 августа 2025 года.
                                    Получите персональную консультацию по выбору программы обучения.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button
                                        className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:opacity-90"
                                        style={{ backgroundColor: '#6b0e55' }}
                                    >
                                        Подать документы
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}