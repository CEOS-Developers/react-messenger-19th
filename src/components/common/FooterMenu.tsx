import { Link } from 'react-router-dom';
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
	{ Icon: CallIcon, text: '통화', path: '/' },
	{ Icon: ProfileIcon, text: '프로필', path: '/' },
];

interface FooterMenuProps {
	currentPath: string; // Prop to determine the current path
}

export default function FooterMenu({ currentPath }: FooterMenuProps): JSX.Element {
	return (
		<>
			<Wrapper>
				{tabs.map((tab, index) => (
					<LinkStyle to={tab.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
						<IconContainer key={index}>
							<tab.Icon fill={tab.path === currentPath ? 'black' : 'none'} />
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

const Icon = styled.img<{ isActive: boolean }>`
	${({ isActive }) =>
		isActive
			? css`
					filter: invert(0%) sepia(100%) saturate(7500%) hue-rotate(180deg) brightness(30%)
						contrast(100%);
				`
			: css`
					filter: none;
				`}
`;

const TabText = styled.p`
	font-size: 8px;

	padding-top: 8px;
`;
