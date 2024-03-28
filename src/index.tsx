import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChattingRoom from './ChattingRoom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ChattingRoom />
	</React.StrictMode>
);
