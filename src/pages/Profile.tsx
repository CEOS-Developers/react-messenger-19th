import React from 'react';
import { useRecoilState } from 'recoil';
import { userProfileState } from '../state/userProfileState';
import styled from 'styled-components';

interface Profile {
	name: string;
	phone: string;
	image: string;
	github: string;
	instagram: string;
}

const ProfileContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProfileImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 20px;
`;

const ProfileField = styled.div`
	margin: 10px 0;
`;

const Input = styled.input`
	padding: 10px;
	margin-top: 5px;
	width: 200px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;

const Button = styled.button`
	padding: 10px 20px;
	margin-top: 20px;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

// 바로가기 링크를 감싸는 스타일된 컴포넌트
const ShortcutLink = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #333;
	margin-top: 10px;
`;

// 로고 이미지 스타일링
const InstagramLogo = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 10px;
`;

const GitHubLogo = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 10px;
`;

const Profile = () => {
	const [profile, setProfile] = useRecoilState<Profile>(userProfileState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setProfile((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<ProfileContainer>
			<ProfileImage
				src={profile.image || '/default-profile.png'}
				alt='프로필 이미지'
			/>
			<ProfileField>
				<div id='profile-name'>{profile.name}</div>
			</ProfileField>
			<ProfileField>
			<div id='profile-name'>{profile.phone}</div>
			</ProfileField>
			<ShortcutLink href={profile.instagram} target='_blank'>
				<InstagramLogo src='/instagram_logo.png' alt='Instagram 로고' />
				인스타그램
			</ShortcutLink>
			<ShortcutLink href={profile.github} target='_blank'>
				<GitHubLogo src='/github_logo.png' alt='GitHub 로고' />
				깃허브
			</ShortcutLink>
		</ProfileContainer>
	);
};

export default Profile;
