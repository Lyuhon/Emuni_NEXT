// // // app/rezultaty-ekzamenov/ExamResultsItemIframe.jsx
// // "use client"
// // import React, { useState, useEffect } from "react";
// // import { Download, Eye, EyeOff, FileText, Search } from "lucide-react";

// // export default function ExamResultsItemIframe({ subject }) {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [iframeError, setIframeError] = useState(false);
// //     const [isMobile, setIsMobile] = useState(false);

// //     // Простая детекция мобильного устройства
// //     useEffect(() => {
// //         const checkMobile = () => {
// //             setIsMobile(window.innerWidth <= 768);
// //         };

// //         checkMobile();
// //         window.addEventListener('resize', checkMobile);
// //         return () => window.removeEventListener('resize', checkMobile);
// //     }, []);

// //     // Прокси URL для скрытия бекенда
// //     const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;

// //     const togglePDF = () => {
// //         if (isMobile) {
// //             // Для мобилок открываем в новой вкладке
// //             window.open(pdfUrl, '_blank');
// //             return;
// //         }

// //         // Для десктопа показываем iframe
// //         if (!isOpen) {
// //             setIsLoading(true);
// //             setIframeError(false);
// //         }
// //         setIsOpen(!isOpen);
// //     };

// //     const handleDownload = () => {
// //         const link = document.createElement('a');
// //         link.href = pdfUrl;
// //         link.download = subject.pdfFile.filename;
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //     };

// //     const handleIframeLoad = () => {
// //         setIsLoading(false);
// //     };

// //     const handleIframeError = () => {
// //         setIsLoading(false);
// //         setIframeError(true);
// //     };

// //     const formatFileSize = (bytes) => {
// //         if (bytes === 0) return '0 Bytes';
// //         const k = 1024;
// //         const sizes = ['Bytes', 'KB', 'MB', 'GB'];
// //         const i = Math.floor(Math.log(bytes) / Math.log(k));
// //         return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
// //     };

// //     return (
// //         <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
// //             {/* Subject Header */}
// //             <button
// //                 onClick={togglePDF}
// //                 className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50"
// //             >
// //                 <div className="flex-1">
// //                     <h2 className="text-lg md:text-xl font-bold text-[#6b0e55] mb-2">
// //                         {subject.nameRu}
// //                     </h2>
// //                     <div className="flex items-center gap-2 text-gray-600 text-sm">
// //                         <FileText className="w-4 h-4" />
// //                         <span>{formatFileSize(subject.pdfFile.filesize)}</span>
// //                     </div>
// //                 </div>
// //                 <div className="flex items-center gap-3 ml-4">
// //                     <div className="bg-[#6b0e55] hover:bg-[#8b1e6b] text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
// //                         {!isMobile && isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// //                         {!isMobile && isOpen ? 'Скрыть' : 'Просмотр'}
// //                     </div>
// //                 </div>
// //             </button>

// //             {/* PDF Viewer - только для десктопа */}
// //             {isOpen && !isMobile && (
// //                 <div className="border-t border-gray-200">
// //                     {/* Controls */}
// //                     <div className="p-4 bg-gray-50 border-b border-gray-200">
// //                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //                             {/* Info */}
// //                             <div className="flex items-center gap-2 text-sm text-gray-600">
// //                                 <Search className="w-4 h-4" />
// //                                 <span>Используйте Ctrl+F для поиска в документе</span>
// //                             </div>

// //                             {/* Actions */}
// //                             {/* <div className="flex gap-2">
// //                                 <button
// //                                     onClick={handleDownload}
// //                                     className="px-3 py-2 bg-[#6b0e55] text-white rounded-lg hover:bg-[#8b1e6b] transition-all flex items-center gap-2 text-sm"
// //                                 >
// //                                     <Download className="w-4 h-4" />
// //                                     Скачать
// //                                 </button>
// //                             </div> */}
// //                         </div>
// //                     </div>

// //                     {/* Loading State */}
// //                     {isLoading && (
// //                         <div className="p-8 bg-gray-100 flex flex-col items-center justify-center">
// //                             <div className="w-12 h-12 border-4 border-[#6b0e55] border-t-transparent rounded-full animate-spin mb-4"></div>
// //                             <p className="text-gray-600 text-sm">Загружаем документ...</p>
// //                         </div>
// //                     )}

