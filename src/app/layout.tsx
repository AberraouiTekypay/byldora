import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/languageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BYLDORA | Construction Procurement Intelligence",
  description:
    "BYLDORA transforme les BOQ et besoins de projets de construction en consultations structurées, comparatifs intelligents et décisions d'achat documentées. An EM300.co Company.",
  keywords: [
    "construction procurement",
    "maîtrise d'ouvrage",
    "intelligence achats BTP",
    "appels d'offres construction",
    "comparatif devis BTP",
    "BOQ procurement",
    "DQE BTP",
    "CCTP conformité",
    "construction procurement intelligence",
    "EM300",
  ],
  authors: [{ name: "BYLDORA Technologies — EM300.co" }],
  openGraph: {
    title: "BYLDORA | Construction Procurement Intelligence",
    description:
      "BYLDORA transforme les BOQ et besoins de projets de construction en consultations structurées, comparatifs intelligents et décisions d'achat documentées.",
    siteName: "BYLDORA",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYLDORA | Construction Procurement Intelligence",
    description:
      "BYLDORA transforme les BOQ et besoins de projets de construction en consultations structurées, comparatifs intelligents et décisions d'achat documentées.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-byldora-warm-white text-byldora-text-primary selection:bg-byldora-electric selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
