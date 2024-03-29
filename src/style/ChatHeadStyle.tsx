import styled from 'styled-components';

export const ChatHeadContainer = styled.div`
width: 375px;
height: 96px;
position: fixed;
top: 0px;
display:flex;
justify-content:flex-start;
align-items:center;


	flex-shrink: 0;
	background-image: url('/item/chatHead.png');
	background-size: cover;
`;

export const UserImage = styled.img`
margin-left:45px;
margin-right:10px;
margin-top:30px;
  border-radius: 50%;

  width: 10px;
  height: 40px;



`;

export const UserName = styled.h2`
font-size: 16px;
margin-top:47px;
font-style: normal;
font-weight: 500;
`;
