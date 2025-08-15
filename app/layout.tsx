import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { Sidenav } from "./components/Navigation";
import { GradientSeparator } from "./components/GradientSeparator";

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
        <main className="flex flex-row">
          <Sidenav />
          <div className="h-screen">
            <GradientSeparator vertical animated />
          </div>
          <div className="flex flex-col min-h-screen grow bg-[#101019]">{children}</div>
        </main>
      </body>
    </html>
  );
}
