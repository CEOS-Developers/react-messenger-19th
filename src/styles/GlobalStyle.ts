import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

  html,
  body {
    /* width:100%;
    height: 100vh; */
    width: 375px;
    height: 812px;
    margin: 0 auto;
    font-size: 62.5%;
    font-family: "Pretendard";  
    cursor : pointer;
  }
`;

export default GlobalStyle;
