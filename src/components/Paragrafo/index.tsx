import { CaixaDeTexto } from './styles';

interface P {
  texto: string;
  $principal?: boolean
}

export default function Pagrafo({ texto, $principal }: P) {
  return(
    <CaixaDeTexto $principal={$principal}>{ texto }</CaixaDeTexto>
  );
}