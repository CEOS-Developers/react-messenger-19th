import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    background-color: #E5E6EB;
    /* height: 100%; */
    height: 100dvh;
  }
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #FFFFFF;
    opacity: 0.95;
    margin: 0 auto;
    height: 812px;
    height: 100%;
    width: 375px;
  }
  #root {
    height: 100%;
    width: 100%;
  }

  /* 스크롤 바 관련 UI를 제거하는 속성 원하는 요소에 scroll-box 클래스를 부여하면 됨 */
.scroll-box {
  overflow-x: hidden;
  -ms-overflow-style: none;
}

.scroll-box::-webkit-scrollbar {
  display: none;
}

`;

export default GlobalStyles;
