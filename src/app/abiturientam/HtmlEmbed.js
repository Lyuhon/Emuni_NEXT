// Файл: app/components/HtmlEmbed.js
'use client';

import { useEffect, useRef } from 'react';

export default function HtmlEmbed({ htmlContent, title = '' }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!htmlContent || !containerRef.current) return;

        // Декодирование HTML-контента из REST API
        const decodedHtml = htmlContent
            .replace(/\\u003C/g, '<')
            .replace(/\\u003E/g, '>')
            .replace(/\\r\\n/g, '\n')
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"');

        // Вставка декодированного HTML
        containerRef.current.innerHTML = decodedHtml;

        // Выполнение скриптов (если они есть в HTML)
        const scripts = containerRef.current.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            Array.from(script.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = script.textContent;
            script.parentNode.replaceChild(newScript, script);
        });
    }, [htmlContent]);

    return (
        <div className="html-embed">
            {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
            <div ref={containerRef} className="html-content"></div>
        </div>
    );
}