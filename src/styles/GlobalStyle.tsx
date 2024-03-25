import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {
  width:100%;
  height: 100vh;
  ${({ theme }) => theme.fonts.NotoSans};
}

* {
  box-sizing: border-box;
}

button{
  cursor: pointer;
}
`;

export default GlobalStyle;