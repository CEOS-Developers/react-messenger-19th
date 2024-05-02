import theme from '@styles/theme';
import styled from 'styled-components';
import { type ChatCardProps } from '@type/common';

export default function ChatCard({
  img,
  name,
  lastMessage,
  date,
  unReadCount,
}: ChatCardProps) {
  return (
    <ChatCardWrapperContainer>
      <ChatCardImg src={img}></ChatCardImg>
      <ChatContentContainer>
        <ChatNameStyle>{name}</ChatNameStyle>
        <LastChatStyle>{lastMessage}</LastChatStyle>
      </ChatContentContainer>
      <ChatInfoContainer>
        <ChatDateStyle>{date}</ChatDateStyle>
        <UnreadCateNumberStyle>
          <div>{unReadCount}</div>
        </UnreadCateNumberStyle>
      </ChatInfoContainer>
    </ChatCardWrapperContainer>
  );
}
const ChatDateStyle = styled.div`
  font-size: ${theme.textStyles.caption2.font_size};
  font-weight: ${theme.textStyles.caption2.font_weight};
  line-height: ${theme.textStyles.caption2.line_height};
  color: ${theme.colors.gray_2};
`;

const UnreadCateNumberStyle = styled.div`
  font-size: ${theme.textStyles.caption2.font_size};
  font-weight: ${theme.textStyles.caption2.font_weight};
  line-height: ${theme.textStyles.caption2.line_height};
  color: ${theme.colors.white};
  background-color: ${theme.colors.orange};
  text-align: center;
  width: 16px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-right: 4px;
`;

const ChatContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`;

const ChatNameStyle = styled.div`
  font-size: ${theme.textStyles.body2_1.font_size};
  font-weight: ${theme.textStyles.body2_1.font_weight};
  line-height: ${theme.textStyles.body2_1.line_height};
  color: ${theme.colors.black};
`;

const LastChatStyle = styled.div`
  font-size: ${theme.textStyles.caption4.font_size};
  font-weight: ${theme.textStyles.caption4.font_weight};
  line-height: ${theme.textStyles.caption4.line_height};
  color: ${theme.colors.gray_2};
`;

const ChatCardWrapperContainer = styled.article`
  width: 100%;
  height: 70px;
  padding: 12px;
  gap: 8px;
  display: flex;
  justify-content: center;
`;

const ChatCardImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 16px;
`;
