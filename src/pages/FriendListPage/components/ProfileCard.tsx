import styled from 'styled-components';
import theme from '@styles/theme';
import { useRecoilValue } from 'recoil';
import { UserState } from '@recoil/userAtom';
import { useNavigate } from 'react-router-dom';

export default function ProfileCard() {
  const userState = useRecoilValue(UserState);
  const navigate = useNavigate();
  return (
    <ProfileCardContainer
      onClick={() => {
        navigate('/myprofile');
      }}
    >
      <ProfileCardImg src={userState.img}></ProfileCardImg>
      <ProfileCardNameStyle>{userState.user}</ProfileCardNameStyle>
      <ProfileCardLinkStyle>내 프로필 보기 {'>'}</ProfileCardLinkStyle>
    </ProfileCardContainer>
  );
}

const ProfileCardLinkStyle = styled.div`
  font-size: ${theme.textStyles.caption3.font_size};
  line-height: ${theme.textStyles.caption3.line_height};
  font-weight: ${theme.textStyles.caption3.font_weight};
  color: ${theme.colors.gray_2};
`;

const ProfileCardNameStyle = styled.div`
  font-size: ${theme.textStyles.body2_2.font_size};
  line-height: ${theme.textStyles.body2_2.line_height};
  font-weight: ${theme.textStyles.body2_2.font_weight};
  color: ${theme.colors.black};
  flex-grow: 1;
`;

const ProfileCardImg = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 24px;
`;

const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 66px;
  padding: 0 16px;
  margin-top: 12px;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray_5};
  }
`;
