// src/components/NavbarHead.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarHeadContainer = styled.div`
	display: flex;
	justify-content: space-around;
	position: fixed;
	font-size: 20px;
	width: 375px;
	top: -33px;
	height: 80px;
	background: #f0f0f0;
	padding-top: 30px;
`;

const NavbarHead = () => {
	const { pathname } = useLocation();
	let navText;

	switch (pathname) {
		case '/chattingroom':
			navText = 'Chatting Room';
			break;
		case '/userlist':
			navText = 'User List';
			break;
		case '/chattinglist':
			navText = 'Chatting List';
			break;
		case '/profile':
			navText = 'Profile';
			break;
		default:
			navText = '';
	}

	return <NavbarHeadContainer>{navText}</NavbarHeadContainer>;
};

export default NavbarHead;
