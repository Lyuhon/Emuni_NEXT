// // // С задержкой аналитики
// // 'use client';
// // import { useEffect, useState } from 'react';
// // import Script from 'next/script';

// // /**
// //  * Компонент для интеграции аналитики: Yandex Metrika, Meta Pixel, Google Tag Manager
// //  * с задержкой загрузки после первого взаимодействия пользователя
// //  * @param {Object} props - Параметры компонента
// //  * @param {string} yandexId - ID счетчика Yandex Metrika
// //  * @param {string} pixelId - ID пикселя Meta Pixel
// //  * @param {string} gtmId - ID Google Tag Manager
// //  * @param {number} delay - Задержка загрузки в миллисекундах (по умолчанию 1000 мс)
// //  * @returns {JSX.Element} - Компонент с скриптами аналитики
// //  */
// // export default function Analytics({
// //     yandexId = '89860815',
// //     pixelId = '1779278256304726',
// //     gtmId = 'G-6NWB2GH3G6',
// //     delay = 1000, // задержка в 1 секунду
// // }) {
// //     const [hasInteracted, setHasInteracted] = useState(false);
// //     const [shouldLoadScripts, setShouldLoadScripts] = useState(false);

// //     // Обнаружение первого взаимодействия пользователя
// //     useEffect(() => {
// //         const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];

// //         const handleInteraction = () => {
// //             setHasInteracted(true);

// //             // Удаляем обработчики событий после первого взаимодействия
// //             interactionEvents.forEach(event => {
// //                 window.removeEventListener(event, handleInteraction);
// //             });
// //         };

// //         // Добавляем обработчики событий
// //         interactionEvents.forEach(event => {
// //             window.addEventListener(event, handleInteraction);
// //         });

// //         return () => {
// //             // Очистка обработчиков при размонтировании
// //             interactionEvents.forEach(event => {
// //                 window.removeEventListener(event, handleInteraction);
// //             });
// //         };
// //     }, []);

// //     // Установка таймера для загрузки скриптов после взаимодействия
// //     useEffect(() => {
// //         let timeoutId;

// //         if (hasInteracted) {
// //             timeoutId = setTimeout(() => {
// //                 setShouldLoadScripts(true);
// //             }, delay);
// //         }

// //         return () => {
// //             if (timeoutId) clearTimeout(timeoutId);
// //         };
// //     }, [hasInteracted, delay]);

// //     // Отслеживание PageView при загрузке и изменении маршрута
// //     useEffect(() => {
// //         if (!shouldLoadScripts) return;

// //         // Код для отслеживания будет выполняться только после загрузки скриптов

// //         // Meta Pixel PageView
// //         if (typeof window !== 'undefined' && window.fbq) {
// //             window.fbq('track', 'PageView');
// //         }

// //         // Yandex Metrika PageView
// //         if (typeof window !== 'undefined' && window.ym) {
// //             window.ym(yandexId, 'hit', window.location.href);
// //         }

// //         // Обработчик изменения маршрута
// //         const handleRouteChange = () => {
// //             if (typeof window !== 'undefined') {
// //                 // Meta Pixel
// //                 if (window.fbq) {
// //                     window.fbq('track', 'PageView');
// //                 }
// //                 // Yandex Metrika
// //                 if (window.ym) {
// //                     window.ym(yandexId, 'hit', window.location.href);
// //                 }
// //             }
// //         };

// //         // Для App Router в Next.js 13+
// //         if (typeof window !== 'undefined') {
// //             window.addEventListener('popstate', handleRouteChange);
// //         }

// //         return () => {
// //             if (typeof window !== 'undefined') {
// //                 window.removeEventListener('popstate', handleRouteChange);
// //             }
// //         };
// //     }, [shouldLoadScripts, yandexId]);

// //     // Если скрипты не должны быть загружены, возвращаем пустой фрагмент
// //     if (!shouldLoadScripts) {
// //         return null;
// //     }

