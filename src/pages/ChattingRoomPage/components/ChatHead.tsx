import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as ArrowLeftSvg } from '@assets/svg/arrowLeft.svg';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserState } from '@recoil/userAtom';
import StatusBox from '@components/StatusBox';
import { useNavigate, useParams } from 'react-router-dom';
import { currentChatRoomIdState } from '@recoil/chatAtom';
import { useEffect } from 'react';

const DUMMYLEFTCOUNT = 3;

export default function ChatHead() {
  const navigate = useNavigate();
  const [userName, setUserName] = useRecoilState(UserState);
  const params = useParams().id || '';
  const chattingData = useRecoilValue(currentChatRoomIdState(params));
  const opponentName = chattingData?.name || '';
  const displayName = userName === '송은수' ? opponentName : '송은수';
  const handleNameToggle = () => {
    if (userName === '송은수') {
      setUserName(opponentName);
    } else {
      setUserName('송은수');
    }
  };

  useEffect(() => {
    return () => {
      setUserName('송은수');
    };
  }, [setUserName]);
  return (
    <ChatHeaderWrapper>
      <StatusBox />
      <ChatHeaderContainer>
        <GobackBox onClick={() => navigate('/chattinglist')}>
          <ArrowLeftSvg />
          <span>{DUMMYLEFTCOUNT}</span>
        </GobackBox>
        <ChatTitle onClick={handleNameToggle}>{displayName}</ChatTitle>
        <MenuBox>
          <SearchSvg />
          <MenuSvg />
        </MenuBox>
      </ChatHeaderContainer>
    </ChatHeaderWrapper>
  );
}

const ChatHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0 16px;
  background-color: ${theme.colors.blue};

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const ChatHeaderWrapper = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 375px;
  background-color: ${theme.colors.blue};
  opacity: 0.8;

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
  }
`;

const GobackBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  span {
    font-size: ${theme.textStyles.body3.font_size};
    line-height: ${theme.textStyles.body3.line_height};
    font-weight: ${theme.textStyles.body3.font_weight};
    color: ${theme.colors.black};
  }
  cursor: pointer;
`;

const ChatTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${theme.textStyles.subTitle.font_size};
  line-height: ${theme.textStyles.subTitle.line_height};
  font-weight: ${theme.textStyles.subTitle.font_weight};
  color: ${theme.colors.black};
  cursor: pointer;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 100%;
  fill: ${theme.colors.black};
`;
