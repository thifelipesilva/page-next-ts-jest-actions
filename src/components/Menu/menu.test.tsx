import { render, screen, fireEvent } from "@testing-library/react";
import Menu from ".";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'))


describe("<Menu />", () => {
  

  test("renderiza o título corretamente", () => {
    render(<Menu />);
    const tituloElement = screen.getByText("Lacrei");
    expect(tituloElement).toBeInTheDocument();
  });

  test("renderiza os itens de menu corretamente", () => {
    render(<Menu />);
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

  test.skip("marca o item de menu ativo corretamente", () => {
    mockRouter.push("/usuario")
    render(<Menu/>); 
    
    const usuarioItem = screen.getByText("Pessoa Usuária");
    const usuarioItemStyles = window.getComputedStyle(usuarioItem);
    expect(usuarioItemStyles.color).toBe("#018762");

    const homeItem = screen.getByText("Home");
    const homeItemStyles = window.getComputedStyle(homeItem);
    expect(homeItemStyles.color).toBe("");

    const profissionalItem = screen.getByText("Profissional");
    const profissionalItemStyles = window.getComputedStyle(profissionalItem);
    expect(profissionalItemStyles.color).toBe("");
  });

  test("navega para a rota correta ao clicar em um item de menu", () => {
    mockRouter.push("/usuario")

    render(<Menu />);
    const usuarioItem = screen.getByText("Pessoa Usuária");
    fireEvent.click(usuarioItem);
    expect(mockRouter).toMatchObject({
      asPath: "/usuario"
    });
    
  });
});
