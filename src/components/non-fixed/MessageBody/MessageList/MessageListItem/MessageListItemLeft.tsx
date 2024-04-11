import styled from 'styled-components';

const StyledMessageListItemLeftContainer = styled.div`
  width: 48px;
  height: 48px;
`;

const StyledMessagListItemLeftImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export default function MessageListItemLeft({
  discordLogoColor,
}: {
  discordLogoColor: string;
}) {
  return (
    <StyledMessageListItemLeftContainer>
      {discordLogoColor === 'green' && (
        <StyledMessagListItemLeftImage src="/images/dicord_2.svg" />
      )}

      {discordLogoColor === 'purple' && (
        <StyledMessagListItemLeftImage src="/images/dicord_3.svg" />
      )}
    </StyledMessageListItemLeftContainer>
  );
}
