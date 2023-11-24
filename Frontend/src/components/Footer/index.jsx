import { BsHexagonFill } from "react-icons/bs";

import { Container, Logo } from "./styles";

export function Footer(){
  return(
    <Container>
      <Logo>
        <BsHexagonFill/>
        <h1>food explorer</h1>
      </Logo>

      <h1>© 2023 - Todos os direitos reservados.</h1>
    </Container>
  )
}