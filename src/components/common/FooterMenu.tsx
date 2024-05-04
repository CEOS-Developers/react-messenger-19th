import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as HomeIcon } from '../../icons/TabBarHome.svg';
import { ReactComponent as MessageIcon } from '../../icons/TabBarMessage.svg';
import { ReactComponent as CallIcon } from '../../icons/TabBarCall.svg';
import { ReactComponent as ProfileIcon } from '../../icons/TabBarProfile.svg';

interface Tab {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	text: string;
	path: string;
	isActive?: boolean;
}

const tabs: Tab[] = [
	{ Icon: HomeIcon, text: '홈', path: '/' },
	{ Icon: MessageIcon, text: '채팅', path: '/ChatList' },
	{ Icon: CallIcon, text: '통화', path: '/Call' },
	{ Icon: ProfileIcon, text: '프로필', path: '/Profile' },
];

export default function FooterMenu() {
	const location = useLocation();
	const paths = ['/ChatRoom', '/chatroom/1'];

	// 현재 경로가 paths 배열에 포함되어 있으면 null을 반환
	if (paths.includes(location.pathname)) {
		return null;
	}
	return (
		<>
			<Wrapper>
				{tabs.map((tab, index) => (
					<LinkStyle to={tab.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
						<IconContainer
							isActive={
								tab.path === location.pathname || (tab.path === '/' && location.pathname === '/')
							}
						>
							<tab.Icon />
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

const IconContainer = styled.div<{ isActive: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	svg {
		${({ isActive }) =>
			isActive
				? css`
						fill: black;
					`
				: css`
						fill: none;
					`}
	}
`;

const TabText = styled.p`
	font-size: 8px;

	padding-top: 8px;
`;
