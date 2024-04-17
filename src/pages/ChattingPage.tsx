import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types/interface';
import { Chats } from '../types/interface';
import TitleBar from '../components/Chatting/TitleBar';
import ChattingRoom from '../components/Chatting/ChattingRoom';
import ChatInput from '../components/Chatting/ChatInput';

export default function ChattingPage() {
  const { chatRoomId } = useParams(); // URL에서 채팅방 ID를 추출
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const chattings = useSelector((state: RootState) => state.chat.chattings);
  const [partner, setPartner] = useState<User | null>(null);
  const [chatRoom, setChatRoom] = useState<Chats | null>(null);

  useEffect(() => {
    // chatRoomId를 사용하여 해당 채팅방의 userList를 찾기
    const foundChatRoom = chattings.find(
      (chat) => chat.chatRoomId.toString() === chatRoomId
    );
    if (foundChatRoom) {
      setChatRoom(foundChatRoom); // 찾은 채팅방을 상태로 설정
      // 현재 유저 제외한 상대 유저 찾기
      const nextUser =
        userList.find(
          (user) =>
            foundChatRoom.userList.includes(user.id) && user.id !== nowUser
        ) ?? null;
      setPartner(nextUser);
    } else {
      setChatRoom(null); // 찾을 수 없으면 null로 설정
    }
  }, [chatRoomId, nowUser, userList, chattings]); // 넷 중 하나라도 변경될 때마다 effect를 실행

  if (chatRoom && partner !== null) {
    return (
      <>
        <TitleBar
          name={partner.name}
          profileImg={partner.profileImg}
          isActive={partner.isActive}
        />
        <ChattingRoom
          chatRoomId={chatRoom.chatRoomId}
          userList={chatRoom.userList}
          chatList={chatRoom.chatList}
        />
        <ChatInput
          chatRoomId={chatRoom.chatRoomId}
          userList={chatRoom.userList}
          chatList={chatRoom.chatList}
        />
      </>
    );
  } else {
    return <p>파트너 정보가 없습니다.</p>;
  }
}
