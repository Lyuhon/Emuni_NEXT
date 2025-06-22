// // // // 'use client';

// // // // import { useState, useEffect } from 'react';

// // // // export default function RegistrationForm() {
// // // //     // Состояния для формы
// // // //     const [fields, setFields] = useState([]);
// // // //     const [formData, setFormData] = useState({});
// // // //     const [message, setMessage] = useState('');
// // // //     const [errors, setErrors] = useState({});
// // // //     const [isSubmitted, setIsSubmitted] = useState(false);
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // //     const [isLoading, setIsLoading] = useState(false);

// // // //     const formId = 451;

// // // //     // Соответствия для мед. факультетов
// // // //     const mappingMed = {
// // // //         'Стоматология': 'Стоматология | Стоматология',
// // // //         'Фармация': 'Фармация | Фармация',
// // // //         'Лечебное дело': 'Лечебное дело | Даволаش иши',
// // // //         'Педиатрия': 'Педиатрия | Педиатрия',
// // // //         'Высшее медсестринское дело': 'Высшее медсестринское дело | Олий ҳамширалик',
// // // //         'Народная медицина': 'Народная медицина | Халқ табобати',
// // // //         'Биотехнология': 'Биотехнология | Биотехнология',
// // // //         'Медико-биологическое дело': 'Медико-биологическое дело | Тиббий-биологик иш',
// // // //         'Медико-профилактическое дело': 'Медико-профилактическое дело | Тиббий-профилактика иши',
// // // //         'Биология': 'Биология | Биология',
// // // //         'Химия': 'Химия | Кимё',
// // // //         'Фундаментальная медицина': 'Фундаментальная медицина | Фундаментал тиббиёт',
// // // //         'Косметология': 'Косметология | Косметология'
// // // //     };

// // // //     // Соответствия для бизнес факультетов
// // // //     const mappingBus = {
// // // //         'Архитектура': 'Архитектура | Архитектура',
// // // //         'Дизайн интерьера': 'Дизайн интерьера | Интерьер дизайни',
// // // //         'Дошкольное образование': 'Дошкольное образование | Мактабгача таълим',
// // // //         'Логистика': 'Логистика | Логистика',
// // // //         'Маркетинг': 'Маркетинг | Маркетинг',
// // // //         'Специальная педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
// // // //         'Транспорт (автомобильный транспорт)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
// // // //         'Туризм': 'Туризм | Туризм',
// // // //         'Управление бизнесом': 'Управление бизнесом | Бизнес бошқаруви',
// // // //         'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
// // // //         'Финансы и финансовые технологии': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
// // // //         'Экономика (по отраслям и секторам обслуживания)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
// // // //         'Менеджмент': 'Менеджмент | Менеджмент',
// // // //         'Начальное образование': 'Начальное образование | Бошланғич таълим',
// // // //         'Психология': 'Психология | Психология',
// // // //         'Педагогика': 'Педагогика | Педагогика',
// // // //         'Налоги и налогообложение': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
// // // //         'Банковское дело': 'Банковское дело | Банк иши',
// // // //         'Бухгалтерский учет': 'Бухгалтерский учет | Бухгалтерия хисоби'
// // // //     };

// // // //     // Соответствия для формы обучения
// // // //     const mappingTime = {
// // // //         '1 смена': `Очная | Kunduzgi ta'lim`,
// // // //         '2 смена': `Вечерняя | Kechki ta'lim`,
// // // //         'Очное обучение': `Очная | Kunduzgi ta'lim`,
// // // //         'Вечернее обучение': `Вечерняя | Kechki ta'lim`,
// // // //         'Заочное обучение': `Заочная | Sirtqi ta'lim`
// // // //     };

// // // //     // Функция для очистки номера телефона от специальных символов
// // // //     const sanitizeInput = (value) => {
// // // //         return value.replace(/[-()]/g, '');
// // // //     };

// // // //     // Загрузка полей формы при монтировании компонента
// // // //     useEffect(() => {
// // // //         async function fetchFormFields() {
// // // //             try {
// // // //                 setIsLoading(true);
// // // //                 const res = await fetch(`/api/form-fields?formId=${formId}`);
// // // //                 const data = await res.json();
// // // //                 if (res.ok) {
// // // //                     const fieldsArray = Object.values(data);
// // // //                     setFields(fieldsArray);
// // // //                 }
// // // //             } catch (error) {
// // // //                 console.error('Error fetching form fields:', error);
// // // //             } finally {
// // // //                 setIsLoading(false);
// // // //             }
// // // //         }

// // // //         fetchFormFields();
// // // //     }, []);

// // // //     // Установка текущего URL в поле "Источник"
// // // //     useEffect(() => {
// // // //         if (fields.length > 0) {
// // // //             const sourceField = fields.find((f) => f.label === 'Источник');
// // // //             if (sourceField) {
// // // //                 setFormData(prevData => ({
// // // //                     ...prevData,
// // // //                     [sourceField.id]: window.location.href
// // // //                 }));
// // // //             }
// // // //         }
// // // //     }, [fields]);

// // // //     // Эффект для синхронизации данных между связанными полями
// // // //     useEffect(() => {
// // // //         if (fields.length === 0) return;

// // // //         let updatedFormData = null;
// // // //         let needUpdate = false;

// // // //         const medFacultyField = fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)');
// // // //         const busFacultyField = fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)');
// // // //         const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
// // // //         const medTimeField = fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)');
// // // //         const busTimeField = fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)');
// // // //         const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
// // // //         const phone1Field = fields.find(f => f.label === 'Номер телефона');
// // // //         const phone2Field = fields.find(f => f.label === 'Дополнительный номер');
// // // //         const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
// // // //         const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

// // // //         if (!updatedFormData) {
// // // //             updatedFormData = { ...formData };
// // // //         }

// // // //         if (medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
// // // //             const selectedValue = formData[medFacultyField.id];
// // // //             const mappedValue = mappingMed[selectedValue];
// // // //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// // // //                 updatedFormData[directionBitrixField.id] = mappedValue;
// // // //                 needUpdate = true;
// // // //             }
// // // //         }

// // // //         if (busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
// // // //             const selectedValue = formData[busFacultyField.id];
// // // //             const mappedValue = mappingBus[selectedValue];
// // // //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// // // //                 updatedFormData[directionBitrixField.id] = mappedValue;
// // // //                 needUpdate = true;
// // // //             }
// // // //         }

// // // //         if (timeBitrixField && ((medTimeField && formData[medTimeField?.id]) || (busTimeField && formData[busTimeField?.id]))) {
// // // //             const medTimeValue = formData[medTimeField?.id];
// // // //             const busTimeValue = formData[busTimeField?.id];
// // // //             let timeValue = `Очная | Kunduzgi ta'lim`;
// // // //             if (medTimeValue && mappingTime[medTimeValue]) {
// // // //                 timeValue = mappingTime[medTimeValue];
// // // //             } else if (busTimeValue && mappingTime[busTimeValue]) {
// // // //                 timeValue = mappingTime[busTimeValue];
// // // //             }
// // // //             if (formData[timeBitrixField.id] !== timeValue) {
// // // //                 updatedFormData[timeBitrixField.id] = timeValue;
// // // //                 needUpdate = true;
// // // //             }
// // // //         }

// // // //         if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
// // // //             const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
// // // //             if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
// // // //                 updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
// // // //                 needUpdate = true;
// // // //             }
// // // //         }

// // // //         if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
// // // //             const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
// // // //             if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
// // // //                 updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
// // // //                 needUpdate = true;
// // // //             }
// // // //         }

// // // //         if (needUpdate) {
// // // //             setFormData(updatedFormData);
// // // //         }
// // // //     }, [formData, fields]);

// // // //     // Функции валидации
// // // //     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
// // // //     const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
// // // //     const validatePINFL = (value) => /^\d{14}$/.test(value);

// // // //     // Функции форматирования
// // // //     const formatDate = (value) => {
// // // //         const cleaned = value.replace(/\D/g, '').slice(0, 8);
// // // //         const day = cleaned.slice(0, 2);
// // // //         const month = cleaned.slice(2, 4);
// // // //         const year = cleaned.slice(4, 8);
// // // //         let formatted = '';
// // // //         if (day) formatted += day;
// // // //         if (month) formatted += '/' + month;
// // // //         if (year) formatted += '/' + year;
// // // //         return formatted;
// // // //     };

// // // //     const formatPhone = (value) => {
// // // //         const cleaned = value.replace(/\D/g, '').slice(0, 9);
// // // //         const part1 = cleaned.slice(0, 2);
// // // //         const part2 = cleaned.slice(2, 5);
// // // //         const part3 = cleaned.slice(5, 7);
// // // //         const part4 = cleaned.slice(7, 9);
// // // //         let formatted = '';
// // // //         if (part1) formatted += '(' + part1;
// // // //         if (part2) formatted += ')' + part2;
// // // //         if (part3) formatted += '-' + part3;
// // // //         if (part4) formatted += '-' + part4;
// // // //         return formatted;
// // // //     };

// // // //     const formatPassport = (value) => {
// // // //         const cleaned = value.replace(/[^a-z0-9]/gi, '');
// // // //         const letters = cleaned.slice(0, 2).toLowerCase();
// // // //         const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
// // // //         return letters + numbers;
// // // //     };

// // // //     const handleChange = (fieldId, value, field) => {
// // // //         let newValue = value;
// // // //         let newErrors = { ...errors };
// // // //         let updatedFormData = { ...formData };

// // // //         if (field.label === 'Имя' || field.label === 'Фамилия') {
// // // //             if (!validateLatinAndSpaces(value)) {
// // // //                 newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //             updatedFormData[fieldId] = newValue;
// // // //         } else if (field.label === 'Дата рождения') {
// // // //             newValue = formatDate(value);
// // // //             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
// // // //             if (value && !dateRegex.test(newValue)) {
// // // //                 newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //             updatedFormData[fieldId] = newValue;
// // // //         } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
// // // //             newValue = formatPhone(value);
// // // //             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
// // // //             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
// // // //                 newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //             updatedFormData[fieldId] = newValue;
// // // //         } else if (field.label === 'Серия и номер паспорта') {
// // // //             newValue = formatPassport(value);
// // // //             if (value && !validatePassport(newValue)) {
// // // //                 newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //             updatedFormData[fieldId] = newValue;
// // // //         } else if (field.label === 'ПИНФЛ') {
// // // //             newValue = value.replace(/\D/g, '').slice(0, 14);
// // // //             if (field.required === '1' && value && !validatePINFL(newValue)) {
// // // //                 newErrors[fieldId] = 'ПИНФЛ должен содержать ровно 14 цифр.';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //             updatedFormData[fieldId] = newValue;
// // // //         } else if (field.type === 'checkbox') {
// // // //             if (Array.isArray(value)) {
// // // //                 newValue = value.length > 0 ? '1' : '';
// // // //                 updatedFormData[fieldId] = newValue;
// // // //             } else {
// // // //                 newValue = value ? '1' : '';
// // // //                 updatedFormData[fieldId] = newValue;
// // // //             }
// // // //             if (field.required === '1' && newValue !== '1') {
// // // //                 newErrors[fieldId] = 'Это поле обязательно.';
// // // //             } else {
// // // //                 delete newErrors[fieldId];
// // // //             }
// // // //         } else {
// // // //             updatedFormData[fieldId] = newValue;
// // // //         }

