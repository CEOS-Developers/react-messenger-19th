import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;

	flex-direction: column;

	padding: 17px 17px 60px 17px;
`;

export const HeaderBar = styled.div`
	display: flex;
	justify-content: right;
`;

export const Icon = styled.img`
	margin: 0 7px;
	cursor: pointer;
`;

export const MyProfileContainer = styled.div`
	display: flex;
	margin-bottom: 24px;
`;

export const MyProfilePhoto = styled.img`
	width: 90px;
	height: 90px;
`;

export const ProfileTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 25px;
`;

export const MyName = styled.p`
	font-size: 24px;
	font-weight: 600;
`;

export const MyStatusMessage = styled.p`
	font-size: 16px;
	color: #5b5454;

	padding-top: 7px;
`;

export const FriendList = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SubTab = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 10px;
`;

export const SubText = styled.p`
	font-size: 16px;
	font-weight: 700;
`;

export const MoreIcon = styled.img`
	cursor: pointer;
`;

export const RecommandFriendContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 12px 10px 5px;
	cursor: pointer;
`;
export const PrivateFriend = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 12px 10px 5px;
	gap: 18px;
	cursor: pointer;
`;

export const Circle = styled.div`
	border-radius: 999px;
	background-color: #54c269;
	width: 56px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Profile = styled.img``;

export const InnerDiv = styled.div`
	width: 77%;
	display: flex;
	justify-content: space-between;
`;

export const Text = styled.p`
	font-size: 16px;
	font-weight: 400;
`;
