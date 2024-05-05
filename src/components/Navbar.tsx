// src/components/Navbar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	position: fixed;
	font-size: 20px;
	width: 375px;
	bottom: 20px;
	height: 50px;
	background: #f0f0f0;
	padding-top: 30px;
`;

const NavbarLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const NavButton = styled.img`
	position: fixed;
	bottom: 320px;
	margin-left: -35px;
	/* width: 30px;
height: 30px;
margin-right: 10px; */
`;

const Navbar = () => {
	const { pathname } = useLocation();
	let userPageButton;
	let chatPageButton;
	let profilePageButton;

	switch (pathname) {
		case '/chattingroom':
			userPageButton = '/item/back.png';
			chatPageButton = '/item/back.png';
			profilePageButton = '/item/profileFalse.png';
			break;
		case '/userlist':
			userPageButton = '/item/userTrue.png';
			chatPageButton = '/item/chatFalse.png';
			profilePageButton = '/item/profileFalse.png';
			break;
		case '/chattinglist':
			userPageButton = '/item/userFalse.png';
			chatPageButton = '/item/chatTrue.png';
			profilePageButton = '/item/profileFalse.png';
			break;
		case '/profile':
			userPageButton = '/item/userFalse.png';
			chatPageButton = '/item/chatFalse.png';
			profilePageButton = '/item/profileTrue.png';
			break;
		default:
			userPageButton = '/item/userFalse.png';
			chatPageButton = '/item/chatFalse.png';
			profilePageButton = '/item/profileFalse.png';
	}

	return (
		<NavbarContainer>
			<NavbarLink to='/userlist'>
				<NavButton src={userPageButton} alt='userlistpage' />
			</NavbarLink>
			<NavbarLink to='/chattinglist'>
				<NavButton src={chatPageButton} alt='userlistpage' />
			</NavbarLink>
			<NavbarLink to='/profile'>
				<NavButton src={profilePageButton} alt='userlistpage' />
			</NavbarLink>
		</NavbarContainer>
	);
};

export default Navbar;