// // // //         setFormData(updatedFormData);
// // // //         setErrors(newErrors);
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         if (Object.keys(errors).length > 0) {
// // // //             setMessage('Пожалуйста, исправьте ошибки в форме.');
// // // //             return;
// // // //         }

// // // //         setIsSubmitting(true);
// // // //         console.log('Отправляемые данные:', JSON.stringify({ form_id: formId, fields: formData }));

// // // //         try {
// // // //             const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
// // // //                 method: 'POST',
// // // //                 headers: { 'Content-Type': 'application/json' },
// // // //                 body: JSON.stringify({
// // // //                     form_id: formId,
// // // //                     fields: formData,
// // // //                 }),
// // // //             });
// // // //             const result = await res.json();
// // // //             console.log('API response:', result);
// // // //             if (res.ok) {
// // // //                 setIsSubmitted(true);
// // // //                 setFormData({});
// // // //                 setErrors({});
// // // //                 setMessage('');
// // // //             } else {
// // // //                 setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Submit error:', error);
// // // //             setMessage('Ошибка сети.');
// // // //         } finally {
// // // //             setIsSubmitting(false);
// // // //         }
// // // //     };

// // // //     // Определяем условия показа полей
// // // //     const directionField = fields.find((f) => f.label === 'Выберите направление');
// // // //     const directionValue = formData[directionField?.id] || '';
// // // //     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
// // // //     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

// // // //     const agreementField = fields.find((f) => f.label === 'Соглашение');
// // // //     const otherFields = fields.filter((f) => f.label !== 'Соглашение');

// // // //     if (isSubmitted) {
// // // //         return (
// // // //             <div className="text-center space-y-6">
// // // //                 <p className="text-xl font-semibold text-green-600">
// // // //                     Заявка успешно отправлена, ожидайте!
// // // //                 </p>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (isLoading) {
// // // //         return (
// // // //             <div className="flex flex-col items-center justify-center py-8">
// // // //                 <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                 </svg>
// // // //                 <p className="text-[#6b0e55] text-lg">Загрузка полей формы...</p>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (fields.length === 0) {
// // // //         return <p className="text-gray-500 text-center">Загрузка полей...</p>;
// // // //     }

// // // //     return (
// // // //         <div className="space-y-4">
// // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // //                 {otherFields.map((field) => {
// // // //                     if (
// // // //                         (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// // // //                         (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
// // // //                         (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// // // //                         (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
// // // //                     ) {
// // // //                         return null;
// // // //                     }

// // // //                     const isBitrixField = [
// // // //                         'BITRIX - Телефон 1',
// // // //                         'BITRIX - Телефон 2',
// // // //                         'BITRIX - Форма обучения',
// // // //                         'BITRIX - Направления',
// // // //                         'Источник'
// // // //                     ].includes(field.label);

// // // //                     if (isBitrixField) return null;

// // // //                     return (
// // // //                         <div key={field.id} className="space-y-2">
// // // //                             <label className="block text-sm font-semibold text-gray-700">
// // // //                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
// // // //                             </label>
// // // //                             {field.type === 'text' && (
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     value={formData[field.id] || ''}
// // // //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// // // //                                     placeholder={field.placeholder || ''}
// // // //                                     required={field.required === '1'}
// // // //                                     maxLength={
// // // //                                         field.label === 'Серия и номер паспорта'
// // // //                                             ? 9
// // // //                                             : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
// // // //                                                 ? 13
// // // //                                                 : field.label === 'Дата рождения'
// // // //                                                     ? 10
// // // //                                                     : field.label === 'ПИНФЛ'
// // // //                                                         ? 14
// // // //                                                         : undefined
// // // //                                     }
// // // //                                     className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] hover:border-[#8f3178] transition-all duration-300 transition-colors ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
// // // //                                 />
// // // //                             )}
// // // //                             {field.type === 'select' && (
// // // //                                 <select
// // // //                                     value={formData[field.id] || ''}
// // // //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// // // //                                     required={field.required === '1'}
// // // //                                     className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] hover:border-[#8f3178] transition-all duration-300 transition-colors appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
// // // //                                 >
// // // //                                     <option value="">{field.placeholder || '- Выбрать -'}</option>
// // // //                                     {Object.values(field.choices).map((choice, index) => (
// // // //                                         <option key={index} value={choice.label}>
// // // //                                             {choice.label}
// // // //                                         </option>
// // // //                                     ))}
// // // //                                 </select>
// // // //                             )}
// // // //                             {field.type === 'checkbox' && (
// // // //                                 <div>
// // // //                                     {Object.values(field.choices).map((choice, index) => (
// // // //                                         <label key={index} className="flex items-center space-x-3">
// // // //                                             <input
// // // //                                                 type="checkbox"
// // // //                                                 checked={formData[field.id] === '1'}
// // // //                                                 onChange={(e) => handleChange(field.id, e.target.checked, field)}
// // // //                                                 required={field.required === '1' && formData[field.id] !== '1'}
// // // //                                                 className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// // // //                                             />
// // // //                                             <span
// // // //                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
// // // //                                                 className="text-gray-700"
// // // //                                             />
// // // //                                         </label>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             )}
// // // //                             {errors[field.id] && (
// // // //                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
// // // //                             )}
// // // //                         </div>
// // // //                     );
// // // //                 })}

// // // //                 {agreementField && (
// // // //                     <div className="space-y-2">
// // // //                         <label className="block text-sm font-semibold text-gray-700">
// // // //                             {agreementField.label}{' '}
// // // //                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
// // // //                         </label>
// // // //                         {agreementField.type === 'checkbox' && (
// // // //                             <div>
// // // //                                 {Object.values(agreementField.choices).map((choice, index) => (
// // // //                                     <label key={index} className="flex items-center space-x-3">
// // // //                                         <input
// // // //                                             type="checkbox"
// // // //                                             checked={formData[agreementField.id] === '1'}
// // // //                                             onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
// // // //                                             required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
// // // //                                             className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// // // //                                         />
// // // //                                         <span
// // // //                                             dangerouslySetInnerHTML={{ __html: choice.label }}
// // // //                                             className="text-gray-700"
// // // //                                         />
// // // //                                     </label>
// // // //                                 ))}
// // // //                             </div>
// // // //                         )}
// // // //                         {errors[agreementField.id] && (
// // // //                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
// // // //                         )}
// // // //                     </div>
// // // //                 )}

// // // //                 <button
// // // //                     type="submit"
// // // //                     disabled={isSubmitting}
// // // //                     className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center
// // // //                         ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
// // // //                 >
// // // //                     {isSubmitting ? (
// // // //                         <>
// // // //                             <svg
// // // //                                 className="animate-spin h-5 w-5 mr-2 text-white"
// // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // //                                 fill="none"
// // // //                                 viewBox="0 0 24 24"
// // // //                             >
// // // //                                 <circle
// // // //                                     className="opacity-25"
// // // //                                     cx="12"
// // // //                                     cy="12"
// // // //                                     r="10"
// // // //                                     stroke="currentColor"
// // // //                                     strokeWidth="4"
// // // //                                 ></circle>
// // // //                                 <path
// // // //                                     className="opacity-75"
// // // //                                     fill="currentColor"
// // // //                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                                 ></path>
// // // //                             </svg>
// // // //                             Отправка...
// // // //                         </>
// // // //                     ) : (
// // // //                         'Позвоните мне!'
// // // //                     )}
// // // //                 </button>
// // // //             </form>

// // // //             {message && !isSubmitted && (
// // // //                 <p
// // // //                     className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
// // // //                 >
// // // //                     {message}
// // // //                 </p>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // }



// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { useRouter } from 'next/navigation';

// // // export default function RegistrationForm() {
// // //     // Состояния для формы
// // //     const [fields, setFields] = useState([]);
// // //     const [formData, setFormData] = useState({});
// // //     const [message, setMessage] = useState('');
// // //     const [errors, setErrors] = useState({});
// // //     const [isSubmitted, setIsSubmitted] = useState(false);
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [isLoading, setIsLoading] = useState(false);

// // //     const formId = 451;
// // //     const router = useRouter();

// // //     // Соответствия для мед. факультетов
// // //     const mappingMed = {
// // //         'Стоматология': 'Стоматология | Стоматология',
// // //         'Фармация': 'Фармация | Фармация',
// // //         'Лечебное дело': 'Лечебное дело | Даволаш иши',
// // //         'Педиатрия': 'Педиатрия | Педиатрия',
// // //         'Высшее медсестринское дело': 'Высшее медсестринское дело | Олий ҳамширалик',
// // //         'Народная медицина': 'Народная медицина | Халқ табобати',
// // //         'Биотехнология': 'Биотехнология | Биотехнология',
// // //         'Медико-биологическое дело': 'Медико-биологическое дело | Тиббий-биологик иш',
// // //         'Медико-профилактическое дело': 'Медико-профилактическое дело | Тиббий-профилактика иши',
// // //         'Биология': 'Биология | Биология',
// // //         'Химия': 'Химия | Кимё',
// // //         'Фундаментальная медицина': 'Фундаментальная медицина | Фундаментал тиббиёт',
// // //         'Косметология': 'Косметология | Косметология'
// // //     };

// // //     // Соответствия для бизнес факультетов
// // //     const mappingBus = {
// // //         'Архитектура': 'Архитектура | Архитектура',
// // //         'Дизайн интерьера': 'Дизайн интерьера | Интерьер дизайни',
// // //         'Дошкольное образование': 'Дошкольное образование | Мактабгача таълим',
// // //         'Логистика': 'Логистика | Логистика',
// // //         'Маркетинг': 'Маркетинг | Маркетинг',
// // //         'Специальная педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
// // //         'Транспорт (автомобильный транспорт)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
// // //         'Туризм': 'Туризм | Туризм',
// // //         'Управление бизнесом': 'Управление бизнесом | Бизнес бошқаруви',
// // //         'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
// // //         'Финансы и финансовые технологии': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
// // //         'Экономика (по отраслям и секторам обслуживания)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
// // //         'Менеджмент': 'Менеджмент | Менеджмент',
// // //         'Начальное образование': 'Начальное образование | Бошланғич таълим',
// // //         'Психология': 'Психология | Психология',
// // //         'Педагогика': 'Педагогика | Педагогика',
// // //         'Налоги и налогообложение': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
// // //         'Банковское дело': 'Банковское дело | Банк иши',
// // //         'Бухгалтерский учет': 'Бухгалтерский учет | Бухгалтерия хисоби'
// // //     };

// // //     // Соответствия для формы обучения
// // //     const mappingTime = {
// // //         '1 смена': `Очная | Kunduzgi ta'lim`,
// // //         '2 смена': `Вечерняя | Kechki ta'lim`,
// // //         'Очное обучение': `Очная | Kunduzgi ta'lim`,
// // //         'Вечернее обучение': `Вечерняя | Kechki ta'lim`,
// // //         'Заочное обучение': `Заочная | Sirtqi ta'lim`
// // //     };

// // //     // Функция для очистки номера телефона от специальных символов
// // //     const sanitizeInput = (value) => {
// // //         return value.replace(/[-()]/g, '');
// // //     };

// // //     // Загрузка полей формы при монтировании компонента
// // //     useEffect(() => {
// // //         async function fetchFormFields() {
// // //             try {
// // //                 setIsLoading(true);
// // //                 const res = await fetch(`/api/form-fields?formId=${formId}`);
// // //                 const data = await res.json();
// // //                 if (res.ok) {
// // //                     const fieldsArray = Object.values(data);
// // //                     setFields(fieldsArray);
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error fetching form fields:', error);
// // //             } finally {
// // //                 setIsLoading(false);
// // //             }
// // //         }

// // //         fetchFormFields();
// // //     }, []);

// // //     // Установка текущего URL в поле "Источник"
// // //     useEffect(() => {
// // //         if (fields.length > 0) {
// // //             const sourceField = fields.find((f) => f.label === 'Источник');
// // //             if (sourceField) {
// // //                 setFormData(prevData => ({
// // //                     ...prevData,
// // //                     [sourceField.id]: window.location.href
// // //                 }));
// // //             }
// // //         }
// // //     }, [fields]);

// // //     // Эффект для синхронизации данных между связанными полями
// // //     useEffect(() => {
// // //         if (fields.length === 0) return;

// // //         let updatedFormData = null;
// // //         let needUpdate = false;

// // //         const medFacultyField = fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)');
// // //         const busFacultyField = fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)');
// // //         const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
// // //         const medTimeField = fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)');
// // //         const busTimeField = fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)');
// // //         const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
// // //         const phone1Field = fields.find(f => f.label === 'Номер телефона');
// // //         const phone2Field = fields.find(f => f.label === 'Дополнительный номер');
// // //         const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
// // //         const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

// // //         if (!updatedFormData) {
// // //             updatedFormData = { ...formData };
// // //         }

// // //         if (medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
// // //             const selectedValue = formData[medFacultyField.id];
// // //             const mappedValue = mappingMed[selectedValue];
// // //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// // //                 updatedFormData[directionBitrixField.id] = mappedValue;
// // //                 needUpdate = true;
// // //             }
// // //         }

// // //         if (busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
// // //             const selectedValue = formData[busFacultyField.id];
// // //             const mappedValue = mappingBus[selectedValue];
// // //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// // //                 updatedFormData[directionBitrixField.id] = mappedValue;
// // //                 needUpdate = true;
// // //             }
// // //         }

// // //         if (timeBitrixField && ((medTimeField && formData[medTimeField?.id]) || (busTimeField && formData[busTimeField?.id]))) {
// // //             const medTimeValue = formData[medTimeField?.id];
// // //             const busTimeValue = formData[busTimeField?.id];
// // //             let timeValue = `Очная | Kunduzgi ta'lim`;
// // //             if (medTimeValue && mappingTime[medTimeValue]) {
// // //                 timeValue = mappingTime[medTimeValue];
// // //             } else if (busTimeValue && mappingTime[busTimeValue]) {
// // //                 timeValue = mappingTime[busTimeValue];
// // //             }
// // //             if (formData[timeBitrixField.id] !== timeValue) {
// // //                 updatedFormData[timeBitrixField.id] = timeValue;
// // //                 needUpdate = true;
// // //             }
// // //         }

// // //         if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
// // //             const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
// // //             if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
// // //                 updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
// // //                 needUpdate = true;
// // //             }
// // //         }

// // //         if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
// // //             const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
// // //             if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
// // //                 updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
// // //                 needUpdate = true;
// // //             }
// // //         }

// // //         if (needUpdate) {
// // //             setFormData(updatedFormData);
// // //         }
// // //     }, [formData, fields]);

// // //     // Функции валидации
// // //     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
// // //     const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
// // //     const validatePINFL = (value) => /^\d{14}$/.test(value);

// // //     // Функции форматирования
// // //     const formatDate = (value) => {
// // //         const cleaned = value.replace(/\D/g, '').slice(0, 8);
// // //         const day = cleaned.slice(0, 2);
// // //         const month = cleaned.slice(2, 4);
// // //         const year = cleaned.slice(4, 8);
// // //         let formatted = '';
// // //         if (day) formatted += day;
// // //         if (month) formatted += '/' + month;
// // //         if (year) formatted += '/' + year;
// // //         return formatted;
// // //     };

// // //     const formatPhone = (value) => {
// // //         const cleaned = value.replace(/\D/g, '').slice(0, 9);
// // //         const part1 = cleaned.slice(0, 2);
// // //         const part2 = cleaned.slice(2, 5);
// // //         const part3 = cleaned.slice(5, 7);
// // //         const part4 = cleaned.slice(7, 9);
// // //         let formatted = '';
// // //         if (part1) formatted += '(' + part1;
// // //         if (part2) formatted += ')' + part2;
// // //         if (part3) formatted += '-' + part3;
// // //         if (part4) formatted += '-' + part4;
// // //         return formatted;
// // //     };

// // //     const formatPassport = (value) => {
// // //         const cleaned = value.replace(/[^a-z0-9]/gi, '');
// // //         const letters = cleaned.slice(0, 2).toLowerCase();
// // //         const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
// // //         return letters + numbers;
// // //     };

// // //     const handleChange = (fieldId, value, field) => {
// // //         let newValue = value;
// // //         let newErrors = { ...errors };
// // //         let updatedFormData = { ...formData };

// // //         if (field.label === 'Имя' || field.label === 'Фамилия') {
// // //             if (!validateLatinAndSpaces(value)) {
// // //                 newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //             updatedFormData[fieldId] = newValue;
// // //         } else if (field.label === 'Дата рождения') {
// // //             newValue = formatDate(value);
// // //             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
// // //             if (value && !dateRegex.test(newValue)) {
// // //                 newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //             updatedFormData[fieldId] = newValue;
// // //         } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
// // //             newValue = formatPhone(value);
// // //             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
// // //             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
// // //                 newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //             updatedFormData[fieldId] = newValue;
// // //         } else if (field.label === 'Серия и номер паспорта') {
// // //             newValue = formatPassport(value);
// // //             if (value && !validatePassport(newValue)) {
// // //                 newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //             updatedFormData[fieldId] = newValue;
// // //         } else if (field.label === 'ПИНФЛ') {
// // //             newValue = value.replace(/\D/g, '').slice(0, 14);
// // //             if (field.required === '1' && value && !validatePINFL(newValue)) {
// // //                 newErrors[fieldId] = 'ПИНФЛ должен содержать ровно 14 цифр.';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //             updatedFormData[fieldId] = newValue;
// // //         } else if (field.type === 'checkbox') {
// // //             if (Array.isArray(value)) {
// // //                 newValue = value.length > 0 ? '1' : '';
// // //                 updatedFormData[fieldId] = newValue;
// // //             } else {
// // //                 newValue = value ? '1' : '';
// // //                 updatedFormData[fieldId] = newValue;
// // //             }
// // //             if (field.required === '1' && newValue !== '1') {
// // //                 newErrors[fieldId] = 'Это поле обязательно.';
// // //             } else {
// // //                 delete newErrors[fieldId];
// // //             }
// // //         } else {
// // //             updatedFormData[fieldId] = newValue;
// // //         }

// // //         setFormData(updatedFormData);
// // //         setErrors(newErrors);
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         if (Object.keys(errors).length > 0) {
// // //             setMessage('Пожалуйста, исправьте ошибки в форме.');
// // //             return;
// // //         }

// // //         setIsSubmitting(true);
// // //         console.log('Отправляемые данные:', JSON.stringify({ form_id: formId, fields: formData }));

// // //         try {
// // //             const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({
// // //                     form_id: formId,
// // //                     fields: formData,
// // //                 }),
// // //             });
// // //             const result = await res.json();
// // //             console.log('API response:', result);
// // //             if (res.ok) {
// // //                 setIsSubmitted(true);
// // //                 setFormData({});
// // //                 setErrors({});
// // //                 setMessage('');
// // //                 // Редирект на страницу успеха
// // //                 setTimeout(() => {
// // //                     router.push('/ru/success');
// // //                 }, 0); // Небольшая задержка для показа сообщения об успехе
// // //             } else {
// // //                 setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
// // //             }
// // //         } catch (error) {
// // //             console.error('Submit error:', error);
// // //             setMessage('Ошибка сети.');
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     // Определяем условия показа полей
// // //     const directionField = fields.find((f) => f.label === 'Выберите направление');
// // //     const directionValue = formData[directionField?.id] || '';
// // //     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
// // //     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

// // //     const agreementField = fields.find((f) => f.label === 'Соглашение');
// // //     const otherFields = fields.filter((f) => f.label !== 'Соглашение');

// // //     if (isSubmitted) {
// // //         return (
// // //             <div className="text-center space-y-6">
// // //                 <p className="text-xl font-semibold text-green-600">
// // //                     Заявка успешно отправлена, ожидайте!
// // //                 </p>
// // //                 <p className="text-gray-600">
// // //                     Вы будете перенаправлены через несколько секунд...
// // //                 </p>
// // //             </div>
// // //         );
// // //     }

// // //     if (isLoading) {
// // //         return (
// // //             <div className="flex flex-col items-center justify-center py-8">
// // //                 <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                 </svg>
// // //                 <p className="text-[#6b0e55] text-lg">Загрузка полей формы...</p>
// // //             </div>
// // //         );
// // //     }

// // //     if (fields.length === 0) {
// // //         return <p className="text-gray-500 text-center">Загрузка полей...</p>;
// // //     }

// // //     return (
// // //         <div className="space-y-4">
// // //             <form onSubmit={handleSubmit} className="space-y-4">
// // //                 {otherFields.map((field) => {
// // //                     if (
// // //                         (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// // //                         (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
// // //                         (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// // //                         (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
// // //                     ) {
// // //                         return null;
// // //                     }

// // //                     const isBitrixField = [
// // //                         'BITRIX - Телефон 1',
// // //                         'BITRIX - Телефон 2',
// // //                         'BITRIX - Форма обучения',
// // //                         'BITRIX - Направления',
// // //                         'Источник'
// // //                     ].includes(field.label);

// // //                     if (isBitrixField) return null;

// // //                     return (
// // //                         <div key={field.id} className="space-y-2">
// // //                             <label className="block text-sm font-semibold text-gray-700">
// // //                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
// // //                             </label>
// // //                             {field.type === 'text' && (
// // //                                 <input
// // //                                     type="text"
// // //                                     value={formData[field.id] || ''}
// // //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// // //                                     placeholder={field.placeholder || ''}
// // //                                     required={field.required === '1'}
// // //                                     maxLength={
// // //                                         field.label === 'Серия и номер паспорта'
// // //                                             ? 9
// // //                                             : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
// // //                                                 ? 13
// // //                                                 : field.label === 'Дата рождения'
// // //                                                     ? 10
// // //                                                     : field.label === 'ПИНФЛ'
// // //                                                         ? 14
// // //                                                         : undefined
// // //                                     }
// // //                                     className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 transition-colors ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
// // //                                 />
// // //                             )}
// // //                             {field.type === 'select' && (
// // //                                 <select
// // //                                     value={formData[field.id] || ''}
// // //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// // //                                     required={field.required === '1'}
// // //                                     className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 transition-colors appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
// // //                                 >
// // //                                     <option value="">{field.placeholder || '- Выбрать -'}</option>
// // //                                     {Object.values(field.choices).map((choice, index) => (
// // //                                         <option key={index} value={choice.label}>
// // //                                             {choice.label}
// // //                                         </option>
// // //                                     ))}
// // //                                 </select>
// // //                             )}
// // //                             {field.type === 'checkbox' && (
// // //                                 <div>
// // //                                     {Object.values(field.choices).map((choice, index) => (
// // //                                         <label key={index} className="flex items-center space-x-3">
// // //                                             <input
// // //                                                 type="checkbox"
// // //                                                 checked={formData[field.id] === '1'}
// // //                                                 onChange={(e) => handleChange(field.id, e.target.checked, field)}
// // //                                                 required={field.required === '1' && formData[field.id] !== '1'}
// // //                                                 className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// // //                                             />
// // //                                             <span
// // //                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
// // //                                                 className="text-gray-700"
// // //                                             />
// // //                                         </label>
// // //                                     ))}
// // //                                 </div>
// // //                             )}
// // //                             {errors[field.id] && (
// // //                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
// // //                             )}
// // //                         </div>
// // //                     );
// // //                 })}

// // //                 {agreementField && (
// // //                     <div className="space-y-2">
// // //                         <label className="block text-sm font-semibold text-gray-700">
// // //                             {agreementField.label}{' '}
// // //                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
// // //                         </label>
// // //                         {agreementField.type === 'checkbox' && (
// // //                             <div>
// // //                                 {Object.values(agreementField.choices).map((choice, index) => (
// // //                                     <label key={index} className="flex items-center space-x-3">
// // //                                         <input
// // //                                             type="checkbox"
// // //                                             checked={formData[agreementField.id] === '1'}
// // //                                             onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
// // //                                             required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
// // //                                             className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// // //                                         />
// // //                                         <span
// // //                                             dangerouslySetInnerHTML={{ __html: choice.label }}
// // //                                             className="text-gray-700"
// // //                                         />
// // //                                     </label>
// // //                                 ))}
// // //                             </div>
// // //                         )}
// // //                         {errors[agreementField.id] && (
// // //                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
// // //                         )}
// // //                     </div>
// // //                 )}

// // //                 <button
// // //                     type="submit"
// // //                     disabled={isSubmitting}
// // //                     className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center
// // //                         ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
// // //                 >
// // //                     {isSubmitting ? (
// // //                         <>
// // //                             <svg
// // //                                 className="animate-spin h-5 w-5 mr-2 text-white"
// // //                                 xmlns="http://www.w3.org/2000/svg"
// // //                                 fill="none"
// // //                                 viewBox="0 0 24 24"
// // //                             >
// // //                                 <circle
// // //                                     className="opacity-25"
// // //                                     cx="12"
// // //                                     cy="12"
// // //                                     r="10"
// // //                                     stroke="currentColor"
// // //                                     strokeWidth="4"
// // //                                 ></circle>
// // //                                 <path
// // //                                     className="opacity-75"
// // //                                     fill="currentColor"
// // //                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                                 ></path>
// // //                             </svg>
// // //                             Отправка...
// // //                         </>
// // //                     ) : (
// // //                         'Позвоните мне!'
// // //                     )}
// // //                 </button>
// // //             </form>

// // //             {message && !isSubmitted && (
// // //                 <p
// // //                     className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
// // //                 >
// // //                     {message}
// // //                 </p>
// // //             )}
// // //         </div>
// // //     );
// // // }



// // // reg_form.jsx
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';

// // export default function RegistrationForm() {
// //     // Состояния для формы
// //     const [fields, setFields] = useState([]);
// //     const [formData, setFormData] = useState({});
// //     const [message, setMessage] = useState('');
// //     const [errors, setErrors] = useState({});
// //     const [isSubmitted, setIsSubmitted] = useState(false);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [isLoading, setIsLoading] = useState(false);

// //     const formId = 451;
// //     const router = useRouter();

// //     // Соответствия для мед. факультетов
// //     const mappingMed = {
// //         'Стоматология': 'Стоматология | Стоматология',
// //         'Фармация': 'Фармация | Фармация',
// //         'Лечебное дело': 'Лечебное дело | Даволаш иши',
// //         'Педиатрия': 'Педиатрия | Педиатрия',
// //         'Высшее медсестринское дело': 'Высшее медсестринское дело | Олий ҳамширалик',
// //         'Народная медицина': 'Народная медицина | Халқ табобати',
// //         'Биотехнология': 'Биотехнология | Биотехнология',
// //         'Медико-биологическое дело': 'Медико-биологическое дело | Тиббий-биологик иш',
// //         'Медико-профилактическое дело': 'Медико-профилактическое дело | Тиббий-профилактика иши',
// //         'Биология': 'Биология | Биология',
// //         'Химия': 'Химия | Кимё',
// //         'Фундаментальная медицина': 'Фундаментальная медицина | Фундаментал тиббиёт',
// //         'Косметология': 'Косметология | Косметология'
// //     };

// //     // Соответствия для бизнес факультетов
// //     const mappingBus = {
// //         'Архитектура': 'Архитектура | Архитектура',
// //         'Дизайн интерьера': 'Дизайн интерьера | Интерьер дизайни',
// //         'Дошкольное образование': 'Дошкольное образование | Мактабгача таълим',
// //         'Логистика': 'Логистика | Логистика',
// //         'Маркетинг': 'Маркетинг | Маркетинг',
// //         'Специальная педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
// //         'Транспорт (автомобильный транспорт)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
// //         'Туризм': 'Туризм | Туризм',
// //         'Управление бизнесом': 'Управление бизнесом | Бизнес бошқаруви',
// //         'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
// //         'Финансы и финансовые технологии': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
// //         'Экономика (по отраслям и секторам обслуживания)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
// //         'Менеджмент': 'Менеджмент | Менеджмент',
// //         'Начальное образование': 'Начальное образование | Бошланғич таълим',
// //         'Психология': 'Психология | Психология',
// //         'Педагогика': 'Педагогика | Педагогика',
// //         'Налоги и налогообложение': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
// //         'Банковское дело': 'Банковское дело | Банк иши',
// //         'Бухгалтерский учет': 'Бухгалтерский учет | Бухгалтерия хисоби'
// //     };

// //     // Соответствия для формы обучения
// //     const mappingTime = {
// //         '1 смена': `Очная | Kunduzgi ta'lim`,
// //         '2 смена': `Вечерняя | Kechki ta'lim`,
// //         'Очное обучение': `Очная | Kunduzgi ta'lim`,
// //         'Вечернее обучение': `Вечерняя | Kechki ta'lim`,
// //         'Заочное обучение': `Заочная | Sirtqi ta'lim`
// //     };

// //     // Функция для очистки номера телефона от специальных символов
// //     const sanitizeInput = (value) => {
// //         return value.replace(/[-()]/g, '');
// //     };

// //     // Загрузка полей формы при монтировании компонента
// //     useEffect(() => {
// //         async function fetchFormFields() {
// //             try {
// //                 setIsLoading(true);
// //                 const res = await fetch(`/api/form-fields?formId=${formId}`);
// //                 const data = await res.json();
// //                 if (res.ok) {
// //                     const fieldsArray = Object.values(data);
// //                     setFields(fieldsArray);
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching form fields:', error);
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         }

// //         fetchFormFields();
// //     }, []);

// //     // Установка текущего URL в поле "Источник"
// //     useEffect(() => {
// //         if (fields.length > 0) {
// //             const sourceField = fields.find((f) => f.label === 'Источник');
// //             if (sourceField) {
// //                 setFormData(prevData => ({
// //                     ...prevData,
// //                     [sourceField.id]: window.location.href
// //                 }));
// //             }
// //         }
// //     }, [fields]);

// //     // Эффект для синхронизации данных между связанными полями
// //     useEffect(() => {
// //         if (fields.length === 0) return;

// //         let updatedFormData = null;
// //         let needUpdate = false;

// //         const medFacultyField = fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)');
// //         const busFacultyField = fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)');
// //         const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
// //         const medTimeField = fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)');
// //         const busTimeField = fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)');
// //         const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
// //         const phone1Field = fields.find(f => f.label === 'Номер телефона');
// //         const phone2Field = fields.find(f => f.label === 'Дополнительный номер');
// //         const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
// //         const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

// //         if (!updatedFormData) {
// //             updatedFormData = { ...formData };
// //         }

// //         if (medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
// //             const selectedValue = formData[medFacultyField.id];
// //             const mappedValue = mappingMed[selectedValue];
// //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// //                 updatedFormData[directionBitrixField.id] = mappedValue;
// //                 needUpdate = true;
// //             }
// //         }

// //         if (busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
// //             const selectedValue = formData[busFacultyField.id];
// //             const mappedValue = mappingBus[selectedValue];
// //             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
// //                 updatedFormData[directionBitrixField.id] = mappedValue;
// //                 needUpdate = true;
// //             }
// //         }

// //         if (timeBitrixField && ((medTimeField && formData[medTimeField?.id]) || (busTimeField && formData[busTimeField?.id]))) {
// //             const medTimeValue = formData[medTimeField?.id];
// //             const busTimeValue = formData[busTimeField?.id];
// //             let timeValue = `Очная | Kunduzgi ta'lim`;
// //             if (medTimeValue && mappingTime[medTimeValue]) {
// //                 timeValue = mappingTime[medTimeValue];
// //             } else if (busTimeValue && mappingTime[busTimeValue]) {
// //                 timeValue = mappingTime[busTimeValue];
// //             }
// //             if (formData[timeBitrixField.id] !== timeValue) {
// //                 updatedFormData[timeBitrixField.id] = timeValue;
// //                 needUpdate = true;
// //             }
// //         }

// //         if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
// //             const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
// //             if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
// //                 updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
// //                 needUpdate = true;
// //             }
// //         }

// //         if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
// //             const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
// //             if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
// //                 updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
// //                 needUpdate = true;
// //             }
// //         }

// //         if (needUpdate) {
// //             setFormData(updatedFormData);
// //         }
// //     }, [formData, fields]);

// //     // Функции валидации
// //     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
// //     const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
// //     const validatePINFL = (value) => /^\d{14}$/.test(value);

// //     // Функции форматирования
// //     const formatDate = (value) => {
// //         const cleaned = value.replace(/\D/g, '').slice(0, 8);
// //         const day = cleaned.slice(0, 2);
// //         const month = cleaned.slice(2, 4);
// //         const year = cleaned.slice(4, 8);
// //         let formatted = '';
// //         if (day) formatted += day;
// //         if (month) formatted += '/' + month;
// //         if (year) formatted += '/' + year;
// //         return formatted;
// //     };

// //     const formatPhone = (value) => {
// //         const cleaned = value.replace(/\D/g, '').slice(0, 9);
// //         const part1 = cleaned.slice(0, 2);
// //         const part2 = cleaned.slice(2, 5);
// //         const part3 = cleaned.slice(5, 7);
// //         const part4 = cleaned.slice(7, 9);
// //         let formatted = '';
// //         if (part1) formatted += '(' + part1;
// //         if (part2) formatted += ')' + part2;
// //         if (part3) formatted += '-' + part3;
// //         if (part4) formatted += '-' + part4;
// //         return formatted;
// //     };

// //     const formatPassport = (value) => {
// //         const cleaned = value.replace(/[^a-z0-9]/gi, '');
// //         const letters = cleaned.slice(0, 2).toLowerCase();
// //         const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
// //         return letters + numbers;
// //     };

// //     const handleChange = (fieldId, value, field) => {
// //         let newValue = value;
// //         let newErrors = { ...errors };
// //         let updatedFormData = { ...formData };

// //         if (field.label === 'Имя' || field.label === 'Фамилия') {
// //             if (!validateLatinAndSpaces(value)) {
// //                 newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === 'Дата рождения') {
// //             newValue = formatDate(value);
// //             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
// //             if (value && !dateRegex.test(newValue)) {
// //                 newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
// //             newValue = formatPhone(value);
// //             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
// //             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
// //                 newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === 'Серия и номер паспорта') {
// //             newValue = formatPassport(value);
// //             if (value && !validatePassport(newValue)) {
// //                 newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === 'ПИНФЛ') {
// //             newValue = value.replace(/\D/g, '').slice(0, 14);
// //             if (field.required === '1' && value && !validatePINFL(newValue)) {
// //                 newErrors[fieldId] = 'ПИНФЛ должен содержать ровно 14 цифр.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.type === 'checkbox') {
// //             if (Array.isArray(value)) {
// //                 newValue = value.length > 0 ? '1' : '';
// //                 updatedFormData[fieldId] = newValue;
// //             } else {
// //                 newValue = value ? '1' : '';
// //                 updatedFormData[fieldId] = newValue;
// //             }
// //             if (field.required === '1' && newValue !== '1') {
// //                 newErrors[fieldId] = 'Это поле обязательно.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //         } else {
// //             updatedFormData[fieldId] = newValue;
// //         }

// //         setFormData(updatedFormData);
// //         setErrors(newErrors);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         if (Object.keys(errors).length > 0) {
// //             setMessage('Пожалуйста, исправьте ошибки в форме.');
// //             return;
// //         }

// //         setIsSubmitting(true);
// //         console.log('Отправляемые данные:', JSON.stringify({ form_id: formId, fields: formData }));

// //         try {
// //             const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({
// //                     form_id: formId,
// //                     fields: formData,
// //                 }),
// //             });
// //             const result = await res.json();
// //             console.log('API response:', result);
// //             if (res.ok) {
// //                 setIsSubmitted(true);
// //                 setFormData({});
// //                 setErrors({});
// //                 setMessage('');
// //                 // Редирект на страницу успеха
// //                 setTimeout(() => {
// //                     router.push('/ru/success');
// //                 }, 0); // Небольшая задержка для показа сообщения об успехе
// //             } else {
// //                 setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
// //             }
// //         } catch (error) {
// //             console.error('Submit error:', error);
// //             setMessage('Ошибка сети.');
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     // Определяем условия показа полей
// //     const directionField = fields.find((f) => f.label === 'Выберите направление');
// //     const directionValue = formData[directionField?.id] || '';
// //     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
// //     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

// //     const agreementField = fields.find((f) => f.label === 'Соглашение');
// //     const otherFields = fields.filter((f) => f.label !== 'Соглашение');

// //     if (isSubmitted) {
// //         return (
// //             <div className="text-center space-y-6">
// //                 <p className="text-xl font-semibold text-green-600">
// //                     Заявка успешно отправлена, ожидайте!
// //                 </p>
// //                 <p className="text-gray-600">
// //                     Вы будете перенаправлены через несколько секунд...
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (isLoading) {
// //         return (
// //             <div className="flex flex-col items-center justify-center py-8">
// //                 <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                 </svg>
// //                 <p className="text-[#6b0e55] text-lg">Загрузка полей формы...</p>
// //             </div>
// //         );
// //     }

// //     if (fields.length === 0) {
// //         return <p className="text-gray-500 text-center">Загрузка полей...</p>;
// //     }

// //     return (
// //         <div className="space-y-4">
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //                 {otherFields.map((field) => {
// //                     if (
// //                         (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// //                         (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
// //                         (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
// //                         (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
// //                         field.label === 'Select faculty (INTERNATIONAL)'
// //                     ) {
// //                         return null;
// //                     }

// //                     const isBitrixField = [
// //                         'BITRIX - Телефон 1',
// //                         'BITRIX - Телефон 2',
// //                         'BITRIX - Форма обучения',
// //                         'BITRIX - Направления',
// //                         'Источник'
// //                     ].includes(field.label);

// //                     if (isBitrixField) return null;

// //                     return (
// //                         <div key={field.id} className="space-y-2">
// //                             <label className="block text-sm font-semibold text-gray-700">
// //                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
// //                             </label>
// //                             {field.type === 'text' && (
// //                                 <input
// //                                     type="text"
// //                                     value={formData[field.id] || ''}
// //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// //                                     placeholder={field.placeholder || ''}
// //                                     required={field.required === '1'}
// //                                     maxLength={
// //                                         field.label === 'Серия и номер паспорта'
// //                                             ? 9
// //                                             : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
// //                                                 ? 13
// //                                                 : field.label === 'Дата рождения'
// //                                                     ? 10
// //                                                     : field.label === 'ПИНФЛ'
// //                                                         ? 14
// //                                                         : undefined
// //                                     }
// //                                     className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 transition-colors ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
// //                                 />
// //                             )}
// //                             {field.type === 'select' && (
// //                                 <select
// //                                     value={formData[field.id] || ''}
// //                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// //                                     required={field.required === '1'}
// //                                     className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 transition-colors appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
// //                                 >
// //                                     <option value="">{field.placeholder || '- Выбрать -'}</option>
// //                                     {Object.values(field.choices)
// //                                         .filter(choice => {
// //                                             // Скрываем "INTERNATIONAL" только для поля "Выберите направление"
// //                                             if (field.label === 'Выберите направление' && choice.label === 'INTERNATIONAL') {
// //                                                 return false;
// //                                             }
// //                                             return true;
// //                                         })
// //                                         .map((choice, index) => (
// //                                             <option key={index} value={choice.label}>
// //                                                 {choice.label}
// //                                             </option>
// //                                         ))}
// //                                 </select>
// //                             )}
// //                             {field.type === 'checkbox' && (
// //                                 <div>
// //                                     {Object.values(field.choices).map((choice, index) => (
// //                                         <label key={index} className="flex items-center space-x-3">
// //                                             <input
// //                                                 type="checkbox"
// //                                                 checked={formData[field.id] === '1'}
// //                                                 onChange={(e) => handleChange(field.id, e.target.checked, field)}
// //                                                 required={field.required === '1' && formData[field.id] !== '1'}
// //                                                 className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// //                                             />
// //                                             <span
// //                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
// //                                                 className="text-gray-700"
// //                                             />
// //                                         </label>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                             {errors[field.id] && (
// //                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
// //                             )}
// //                         </div>
// //                     );
// //                 })}

// //                 {agreementField && (
// //                     <div className="space-y-2">
// //                         <label className="block text-sm font-semibold text-gray-700">
// //                             {agreementField.label}{' '}
// //                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
// //                         </label>
// //                         {agreementField.type === 'checkbox' && (
// //                             <div>
// //                                 {Object.values(agreementField.choices).map((choice, index) => (
// //                                     <label key={index} className="flex items-center space-x-3">
// //                                         <input
// //                                             type="checkbox"
// //                                             checked={formData[agreementField.id] === '1'}
// //                                             onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
// //                                             required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
// //                                             className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
// //                                         />
// //                                         <span
// //                                             dangerouslySetInnerHTML={{ __html: choice.label }}
// //                                             className="text-gray-700"
// //                                         />
// //                                     </label>
// //                                 ))}
// //                             </div>
// //                         )}
// //                         {errors[agreementField.id] && (
// //                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
// //                         )}
// //                     </div>
// //                 )}

// //                 <button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center
// //                         ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
// //                 >
// //                     {isSubmitting ? (
// //                         <>
// //                             <svg
// //                                 className="animate-spin h-5 w-5 mr-2 text-white"
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 fill="none"
// //                                 viewBox="0 0 24 24"
// //                             >
// //                                 <circle
// //                                     className="opacity-25"
// //                                     cx="12"
// //                                     cy="12"
// //                                     r="10"
// //                                     stroke="currentColor"
// //                                     strokeWidth="4"
// //                                 ></circle>
// //                                 <path
// //                                     className="opacity-75"
// //                                     fill="currentColor"
// //                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                                 ></path>
// //                             </svg>
// //                             Отправка...
// //                         </>
// //                     ) : (
// //                         'Позвоните мне!'
// //                     )}
// //                 </button>
// //             </form>

// //             {message && !isSubmitted && (
// //                 <p
// //                     className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
// //                 >
// //                     {message}
// //                 </p>
// //             )}
// //         </div>
// //     );
// // }


// // ru/reg_form.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function RegistrationForm() {
//     // Состояния для формы
//     const [fields, setFields] = useState([]);
//     const [formData, setFormData] = useState({});
//     const [message, setMessage] = useState('');
//     const [errors, setErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     const formId = 550;
//     const router = useRouter();

//     // Соответствия для мед. факультетов
//     const mappingMed = {
//         'Стоматология': 'Стоматология | Стоматология',
//         'Фармация': 'Фармация | Фармация',
//         'Лечебное дело': 'Лечебное дело | Даволаш иши',
//         'Педиатрия': 'Педиатрия | Педиатрия',
//         'Высшее медсестринское дело': 'Высшее медсестринское дело | Олий ҳамширалик',
//         'Народная медицина': 'Народная медицина | Халқ табобати',
//         'Биотехнология': 'Биотехнология | Биотехнология',
//         'Медико-биологическое дело': 'Медико-биологическое дело | Тиббий-биологик иш',
//         'Медико-профилактическое дело': 'Медико-профилактическое дело | Тиббий-профилактика иши',
//         'Биология': 'Биология | Биология',
//         'Химия': 'Химия | Кимё',
//         'Фундаментальная медицина': 'Фундаментальная медицина | Фундаментал тиббиёт',
//         'Косметология': 'Косметология | Косметология'
//     };

//     // Соответствия для бизнес факультетов
//     const mappingBus = {
//         'Архитектура': 'Архитектура | Архитектура',
//         'Дизайн интерьера': 'Дизайн интерьера | Интерьер дизайни',
//         'Дошкольное образование': 'Дошкольное образование | Мактабгача таълим',
//         'Логистика': 'Логистика | Логистика',
//         'Маркетинг': 'Маркетинг | Маркетинг',
//         'Специальная педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
//         'Транспорт (автомобильный транспорт)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
//         'Туризм': 'Туризм | Туризм',
//         'Управление бизнесом': 'Управление бизнесом | Бизнес бошқаруви',
//         'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
//         'Финансы и финансовые технологии': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
//         'Экономика (по отраслям и секторам обслуживания)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
//         'Менеджмент': 'Менеджмент | Менеджмент',
//         'Начальное образование': 'Начальное образование | Бошланғич таълим',
//         'Психология': 'Психология | Психология',
//         'Педагогика': 'Педагогика | Педагогика',
//         'Налоги и налогообложение': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
//         'Банковское дело': 'Банковское дело | Банк иши',
//         'Бухгалтерский учет': 'Бухгалтерский учет | Бухгалтерия хисоби'
//     };

//     // Соответствия для формы обучения
//     const mappingTime = {
//         '1 смена': `Очная | Kunduzgi ta'lim`,
//         '2 смена': `Вечерняя | Kechki ta'lim`,
//         'Очное обучение': `Очная | Kunduzgi ta'lim`,
//         'Вечернее обучение': `Вечерняя | Kechki ta'lim`,
//         'Заочное обучение': `Заочная | Sirtqi ta'lim`
//     };

//     // Функция для очистки номера телефона от специальных символов
//     const sanitizeInput = (value) => {
//         return value.replace(/[-()]/g, '');
//     };

//     // Загрузка полей формы при монтировании компонента
//     useEffect(() => {
//         async function fetchFormFields() {
//             try {
//                 setIsLoading(true);
//                 const res = await fetch(`/api/form-fields?formId=${formId}`);
//                 const data = await res.json();
//                 if (res.ok) {
//                     const fieldsArray = Object.values(data);
//                     setFields(fieldsArray);
//                 }
//             } catch (error) {
//                 console.error('Error fetching form fields:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         }

//         fetchFormFields();
//     }, []);

//     // Установка текущего URL в поле "Источник"
//     useEffect(() => {
//         if (fields.length > 0) {
//             const sourceField = fields.find((f) => f.label === 'Источник');
//             if (sourceField) {
//                 setFormData(prevData => ({
//                     ...prevData,
//                     [sourceField.id]: window.location.href
//                 }));
//             }
//         }
//     }, [fields]);

//     // Эффект для синхронизации данных между связанными полями
//     useEffect(() => {
//         if (fields.length === 0) return;

//         let updatedFormData = null;
//         let needUpdate = false;

//         const medFacultyField = fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)');
//         const busFacultyField = fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)');
//         const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
//         const medTimeField = fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)');
//         const busTimeField = fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)');
//         const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
//         const phone1Field = fields.find(f => f.label === 'Номер телефона');
//         const phone2Field = fields.find(f => f.label === 'Дополнительный номер');
//         const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
//         const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

//         if (!updatedFormData) {
//             updatedFormData = { ...formData };
//         }

//         if (medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
//             const selectedValue = formData[medFacultyField.id];
//             const mappedValue = mappingMed[selectedValue];
//             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
//                 updatedFormData[directionBitrixField.id] = mappedValue;
//                 needUpdate = true;
//             }
//         }

//         if (busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
//             const selectedValue = formData[busFacultyField.id];
//             const mappedValue = mappingBus[selectedValue];
//             if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
//                 updatedFormData[directionBitrixField.id] = mappedValue;
//                 needUpdate = true;
//             }
//         }

//         if (timeBitrixField && ((medTimeField && formData[medTimeField?.id]) || (busTimeField && formData[busTimeField?.id]))) {
//             const medTimeValue = formData[medTimeField?.id];
//             const busTimeValue = formData[busTimeField?.id];
//             let timeValue = `Очная | Kunduzgi ta'lim`;
//             if (medTimeValue && mappingTime[medTimeValue]) {
//                 timeValue = mappingTime[medTimeValue];
//             } else if (busTimeValue && mappingTime[busTimeValue]) {
//                 timeValue = mappingTime[busTimeValue];
//             }
//             if (formData[timeBitrixField.id] !== timeValue) {
//                 updatedFormData[timeBitrixField.id] = timeValue;
//                 needUpdate = true;
//             }
//         }

//         if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
//             const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
//             if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
//                 updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
//                 needUpdate = true;
//             }
//         }

//         if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
//             const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
//             if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
//                 updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
//                 needUpdate = true;
//             }
//         }

//         if (needUpdate) {
//             setFormData(updatedFormData);
//         }
//     }, [formData, fields]);

//     // Block scroll when popup is open
//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }

//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isPopupOpen]);

//     // Функции валидации
//     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
//     const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
//     const validatePINFL = (value) => /^\d{14}$/.test(value);

//     // Функции форматирования
//     const formatDate = (value) => {
//         const cleaned = value.replace(/\D/g, '').slice(0, 8);
//         const day = cleaned.slice(0, 2);
//         const month = cleaned.slice(2, 4);
//         const year = cleaned.slice(4, 8);
//         let formatted = '';
//         if (day) formatted += day;
//         if (month) formatted += '/' + month;
//         if (year) formatted += '/' + year;
//         return formatted;
//     };

//     const formatPhone = (value) => {
//         const cleaned = value.replace(/\D/g, '').slice(0, 9);
//         const part1 = cleaned.slice(0, 2);
//         const part2 = cleaned.slice(2, 5);
//         const part3 = cleaned.slice(5, 7);
//         const part4 = cleaned.slice(7, 9);
//         let formatted = '';
//         if (part1) formatted += '(' + part1;
//         if (part2) formatted += ')' + part2;
//         if (part3) formatted += '-' + part3;
//         if (part4) formatted += '-' + part4;
//         return formatted;
//     };

//     const formatPassport = (value) => {
//         const cleaned = value.replace(/[^a-z0-9]/gi, '');
//         const letters = cleaned.slice(0, 2).toLowerCase();
//         const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
//         return letters + numbers;
//     };

//     const handleChange = (fieldId, value, field) => {
//         let newValue = value;
//         let newErrors = { ...errors };
//         let updatedFormData = { ...formData };

//         if (field.label === 'Имя' || field.label === 'Фамилия') {
//             if (!validateLatinAndSpaces(value)) {
//                 newErrors[fieldId] = 'Пожалуйста, вводите только латинские буквы и пробелы.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Дата рождения') {
//             newValue = formatDate(value);
//             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
//             if (value && !dateRegex.test(newValue)) {
//                 newErrors[fieldId] = 'Введите дату в формате dd/mm/yyyy.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Номер телефона' || field.label === 'Дополнительный номер') {
//             newValue = formatPhone(value);
//             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
//             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
//                 newErrors[fieldId] = 'Введите номер в формате (99)999-99-99.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Серия и номер паспорта') {
//             newValue = formatPassport(value);
//             if (value && !validatePassport(newValue)) {
//                 newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'ПИНФЛ') {
//             newValue = value.replace(/\D/g, '').slice(0, 14);
//             if (field.required === '1' && value && !validatePINFL(newValue)) {
//                 newErrors[fieldId] = 'ПИНФЛ должен содержать ровно 14 цифр.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.type === 'checkbox') {
//             if (Array.isArray(value)) {
//                 newValue = value.length > 0 ? '1' : '';
//                 updatedFormData[fieldId] = newValue;
//             } else {
//                 newValue = value ? '1' : '';
//                 updatedFormData[fieldId] = newValue;
//             }
//             if (field.required === '1' && newValue !== '1') {
//                 newErrors[fieldId] = 'Это поле обязательно.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//         } else {
//             updatedFormData[fieldId] = newValue;
//         }

//         setFormData(updatedFormData);
//         setErrors(newErrors);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (Object.keys(errors).length > 0) {
//             setMessage('Пожалуйста, исправьте ошибки в форме.');
//             return;
//         }

//         setIsSubmitting(true);
//         console.log('Отправляемые данные:', JSON.stringify({ form_id: formId, fields: formData }));

//         try {
//             const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     form_id: formId,
//                     fields: formData,
//                 }),
//             });
//             const result = await res.json();
//             console.log('API response:', result);
//             if (res.ok) {
//                 setIsSubmitted(true);
//                 setFormData({});
//                 setErrors({});
//                 setMessage('');
//                 // Редирект на страницу успеха
//                 setTimeout(() => {
//                     setIsPopupOpen(false);
//                     router.push('/ru/success');
//                 }, 2000);
//             } else {
//                 setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
//             }
//         } catch (error) {
//             console.error('Submit error:', error);
//             setMessage('Ошибка сети.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const closePopup = () => {
//         setIsPopupOpen(false);
//         setIsSubmitted(false);
//         setMessage('');
//     };

//     // Определяем условия показа полей
//     const directionField = fields.find((f) => f.label === 'Выберите направление');
//     const directionValue = formData[directionField?.id] || '';
//     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
//     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

//     const agreementField = fields.find((f) => f.label === 'Соглашение');
//     const otherFields = fields.filter((f) => f.label !== 'Соглашение');

//     // Animation variants
//     const overlayVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//         exit: { opacity: 0 }
//     };

//     const modalVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 0.8,
//             y: 50
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 30
//             }
//         },
//         exit: {
//             opacity: 0,
//             scale: 0.8,
//             y: 50,
//             transition: {
//                 duration: 0.2
//             }
//         }
//     };










//     const [position, setPosition] = useState(45);
//     const [glowIntensity, setGlowIntensity] = useState(0);
//     const [pulseSize, setPulseSize] = useState(1);

//     useEffect(() => {
//         const glowInterval = setInterval(() => {
//             setGlowIntensity(prev => (prev >= 1 ? 0 : prev + 0.1));
//         }, 200);

//         const positionInterval = setInterval(() => {
//             setPosition(prev => (prev >= 360 ? 0 : prev + 1));
//         }, 100);

//         const pulseInterval = setInterval(() => {
//             setPulseSize(prev => (prev >= 1.03 ? 1 : 1.03));
//         }, 2000);

//         return () => {
//             clearInterval(glowInterval);
//             clearInterval(positionInterval);
//             clearInterval(pulseInterval);
//         };
//     }, []);


//     return (
//         <>
//             {/* Trigger Button */}
//             <div className="space-y-2">
//                 <div className=' flex justify-center'>
//                     <motion.button
//                         onClick={() => setIsPopupOpen(true)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         animate={{ scale: pulseSize }}
//                         transition={{ duration: 0.2 }}
//                         className="w-[100%] pop-form-trigger-land mt-4 mb-4 py-4 px-10 text-[#6b0e55] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
//                         style={{
//                             background: `linear-gradient(${position}deg, 
//                         #f7e282 0%, 
//                         #e4c254 25%, 
//                         #f3d651 50%, 
//                         #dbb845 75%,
//                         #f7e282 100%)`,
//                             boxShadow: `0 5px 15px rgba(198, 144, 38, 0.5), 0 0 ${20 + glowIntensity * 20}px rgba(247, 226, 130, ${0.5 + glowIntensity * 0.3})`
//                         }}
//                     >
//                         Подать заявку
//                     </motion.button>
//                 </div>

//             </div>

//             {/* Popup Modal */}
//             <AnimatePresence>
//                 {isPopupOpen && (
//                     <motion.div
//                         className="fixed inset-0 z-[30000] flex items-center justify-center p-4"
//                         variants={overlayVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                     >
//                         {/* Backdrop */}
//                         <motion.div
//                             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                             onClick={closePopup}
//                         />

//                         {/* Modal Content */}
//                         <motion.div
//                             className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
//                             variants={modalVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                         >
//                             {/* Header */}
//                             <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
//                                 <h3 className="text-xl font-bold text-gray-900">
//                                     Регистрация на экзамен
//                                 </h3>
//                                 <button
//                                     onClick={closePopup}
//                                     className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
//                                 >
//                                     <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             {/* Form Content */}
//                             <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
//                                 {isSubmitted ? (
//                                     <motion.div
//                                         className="text-center space-y-6"
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ delay: 0.2 }}
//                                     >
//                                         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//                                             <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                         </div>
//                                         <p className="text-xl font-semibold text-green-600">
//                                             Заявка успешно отправлена!
//                                         </p>
//                                         <p className="text-gray-600">
//                                             Вы будете перенаправлены через несколько секунд...
//                                         </p>
//                                     </motion.div>
//                                 ) : isLoading ? (
//                                     <div className="flex flex-col items-center justify-center py-8">
//                                         <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         <p className="text-[#6b0e55] text-lg">Загрузка полей формы...</p>
//                                     </div>
//                                 ) : fields.length === 0 ? (
//                                     <p className="text-gray-500 text-center">Загрузка полей...</p>
//                                 ) : (
//                                     <motion.div
//                                         className="space-y-4"
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ delay: 0.1 }}
//                                     >
//                                         <form onSubmit={handleSubmit} className="space-y-4">
//                                             {otherFields.map((field, index) => {
//                                                 if (
//                                                     (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                                                     (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
//                                                     (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                                                     (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
//                                                     field.label === 'Select faculty (INTERNATIONAL)'
//                                                 ) {
//                                                     return null;
//                                                 }

