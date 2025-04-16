// // // app/components/Popup.jsx
// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // export default function Popup() {
// //     const [isOpen, setIsOpen] = useState(false); // Состояние внутри компонента
// //     const [fields, setFields] = useState([]);
// //     const [formData, setFormData] = useState({});
// //     const [message, setMessage] = useState('');
// //     const [errors, setErrors] = useState({});

// //     const formId = 81203;

// //     // Обработчик кликов по триггерам
// //     useEffect(() => {
// //         const handleTriggerClick = (e) => {
// //             // Проверяем, есть ли у элемента или его ближайшего родителя класс .pop-form-trigger
// //             if (e.target.closest('.pop-form-trigger')) {
// //                 e.preventDefault();
// //                 setIsOpen(true);
// //             }
// //         };

// //         document.addEventListener('click', handleTriggerClick);
// //         return () => {
// //             document.removeEventListener('click', handleTriggerClick);
// //         };
// //     }, []); // Пустой массив зависимостей — слушатель добавляется один раз при монтировании

// //     // Управление скроллингом body
// //     useEffect(() => {
// //         if (isOpen) {
// //             document.body.style.overflow = 'hidden';
// //         } else {
// //             document.body.style.overflow = 'auto';
// //         }
// //         return () => {
// //             document.body.style.overflow = 'auto';
// //         };
// //     }, [isOpen]);

// //     // Получение полей формы
// //     useEffect(() => {
// //         if (isOpen) {
// //             async function fetchFormFields() {
// //                 try {
// //                     const res = await fetch(`https://next.emu.web-perfomance.uz/wp-json/wpforms-api/v1/form/${formId}`);
// //                     const data = await res.json();
// //                     const fieldsArray = Object.values(data);
// //                     setFields(fieldsArray);
// //                 } catch (error) {
// //                     console.error('Error fetching form fields:', error);
// //                 }
// //             }
// //             fetchFormFields();
// //         }
// //     }, [isOpen]);

// //     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
// //     const validatePassport = (value) => /^[A-Z]{2}\d{7}$/.test(value);

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

// //     const cleanPhoneForBitrix = (value) => value.replace(/\D/g, '');

// //     const handleChange = (fieldId, value, field) => {
// //         let newValue = value;
// //         let newErrors = { ...errors };
// //         let updatedFormData = { ...formData };

// //         if (field.label === 'Ism' || field.label === 'Familiya') {
// //             if (!validateLatinAndSpaces(value)) {
// //                 newErrors[fieldId] = 'Iltimos, faqat lotin harflari va bo`shliqlarni kiriting.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === "Tug'ilgan sana") {
// //             newValue = formatDate(value);
// //             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
// //             if (value && !dateRegex.test(newValue)) {
// //                 newErrors[fieldId] = 'Iltimos, sanani dd/aa/yyyy formatida kiriting.';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else if (field.label === 'Telefon raqamingiz' || field.label === "Qo'shimcha telefon raqam") {
// //             newValue = formatPhone(value);
// //             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
// //             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
// //                 newErrors[fieldId] = "Raqamni (99)999-99-99 formatida kiriting.";
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //             const bitrixFieldLabel = field.label === 'Номер телефона' ? 'BITRIX - Телефон 1' : 'BITRIX - Телефон 2';
// //             const bitrixField = fields.find((f) => f.label === bitrixFieldLabel);
// //             if (bitrixField && newValue) {
// //                 updatedFormData[bitrixField.id] = cleanPhoneForBitrix(newValue);
// //             }
// //         } else if (field.label === 'Pasport seriyasi va raqami') {
// //             newValue = value.toUpperCase().slice(0, 9);
// //             if (value && !validatePassport(newValue)) {
// //                 newErrors[fieldId] = 'Введите паспорт в формате AA9999999 (две латинские буквы и 7 цифр).';
// //             } else {
// //                 delete newErrors[fieldId];
// //             }
// //             updatedFormData[fieldId] = newValue;
// //         } else {
// //             updatedFormData[fieldId] = newValue;
// //         }

