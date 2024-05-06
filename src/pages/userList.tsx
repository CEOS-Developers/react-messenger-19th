import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
import styled from 'styled-components';

interface User {
	id: string;
	name: string;
	profileImage: string; // 프로필 이미지 URL을 추가
}

// 스타일 컴포넌트
const UserContainer = styled.li`
	background-image: url('/item/userbg.png'); // 여기에 배경 이미지 URL을 설정
	background-size: cover;
	display: flex;
	align-items: center;
	padding: 5px 0px 5px 0px;
	margin-bottom: 11px;
    width:300px;
   margin-left:-10px;

`;

const ProfileImage = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	margin-right: 20px;
    margin-left:-20px;
`;

const SearchInput = styled.input`
	background-image: url('/item/searchbar.png');
	background-repeat: no-repeat;
	width: 260px;
	height: 21px;
	padding: 10px 43px;
	margin-bottom: 0px;
	margin-left: 5px;
	border: none;
`;

const UserList = () => {
	const users = useRecoilValue(userListState);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredUsers = users
		.filter((user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.slice(1); // 첫 번째 유저를 제외하고 필터링

	return (
		<>
			<SearchInput
				type='text'
				placeholder=''
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul>
				{filteredUsers.map((user) => (
					<UserContainer key={user.id}>
						<ProfileImage src={user.image} alt={user.name} />
						{user.name}
					</UserContainer>
				))}
			</ul>
		</>
	);
};

export default UserList;
