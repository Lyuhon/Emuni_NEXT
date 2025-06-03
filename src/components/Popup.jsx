// app/components/Popup.jsx

// app/components/Popup.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Новое состояние для успешной отправки
    const [isSubmitting, setIsSubmitting] = useState(false); // Новое состояние для загрузки
    const [isLoading, setIsLoading] = useState(false); // Состояние загрузки полей формы

    const formId = 451;

    // Соответствия для мед. факультетов
    const mappingMed = {
        'Стоматология': 'Стоматология | Стоматология',
        'Фармация': 'Фармация | Фармация',
        'Лечебное дело': 'Лечебное дело | Даволаш иши',
        'Педиатрия': 'Педиатрия | Педиатрия',
        'Высшее медсестринское дело': 'Высшее медсестринское дело | Олий ҳамширалик',
        'Народная медицина': 'Народная медицина | Халқ табобати',
        'Биотехнология': 'Биотехнология | Биотехнология',
        'Медико-биологическое дело': 'Медико-биологическое дело | Тиббий-биологик иш',
        'Медико-профилактическое дело': 'Медико-профилактическое дело | Тиббий-профилактика иши',
        'Биология': 'Биология | Биология',
        'Химия': 'Химия | Кимё',
        'Фундаментальная медицина': 'Фундаментальная медицина | Фундаментал тиббиёт',
        'Косметология': 'Косметология | Косметология'
    };

    // Соответствия для бизнес факультетов
    const mappingBus = {
        'Архитектура': 'Архитектура | Архитектура',
        'Дизайн интерьера': 'Дизайн интерьера | Интерьер дизайни',
        'Дошкольное образование': 'Дошкольное образование | Мактабгача таълим',
        'Логистика': 'Логистика | Логистика',
        'Маркетинг': 'Маркетинг | Маркетинг',
        'Специальная педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
        'Транспорт (автомобильный транспорт)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
        'Туризм': 'Туризм | Туризм',
        'Управление бизнесом': 'Управление бизнесом | Бизнес бошқаруви',
        'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
        'Финансы и финансовые технологии': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
        'Экономика (по отраслям и секторам обслуживания)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
        'Менеджмент': 'Менеджмент | Менеджмент',
        'Начальное образование': 'Начальное образование | Бошланғич таълим',
        'Психология': 'Психология | Психология',
        'Педагогика': 'Педагогика | Педагогика',
        'Налоги и налогообложение': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
        'Банковское дело': 'Банковское дело | Банк иши',
        'Бухгалтерский учет': 'Бухгалтерский учет | Бухгалтерия хисоби'
    };

    // Соответствия для формы обучения
    const mappingTime = {
        '1 смена': `Очная | Kunduzgi ta'lim`,
        '2 смена': `Вечерняя | Kechki ta'lim`,
        'Очное обучение': `Очная | Kunduzgi ta'lim`,
        'Вечернее обучение': `Вечерняя | Kechki ta'lim`,
        'Заочное обучение': `Заочная | Sirtqi ta'lim`
    };

    // Функция для очистки номера телефона от специальных символов
    const sanitizeInput = (value) => {
        return value.replace(/[-()]/g, '');
    };

    // Обработчик кликов по триггерам
    useEffect(() => {
        const handleTriggerClick = (e) => {
            if (e.target.closest('.pop-form-trigger')) {
                e.preventDefault();
                setIsOpen(true);
                setIsSubmitted(false); // Сбрасываем состояние при открытии
                setFormData({});
                setErrors({});
                setMessage('');
            }
        };

        document.addEventListener('click', handleTriggerClick);
        return () => {
            document.removeEventListener('click', handleTriggerClick);
        };
    }, []);

    // Управление скроллингом body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Предварительная загрузка полей формы при монтировании компонента
    useEffect(() => {
        async function prefetchFormFields() {
            try {
                setIsLoading(true);
                const res = await fetch(`/api/form-fields?formId=${formId}`);
                const data = await res.json();
                if (res.ok) {
                    const fieldsArray = Object.values(data);
                    setFields(fieldsArray);
                }
            } catch (error) {
                console.error('Error prefetching form fields:', error);
            } finally {
                setIsLoading(false);
            }
        }

        prefetchFormFields();
    }, []);

    // Получение полей формы при открытии попапа, если они еще не загружены
    useEffect(() => {
        if (isOpen && fields.length === 0 && !isLoading) {
            async function fetchFormFields() {
                try {
                    setIsLoading(true);
                    const res = await fetch(`/api/form-fields?formId=${formId}`);
                    const data = await res.json();
                    if (res.ok) {
                        const fieldsArray = Object.values(data);
                        setFields(fieldsArray);
                    }
                } catch (error) {
                    console.error('Error fetching form fields:', error);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchFormFields();
        }
    }, [isOpen, fields.length, isLoading]);

    // Установка текущего URL в поле "Источник"
    useEffect(() => {
        if (isOpen) {
            const sourceField = fields.find((f) => f.label === 'Источник');
            if (sourceField) {
                setFormData(prevData => ({
                    ...prevData,
                    [sourceField.id]: window.location.href
                }));
            }
        }
    }, [isOpen, fields]);

    // Эффект для синхронизации данных между связанными полями
    useEffect(() => {
        if (fields.length === 0) return;

        let updatedFormData = null;
        let needUpdate = false;

        const medFacultyField = fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)');
        const busFacultyField = fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)');
        const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
        const medTimeField = fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)');
        const busTimeField = fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)');
        const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
        const phone1Field = fields.find(f => f.label === 'Номер телефона');
        const phone2Field = fields.find(f => f.label === 'Дополнительный номер');
        const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
        const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');
        const languageField = fields.find(f => f.label === 'Язык обучения');
        const directionField = fields.find(f => f.label === 'Выберите направление');

        if (!updatedFormData) {
            updatedFormData = { ...formData };
        }

        // Новая логика для INTERNATIONAL направления
        if (directionField && languageField && formData[directionField.id] === 'INTERNATIONAL') {
            if (formData[languageField.id] !== 'Английский') {
                updatedFormData[languageField.id] = 'Английский';
                needUpdate = true;
            }
        }

        if (medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
            const selectedValue = formData[medFacultyField.id];
            const mappedValue = mappingMed[selectedValue];
            if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
                updatedFormData[directionBitrixField.id] = mappedValue;
                needUpdate = true;
            }
        }

        if (busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
            const selectedValue = formData[busFacultyField.id];
            const mappedValue = mappingBus[selectedValue];
            if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
                updatedFormData[directionBitrixField.id] = mappedValue;
                needUpdate = true;
            }
        }

        if (timeBitrixField && ((medTimeField && formData[medTimeField?.id]) || (busTimeField && formData[busTimeField?.id]))) {
            const medTimeValue = formData[medTimeField?.id];
            const busTimeValue = formData[busTimeField?.id];
            let timeValue = `Очная | Kunduzgi ta'lim`;
            if (medTimeValue && mappingTime[medTimeValue]) {
                timeValue = mappingTime[medTimeValue];
            } else if (busTimeValue && mappingTime[busTimeValue]) {
                timeValue = mappingTime[busTimeValue];
            }
            if (formData[timeBitrixField.id] !== timeValue) {
                updatedFormData[timeBitrixField.id] = timeValue;
                needUpdate = true;
            }
        }

        if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
            const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
            if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
                updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
                needUpdate = true;
            }
        }

        if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
            const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
            if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
                updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
                needUpdate = true;
            }
        }

        if (needUpdate) {
            setFormData(updatedFormData);
        }
    }, [formData, fields]);

    const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
    const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);

    const validatePINFL = (value) => /^\d{14}$/.test(value);

    const formatDate = (value) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 8);
        const day = cleaned.slice(0, 2);
        const month = cleaned.slice(2, 4);
        const year = cleaned.slice(4, 8);
        let formatted = '';
        if (day) formatted += day;
        if (month) formatted += '/' + month;
        if (year) formatted += '/' + year;
        return formatted;
    };

    const formatPhone = (value) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 9);
        const part1 = cleaned.slice(0, 2);
        const part2 = cleaned.slice(2, 5);
        const part3 = cleaned.slice(5, 7);
        const part4 = cleaned.slice(7, 9);
        let formatted = '';
        if (part1) formatted += '(' + part1;
        if (part2) formatted += ')' + part2;
        if (part3) formatted += '-' + part3;
        if (part4) formatted += '-' + part4;
        return formatted;
    };

    const formatPassport = (value) => {
        const cleaned = value.replace(/[^a-z0-9]/gi, '');
        const letters = cleaned.slice(0, 2).toLowerCase();
        const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
        return letters + numbers;
    };

    const handleChange = (fieldId, value, field) => {
        let newValue = value;
        let newErrors = { ...errors };
        let updatedFormData = { ...formData };

        if (field.label === 'Имя' || field.label === 'Фамилия') {
            if (!validateLatinAndSpaces(value)) {
                newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Дата рождения') {
            newValue = formatDate(value);
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (value && !dateRegex.test(newValue)) {
                newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
            newValue = formatPhone(value);
            const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
            if (field.required === '1' && value && !phoneRegex.test(newValue)) {
                newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
            // Внутри функции handleChange, после обработки "Серия и номер паспорта"
        } else if (field.label === 'Серия и номер паспорта') {
            newValue = formatPassport(value);
            if (value && !validatePassport(newValue)) {
                newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'ПИНФЛ') {
            newValue = value.replace(/\D/g, '').slice(0, 14); // Удаляем нечисловые символы, ограничиваем 14 символами
            if (field.required === '1' && value && !validatePINFL(newValue)) {
                newErrors[fieldId] = 'ПИНФЛ должен содержать ровно 14 цифр.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.type === 'checkbox') {
            if (Array.isArray(value)) {
                newValue = value.length > 0 ? '1' : '';
                updatedFormData[fieldId] = newValue;
            } else {
                newValue = value ? '1' : '';
                updatedFormData[fieldId] = newValue;
            }
            if (field.required === '1' && newValue !== '1') {
                newErrors[fieldId] = 'Это поле обязательно.';
            } else {
                delete newErrors[fieldId];
            }
        } else {
            updatedFormData[fieldId] = newValue;
        }

        setFormData(updatedFormData);
        setErrors(newErrors);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setMessage('Пожалуйста, исправьте ошибки в форме.');
            return;
        }

        setIsSubmitting(true); // Включаем состояние загрузки
        console.log('Отправляемые данные:', JSON.stringify({ form_id: formId, fields: formData }));

        try {
            const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    form_id: formId,
                    fields: formData,
                }),
            });
            const result = await res.json();
            console.log('API response:', result);
            if (res.ok) {
                setIsSubmitted(true); // Переключаем на уведомление
                setFormData({});
                setErrors({});
                setMessage(''); // Очищаем старое сообщение
            } else {
                setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            setMessage('Ошибка сети.');
        } finally {
            setIsSubmitting(false); // Выключаем загрузку
        }
    };

    const directionField = fields.find((f) => f.label === 'Выберите направление');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';
    const showInternationalFaculty = directionValue === 'INTERNATIONAL';

    const agreementField = fields.find((f) => f.label === 'Соглашение');
    const otherFields = fields.filter((f) => f.label !== 'Соглашение');

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[20000]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        className="bg-white p-9 rounded-xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Регистрация</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {isSubmitted ? (
                            <div className="text-center space-y-6">
                                <p className="text-xl font-semibold text-green-600">
                                    Заявка успешно отправлена, ожидайте!
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                >
                                    Закрыть
                                </button>
                            </div>
                        ) : isLoading ? (
                            <div className="flex flex-col items-center justify-center py-8">
                                <svg className="animate-spin h-10 w-10 text-[#631463] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className="text-[#631463] text-lg">Загрузка полей формы...</p>
                            </div>
                        ) : fields.length === 0 ? (
                            <p className="text-gray-500 text-center">Загрузка полей...</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {otherFields.map((field) => {
                                    if (
                                        (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                        (field.label === 'Select faculty (INTERNATIONAL)' && !showInternationalFaculty) ||
                                        (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
                                    ) {
                                        return null;
                                    }

                                    const isConditionalField =
                                        field.label === 'Выберите факультет (MEDICAL SCHOOL)' ||
                                        field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' ||
                                        field.label === 'Select faculty (INTERNATIONAL)' ||
                                        field.label === 'Форма обучения (MEDICAL SCHOOL)' ||
                                        field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)';

                                    const isBitrixField = [
                                        'BITRIX - Телефон 1',
                                        'BITRIX - Телефон 2',
                                        'BITRIX - Форма обучения',
                                        'BITRIX - Направления',
                                        'Источник'
                                    ].includes(field.label);

                                    // Проверяем, является ли поле "Язык обучения" и нужно ли его заблокировать
                                    const isLanguageFieldDisabled = field.label === 'Язык обучения' && showInternationalFaculty;

                                    return (
                                        <div
                                            key={field.id}
                                            className={`space-y-2 ${isConditionalField ? 'animate-field-appear' : ''} ${isBitrixField ? 'hidden' : ''}`}
                                        >
                                            <label className="block text-sm font-semibold text-gray-700">
                                                {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
                                            </label>
                                            {field.type === 'text' && (
                                                <input
                                                    type="text"
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                    placeholder={field.placeholder || ''}
                                                    required={field.required === '1'}
                                                    maxLength={
                                                        field.label === 'Серия и номер паспорта'
                                                            ? 9
                                                            : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
                                                                ? 13
                                                                : field.label === 'Дата рождения'
                                                                    ? 10
                                                                    : field.label === 'ПИНФЛ'
                                                                        ? 14
                                                                        : undefined
                                                    }
                                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                            )}
                                            {field.type === 'select' && (
                                                <select
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                    required={field.required === '1'}
                                                    disabled={isLanguageFieldDisabled}
                                                    className={`w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white ${isLanguageFieldDisabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : ''}`}
                                                >
                                                    <option value="">{field.placeholder || '- Выбрать -'}</option>
                                                    {/* Для поля "Язык обучения" при INTERNATIONAL добавляем опцию "Английский" */}
                                                    {field.label === 'Язык обучения' && showInternationalFaculty && (
                                                        <option value="Английский">Английский</option>
                                                    )}
                                                    {Object.values(field.choices).map((choice, index) => (
                                                        <option key={index} value={choice.label}>
                                                            {choice.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                            {field.type === 'checkbox' && (
                                                <div>
                                                    {Object.values(field.choices).map((choice, index) => (
                                                        <label key={index} className="flex items-center space-x-3">
                                                            <input
                                                                type="checkbox"
                                                                checked={formData[field.id] === '1'}
                                                                onChange={(e) => handleChange(field.id, e.target.checked, field)}
                                                                required={field.required === '1' && formData[field.id] !== '1'}
                                                                className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
                                                            />
                                                            <span
                                                                dangerouslySetInnerHTML={{ __html: choice.label }}
                                                                className="text-gray-700"
                                                            />
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                            {errors[field.id] && (
                                                <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
                                            )}
                                        </div>
                                    );
                                })}
                                {agreementField && (
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            {agreementField.label}{' '}
                                            {agreementField.required === '1' && <span className="text-red-500">*</span>}
                                        </label>
                                        {agreementField.type === 'checkbox' && (
                                            <div>
                                                {Object.values(agreementField.choices).map((choice, index) => (
                                                    <label key={index} className="flex items-center space-x-3">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData[agreementField.id] === '1'}
                                                            onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
                                                            required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
                                                            className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
                                                        />
                                                        <span
                                                            dangerouslySetInnerHTML={{ __html: choice.label }}
                                                            className="text-gray-700"
                                                        />
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                        {errors[agreementField.id] && (
                                            <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
                                        )}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full p-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center 
                                    ${isSubmitting ? 'bg-[#6b0e55] opacity-50 cursor-not-allowed text-white' : 'bg-[#6b0e55] hover:bg-[#7a095f] text-white'}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5 mr-2 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Отправка...
                                        </>
                                    ) : (
                                        'Отправить'
                                    )}
                                </button>
                            </form>
                        )}
                        {message && !isSubmitted && (
                            <p
                                className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
                            >
                                {message}
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
