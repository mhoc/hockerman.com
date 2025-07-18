import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import styles from "./index.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Hockerman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={clsx(geistSans.variable, geistMono.variable, "antialiased bg-gray-950")}>
        <Analytics />
        <main className={styles.xcontainer}>{children}</main>
      </body>
    </html>
  );
}
