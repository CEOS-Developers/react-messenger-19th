import styled from 'styled-components';

const StyledChatLogRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNameAndMessageContainer = styled.div`
  display: flex;
  height: 20px;
  justify-content: flex-start;
  column-gap: 4px;
`;

const StyledNameSpan = styled.div`
  padding-top: 4px;
  padding-bottom: 1px;
  font-size: 13px;
  font-weight: 500;
  height: 100%;
  color: ${(props) => props.theme.color.grayDark};
`;

const StyledTimeSpan = styled.div`
  padding-top: 4px;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => props.theme.color.grayDark};
`;

const StyledMessageContentContainer = styled.div`
  height: fit-content;
  flex-grow: 1;
  font-size: ${(props) => props.theme.textStyle.fontSize.body2};
  font-weight: 400;
  color: ${(props) => props.theme.color.black};
  line-height: 22.5px;
`;
export default function ChatLogRight() {
  return (
    <StyledChatLogRightContainer>
      <StyledNameAndMessageContainer>
        <StyledNameSpan>김정민</StyledNameSpan>
        <StyledTimeSpan>20:45</StyledTimeSpan>
      </StyledNameAndMessageContainer>
      <StyledMessageContentContainer>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
      </StyledMessageContentContainer>
    </StyledChatLogRightContainer>
  );
}
