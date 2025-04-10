import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import ReferralTracker from "../components/ReferralTracker";

export const metadata: Metadata = {
  title: "NextMove AI: Dein leichter Einstieg in die KI-Welt",
  description: "Starte deine KI-Reise mit NextMove AI! Wir machen KI zugänglich und liefern praxisnahe Lösungen für dein Unternehmen. Entdecke jetzt die Möglichkeiten!",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  keywords: "KI-Transformation, KI-Beratung, Künstliche Intelligenz, KI-Einstieg, KI-Strategie, KI-Implementierung",
  authors: [
    { name: "NextMove AI Team" }
  ],
  creator: "NextMove AI",
  publisher: "NextMove AI",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://next-move.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NextMove AI: Dein leichter Einstieg in die KI-Welt",
    description: "Starte deine KI-Reise mit NextMove AI! Wir machen KI zugänglich und liefern praxisnahe Lösungen für dein Unternehmen. Entdecke jetzt die Möglichkeiten!",
    url: "https://next-move.ai",
    siteName: "NextMove AI",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://next-move.ai/img/office.webp",
        width: 1200,
        height: 630,
        alt: "NextMove AI Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextMove AI: Dein leichter Einstieg in die KI-Welt",
    description: "Starte deine KI-Reise mit NextMove AI! Wir machen KI zugänglich und liefern praxisnahe Lösungen für dein Unternehmen. Entdecke jetzt die Möglichkeiten!",
    images: ["https://next-move.ai/img/office.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased" suppressHydrationWarning>
        <Script 
          defer 
          src="https://analytics.kvix.pro/script.js" 
          data-website-id="d9446da1-3244-4764-9250-f6e7c92db1e5"
        />
        <JsonLd />
        <ReferralTracker />
        {children}
      </body>
    </html>
  );
}
