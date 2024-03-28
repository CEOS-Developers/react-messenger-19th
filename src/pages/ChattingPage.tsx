import { useState } from 'react';
import TitleBar from '../components/Chat/TitleBar';
import ChattingRoom from '../components/Chat/ChattingRoom';
import ChatInput from '../components/Chat/ChatInput';
import UserData from '../assets/data/userData.json';

export default function ChattingPage() {
  const [partner] = useState(UserData.users[1]);

  return (
    <>
      <TitleBar
        userName={partner.name}
        profileImg={partner.profileImg}
        isActive={partner.isActive}
        //handleChangeUser={handleChangeUser}
      />
      <ChattingRoom />
      <ChatInput />
    </>
  );
}
