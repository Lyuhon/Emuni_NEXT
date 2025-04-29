import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Instead of request.json(), we use request.formData() for file uploads
        const formData = await request.formData();

        // Extract form fields
        const authorName = formData.get('authorName');
        const coauthors = formData.get('coauthors');
        const title = formData.get('title');
        const workplace = formData.get('workplace');
        const file = formData.get('file');

        // Check required fields
        if (!authorName || !title || !workplace || !file) {
            return NextResponse.json(
                { error: 'Необходимо заполнить все обязательные поля' },
                { status: 400 }
            );
        }

        // Check file type (must be .docx)
        if (!file.name.endsWith('.docx')) {
            return NextResponse.json(
                { error: 'Файл должен быть в формате .docx' },
                { status: 400 }
            );
        }

        // Check file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'Размер файла не должен превышать 10 МБ' },
                { status: 400 }
            );
        }

        // In a production environment, you might want to:
        // 1. Upload the file to a storage service (AWS S3, Google Cloud Storage, etc.)
        // 2. Store metadata in a database
        // For this example, we'll just send the information to Telegram

        // Format the message for Telegram
        const telegramMessage = [
            '*Новая статья для публикации*',
            '',
            `*Автор*: ${authorName}`,
            `*Соавторы*: ${coauthors || 'Нет'}`,
            `*Название статьи*: ${title}`,
            `*Место работы*: ${workplace}`,
            `*Имя файла*: ${file.name}`,
            `*Размер файла*: ${(file.size / 1024 / 1024).toFixed(2)} МБ`,
        ].join('\n');

        // Send message to Telegram
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

        // Send the file as a document to Telegram
        // First, we need to convert the file to an ArrayBuffer
        const fileArrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(fileArrayBuffer);

        // Create form data for sending the file
        const telegramFileFormData = new FormData();
        telegramFileFormData.append('chat_id', '-1002557194537');
        telegramFileFormData.append('document', new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }), file.name);
        telegramFileFormData.append('caption', `Статья: ${title} | Автор: ${authorName}`);

        // Send the file to Telegram
        const telegramFileResponse = await fetch(
            `https://api.telegram.org/bot7024015759:AAGND8z6XlpYuNtFs2UXH4iVsRD_v9xvpts/sendDocument`,
            {
                method: 'POST',
                body: telegramFileFormData,
            }
        );

        const telegramFileResult = await telegramFileResponse.json();
        if (!telegramFileResult.ok) {
            console.error('Telegram file upload error:', telegramFileResult);
            // We still continue if file sending fails, just log the error
        }

        return NextResponse.json({
            success: true,
            message: 'Статья успешно отправлена!'
        }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Ошибка при отправке статьи' },
            { status: 500 }
        );
    }
}