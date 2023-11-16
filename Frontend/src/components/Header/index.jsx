import { Container } from "./styles";
import { Button } from "../Button";

export function Header() {
  return(
    <Container>
      <header>
        <img src="../../assets/explorer.svg" alt="log" />
        <h1>food explorer</h1>
      </header>
      <Button title="Pedidos">
        <img src="../../assets/icons/Receipt.svg" alt="Icone de Recibo" />
      </Button>
    </Container>
  );
}