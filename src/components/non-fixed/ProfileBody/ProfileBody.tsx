import styled from 'styled-components';
import ProfilePageHead from '@components/non-fixed/ProfileBody/ProfilePageHead/ProfilePageHead';
import ProfileContent from '@components/non-fixed/ProfileBody/ProfileContent/ProfileContent';
import ProfileDiscordLogo from '@components/non-fixed/ProfileBody/ProfileDiscordLogo/ProfileDiscordLogo';

const StyledProfileBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function ProfileBody() {
  return (
    <StyledProfileBody className="scroll-box">
      <ProfilePageHead />
      <ProfileDiscordLogo />
      <ProfileContent />
    </StyledProfileBody>
  );
}
