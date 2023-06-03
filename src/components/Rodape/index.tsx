import { CaixaIcons, CaixaTexto, Clicavel, Footer, Item, FaceIcon, InstaIcon, LinkIcon  } from "./styles";
import { useRouter } from "next/router";

export default function Rodape() {

  const links = [
    {name:"Home",link:"/"},
    {name:"Pessoa Usuária",link:"/usuario"},
    {name:"Profissional",link:"/profissional"},
  ];

  const router = useRouter();

  return(
    <Footer>
      <CaixaTexto>
        {
          links.map(item => (
            <Item estaAtivo={router.asPath === item.link} key={item.name}>
              <Clicavel href={item.link}>
                {item.name}
              </Clicavel>
            </Item>
          )) 
        }
      </CaixaTexto>  
      <CaixaIcons>
        <InstaIcon/>
        <FaceIcon/>
        <LinkIcon/>
      </CaixaIcons>
      <p>Desafio Front-end Lacrei</p>
    </Footer>
  );
}