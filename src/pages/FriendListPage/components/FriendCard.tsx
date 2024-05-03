import theme from '@styles/theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface FriendCardProps {
  img: string;
  name: string;
  stateMessage: string;
  id: string;
}

export default function FriendCard({
  img,
  name,
  stateMessage,
  id,
}: FriendCardProps) {
  const navigate = useNavigate();
  return (
    <FriendCardWrapperContainer onClick={() => navigate(`/chattingroom/${id}`)}>
      <FriendCardImg src={img}></FriendCardImg>
      <ChatContentContainer>
        <ChatNameStyle>{name}</ChatNameStyle>
        <StateMessageStyle>{stateMessage}</StateMessageStyle>
      </ChatContentContainer>
    </FriendCardWrapperContainer>
  );
}

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

const StateMessageStyle = styled.div`
  font-size: ${theme.textStyles.caption4.font_size};
  font-weight: ${theme.textStyles.caption4.font_weight};
  line-height: ${theme.textStyles.caption4.line_height};
  color: ${theme.colors.gray_2};
`;

const FriendCardWrapperContainer = styled.article`
  width: 100%;
  height: 62px;
  padding: 8px 12px;
  gap: 8px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${theme.colors.gray_5};
    cursor: pointer;
  }
`;

const FriendCardImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 16px;
`;
