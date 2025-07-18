'use client';

import "./globals.css";
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Theme setup
    const systemTheme = 'light';
    const userTheme = localStorage.getItem('theme') || systemTheme;
    
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(userTheme);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="antialiased bg-white">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] lg:w-[1000px] h-full bg-gradient-to-r from-transparent via-indigo-50 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}