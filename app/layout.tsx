import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
// @ts-ignore: CSS module type declarations are not present in this project setup
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { AnimatedCursor } from "@/components/common/AnimatedCursor";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { profile } from "@/lib/data";

const display = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://gayathiriportfolio-nine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  keywords: [
    "Gayathiri V",
    "Full Stack Developer",
    "React Developer",
    "Java Developer",
    "Machine Learning",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body dark noise antialiased`}
      >
        <SmoothScroll />
        <AnimatedCursor />
        <ScrollProgress />
        <CommandPalette />
        <BackToTop />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
