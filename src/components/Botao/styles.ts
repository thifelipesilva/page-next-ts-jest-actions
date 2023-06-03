import styled from "styled-components";

export const BotaoAction = styled.button<{ $outlined?: boolean }>`
  width: 190px;
  height: 50px;
  color: ${props => props.$outlined ? '#018762': '#F5F5F5'};
  background: ${props => props.$outlined ? '#F5F5F5': '#018762'};
  border: ${props => props.$outlined ? "2px solid #018762" : "none"};
  font-weight: bold;
  font-size: 18px;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 52px;

  @media (max-width: 510px) {
    margin-bottom: 16px;
  }
`;