// //     return (
// //         <>
// //             {/* Yandex Metrika */}
// //             <Script
// //                 id="yandex-metrika"
// //                 strategy="afterInteractive"
// //                 dangerouslySetInnerHTML={{
// //                     __html: `
// //                     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
// //                     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
// //                     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
// //                     ym("${yandexId}", "init", {
// //                         clickmap:true,
// //                         trackLinks:true,
// //                         accurateTrackBounce:true
// //                     });
// //                     `,
// //                 }}
// //             />
// //             <noscript>
// //                 <div>
// //                     <img
// //                         src={`https://mc.yandex.ru/watch/${yandexId}`}
// //                         style={{ position: 'absolute', left: '-9999px' }}
// //                         alt=""
// //                     />
// //                 </div>
// //             </noscript>

// //             {/* Meta Pixel */}
// //             <Script
// //                 id="facebook-pixel"
// //                 strategy="afterInteractive"
// //                 dangerouslySetInnerHTML={{
// //                     __html: `
// //                     !function(f,b,e,v,n,t,s)
// //                     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// //                     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// //                     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// //                     n.queue=[];t=b.createElement(e);t.async=!0;
// //                     t.src=v;s=b.getElementsByTagName(e)[0];
// //                     s.parentNode.insertBefore(t,s)}(window, document,'script',
// //                     'https://connect.facebook.net/en_US/fbevents.js');
// //                     fbq('init', '${pixelId}');
// //                     fbq('track', 'PageView');
// //                     `,
// //                 }}
// //             />
// //             <noscript>
// //                 <img
// //                     height="1"
// //                     width="1"
// //                     style={{ display: 'none' }}
// //                     src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
// //                     alt=""
// //                 />
// //             </noscript>

// //             {/* Google Tag Manager */}
// //             <Script
// //                 id="google-tag-manager"
// //                 strategy="afterInteractive"
// //                 src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
// //             />
// //             <Script
// //                 id="gtag-init"
// //                 strategy="afterInteractive"
// //                 dangerouslySetInnerHTML={{
// //                     __html: `
// //                     window.dataLayer = window.dataLayer || [];
// //                     function gtag(){dataLayer.push(arguments);}
// //                     gtag('js', new Date());
// //                     gtag('config', '${gtmId}');
// //                     `,
// //                 }}
// //             />
// //         </>
// //     );
// // }


// // С задержкой аналитики
// 'use client';
// import { useEffect, useState } from 'react';
// import Script from 'next/script';

// /**
//  * Компонент для интеграции аналитики: Yandex Metrika, Meta Pixel, Google Tag Manager
//  * с задержкой загрузки после первого взаимодействия пользователя
//  * @param {Object} props - Параметры компонента
//  * @param {string} yandexId - ID счетчика Yandex Metrika
//  * @param {string} pixelId - ID пикселя Meta Pixel
//  * @param {string} gtmId - ID Google Tag Manager
//  * @param {number} delay - Задержка загрузки в миллисекундах (по умолчанию 1000 мс)
//  * @returns {JSX.Element} - Компонент с скриптами аналитики
//  */
// export default function Analytics({
//     yandexId = '89860815',
//     pixelId = '1779278256304726',
//     gtmId = 'G-6NWB2GH3G6',
//     delay = 1000, // задержка в 1 секунду
// }) {
//     const [shouldLoadScripts, setShouldLoadScripts] = useState(true); // сразу true вместо false
//     // const [hasInteracted, setHasInteracted] = useState(false);

//     // // Обнаружение первого взаимодействия пользователя
//     // useEffect(() => {
//     //     const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];

//     //     const handleInteraction = () => {
//     //         setHasInteracted(true);

//     //         // Удаляем обработчики событий после первого взаимодействия
//     //         interactionEvents.forEach(event => {
//     //             window.removeEventListener(event, handleInteraction);
//     //         });
//     //     };

//     //     // Добавляем обработчики событий
//     //     interactionEvents.forEach(event => {
//     //         window.addEventListener(event, handleInteraction);
//     //     });

//     //     return () => {
//     //         // Очистка обработчиков при размонтировании
//     //         interactionEvents.forEach(event => {
//     //             window.removeEventListener(event, handleInteraction);
//     //         });
//     //     };
//     // }, []);

