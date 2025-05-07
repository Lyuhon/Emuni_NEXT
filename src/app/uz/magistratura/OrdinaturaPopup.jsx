// // OrdinaturaPopup.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup({ isOpen, onClose }) {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const formId = 477;

    // Маппинг для факультетов
    const mappingMed = {
        'Эндокринология': 'Эндокринология',
        'Оториноларингология': 'Оториноларингология',
        'Дерматовенерология': 'Дерматовенерология',
        'Хирургия (йўналишлари бўйича)': 'Хирургия (по направлениям) | Хирургия (йўналишлари бўйича)',
        'Урология': 'Урология',
        'Тиббий радиология': 'Медицинская радиология | Тиббий радиология',
        'Педиатрия (йўналишлари бўйича)': 'Педиатрия (по направлениям) | Педиатрия (йўналишлари бўйича)',
        'Дентал имплантология': 'Дентальная имплантология | Дентал имплантология',
        'Ортопедик стоматология': 'Ортопедическая стоматология | Ортопедик стоматология',
        'Терапевтик стоматология': 'Терапевтическая стоматология | Терапевтик стоматология'
    };

    // Маппинг для языка обучения
    const mappingLang = {
        'Русский': 'Русский | Рус тили',
        'Узбекский': 'Узбекский | Ўзбек тили'
    };

    // Функция для очистки номера телефона
    const sanitizeInput = (value) => {
        return value.replace(/[-()]/g, '');
    };

    // Управление скроллом
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

    // Предварительная загрузка полей формы
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

    // Загрузка полей при открытии формы
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

    // Синхронизация полей
    useEffect(() => {
        if (fields.length === 0) return;

        let updatedFormData = { ...formData };
        let needUpdate = false;

        const facultyField = fields.find(f => f.label === `Fakul'tetni tanlang `);
        const ordinaturaField = fields.find(f => f.label === 'BITRIX - ОРДИНАТУРА');
        const directionField = fields.find(f => f.label === 'BITRIX - Направления');
        const langField = fields.find(f => f.label === 'Tilni tanlang');
        const formField = fields.find(f => f.label === 'BITRIX - Форма обучения');
        const phone1Field = fields.find(f => f.label === 'Telefon raqamingiz');
        const phone2Field = fields.find(f => f.label === `Qo'shimcha telefon raqam`);
        const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
        const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

        // Установка значения "ОРДИНАТУРА" для поля BITRIX - ОРДИНАТУРА
        if (ordinaturaField && !updatedFormData[ordinaturaField.id]) {
            updatedFormData[ordinaturaField.id] = 'ОРДИНАТУРА';
            needUpdate = true;
        }

        if (facultyField && (ordinaturaField || directionField) && formData[facultyField.id]) {
            const selectedValue = formData[facultyField.id];
            const mappedValue = mappingMed[selectedValue];
            if (mappedValue) {
                if (directionField && formData[directionField.id] !== mappedValue) {
                    updatedFormData[directionField.id] = mappedValue;
                    needUpdate = true;
                }
            }
        }

        if (langField && formField && formData[langField.id]) {
            const selectedLang = formData[langField.id];
            const mappedLang = mappingLang[selectedLang];
            if (mappedLang && formData[formField.id] !== mappedLang) {
                updatedFormData[formField.id] = mappedLang;
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

    // Валидация
    const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
    const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
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

        if (field.label === 'Ism' || field.label === 'Familiya') {
            if (!validateLatinAndSpaces(value)) {
                newErrors[fieldId] = 'Iltimos, faqat lotin harflari va bo‘sh joylardan foydalaning.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Telefon raqamingiz' || field.label === `Qo'shimcha telefon raqam`) {
            newValue = formatPhone(value);
            const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
            if (field.required === '1' && value && !phoneRegex.test(newValue)) {
                newErrors[fieldId] = 'Raqamni (99)999-99-99 formatida kiriting.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Pasport seriyasi va raqami') {
            newValue = formatPassport(value);
            if (value && !validatePassport(newValue)) {
                newErrors[fieldId] = 'Pasportni aa999999 formatida kiriting (ikki lotin harfi va 6 ta raqam).';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.type === 'checkbox') {
            newValue = value ? '1' : '';
            updatedFormData[fieldId] = newValue;
            if (field.required === '1' && newValue !== '1') {
                newErrors[fieldId] = 'Bu maydon to‘ldirilishi shart.';
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
            onClose();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setMessage('Iltimos, shakldagi xatoliklarni to‘g‘rilang.');
            return;
        }

        setIsSubmitting(true);
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
            if (res.ok) {
                setIsSubmitted(true);
                setFormData({});
                setErrors({});
                setMessage('');
            } else {
                setMessage(`Xatolik: ${result.message || 'Noma’lum xatolik'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            setMessage('Tarmoq xatoligi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const agreementField = fields.find((f) => f.label === 'Shartnoma');
    const otherFields = fields.filter((f) => f.label !== 'Shartnoma');

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
                            <h2 className="text-2xl font-bold text-gray-800">Ordinatura EMU University</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {isSubmitted ? (
                            <div className="text-center space-y-6">
                                <p className="text-xl font-semibold text-green-600">
                                    Ariza muvaffaqiyatli yuborildi, kuting!
                                </p>
                                <button
                                    onClick={onClose}
                                    className="bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                >
                                    Yopish
                                </button>
                            </div>
                        ) : isLoading ? (
                            <div className="flex flex-col items-center justify-center py-8">
                                <svg className="animate-spin h-10 w-10 text-[#631463] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className="text-[#631463] text-lg">Maydonlar yuklanmoqda...</p>
                            </div>
                        ) : fields.length === 0 ? (
                            <p className="text-gray-500 text-center">Shakl maydonlari yuklanmoqda...</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {otherFields.map((field) => {
                                    const isBitrixField = [
                                        'BITRIX - ОРДИНАТУРА',
                                        'BITRIX - Направления',
                                        'BITRIX - Форма обучения',
                                        'BITRIX - Телефон 1',
                                        'BITRIX - Телефон 2'
                                    ].includes(field.label);

                                    return (
                                        <div
                                            key={field.id}
                                            className={`space-y-2 ${isBitrixField ? 'hidden' : ''}`}
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
                                                        field.label === 'Pasport seriyasi va raqami'
                                                            ? 9
                                                            : field.label === 'Telefon raqamingiz' || field.label === `Qo'shimcha telefon raqam`
                                                                ? 13
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
                                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white"
                                                >
                                                    <option value="">{field.placeholder || '- Tanlang -'}</option>
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
                                            Yuborilmoqda...
                                        </>
                                    ) : (
                                        'Yuborish'
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