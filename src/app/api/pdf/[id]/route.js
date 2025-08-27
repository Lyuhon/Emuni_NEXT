// app/api/pdf/[id]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { id } = params;

        // Получаем данные о PDF файлах с бекенда
        const dataRes = await fetch("https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/84325", {
            next: { revalidate: 36000 }
        });

        if (!dataRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }

        const data = await dataRes.json();

        // Находим нужный PDF файл по ID
        const pdfFile = data.acf.predmet
            .map(subject => subject.rezultat_v_pdf)
            .find(file => file.ID.toString() === id);

        if (!pdfFile) {
            return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
        }

        // Загружаем PDF файл с бекенда
        const pdfRes = await fetch(pdfFile.url);

        if (!pdfRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 });
        }

        const pdfBuffer = await pdfRes.arrayBuffer();

        // Возвращаем PDF с правильными заголовками
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${pdfFile.filename}"`,
                'Content-Length': pdfBuffer.byteLength.toString(),
                'Cache-Control': 'public, max-age=3600', // Кешируем на час
            },
        });

    } catch (error) {
        console.error('Error proxying PDF:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}