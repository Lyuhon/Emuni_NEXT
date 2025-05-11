// 'use client';
// import React, { useState, useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import Modal from 'react-modal';
// import { ChevronDown, ZoomIn } from 'lucide-react';

// // Устанавливаем appElement только на клиенте после монтирования
// const initializeModal = () => {
//     if (typeof window !== 'undefined' && document.getElementById('__next')) {
//         Modal.setAppElement('#__next');
//     }
// };

// const PricingAccordion = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [activeImage, setActiveImage] = useState('medical'); // medical или business
//     const [tarifImages, setTarifImages] = useState({
//         medical: null,
//         business: null
//     });
//     const [loading, setLoading] = useState(true);

//     // Загрузка данных из API
//     useEffect(() => {
//         const fetchTarifImages = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch('http://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/11857');
//                 const data = await response.json();

//                 if (data && data.acf && data.acf.tarifnaya_setka) {
//                     const { tarifnaya_setka } = data.acf;
//                     setTarifImages({
//                         medical: tarifnaya_setka.med_napravleniya_ru?.url || null,
//                         business: tarifnaya_setka.biznes_napravleniya_ru?.url || null
//                     });
//                 }
//             } catch (error) {
//                 console.error('Ошибка при загрузке изображений тарифов:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTarifImages();
//     }, []);

//     // Инициализация react-modal после монтирования компонента
//     useEffect(() => {
//         initializeModal();
//     }, []);

//     const brandColor = '#6b0e55';         // Основной — глубокий пурпурно-розовый
//     const brandColorLight = '#9c3f84';    // Светлее — более мягкий, но всё ещё насыщенный
//     const brandColorLighter = '#f6eaf2';  // Самый светлый — почти белый с розовым оттенком

//     // Получение текущего изображения для отображения
//     const currentImage = activeImage === 'medical'
//         ? tarifImages.medical
//         : tarifImages.business;

//     // Резервное изображение если API не вернул данные
//     const fallbackImage = 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-ru-scaled.jpg';

