import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Fallback for glyphs LTA Identity lacks (em dash, @, accented letters, ...).
const fallback = Inter_Tight({
  variable: "--font-fallback",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')})()`,
          }}
        />
      </head>
      <body className={`${fallback.variable} antialiased`}>{children}</body>
    </html>
  );
}
