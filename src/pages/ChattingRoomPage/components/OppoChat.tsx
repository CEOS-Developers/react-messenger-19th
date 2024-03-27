import theme from '@styles/theme';
import styled from 'styled-components';

interface OppochatProps {
  content: string;
  time: string;
  isDisplay: boolean;
}

export default function Oppochat({
  content,
  time,
  isDisplay,
}: OppochatProps) {
  return (
    <OppochatWrapper>
      <OppochatBox>{content}</OppochatBox>
      <OppoChatInfo>
        {isDisplay && <OppochatTime>{time}</OppochatTime>}
      </OppoChatInfo>
    </OppochatWrapper>
  );
}

const OppochatTime = styled.span`
  color: ${theme.colors.gray_1};
  font-size: ${theme.textStyles.caption2.font_size};
  line-height: ${theme.textStyles.caption2.line_height};
  font-weight: ${theme.textStyles.caption2.font_weight};
`;

const OppoChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
`;

const OppochatWrapper = styled.section`
  display: flex;
  gap: 4px;
  align-self: flex-start;
  margin-left: 40px;
`;

const OppochatBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  max-width: 240px;
  word-wrap: break-word;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: ${theme.textStyles.body1_1.font_size};
  line-height: ${theme.textStyles.body1_1.line_height};
  font-weight: ${theme.textStyles.body1_1.font_weight};
`;
