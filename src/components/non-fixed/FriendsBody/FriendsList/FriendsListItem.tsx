import styled from 'styled-components';

const StyledFriendsListItem = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 16px;
`;

const StyledLogoImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const StyledSpan = styled.span`
  width: 199px;
  height: 23px;
  font-family: Pretendard;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
  font-weight: 500;
  color: ${(props) => props.theme.color.black};
`;

const StyledImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

interface friendsListItemObj {
  order: number;
  friendName: string;
}
export default function FriendsListItem({
  order,
  friendName,
}: friendsListItemObj) {
  return (
    <StyledFriendsListItem>
      {order % 2 === 0 ? (
        <StyledLogoImage src="/images/dicord_3.svg" />
      ) : (
        <StyledLogoImage src="/images/dicord_2.svg" />
      )}
      <StyledSpan>{friendName}</StyledSpan>
      <StyledImage src="/images/circleCall.svg" />
      <StyledImage src="/images/circleMessage.svg" />
    </StyledFriendsListItem>
  );
}
