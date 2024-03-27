import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as StatusSvg } from '@assets/svg/status.svg';
import { ReactComponent as ArrowLeftSvg } from '@assets/svg/arrowLeft.svg';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';

const DUMMYNAME = '플래시';
const DUMMYLEFTCOUNT = 3;

export default function ChatHead() {
  return (
    <ChatHeaderWrapper>
      <Statusbox>
        <StatusSvg />
      </Statusbox>
      <GobackBox>
        <ArrowLeftSvg />
        <span>{DUMMYLEFTCOUNT}</span>
      </GobackBox>
      <ChatTitle>{DUMMYNAME}</ChatTitle>
      <MenuBox>
        <SearchSvg />
        <MenuSvg />
      </MenuBox>
    </ChatHeaderWrapper>
  );
}

const Statusbox = styled.div`
  position: fixed;
  top: 0;
`;

const ChatHeaderWrapper = styled.section`
  position: fixed;
  top: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 28px;
  padding: 0 4px;
  margin: 0 16px;
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
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 100%;
`;
