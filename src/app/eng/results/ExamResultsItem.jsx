// app/rezultaty-ekzamenov/ExamResultsItemIframe.jsx
"use client"
import React, { useState, useEffect } from "react";
import { Download, Eye, EyeOff, FileText, Search } from "lucide-react";

export default function ExamResultsItemIframe({ subject }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [iframeError, setIframeError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Простая детекция мобильного устройства
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Прокси URL для скрытия бекенда
    const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;

    const togglePDF = () => {
        if (isMobile) {
            // Для мобилок открываем в новой вкладке
            window.open(pdfUrl, '_blank');
            return;
        }

        // Для десктопа показываем iframe
        if (!isOpen) {
            setIsLoading(true);
            setIframeError(false);
        }
        setIsOpen(!isOpen);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = subject.pdfFile.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setIframeError(true);
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            {/* Subject Header */}
            <button
                onClick={togglePDF}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50"
            >
                <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-bold text-[#6b0e55] mb-2">
                        {subject.nameEng}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FileText className="w-4 h-4" />
                        <span>{formatFileSize(subject.pdfFile.filesize)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                    <div className="bg-[#6b0e55] hover:bg-[#8b1e6b] text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
                        {!isMobile && isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {!isMobile && isOpen ? 'Hide' : 'View'}
                    </div>
                </div>
            </button>

            {/* PDF Viewer - только для десктопа */}
            {isOpen && !isMobile && (
                <div className="border-t border-gray-200">
                    {/* Controls */}
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            {/* Info */}
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Search className="w-4 h-4" />
                                <span>Use Ctrl+F to search in the document</span>
                            </div>

                            {/* Actions */}
                            {/* <div className="flex gap-2">
                                <button
                                    onClick={handleDownload}
                                    className="px-3 py-2 bg-[#6b0e55] text-white rounded-lg hover:bg-[#8b1e6b] transition-all flex items-center gap-2 text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Скачать
                                </button>
                            </div> */}
                        </div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="p-8 bg-gray-100 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 border-4 border-[#6b0e55] border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-600 text-sm">Loading document...</p>
                        </div>
                    )}

                    {/* PDF iframe */}
                    <div className="p-4 bg-gray-100">
                        <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-[80vh] border-0"
                                title={`PDF: ${subject.nameEng}`}
                                style={{
                                    minHeight: '600px',
                                    display: isLoading ? 'none' : 'block'
                                }}
                                onLoad={handleIframeLoad}
                                onError={handleIframeError}
                            />
                        </div>

                        {/* Fallback для ошибок iframe */}
                        {iframeError && (
                            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <div className="text-yellow-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-yellow-800 font-medium">PDF not displaying?</h4>
                                        <p className="text-yellow-700 text-sm mt-1">
                                            Try <button onClick={handleDownload} className="underline hover:no-underline">downloading the file</button> for viewing or
                                            <button onClick={() => window.open(pdfUrl, '_blank')} className="underline hover:no-underline ml-1">open in a new tab</button>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

