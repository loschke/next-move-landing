import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "NextMove AI | Dein leichter Einstieg in die KI-Transformation",
  description: "Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen. Starte jetzt deine KI-Transformation!",
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
    title: "NextMove AI | Dein leichter Einstieg in die KI-Transformation",
    description: "Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.",
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
    title: "NextMove AI | Dein leichter Einstieg in die KI-Transformation",
    description: "Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.",
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
        <JsonLd />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
