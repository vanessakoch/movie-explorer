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
    <html lang="pt-BR" className="bg-zinc-900">
      <body className={inter.className} >
        <Header />
          <div>
            {children}
          </div>
      </body>
    </html>
  );
}