//     // // Установка таймера для загрузки скриптов после взаимодействия
//     // useEffect(() => {
//     //     let timeoutId;

//     //     if (hasInteracted) {
//     //         timeoutId = setTimeout(() => {
//     //             setShouldLoadScripts(true);
//     //         }, delay);
//     //     }

//     //     return () => {
//     //         if (timeoutId) clearTimeout(timeoutId);
//     //     };
//     // }, [hasInteracted, delay]);

//     // Отслеживание PageView при загрузке и изменении маршрута
//     useEffect(() => {
//         if (!shouldLoadScripts) return;

//         // Код для отслеживания будет выполняться только после загрузки скриптов

//         // Meta Pixel PageView
//         if (typeof window !== 'undefined' && window.fbq) {
//             window.fbq('track', 'PageView');
//         }

//         // Yandex Metrika PageView
//         if (typeof window !== 'undefined' && window.ym) {
//             window.ym(yandexId, 'hit', window.location.href);
//         }

//         // Обработчик изменения маршрута
//         const handleRouteChange = () => {
//             if (typeof window !== 'undefined') {
//                 // Meta Pixel
//                 if (window.fbq) {
//                     window.fbq('track', 'PageView');
//                 }
//                 // Yandex Metrika
//                 if (window.ym) {
//                     window.ym(yandexId, 'hit', window.location.href);
//                 }
//             }
//         };

//         // Для App Router в Next.js 13+
//         if (typeof window !== 'undefined') {
//             window.addEventListener('popstate', handleRouteChange);
//         }

//         return () => {
//             if (typeof window !== 'undefined') {
//                 window.removeEventListener('popstate', handleRouteChange);
//             }
//         };
//     }, [shouldLoadScripts, yandexId]);

//     // Если скрипты не должны быть загружены, возвращаем пустой фрагмент
//     if (!shouldLoadScripts) {
//         return null;
//     }

//     return (
//         <>
//             {/* Yandex Metrika */}
//             <Script
//                 id="yandex-metrika"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: `
//                     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//                     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//                     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
//                     ym("${yandexId}", "init", {
//                         clickmap:true,
//                         trackLinks:true,
//                         accurateTrackBounce:true
//                     });
//                     `,
//                 }}
//             />
//             <noscript>
//                 <div>
//                     <img
//                         src={`https://mc.yandex.ru/watch/${yandexId}`}
//                         style={{ position: 'absolute', left: '-9999px' }}
//                         alt=""
//                     />
//                 </div>
//             </noscript>

//             {/* Meta Pixel */}
//             <Script
//                 id="facebook-pixel"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: `
//                     !function(f,b,e,v,n,t,s)
//                     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//                     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//                     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//                     n.queue=[];t=b.createElement(e);t.async=!0;
//                     t.src=v;s=b.getElementsByTagName(e)[0];
//                     s.parentNode.insertBefore(t,s)}(window, document,'script',
//                     'https://connect.facebook.net/en_US/fbevents.js');
//                     fbq('init', '${pixelId}');
//                     fbq('track', 'PageView');
//                     `,
//                 }}
//             />
//             <noscript>
//                 <img
//                     height="1"
//                     width="1"
//                     style={{ display: 'none' }}
//                     src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
//                     alt=""
//                 />
//             </noscript>

//             {/* Google Tag Manager */}
//             <Script
//                 id="google-tag-manager"
//                 strategy="afterInteractive"
//                 src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
//             />
//             <Script
//                 id="gtag-init"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: `
//                     window.dataLayer = window.dataLayer || [];
//                     function gtag(){dataLayer.push(arguments);}
//                     gtag('js', new Date());
//                     gtag('config', '${gtmId}');
//                     `,
//                 }}
//             />
//         </>
//     );
// }



