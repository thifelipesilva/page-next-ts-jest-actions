import { useRouter } from 'next/router';
import { Caixa, Clicavel, Item, Lista, Titulo } from './styles'

function Menu() {

  const links = [
    {name:"Home",link:"/"},
    {name:"Pessoa Usuária",link:"/usuario"},
    {name:"Profissional",link:"/profissional"},
  ];

  const router = useRouter();

  return(
    <>
      <Caixa>
        <Titulo>
          <Clicavel href={'/'}>
            Lacrei
          </Clicavel>
        </Titulo>
        <nav>
          <Lista>
            {
              links.map(link => (
                <Item 
                 key={link.name} 
                 estaAtivo={router.pathname === link.link}
                >
                  <Clicavel 
                   href={link.link}
                  >
                    {link.name}
                    
                  </Clicavel>

                </Item>
              ))
            }
          </Lista>
        </nav>
      </Caixa>
    </>
  );
}

export default Menu;