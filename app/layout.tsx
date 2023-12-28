import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";

import "./globals.css";

const font = Inconsolata({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  description: "Mike Hockerman's personal website.",
  icons: [
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
  ],
  title: "Mike Hockerman",
};

export const viewport: Viewport = {
  themeColor: "#000a12",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className={font.className}>{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
