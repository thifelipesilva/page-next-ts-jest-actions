import { render, screen, fireEvent } from "@testing-library/react";
import Botao from ".";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'))

describe("<Botao/>", () => {
  mockRouter.push("/usuario")

  test("renderiza o nome do botao quando recebe um texto", () => {
    const nomeBotao = 'Meu botão';
    const { getByText } = render(<Botao rota="/usuario" texto={nomeBotao}/>);
    const botaoEl = getByText(nomeBotao);
    expect(botaoEl).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(mockRouter).toMatchObject({
      asPath: "/usuario"
    });
   })
});

