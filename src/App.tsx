import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ChattingRoom from './pages/ChattingRoom';
import UserList from './pages/userList';
import ChattingList from './pages/ChattingList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import NavbarHead from './components/NavbarHead';
import ChatHead from './components/ChatHead';
import ChatBody from './components/ChatBody';
import ChatBottom from './components/ChatBottom';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';



const App = () => {
	const { pathname } = useLocation();
	const isChattingRoomPage = pathname.startsWith('/chattingroom');

	return (
		<>
			<GlobalStyle />
			{isChattingRoomPage ? (
				<span />
			) : (
				//<ChatHead user={{ name: '', image: '' }} />
				<NavbarHead />
			)}

			<div style={{ paddingTop: isChattingRoomPage ? '0px' : '80px' }}>
				<Routes>
					<Route path='/chattingroom/:userId' element={<ChattingRoom />} />
					<Route path='/userlist' element={<UserList />} />
					<Route path='/chattinglist' element={<ChattingList />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</div>
			{!isChattingRoomPage && <Navbar />}

	
		</>
	);
};

export default App;
