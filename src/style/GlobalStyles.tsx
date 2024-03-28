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

    input{
        outline: none;
    }
`;

export default GlobalStyle;
