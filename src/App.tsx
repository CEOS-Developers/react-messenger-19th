import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import theme from './style/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer></AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  width: 37.5rem;
  height: 81.2rem;
  margin: 0 auto;
  background-color: ${theme.white};
  border-radius: 2.4rem;
`;
