import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personal } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://sharanr.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — AI & Machine Learning Engineer`,
    template: `%s — ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "Sharan R",
    "AI Engineer",
    "Generative AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Software Engineer",
    "Portfolio",
    "Python Developer",
    "Computer Vision",
    "Bangalore",
  ],
  authors: [{ name: personal.name, url: personal.linkedin }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — AI & Machine Learning Engineer`,
    description: personal.summary,
    siteName: `${personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — AI & Machine Learning Engineer`,
    description: personal.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface focus:rounded-lg focus-ring"
        >
          Skip to content
        </a>
        <div className="fixed inset-0 -z-10 bg-bg" aria-hidden="true">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 bg-glow-radial" />
        </div>
        <ParticleField />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
