import styled from 'styled-components';
import theme from '@styles/theme';
import { useNavigate } from 'react-router-dom';

interface UpdatedProfileCardProps {
  user: string;
  img: string;
  id: string;
}

export default function UpdatedProfileCard({
  user,
  img,
  id,
}: UpdatedProfileCardProps) {
  const navigate = useNavigate();
  return (
    <UpdatedProfileCardContainer
      onClick={() => navigate(`/chattingroom/${id}`)}
    >
      <UpdatedProfileCardImg src={img}></UpdatedProfileCardImg>
      <UpdatedProfileCardNameStyle>{user}</UpdatedProfileCardNameStyle>
    </UpdatedProfileCardContainer>
  );
}

const UpdatedProfileCardNameStyle = styled.div`
  font-size: ${theme.textStyles.caption5.font_size};
  line-height: ${theme.textStyles.caption5.line_height};
  font-weight: ${theme.textStyles.caption5.font_weight};
  color: ${theme.colors.black};
  flex-grow: 1;
`;

const UpdatedProfileCardImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 16px;
`;

const UpdatedProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: 58px;
  margin: 0 6px;
  gap: 4px;
  cursor: pointer;
`;
