import { useNavigate } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';

export default function EditNavBar() {
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1);
  };

  return (
    <TopNavBar
      leftText="Cancel"
      rightText="Save"
      leftTextOnClick={goBack}
      $noBorderBottom={true}
      $isEditPage={true}
      title="Edit Contact"
    />
  );
}
