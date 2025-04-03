// app/special-page/layout.js
import { Geist, Geist_Mono } from "next/font/google";

// Импортируем те же шрифты, что в корневом layout
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Можно импортировать кастомные компоненты для этой страницы
import Header_landing from "/src/components/Header_landing"; // Предположим, у вас есть такой компонент

// Метаданные для этой страницы (опционально)
export const metadata = {
  title: "Special Page - EMU University",
  description: "A special page with a custom layout for EMU University",
};

export default function SpecialPageLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Подключаем те же шрифты, что в корневом layout */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased special-page-body`}
      >
        {/* Используем кастомный заголовок вместо обычного Header */}
        <Header_landing />

        {/* Добавляем кастомный контейнер для контента */}
        <div className="special-page-container">
          {children}
        </div>

        {/* Можно убрать футер или добавить кастомный */}
        {/* <Footer /> */}
        <footer className="special-footer">
          <p>Кастомный футер для Special Page © 2025</p>
        </footer>
      </body>
    </html>
  );
}