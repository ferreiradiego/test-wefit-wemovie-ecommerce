import Image from "next/image";
import Link from "next/link";
import { BackLink, Container, ImageWrapper, Message } from "./styles";

const Checkout = () => {
  return (
    <Container>
      <Message>Compra realizada com sucesso!</Message>
      <ImageWrapper>
        <Image
          src="/assets/successful-purchase.svg"
          alt="Carrinho vazio"
          width={178.63}
          height={264}
        />
      </ImageWrapper>
      <BackLink href={"/"}>VOLTAR</BackLink>
    </Container>
  );
};

export default Checkout;
