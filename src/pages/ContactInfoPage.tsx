import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types/type';
import userData from '../assets/data/userData.json';
import ContactNavBar from '../components/ContactInfo/ContactNavBar';
import ContactInfo from '../components/ContactInfo/ContactInfo';

export default function ContactInfoPage() {
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
          <ContactNavBar />
          <ContactInfo name={partner.name} profileImg={partner.profileImg} />
        </>
      ) : (
        <p>파트너 정보가 없습니다.</p>
      )}
    </>
  );
}
