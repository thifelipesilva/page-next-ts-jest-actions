import styled from "styled-components";

export const CaixaDeTexto = styled.p<{ $principal?: boolean }>`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 36px;
  border-left: ${props => props.$principal ? "none" : "4px solid #018762"};
  padding-left: ${props => props.$principal ? "none" : '20px'};

  @media (max-width: 510px) {
    font-size: 14px;
    padding-left: ${props => props.$principal ? "4px" : '16px'};
  }

  @media (max-width: 1040px) {
    font-size: 18px;
    padding-left: ${props => props.$principal ? "4px" : '16px'};
  }
  
`;