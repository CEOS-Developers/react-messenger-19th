import styled from 'styled-components';

const StyledFriendsSearchHead = styled.div`
  widht: 100%;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFriendSearchInnerContainer = styled.div`
  width: 343px;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
`;

const StyledFriendSearchUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNameSpan = styled.p`
  width: 35px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
  color: ${(props) => props.theme.color.black};
`;

const StyledNewMessage = styled.div`
  background-color: ${(props) => props.theme.color.grayMedium};
  width: 111px;
  height: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledNewMessageSpan = styled.span`
  font-family: Pretendard;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
`;

const StyledFriendSearchLower = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

const StyledFriendSearchLowerInput = styled.input`
  border: none;
  /* text-indent: 36px; */
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.grayMedium};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 19.5px;
  color: ${(props) => props.theme.color.grayDark};
  padding: 0 0 0 36px;
  outline: none;
`;

const StyledMagnifyingGlass = styled.img`
  position: absolute;
  top: 10px;
  left: 12px;
`;

export default function FriendsSearchHead() {
  return (
    <StyledFriendsSearchHead>
      <StyledFriendSearchInnerContainer>
        <StyledFriendSearchUpper>
          <StyledNameSpan>친구</StyledNameSpan>
          <StyledNewMessage>
            <img src="/images/newFriend.svg" />
            <StyledNewMessageSpan>새 메시지</StyledNewMessageSpan>
          </StyledNewMessage>
        </StyledFriendSearchUpper>
        <StyledFriendSearchLower>
          <StyledMagnifyingGlass src="/images/magnifyingGlass.svg" />
          <StyledFriendSearchLowerInput placeholder="검색하기" />
        </StyledFriendSearchLower>
      </StyledFriendSearchInnerContainer>
    </StyledFriendsSearchHead>
  );
}
