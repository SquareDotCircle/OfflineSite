import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offline - Backing up humanity's knowledge on a hard drive",
  description: "Plug it in to any computer - ask and search anything about anything without being connected to internet - 100g of complete self reliance.",
  keywords: ["offline AI", "personal AI", "private AI", "portable intelligence", "no internet", "data privacy", "prepper tools", "self reliance", "USB drive", "offline search"],
  authors: [{ name: "Offline" }],
  openGraph: {
    title: "Offline - Backing up humanity's knowledge on a hard drive",
    description: "Plug it in to any computer - ask and search anything without internet. 100g of complete self reliance.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
