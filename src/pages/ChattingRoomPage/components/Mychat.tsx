import theme from '@styles/theme';
import styled from 'styled-components';

interface MychatProps {
  content: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

export default function Mychat({
  content,
  time,
  isDisplay,
  isRead,
}: MychatProps) {
  return (
    <MychatWrapper>
      <MyChatInfo>
        {!isRead && <MychatIsRead>1</MychatIsRead>}
        {isDisplay && <MychatTime>{time}</MychatTime>}
      </MyChatInfo>
      <MychatBox>{content}</MychatBox>
    </MychatWrapper>
  );
}

const MychatIsRead = styled.span`
  color: ${theme.colors.yellow};
  font-size: ${theme.textStyles.caption2.font_size};
  line-height: ${theme.textStyles.caption2.line_height};
  font-weight: ${theme.textStyles.caption2.font_weight};
`;

const MychatTime = styled.span`
  color: ${theme.colors.gray_1};
  font-size: ${theme.textStyles.caption2.font_size};
  line-height: ${theme.textStyles.caption2.line_height};
  font-weight: ${theme.textStyles.caption2.font_weight};
`;

const MyChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2px;
`;

const MychatWrapper = styled.section`
  display: flex;
  gap: 4px;
  align-self: flex-end;
`;

const MychatBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  max-width: 240px;
  word-wrap: break-word;
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.black};
  font-size: ${theme.textStyles.body1_1.font_size};
  line-height: ${theme.textStyles.body1_1.line_height};
  font-weight: ${theme.textStyles.body1_1.font_weight};
`;