// //                     {/* PDF iframe */}
// //                     <div className="p-4 bg-gray-100">
// //                         <div className="bg-white rounded-lg shadow-inner overflow-hidden">
// //                             <iframe
// //                                 src={pdfUrl}
// //                                 className="w-full h-[80vh] border-0"
// //                                 title={`PDF: ${subject.nameRu}`}
// //                                 style={{
// //                                     minHeight: '600px',
// //                                     display: isLoading ? 'none' : 'block'
// //                                 }}
// //                                 onLoad={handleIframeLoad}
// //                                 onError={handleIframeError}
// //                             />
// //                         </div>

// //                         {/* Fallback для ошибок iframe */}
// //                         {iframeError && (
// //                             <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// //                                 <div className="flex items-start gap-3">
// //                                     <div className="text-yellow-600">
// //                                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// //                                             <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                                         </svg>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-yellow-800 font-medium">PDF не отображается?</h4>
// //                                         <p className="text-yellow-700 text-sm mt-1">
// //                                             Попробуйте <button onClick={handleDownload} className="underline hover:no-underline">скачать файл</button> для просмотра или
// //                                             <button onClick={() => window.open(pdfUrl, '_blank')} className="underline hover:no-underline ml-1">открыть в новой вкладке</button>.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }


// // app/rezultaty-ekzamenov/ExamResultsItemPDFJS.jsx
// "use client"
// import React, { useState, useEffect, useRef } from "react";
// import { Download, Eye, EyeOff, FileText, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

// export default function ExamResultsItemPDFJS({ subject }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [pdfError, setPdfError] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);

//     // PDF.js состояния
//     const [pdfDoc, setPdfDoc] = useState(null);
//     const [pageNum, setPageNum] = useState(1);
//     const [pageRendering, setPageRendering] = useState(false);
//     const [pageNumPending, setPageNumPending] = useState(null);
//     const [scale, setScale] = useState(1.5);
//     const [numPages, setNumPages] = useState(0);

//     const canvasRef = useRef(null);
//     const containerRef = useRef(null);

//     // Простая детекция мобильного устройства
//     useEffect(() => {
//         const checkMobile = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         checkMobile();
//         window.addEventListener('resize', checkMobile);
//         return () => window.removeEventListener('resize', checkMobile);
//     }, []);

//     // Загрузка PDF.js при первом открытии
//     useEffect(() => {
//         if (isOpen && !isMobile && !window.pdfjsLib) {
//             loadPDFJS();
//         }
//     }, [isOpen, isMobile]);

//     const loadPDFJS = async () => {
//         try {
//             if (window.pdfjsLib) return;

//             // Загружаем PDF.js
//             const script = document.createElement('script');
//             script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.min.js';
//             script.onload = () => {
//                 window.pdfjsLib.GlobalWorkerOptions.workerSrc =
//                     'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';
//                 loadPDF();
//             };
//             script.onerror = () => {
//                 console.error('Failed to load PDF.js');
//                 setPdfError(true);
//                 setIsLoading(false);
//             };
//             document.head.appendChild(script);
//         } catch (error) {
//             console.error('Error loading PDF.js:', error);
//             setPdfError(true);
//             setIsLoading(false);
//         }
//     };

//     const loadPDF = async () => {
//         if (!window.pdfjsLib) return;

//         setIsLoading(true);
//         setPdfError(false);

//         try {
//             const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;
//             const loadingTask = window.pdfjsLib.getDocument(pdfUrl);

//             const pdf = await loadingTask.promise;
//             setPdfDoc(pdf);
//             setNumPages(pdf.numPages);
//             setPageNum(1);
//             setIsLoading(false);

//             // Рендерим первую страницу
//             renderPage(1, pdf);
//         } catch (error) {
//             console.error('Error loading PDF:', error);
//             setPdfError(true);
//             setIsLoading(false);
//         }
//     };

//     const renderPage = async (num, doc = pdfDoc) => {
//         if (!doc || !canvasRef.current) return;

//         setPageRendering(true);

//         try {
//             const page = await doc.getPage(num);
//             const canvas = canvasRef.current;
//             const ctx = canvas.getContext('2d');

//             const viewport = page.getViewport({ scale });
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;

//             const renderContext = {
//                 canvasContext: ctx,
//                 viewport: viewport
//             };

//             await page.render(renderContext).promise;

//             setPageRendering(false);

//             // Если есть ожидающая страница, рендерим её
//             if (pageNumPending !== null) {
//                 renderPage(pageNumPending);
//                 setPageNumPending(null);
//             }
//         } catch (error) {
//             console.error('Error rendering page:', error);
//             setPageRendering(false);
//         }
//     };

//     const queueRenderPage = (num) => {
//         if (pageRendering) {
//             setPageNumPending(num);
//         } else {
//             renderPage(num);
//         }
//     };

