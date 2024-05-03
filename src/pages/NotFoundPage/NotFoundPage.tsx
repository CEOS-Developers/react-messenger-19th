import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <NotFoundPageContainer>
      구현되지 않은 페이지입니다!
      <Button onClick={() => navigate(-1)}>이전 페이지로 돌아가기</Button>
    </NotFoundPageContainer>
  );
}

const Button = styled.button`
  background-color: #f0f0f0;
  color: #000;
  border: 1px solid #000;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const NotFoundPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;
`;
