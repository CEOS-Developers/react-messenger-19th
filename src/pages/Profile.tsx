import styled from 'styled-components';

export default function Profile(): JSX.Element {
	return (
		<Wrapper>
			<ProfileHeader>
				<img src="/icon/leftArrow.svg" />
				<H1>내 프로필</H1>
			</ProfileHeader>

			<PhotoContainer>
				<img src="icon/7272profile.svg" />
			</PhotoContainer>

			<ContentsDiv>
				<SubTitle>이름</SubTitle>
				<InputDiv>
					<InputValue>정수완</InputValue>
					<img src="/icon/rightArrow.svg" />
				</InputDiv>

				<SubTitle>상태 메세지</SubTitle>
				<InputDiv>
					<InputValue2>설정 안함</InputValue2>
					<img src="/icon/rightArrow.svg" />
				</InputDiv>

				<SubTitle>아이디</SubTitle>
				<InputDiv>
					<InputValue2>설정 안함</InputValue2>
					<img src="/icon/rightArrow.svg" />
				</InputDiv>
			</ContentsDiv>

			<BottomDiv>
				<SubTitle>바로가기</SubTitle>
				<SocialDiv>
					<img src="/icon/git.svg" />
					<DivWrap>
						<H1>github</H1>
						<img src="/icon/link.svg" />
					</DivWrap>
				</SocialDiv>

				<SocialDiv>
					<img src="/icon/instagram.svg" />
					<DivWrap2>
						<H1 style={{ paddingLeft: '25px' }}>instagram</H1>
						<img src="/icon/link.svg" />
					</DivWrap2>
				</SocialDiv>
			</BottomDiv>
		</Wrapper>
	);
}

export const DivWrap = styled.div`
	width: 85%;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

export const DivWrap2 = styled.div`
	width: 84%;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

export const SocialDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const BottomDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px 7px;
	gap: 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 22px 72px 22px;
`;

export const ProfileHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const H1 = styled.h1`
	color: black;
	font-weight: 600;
	padding: 3px 0 0 30px;
`;

export const PhotoContainer = styled.div`
	width: 100%;
	height: 139px;

	border-radius: 10px;
	background-color: #54c269;

	margin-top: 18px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContentsDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px 7px;
	border-bottom: 1px solid #b7b7b74d;
`;

export const SubTitle = styled.h2`
	font-size: 16px;
	font-weight: 300;
	padding: 15px 0 10px 0;
`;
export const InputDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 22px;
`;
export const InputValue = styled.p`
	font-size: 20px;
	font-weight: 400;
`;

export const InputValue2 = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: #c7c5c5;
`;
