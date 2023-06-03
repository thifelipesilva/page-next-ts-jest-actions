
import Paragrafo from "@/components/Paragrafo";
import Titulo from "@/components/Titulo";
import Image from "next/image"
import { Container, Secao } from '@/styles/styles';


export default function Usuario() {
  
  return (
   <Container> 
    <Secao>
      <Titulo texto="Pessoa Usuária"/>
      <Paragrafo texto='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.' />
      
    </Secao>
    <section>
      <Image
        src={"https://desafio-lacrei-five.vercel.app/_next/static/media/pessoaUsuariaImg.16f76b21.svg"}
        width={500}
        height={500}
        alt="Imagem mostrando um celular e uma médica a frente desse celular"
      />
    </section>
   </Container>
  );
}