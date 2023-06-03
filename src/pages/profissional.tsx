
import Paragrafo from "@/components/Paragrafo";
import Titulo from "@/components/Titulo";
import Image from "next/image";
import { Container, Secao } from './styles';

export default function Usuario() {
  

  return (
   <Container> 
    <Secao>
      <Titulo texto="Profissional"/>
      <Paragrafo texto='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+' />      
    </Secao>
    <section>
      <Image
        src={"https://desafio-lacrei-five.vercel.app/_next/static/media/profissional.6700284d.svg"}
        width={500}
        height={500}
        alt="Imagem mostrando um desenho de médicos reunidos"
      />
    </section>
   </Container>
  );
}