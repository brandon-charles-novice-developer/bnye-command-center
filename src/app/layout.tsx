import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { GlassNav } from "@/components/ui/GlassNav";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandonnye.pro"),
  title: "B.Nye Command Center | Brandon Nye",
  description:
    "Sales Engineering Command Center — production AI systems, autonomous agents, and enterprise solutions. Built by Brandon Nye.",
  openGraph: {
    title: "B.Nye Command Center",
    description:
      "Enterprise Solutions Engineer & AI Systems Builder. 20K+ lines of shipped code. 4 autonomous agents. One portfolio.",
    type: "website",
    siteName: "B.Nye Command Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Nye Command Center",
    description:
      "Enterprise Solutions Engineer & AI Systems Builder. 20K+ lines of shipped code. 4 autonomous agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <GlassNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
