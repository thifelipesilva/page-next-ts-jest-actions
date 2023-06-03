
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  margin: 4px 52px 4px 52px;
  justify-content: space-between;
  border-bottom: .8px solid rgba(0, 128, 0, 0.4);

  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 780px) {
    margin: 4px 12px 4px 12px;
    
  }

  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

export const CaixaDeBotoes = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 510px) {
    flex-direction: column;
  }
`;

export const Secao = styled.section`
  margin-top: 60px;
  width: 45%;
  
  @media (max-width: 1040px) {
    width: 60%;
    margin-top: 16px;
  }

  @media (max-width: 780px) {
    width: 80%;
    
  }
`;
