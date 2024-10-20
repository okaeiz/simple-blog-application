"use client";

import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Work Sans font from Google Fonts
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-work-sans", // Optional: Using a CSS variable to apply this font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize QueryClient for React Query
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