//     // Прокси URL для скрытия бекенда
//     const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;

//     const togglePDF = () => {
//         if (isMobile) {
//             // Для мобилок открываем в новой вкладке
//             window.open(pdfUrl, '_blank');
//             return;
//         }

//         // Для десктопа показываем PDF.js viewer
//         setIsOpen(!isOpen);
//     };

//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = pdfUrl;
//         link.download = subject.pdfFile.filename;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     // PDF Navigation functions
//     const onPrevPage = () => {
//         if (pageNum <= 1) return;
//         const newPageNum = pageNum - 1;
//         setPageNum(newPageNum);
//         queueRenderPage(newPageNum);
//     };

//     const onNextPage = () => {
//         if (pageNum >= numPages) return;
//         const newPageNum = pageNum + 1;
//         setPageNum(newPageNum);
//         queueRenderPage(newPageNum);
//     };

//     const onZoomIn = () => {
//         const newScale = scale + 0.1;
//         setScale(newScale);
//         queueRenderPage(pageNum);
//     };

//     const onZoomOut = () => {
//         if (scale <= 0.5) return;
//         const newScale = scale - 0.1;
//         setScale(newScale);
//         queueRenderPage(pageNum);
//     };

//     const formatFileSize = (bytes) => {
//         if (bytes === 0) return '0 Bytes';
//         const k = 1024;
//         const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//         const i = Math.floor(Math.log(bytes) / Math.log(k));
//         return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//     };

//     return (
//         <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//             {/* Subject Header */}
//             <button
//                 onClick={togglePDF}
//                 className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50"
//             >
//                 <div className="flex-1">
//                     <h2 className="text-lg md:text-xl font-bold text-[#6b0e55] mb-2">
//                         {subject.nameRu}
//                     </h2>
//                     <div className="flex items-center gap-2 text-gray-600 text-sm">
//                         <FileText className="w-4 h-4" />
//                         <span>{formatFileSize(subject.pdfFile.filesize)}</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-3 ml-4">
//                     <div className="bg-[#6b0e55] hover:bg-[#8b1e6b] text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
//                         {!isMobile && isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                         {!isMobile && isOpen ? 'Скрыть' : 'Просмотр'}
//                     </div>
//                 </div>
//             </button>

//             {/* PDF Viewer - только для десктопа */}
//             {isOpen && !isMobile && (
//                 <div className="border-t border-gray-200">
//                     {/* PDF Controls */}
//                     <div className="p-4 bg-gray-50 border-b border-gray-200">
//                         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                             {/* Navigation Controls */}
//                             <div className="flex items-center gap-2">
//                                 <button
//                                     onClick={onPrevPage}
//                                     disabled={pageNum <= 1}
//                                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
//                                 >
//                                     <ChevronLeft className="w-4 h-4" />
//                                     Назад
//                                 </button>

//                                 <span className="px-3 py-2 text-sm text-gray-600">
//                                     Страница {pageNum} из {numPages}
//                                 </span>

//                                 <button
//                                     onClick={onNextPage}
//                                     disabled={pageNum >= numPages}
//                                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
//                                 >
//                                     Вперед
//                                     <ChevronRight className="w-4 h-4" />
//                                 </button>
//                             </div>

//                             {/* Zoom Controls */}
//                             <div className="flex items-center gap-2">
//                                 <button
//                                     onClick={onZoomOut}
//                                     disabled={scale <= 0.5}
//                                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
//                                 >
//                                     <ZoomOut className="w-4 h-4" />
//                                     -
//                                 </button>

//                                 <span className="px-3 py-2 text-sm text-gray-600">
//                                     {Math.round(scale * 100)}%
//                                 </span>

//                                 <button
//                                     onClick={onZoomIn}
//                                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm"
//                                 >
//                                     <ZoomIn className="w-4 h-4" />
//                                     +
//                                 </button>
//                             </div>

//                             {/* Download Button */}
//                             <div className="flex gap-2">
//                                 <button
//                                     onClick={handleDownload}
//                                     className="px-3 py-2 bg-[#6b0e55] text-white rounded-lg hover:bg-[#8b1e6b] transition-all flex items-center gap-2 text-sm"
//                                 >
//                                     <Download className="w-4 h-4" />
//                                     Скачать
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Loading State */}
//                     {isLoading && (
//                         <div className="p-8 bg-gray-100 flex flex-col items-center justify-center">
//                             <div className="w-12 h-12 border-4 border-[#6b0e55] border-t-transparent rounded-full animate-spin mb-4"></div>
//                             <p className="text-gray-600 text-sm">Загружаем документ...</p>
//                         </div>
//                     )}

