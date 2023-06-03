import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito';
    
  }
  
  html,
  body {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: var(--branco);
  }

  :root {
    --branco: #F5F5F5;
    --cinza: #EEEEEE;
    --verde: #018762;
        
  }
`;
 
export default GlobalStyle;