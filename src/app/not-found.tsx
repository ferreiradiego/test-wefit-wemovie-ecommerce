import { NotFoundContainer } from "./styles";
import { BackLink } from "./compra-realizada/styles";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404 - Página não encontrada!</h1>
      <BackLink href={"/"}>Voltar para a Home</BackLink>
    </NotFoundContainer>
  );
}
