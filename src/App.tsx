// src/App.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChattingRoom from './pages/ChattingRoom';
import UserList from './pages/UserList';
import ChattingList from './pages/ChattingList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/chattingroom/:userId' element={<ChattingRoom />} />
				<Route path='/userlist' element={<UserList />} />
				<Route path='/chattinglist' element={<ChattingList />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			<Navbar />
		</>
	);
};

export default App;
