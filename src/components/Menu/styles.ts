import Link from "next/link";
import styled from "styled-components";

export const Caixa = styled.div`
  padding: 8px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--cinza);

  @media (max-width: 510px) {
    flex-direction: column;
    padding: 12px 12px
  }

`;

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--verde);
  
  @media (max-width: 510px) {
    padding: 4px 0;
  }
`;


export const Lista = styled.ul`
  display: inline-flex;
  @media (max-width: 510px) {
    padding-bottom: 4px;
  }
`;

export const Item = styled.li<{ estaAtivo?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  list-style: none;

  margin-left: 24px;

  color: ${props => props.estaAtivo ? "#018762": ""};

  cursor: pointer;
  &:hover {
    opacity: .6;
  }
`;

export const Clicavel = styled(Link)`
  text-decoration: none;
  color: inherit;

`;