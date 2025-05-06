// ArticleSubmissionForm
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';

const ArticleSubmissionForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        authorName: '',
        coauthors: '',
        title: '',
        workplace: '',
        file: null
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Блокировка скроллинга при открытии модального окна
    useEffect(() => {
        if (isOpen) {
            // Сохраняем текущее положение прокрутки
            const scrollY = window.scrollY;
            // Блокируем прокрутку body
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'scroll';
        } else {
            // Восстанавливаем прокрутку при закрытии
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            }
        }

        // Очистка при размонтировании
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check if file is .docx
            if (!file.name.endsWith('.docx')) {
                setErrors({
                    ...errors,
                    file: 'Пожалуйста, загрузите файл в формате .docx'
                });
                return;
            }

            // Check file size (10MB = 10 * 1024 * 1024 bytes)
            if (file.size > 10 * 1024 * 1024) {
                setErrors({
                    ...errors,
                    file: 'Размер файла не должен превышать 10 МБ'
                });
                return;
            }

            setFormData({
                ...formData,
                file
            });

            // Clear file error
            if (errors.file) {
                setErrors({
                    ...errors,
                    file: ''
                });
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.authorName.trim()) {
            newErrors.authorName = 'Пожалуйста, введите ФИО автора';
        }

        if (!formData.title.trim()) {
            newErrors.title = 'Пожалуйста, введите название статьи';
        }

        if (!formData.workplace.trim()) {
            newErrors.workplace = 'Пожалуйста, укажите место работы';
        }

        if (!formData.file) {
            newErrors.file = 'Пожалуйста, загрузите файл статьи';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('authorName', formData.authorName);
            formDataToSend.append('coauthors', formData.coauthors);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('workplace', formData.workplace);
            formDataToSend.append('file', formData.file);

            const response = await fetch('/api/send-journal-article', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Статья успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                setFormData({
                    authorName: '',
                    coauthors: '',
                    title: '',
                    workplace: '',
                    file: null
                });
                // Reset file input
                document.getElementById('article-file').value = '';
            } else {
                setMessage(`Ошибка при отправке: ${data.message || 'Что-то пошло не так'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Ошибка при отправке. Пожалуйста, попробуйте позже.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white p-6 md:p-9 rounded-xl shadow-2xl w-[96vw] md:max-w-lg max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar scrollbar-track-transparent"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Отправить статью</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    ФИО автора <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="authorName"
                                    value={formData.authorName}
                                    onChange={handleChange}
                                    placeholder="Введите ФИО автора"
                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-[#5f1464] focus:ring-2 focus:ring-[#5f1464]/30 ${errors.authorName ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.authorName && (
                                    <p className="text-red-500 text-sm animate-pulse">
                                        {errors.authorName}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    ФИО соавторов
                                </label>
                                <input
                                    type="text"
                                    name="coauthors"
                                    value={formData.coauthors}
                                    onChange={handleChange}
                                    placeholder="Введите ФИО соавторов (если есть)"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-[#5f1464] focus:ring-2 focus:ring-[#5f1464]/30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Название статьи <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Введите название статьи"
                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-[#5f1464] focus:ring-2 focus:ring-[#5f1464]/30 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-sm animate-pulse">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Место работы <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="workplace"
                                    value={formData.workplace}
                                    onChange={handleChange}
                                    placeholder="Введите место работы"
                                    className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:border-[#5f1464] focus:ring-2 focus:ring-[#5f1464]/30 ${errors.workplace ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.workplace && (
                                    <p className="text-red-500 text-sm animate-pulse">
                                        {errors.workplace}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Файл статьи (.docx, до 10 МБ) <span className="text-red-500">*</span>
                                </label>
                                <div className={`w-full p-3 border rounded-lg shadow-sm transition-all duration-200 ${errors.file ? 'border-red-500' : 'border-gray-300'}`}>
                                    <input
                                        type="file"
                                        id="article-file"
                                        name="file"
                                        accept=".docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="article-file"
                                        className="flex items-center justify-center gap-2 cursor-pointer p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        <Upload className="w-5 h-5 text-[#5f1464]" />
                                        <span className="text-sm font-medium text-gray-700">
                                            {formData.file ? formData.file.name : 'Выберите файл'}
                                        </span>
                                    </label>
                                </div>
                                {errors.file && (
                                    <p className="text-red-500 text-sm animate-pulse">
                                        {errors.file}
                                    </p>
                                )}
                                {formData.file && (
                                    <p className="text-xs text-gray-500">
                                        Размер файла: {(formData.file.size / 1024 / 1024).toFixed(2)} МБ
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#6b0e55] text-white p-3 rounded-lg shadow-md hover:bg-[#7a095f] transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить статью'}
                            </button>
                        </form>
                        {message && (
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
};

export default ArticleSubmissionForm;