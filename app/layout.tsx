import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { Sidenav } from "./components/navigation/Sidenav";
import { GradientSeparator } from "./components/GradientSeparator";
import { Topnav } from "./components/navigation/Topnav";

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

export const viewport: Viewport = {
  themeColor: "#08080D", // cobalt-950
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={clsx(ibmPlexSans.variable, geistMono.variable, "antialiased bg-cobalt-950")}>
        <Analytics />
        <main className="flex flex-row min-h-screen">
          <Sidenav />
          <div className="min-h-screen">
            <GradientSeparator />
          </div>
          <div className="flex flex-col min-h-screen grow bg-cobalt-900">
            <Topnav />
            <div className="flex flex-col">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
