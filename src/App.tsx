// src/App.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/chattingroom/:userId' />
				<Route path='/userlist' />
				<Route path='/chattinglist' />
				<Route path='/profile' />
			</Routes>
		</>
	);
};

export default App;
