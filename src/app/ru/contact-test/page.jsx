'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Мок данные для проверки
const MOCK_USERS = [
    {
        passport: 'AB1234567',
        pinfl: '12345678901234',
        phone: '+998(90)123-45-67',
        name: 'Иван Иванов',
        contractNumber: 'EMU-2025-001',
        faculty: 'MEDICAL SCHOOL',
        direction: 'Лечебное дело'
    },
    {
        passport: 'CD7890123',
        pinfl: '98765432109876',
        phone: '+998(90)765-43-21',
        name: 'Мария Петрова',
        contractNumber: 'EMU-2025-002',
        faculty: 'BUSINESS AND SOCIAL SCHOOL',
        direction: 'Управление бизнесом'
    }
];

const MOCK_OTP = '123456'; // Мок OTP код

export default function ContractPage() {
    const [step, setStep] = useState(1); // 1 - данные, 2 - OTP, 3 - контракт
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [userInfo, setUserInfo] = useState(null);

    // Форма данных
    const [formData, setFormData] = useState({
        passport: '',
        pinfl: '',
        phone: ''
    });

    // OTP код
    const [otpCode, setOtpCode] = useState('');
    const [otpTimer, setOtpTimer] = useState(60);
    const [canResendOtp, setCanResendOtp] = useState(false);

    // Таймер для OTP
    useEffect(() => {
        if (step === 2 && otpTimer > 0) {
            const timer = setTimeout(() => {
                setOtpTimer(otpTimer - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (otpTimer === 0) {
            setCanResendOtp(true);
        }
    }, [otpTimer, step]);

    // Глобальные стили
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      header, footer {
        display: none;
      }
      body {
        padding: 0px !important;
        background: linear-gradient(135deg, #6b0e55 0%, #8f3178 100%);
        min-height: 100vh;
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      .fade-out {
        animation: fadeOut 0.5s ease-out forwards;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .pulse-animation {
        animation: pulse 2s infinite;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Валидация
    const validatePassport = (value) => /^[A-Za-z]{2}\d{7}$/i.test(value);
    const validatePINFL = (value) => /^\d{14}$/.test(value);
    const validatePhone = (value) => /^\+998\(\d{2}\)\d{3}-\d{2}-\d{2}$/.test(value);

    // Форматирование
    const formatPassport = (value) => {
        const cleaned = value.replace(/[^a-z0-9]/gi, '');
        const letters = cleaned.slice(0, 2).toUpperCase();
        const numbers = cleaned.slice(2).replace(/\D/g, '').slice(0, 7);
        return letters + numbers;
    };

    const formatPhone = (value) => {
        const cleaned = value.replace(/\D/g, '');
        if (!cleaned.startsWith('998')) return '+998';

        const withoutCountry = cleaned.slice(3);
        const formatted = withoutCountry.slice(0, 9);

        let result = '+998';
        if (formatted.length >= 2) result += `(${formatted.slice(0, 2)})`;
        if (formatted.length >= 5) result += formatted.slice(2, 5);
        if (formatted.length >= 7) result += `-${formatted.slice(5, 7)}`;
        if (formatted.length >= 9) result += `-${formatted.slice(7, 9)}`;

        return result;
    };

    const handleInputChange = (field, value) => {
        let newValue = value;
        let newErrors = { ...errors };

        if (field === 'passport') {
            newValue = formatPassport(value);
            if (newValue && !validatePassport(newValue)) {
                newErrors[field] = 'Введите паспорт в формате AA1234567';
            } else {
                delete newErrors[field];
            }
        } else if (field === 'pinfl') {
            newValue = value.replace(/\D/g, '').slice(0, 14);
            if (newValue && !validatePINFL(newValue)) {
                newErrors[field] = 'ПИНФЛ должен содержать 14 цифр';
            } else {
                delete newErrors[field];
            }
        } else if (field === 'phone') {
            newValue = formatPhone(value);
            if (newValue.length > 4 && !validatePhone(newValue)) {
                newErrors[field] = 'Введите номер в формате +998(XX)XXX-XX-XX';
            } else {
                delete newErrors[field];
            }
        }

        setFormData(prev => ({ ...prev, [field]: newValue }));
        setErrors(newErrors);
    };

    const handleSubmitData = async (e) => {
        e.preventDefault();

        // Валидация
        const newErrors = {};
        if (!validatePassport(formData.passport)) {
            newErrors.passport = 'Неверный формат паспорта';
        }
        if (!validatePINFL(formData.pinfl)) {
            newErrors.pinfl = 'Неверный формат ПИНФЛ';
        }
        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Неверный формат телефона';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        // Имитация запроса к серверу
        setTimeout(() => {
            const user = MOCK_USERS.find(u =>
                u.passport.toLowerCase() === formData.passport.toLowerCase() &&
                u.pinfl === formData.pinfl &&
                u.phone === formData.phone
            );

            if (user) {
                setUserInfo(user);
                setStep(2);
                setOtpTimer(60);
                setCanResendOtp(false);
            } else {
                setErrors({ general: 'Пользователь с такими данными не найден' });
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        if (otpCode !== MOCK_OTP) {
            setErrors({ otp: 'Неверный код подтверждения' });
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setStep(3);
            setIsLoading(false);
        }, 1000);
    };

    const resendOtp = () => {
        setOtpTimer(60);
        setCanResendOtp(false);
        setOtpCode('');
        setErrors({});
    };

    const downloadContract = () => {
        // Имитация скачивания файла
        const element = document.createElement('a');
        const file = new Blob(['Contract content would be here'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        element.href = URL.createObjectURL(file);
        element.download = `Contract_${userInfo?.contractNumber}.docx`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#6b0e55] to-[#8f3178] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#f9eef5] blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-white blur-3xl opacity-10"></div>
                {/* <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#6b0e55] blur-xl opacity-30"></div> */}
            </div>

            {/* Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center hidden">
                <div className="flex items-center">
                    <img
                        src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/new_emu_logo-min.png"
                        alt="EMU Logo"
                        className="h-8 md:h-10 w-auto"
                    />
                </div>
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Назад</span>
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="pt-20 pb-8">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex justify-center items-center space-x-8">
                        {[1, 2, 3].map((stepNumber) => (
                            <div key={stepNumber} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= stepNumber
                                    ? 'bg-white text-[#6b0e55]'
                                    : 'bg-white/20 text-white'
                                    }`}>
                                    {step > stepNumber ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        stepNumber
                                    )}
                                </div>
                                {stepNumber < 3 && (
                                    <div className={`w-20 h-0.5 transition-all duration-300 ${step > stepNumber ? 'bg-white' : 'bg-white/20'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <p className="text-white/80 text-center">
                            {step === 1 && 'Введите ваши данные'}
                            {step === 2 && 'Подтвердите номер телефона'}
                            {step === 3 && 'Скачайте ваш контракт'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-2xl mx-auto px-4 pb-20">
                <AnimatePresence mode="wait">
                    {/* Step 1: Personal Data */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-[30px] p-8 shadow-2xl border-2 border-[#f9eef5] relative z-[99999]"
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    Получение контракта
                                </h1>
                                <p className="text-gray-600">
                                    Введите ваши паспортные данные и ПИНФЛ для получения контракта
                                </p>
                            </div>

                            <form onSubmit={handleSubmitData} className="space-y-6">
                                {/* Passport */}
                                <motion.div variants={stepVariants} className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Серия и номер паспорта <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.passport}
                                        onChange={(e) => handleInputChange('passport', e.target.value)}
                                        placeholder="AA1234567"
                                        maxLength={9}
                                        className={`w-full border rounded-lg p-4 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors.passport ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.passport && (
                                        <p className="text-red-500 text-sm">{errors.passport}</p>
                                    )}
                                </motion.div>

                                {/* PINFL */}
                                <motion.div variants={stepVariants} className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        ПИНФЛ <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.pinfl}
                                        onChange={(e) => handleInputChange('pinfl', e.target.value)}
                                        placeholder="12345678901234"
                                        maxLength={14}
                                        className={`w-full border rounded-lg p-4 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors.pinfl ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.pinfl && (
                                        <p className="text-red-500 text-sm">{errors.pinfl}</p>
                                    )}
                                </motion.div>

                                {/* Phone */}
                                <motion.div variants={stepVariants} className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Номер телефона <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="+998(XX)XXX-XX-XX"
                                        className={`w-full border rounded-lg p-4 focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    )}
                                </motion.div>

                                {errors.general && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 border border-red-200 rounded-lg p-4"
                                    >
                                        <p className="text-red-600 text-center">{errors.general}</p>
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    className={`w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 flex items-center justify-center font-semibold text-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Проверка данных...
                                        </>
                                    ) : (
                                        'Продолжить'
                                    )}
                                </motion.button>
                            </form>

                            {/* Mock Data Helper */}
                            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-sm text-blue-800 font-semibold mb-2">Тестовые данные:</p>
                                <div className="text-xs text-blue-600 space-y-1">
                                    <p>Паспорт: AB1234567 | ПИНФЛ: 12345678901234 | Телефон: +998(90)123-45-67</p>
                                    <p>Паспорт: CD7890123 | ПИНФЛ: 98765432109876 | Телефон: +998(90)765-43-21</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: OTP Verification */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-[30px] p-8 shadow-2xl border-2 border-[#f9eef5]  relative z-[99999]"
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-[#6b0e55] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Подтвердите номер телефона
                                </h2>
                                <p className="text-gray-600">
                                    Мы отправили код подтверждения на номер<br />
                                    <span className="font-semibold">{formData.phone}</span>
                                </p>
                            </div>

                            <form onSubmit={handleOtpSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 text-center">
                                        Введите код подтверждения
                                    </label>
                                    <input
                                        type="text"
                                        value={otpCode}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                                            setOtpCode(value);
                                            setErrors({});
                                        }}
                                        placeholder="123456"
                                        maxLength={6}
                                        className={`w-full border rounded-lg p-4 text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-[#6b0e55] focus:border-[#6b0e55] focus-visible:outline-none hover:border-[#8f3178] transition-all duration-300 ${errors.otp ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.otp && (
                                        <p className="text-red-500 text-sm text-center">{errors.otp}</p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading || otpCode.length !== 6}
                                    whileHover={!isLoading && otpCode.length === 6 ? { scale: 1.02 } : {}}
                                    whileTap={!isLoading && otpCode.length === 6 ? { scale: 0.98 } : {}}
                                    className={`w-full py-4 rounded-2xl transition-all duration-300 flex items-center justify-center font-semibold text-lg ${isLoading || otpCode.length !== 6
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white hover:shadow-xl'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Проверка...
                                        </>
                                    ) : (
                                        'Подтвердить'
                                    )}
                                </motion.button>

                                <div className="text-center">
                                    {canResendOtp ? (
                                        <button
                                            type="button"
                                            onClick={resendOtp}
                                            className="text-[#6b0e55] hover:text-[#8f3178] font-semibold transition-colors duration-300"
                                        >
                                            Отправить код повторно
                                        </button>
                                    ) : (
                                        <p className="text-gray-500">
                                            Отправить повторно через {otpTimer} сек.
                                        </p>
                                    )}
                                </div>
                            </form>

                            {/* Mock OTP Helper */}
                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-sm text-green-800 text-center">
                                    <span className="font-semibold">Тестовый код:</span> 123456
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Contract Download */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-[30px] p-8 shadow-2xl border-2 border-[#f9eef5] relative z-[99999]"
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-animation">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Контракт готов к скачиванию!
                                </h2>
                                <p className="text-gray-600">
                                    Ваш контракт успешно найден и готов к скачиванию
                                </p>
                            </div>

                            {/* User Info Card */}
                            <div className="bg-gradient-to-br from-[#f9eef5] to-[#f3e8f1] rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Информация о студенте</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">ФИО</p>
                                        <p className="font-semibold text-gray-900">{userInfo?.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Номер контракта</p>
                                        <p className="font-semibold text-gray-900">{userInfo?.contractNumber}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Факультет</p>
                                        <p className="font-semibold text-gray-900">{userInfo?.faculty}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Направление</p>
                                        <p className="font-semibold text-gray-900">{userInfo?.direction}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contract Preview */}
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-8 text-center hover:border-[#6b0e55] transition-all duration-300">
                                <div className="w-16 h-16 bg-[#6b0e55] rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707L15.414 7a1 1 0 00-.707-.293H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-6 4h6m-6-8h.01" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    Договор об оказании платных образовательных услуг
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Контракт № {userInfo?.contractNumber}<br />
                                    Формат: Microsoft Word (.docx)
                                </p>
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>Документ защищен цифровой подписью</span>
                                </div>
                            </div>

                            {/* Download Button */}
                            <motion.button
                                onClick={downloadContract}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white py-4 rounded-2xl transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:shadow-xl mb-6"
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Скачать контракт (.docx)
                            </motion.button>

                            {/* Additional Actions */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        setFormData({ passport: '', pinfl: '', phone: '' });
                                        setOtpCode('');
                                        setUserInfo(null);
                                        setErrors({});
                                    }}
                                    className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-[#6b0e55] text-[#6b0e55] rounded-xl hover:bg-[#6b0e55] hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    <span>Получить другой контракт</span>
                                </button>

                                <button
                                    onClick={() => window.print()}
                                    className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    <span>Распечатать</span>
                                </button>
                            </div> */}

                            {/* Success Message */}
                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-green-800 font-semibold">
                                        Контракт успешно сформирован и готов к использованию!
                                    </p>
                                </div>
                                <p className="text-green-700 text-sm mt-2">
                                    Сохраните документ в надежном месте. При необходимости вы можете получить новую копию контракта в любое время.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
                        <div className="w-16 h-16 border-4 border-[#6b0e55]/30 border-t-[#6b0e55] rounded-full animate-spin mb-4 mx-auto"></div>
                        <p className="text-lg font-semibold text-gray-900">
                            {step === 1 && 'Проверяем ваши данные...'}
                            {step === 2 && 'Подтверждаем код...'}
                            {step === 3 && 'Формируем контракт...'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}