import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { firstName, lastName, phone, selectedProgramId, programTitle } = await request.json();

        // Проверка, что все поля заполнены
        if (!firstName || !lastName || !phone || !selectedProgramId || !programTitle) {
            return NextResponse.json(
                { error: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        // Дополнительная валидация
        if (firstName.trim().length < 2) {
            return NextResponse.json(
                { error: 'Имя должно содержать минимум 2 символа' },
                { status: 400 }
            );
        }

        if (lastName.trim().length < 2) {
            return NextResponse.json(
                { error: 'Фамилия должна содержать минимум 2 символа' },
                { status: 400 }
            );
        }

        // Простая валидация телефона (можно усложнить при необходимости)
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
        if (!phoneRegex.test(phone.trim())) {
            return NextResponse.json(
                { error: 'Некорректный формат номера телефона' },
                { status: 400 }
            );
        }

        // Формируем сообщение для Telegram
        const telegramMessage = [
            '*Новая заявка на ОРДИНАТУРУ*',
            '',
            `*Имя Фамилия*: ${firstName.trim()} ${lastName.trim()}`,
            `*Телефон*: ${phone.trim()}`,
            `*Направление*: ${programTitle} (${selectedProgramId})`,
            '',
            `*Дата*: ${new Date().toLocaleString('ru-RU', {
                timeZone: 'Asia/Tashkent',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            })}`
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
            console.error('Telegram API error:', telegramResult);
            throw new Error('Ошибка Telegram API');
        }

        // Логируем успешную отправку
        console.log(`✅ Заявка успешно отправлена: ${firstName} ${lastName} - ${programTitle}`);

        return NextResponse.json({
            success: true,
            message: 'Заявка успешно отправлена!'
        }, { status: 200 });

    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Ошибка при отправке заявки. Попробуйте еще раз.' },
            { status: 500 }
        );
    }
}