import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as StatusSvg } from '@assets/svg/status.svg';
import { ReactComponent as ArrowLeftSvg } from '@assets/svg/arrowLeft.svg';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';
import { useRecoilState } from 'recoil';
import { UserState } from '@recoil/userAtom';

const DUMMYLEFTCOUNT = 3;

export default function ChatHead() {
  const [userName, setUserName] = useRecoilState(UserState);
  const displayName = userName === '송은수' ? '플래시' : '송은수';
  const HandleNameToggle = () => {
    if (userName === '송은수') {
      setUserName('플래시');
    } else {
      setUserName('송은수');
    }
  };
  return (
    <ChatHeaderWrapper>
      <Statusbox>
        <StatusSvg />
      </Statusbox>
      <GobackBox>
        <ArrowLeftSvg />
        <span>{DUMMYLEFTCOUNT}</span>
      </GobackBox>
      <ChatTitle onClick={HandleNameToggle}>{displayName}</ChatTitle>
      <MenuBox>
        <SearchSvg />
        <MenuSvg />
      </MenuBox>
    </ChatHeaderWrapper>
  );
}

const Statusbox = styled.div`
  position: fixed;
  z-index: 1;
  width: 375px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  flex-shrink: 0;
  background-color: ${theme.colors.blue};
`;

const ChatHeaderWrapper = styled.section`
  position: fixed;
  top: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 28px;
  padding: 0 16px;
  background-color: ${theme.colors.blue};
  opacity: 0.8;
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
`;
