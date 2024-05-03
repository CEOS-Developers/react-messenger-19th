import styled from 'styled-components';
import theme from '@styles/theme';
import { useRecoilValue } from 'recoil';
import { UserState } from '@recoil/userAtom';

export default function ProfileInfo() {
  const userState = useRecoilValue(UserState);
  return (
    <ProfileInfoContainer>
      <ProfileInfoImg src={userState.img}/>
      <ProfileInfoTitle>{userState.user}</ProfileInfoTitle>
      <ProfileInfoMessage>{userState.stateMessage}</ProfileInfoMessage>
    </ProfileInfoContainer>
  );
}

const ProfileInfoMessage = styled.p`
  font-size: ${theme.textStyles.body1_1.font_size};
  font-weight: ${theme.textStyles.body1_1.font_weight};
  line-height: ${theme.textStyles.body1_1.line_height};
`;

const ProfileInfoTitle = styled.p`
  font-size: ${theme.textStyles.subTitle.font_size};
  font-weight: ${theme.textStyles.subTitle.font_weight};
  line-height: ${theme.textStyles.subTitle.line_height};
`;

const ProfileInfoImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 37px;
`;

const ProfileInfoContainer = styled.article`
  align-self: center;
  width: fit-content;
  height: fit-content;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 40px;
`;