import styled from 'styled-components';

const StyledMessageListItemRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 46px;
`;

interface messageListItemRightInnerType {
  ifBlueSignal: boolean;
}

const StyledMessageListItemRightInner = styled.div<messageListItemRightInnerType>`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNameSpan = styled.span`
  font-family: Pretendard;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
  color: ${(props) => props.theme.color.grayDark};
  font-weight: 500;
`;

const StyledContentdiv = styled.div`
  width: 229px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: ${(props) => props.theme.textStyle.fontSize.body2};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body2};
  color: ${(props) => props.theme.color.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDateString = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: ${(props) => props.theme.color.grayDark};
`;

interface messageListItemRightType {
  name: string;
  ifBlueSignal: boolean;
  content: string;
  dateString: string;
}

const StyledBlueSignalImage = styled.img``;

export default function MessageListItemRight({
  name,
  ifBlueSignal,
  content,
  dateString,
}: messageListItemRightType) {
  return (
    <StyledMessageListItemRight>
      <StyledMessageListItemRightInner ifBlueSignal={ifBlueSignal}>
        <StyledNameSpan>{name}</StyledNameSpan>
        {ifBlueSignal === true ? (
          <StyledBlueSignalImage src="/images/blueSignal.svg" />
        ) : null}
      </StyledMessageListItemRightInner>
      <StyledMessageListItemRightInner ifBlueSignal={true}>
        <StyledContentdiv>{content}</StyledContentdiv>
        <StyledDateString>{dateString}</StyledDateString>
      </StyledMessageListItemRightInner>
    </StyledMessageListItemRight>
  );
}
