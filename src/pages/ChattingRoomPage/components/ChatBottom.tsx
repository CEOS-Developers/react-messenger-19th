import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as PlusSvg } from '@assets/svg/plus.svg';
import { ReactComponent as EmojiSvg } from '@assets/svg/emoji.svg';
import { ReactComponent as MicSvg } from '@assets/svg/mic.svg';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatDataState } from '@recoil/chatAtom';
import { UserState } from '@recoil/userAtom';

interface Chat {
  chatId: string;
  to: string;
  from: string;
  content: string;
  date: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

export default function ChatBottom() {
  const [inputValue, setInputValue] = useState('');
  const userName = useRecoilValue(UserState);
  const [chattingData, setChattingData] = useRecoilState(chatDataState);

  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTime = (date: Date) => {
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };

  const HandleSubmit = () => {
    setInputValue('');
    const newChat: Chat = {
      chatId: Date.now().toString(),
      to: userName === '송은수' ? '플래시' : '송은수',
      from: userName === '송은수' ? '송은수' : '플래시',
      content: inputValue,
      date: formatDate(new Date()),
      time: formatTime(new Date()),
      isDisplay: true,
      isRead: false,
    };
    const lastChat = chattingData[0].chat[chattingData[0].chat.length - 1];
    if (lastChat.from === newChat.from && lastChat.time === newChat.time) {
      setChattingData((prev) => {
        const lastChatIndex = prev[0].chat.length - 1;
        const lastChat = {
          ...prev[0].chat[lastChatIndex],
          isDisplay: false,
        };
        lastChat.isDisplay = false;
        const newChats = [
          ...prev[0].chat.slice(0, lastChatIndex),
          lastChat,
          newChat,
        ];
        return [{ ...prev[0], chat: newChats }, ...prev.slice(1)];
      });
    } else {
      setChattingData((prev) => {
        const newChats = [...prev[0].chat, newChat];
        return [{ ...prev[0], chat: newChats }, ...prev.slice(1)];
      });
    }
  };
  return (
    <ChatBottomWrapper>
      <PlusSvg />
      <InputBox>
        <InputSytle
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              HandleSubmit();
            }
          }}
        />
        <EmojiSvg />
        {inputValue ? (
          <div onClick={HandleSubmit}>
            <PlusSvg />
          </div>
        ) : (
          <MicSvg />
        )}
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
