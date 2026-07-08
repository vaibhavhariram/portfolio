import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "./globals.css";

const oldStandard = Old_Standard_TT({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Hariram",
  description:
    "CS & Geography @ UC Berkeley. Building AI systems people can trust—Intel, BAIR/Gorilla BFCL, Shana.",
  openGraph: {
    title: "Vaibhav Hariram",
    description: "CS & Geography @ UC Berkeley. AI/ML engineering & research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oldStandard.variable} antialiased`}>{children}</body>
    </html>
  );
}
