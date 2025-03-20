// app/components/Popup.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup({ isOpen, onClose }) {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const formId = 81201;

    // Управление скроллингом body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Блокируем скролл body
        } else {
            document.body.style.overflow = 'auto'; // Возвращаем скролл
        }

        // Очистка при размонтировании или закрытии
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            async function fetchFormFields() {
                try {
                    const res = await fetch(`http://next.emu.web-perfomance.uz/wp-json/wpforms-api/v1/form/${formId}`);
                    const data = await res.json();
                    const fieldsArray = Object.values(data);
                    setFields(fieldsArray);
                } catch (error) {
                    console.error('Error fetching form fields:', error);
                }
            }
            fetchFormFields();
        }
    }, [isOpen]);

    const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);

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

    const handleChange = (fieldId, value, field) => {
        let newValue = value;
        let newErrors = { ...errors };

        if (field.label === 'Имя' || field.label === 'Фамилия') {
            if (!validateLatinAndSpaces(value)) {
                newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
            } else {
                delete newErrors[fieldId];
            }
        } else if (field.label === 'Дата рождения') {
            newValue = formatDate(value);
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (value && !dateRegex.test(newValue)) {
                newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
            } else {
                delete newErrors[fieldId];
            }
        } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
            newValue = formatPhone(value);
            const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
            if (field.required === '1' && value && !phoneRegex.test(newValue)) {
                newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
            } else {
                delete newErrors[fieldId];
            }
        }

        setFormData((prev) => ({ ...prev, [fieldId]: newValue }));
        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setMessage('Пожалуйста, исправьте ошибки в форме.');
            return;
        }

        try {
            const res = await fetch('http://next.emu.web-perfomance.uz/wp-json/wpforms-api/v1/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    form_id: formId,
                    fields: formData,
                }),
            });
            const result = await res.json();
            if (res.ok) {
                setMessage('Форма успешно отправлена!');
                setFormData({});
                setErrors({});
                setTimeout(() => {
                    onClose(); // Закрываем попап после успешной отправки
                }, 2000);
            } else {
                setMessage('Ошибка при отправке формы.');
            }
        } catch (error) {
            setMessage('Ошибка сети.');
            console.error('Submit error:', error);
        }
    };

    const directionField = fields.find((f) => f.label === 'Выберите направление');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {fields.length === 0 ? (
                            <p className="text-gray-500 text-center">Загрузка полей...</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {fields.map((field) => {
                                    if (
                                        (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
                                    ) {
                                        return null;
                                    }

                                    const isConditionalField =
                                        field.label === 'Выберите факультет (MEDICAL SCHOOL)' ||
                                        field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)';

                                    return (
                                        <div
                                            key={field.id}
                                            className={`space-y-2 ${isConditionalField ? 'animate-field-appear' : ''}`}
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
                                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                />
                                            )}
                                            {field.type === 'select' && (
                                                <select
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                    required={field.required === '1'}
                                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white"
                                                >
                                                    <option value="">{field.placeholder || '- Выбрать -'}</option>
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
                                                                checked={formData[field.id]?.includes(choice.label) || false}
                                                                onChange={(e) => {
                                                                    const checked = e.target.checked;
                                                                    const currentValues = formData[field.id] || [];
                                                                    const newValues = checked
                                                                        ? [...currentValues, choice.label]
                                                                        : currentValues.filter((v) => v !== choice.label);
                                                                    handleChange(field.id, newValues, field);
                                                                }}
                                                                required={field.required === '1' && !formData[field.id]?.length}
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
                                <button
                                    type="submit"
                                    className="w-full bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                >
                                    Отправить
                                </button>
                            </form>
                        )}
                        {message && (
                            <p
                                className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'
                                    } animate-fade-in`}
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