import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";

// cormorant Garamond: serif font used for headlines (h1, h2)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// inter: sans-serif font used for body text, nav and UI elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebecka Johansson - Frontend Developer",
  description:
    "A Portfolio of Rebecka, a frontend developer with a passion for design, aesthetics and building applications that are user-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar /> {/* Rendered on all pages via layout */}
        {children}
      </body>
    </html>
  );
}
