import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { UserProps } from '../types/interface';
import FormatName from '../utils/formatName';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Left from '../assets/img/left.svg';

export default function ContactInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userList = useSelector((state: RootState) => state.user.userList);
  const [partner, setPartner] = useState<UserProps | null>(null);
  const { userId } = location.state || {}; // 전달받은 userId

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // 전달받은 userId에 해당하는 사용자 정보 찾기
    const nextUser = userList.find((user) => user.id === userId) ?? null;
    setPartner(nextUser);
  }, [userId, userList]);

  return (
    <>
      {partner !== null ? (
        <>
          <TopNavBar
            leftImgSrc={Left}
            leftText={FormatName(partner.name)}
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
