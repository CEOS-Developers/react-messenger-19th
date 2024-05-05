import styled from 'styled-components';

const StyledSearchHead = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSearchInnerContainer = styled.div`
  width: 343px;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
`;

const StyledSearchUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNameSpan = styled.p`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
  color: ${(props) => props.theme.color.black};
  white-space: nowrap;
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

const StyledSearchLower = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

const StyledSearchLowerInput = styled.input`
  border: none;
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

interface searchTypeObj {
  searchType: string;
}

export default function SearchHead({ searchType }: searchTypeObj) {
  return (
    <StyledSearchHead>
      <StyledSearchInnerContainer>
        <StyledSearchUpper>
          <StyledNameSpan>
            {searchType === 'friends' ? '친구' : '메시지'}
          </StyledNameSpan>
          <StyledNewMessage>
            {searchType === 'friends' ? (
              <img src="/images/newFriend.svg" alt="This is new friend icon" />
            ) : (
              <img
                src="/images/newMessage.svg"
                alt="This is new message icon"
              />
            )}
            <StyledNewMessageSpan>새 메시지</StyledNewMessageSpan>
          </StyledNewMessage>
        </StyledSearchUpper>
        <StyledSearchLower>
          <StyledMagnifyingGlass src="/images/magnifyingGlass.svg" />
          <StyledSearchLowerInput placeholder="검색하기" />
        </StyledSearchLower>
      </StyledSearchInnerContainer>
    </StyledSearchHead>
  );
}
