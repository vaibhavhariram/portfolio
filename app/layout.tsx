import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Google Sans isn't on Google Fonts; Inter is a clean, code-friendly sans (similar vibe).
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Hariram",
  description: "Building the next frontier of dev tools. CS @ Berkeley. LLM + geospatial research.",
  openGraph: {
    title: "Vaibhav Hariram",
    description: "Building the next frontier of dev tools. CS @ Berkeley.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
