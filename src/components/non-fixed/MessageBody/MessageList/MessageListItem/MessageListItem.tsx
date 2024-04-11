import styled from 'styled-components';
import MessageListItemLeft from '@components/non-fixed/MessageBody/MessageList/MessageListItem/MessageListItemLeft';
import MessageListItemRight from '@components/non-fixed/MessageBody/MessageList/MessageListItem/MessageListItemRight';

const StyledMessageListItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
`;

interface messageListItemType {
  discordLogoColor: string;
  name: string;
  ifBlueSignal: boolean;
  content: string;
  dateString: string;
}

export default function MessageListItem({
  discordLogoColor,
  name,
  ifBlueSignal,
  content,
  dateString,
}: messageListItemType) {
  return (
    <StyledMessageListItem>
      <MessageListItemLeft discordLogoColor={discordLogoColor} />
      <MessageListItemRight
        name={name}
        ifBlueSignal={ifBlueSignal}
        content={content}
        dateString={dateString}
      />
    </StyledMessageListItem>
  );
}