// С задержкой аналитики
'use client';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Компонент для интеграции аналитики: Yandex Metrika, Meta Pixel, Google Tag Manager
 * с задержкой загрузки после первого взаимодействия пользователя
 * @param {Object} props - Параметры компонента
 * @param {string|string[]} yandexIds - ID счетчиков Yandex Metrika (может быть строкой или массивом)
 * @param {string} pixelId - ID пикселя Meta Pixel
 * @param {string|string[]} gtmIds - ID Google Tag Manager/Analytics (может быть строкой или массивом)
 * @param {string|string[]} gtagIds - ID Google Analytics gtag (может быть строкой или массивом)
 * @param {number} delay - Задержка загрузки в миллисекундах (по умолчанию 1000 мс)
 * @returns {JSX.Element} - Компонент с скриптами аналитики
 */
export default function Analytics({
    yandexIds = ['89860815', '102721859'], // массив ID для Yandex Metrika
    pixelId = '1779278256304726',
    gtmIds = ['G-6NWB2GH3G6', 'G-SPLF9SK8RL', 'G-WFGKQ19KC4'], // массив ID для Google Analytics
    gtagIds = ['AW-17155121413'], // массив ID для Google Ads
    delay = 1000, // задержка в 1 секунду
}) {
    const [shouldLoadScripts, setShouldLoadScripts] = useState(true);

    // Нормализуем входные параметры в массивы
    const yandexIdArray = Array.isArray(yandexIds) ? yandexIds : [yandexIds];
    const gtmIdArray = Array.isArray(gtmIds) ? gtmIds : [gtmIds];
    const gtagIdArray = Array.isArray(gtagIds) ? gtagIds : [gtagIds];

    // Отслеживание PageView при загрузке и изменении маршрута
    useEffect(() => {
        if (!shouldLoadScripts) return;

        // Meta Pixel PageView
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView');
        }

        // Yandex Metrika PageView для всех счетчиков
        if (typeof window !== 'undefined' && window.ym) {
            yandexIdArray.forEach(id => {
                window.ym(id, 'hit', window.location.href);
            });
        }

        // Обработчик изменения маршрута
        const handleRouteChange = () => {
            if (typeof window !== 'undefined') {
                // Meta Pixel
                if (window.fbq) {
                    window.fbq('track', 'PageView');
                }
                // Yandex Metrika для всех счетчиков
                if (window.ym) {
                    yandexIdArray.forEach(id => {
                        window.ym(id, 'hit', window.location.href);
                    });
                }
            }
        };

        // Для App Router в Next.js 13+
        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', handleRouteChange);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('popstate', handleRouteChange);
            }
        };
    }, [shouldLoadScripts, yandexIdArray]);

    // Если скрипты не должны быть загружены, возвращаем пустой фрагмент
    if (!shouldLoadScripts) {
        return null;
    }

    return (
        <>
            {/* Yandex Metrika счетчики */}
            {yandexIdArray.map((yandexId) => (
                <React.Fragment key={`yandex-${yandexId}`}>
                    <Script
                        id={`yandex-metrika-${yandexId}`}
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                            ym("${yandexId}", "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:${yandexId === '102721859' ? 'true' : 'false'}
                            });
                            `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src={`https://mc.yandex.ru/watch/${yandexId}`}
                                style={{ position: 'absolute', left: '-9999px' }}
                                alt=""
                            />
                        </div>
                    </noscript>
                </React.Fragment>
            ))}

            {/* Meta Pixel */}
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${pixelId}');
                    fbq('track', 'PageView');
                    `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>

            {/* Google Analytics/Tag Manager счетчики */}
            {gtmIdArray.map((gtmId) => (
                <React.Fragment key={`gtm-${gtmId}`}>
                    <Script
                        id={`google-tag-${gtmId}`}
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
                    />
                    <Script
                        id={`gtag-init-${gtmId}`}
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gtmId}');
                            `,
                        }}
                    />
                </React.Fragment>
            ))}

            {/* Google Ads/gtag счетчики */}
            {gtagIdArray.map((gtagId) => (
                <React.Fragment key={`gtag-${gtagId}`}>
                    <Script
                        id={`google-ads-${gtagId}`}
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
                    />
                    <Script
                        id={`gtag-ads-init-${gtagId}`}
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gtagId}');
                            `,
                        }}
                    />
                </React.Fragment>
            ))}
        </>
    );
}