import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #A7A7A7;
    }

    body{
        width: 23.4375rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        height: 100dvh;
        width: 100%;
      }
`;

export default GlobalStyle;
