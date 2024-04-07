import styled from 'styled-components';

const tabs = [
	{ iconSrc: '/icon/TabBarHome.svg', text: '홈' },
	{ iconSrc: '/icon/TabBarMessage.svg', text: '채팅' },
	{ iconSrc: '/icon/TabBarCall.svg', text: '통화' },
	{ iconSrc: '/icon/TabBarProfile.svg', text: '프로필' },
];

export default function FooterMenu(): JSX.Element {
	return (
		<>
			<Wrapper>
				{tabs.map((tab, index) => (
					<IconContainer key={index}>
						<Icon src={tab.iconSrc} />
						<TabText>{tab.text}</TabText>
					</IconContainer>
				))}
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	height: 58px;

	display: flex;
	justify-content: space-evenly;
	box-shadow: 0px -4px 6px -1px rgba(0, 0, 0, 0.1); /* 상단 그림자 효과 */
`;

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`;

const Icon = styled.img``;

const TabText = styled.p`
	font-size: 8px;

	padding-top: 8px;
`;
