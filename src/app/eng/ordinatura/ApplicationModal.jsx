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
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to format phone number
    const formatPhoneNumber = (value) => {
        // Remove all non-digits
        const numbers = value.replace(/\D/g, '');

        // Limit to 9 digits
        const limited = numbers.slice(0, 9);

        // Apply mask (XX)XXX-XX-XX
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

    // Function to get clean phone number (digits only)
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

    // Form validation function
    const isFormValid = () => {
        const cleanPhone = getCleanPhoneNumber(formData.phone);
        return formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            cleanPhone.length === 9 && // Check that exactly 9 digits are entered
            formData.selectedProgramId !== null;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Additional check before submission
        if (!isFormValid()) {
            alert('Please fill in all fields and enter a valid phone number');
            return;
        }

        setIsSubmitting(true);

        try {
            // Find the selected program
            const selectedProgramData = programs?.find(p => p.id === formData.selectedProgramId);

            if (!selectedProgramData) {
                alert('Selected program not found');
                setIsSubmitting(false);
                return;
            }

            const payload = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                phone: getCleanPhoneNumber(formData.phone), // Send clean number
                selectedProgramId: formData.selectedProgramId,
                programTitle: selectedProgramData.title,
            };

            console.log('Data being sent:', payload); // For debugging

            const response = await fetch('/api/ordinature/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    selectedProgramId: selectedProgram?.id || null
                });
            } else {
                const errorData = await response.text();
                console.error('Server error:', response.status, errorData);
                alert('Error sending application');
            }
        } catch (error) {
            console.error('Error sending:', error);
            alert('Error sending application');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
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
                    {/* Success State */}
                    {isSubmitted ? (
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Application submitted!</h2>
                            <p className="text-gray-600 mb-6">
                                Your application has been successfully submitted. We will contact you soon.
                            </p>
                            <button
                                onClick={handleClose}
                                className="w-full py-3 px-6 rounded-lg font-medium bg-[#6b0e55] text-white hover:bg-[#5a0b47] transition-all duration-300"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* Form State */
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Document Submission</h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                {/* Name Fields */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all text-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6b0e55] focus:border-transparent focus:outline-none transition-all text-sm"
                                        placeholder="(94)805-97-98"
                                        maxLength={13}
                                        required
                                    />
                                    {formData.phone && getCleanPhoneNumber(formData.phone).length > 0 && getCleanPhoneNumber(formData.phone).length < 9 && (
                                        <div className="text-xs text-red-500 mt-1.5 ml-1">
                                            Enter full phone number (9 digits)
                                        </div>
                                    )}
                                </div>

                                {/* Program Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Program</label>
                                    <div className="border border-gray-200 rounded-xl max-h-48 overflow-y-auto">
                                        {getAvailablePrograms().map((program, index) => (
                                            <button
                                                key={program.id}
                                                type="button"
                                                onClick={() => handleInputChange('selectedProgramId', program.id)}
                                                className={`outline-none w-full px-4 py-2.5 text-left transition-all duration-200 focus:outline-none first:rounded-t-xl last:rounded-b-xl ${index !== getAvailablePrograms().length - 1 ? 'border-b border-gray-100' : ''
                                                    } ${formData.selectedProgramId === program.id
                                                        ? 'bg-[#6b0e55]/8 text-[#6b0e55] border-r-2 border-r-[#6b0e55] bg-[#fff4fa]'
                                                        : 'hover:bg-gray-50 text-gray-700'
                                                    }`}
                                            >
                                                <div className="text-sm font-medium">{program.title}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Validation message */}
                                {!isFormValid() && (
                                    <div className="text-xs text-red-600 bg-red-50 p-3 rounded-xl border-l-3 border-red-400">
                                        {getCleanPhoneNumber(formData.phone).length > 0 && getCleanPhoneNumber(formData.phone).length < 9
                                            ? 'Enter a valid phone number (9 digits)'
                                            : 'Fill in all fields and select a program'
                                        }
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !isFormValid()}
                                        className={`w-full py-3.5 px-6 rounded-xl font-medium transition-all duration-300 text-sm ${isFormValid() && !isSubmitting
                                            ? 'bg-[#6b0e55] text-white hover:bg-[#5a0b47] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
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