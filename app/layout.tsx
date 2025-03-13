import type React from "react";
import "./globals.css";
import { Inter, Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import ClientScripts from "@/components/ui/clientscripts";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Daniyal Umer Haral | Software & AI Engineer",
  description: "Personal portfolio of Daniyal Umer Haral, a Software and AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="beforeInteractive" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable, spaceMono.variable)}>
        <div className="cursor-dot"></div>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}