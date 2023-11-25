import { Container } from "./styles";
import Picture from "../../assets/img1.png"

export function Banner(){
  return(
    <Container>
      <div className="bannerCard">
        <img src={Picture} alt="Frutas e biscoitos recheados" />
          <div className="tittle">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
      </div>
    </Container>
  );
}