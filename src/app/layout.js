// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";

// // import Header from "/src/components/Header";
// // import Footer from "/src/components/Footer";


// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata = {
// //   title: "EMU University",
// //   description: "EURASIAN MULTIDISCIPLINARY UNIVERSITY",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <head>
// //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// //         <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
// //       </head>
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// //       >
// //         <Header />
// //         {children}
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }


// import Analytics from './Analytics';
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Header from "/src/components/Header";
// import Footer from "/src/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "EMU University Tashkent",
//   description: "EURASIAN MULTIDISCIPLINARY UNIVERSITY",
//   icons: {
//     icon: [
//       { url: '/favicon-32x32.png', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' },
//     ],
//     shortcut: [{ url: '/favicon-32x32.png' }],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

//         <Analytics
//           yandexId="89860815"
//           pixelId="1779278256304726"
//           gtmId="G-6NWB2GH3G6"
//         />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
//       >

//         <Header />
//         {children}
//         <Footer />

//       </body>
//     </html>
//   );
// }




// layout.js
import Analytics from './Analytics';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EMU University Tashkent",
  description: "EURASIAN MULTIDISCIPLINARY UNIVERSITY",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: [{ url: '/favicon-32x32.png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

        <Analytics
          yandexIds={['89860815', '102721859']}
          pixelId="1779278256304726"
          gtmIds={['G-6NWB2GH3G6', 'G-SPLF9SK8RL', 'G-WFGKQ19KC4']}
          gtagIds={['AW-17155121413']}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}