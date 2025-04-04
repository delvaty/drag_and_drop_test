import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Trading Plataform",
  description: "Axiom Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
