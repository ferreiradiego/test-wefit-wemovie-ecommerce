import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/cart";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";

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
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <CartProvider>
            <Header />
            <main>{children}</main>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
