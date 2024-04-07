import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Tab {
	iconSrc: string;
	text: string;
	path: string;
}

const tabs: Tab[] = [
	{ iconSrc: '/icon/TabBarHome.svg', text: '홈', path: '/' },
	{ iconSrc: '/icon/TabBarMessage.svg', text: '채팅', path: '/ChatRoom' },
	{ iconSrc: '/icon/TabBarCall.svg', text: '통화', path: '/' },
	{ iconSrc: '/icon/TabBarProfile.svg', text: '프로필', path: '/' },
];

export default function FooterMenu(): JSX.Element {
	return (
		<>
			<Wrapper>
				{tabs.map((tab, index) => (
					<LinkStyle to={tab.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
						<IconContainer key={index}>
							<Icon src={tab.iconSrc} />
							<TabText>{tab.text}</TabText>
						</IconContainer>
					</LinkStyle>
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

const LinkStyle = styled(Link)`
	display: flex;
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
