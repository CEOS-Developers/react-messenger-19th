import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html,body{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        height: 100dvh;
        width: 100%;
    }

    input{
        outline: none;
    }
`;

export default GlobalStyle;