// //         setFormData(updatedFormData);
// //         setErrors(newErrors);
// //     };

// //     const handleOverlayClick = (e) => {
// //         if (e.target === e.currentTarget) {
// //             setIsOpen(false);
// //         }
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         if (Object.keys(errors).length > 0) {
// //             setMessage('Пожалуйста, исправьте ошибки в форме.');
// //             return;
// //         }

// //         try {
// //             const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/wpforms-api/v1/submit-form', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({
// //                     form_id: formId,
// //                     fields: formData,
// //                 }),
// //             });
// //             const result = await res.json();
// //             if (res.ok) {
// //                 setMessage('Форма успешно отправлена!');
// //                 setFormData({});
// //                 setErrors({});
// //                 setTimeout(() => {
// //                     setIsOpen(false);
// //                 }, 2000);
// //             } else {
// //                 setMessage('Ошибка при отправке формы.');
// //             }
// //         } catch (error) {
// //             setMessage('Ошибка сети.');
// //             console.error('Submit error:', error);
// //         }
// //     };

// //     const directionField = fields.find((f) => f.label === "Yo'nalishni tanlang");
// //     const directionValue = formData[directionField?.id] || '';
// //     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
// //     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

// //     const agreementField = fields.find((f) => f.label === 'Shartnoma');
// //     const otherFields = fields.filter((f) => f.label !== 'Shartnoma');

// //     return (
// //         <AnimatePresence>
// //             {isOpen && (
// //                 <motion.div
// //                     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     exit={{ opacity: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     onClick={handleOverlayClick}
// //                 >
// //                     <motion.div
// //                         className="bg-white p-9 rounded-xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
// //                         initial={{ opacity: 0, scale: 0.95 }}
// //                         animate={{ opacity: 1, scale: 1 }}
// //                         exit={{ opacity: 0, scale: 0.95 }}
// //                         transition={{ duration: 0.3 }}
// //                     >
// //                         <div className="flex justify-between items-center mb-4">
// //                             <h2 className="text-2xl font-bold text-gray-800">Roʻyxatdan oʻtish</h2>
// //                             <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
// //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //                                 </svg>
// //                             </button>
// //                         </div>
// //                         {fields.length === 0 ? (
// //                             <p className="text-gray-500 text-center">Maydonlar yuklanmoqda...</p>
// //                         ) : (
// //                             <form onSubmit={handleSubmit} className="space-y-4">
// //                                 {otherFields.map((field) => {
// //                                     if (
// //                                         (field.label === "Fakul'tetni tanlang (MEDICAL SCHOOL)" && !showMedicalFaculty) ||
// //                                         (field.label === "Fakul'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)" && !showBusinessFaculty) ||
// //                                         (field.label === "Ta'lim shakli (MEDICAL SCHOOL)" && !showMedicalFaculty) ||
// //                                         (field.label === "Ta'lim shakli (BUSINESS AND SOCIAL SCHOOL)" && !showBusinessFaculty)
// //                                     ) {
// //                                         return null;
// //                                     }

// //                                     const isConditionalField =
// //                                         field.label === "Fakul'tetni tanlang (MEDICAL SCHOOL)" ||
// //                                         field.label === "Fakul'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)" ||
// //                                         field.label === "Ta'lim shakli (MEDICAL SCHOOL)" ||
// //                                         field.label === "Ta'lim shakli (BUSINESS AND SOCIAL SCHOOL)";

// //                                     const isBitrixField = [
// //                                         'BITRIX - Телефон 1',
// //                                         'BITRIX - Телефон 2',
// //                                         'BITRIX - Форма обучения',
// //                                         'BITRIX - Направления',
// //                                     ].includes(field.label);

// //                                     return (
// //                                         <div
// //                                             key={field.id}
// //                                             className={`space-y-2 ${isConditionalField ? 'animate-field-appear' : ''} ${isBitrixField ? 'hidden' : ''}`}
// //                                         >
// //                                             <label className="block text-sm font-semibold text-gray-700">
// //                                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
// //                                             </label>
// //                                             {field.type === 'text' && (
// //                                                 <input
// //                                                     type="text"
// //                                                     value={formData[field.id] || ''}
// //                                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// //                                                     placeholder={field.placeholder || ''}
// //                                                     required={field.required === '1'}
// //                                                     maxLength={
// //                                                         field.label === 'Серия и номер паспорта'
// //                                                             ? 9
// //                                                             : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
// //                                                                 ? 13
// //                                                                 : field.label === 'Дата рождения'
// //                                                                     ? 10
// //                                                                     : undefined
// //                                                     }
// //                                                     className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'
// //                                                         }`}
// //                                                 />
// //                                             )}
// //                                             {field.type === 'select' && (
// //                                                 <select
// //                                                     value={formData[field.id] || ''}
// //                                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
// //                                                     required={field.required === '1'}
// //                                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white"
// //                                                 >
// //                                                     <option value="">{field.placeholder || '- Tanlang -'}</option>
// //                                                     {Object.values(field.choices).map((choice, index) => (
// //                                                         <option key={index} value={choice.label}>
// //                                                             {choice.label}
// //                                                         </option>
// //                                                     ))}
// //                                                 </select>
// //                                             )}
// //                                             {field.type === 'checkbox' && (
// //                                                 <div>
// //                                                     {Object.values(field.choices).map((choice, index) => (
// //                                                         <label key={index} className="flex items-center space-x-3">
// //                                                             <input
// //                                                                 type="checkbox"
// //                                                                 checked={formData[field.id]?.includes(choice.label) || false}
// //                                                                 onChange={(e) => {
// //                                                                     const checked = e.target.checked;
// //                                                                     const currentValues = formData[field.id] || [];
// //                                                                     const newValues = checked
// //                                                                         ? [...currentValues, choice.label]
// //                                                                         : currentValues.filter((v) => v !== choice.label);
// //                                                                     handleChange(field.id, newValues, field);
// //                                                                 }}
// //                                                                 required={field.required === '1' && !formData[field.id]?.length}
// //                                                                 className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
// //                                                             />
// //                                                             <span
// //                                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
// //                                                                 className="text-gray-700"
// //                                                             />
// //                                                         </label>
// //                                                     ))}
// //                                                 </div>
// //                                             )}
// //                                             {errors[field.id] && (
// //                                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
// //                                             )}
// //                                         </div>
// //                                     );
// //                                 })}
// //                                 {agreementField && (
// //                                     <div className="space-y-2">
// //                                         <label className="block text-sm font-semibold text-gray-700">
// //                                             {agreementField.label}{' '}
// //                                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
// //                                         </label>
// //                                         {agreementField.type === 'checkbox' && (
// //                                             <div>
// //                                                 {Object.values(agreementField.choices).map((choice, index) => (
// //                                                     <label key={index} className="flex items-center space-x-3">
// //                                                         <input
// //                                                             type="checkbox"
// //                                                             checked={formData[agreementField.id]?.includes(choice.label) || false}
// //                                                             onChange={(e) => {
// //                                                                 const checked = e.target.checked;
// //                                                                 const currentValues = formData[agreementField.id] || [];
// //                                                                 const newValues = checked
// //                                                                     ? [...currentValues, choice.label]
// //                                                                     : currentValues.filter((v) => v !== choice.label);
// //                                                                 handleChange(agreementField.id, newValues, agreementField);
// //                                                             }}
// //                                                             required={
// //                                                                 agreementField.required === '1' && !formData[agreementField.id]?.length
// //                                                             }
// //                                                             className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
// //                                                         />
// //                                                         <span
// //                                                             dangerouslySetInnerHTML={{ __html: choice.label }}
// //                                                             className="text-gray-700"
// //                                                         />
// //                                                     </label>
// //                                                 ))}
// //                                             </div>
// //                                         )}
// //                                         {errors[agreementField.id] && (
// //                                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
// //                                         )}
// //                                     </div>
// //                                 )}
// //                                 <button
// //                                     type="submit"
// //                                     className="w-full bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
// //                                 >
// //                                     Yuborish
// //                                 </button>
// //                             </form>
// //                         )}
// //                         {message && (
// //                             <p
// //                                 className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'
// //                                     } animate-fade-in`}
// //                             >
// //                                 {message}
// //                             </p>
// //                         )}
// //                     </motion.div>
// //                 </motion.div>
// //             )}
// //         </AnimatePresence>
// //     );
// // }




// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Popup() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [fields, setFields] = useState([]);
//     const [formData, setFormData] = useState({});
//     const [message, setMessage] = useState('');
//     const [errors, setErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false); // Новое состояние для успешной отправки
//     const [isSubmitting, setIsSubmitting] = useState(false); // Новое состояние для загрузки

//     const formId = 465;

//     // Соответствия для мед. факультетов
//     const mappingMed = {
//         'Стоматология': 'Стоматология | Стоматология',
//         'Фармация': 'Фармация | Фармация',
//         'Даволаш иши': 'Лечебное дело | Даволаш иши',
//         'Педиатрия': 'Педиатрия | Педиатрия',
//         'Олий ҳамширалик': 'Высшее медсестринское дело | Олий ҳамширалик',
//         'Халқ табобати': 'Народная медицина | Халқ табобати',
//         'Биотехнология': 'Биотехнология | Биотехнология',
//         'Тиббий-биологик иш': 'Медико-биологическое дело | Тиббий-биологик иш',
//         'Тиббий-профилактика иши': 'Медико-профилактическое дело | Тиббий-профилактика иши',
//         'Биология': 'Биология | Биология',
//         'Кимё': 'Химия | Кимё',
//         'Ветеринария иши': 'Ветеринарное дело | Ветеринария иши',
//         'Косметология': 'Косметология | Косметология',
//         'Фундаментал тиббиёт': 'Фундаментальная медицина | Фундаментал тиббиёт',
//     };

//     // Соответствия для бизнес факультетов
//     const mappingBus = {
//         'Архитектура': 'Архитектура | Архитектура',
//         'Интерьер дизайни': 'Дизайн интерьера | Интерьер дизайни',
//         'Мактабгача таълим': 'Дошкольное образование | Мактабгача таълим',
//         'Логистика': 'Логистика | Логистика',
//         'Маркетинг': 'Маркетинг | Маркетинг',
//         'Махсус педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
//         'Транспорт (автомобил транспорти)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
//         'Туризм': 'Туризм | Туризм',
//         'Бизнес бошқаруви': 'Управление бизнесом | Бизнес бошқаруви',
//         'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
//         'Молия ва молиявий технологиялар': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
//         'Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
//         'Менеджмент': 'Менеджмент | Менеджмент',
//         'Бошланғич таълим': 'Начальное образование | Бошланғич таълим',
//         'Психология': 'Психология | Психология',
//         'Педагогика': 'Педагогика | Педагогика',
//         'Солиқлар ва солиққа тортиш': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
//         'Банк иши': 'Банковское дело | Банк иши',
//         'Бухгалтерия хисоби': 'Бухгалтерский учет | Бухгалтерия хисоби',
//     };

//     // Соответствия для формы обучения
//     const mappingTime = {
//         '1 smena': 'Очная | Kunduzgi ta’lim',
//         '2 smena': 'Вечерняя | Kechki ta’lim',
//         'Kunduzgi ta’lim': 'Очная | Kunduzgi ta’lim',
//         'Kechki ta’lim': 'Вечерняя | Kechki ta’lim',
//         'Sirtqi ta’lim': 'Заочная | Sirtqi ta’lim'
//     };

//     // Функция для очистки номера телефона от специальных символов
//     const sanitizeInput = (value) => {
//         return value.replace(/[-()]/g, '');
//     };

//     // Обработчик кликов по триггерам
//     useEffect(() => {
//         const handleTriggerClick = (e) => {
//             if (e.target.closest('.pop-form-trigger')) {
//                 e.preventDefault();
//                 setIsOpen(true);
//                 setIsSubmitted(false); // Сбрасываем состояние при открытии
//                 setFormData({});
//                 setErrors({});
//                 setMessage('');
//             }
//         };

//         document.addEventListener('click', handleTriggerClick);
//         return () => {
//             document.removeEventListener('click', handleTriggerClick);
//         };
//     }, []);

//     // Управление скроллингом body
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isOpen]);