//     const toggleAccordion = () => {
//         setIsOpen(!isOpen);
//     };

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const switchImage = (type) => {
//         setActiveImage(type);
//     };

//     return (
//         <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden">
//             <button
//                 onClick={toggleAccordion}
//                 className="w-full flex justify-between items-center p-6 text-left"
//                 style={{ backgroundColor: brandColor, color: 'white' }}
//             >
//                 <h3 className="text-xl font-bold">Стоимость обучения</h3>
//                 <ChevronDown
//                     size={24}
//                     className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
//                 />
//             </button>
//             {isOpen && (
//                 <div className="p-6">
//                     {/* Переключатели изображений */}
//                     <div className="flex mb-4 gap-4">
//                         <button
//                             onClick={() => switchImage('medical')}
//                             className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'medical'
//                                 ? 'text-white shadow-md'
//                                 : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
//                                 }`}
//                             style={{
//                                 backgroundColor: activeImage === 'medical' ? brandColor : undefined
//                             }}
//                         >
//                             Медицинская школа
//                         </button>
//                         <button
//                             onClick={() => switchImage('business')}
//                             className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'business'
//                                 ? 'text-white shadow-md'
//                                 : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
//                                 }`}
//                             style={{
//                                 backgroundColor: activeImage === 'business' ? brandColor : undefined
//                             }}
//                         >
//                             Бизнес и социальная школа
//                         </button>
//                     </div>

//                     {loading ? (
//                         <div className="flex justify-center items-center h-64">
//                             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: brandColor }}></div>
//                         </div>
//                     ) : (
//                         <div className="relative mb-6">
//                             <LazyLoadImage
//                                 src={currentImage || fallbackImage}
//                                 alt={activeImage === 'medical' ? "Стоимость обучения - Медицинская школа" : "Стоимость обучения - Бизнес школа"}
//                                 effect="blur"
//                                 className="w-full h-auto rounded-lg shadow-md"
//                                 placeholderSrc="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/clinic-emu.jpg"
//                             />
//                             <button
//                                 onClick={openModal}
//                                 className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
//                                 style={{ color: brandColor }}
//                                 aria-label="Увеличить изображение"
//                             >
//                                 <ZoomIn size={24} />
//                             </button>
//                         </div>
//                     )}

//                     <Modal
//                         isOpen={isModalOpen}
//                         onRequestClose={closeModal}
//                         style={{
//                             content: {
//                                 top: '50%',
//                                 left: '50%',
//                                 right: 'auto',
//                                 bottom: 'auto',
//                                 marginRight: '-50%',
//                                 transform: 'translate(-50%, -50%)',
//                                 padding: 0,
//                                 border: 'none',
//                                 background: 'transparent',
//                                 maxWidth: '90vw',
//                                 maxHeight: '90vh',
//                             },
//                             overlay: {
//                                 backgroundColor: 'rgba(0, 0, 0, 0.75)',
//                                 zIndex: 10000,
//                             },
//                         }}
//                     >
//                         <div className="relative">
//                             <img
//                                 src={currentImage || fallbackImage}
//                                 alt={activeImage === 'medical' ? "Стоимость обучения - Медицинская школа" : "Стоимость обучения - Бизнес школа"}
//                                 className="max-w-full max-h-[90vh] rounded-lg"
//                             />
//                             <button
//                                 onClick={closeModal}
//                                 className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
//                                 style={{ color: brandColor }}
//                                 aria-label="Закрыть"
//                             >
//                                 <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </Modal>

//                     <div className="text-gray-700 space-y-4">
//                         <p className="text-lg">
//                             На изображениях выше представлена актуальная информация о стоимости обучения по всем направлениям нашего университета. Указаны цены за 1 учебный год.
//                         </p>
//                         <p>
//                             Обратите внимание на следующие особенности:
//                         </p>
//                         <ul className="list-disc pl-6 space-y-2">
//                             <li>
//                                 <strong>Гранты:</strong> Для отличников учебы и победителей олимпиад предусмотрены гранты, которые могут покрывать от 25% до 100% стоимости обучения.
//                             </li>
//                             <li>
//                                 <strong>Стипендии:</strong> Успешные студенты имеют возможность получать ежемесячные стипендии в зависимости от направления.
//                             </li>
//                             <li>
//                                 <strong>Формы оплаты:</strong> Возможна оплата как за весь год обучения, так и по семестрам.
//                             </li>
//                         </ul>
//                         <p>
//                             Для получения подробной информации о стоимости обучения, грантах и условиях оплаты свяжитесь с приемной комиссией по телефону{' '}

//                             <a href="tel:+998781470007"
//                                 className="font-semibold underline"
//                                 style={{ color: brandColor }}
//                             >
//                                 +998(78) 147-00-07
//                             </a>.
//                         </p>
//                     </div>
//                 </div>
//             )
//             }
//         </div >
//     );
// };

// export default PricingAccordion;




'use client';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-modal';
import { ChevronDown, ZoomIn } from 'lucide-react';

// Устанавливаем appElement только на клиенте после монтирования
const initializeModal = () => {
    if (typeof window !== 'undefined') {
        // Изменено: проверяем document.body вместо #__next
        Modal.setAppElement(document.body);
    }
};

const PricingAccordion = ({ tarifImages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('medical'); // medical или business

    // Инициализация react-modal после монтирования компонента
    useEffect(() => {
        initializeModal();
        console.log("PricingAccordion received data:", tarifImages);
    }, [tarifImages]);

    const brandColor = '#6b0e55';         // Основной — глубокий пурпурно-розовый
    const brandColorLight = '#9c3f84';    // Светлее — более мягкий, но всё ещё насыщенный
    const brandColorLighter = '#f6eaf2';  // Самый светлый — почти белый с розовым оттенком

    // Получение текущего изображения для отображения
    const currentImage = activeImage === 'medical'
        ? tarifImages?.medical
        : tarifImages?.business;

    // Резервное изображение если API не вернул данные
    const fallbackImage = 'http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/emu-tariffication-ru-scaled.jpg';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const switchImage = (type) => {
        setActiveImage(type);
    };

    return (
        <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center p-6 text-left"
                style={{ backgroundColor: brandColor, color: 'white' }}
            >
                <h3 className="text-xl font-bold">Стоимость обучения</h3>
                <ChevronDown
                    size={24}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-6">
                    {/* Переключатели изображений */}
                    <div className="flex mb-4 gap-4">
                        <button
                            onClick={() => switchImage('medical')}
                            className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'medical'
                                ? 'text-white shadow-md'
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            style={{
                                backgroundColor: activeImage === 'medical' ? brandColor : undefined
                            }}
                        >
                            Медицинская школа
                        </button>
                        <button
                            onClick={() => switchImage('business')}
                            className={`px-4 py-2 rounded-lg transition-all ${activeImage === 'business'
                                ? 'text-white shadow-md'
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            style={{
                                backgroundColor: activeImage === 'business' ? brandColor : undefined
                            }}
                        >
                            Бизнес и социальная школа
                        </button>
                    </div>

                    {!tarifImages ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: brandColor }}></div>
                        </div>
                    ) : (
                        <div className="relative mb-6">
                            <LazyLoadImage
                                src={currentImage || fallbackImage}
                                alt={activeImage === 'medical' ? "Стоимость обучения - Медицинская школа" : "Стоимость обучения - Бизнес школа"}
                                effect="blur"
                                className="w-full h-auto rounded-lg shadow-md"
                                placeholderSrc="http://next.emu.web-perfomance.uz/wp-content/uploads/2025/04/clinic-emu.jpg"
                            />
                            <button
                                onClick={openModal}
                                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Увеличить изображение"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>
                    )}

                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                padding: 0,
                                border: 'none',
                                background: 'transparent',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                            },
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                zIndex: 10000,
                            },
                        }}
                    >
                        <div className="relative">
                            <img
                                src={currentImage || fallbackImage}
                                alt={activeImage === 'medical' ? "Стоимость обучения - Медицинская школа" : "Стоимость обучения - Бизнес школа"}
                                className="max-w-full max-h-[90vh] rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                                style={{ color: brandColor }}
                                aria-label="Закрыть"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Modal>

                    <div className="text-gray-700 space-y-4">
                        <p className="text-lg">
                            На изображениях выше представлена актуальная информация о стоимости обучения по всем направлениям нашего университета. Указаны цены за 1 учебный год.
                        </p>
                        <p>
                            Обратите внимание на следующие особенности:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Гранты:</strong> Для отличников учебы и победителей олимпиад предусмотрены гранты, которые могут покрывать от 25% до 100% стоимости обучения.
                            </li>
                            <li>
                                <strong>Стипендии:</strong> Успешные студенты имеют возможность получать ежемесячные стипендии в зависимости от направления.
                            </li>
                            <li>
                                <strong>Формы оплаты:</strong> Возможна оплата как за весь год обучения, так и по семестрам.
                            </li>
                        </ul>
                        <p>
                            Для получения подробной информации о стоимости обучения, грантах и условиях оплаты свяжитесь с приемной комиссией по телефону{' '}

                            <a href="tel:+998781470007"
                                className="font-semibold underline"
                                style={{ color: brandColor }}
                            >
                                +998(78) 147-00-07
                            </a>.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PricingAccordion;