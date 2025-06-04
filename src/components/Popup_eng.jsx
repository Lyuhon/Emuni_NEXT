// app/components/Popup_eng.jsx
// app/components/Popup_eng.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // State for successful submission
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loading
    const [isLoading, setIsLoading] = useState(false); // State for form fields loading

    const formId = 485;

    // Mappings for medical faculties
    const mappingMed = {
        'Dentistry': 'Стоматология | Стоматология',
        'Pharmacy': 'Фармация | Фармация',
        'General Medicine': 'Лечебное дело | Даволаш иши',
        'Pediatrics': 'Педиатрия | Педиатрия',
        'Higher nursing': 'Высшее медсестринское дело | Олий ҳамширалик',
        'Traditional medicine': 'Народная медицина | Халқ табобати',
        'Biotechnology': 'Биотехнология | Биотехнология',
        'Biomedical': 'Медико-биологическое дело | Тиббий-биологик иш',
        'Preventive medicine': 'Медико-профилактическое дело | Тиббий-профилактика иши',
        'Biology': 'Биология | Биология',
        'Chemistry': 'Химия | Кимё',
        'Veterinary in medicine': 'Ветеринарное дело | Ветеринария иши',
        'Cosmetology': 'Косметология | Косметология',
        'Fundamental medicine': 'Фундаментальная медицина | Фундаментал тиббиёт',
    };

    // Mappings for business faculties
    const mappingBus = {
        'The Interior Design': 'Дизайн интерьера | Интерьер дизайни',
        'Marketing': 'Маркетинг | Маркетинг',
        'Business management': 'Управление бизнесом | Бизнес бошқаруви',
        'Philology and Linguistics': 'Филология и лингвистика | Филология и лингвистика',
        'Faculty of Finance and financial technology': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
        'Faculty of Economics (by industry and service sectors)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
        'Management': 'Менеджмент | Менеджмент',
        'Psychology': 'Психология | Психология',
        'Taxes and taxation': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
        'Banking': 'Банковское дело | Банк иши',
        'Accounting': 'Бухгалтерский учет | Бухгалтерия хисоби'
    };

    // Mappings for study forms
    const mappingTime = {
        '1 shift': `Очная | Kunduzgi ta'lim`,
        '2 shift': `Вечерняя | Kechki ta'lim`,
        'Full-time study': `Очная | Kunduzgi ta'lim`,
        'Evening study': `Вечерняя | Kechki ta'lim`,
        'Distance study': `Заочная | Sirtqi ta'lim`
    };

    // Function to sanitize phone number by removing special characters
    const sanitizeInput = (value) => {
        return value.replace(/[-()]/g, '');
    };

    // Handler for trigger clicks
    useEffect(() => {
        const handleTriggerClick = (e) => {
            if (e.target.closest('.pop-form-trigger')) {
                e.preventDefault();
                setIsOpen(true);
                setIsSubmitted(false); // Reset state when opening
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

    // Managing body scrolling
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

    // Prefetching form fields on component mount
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

    // Fetching form fields when popup opens, if not already loaded
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

    // Setting current URL in "Source" field
    useEffect(() => {
        if (isOpen) {
            const sourceField = fields.find((f) => f.label === 'Source');
            if (sourceField) {
                setFormData(prevData => ({
                    ...prevData,
                    [sourceField.id]: window.location.href
                }));
            }
        }
    }, [isOpen, fields]);

    // Effect for synchronizing data between related fields and handling international faculty
    useEffect(() => {
        if (fields.length === 0) return;

        let updatedFormData = null;
        let needUpdate = false;

        const medFacultyField = fields.find(f => f.label === 'Choose a faculty (MEDICAL SCHOOL)');
        const busFacultyField = fields.find(f => f.label === 'Choose a faculty (BUSINESS AND SOCIAL SCHOOL)');
        const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
        const medTimeField = fields.find(f => f.label === 'Study form (MEDICAL SCHOOL)');
        const busTimeField = fields.find(f => f.label === 'Study form (BUSINESS AND SOCIAL SCHOOL)');
        const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
        const phone1Field = fields.find(f => f.label === 'Phone number');
        const phone2Field = fields.find(f => f.label === 'Second phone number (optional)');
        const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
        const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');
        const directionField = fields.find(f => f.label === 'Choose a direction');
        const languageField = fields.find(f => f.label === 'Select language');

        if (!updatedFormData) {
            updatedFormData = { ...formData };
        }

        // Handle international faculty language selection
        if (directionField && languageField && formData[directionField.id] === 'INTERNATIONAL') {
            if (formData[languageField.id] !== 'English') {
                updatedFormData[languageField.id] = 'English';
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

        if (field.label === 'Name' || field.label === 'Second name') {
            if (!validateLatinAndSpaces(value)) {
                newErrors[fieldId] = 'Please enter only Latin letters and spaces.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Date of birth') {
            newValue = formatDate(value);
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (value && !dateRegex.test(newValue)) {
                newErrors[fieldId] = 'Enter date in format dd/mm/yyyy.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Phone number' || field.label === 'Second phone number (optional)') {
            newValue = formatPhone(value);
            const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
            if (field.required === '1' && value && !phoneRegex.test(newValue)) {
                newErrors[fieldId] = 'Enter number in format (99)999-99-99.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Passport series and number') {
            newValue = formatPassport(value);
            if (value && !validatePassport(newValue)) {
                newErrors[fieldId] = 'Enter passport in format aa9999999 (two Latin letters and 7 digits).';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'ПИНФЛ') {
            newValue = value.replace(/\D/g, '').slice(0, 14); // Remove non-numeric characters, limit to 14 characters
            if (field.required === '1' && value && !validatePINFL(newValue)) {
                newErrors[fieldId] = 'PINFL must contain exactly 14 digits.';
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
                newErrors[fieldId] = 'This field is required.';
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
            setMessage('Please correct the errors in the form.');
            return;
        }

        setIsSubmitting(true); // Enable loading state
        console.log('Submitting data:', JSON.stringify({ form_id: formId, fields: formData }));

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
                setIsSubmitted(true); // Switch to notification
                setFormData({});
                setErrors({});
                setMessage(''); // Clear old message
            } else {
                setMessage(`Error: ${result.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            setMessage('Network error.');
        } finally {
            setIsSubmitting(false); // Turn off loading
        }
    };

    const directionField = fields.find((f) => f.label === 'Choose a direction');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';
    const showInternationalFaculty = directionValue === 'INTERNATIONAL';

    const agreementField = fields.find((f) => f.label === 'Terms of use');
    const otherFields = fields.filter((f) => f.label !== 'Terms of use');

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
                            <h2 className="text-2xl font-bold text-gray-800">Registration</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {isSubmitted ? (
                            <div className="text-center space-y-6">
                                <p className="text-xl font-semibold text-green-600">
                                    Application successfully submitted, please wait!
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                >
                                    Close
                                </button>
                            </div>
                        ) : isLoading ? (
                            <div className="flex flex-col items-center justify-center py-8">
                                <svg className="animate-spin h-10 w-10 text-[#631463] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className="text-[#631463] text-lg">Loading form fields...</p>
                            </div>
                        ) : fields.length === 0 ? (
                            <p className="text-gray-500 text-center">Loading fields...</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {otherFields.map((field) => {
                                    if (
                                        (field.label === 'Choose a faculty (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Choose a faculty (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                        (field.label === 'Study form (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Study form (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                        (field.label === 'Choose a faculty (INTERNATIONAL)' && !showInternationalFaculty)
                                    ) {
                                        return null;
                                    }

                                    const isConditionalField =
                                        field.label === 'Choose a faculty (MEDICAL SCHOOL)' ||
                                        field.label === 'Choose a faculty (BUSINESS AND SOCIAL SCHOOL)' ||
                                        field.label === 'Study form (MEDICAL SCHOOL)' ||
                                        field.label === 'Study form (BUSINESS AND SOCIAL SCHOOL)' ||
                                        field.label === 'Choose a faculty (INTERNATIONAL)';

                                    const isBitrixField = [
                                        'BITRIX - Телефон 1',
                                        'BITRIX - Телефон 2',
                                        'BITRIX - Форма обучения',
                                        'BITRIX - Направления',
                                        'Faculcy',
                                        'Source'
                                    ].includes(field.label);

                                    // Check if this is the language field and should be disabled
                                    const isLanguageFieldDisabled = field.label === 'Select language' && showInternationalFaculty;

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
                                                        field.label === 'Passport series and number'
                                                            ? 9
                                                            : field.label === 'Phone number' || field.label === 'Second phone number (optional)'
                                                                ? 13
                                                                : field.label === 'Date of birth'
                                                                    ? 10
                                                                    : field.label === 'ПИНФЛ'
                                                                        ? 14
                                                                        : undefined
                                                    }
                                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                            )}
                                            {/* {field.type === 'select' && (
                                                <select
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                    required={field.required === '1'}
                                                    disabled={isLanguageFieldDisabled}
                                                    className={`w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white ${isLanguageFieldDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                                >
                                                    <option value="">{field.placeholder || '- Select -'}</option>
                                                    {isLanguageFieldDisabled && (
                                                        <option value="English">English</option>
                                                    )}
                                                    {Object.values(field.choices).map((choice, index) => (
                                                        <option key={index} value={choice.label}>
                                                            {choice.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            )} */}

                                            {field.type === 'select' && (
                                                <select
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                    required={field.required === '1'}
                                                    disabled={isLanguageFieldDisabled}
                                                    className={`w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white ${isLanguageFieldDisabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : ''}`}
                                                >
                                                    <option value="">{field.placeholder || '- Choose -'}</option>

                                                    {/* Для поля "Язык обучения" при INTERNATIONAL добавляем опцию "Английский" */}
                                                    {field.label === 'Select language' && showInternationalFaculty && (
                                                        <option value="English">English</option>
                                                    )}

                                                    {/* Специальная логика для поля "Выберите направление" */}
                                                    {field.label === 'Choose a direction' ? (
                                                        (() => {
                                                            const choices = Object.values(field.choices);
                                                            const internationalChoice = choices.find(choice => choice.label === 'INTERNATIONAL');
                                                            const medicalChoice = choices.find(choice => choice.label === 'MEDICAL SCHOOL');
                                                            const otherChoices = choices.filter(choice =>
                                                                choice.label !== 'INTERNATIONAL' && choice.label !== 'MEDICAL SCHOOL'
                                                            ).sort((a, b) => a.label.localeCompare(b.label));

                                                            return [
                                                                ...(internationalChoice ? [internationalChoice] : []),
                                                                ...(medicalChoice ? [medicalChoice] : []),
                                                                ...otherChoices
                                                            ].map((choice, index) => (
                                                                <option key={index} value={choice.label}>
                                                                    {choice.label}
                                                                </option>
                                                            ));
                                                        })()
                                                    ) : (
                                                        /* Для всех остальных селектов используем стандартную логику */
                                                        Object.values(field.choices).map((choice, index) => (
                                                            <option key={index} value={choice.label}>
                                                                {choice.label}
                                                            </option>
                                                        ))
                                                    )}
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
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </form>
                        )}
                        {message && !isSubmitted && (
                            <p
                                className={`mt-4 text-center font-medium ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
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