//     // Получение полей формы
//     useEffect(() => {
//         if (isOpen) {
//             async function fetchFormFields() {
//                 try {
//                     const res = await fetch(`https://admission.emuni.uz/wp-json/wpforms-api/v1/form/${formId}`);
//                     const data = await res.json();
//                     const fieldsArray = Object.values(data);
//                     setFields(fieldsArray);
//                 } catch (error) {
//                     console.error('Error fetching form fields:', error);
//                 }
//             }
//             fetchFormFields();
//         }
//     }, [isOpen]);

//     // Установка текущего URL в поле "Источник"
//     useEffect(() => {
//         if (isOpen) {
//             const sourceField = fields.find((f) => f.label === 'Источник');
//             if (sourceField) {
//                 setFormData(prevData => ({
//                     ...prevData,
//                     [sourceField.id]: window.location.href
//                 }));
//             }
//         }
//     }, [isOpen, fields]);

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

//         if (timeBitrixField && ((medTimeField && formData[medTimeField.id]) || (busTimeField && formData[busTimeField.id]))) {
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

//     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
//     const validatePassport = (value) => /^[a-z]{2}\d{6}$/i.test(value);

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
//         const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 6);
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
//                 newErrors[fieldId] = 'Введите паспорт в формате aa999999 (две латинские буквы и 6 цифр).';
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

