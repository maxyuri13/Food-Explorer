import { FiLogOut } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { Button } from "../Button";

import { Container, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <header>
        <img src="../../assets/explorer.svg" alt="Logo food explorer" />
        <span> food explorer</span>
      </header>
      <Button title="Meu pedido (0)">
        <PiReceiptBold />
      </Button>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}