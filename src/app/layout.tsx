import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ObisHub | Office Business Intelligence Suite",
  description:
    "The only intelligence layer you need to build unlimited B2B growth. Automate complex sales outreach, unify fragmented communication channels, and scale revenue operations.",
  keywords: [
    "ObisHub",
    "B2B Growth",
    "WhatsApp Automation",
    "CRM Integration",
    "Revenue Operations",
    "Office Business Intelligence Suite",
    "Multi-channel Outreach",
  ],
  authors: [{ name: "ObisHub Engineering" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "ObisHub | Office Business Intelligence Suite",
    description:
      "The only intelligence layer you need to build unlimited B2B growth. Automate sales outreach and scale your revenue operations effortlessly.",
    siteName: "ObisHub",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
