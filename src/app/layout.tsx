import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "Teste Front React WeFit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header numberOfItems={0} />
        <main className="lg:mx-[180px] mx-4">{children}</main>
      </body>
    </html>
  );
}
