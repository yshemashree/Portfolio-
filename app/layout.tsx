import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yshemashree.com"),
  title: "Y S Hemashree — Computer Science × Product × AI",
  description:
    "Y S Hemashree is a computer science student, product builder, AI enthusiast, and national hackathon winner. A quiet, handcrafted exhibition of her work.",
  openGraph: {
    title: "Y S Hemashree — Computer Science × Product × AI",
    description:
      "A quiet, handcrafted exhibition — computer science, product building, and applied AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ivory text-navy font-sans antialiased selection:bg-navy selection:text-ivory">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
