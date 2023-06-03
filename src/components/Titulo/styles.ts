import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bolder;
  @media (max-width: 510px) {
    font-size: 28px;
  }

  @media (max-width: 1040px) {
    font-size: 32px;

  }

`;

export const Caixa = styled.div`
  width:100%;
  margin-bottom: 28px;
  @media (max-width: 510px) {
    margin-bottom: 8px;
  }
`;