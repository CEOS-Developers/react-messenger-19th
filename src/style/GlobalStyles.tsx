import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "SF Pro Text";
        font-style: normal;
        font-weight: 400;
        src: url("https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProText-Regular.ttf");
    }

    @font-face {
        font-family: "SF Pro Text";
        font-style: normal;
        font-weight: 500;
        src: url("https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProText-Medium.ttf");
    }

    @font-face {
        font-family: "SF Pro Text";
        font-style: normal;
        font-weight: 600;
        src: url("https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProText-SemiBold.ttf");
      }

    @font-face {
        font-family: "SF Pro Text";
        font-style: normal;
        font-weight: 700;
        src: url("https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProText-Bold.ttf");
    }

    @font-face {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        src: url("https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProDisplay-Medium.ttf");
    }

    html,body{
        height:100%;
        background-color : var(--white);
        display:flex;
        justify-content: center;
        align-items: center;
    }

    input{
        outline: none;
    }

    .Container{
        width: 23.4375rem;
        height: 50.75rem;
        border-radius: 1.25rem;
        background: var(--Background-Light-Grey, #F6F6F6);
    }

    .ChatBackground{
        width: 23.4375rem;
        height: 45.75rem;
        position : relative;
    }
`;

export default GlobalStyle;