//     const handleOverlayClick = (e) => {
//         if (e.target === e.currentTarget) {
//             setIsOpen(false);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (Object.keys(errors).length > 0) {
//             setMessage('Пожалуйста, исправьте ошибки в форме.');
//             return;
//         }

//         setIsSubmitting(true); // Включаем состояние загрузки
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
//                 setIsSubmitted(true); // Переключаем на уведомление
//                 setFormData({});
//                 setErrors({});
//                 setMessage(''); // Очищаем старое сообщение
//             } else {
//                 setMessage(`Ошибка: ${result.message || 'Неизвестная ошибка'}`);
//             }
//         } catch (error) {
//             console.error('Submit error:', error);
//             setMessage('Ошибка сети.');
//         } finally {
//             setIsSubmitting(false); // Выключаем загрузку
//         }
//     };

//     const directionField = fields.find((f) => f.label === 'Выберите направление');
//     const directionValue = formData[directionField?.id] || '';
//     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
//     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

//     const agreementField = fields.find((f) => f.label === 'Соглашение');
//     const otherFields = fields.filter((f) => f.label !== 'Соглашение');

//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <motion.div
//                     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     onClick={handleOverlayClick}
//                 >
//                     <motion.div
//                         className="bg-white p-9 rounded-xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-2xl font-bold text-gray-800">Регистрация</h2>
//                             <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                         {isSubmitted ? (
//                             <div className="text-center space-y-6">
//                                 <p className="text-xl font-semibold text-green-600">
//                                     Заявка успешно отправлена, ожидайте!
//                                 </p>
//                                 <button
//                                     onClick={() => setIsOpen(false)}
//                                     className="bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
//                                 >
//                                     Закрыть
//                                 </button>
//                             </div>
//                         ) : fields.length === 0 ? (
//                             <p className="text-gray-500 text-center">Загрузка полей...</p>
//                         ) : (
//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 {otherFields.map((field) => {
//                                     if (
//                                         (field.label === 'Выберите факультет (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                                         (field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
//                                         (field.label === 'Форма обучения (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                                         (field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
//                                     ) {
//                                         return null;
//                                     }

