import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './Router';
import { RecoilRoot } from 'recoil';

export function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
