import type { Metadata } from "next";
import "./globals.css";
import CursorTrail from "@/components/ui/CursorTrail";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ConsoleEasterEgg from "@/components/ui/ConsoleEasterEgg";
import ViewportFix from "@/components/ui/ViewportFix";

export const metadata: Metadata = {
  title: "Ionuț-Iacob Cotoi | Senior .NET Full-Stack Developer",
  description:
    "Senior .NET Full-Stack Developer specialized in performance optimization and cloud solutions. Reduced billing time by 90%, saved $25k/year in infrastructure costs. Founder of DiverseWork.",
  keywords: [
    ".NET Developer",
    "Azure",
    "React",
    "Performance Optimization",
    "Healthcare SaaS",
    "Cloud Solutions",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ionuț-Iacob Cotoi" }],
  creator: "Ionuț-Iacob Cotoi",
  openGraph: {
    title: "Ionuț-Iacob Cotoi | Senior .NET Full-Stack Developer",
    description:
      "I build high-performance systems that save companies money and make software faster.",
    url: "https://ionutcotoi.me",
    siteName: "Ionuț-Iacob Cotoi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ionuț-Iacob Cotoi | Senior .NET Full-Stack Developer",
    description: "I build high-performance systems that save companies money.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden="true" />
        <FloatingParticles />
        <CursorTrail />
        <ConsoleEasterEgg />
        <ViewportFix />
        {children}
      </body>
    </html>
  );
}
