import styled from 'styled-components';
import EmptyChatLogLeft from '@components/non-fixed/EmptyChatBody/EmptyChatLog/EmptyChatLogLeft/EmptyChatLogLeft';
import EmptyChatLogRight from '@components/non-fixed/EmptyChatBody/EmptyChatLog/EmptyChatLogRight/EmptyChatLogRight';
import { chatBodyDivElementGap } from '@styles/styledComponents';

const StyledChatLogContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  column-gap: 8px;
  ${chatBodyDivElementGap}
`;

export default function EmptyChatLog({
  isEqual,
  from,
  createdAt,
  content,
  like,
}: {
  isEqual: boolean;
  from: number;
  createdAt: string;
  content: string;
  like: boolean;
}) {
  return (
    <StyledChatLogContainer>
      <EmptyChatLogLeft isEqual={isEqual} />
      <EmptyChatLogRight
        isEqual={isEqual}
        from={from}
        createdAt={createdAt}
        content={content}
        like={like}
      />
    </StyledChatLogContainer>
  );
}
