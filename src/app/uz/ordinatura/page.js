import OrdinaturaClient from './OrdinaturaClient';

// Получение данных с API
async function getOrdinaturaData() {
    try {
        const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84344', {
            next: { revalidate: 3600 } // Revalidate каждый час
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching ordinatura data:', error);
        return null;
    }
}

// Мапинг категорий
const categoryMapping = {
    'accordion_repeater': {
        id: 'surgery',
        name: 'Jarrohlik yo\'nalishlari',
        color: 'bg-red-500'
    },
    'accordion_repeater_2': {
        id: 'pediatric',
        name: 'Pediatriya yo\'nalishlari',
        color: 'bg-green-500'
    },
    'accordion_repeater_3': {
        id: 'therapeutic',
        name: 'Terapevtik yo\'nalishlar',
        color: 'bg-blue-500'
    },
    'accordion_repeater_4': {
        id: 'stomatology',
        name: 'Stomatologiya yo\'nalishlari',
        color: 'bg-purple-500'
    }
};

// Преобразование данных API в формат компонента
function transformApiData(apiData) {
    if (!apiData || !apiData.acf) {
        return { categories: [], programs: [] };
    }

    const categories = [];
    const programs = [];
    let programId = 1;

    Object.keys(categoryMapping).forEach(apiKey => {
        const categoryData = apiData.acf[apiKey];
        const categoryInfo = categoryMapping[apiKey];

        if (categoryData && Array.isArray(categoryData) && categoryData.length > 0) {
            // Добавляем категорию только если в ней есть программы
            categories.push(categoryInfo);

            // Преобразуем программы
            categoryData.forEach(program => {
                if (program.accordion_title_uz && program.accordion_title_uz.trim()) {
                    programs.push({
                        id: programId++,
                        title: program.accordion_title_uz,
                        category: categoryInfo.id,
                        description: program.text_uz ? program.text_uz.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'Описание программы',
                        semesterPrice: program.semester_price || '0',
                        yearPrice: program.full_price || (program.semester_price ? (parseInt(program.semester_price.replace(/\s/g, '')) * 2).toString() : '0'),
                        shift1Price: program.semester_price || '0',
                        shift2Price: program.semester_price_2_smena || program.semester_price || '0',
                        duration: program.let_obucheniya ? `${program.let_obucheniya} года` : '2 года',
                        benefits: [
                            ...(program.grant ? ['Grant'] : []),
                            ...(program.stipendiya ? ['Stipendiya'] : [])
                        ],
                        fullDescription: program.text_uz || '',
                        iconUrl: program.title_icon || null,
                        availableFor: program.dostupno_dlya_napravlenij ? program.dostupno_dlya_napravlenij.split(',').map(s => s.trim()).filter(s => s) : [],
                    });
                }
            });
        }
    });

    return { categories, programs };
}

export default async function OrdinaturaPage() {
    const apiData = await getOrdinaturaData();
    const { categories, programs } = transformApiData(apiData);

    // Если данные не загрузились, показываем fallback
    if (!apiData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Программы Ординатуры
                    </h1>
                    <p className="text-gray-600">
                        Данные временно недоступны. Попробуйте обновить страницу.
                    </p>
                </div>
            </div>
        );
    }

    return <OrdinaturaClient categories={categories} programs={programs} />;
}