import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { messagesState, Message } from '../state/messageState';
import { selectedUserState } from '../state/selectedUserState';
import { usersState, User } from '../state/userState';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EmojiModal from './EmojiModal';



// 날짜별로 메세지 그룹화하기!!
const groupMessagesByDate = (messages: Message[]) => {
  const grouped: { [key: string]: Message[][] } = {}; // 날짜별로 메시지 그룹의 배열을 저장
  messages.forEach((message) => {
    const dateKey = new Date(message.timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }

    // 1분으로 연속된 메시지를 판별하여 그룹으로 묶기,......
    const lastGroup = grouped[dateKey][grouped[dateKey].length - 1];
    if (lastGroup && lastGroup[lastGroup.length - 1].senderId === message.senderId &&
        new Date(message.timestamp).getTime() - new Date(lastGroup[lastGroup.length - 1].timestamp).getTime() <= 60000) {
      lastGroup.push(message); // 지금 보낸 톡을 마지막 그룹에 추가
    } else {
      grouped[dateKey].push([message]); // 새로운 그룹 생성
    }
  });
  return grouped;
};

//사파리 날짜 형식에 맞게 -를 /로 바꿔주는함수
function convertDateFormat(dateString: string) {
  return dateString.replace(/-/g, '/');
}
//날짜 형식에 맞게 포맷팅하기 (오전 12:02 이렇게..!!)
const formatDate = (dateString: string) => {
  const formattedDate = convertDateFormat(dateString);
  const date = new Date(formattedDate);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    day: 'numeric', 
    weekday: 'short',
  };
  return date.toLocaleString('ko-KR', options);
};



