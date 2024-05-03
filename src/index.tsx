import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme"
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RecoilRoot>
			<App />
			</RecoilRoot>
		</ThemeProvider>
	</React.StrictMode>
);
