// src/components/NavbarHead.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarHeadContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	position: fixed;
	font-size: 20px;
	padding-left: 15px;
	width: 375px;
	top: -33px;
	height: 80px;
	background: #fffff;
	padding-top: 30px;
    

`;
const NavbarHeadTexts=styled.div`
background: #fffff;
padding-top: 30px;
font-family: 'Noto Sans KR';
font-size: 20px;
font-style: normal;
font-weight: 500;
`;

const NavbarHead = () => {
	const { pathname } = useLocation();
	let navText;

	switch (pathname) {
		case '/chattingroom':
			navText = '';
			break;
		case '/userlist':
			navText = '친구 목록';
			break;
		case '/chattinglist':
			navText = '대화';
			break;
		case '/profile':
			navText = '내 프로필';
			break;
		default:
			navText = '';
	}

	return( 
    <NavbarHeadContainer>
        <NavbarHeadTexts>{navText}</NavbarHeadTexts>
        </NavbarHeadContainer>);
};

export default NavbarHead;
