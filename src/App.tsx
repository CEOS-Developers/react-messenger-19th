import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/globalStyles';
import AppMain from '@components/AppMain';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AppMain />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
