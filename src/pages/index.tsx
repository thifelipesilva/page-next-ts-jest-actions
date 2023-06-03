import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";
import Image from "next/image";
import Paragrafo from "@/components/Paragrafo";
import { Container, Secao, CaixaDeBotoes } from '@/styles/styles';

export default function Home() {



  return (
   <Container> 
    <Secao>
      <Titulo texto="Boas vindas a Lacrei Saúde"/>
      <Paragrafo $principal texto="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"/>
      <CaixaDeBotoes>
        <Botao texto="Pessoa usuária" rota="/usuario"/>
        <Botao texto="Profissional" $outlined rota="/profissional"/>
      </CaixaDeBotoes>
    </Secao>
    <section>
      <Image
        src={"https://desafio-lacrei-five.vercel.app/_next/static/media/home.87217388.svg"}
        width={500}
        height={500}
        alt="Imagem mostrando um celular e uma medica a frente desse celular"
      />
    </section>
   </Container>
  );
}
