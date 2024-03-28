import theme from '@styles/theme';
import styled from 'styled-components';
import Pic from '@assets/img/pic.png';

interface OppoChangeChatProps {
  content: string;
  time: string;
  isDisplay: boolean;
  from: string;
}

export default function OppoChangeChat({
  content,
  time,
  isDisplay,
  from,
}: OppoChangeChatProps) {
  return (
    <OppoChangeChatWrapper>
      <OppoImageBox>
        <OppoImg src={Pic} alt="profile" />
      </OppoImageBox>
      <OppoContentBox>
        <OppoChangeChatName>{from}</OppoChangeChatName>
        <OppoChangeChatBox>{content}</OppoChangeChatBox>
      </OppoContentBox>
      <OppoChangeChatInfo>
        {isDisplay && <OppoChangeChatTime>{time}</OppoChangeChatTime>}
      </OppoChangeChatInfo>
    </OppoChangeChatWrapper>
  );
}

const OppoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const OppoImageBox = styled.div`
  width: 32px;
`;

const OppoImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 12px;
`;

const OppoChangeChatName = styled.span`
  color: ${theme.colors.gray_1};
  font-size: ${theme.textStyles.caption4.font_size};
  line-height: ${theme.textStyles.caption4.line_height};
  font-weight: ${theme.textStyles.caption4.font_weight};
`;

const OppoChangeChatTime = styled.span`
  color: ${theme.colors.gray_1};
  font-size: ${theme.textStyles.caption2.font_size};
  line-height: ${theme.textStyles.caption2.line_height};
  font-weight: ${theme.textStyles.caption2.font_weight};
`;

const OppoChangeChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
`;

const OppoChangeChatWrapper = styled.section`
  display: flex;
  gap: 8px;
  align-self: flex-start;
`;

const OppoChangeChatBox = styled.div`
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
