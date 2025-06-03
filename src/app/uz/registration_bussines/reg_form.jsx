// 'use client';

// import { useState, useEffect } from 'react';

// export default function RegistrationForm() {
//     // States for the form
//     const [fields, setFields] = useState([]);
//     const [formData, setFormData] = useState({});
//     const [message, setMessage] = useState('');
//     const [errors, setErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const formId = 465;

//     // Mappings for medical faculties
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

//     // Mappings for business faculties
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

//     // Mappings for study types
//     const mappingTime = {
//         '1 smena': 'Очная | Kunduzgi ta’lim',
//         '2 smena': 'Вечерняя | Kechki ta’lim',
//         'Kunduzgi ta’lim': 'Очная | Kunduzgi ta’lim',
//         'Kechki ta’lim': 'Вечерняя | Kechki ta’lim',
//         'Sirtqi ta’lim': 'Заочная | Sirtqi ta’lim'
//     };

//     // Function to sanitize phone numbers
//     const sanitizeInput = (value) => {
//         return value.replace(/[-()]/g, '');
//     };

//     // Fetch form fields on component mount
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

//     // Set current URL to "Источник" field
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

//     // Synchronize data between related fields
//     useEffect(() => {
//         if (fields.length === 0) return;

//         let updatedFormData = { ...formData };
//         let needUpdate = false;

//         const medFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)');
//         const busFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)');
//         const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
//         const medTimeField = fields.find(f => f.label === 'Ta\'lim shakli (MEDICAL SCHOOL)');
//         const busTimeField = fields.find(f => f.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)');
//         const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
//         const phone1Field = fields.find(f => f.label === 'Telefon raqamingiz');
//         const phone2Field = fields.find(f => f.label === `Qo'shimcha telefon raqam`);
//         const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
//         const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

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
//             let timeValue = 'Очная | Kunduzgi ta\'lim';
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

//     // Validation functions
//     const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
//     const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
//     const validatePINFL = (value) => /^\d{14}$/.test(value);

//     // Formatting functions
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

//         if (field.label === 'Ism' || field.label === 'Familiya') {
//             if (!validateLatinAndSpaces(value)) {
//                 newErrors[fieldId] = 'Iltimos, faqat lotin harflari va bo\'shliqlarni kiriting.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Tug\'ilgan sana') {
//             newValue = formatDate(value);
//             const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
//             if (value && !dateRegex.test(newValue)) {
//                 newErrors[fieldId] = 'Sanani dd/mm/yyyy formatida kiriting.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Telefon raqamingiz' || field.label === `Qo'shimcha telefon raqam`) {
//             newValue = formatPhone(value);
//             const phoneRegex = /^\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
//             if (field.required === '1' && value && !phoneRegex.test(newValue)) {
//                 newErrors[fieldId] = 'Raqamni (99)999-99-99 formatida kiriting.';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'Pasport seriyasi va raqami') {
//             newValue = formatPassport(value);
//             if (value && !validatePassport(newValue)) {
//                 newErrors[fieldId] = 'Pasportni aa1234567 formatida kiriting (ikkita lotin harfi va 7 ta raqam).';
//             } else {
//                 delete newErrors[fieldId];
//             }
//             updatedFormData[fieldId] = newValue;
//         } else if (field.label === 'JShShIR') {
//             newValue = value.replace(/\D/g, '').slice(0, 14);
//             if (field.required === '1' && value && !validatePINFL(newValue)) {
//                 newErrors[fieldId] = 'JShShIR aynan 14 ta raqamdan iborat bo‘lishi kerak.';
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
//                 newErrors[fieldId] = 'Ushbu maydon majburiy.';
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
//             setMessage('Iltimos, formada xatolarni tuzating.');
//             return;
//         }

//         setIsSubmitting(true);
//         console.log('Yuborilayotgan ma\'lumotlar:', JSON.stringify({ form_id: formId, fields: formData }));

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
//             } else {
//                 setMessage(`Xato: ${result.message || 'Noma\'lum xato'}`);
//             }
//         } catch (error) {
//             console.error('Submit error:', error);
//             setMessage('Tarmoq xatosi.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // Conditional field display logic
//     const directionField = fields.find((f) => f.label === 'Yo\'nalishni tanlang');
//     const directionValue = formData[directionField?.id] || '';
//     const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
//     const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

