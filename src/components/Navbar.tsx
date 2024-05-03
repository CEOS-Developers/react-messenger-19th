// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: 375px;
	height: 80px;
	flex-shrink: 0;

	background-image: url('/item/chatBottom.png');
	background-size: cover;
`;

const NavbarLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: bold;
`;

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarLink to='/userlist'>친구 목록</NavbarLink>
			<NavbarLink to='/chattinglist'>대화 목록</NavbarLink>
			<NavbarLink to='/profile'>내 프로필</NavbarLink>
		</NavbarContainer>
	);
};

export default Navbar;