//                     {/* PDF Canvas Container */}
//                     <div className="p-4 bg-gray-100" ref={containerRef}>
//                         <div className="bg-white rounded-lg shadow-inner overflow-hidden">
//                             <div className="flex justify-center p-4">
//                                 <canvas
//                                     ref={canvasRef}
//                                     style={{
//                                         maxWidth: '100%',
//                                         height: 'auto',
//                                         display: isLoading || pdfError ? 'none' : 'block',
//                                         border: '1px solid #e5e7eb'
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Fallback для ошибок PDF */}
//                         {pdfError && (
//                             <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                                 <div className="flex items-start gap-3">
//                                     <div className="text-yellow-600">
//                                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                             <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-yellow-800 font-medium">PDF не загружается?</h4>
//                                         <p className="text-yellow-700 text-sm mt-1">
//                                             Попробуйте <button onClick={handleDownload} className="underline hover:no-underline">скачать файл</button> для просмотра или
//                                             <button onClick={() => window.open(pdfUrl, '_blank')} className="underline hover:no-underline ml-1">открыть в новой вкладке</button>.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }





// app/rezultaty-ekzamenov/ExamResultsItemPDFJS.jsx
"use client"
import React, { useState, useEffect, useRef } from "react";
import { Download, Eye, EyeOff, FileText, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

// Глобальная переменная для отслеживания загрузки PDF.js
let pdfjsLoading = false;
let pdfjsLoaded = false;

export default function ExamResultsItemPDFJS({ subject }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [pdfError, setPdfError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // PDF.js состояния
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [pageRendering, setPageRendering] = useState(false);
    const [pageNumPending, setPageNumPending] = useState(null);
    const [scale, setScale] = useState(1.5);
    const [numPages, setNumPages] = useState(0);

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // Простая детекция мобильного устройства
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Загрузка PDF при открытии
    useEffect(() => {
        if (isOpen) {
            if (!isMobile) {
                loadPDFJS();
            } else {
                // Для мобилок тоже загружаем PDF.js для упрощенного просмотра
                loadPDFJS();
            }
        }
    }, [isOpen, isMobile]);

    const loadPDFJS = async () => {
        try {
            // Если PDF.js уже загружен, сразу загружаем PDF
            if (pdfjsLoaded && window.pdfjsLib) {
                loadPDF();
                return;
            }

            // Если PDF.js уже загружается, ждем
            if (pdfjsLoading) {
                const checkLoaded = setInterval(() => {
                    if (pdfjsLoaded && window.pdfjsLib) {
                        clearInterval(checkLoaded);
                        loadPDF();
                    }
                }, 100);
                return;
            }

            // Начинаем загрузку PDF.js
            pdfjsLoading = true;

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.min.js';
            script.onload = () => {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';
                pdfjsLoaded = true;
                pdfjsLoading = false;
                loadPDF();
            };
            script.onerror = () => {
                console.error('Failed to load PDF.js');
                pdfjsLoading = false;
                setPdfError(true);
                setIsLoading(false);
            };
            document.head.appendChild(script);
        } catch (error) {
            console.error('Error loading PDF.js:', error);
            pdfjsLoading = false;
            setPdfError(true);
            setIsLoading(false);
        }
    };

    const loadPDF = async () => {
        if (!window.pdfjsLib) return;

        setIsLoading(true);
        setPdfError(false);

        try {
            const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;
            const loadingTask = window.pdfjsLib.getDocument(pdfUrl);

            const pdf = await loadingTask.promise;
            setPdfDoc(pdf);
            setNumPages(pdf.numPages);
            setPageNum(1);
            setIsLoading(false);

            // Рендерим первую страницу
            renderPage(1, pdf);
        } catch (error) {
            console.error('Error loading PDF:', error);
            setPdfError(true);
            setIsLoading(false);
        }
    };

    const renderPage = async (num, doc = pdfDoc) => {
        if (!doc || !canvasRef.current) return;

        setPageRendering(true);

        try {
            const page = await doc.getPage(num);
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Начальный масштаб для мобилок (только при первой загрузке)
            let renderScale = scale;
            if (isMobile && containerRef.current && scale === 1.5) {
                const containerWidth = containerRef.current.offsetWidth - 32; // учитываем padding
                const viewport = page.getViewport({ scale: 1 });
                renderScale = Math.min(containerWidth / viewport.width, 1.5);
                setScale(renderScale);
            }

            const viewport = page.getViewport({ scale: renderScale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            await page.render(renderContext).promise;

            setPageRendering(false);

            // Если есть ожидающая страница, рендерим её
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                setPageNumPending(null);
            }
        } catch (error) {
            console.error('Error rendering page:', error);
            setPageRendering(false);
        }
    };

    const queueRenderPage = (num) => {
        if (pageRendering) {
            setPageNumPending(num);
        } else {
            renderPage(num);
        }
    };

    // Прокси URL для скрытия бекенда
    const pdfUrl = subject.pdfFile.proxyUrl || `/api/pdf/${subject.pdfFile.ID}`;

    const togglePDF = () => {
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

    // PDF Navigation functions
    const onPrevPage = () => {
        if (pageNum <= 1) return;
        const newPageNum = pageNum - 1;
        setPageNum(newPageNum);
        queueRenderPage(newPageNum);
    };

    const onNextPage = () => {
        if (pageNum >= numPages) return;
        const newPageNum = pageNum + 1;
        setPageNum(newPageNum);
        queueRenderPage(newPageNum);
    };

    const onZoomIn = () => {
        const newScale = scale + 0.1;
        setScale(newScale);
        queueRenderPage(pageNum);
    };

    const onZoomOut = () => {
        if (scale <= 0.5) return;
        const newScale = scale - 0.1;
        setScale(newScale);
        queueRenderPage(pageNum);
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
                        {subject.nameRu}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FileText className="w-4 h-4" />
                        <span>{formatFileSize(subject.pdfFile.filesize)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                    <div className="bg-[#6b0e55] hover:bg-[#8b1e6b] text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
                        {!isMobile && isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {!isMobile && isOpen ? 'Скрыть' : 'Просмотр'}
                    </div>
                </div>
            </button>

            {/* PDF Viewer - для десктопа и мобилок */}
            {isOpen && (
                <div className="border-t border-gray-200">
                    {/* PDF Controls */}
                    <div className="p-4 px-6 bg-gray-50 border-b border-gray-200">
                        <div className={`flex md:flex-col ${isMobile ? 'space-y-3 justify-between' : 'lg:flex-row lg:items-center lg:justify-between'} gap-4`}>
                            {/* Navigation Controls */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <button
                                    onClick={onPrevPage}
                                    disabled={pageNum <= 1}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    {isMobile ? '' : 'Назад'}
                                </button>

                                <span className="px-3 py-2 text-sm text-gray-600 whitespace-nowrap">
                                    {numPages > 0 ? `${pageNum} / ${numPages}` : 'Загрузка...'}
                                </span>

                                <button
                                    onClick={onNextPage}
                                    disabled={pageNum >= numPages}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                                >
                                    {isMobile ? '' : 'Вперед'}
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Zoom Controls - теперь и для мобилок тоже */}
                            <div className="hidden md:flex items-center gap-2 ">
                                <button
                                    onClick={onZoomOut}
                                    disabled={scale <= 0.5}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                    {!isMobile && '-'}
                                </button>

                                <span className="px-3 py-2 text-sm text-gray-600 whitespace-nowrap">
                                    {Math.round(scale * 100)}%
                                </span>

                                <button
                                    onClick={onZoomIn}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                    {!isMobile && '+'}
                                </button>
                            </div>

                            {/* Download Button */}
                            <div className="flex gap-2 m-0" style={{ margin: 0 }}>
                                <button
                                    onClick={handleDownload}
                                    className="px-3 py-2 bg-[#6b0e55] text-white rounded-lg hover:bg-[#8b1e6b] transition-all flex items-center gap-2 text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    {isMobile ? '' : 'Скачать'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="p-8 bg-gray-100 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 border-4 border-[#6b0e55] border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-600 text-sm">Загружаем документ...</p>
                        </div>
                    )}

                    {/* PDF Canvas Container */}
                    <div className={`${isMobile ? 'p-2' : 'p-4'} bg-gray-100`} ref={containerRef}>
                        <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                            <div className={`flex justify-center ${isMobile ? 'p-2' : 'p-4'}`}>
                                <canvas
                                    ref={canvasRef}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        display: isLoading || pdfError ? 'none' : 'block',
                                        border: '1px solid #e5e7eb'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Fallback для ошибок PDF */}
                        {pdfError && (
                            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <div className="text-yellow-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-yellow-800 font-medium">PDF не загружается?</h4>
                                        <p className="text-yellow-700 text-sm mt-1">
                                            Попробуйте <button onClick={handleDownload} className="underline hover:no-underline">скачать файл</button> для просмотра или
                                            <button onClick={() => window.open(pdfUrl, '_blank')} className="underline hover:no-underline ml-1">открыть в новой вкладке</button>.
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