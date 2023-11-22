import { FiLogOut } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { Button } from "../Button";
import { Input } from "../Input";

import { Container, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <header>
        <img src="../../assets/Polygon.png" alt="" />
        <span>food explorer</span>
      </header>
      <Input placeholder="Busque por pratos ou ingredientes"/>
      <Button title="Meu pedido (0)">
        <PiReceiptBold />
      </Button>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}