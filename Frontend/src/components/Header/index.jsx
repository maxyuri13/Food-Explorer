import { FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { BsHexagonFill } from "react-icons/bs";
import { Button } from "../Button";
import { Input } from "../Input";

import { Container, Logo, Search, Order, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>
        <BsHexagonFill/>
        <span>food explorer</span>
      </Logo>
      <Search>
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>
      </Search>
      <Order>
        <Button title="Meu pedido (0)" icon={PiReceiptBold} />
      </Order>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}