import styled from 'styled-components';
import theme from '@styles/theme';
import { ReactComponent as EditSvg } from '@assets/svg/edit.svg';

export default function EditProfile() {
  return (
    <EditProfileContainer>
      <EditProfileTextStyle>프로필 편집</EditProfileTextStyle>
      <EditSvg />
    </EditProfileContainer>
  );
}

const EditProfileTextStyle = styled.p`
  font-size: ${theme.textStyles.caption5.font_size};
  font-weight: ${theme.textStyles.caption5.font_weight};
  line-height: ${theme.textStyles.caption5.line_height};
`;

const EditProfileContainer = styled.div`
  align-self: center;
  width: fit-content;
  height: 32px;
  padding: 8px 16px;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  background-color: ${theme.colors.gray_3};
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 22px;
  margin-bottom: 34px;
`;
