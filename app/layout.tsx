import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Explore seus filmes favoritos",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
          <div className="bg-zinc-900">
            {children}
          </div>
      </body>
    </html>
  );
}