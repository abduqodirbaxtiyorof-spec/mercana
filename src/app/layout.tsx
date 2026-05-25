import type { Metadata } from "next";
import Script from "next/script";

import { MicasaTypekit } from "@/components/micasa/MicasaTypekit";

import "./globals.css";

export const metadata: Metadata = {
  title: "MICASA - Design & Architecture",
  description: "MICASA - Design & Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="/micasa/styles/main.css" />
        <link rel="stylesheet" href="/micasa/fontawesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/micasa-overrides.css" />
        <style>{`html, body { background-color: #000; }`}</style>
      </head>
      <body>
        <MicasaTypekit />
        {children}
        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/micasa/scripts/micasa-guard.js"
          strategy="afterInteractive"
        />
        <Script src="/micasa/scripts/main.js" strategy="afterInteractive" />
        <Script src="/micasa/scripts/micasa-boot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
