import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter, Pacifico } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// cormorant Garamond: serif font used for headlines (h1, h2)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// inter: sans-serif font used mostly for body text and ui elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// pacifico: used for logo-name in navbar and a few other headlines
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rebecka Johansson - Frontend Developer",
  description:
    "Rebecka Johansson's portfolio — a frontend developer with a passion for design, aesthetics and building user-friendly applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${pacifico.variable}`}
    >
      <body>
        {/* navbar and footer rendered on all pages via layout */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
