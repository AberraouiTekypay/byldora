import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BYLDORA — Construction Procurement Intelligence",
  description:
    "BYLDORA transforms construction BOQs and project requirements into intelligent RFQs, supplier bids and procurement decisions.",
  keywords: [
    "construction procurement",
    "construction RFQ",
    "construction RFP",
    "BOQ procurement",
    "construction suppliers",
    "construction procurement software",
    "construction bid comparison",
    "tender management",
    "bill of quantities",
    "procurement intelligence",
  ],
  authors: [{ name: "BYLDORA" }],
  openGraph: {
    title: "BYLDORA — Construction Procurement Intelligence",
    description:
      "Turn BOQs and project requirements into structured RFQs, comparable supplier bids and executable procurement decisions.",
    siteName: "BYLDORA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYLDORA — Construction Procurement Intelligence",
    description:
      "Turn BOQs and project requirements into structured RFQs, comparable supplier bids and executable procurement decisions.",
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
        {children}
      </body>
    </html>
  );
}
