import { useRouter } from "next/router";
import { BotaoAction } from "./styles";


interface button {
  rota: string;
  texto: string;
  $outlined?: boolean; 
}

export default function Botao({ texto, $outlined, rota }: button) {
  const router = useRouter()

  return(
    <BotaoAction $outlined={$outlined} onClick={() => router.push(rota)}>
      { texto } 
    </BotaoAction>
  );
}