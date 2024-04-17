import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types/interface';
import userData from '../assets/data/userData.json';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Left from '../assets/img/left.svg';

export default function ContactInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const [partner, setPartner] = useState<User | null>(null);
  const { userId } = location.state || {}; // 전달받은 userId

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log('전달받은 userId:', userId); // 전달받은 userId를 콘솔에 출력
    // 현재 사용자(nowUser)와 전달받은 userId가 동일한 경우 상대방 정보 찾기
    if (nowUser === userId) {
      // userList에서 현재 사용자(nowUser)를 제외한 첫 번째 사용자를 상대방으로 설정
      // 실제 애플리케이션에서는 더 정교한 로직이 필요할 수 있음
      const partnerUser = userList.find((user) => user.id !== nowUser) ?? null;
      setPartner(partnerUser);
    } else {
      // 전달받은 userId에 해당하는 사용자 정보 찾기
      const nextUser = userList.find((user) => user.id === userId) ?? null;
      setPartner(nextUser);
    }
  }, [userId, userList, nowUser]);

  return (
    <>
      {partner !== null ? (
        <>
          <TopNavBar
            leftImgSrc={Left}
            leftText={partner.name}
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
