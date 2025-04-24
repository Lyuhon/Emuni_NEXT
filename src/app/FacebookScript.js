'use client';
import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Компонент для интеграции Facebook Meta Pixel
 * @param {string} pixelId - ID пикселя Facebook (Meta)
 * @returns {JSX.Element} - Компонент с скриптом Facebook Pixel
 */
export default function FacebookPixel({ pixelId = '1350016926067466' }) {
    // Инициализация события PageView при первой загрузке страницы
    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView');
        }

        // Опционально: отслеживание изменений маршрута в приложении Next.js
        const handleRouteChange = () => {
            if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'PageView');
            }
        };

        // Здесь можно добавить подписку на события router если используете
        // например, router.events.on('routeChangeComplete', handleRouteChange);

        // Очистка подписки при размонтировании компонента
        return () => {
            // router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <>
            {/* Facebook Meta Pixel - базовый скрипт */}
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

            {/* Резервный вариант для пользователей без JavaScript */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}