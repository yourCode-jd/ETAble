import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

const futura = localFont({
  src: [
    {
      path: "../public/Fonts/Futura Bk BT Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/Futura Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/Futura Md BT Medium Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Fonts/Futura Md BT Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

/* ✅ Google Font: DM Sans */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
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
      <body
        className={`${futura.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
