import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer"
import { Banner } from "../../components/Banner";

import { Container, Content, Panel } from "./styles";


export function Home() {
  
  return (
    <Container>
      <Header />

      <Content>
        <Panel> 
          <Banner />
        </Panel>
      </Content>
  
      <Footer />
    </Container>
  )
}