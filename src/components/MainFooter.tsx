import styled from 'styled-components';
import { ReactComponent as FriendsSvg } from '@assets/svg/friends.svg';
import { ReactComponent as ChatSvg } from '@assets/svg/chat.svg';
import { ReactComponent as EtcSvg } from '@assets/svg/etc.svg';
import FooterCard from './FooterCard';
import { useLocation } from 'react-router-dom';

interface navBar {
  title: string;
  TitleComponent: React.FC;
  url: string;
}

const navBarMenu: navBar[] = [
  { title: '친구', TitleComponent: FriendsSvg, url: '/friend' },
  { title: '채팅', TitleComponent: ChatSvg, url: '/chattinglist' },
  { title: '기타', TitleComponent: EtcSvg, url: '/other' },
];

export default function MainFooter() {
  const currentURL = useLocation().pathname;
  return (
    <MainFooterContainer>
      {navBarMenu.map((navBar, index) => (
        <FooterCard
          key={index}
          TitleComponent={navBar.TitleComponent}
          title={navBar.title}
          currentURL={currentURL === navBar.url}
        />
      ))}
    </MainFooterContainer>
  );
}

const MainFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;
