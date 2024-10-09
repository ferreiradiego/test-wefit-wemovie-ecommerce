import type { Metadata } from "next";
import Header from "@/components/Header";
import CartProvider from "@/context/cart";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { Wrapper } from "./styles";

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
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <CartProvider>
            <Header />
            <Wrapper>
              <main>{children}</main>
            </Wrapper>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
