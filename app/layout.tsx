import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
