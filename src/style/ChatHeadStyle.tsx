import styled from 'styled-components';

export const ChatHeadContainer = styled.div`
width: 375px;
height: 96px;
position: fixed;
top: 0px;

	flex-shrink: 0;
	background-image: url('/item/chatHead.png');
	background-size: cover;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

`;

export const UserName = styled.h2`font-size: 16px;
`;
