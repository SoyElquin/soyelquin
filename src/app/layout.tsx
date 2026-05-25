import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Manrope({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

const siteUrl = "https://soyelquin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elquin Hernández — Portafolio creativo",
    template: "%s · Elquin Hernández"
  },
  description:
    "Portafolio personal de Elquin Hernández Buelvas: productor audiovisual, estratega de marketing, contenido vertical, campañas, Marketplace y diseño comercial.",
  applicationName: "Elquin Hernández Portafolio",
  authors: [{ name: "Elquin Hernández Buelvas" }],
  creator: "Elquin Hernández Buelvas",
  alternates: { canonical: "/" },
  keywords: [
    "Elquin Hernández",
    "portafolio creativo",
    "productor audiovisual",
    "marketing digital",
    "contenido vertical",
    "Meta Ads",
    "TikTok Ads",
    "Marketplace",
    "Montería"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Elquin Hernández — Productor audiovisual y estratega de marketing",
    description: "Portafolio personal: edición de video, contenido vertical, campañas digitales, Marketplace y diseño comercial.",
    siteName: "Elquin Hernández Portafolio",
    locale: "es_CO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elquin Hernández — Portafolio creativo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elquin Hernández — Productor audiovisual y estratega de marketing",
    description: "Edición de video, contenido vertical, campañas digitales, Marketplace y diseño comercial.",
    images: ["/og-image.png"]
  },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#060504",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable} ${space.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/portraits/elquin-head-stack-fade-mobile.webp" media="(max-width: 560px)" />
        <link rel="preload" as="image" href="/assets/portraits/elquin-head-stack-fade-desktop.webp" media="(min-width: 561px)" />
      </head>
      <body>{children}</body>
    </html>
  );
}
