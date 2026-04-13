import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  // ── Basic ────────────────────────────────────────────────
  title: "Peter Wang — Software Engineer",
  description:
    "Software Engineer specialising in Full-Stack Development, Data Analytics & Data Engineering. Based in New York.",

  // ── Canonical URL ────────────────────────────────────────
  metadataBase: new URL("https://itspetah.github.io"),

  // ── Open Graph (LinkedIn, iMessage, Slack previews) ──────
  openGraph: {
    title: "Peter Wang — Software Engineer",
    description:
      "Software Engineer specialising in Full-Stack Development, Data Analytics & Data Engineering.",
    url: "https://itspetah.github.io",
    siteName: "Peter Wang",
    images: [
      {
        url: "/og-image.png", // drop a 1200×630 image in /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Peter Wang — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X card ─────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Peter Wang — Software Engineer",
    description:
      "Software Engineer specialising in Full-Stack Development, Data Analytics & Data Engineering.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ── Search engines ───────────────────────────────────────
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f3b984f6-d42c-446a-b477-8d1bf307c25a"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}