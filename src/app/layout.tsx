import type { Metadata } from "next";
import { Kantumruy_Pro, Moul } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy-pro",
  subsets: ["latin"],
});

const khmer_moul = Moul({
  variable: "--font-moul",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Pintel Mini App",
  description:
    "An Ecommerce POS Application easy for any users wants to make a store fastly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${kantumruy.variable} ${khmer_moul.variable} antialiased bg-yellow-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
