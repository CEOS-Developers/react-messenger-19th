import React, { useState, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { messageState, Message } from '../state/messageState';
import styled from 'styled-components';

const plusIcon = "./assets/icon.png";
const emojiIcon = "./assets/icon (1).png";
const cameraIcon = "./assets/icon (2).png";
const recordIcon = "./assets/icon (3).png";
const sendIcon = "./assets/send icon.png";

interface InputBoxProps {
    expanded: boolean;
  }
interface InputContainerProps {
    expanded: boolean;
  }

  const saveMessagesToLocalStorage = (messages: Message[]): void => {
    localStorage.setItem('messages', JSON.stringify(messages));
  };
  
const ChatInput: React.FC = () => {
    const [expanded, setExpanded] = useState(false); //인풋칸 클릭시 확장되기위해 변수 설정
    const containerRef = useRef<HTMLDivElement>(null); //ChatInput 컴포넌트 전체에 대해서 참조 생성!!
    const [message, setMessage] = useState<string>('');
    const setMessageList = useSetRecoilState(messageState);
   
   const send = (): void => {
    if (message.trim() !== '') {
      setMessageList((oldMessageList) => {
        const newMessageList = [
          ...oldMessageList,
          { id: Date.now(), text: message, timestamp: new Date() },
        ];
        saveMessagesToLocalStorage(newMessageList);
        return newMessageList;
      });
      setMessage('');
    }
  };

  //배경 클릭 감지 핸들러
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpanded(!expanded); // 외부 클릭 시 확장상태가 토글된다
      }
    };

    // 클릭 이벤트 리스너
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    // 클린업 함수에서 이벤트 리스너 제거
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]); 


return (
    <Footer ref={containerRef}>
      <FooterContainer>
        <PlusButton src={plusIcon} alt="Plus Button" />
        <InputContainer expanded={expanded}>
        <InputBox
          onClick={() => setExpanded(true)}  
          expanded={expanded}
          value={message} 
          onChange={(e) => setMessage(e.target.value)} // 입력값 변경 시 message 상태 업데이트
          onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) { 
                  send();
                  e.preventDefault();
              }
          }}
        />
        <EmojiButton src={emojiIcon} alt="Emoji Button" />
        </InputContainer>
        {expanded ? ( //확장되면서 Footer 구조 바뀌기
          <SendButton src={sendIcon} alt="send Button" onClick={send} />
        ) : (
        <>
            <CameraButton src={cameraIcon} alt="Camera Button" />
            <RecordButton src={recordIcon} alt="Record Button" />
        </>
        )}
      </FooterContainer>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F7F8FC;
  width: 100%;
  height: 49px;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 354px;
  height: 29px;
`;

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 100px;
  width: ${({ expanded }) => expanded ? '275px' : '246px'};
  height: 29px;

  transition: width 0.3s ease;
`;

const PlusButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;

  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }`;

const EmojiButton = styled.img`
  width: 25.31px;
  height: 25px;
  cursor: pointer;
  margin-right: 10.12px;

  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

const CameraButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  
  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

const RecordButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  
  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

const SendButton = styled.img`
  width: 29px;
  height: 29px;
  cursor: pointer;
  
  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

const InputBox = styled.input<InputBoxProps>`
  flex: 1;
  height: 29px;
  border: none;
  background-color: transparent;
  font-family:'Pretendard';
  &:focus {
    outline: none;
  }

  ${({ expanded }) => expanded && `
    width: calc(100% - 29px); // SendButton의 너비만큼 빼서 원래 너비로 돌아가기
  `}
`;



export default ChatInput;
