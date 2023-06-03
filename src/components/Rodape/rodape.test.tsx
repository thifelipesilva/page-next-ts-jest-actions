import { fireEvent, render, screen } from "@testing-library/react";

import mockRouter from 'next-router-mock';

import Rodape from ".";

jest.mock('next/router', () => require('next-router-mock'))
describe('<Rodape/>', () => {
  test("renderiza a frase corretamente", () => {
    render(<Rodape/>)
    const fraseEl = screen.getByText("Desafio Front-end Lacrei");
    expect(fraseEl).toBeInTheDocument();
  });


  test("renderiza os itens de rodape corretamente", () => {
    render(<Rodape />);
    const links = [
      { name: "Home", link: "/" },
      { name: "Pessoa Usuária", link: "/usuario" },
      { name: "Profissional", link: "/profissional" },
    ];

    links.forEach((link) => {
      const itemElement = screen.getByText(link.name);
      expect(itemElement).toBeInTheDocument();
      expect(itemElement.getAttribute("href")).toBe(link.link);
    });
  });

  test("navega para a rota correta ao clicar em um item de menu", () => {
    mockRouter.push("/usuario")

    render(<Rodape />);
    const usuarioItem = screen.getByText("Pessoa Usuária");
    fireEvent.click(usuarioItem);
    expect(mockRouter).toMatchObject({
      asPath: "/usuario"
    });
    
  });
});


