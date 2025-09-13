'use client'

import { useState } from 'react';

export default function ApplicationModal({
    isOpen,
    onClose,
    programs,
    categories,
    selectedProgram
}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        selectedProgramId: selectedProgram?.id || null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Функция для форматирования телефонного номера
    const formatPhoneNumber = (value) => {
        // Удаляем все не цифры
        const numbers = value.replace(/\D/g, '');

        // Ограничиваем до 9 цифр
        const limited = numbers.slice(0, 9);

        // Применяем маску (XX)XXX-XX-XX
        if (limited.length >= 2) {
            let formatted = `(${limited.slice(0, 2)})`;
            if (limited.length >= 5) {
                formatted += `${limited.slice(2, 5)}-`;
                if (limited.length >= 7) {
                    formatted += `${limited.slice(5, 7)}-`;
                    if (limited.length >= 9) {
                        formatted += limited.slice(7, 9);
                    } else {
                        formatted += limited.slice(7);
                    }
                } else {
                    formatted += limited.slice(5);
                }
            } else {
                formatted += limited.slice(2);
            }
            return formatted;
        }
        return limited;
    };

    // Функция для получения чистого номера (только цифры)
    const getCleanPhoneNumber = (formattedPhone) => {
        return formattedPhone.replace(/\D/g, '');
    };

    const handleInputChange = (field, value) => {
        if (field === 'phone') {
            const formatted = formatPhoneNumber(value);
            setFormData(prev => ({ ...prev, [field]: formatted }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    // Функция валидации формы
    const isFormValid = () => {
        const cleanPhone = getCleanPhoneNumber(formData.phone);
        return formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            cleanPhone.length === 9 && // Проверяем что введено ровно 9 цифр
            formData.selectedProgramId !== null;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Дополнительная проверка перед отправкой
        if (!isFormValid()) {
            alert('Пожалуйста, заполните все поля и введите корректный номер телефона');
            return;
        }

        setIsSubmitting(true);

        try {
            // Найдем выбранную программу
            const selectedProgramData = programs?.find(p => p.id === formData.selectedProgramId);

            if (!selectedProgramData) {
                alert('Выбранная программа не найдена');
                setIsSubmitting(false);
                return;
            }

            const payload = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                phone: getCleanPhoneNumber(formData.phone), // Отправляем чистый номер
                selectedProgramId: formData.selectedProgramId,
                programTitle: selectedProgramData.title,
            };

            console.log('Отправляемые данные:', payload); // Для отладки

            const response = await fetch('/api/ordinature/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Заявка успешно отправлена!');
                onClose();
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    selectedProgramId: selectedProgram?.id || null
                });
            } else {
                const errorData = await response.text();
                console.error('Ошибка сервера:', response.status, errorData);
                alert('Ошибка при отправке заявки');
            }
        } catch (error) {
            console.error('Ошибка при отправке:', error);
            alert('Ошибка при отправке заявки');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getAvailablePrograms = () => {
        if (selectedProgram) {
            return programs.filter(p => p.category === selectedProgram.category);
        }
        return programs;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000] p-4">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-in-up">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Подача документов</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sx font-[600] text-gray-900 mb-1">Имя</label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sx font-[600] text-gray-900 mb-1">Фамилия</label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sx font-[600] text-gray-900 mb-1">Номер телефона</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all"
                                placeholder="(94)805-97-98"
                                maxLength={13} // Максимальная длина с форматированием
                                required
                            />
                            {formData.phone && getCleanPhoneNumber(formData.phone).length > 0 && getCleanPhoneNumber(formData.phone).length < 9 && (
                                <div className="text-xs text-red-500 mt-1">
                                    Введите полный номер телефона (9 цифр)
                                </div>
                            )}
                        </div>

                        {/* Program Selection */}
                        <div>
                            <label className="block text-sx font-[600] text-gray-900 mb-2">Направление:</label>
                            <div className="grid p-1 gap-2 max-h-64 overflow-y-auto overflow-x-hidden">
                                {getAvailablePrograms().map((program) => (
                                    <button
                                        key={program.id}
                                        type="button"
                                        onClick={() => handleInputChange('selectedProgramId', program.id)}
                                        className={`p-3 text-left rounded-lg border transition-all duration-300 focus:outline-none ${formData.selectedProgramId === program.id
                                            ? 'border-[#6b0e55] bg-[#6b0e55]/5 text-[#6b0e55]'
                                            : 'border-gray-200 hover:border-[#6b0e55]/50'
                                            }`}
                                    >
                                        <div className="font-medium text-sm">{program.title}</div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {categories.find(cat => cat.id === program.category)?.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Validation message */}
                        {!isFormValid() && (
                            <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">
                                {getCleanPhoneNumber(formData.phone).length > 0 && getCleanPhoneNumber(formData.phone).length < 9
                                    ? 'Введите корректный номер телефона (9 цифр)'
                                    : 'Пожалуйста, заполните все поля и выберите направление'
                                }
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting || !isFormValid()}
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isFormValid() && !isSubmitting
                                    ? 'bg-[#6b0e55] text-white hover:bg-[#5a0b47] hover:scale-105'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .animate-slide-in-up {
                    animation: slide-in-up 0.3s ease-out forwards;
                }

                @keyframes slide-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}