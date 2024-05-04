// src/components/NavbarHead.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

	return (
		<div>
			{navText}
		</div>
	);
};

export default NavbarHead;