//                                     const isConditionalField =
//                                         field.label === 'Выберите факультет (MEDICAL SCHOOL)' ||
//                                         field.label === 'Выберите факультет (BUSINESS AND SOCIAL SCHOOL)' ||
//                                         field.label === 'Форма обучения (MEDICAL SCHOOL)' ||
//                                         field.label === 'Форма обучения (BUSINESS AND SOCIAL SCHOOL)';

//                                     const isBitrixField = [
//                                         'BITRIX - Телефон 1',
//                                         'BITRIX - Телефон 2',
//                                         'BITRIX - Форма обучения',
//                                         'BITRIX - Направления',
//                                         'Источник'
//                                     ].includes(field.label);

//                                     return (
//                                         <div
//                                             key={field.id}
//                                             className={`space-y-2 ${isConditionalField ? 'animate-field-appear' : ''} ${isBitrixField ? 'hidden' : ''}`}
//                                         >
//                                             <label className="block text-sm font-semibold text-gray-700">
//                                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
//                                             </label>
//                                             {field.type === 'text' && (
//                                                 <input
//                                                     type="text"
//                                                     value={formData[field.id] || ''}
//                                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                                     placeholder={field.placeholder || ''}
//                                                     required={field.required === '1'}
//                                                     maxLength={
//                                                         field.label === 'Серия и номер паспорта'
//                                                             ? 8
//                                                             : field.label === 'Номер телефона' || field.label === 'Дополнительный номер'
//                                                                 ? 13
//                                                                 : field.label === 'Дата рождения'
//                                                                     ? 10
//                                                                     : undefined
//                                                     }
//                                                     className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
//                                                 />
//                                             )}
//                                             {field.type === 'select' && (
//                                                 <select
//                                                     value={formData[field.id] || ''}
//                                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                                     required={field.required === '1'}
//                                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 bg-white"
//                                                 >
//                                                     <option value="">{field.placeholder || '- Выбрать -'}</option>
//                                                     {Object.values(field.choices).map((choice, index) => (
//                                                         <option key={index} value={choice.label}>
//                                                             {choice.label}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             )}
//                                             {field.type === 'checkbox' && (
//                                                 <div>
//                                                     {Object.values(field.choices).map((choice, index) => (
//                                                         <label key={index} className="flex items-center space-x-3">
//                                                             <input
//                                                                 type="checkbox"
//                                                                 checked={formData[field.id] === '1'}
//                                                                 onChange={(e) => handleChange(field.id, e.target.checked, field)}
//                                                                 required={field.required === '1' && formData[field.id] !== '1'}
//                                                                 className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
//                                                             />
//                                                             <span
//                                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
//                                                                 className="text-gray-700"
//                                                             />
//                                                         </label>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                             {errors[field.id] && (
//                                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                                 {agreementField && (
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-semibold text-gray-700">
//                                             {agreementField.label}{' '}
//                                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
//                                         </label>
//                                         {agreementField.type === 'checkbox' && (
//                                             <div>
//                                                 {Object.values(agreementField.choices).map((choice, index) => (
//                                                     <label key={index} className="flex items-center space-x-3">
//                                                         <input
//                                                             type="checkbox"
//                                                             checked={formData[agreementField.id] === '1'}
//                                                             onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
//                                                             required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
//                                                             className="h-5 w-5 text-blue-600 border-gray-300 rounded transition-all duration-200 focus:ring-2 focus:ring-blue-300"
//                                                         />
//                                                         <span
//                                                             dangerouslySetInnerHTML={{ __html: choice.label }}
//                                                             className="text-gray-700"
//                                                         />
//                                                     </label>
//                                                 ))}
//                                             </div>
//                                         )}
//                                         {errors[agreementField.id] && (
//                                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
//                                         )}
//                                     </div>
//                                 )}
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`w-full p-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center
//                                         ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#631463] hover:bg-[#500f50] text-white'}`}
//                                 >
//                                     {isSubmitting ? (
//                                         <>
//                                             <svg
//                                                 className="animate-spin h-5 w-5 mr-2 text-white"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <circle
//                                                     className="opacity-25"
//                                                     cx="12"
//                                                     cy="12"
//                                                     r="10"
//                                                     stroke="currentColor"
//                                                     strokeWidth="4"
//                                                 ></circle>
//                                                 <path
//                                                     className="opacity-75"
//                                                     fill="currentColor"
//                                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                                 ></path>
//                                             </svg>
//                                             Отправка...
//                                         </>
//                                     ) : (
//                                         'Отправить'
//                                     )}
//                                 </button>
//                             </form>
//                         )}
//                         {message && !isSubmitted && (
//                             <p
//                                 className={`mt-4 text-center font-medium ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
//                             >
//                                 {message}
//                             </p>
//                         )}
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }



