import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, 
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  .scroll-box::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
