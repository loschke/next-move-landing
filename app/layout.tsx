import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextMove | Consulting & SaaS Solutions",
  description: "Professional consulting services and innovative SaaS solutions to transform your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
