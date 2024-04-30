import styled from 'styled-components';

const StyledProfileDiscordLogoContainer = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  top: 65px;
  left: 142.5px;
  right: 142.5px;
  border-radius: 50%;
  background-color: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProfileDiscordLogo = styled.img``;

export default function ProfileDiscordLogo() {
  return (
    <StyledProfileDiscordLogoContainer>
      <StyledProfileDiscordLogo
        src="/images/discord80.svg"
        alt="This is discord 80 logo"
      />
    </StyledProfileDiscordLogoContainer>
  );
}
