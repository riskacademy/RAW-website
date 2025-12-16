import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Risk Awareness Week (RAW) - #1 Global Virtual Risk Conference",
  description: "Join over 20,000 professionals from 120 countries at the world's largest platform dedicated to risk management, decision making and quantitative risk analysis. Best online risk management events, workshops, and webinars on-demand.",
  keywords: [
    "risk management",
    "risk awareness week",
    "online risk management events",
    "best risk webinars",
    "quantitative risk analysis",
    "virtual risk conference",
    "risk management training",
    "CPD credits",
    "decision making",
    "risk modeling"
  ],
  authors: [{ name: "Risk Academy" }],
  openGraph: {
    title: "Risk Awareness Week (RAW) - #1 Global Virtual Risk Conference",
    description: "Join over 20,000 professionals from 120 countries at the world's largest platform dedicated to risk management.",
    type: "website",
    locale: "en_US",
    url: "https://riskawarenessweek.com",
    siteName: "Risk Awareness Week",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Awareness Week (RAW) - #1 Global Virtual Risk Conference",
    description: "Join over 20,000 professionals from 120 countries at the world's largest platform dedicated to risk management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
