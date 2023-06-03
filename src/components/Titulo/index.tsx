import { Caixa, Title } from "./styles";

interface Titulo {
  texto: string;
}
export default function Titulo({ texto }: Titulo) {
    return(
      <Caixa>
        <Title>
          {texto}
        </Title>
      </Caixa>
    );
}