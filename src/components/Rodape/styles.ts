import Link from "next/link";
import styled from "styled-components";
import  { FacebookCircle } from '@styled-icons/remix-line/FacebookCircle';
import  { Instagram } from '@styled-icons/fa-brands/Instagram';
import  { LinkedinBox }  from '@styled-icons/remix-line/LinkedinBox';


export const Footer = styled.footer`
  margin: 0 52px;
  display: flex;
  flex-direction: column;
  padding-top: 12px;

  p {
    margin: 12px 0;
    font-size: 12px;
    opacity: .5;
  }

  @media (max-width: 510px) {
    margin: 0 12px;
  }

`;

export const CaixaTexto = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 16px;
  @media (max-width: 510px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Item = styled.li<{ estaAtivo?: boolean }>`

  font-size: 16px;
  list-style: none;
  margin-right: 32px;
  font-weight: 500;
  cursor: pointer;

  font-weight: ${props => props.estaAtivo ? "bold": ""};
  &:hover {
    opacity: .6;
  }


`; 

export const Clicavel = styled(Link)`
  text-decoration: none;
  color: inherit;

  

`;

export const CaixaIcons = styled.div`
  
  display: flex;

`;





export const FaceIcon = styled(FacebookCircle)`
  width: 35px;
  height: 35px;
  color: var(--verde);
  cursor: pointer;

  margin-right: 28px;
`;

export const InstaIcon = styled(Instagram)`
  width: 35px;
  height: 35px;
  color: var(--verde);
  cursor: pointer;
  margin-right: 28px;

`;


export const LinkIcon = styled(LinkedinBox)`
  color: var(--verde);
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-right: 28px;

`;