import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formId = 465;

    // Соответствия для мед. факультетов
    const mappingMed = {
        'Стоматология': 'Стоматология | Стоматология',
        'Фармация': 'Фармация | Фармация',
        'Даволаш иши': 'Лечебное дело | Даволаш иши',
        'Педиатрия': 'Педиатрия | Педиатрия',
        'Олий ҳамширалик': 'Высшее медсестринское дело | Олий ҳамширалик',
        'Халқ табобати': 'Народная медицина | Халқ табобати',
        'Биотехнология': 'Биотехнология | Биотехнология',
        'Тиббий-биологик иш': 'Медико-биологическое дело | Тиббий-биологик иш',
        'Тиббий-профилактика иши': 'Медико-профилактическое дело | Тиббий-профилактика иши',
        'Биология': 'Биология | Биология',
        'Кимё': 'Химия | Кимё',
        'Ветеринария иши': 'Ветеринарное дело | Ветеринария иши',
        'Косметология': 'Косметология | Косметология',
        'Фундаментал тиббиёт': 'Фундаментальная медицина | Фундаментал тиббиёт',
    };

    // Соответствия для бизнес факультетов
    const mappingBus = {
        'Архитектура': 'Архитектура | Архитектура',
        'Интерьер дизайни': 'Дизайн интерьера | Интерьер дизайни',
        'Мактабгача таълим': 'Дошкольное образование | Мактабгача таълим',
        'Логистика': 'Логистика | Логистика',
        'Маркетинг': 'Маркетинг | Маркетинг',
        'Махсус педагогика (логопедия)': 'Специальная педагогика (логопедия) | Махсус педагогика (логопедия)',
        'Транспорт (автомобил транспорти)': 'Транспорт (автомобильный транспорт) | Транспорт (автомобил транспорти)',
        'Туризм': 'Туризм | Туризм',
        'Бизнес бошқаруви': 'Управление бизнесом | Бизнес бошқаруви',
        'Филология и лингвистика': 'Филология и лингвистика | Филология и лингвистика',
        'Молия ва молиявий технологиялар': 'Финансы и финансовые технологии | Молия ва молиявий технологиялар',
        'Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)': 'Экономика (по отраслям и секторам обслуживания) | Иқтисодиёт (саноат ва хизмат кўрсатиш соҳалари бўйича)',
        'Менеджмент': 'Менеджмент | Менеджмент',
        'Бошланғич таълим': 'Начальное образование | Бошланғич таълим',
        'Психология': 'Психология | Психология',
        'Педагогика': 'Педагогика | Педагогика',
        'Солиқлар ва солиққа тортиш': 'Налоги и налогообложение | Солиқлар ва солиққа тортиш',
        'Банк иши': 'Банковское дело | Банк иши',
        'Бухгалтерия хисоби': 'Бухгалтерский учет | Бухгалтерия хисоби',
    };

    // Соответствия для формы обучения
    const mappingTime = {
        '1 smena': 'Очная | Kunduzgi ta’lim',
        '2 smena': 'Вечерняя | Kechki ta’lim',
        'Kunduzgi ta’lim': 'Очная | Kunduzgi ta’lim',
        'Kechki ta’lim': 'Вечерняя | Kechki ta’lim',
        'Sirtqi ta’lim': 'Заочная | Sirtqi ta’lim'
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
                setIsSubmitted(false);
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

    // Получение полей формы
    useEffect(() => {
        if (isOpen) {
            async function fetchFormFields() {
                try {
                    const res = await fetch(`https://admission.emuni.uz/wp-json/wpforms-api/v1/form/${formId}`);
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

        const medFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)');
        const busFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)');
        const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
        const medTimeField = fields.find(f => f.label === 'Ta\'lim shakli (MEDICAL SCHOOL)');
        const busTimeField = fields.find(f => f.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)');
        const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
        const phone1Field = fields.find(f => f.label === 'Telefon raqamingiz');
        const phone2Field = fields.find(f => f.label === 'Q\'oshimcha telefon raqam');
        const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
        const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

        if (!updatedFormData) {
            updatedFormData = { ...formData };
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

        if (timeBitrixField && ((medTimeField && formData[medTimeField.id]) || (busTimeField && formData[busTimeField.id]))) {
            const medTimeValue = formData[medTimeField?.id];
            const busTimeValue = formData[busTimeField?.id];
            let timeValue = 'Очная | Kunduzgi ta\'lim';
            if (medTimeValue && mappingTime[medTimeValue]) {
                timeValue = (mappingTime[medTimeValue]);
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

        if (field.label === 'Ism' || field.label === 'Familiya') {
            if (!validateLatinAndSpaces(value)) {
                newErrors[fieldId] = 'Iltimos, faqat lotin harflari va bo\'shliqlarni kiriting.';
            } else {
                delete newErrors[fieldId];
            }
            updatedFormData[fieldId] = newValue;
        } else if (field.label === 'Tug\'ilgan sana') {
            newValue = formatDate(value);
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (value && !dateRegex.test(newValue)) {
                newErrors[fieldId] = 'Sanani dd/mm/yyyy formatida kiriting.';
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
                newErrors[fieldId] = 'Pasportni aa1234567 formatida kiriting (ikkita lotin harfi va 7 ta raqam).';
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
                newErrors[fieldId] = 'Ushbu maydon majburiy.';
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
            setMessage('Iltimos, formada xatolarni tuzating.');
            return;
        }

        setIsSubmitting(true);
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
                setIsSubmitted(true);
                setFormData({});
                setErrors({});
                setMessage('');
            } else {
                setMessage(`Xato: ${result.message || 'Noma\'lum xato'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            setMessage('Tarmoq xatosi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const directionField = fields.find((f) => f.label === 'Yo\'nalishni tanlang');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

    const agreementField = fields.find((f) => f.label === 'Shartnoma');
    const otherFields = fields.filter((f) => f.label !== 'Shartnoma');

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
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
                            <h2 className="text-2xl font-bold text-gray-800">Ro'yxatdan o'tish</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
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
                                    onClick={() => setIsOpen(false)}
                                    className="bg-[#631463] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
                                >
                                    Yopish
                                </button>
                            </div>
                        ) : fields.length === 0 ? (
                            <p className="text-gray-500 text-center">Maydonlar yuklanmoqda...</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {otherFields.map((field) => {
                                    if (
                                        (field.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                                        (field.label === 'Ta\'lim shakli (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                                        (field.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
                                    ) {
                                        return null;
                                    }

                                    const isConditionalField =
                                        field.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)' ||
                                        field.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)' ||
                                        field.label === 'Ta\'lim shakli (MEDICAL SCHOOL)' ||
                                        field.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)';

                                    const isBitrixField = [
                                        'BITRIX - Телефон 1',
                                        'BITRIX - Телефон 2',
                                        'BITRIX - Форма обучения',
                                        'BITRIX - Направления',
                                        'Источник'
                                    ].includes(field.label);

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
                                                        field.label === 'Pasport seriyasi va raqami'
                                                            ? 9
                                                            : field.label === 'Telefon raqamingiz' || field.label === `Qo'shimcha telefon raqam`
                                                                ? 13
                                                                : field.label === 'Tug\'ilgan sana'
                                                                    ? 10
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
                                    ${isSubmitting ? 'bg-[#631463] opacity-50 cursor-not-allowed text-white' : 'bg-[#631463] hover:bg-[#500f50] text-white'}`}
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
                                className={`mt-4 text-center font-medium ${message.includes('muvaffaqiyatli') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
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