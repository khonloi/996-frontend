import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { fetchCategories } from "@/lib/api";

export const metadata: Metadata = {
  title: "996 Market | Save Money. Live Better.",
  description: "Your one-stop shop for everything.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetchCategories();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar initialCategories={categories} />
          <main className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
