import styled from 'styled-components';

const StyledFriendsBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function FriendsBody() {
  return (
    <StyledFriendsBody className="scroll-box">
      this is friends body
    </StyledFriendsBody>
  );
}
