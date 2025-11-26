import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

const futura = localFont({
  src: [
    {
      path: "../public/Fonts/Futura-Md-BT-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/Futura-Md-BT-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Fonts/Futura-Md-BT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Fonts/Futura-Md-BT-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Modern Next.js Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futura.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
