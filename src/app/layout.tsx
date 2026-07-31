import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aplikasi Kasir Online Berbasis Cloud untuk Bisnis Anda - Elyra POS",
  description:
    "Kelola transaksi, laporan penjualan, pembayaran digital, dan inventori usaha Anda dengan aplikasi kasir online berbasis cloud, Elyra POS.",
  openGraph: {
    title: "Elyra POS - Aplikasi Kasir Berbasis Cloud",
    description:
      "Catat transaksi, atur stok, dan baca laporan usaha real-time dalam satu aplikasi kasir cloud.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
