'use client';
import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Компонент для интеграции аналитики: Yandex Metrika, Meta Pixel, Google Tag Manager
 * @param {Object} props - Параметры компонента
 * @param {string} yandexId - ID счетчика Yandex Metrika
 * @param {string} pixelId - ID пикселя Meta Pixel
 * @param {string} gtmId - ID Google Tag Manager
 * @returns {JSX.Element} - Компонент с скриптами аналитики
 */
export default function Analytics({
    yandexId = '89860815',
    pixelId = '1157688265576596',
    gtmId = 'G-6NWB2GH3G6',
}) {
    // Отслеживание PageView при загрузке и изменении маршрута
    useEffect(() => {
        // Meta Pixel PageView
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView');
        }

        // Yandex Metrika PageView
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(yandexId, 'hit', window.location.href);
        }

        // Google Tag Manager не требует явного PageView, так как gtag('config') автоматически отслеживает

        // Обработчик изменения маршрута (если используется Next.js router)
        const handleRouteChange = () => {
            if (typeof window !== 'undefined') {
                // Meta Pixel
                if (window.fbq) {
                    window.fbq('track', 'PageView');
                }
                // Yandex Metrika
                if (window.ym) {
                    window.ym(yandexId, 'hit', window.location.href);
                }
            }
        };

        // Подписка на события маршрута (раскомментировать, если используете next/router)
        // import { useRouter } from 'next/router';
        // const router = useRouter();
        // router.events.on('routeChangeComplete', handleRouteChange);

        // Очистка подписки
        return () => {
            // router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [yandexId]);

    return (
        <>
            {/* Yandex Metrika */}
            <Script
                id="yandex-metrika"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym("${yandexId}", "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
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

            {/* Google Tag Manager */}
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
            />
            <Script
                id="gtag-init"
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
        </>
    );
}