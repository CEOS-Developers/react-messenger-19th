import { useNavigate } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';
import Left from '../../assets/img/left.svg';

export default function ContactNavBar() {
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1);
  };

  return (
    <TopNavBar
      leftImgSrc={Left}
      leftText="Dain Park"
      rightText="Edit"
      leftTextOnClick={goBack}
    />
  );
}
