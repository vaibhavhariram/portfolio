import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Fallback for glyphs LTA Identity lacks (em dash, @, accented letters, ...).
// Medium only, so fallback glyphs match LTA Identity's single weight even in bold text.
const fallback = Inter_Tight({
  variable: "--font-fallback",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Hariram",
  description:
    "Second-year at UC Berkeley studying Computer Science and Geography. Applied AI and systems, plus geospatial applications. Building Jude.",
  openGraph: {
    title: "Vaibhav Hariram",
    description:
      "Second-year at UC Berkeley studying Computer Science and Geography. Applied AI and systems, plus geospatial applications. Building Jude.",
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