//                                                 const isBitrixField = [
//                                                     'BITRIX - Телефон 1',
//                                                     'BITRIX - Телефон 2',
//                                                     'BITRIX - Форма обучения',
//                                                     'BITRIX - Направления',
//                                                     'Источник'
//                                                 ].includes(field.label);

//                                                 if (isBitrixField) return null;

//                                                 return (
//                                                     <motion.div
//                                                         key={field.id}
//                                                         className="space-y-2"
//                                                         initial={{ opacity: 0, y: 10 }}
//                                                         animate={{ opacity: 1, y: 0 }}
//                                                         transition={{ delay: index * 0.05 }}
//                                                     >
//                                                         <label className="block text-sm font-semibold text-gray-700">
//                                                             {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
//                                                         </label>
//                                                         {field.type === 'text' && (
//                                                             <input
//                                                                 type="text"
//                                                                 value={formData[field.id] || ''}
//                                                                 onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                                                 placeholder={field.placeholder || ''}
//                                                                 required={field.required === '1'}
//                                                                 maxLength={
//                                                                     field.label === 'Серия и номер паспорта'
//                                                                         ? 9
//                                                                         : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
//                                                                             ? 13
//                                                                             : field.label === 'Дата рождения'
//                                                                                 ? 10
//                                                                                 : field.label === 'ПИНФЛ'
//                                                                                     ? 14
//                                                                                     : undefined
//                                                                 }
//                                                                 className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
//                                                             />
//                                                         )}
//                                                         {field.type === 'select' && (
//                                                             <select
//                                                                 value={formData[field.id] || ''}
//                                                                 onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                                                 required={field.required === '1'}
//                                                                 className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 appearance-none bg-white"
//                                                             >
//                                                                 <option value="">{field.placeholder || '- Выбрать -'}</option>
//                                                                 {Object.values(field.choices)
//                                                                     .filter(choice => {
//                                                                         if (field.label === 'Выберите направление' && choice.label === 'INTERNATIONAL') {
//                                                                             return false;
//                                                                         }
//                                                                         return true;
//                                                                     })
//                                                                     .map((choice, index) => (
//                                                                         <option key={index} value={choice.label}>
//                                                                             {choice.label}
//                                                                         </option>
//                                                                     ))}
//                                                             </select>
//                                                         )}
//                                                         {field.type === 'checkbox' && (
//                                                             <div>
//                                                                 {Object.values(field.choices).map((choice, index) => (
//                                                                     <label key={index} className="flex items-center space-x-3">
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             checked={formData[field.id] === '1'}
//                                                                             onChange={(e) => handleChange(field.id, e.target.checked, field)}
//                                                                             required={field.required === '1' && formData[field.id] !== '1'}
//                                                                             className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-[#6b0e55]"
//                                                                         />
//                                                                         <span
//                                                                             dangerouslySetInnerHTML={{ __html: choice.label }}
//                                                                             className="text-gray-700 text-sm"
//                                                                         />
//                                                                     </label>
//                                                                 ))}
//                                                             </div>
//                                                         )}
//                                                         {errors[field.id] && (
//                                                             <motion.p
//                                                                 className="text-red-500 text-sm"
//                                                                 initial={{ opacity: 0, y: -10 }}
//                                                                 animate={{ opacity: 1, y: 0 }}
//                                                             >
//                                                                 {errors[field.id]}
//                                                             </motion.p>
//                                                         )}
//                                                     </motion.div>
//                                                 );
//                                             })}

