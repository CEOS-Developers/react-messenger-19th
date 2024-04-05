import styled from 'styled-components';
import FriendsSearchHead from '@components/non-fixed/FriendsBody/FriendsSearchHead/FriendsSearchHead';

const StyledFriendsBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export default function FriendsBody() {
  return (
    <StyledFriendsBody className="scroll-box">
      <FriendsSearchHead />
    </StyledFriendsBody>
  );
}
