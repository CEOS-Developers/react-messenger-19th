import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/globalStyles';
import AppMain from '@components/AppMain';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppMain />
      </ThemeProvider>
    </>
  );
}

export default App;