//                                             {agreementField && (
//                                                 <motion.div
//                                                     className="space-y-2"
//                                                     initial={{ opacity: 0, y: 10 }}
//                                                     animate={{ opacity: 1, y: 0 }}
//                                                     transition={{ delay: otherFields.length * 0.05 }}
//                                                 >
//                                                     <label className="block text-sm font-semibold text-gray-700">
//                                                         {agreementField.label}{' '}
//                                                         {agreementField.required === '1' && <span className="text-red-500">*</span>}
//                                                     </label>
//                                                     {agreementField.type === 'checkbox' && (
//                                                         <div>
//                                                             {Object.values(agreementField.choices).map((choice, index) => (
//                                                                 <label key={index} className="flex items-center space-x-3">
//                                                                     <input
//                                                                         type="checkbox"
//                                                                         checked={formData[agreementField.id] === '1'}
//                                                                         onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
//                                                                         required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
//                                                                         className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-[#6b0e55]"
//                                                                     />
//                                                                     <span
//                                                                         dangerouslySetInnerHTML={{ __html: choice.label }}
//                                                                         className="text-gray-700 text-sm"
//                                                                     />
//                                                                 </label>
//                                                             ))}
//                                                         </div>
//                                                     )}
//                                                     {errors[agreementField.id] && (
//                                                         <motion.p
//                                                             className="text-red-500 text-sm"
//                                                             initial={{ opacity: 0, y: -10 }}
//                                                             animate={{ opacity: 1, y: 0 }}
//                                                         >
//                                                             {errors[agreementField.id]}
//                                                         </motion.p>
//                                                     )}
//                                                 </motion.div>
//                                             )}