const ChatMessages: React.FC = () => { //상턔관리 변수들
  const selectedUserId = useRecoilValue(selectedUserState);
  const messages = useRecoilValue<Message[]>(messagesState);
  const userProfiles = useRecoilValue<User[]>(usersState);
  const [activeModalMessageId, setActiveModalMessageId] = useState<string | null>(null); //공감 모달이 열린 메세지의 ID저장해야돼서
  const [selectedEmojis, setSelectedEmojis] = useState<{ [key: string]: string }>({});


  const findUserProfileImage = (userId: number): string | undefined => {
    const userProfile = userProfiles.find(profile => profile.id === userId);
    return userProfile?.profileImage;
  };

  
  const filteredMessages = messages.filter(
    message => message.senderId === selectedUserId || message.receiverId === selectedUserId
  );
  const groupedMessages = groupMessagesByDate(filteredMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }; //메세지 보냈을 때 스크롤 자동으로 맨 아래로 이동!!

  // 이모지 선택 핸들러
  const handleEmojiSelect = (messageId: string, emojiUrl: string) => {
    setSelectedEmojis(prev => {
      // Toggle emoji selection off if the same emoji is clicked
      if (prev[messageId] === emojiUrl) {
        const newEmojis = { ...prev };
        delete newEmojis[messageId];
        localStorage.removeItem(`selectedEmojis_${messageId}`); 
        return newEmojis;
      } else {
        const newEmojis = { ...prev, [messageId]: emojiUrl };
        localStorage.setItem(`selectedEmojis_${messageId}`, JSON.stringify(newEmojis[messageId]));
        return newEmojis;
      }
    });
    setActiveModalMessageId(null);  // Close the modal after selection
  };

  //모달창 열고닫는 토글 핸들러
  const toggleEmojiModalForMessage = (messageId: string) => {
    setActiveModalMessageId(prevId => prevId === messageId ? null : messageId);
  };

// 이모지 불러오기
const loadEmojisFromLocalStorage = () => {
  const emojis: { [key: string]: string } = {};
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('selectedEmojis_')) {
      const messageId = key.substring('selectedEmojis_'.length);
      const emojiUrl = localStorage.getItem(key);
      if (emojiUrl) {
        emojis[messageId] = JSON.parse(emojiUrl);
      }
    }
  });
  setSelectedEmojis(emojis);
};

  useEffect(() => {
    scrollToBottom();
    loadEmojisFromLocalStorage();

  }, [messages]); 

  return (
      <MessagesContainer className='scroll-box'>
        {Object.entries(groupedMessages).map(([date, groupMessages], index) => (
          <React.Fragment key={index}>
            <DateLabel>{formatDate(date)}</DateLabel>
            {groupMessages.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {group.map((message, messageIndex) => (
                  <MessageLayout key={message.id} isSender={message.senderId === selectedUserId}>
                    {message.senderId === selectedUserId ? (
                      // 발신자 레이아웃: 시간 (맨 처음 톡에만) -> 메시지
                      <>
                        {messageIndex === 0 && ( // 맨처음 톡에만 시간 떠야됨
                          <Timestamp isSender={message.senderId === selectedUserId}>
                            {new Date(message.timestamp).toLocaleTimeString('ko-KR', 
                            { hour: 'numeric', minute: '2-digit', hour12: true }).replace('AM', '오전').replace('PM', '오후')}
                          </Timestamp>
                        )}
                        <MessageItem 
                          isSender={message.senderId === selectedUserId}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                          {message.text}
                        </MessageItem>
                      </>
                    ) : (
                      // 수신자 레이아웃: 프사 -> 메시지 -> 시간
                      <MessageModalContainer>
                      <ReceiverMessageContainer
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                        <ProfilePic //첫메세지만 프사 보여지고 나머지 메세지들은 hidden으로 숨기기
                          src={findUserProfileImage(message.receiverId)} 
                          alt="Profile" 
                          visible={messageIndex === 0} 
                        />
                         <MessageItem
                            key={message.id}
                            isSender={message.senderId === selectedUserId}
                            onDoubleClick={() =>  toggleEmojiModalForMessage(message.id.toString())} 
                            style={{ cursor: "pointer" }}
                          >
                          {message.text}
                        </MessageItem>
                       
                        {messageIndex === 0 && ( // 마찬가지로 맨위에 톡만 시간뜨기
                          <Timestamp isSender={message.senderId === selectedUserId}>
                            {new Date(message.timestamp).toLocaleTimeString('ko-KR', 
                            { hour: 'numeric', minute: '2-digit', hour12: true }).replace('AM', '오전').replace('PM', '오후')}
                          </Timestamp>
                        )}
                       </ReceiverMessageContainer>
                       {activeModalMessageId === message.id.toString() && (
                      <EmojiModal
                        onEmojiSelect={(emoji) => handleEmojiSelect(message.id.toString(), emoji)}
                        onClose={() => setActiveModalMessageId(null)}
                        selectedEmojiUrl={selectedEmojis[message.id] || null}                        />
                        )}
                        {selectedEmojis[message.id] && (
                        <EmojiIcon src={selectedEmojis[message.id]} alt="emoji" style={{marginLeft:'47px', marginTop:'5px'}} />
                        )}
                    </MessageModalContainer>
                    )}
                  </MessageLayout>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
    );
};


const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  flex-grow: 1;
  background-color: #E3E4EB;
  `;

  const MessageLayout = styled.div<{ isSender: boolean }>`
  display: flex;
  flex-direction: row;

  align-self: ${({ isSender }) => isSender ? 'flex-end' : 'flex-start'}; //발신메세지 오른쪽, 수신메세지 왼쪽
  margin: ${({ isSender }) => isSender ? `0 15px 0 0` : `0 0 0 15px`};
  background-color: transparent;
  margin-bottom: 12px;
  max-width: 80%;
  word-break: break-word;
`;

const MessageItem = styled(motion.div)<{ isSender: boolean }>`
  background-color: ${({ isSender }) => isSender ? '#DCF8C6' : '#F0F0F0'};
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 15px;
  color: #262626;
  word-break: break-word;
  user-select: none; //긁어도 선택안되게
`;

const Timestamp = styled.div<{ isSender: boolean }>`
  font-size: 13px;
  color: #63666A;
  white-space: nowrap;
  align-self: flex-end; 
  margin: ${({ isSender }) => isSender ? `0 8px 0 0` : `0 0 0 8px`};
`;

const DateLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 16px;
  font-size: 15px;
  color: #63666A;
`;

const ProfilePic = styled.img<{ visible?: boolean }>`
  width: 37px; 
  height: 37px; 
  border-radius: 50%;
  margin-right: 10px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;
const MessageModalContainer = styled.div`
`;
const ReceiverMessageContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EmojiIcon = styled.img`
background-color: #EAEBF1;
width: 16px;
height: 16.17px;

padding: 3px;
border-radius: 100px;
`;
export default ChatMessages;