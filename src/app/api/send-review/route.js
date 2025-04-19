import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, phone, review } = await request.json();

        // Проверка, что все поля заполнены
        if (!name || !phone || !review) {
            return NextResponse.json(
                { error: 'Все поля обязательны' },
                { status: 400 }
            );
        }

        // Формируем сообщение для Telegram
        const telegramMessage = [
            '*Новый отзыв*',
            '',
            `*Имя*: ${name}`,
            `*Телефон*: ${phone}`,
            `*Отзыв*: ${review}`
        ].join('\n');

        // Отправляем сообщение в Telegram
        const telegramApiUrl = `https://api.telegram.org/bot7024015759:AAGND8z6XlpYuNtFs2UXH4iVsRD_v9xvpts/sendMessage`;
        const telegramResponse = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '-1002557194537',
                text: telegramMessage,
                parse_mode: 'Markdown',
            }),
        });

        const telegramResult = await telegramResponse.json();
        if (!telegramResult.ok) {
            throw new Error('Ошибка Telegram API');
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Ошибка при отправке отзыва' },
            { status: 500 }
        );
    }
}