//                                             <motion.button
//                                                 type="submit"
//                                                 disabled={isSubmitting}
//                                                 whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                                                 whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                                                 className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center font-semibold
//                                                     ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
//                                                 initial={{ opacity: 0, y: 20 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                                 transition={{ delay: (otherFields.length + 1) * 0.05 }}
//                                             >
//                                                 {isSubmitting ? (
//                                                     <>
//                                                         <svg
//                                                             className="animate-spin h-5 w-5 mr-2 text-white"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                         >
//                                                             <circle
//                                                                 className="opacity-25"
//                                                                 cx="12"
//                                                                 cy="12"
//                                                                 r="10"
//                                                                 stroke="currentColor"
//                                                                 strokeWidth="4"
//                                                             ></circle>
//                                                             <path
//                                                                 className="opacity-75"
//                                                                 fill="currentColor"
//                                                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                                             ></path>
//                                                         </svg>
//                                                         Отправка...
//                                                     </>
//                                                 ) : (
//                                                     'Отправить заявку'
//                                                 )}
//                                             </motion.button>
//                                         </form>

//                                         {message && !isSubmitted && (
//                                             <motion.p
//                                                 className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'}`}
//                                                 initial={{ opacity: 0, y: 10 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                             >
//                                                 {message}
//                                             </motion.p>
//                                         )}
//                                     </motion.div>
//                                 )}
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// }




























