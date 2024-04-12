import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types/type';
import userData from '../assets/data/userData.json';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Left from '../assets/img/left.svg';

export default function ContactInfoPage() {
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const [partner, setPartner] = useState<User | null>(null);
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const nextUser = userData.users.find((user) => user.id !== nowUser) ?? null;
    setPartner(nextUser);
  }, [nowUser, userList]); // nowUser 또는 userList가 변경될 때마다 effect를 실행

  return (
    <>
      {partner !== null ? (
        <>
          <TopNavBar
            leftImgSrc={Left}
            leftText="Dain Park"
            rightText="Edit"
            leftTextOnClick={goBack}
            title="Contact Info"
          />
          <ContactInfo name={partner.name} profileImg={partner.profileImg} />
        </>
      ) : (
        <p>파트너 정보가 없습니다.</p>
      )}
    </>
  );
}
