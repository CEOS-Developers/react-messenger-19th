import styled from 'styled-components';
import theme from '@styles/theme';
import { ReactComponent as TimesSvg } from '@assets/svg/times.svg';
import StatusBox from '@components/StatusBox';

export default function MyProfilePage() {
  return (
    <MyProfilePageConatainer>
      <StatusBox />
      <CloseSVGStyle>
        <TimesSvg />
      </CloseSVGStyle>
    </MyProfilePageConatainer>
  );
}

const CloseSVGStyle = styled.div`
  flex-grow: 1;
  padding-left: 16px;
`;

const MyProfilePageConatainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.gray_3};
`;
