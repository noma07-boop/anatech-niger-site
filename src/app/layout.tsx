import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ANATECH NIGER — Votre partenaire technologique au Niger",
    template: "%s | ANATECH NIGER",
  },
  description:
    "ANATECH NIGER : développement web & mobile, solutions informatiques, infographie & design, réseaux & cloud, sécurité & vidéosurveillance, impression & supports, énergie & solaire. Basé à Lazaret, Niamey.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b4f9e",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Reading headers() opts this layout into per-request dynamic rendering,
  // which is required so the nonce below stays in sync with the
  // Content-Security-Policy header set in src/middleware.ts on every request.
  await headers();

  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
