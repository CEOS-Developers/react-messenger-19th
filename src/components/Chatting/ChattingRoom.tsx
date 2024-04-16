import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ChatBubble from './ChatBubble';
import FormatTimeToAMPM from './FormatTimeToAMPM';
import FormatDateToDMY from './FormatDateToDMY';

const ChattingPageContainer = styled.div`
  width: 23.4375rem;
  height: 40.25rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer/Edge
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari
  }
`;

const DateContainer = styled.div`
  width: fit-content;
  height: 0.875rem;
  display: block;
  text-align: center;
  padding: 0.1875rem 1rem;
  border-radius: 0.375rem;
  background: #dbdfeb;
  margin: 0.63rem auto;
`;

const DateText = styled.div`
  color: #414350;
  text-align: center;
  font-family: 'SF Pro Text';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 오늘 날짜를 "dd/mm/yy" 형식의 문자열로 반환하는 함수
function getTodayDateStringDMY() {
  return FormatDateToDMY(new Date());
}

export default function ChattingRoom() {
  const nowUser = useSelector((state: RootState) => state.user.nowUser); // 현재 사용자 상태 가져오기
  const chatList = useSelector(
    (state: RootState) => state.chat.chattings[0].chatList
  );
  const ChattingRoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ChattingRoomRef.current) {
      ChattingRoomRef.current.scrollTop = ChattingRoomRef.current.scrollHeight;
    }
  }, [chatList]); // chatList가 변경될 때마다 useEffect를 다시 실행

  let lastDate = '';

  return (
    <ChattingPageContainer ref={ChattingRoomRef}>
      {chatList.map((chat) => {
        const chatDateDMY = FormatDateToDMY(chat.time); // 현재 채팅의 날짜를 "dd/mm/yy" 형식으로 변환
        let showDateText = false;

        if (chatDateDMY !== lastDate) {
          lastDate = chatDateDMY;
          showDateText = true; // 날짜가 변경되었으므로 텍스트 보여주기
        }

        const todayDateStringDMY = getTodayDateStringDMY();
        const isToday = chatDateDMY === todayDateStringDMY; // 현재 채팅 날짜가 오늘인지 확인

        return (
          <React.Fragment key={chat.id}>
            {showDateText && (
              <DateContainer>
                <DateText>{isToday ? 'Today' : chatDateDMY}</DateText>
              </DateContainer>
            )}
            <ChatBubble
              $isSentByMe={chat.senderId === nowUser} // 현재 사용자가 보낸 메시지인지 확인
              content={chat.content}
              time={FormatTimeToAMPM(chat.time)}
              $isRead={chat.isRead}
            />
          </React.Fragment>
        );
      })}
    </ChattingPageContainer>
  );
}
