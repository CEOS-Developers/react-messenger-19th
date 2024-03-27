import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as PlusSvg } from '@assets/svg/plus.svg';
import { ReactComponent as EmojiSvg } from '@assets/svg/emoji.svg';
import { ReactComponent as MicSvg } from '@assets/svg/mic.svg';

export default function ChatBottom() {
  return (
    <ChatBottomWrapper>
      <PlusSvg />
      <InputBox>
        <InputSytle />
        <EmojiSvg />
        <MicSvg />
      </InputBox>
    </ChatBottomWrapper>
  );
}

const ChatBottomWrapper = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 375px;
  height: 48px;
  padding: 4px 16px 0 16px;
  background-color: ${theme.colors.white};
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  height: 30px;
  padding: 0 8px;
  border-radius: 15px;
  background-color: ${theme.colors.gray_5};
`;

const InputSytle = styled.input`
  flex-grow: 1;
  font-size: ${theme.textStyles.body3.font_size};
  line-height: ${theme.textStyles.body3.line_height};
  font-weight: ${theme.textStyles.body3.font_weight};
  color: ${theme.colors.black};
  border: none;
  outline: none;
  background-color: ${theme.colors.gray_5};
`;
