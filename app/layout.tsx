import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Explore seus filmes favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
          <div className="
            min-h-screen
            bg-linear-to-b
            from-zinc-900
            to-black">
            {children}
          </div>
      </body>
    </html>
  );
}