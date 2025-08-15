import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  weight: "500",
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
      <body className={clsx(ibmPlexSans.variable, geistMono.variable, "antialiased")}>
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  );
}
