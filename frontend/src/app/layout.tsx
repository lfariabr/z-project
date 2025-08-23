import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {ZeroDopamineHeader} from "@/components/layout/ZeroDopamineHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Dopamine — Wake Up Call",
  description: "One-second decisions. Goggins-style truth. Web & email delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <main className="flex min-h-screen flex-col items-center justify-start">
          <ZeroDopamineHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
