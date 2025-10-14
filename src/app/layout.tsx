import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aidan Dombrowski Digital Portfolio",
  description: "Portfolio of Aidan Dombrowski - UX designer, motion designer, and graphic designer. From initial wireframes to polished prototypes, I handle the full spectrum: UX research, interface design, motion systems, and front-end development.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Aidan Dombrowski Digital Portfolio",
    description: "Portfolio of Aidan Dombrowski - UX designer, motion designer, and graphic designer.",
    url: "https://aidandombrowski.com",
    siteName: "Aidan Dombrowski Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidan Dombrowski Digital Portfolio",
    description: "Portfolio of Aidan Dombrowski - UX designer, motion designer, and graphic designer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
