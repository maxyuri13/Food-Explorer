import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";

import { Container, Content, Panel } from "./styles";


export function Home() {
  
  return (
    <Container>
      <Header />

      <Content>
        <Panel> 
          <Banner />
        </Panel>

        <Section title="Refeições"/>
        <Section title="Sobremesas"/>
        <Section title="Bebidas"/>
        
      </Content>
  
      <Footer />
    </Container>
  );
}