import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import userData from '../assets/data/userData.json';
import TitleBar from '../components/Chat/TitleBar';
import ChattingRoom from '../components/Chat/ChattingRoom';
import ChatInput from '../components/Chat/ChatInput';

interface User {
  id: number;
  name: string;
  profileImg: string;
  isActive: boolean;
}

export default function ChattingPage() {
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const [partner, setPartner] = useState<User | null>(null);

  useEffect(() => {
    const nextUser = userData.users.find((user) => user.id !== nowUser) ?? null;
    setPartner(nextUser);
  }, [nowUser, userList]); // nowUser 또는 userList가 변경될 때마다 effect를 실행

  return (
    <>
      {partner !== null ? (
        <>
          <TitleBar
            name={partner.name}
            profileImg={partner.profileImg}
            isActive={partner.isActive}
          />
          <ChattingRoom />
          <ChatInput />
        </>
      ) : (
        <p>파트너 정보가 없습니다.</p>
      )}
    </>
  );
}
