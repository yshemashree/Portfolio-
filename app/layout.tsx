import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorTrail from "@/components/CursorTrail";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yshemashree.com"),
  title: "Y S Hemashree — AI, translated into decisions",
  description:
    "I make advanced AI legible and actionable for the people who have to decide with it — product management, AI agents, and applied ML, built for the bridge between business and technology.",
  openGraph: {
    title: "Y S Hemashree — AI, translated into decisions",
    description:
      "I make advanced AI legible and actionable for the people who have to decide with it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-canvas text-ink font-sans antialiased selection:bg-signal selection:text-canvas">
        <MotionConfig reducedMotion="user">
          <CursorTrail />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