// reg_form.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegistrationForm() {
    // Состояния для формы
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const formId = 550;
    const router = useRouter();

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

    // Загрузка полей формы при монтировании компонента
    useEffect(() => {
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
    }, []);

    // Установка текущего URL в поле "Источник"
    useEffect(() => {
        if (fields.length > 0) {
            const sourceField = fields.find((f) => f.label === 'Источник');
            if (sourceField) {
                setFormData(prevData => ({
                    ...prevData,
                    [sourceField.id]: window.location.href
                }));
            }
        }
    }, [fields]);

    // Эффект для синхронизации данных между связанными полями
    // Замените существующий useEffect для синхронизации полностью на этот:
    useEffect(() => {
        if (fields.length === 0) return;

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
        const directionField = fields.find(f => f.label === 'Выберите направление');

        const currentDirection = formData[directionField?.id];

        let updatedFormData = null;
        let needUpdate = false;

        // Синхронизация ТОЛЬКО для текущего активного направления
        if (currentDirection === 'MEDICAL SCHOOL' && medFacultyField && directionBitrixField && formData[medFacultyField.id]) {
            const selectedValue = formData[medFacultyField.id];
            const mappedValue = mappingMed[selectedValue];
            if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
                if (!updatedFormData) updatedFormData = { ...formData };
                updatedFormData[directionBitrixField.id] = mappedValue;
                needUpdate = true;
            }
        }

        if (currentDirection === 'BUSINESS AND SOCIAL SCHOOL' && busFacultyField && directionBitrixField && formData[busFacultyField.id]) {
            const selectedValue = formData[busFacultyField.id];
            const mappedValue = mappingBus[selectedValue];
            if (mappedValue && formData[directionBitrixField.id] !== mappedValue) {
                if (!updatedFormData) updatedFormData = { ...formData };
                updatedFormData[directionBitrixField.id] = mappedValue;
                needUpdate = true;
            }
        }

        // Синхронизация времени обучения ТОЛЬКО для активного направления
        if (timeBitrixField) {
            let timeValue = null;

            if (currentDirection === 'MEDICAL SCHOOL' && medTimeField && formData[medTimeField.id]) {
                const medTimeValue = formData[medTimeField.id];
                if (mappingTime[medTimeValue]) {
                    timeValue = mappingTime[medTimeValue];
                }
            } else if (currentDirection === 'BUSINESS AND SOCIAL SCHOOL' && busTimeField && formData[busTimeField.id]) {
                const busTimeValue = formData[busTimeField.id];
                if (mappingTime[busTimeValue]) {
                    timeValue = mappingTime[busTimeValue];
                }
            }

            if (timeValue && formData[timeBitrixField.id] !== timeValue) {
                if (!updatedFormData) updatedFormData = { ...formData };
                updatedFormData[timeBitrixField.id] = timeValue;
                needUpdate = true;
            }
        }

        // Синхронизация телефонов (не зависит от направления)
        if (phone1Field && bitrixPhone1Field && formData[phone1Field.id]) {
            const sanitizedPhone = sanitizeInput(formData[phone1Field.id]);
            if (formData[bitrixPhone1Field.id] !== sanitizedPhone) {
                if (!updatedFormData) updatedFormData = { ...formData };
                updatedFormData[bitrixPhone1Field.id] = sanitizedPhone;
                needUpdate = true;
            }
        }

        if (phone2Field && bitrixPhone2Field && formData[phone2Field.id]) {
            const sanitizedPhone = sanitizeInput(formData[phone2Field.id]);
            if (formData[bitrixPhone2Field.id] !== sanitizedPhone) {
                if (!updatedFormData) updatedFormData = { ...formData };
                updatedFormData[bitrixPhone2Field.id] = sanitizedPhone;
                needUpdate = true;
            }
        }

        // Обновляем только если есть изменения
        if (needUpdate) {
            setFormData(updatedFormData);
        }
    }, [
        // Указываем только конкретные значения, которые влияют на логику
        formData[fields.find(f => f.label === 'Выберите направление')?.id],
        formData[fields.find(f => f.label === 'Выберите факультет (MEDICAL SCHOOL)')?.id],
        formData[fields.find(f => f.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)')?.id],
        formData[fields.find(f => f.label === 'Форма обучения (MEDICAL SCHOOL)')?.id],
        formData[fields.find(f => f.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)')?.id],
        formData[fields.find(f => f.label === 'Номер телефона')?.id],
        formData[fields.find(f => f.label === 'Дополнительный номер')?.id],
        fields.length
    ]);

    // Block scroll when popup is open
    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPopupOpen]);

    // Функции валидации
    const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
    const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
    const validatePINFL = (value) => /^\d{14}$/.test(value);

    // Функции форматирования
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
        } else if (field.label === 'Серия и номер паспорта') {
            newValue = formatPassport(value);
            if (value && !validatePassport(newValue)) {
                newErrors[fieldId] = 'Введите паспорт в формате aa9999999 (две латинские буквы и 7 цифр).';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'ПИНФЛ') {
            newValue = value.replace(/\D/g, '').slice(0, 14);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setMessage('Пожалуйста, исправьте ошибки в форме.');
            return;
        }

        // Определяем ID формы для сабмита в зависимости от выбранного направления
        const directionField = fields.find((f) => f.label === 'Выберите направление');
        const directionValue = formData[directionField?.id] || '';
        const submitFormId = directionValue === 'BUSINESS AND SOCIAL SCHOOL' ? 574 : formId;

        setIsSubmitting(true);
        console.log('Отправляемые данные:', JSON.stringify({ form_id: submitFormId, fields: formData }));

        try {
            const res = await fetch('https://admission.emuni.uz/wp-json/wpforms-api/v1/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    form_id: submitFormId,  // <-- здесь теперь динамическое значение
                    fields: formData,
                }),
            });
            const result = await res.json();
            console.log('API response:', result);
            if (res.ok) {
                setIsSubmitted(true);
                setFormData({});
                setErrors({});
                setMessage('');
                // Редирект на страницу успеха
                setTimeout(() => {
                    setIsPopupOpen(false);
                    router.push('/ru/success');
                }, 2000);
            } else {
                setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            setMessage('Ошибка сети.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setIsSubmitted(false);
        setMessage('');
    };

    // Определяем условия показа полей
    const directionField = fields.find((f) => f.label === 'Выберите направление');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

    const agreementField = fields.find((f) => f.label === 'Соглашение');
    const otherFields = fields.filter((f) => f.label !== 'Соглашение');

    // Animation variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };










    const [position, setPosition] = useState(45);
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [pulseSize, setPulseSize] = useState(1);

    useEffect(() => {
        const glowInterval = setInterval(() => {
            setGlowIntensity(prev => (prev >= 1 ? 0 : prev + 0.1));
        }, 200);

        const positionInterval = setInterval(() => {
            setPosition(prev => (prev >= 360 ? 0 : prev + 1));
        }, 100);

        const pulseInterval = setInterval(() => {
            setPulseSize(prev => (prev >= 1.03 ? 1 : 1.03));
        }, 2000);

        return () => {
            clearInterval(glowInterval);
            clearInterval(positionInterval);
            clearInterval(pulseInterval);
        };
    }, []);


    return (
        <>
            {/* Trigger Button */}
            <div className="space-y-2">
                <div className=' flex justify-center'>
                    <motion.button
                        onClick={() => setIsPopupOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: pulseSize }}
                        transition={{ duration: 0.2 }}
                        className="w-[100%] pop-form-trigger-land mt-4 mb-4 py-4 px-10 text-[#6b0e55] font-bold rounded-full shadow-xl border-2 border-[#f1d875] transition-all duration-300 text-lg"
                        style={{
                            background: `linear-gradient(${position}deg, 
                        #f7e282 0%, 
                        #e4c254 25%, 
                        #f3d651 50%, 
                        #dbb845 75%,
                        #f7e282 100%)`,
                            boxShadow: `0 5px 15px rgba(198, 144, 38, 0.5), 0 0 ${20 + glowIntensity * 20}px rgba(247, 226, 130, ${0.5 + glowIntensity * 0.3})`
                        }}
                    >
                        Подать заявку
                    </motion.button>
                </div>

            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        className="fixed inset-0 z-[30000] flex items-center justify-center p-4"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closePopup}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Регистрация на экзамен
                                </h3>
                                <button
                                    onClick={closePopup}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                                {isSubmitted ? (
                                    <motion.div
                                        className="text-center space-y-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-xl font-semibold text-green-600">
                                            Заявка успешно отправлена!
                                        </p>
                                        <p className="text-gray-600">
                                            Вы будете перенаправлены через несколько секунд...
                                        </p>
                                    </motion.div>
                                ) : isLoading ? (
                                    <div className="flex flex-col items-center justify-center py-8">
                                        <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <p className="text-[#6b0e55] text-lg">Загрузка полей формы...</p>
                                    </div>
                                ) : fields.length === 0 ? (
                                    <p className="text-gray-500 text-center">Загрузка полей...</p>
                                ) : (
                                    <motion.div
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {otherFields.map((field, index) => {
                                                if (
                                                    (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                                    (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                                    (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                                    (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                                    field.label === 'Select faculty (INTERNATIONAL)'
                                                ) {
                                                    return null;
                                                }

                                                const isBitrixField = [
                                                    'BITRIX - Телефон 1',
                                                    'BITRIX - Телефон 2',
                                                    'BITRIX - Форма обучения',
                                                    'BITRIX - Направления',
                                                    'Источник'
                                                ].includes(field.label);

                                                if (isBitrixField) return null;

                                                return (
                                                    <motion.div
                                                        key={field.id}
                                                        className="space-y-2"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.05 }}
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
                                                                className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
                                                            />
                                                        )}
                                                        {field.type === 'select' && (
                                                            <select
                                                                value={formData[field.id] || ''}
                                                                onChange={(e) => handleChange(field.id, e.target.value, field)}
                                                                required={field.required === '1'}
                                                                className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 appearance-none bg-white"
                                                            >
                                                                <option value="">{field.placeholder || '- Выбрать -'}</option>
                                                                {Object.values(field.choices)
                                                                    .filter(choice => {
                                                                        if (field.label === 'Выберите направление' && choice.label === 'INTERNATIONAL') {
                                                                            return false;
                                                                        }
                                                                        return true;
                                                                    })
                                                                    .map((choice, index) => (
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
                                                                            className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-[#6b0e55]"
                                                                        />
                                                                        <span
                                                                            dangerouslySetInnerHTML={{ __html: choice.label }}
                                                                            className="text-gray-700 text-sm"
                                                                        />
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {errors[field.id] && (
                                                            <motion.p
                                                                className="text-red-500 text-sm"
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                            >
                                                                {errors[field.id]}
                                                            </motion.p>
                                                        )}
                                                    </motion.div>
                                                );
                                            })}

                                            {agreementField && (
                                                <motion.div
                                                    className="space-y-2"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: otherFields.length * 0.05 }}
                                                >
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
                                                                        className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-[#6b0e55]"
                                                                    />
                                                                    <span
                                                                        dangerouslySetInnerHTML={{ __html: choice.label }}
                                                                        className="text-gray-700 text-sm"
                                                                    />
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {errors[agreementField.id] && (
                                                        <motion.p
                                                            className="text-red-500 text-sm"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                        >
                                                            {errors[agreementField.id]}
                                                        </motion.p>
                                                    )}
                                                </motion.div>
                                            )}

                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                                className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center font-semibold
                                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: (otherFields.length + 1) * 0.05 }}
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
                                                    'Отправить заявку'
                                                )}
                                            </motion.button>
                                        </form>

                                        {message && !isSubmitted && (
                                            <motion.p
                                                className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {message}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}