import ProfilePageHead from '@components/non-fixed/ProfileBody/ProfilePageHead/ProfilePageHead';
import styled from 'styled-components';

const StyledProfileBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function ProfileBody() {
  return (
    <StyledProfileBody className="scroll-box">
      <ProfilePageHead />
    </StyledProfileBody>
  );
}