//     const agreementField = fields.find((f) => f.label === 'Shartnoma');
//     const otherFields = fields.filter((f) => f.label !== 'Shartnoma');

//     if (isSubmitted) {
//         return (
//             <div className="text-center space-y-6">
//                 <p className="text-xl font-semibold text-green-600">
//                     Ariza muvaffaqiyatli yuborildi, kuting!
//                 </p>
//                 <button
//                     onClick={() => {
//                         setIsSubmitted(false);
//                         setFormData({});
//                         setErrors({});
//                         setMessage('');
//                     }}
//                     className="bg-[#6b0e55] text-white p-3 rounded-lg shadow-md hover:bg-[#500f50] transition-all duration-300 transform hover:scale-105"
//                 >
//                     Yangi ariza yaratish
//                 </button>
//             </div>
//         );
//     }

//     if (isLoading) {
//         return (
//             <div className="flex flex-col items-center justify-center py-8">
//                 <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 <p className="text-[#6b0e55] text-lg">Maydonlar yuklanmoqda...</p>
//             </div>
//         );
//     }

//     if (fields.length === 0) {
//         return <p className="text-gray-500 text-center">Maydonlar yuklanmoqda...</p>;
//     }

//     return (
//         <div className="space-y-4">
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {otherFields.map((field) => {
//                     if (
//                         (field.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                         (field.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
//                         (field.label === 'Ta\'lim shakli (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
//                         (field.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty)
//                     ) {
//                         return null;
//                     }

//                     const isBitrixField = [
//                         'BITRIX - Телефон 1',
//                         'BITRIX - Телефон 2',
//                         'BITRIX - Форма обучения',
//                         'BITRIX - Направления',
//                         'Источник'
//                     ].includes(field.label);

//                     if (isBitrixField) return null;

//                     return (
//                         <div key={field.id} className="space-y-2">
//                             <label className="block text-sm font-semibold text-gray-700">
//                                 {field.label} {field.required === '1' && <span className="text-red-500">*</span>}
//                             </label>
//                             {field.type === 'text' && (
//                                 <input
//                                     type="text"
//                                     value={formData[field.id] || ''}
//                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                     placeholder={field.placeholder || ''}
//                                     required={field.required === '1'}
//                                     maxLength={
//                                         field.label === 'Pasport seriyasi va raqami'
//                                             ? 9
//                                             : field.label === 'Telefon raqamingiz' || field.label === `Qo'shimcha telefon raqam`
//                                                 ? 13
//                                                 : field.label === 'Tug\'ilgan sana'
//                                                     ? 10
//                                                     : field.label === 'JShShIR'
//                                                         ? 14
//                                                         : undefined
//                                     }
//                                     className={`w-full border border-[#f9eef5] rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] hover:border-[#8f3178] transition-all duration-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
//                                 />
//                             )}
//                             {field.type === 'select' && (
//                                 <select
//                                     value={formData[field.id] || ''}
//                                     onChange={(e) => handleChange(field.id, e.target.value, field)}
//                                     required={field.required === '1'}
//                                     className="w-full border border-[#f9eef5] rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] hover:border-[#8f3178] transition-all duration-300 appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
//                                 >
//                                     <option value="">{field.placeholder || '- Tanlang -'}</option>
//                                     {Object.values(field.choices).map((choice, index) => (
//                                         <option key={index} value={choice.label}>
//                                             {choice.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             )}
//                             {field.type === 'checkbox' && (
//                                 <div>
//                                     {Object.values(field.choices).map((choice, index) => (
//                                         <label key={index} className="flex items-center space-x-3">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={formData[field.id] === '1'}
//                                                 onChange={(e) => handleChange(field.id, e.target.checked, field)}
//                                                 required={field.required === '1' && formData[field.id] !== '1'}
//                                                 className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
//                                             />
//                                             <span
//                                                 dangerouslySetInnerHTML={{ __html: choice.label }}
//                                                 className="text-gray-700"
//                                             />
//                                         </label>
//                                     ))}
//                                 </div>
//                             )}
//                             {errors[field.id] && (
//                                 <p className="text-red-500 text-sm animate-pulse">{errors[field.id]}</p>
//                             )}
//                         </div>
//                     );
//                 })}

//                 {agreementField && (
//                     <div className="space-y-2">
//                         <label className="block text-sm font-semibold text-gray-700">
//                             {agreementField.label}{' '}
//                             {agreementField.required === '1' && <span className="text-red-500">*</span>}
//                         </label>
//                         {agreementField.type === 'checkbox' && (
//                             <div>
//                                 {Object.values(agreementField.choices).map((choice, index) => (
//                                     <label key={index} className="flex items-center space-x-3">
//                                         <input
//                                             type="checkbox"
//                                             checked={formData[agreementField.id] === '1'}
//                                             onChange={(e) => handleChange(agreementField.id, e.target.checked, agreementField)}
//                                             required={agreementField.required === '1' && formData[agreementField.id] !== '1'}
//                                             className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6]"
//                                         />
//                                         <span
//                                             dangerouslySetInnerHTML={{ __html: choice.label }}
//                                             className="text-gray-700"
//                                         />
//                                     </label>
//                                 ))}
//                             </div>
//                         )}
//                         {errors[agreementField.id] && (
//                             <p className="text-red-500 text-sm animate-pulse">{errors[agreementField.id]}</p>
//                         )}
//                     </div>
//                 )}

//                 <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center
//                 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
//                 >
//                     {isSubmitting ? (
//                         <>
//                             <svg
//                                 className="animate-spin h-5 w-5 mr-2 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                 ></path>
//                             </svg>
//                             Yuborilmoqda...
//                         </>
//                     ) : (
//                         'Menga qo\'ng\'iroq qiling!'
//                     )}
//                 </button>
//             </form>

//             {message && !isSubmitted && (
//                 <p
//                     className={`mt-4 text-center font-medium ${message.includes('muvaffaqiyatli') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
//                 >
//                     {message}
//                 </p>
//             )}
//         </div>
//     );
// }


'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationForm() {
    // States for the form
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const formId = 465;
    const router = useRouter();

    // Mappings for medical faculties
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

    // Mappings for business faculties
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

    // Mappings for study types
    const mappingTime = {
        '1 smena': 'Очная | Kunduzgi ta’lim',
        '2 smena': 'Вечерняя | Kechki ta’lim',
        'Kunduzgi ta’lim': 'Очная | Kunduzgi ta’lim',
        'Kechki ta’lim': 'Вечерняя | Kechki ta’lim',
        'Sirtqi ta’lim': 'Заочная | Sirtqi ta’lim'
    };

    // Function to sanitize phone numbers
    const sanitizeInput = (value) => {
        return value.replace(/[-()]/g, '');
    };

    // Fetch form fields on component mount
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

    // Set current URL to "Источник" field
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

    // Synchronize data between related fields
    useEffect(() => {
        if (fields.length === 0) return;

        let updatedFormData = { ...formData };
        let needUpdate = false;

        const medFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)');
        const busFacultyField = fields.find(f => f.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)');
        const directionBitrixField = fields.find(f => f.label === 'BITRIX - Направления');
        const medTimeField = fields.find(f => f.label === 'Ta\'lim shakli (MEDICAL SCHOOL)');
        const busTimeField = fields.find(f => f.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)');
        const timeBitrixField = fields.find(f => f.label === 'BITRIX - Форма обучения');
        const phone1Field = fields.find(f => f.label === 'Telefon raqamingiz');
        const phone2Field = fields.find(f => f.label === `Qo'shimcha telefon raqam`);
        const bitrixPhone1Field = fields.find(f => f.label === 'BITRIX - Телефон 1');
        const bitrixPhone2Field = fields.find(f => f.label === 'BITRIX - Телефон 2');

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
            let timeValue = 'Очная | Kunduzgi ta\'lim';
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

    // Validation functions
    const validateLatinAndSpaces = (value) => /^[A-Za-z\s]*$/.test(value);
    const validatePassport = (value) => /^[a-z]{2}\d{7}$/i.test(value);
    const validatePINFL = (value) => /^\d{14}$/.test(value);

    // Formatting functions
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
        } else if (field.label === 'JShShIR') {
            newValue = value.replace(/\D/g, '').slice(0, 14);
            if (field.required === '1' && value && !validatePINFL(newValue)) {
                newErrors[fieldId] = `JShShIR aynan 14 ta raqamdan iborat bo'lishi kerak.`;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setMessage('Iltimos, formada xatolarni tuzating.');
            return;
        }

        setIsSubmitting(true);
        console.log('Yuborilayotgan ma\'lumotlar:', JSON.stringify({ form_id: formId, fields: formData }));

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
                // Редирект на страницу успеха
                setTimeout(() => {
                    router.push('/uz/success');
                }, 0);
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

    // Conditional field display logic
    const directionField = fields.find((f) => f.label === 'Yo\'nalishni tanlang');
    const directionValue = formData[directionField?.id] || '';
    const showMedicalFaculty = directionValue === 'MEDICAL SCHOOL';
    const showBusinessFaculty = directionValue === 'BUSINESS AND SOCIAL SCHOOL';

    const agreementField = fields.find((f) => f.label === 'Shartnoma');
    const otherFields = fields.filter((f) => f.label !== 'Shartnoma');

    if (isSubmitted) {
        return (
            <div className="text-center space-y-6">
                <p className="text-xl font-semibold text-green-600">
                    Ariza muvaffaqiyatli yuborildi, kuting!
                </p>
                <p className="text-gray-600">
                    Siz bir necha soniya ichida yo'naltirilasiz...
                </p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-8">
                <svg className="animate-spin h-10 w-10 text-[#6b0e55] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-[#6b0e55] text-lg">Maydonlar yuklanmoqda...</p>
            </div>
        );
    }

    if (fields.length === 0) {
        return <p className="text-gray-500 text-center">Maydonlar yuklanmoqda...</p>;
    }

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                {otherFields.map((field) => {
                    if (
                        (field.label === 'Fakul\'tetni tanlang (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                        (field.label === 'Fakul\'tetni tanlang (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
                        (field.label === 'Ta\'lim shakli (MEDICAL SCHOOL)' && !showMedicalFaculty) ||
                        (field.label === 'Ta\'lim shakli (BUSINESS AND SOCIAL SCHOOL)' && !showBusinessFaculty) ||
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
                        <div key={field.id} className="space-y-2">
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
                                                    : field.label === 'JShShIR'
                                                        ? 14
                                                        : undefined
                                    }
                                    className={`w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
                                />
                            )}
                            {field.type === 'select' && (
                                <select
                                    value={formData[field.id] || ''}
                                    onChange={(e) => handleChange(field.id, e.target.value, field)}
                                    required={field.required === '1'}
                                    className="w-full border border-[#f9eef5] rounded-lg p-3 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 appearance-none bg-[url('/images/icons/arrow.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:16px_16px]"
                                >
                                    <option value="">{field.placeholder || '- Tanlang -'}</option>
                                    {Object.values(field.choices)
                                        .filter(choice => {
                                            // Скрываем "INTERNATIONAL" только для поля "Выберите направление"
                                            if (field.label === "Yo'nalishni tanlang" && choice.label === 'INTERNATIONAL') {
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
                                                className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6] focus-visible:outline-none"
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
                                            className="h-5 w-5 text-[#6b0e55] border-gray-300 rounded transition-all duration-200 focus:ring-1 focus:ring-[#3b82f6] focus-visible:outline-none"
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
                    className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 transform flex items-center justify-center
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
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
                        'Menga qo\'ng\'iroq qiling!'
                    )}
                </button>
            </form>

            {message && !isSubmitted && (
                <p
                    className={`mt-4 text-center font-medium ${message.includes('muvaffaqiyatli') ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}