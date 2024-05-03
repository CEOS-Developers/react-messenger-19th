import styled from 'styled-components';
import theme from '@styles/theme';
import { ReactComponent as TimesSvg } from '@assets/svg/times.svg';
import StatusBox from '@components/StatusBox';
import EditProfile from './components/EditProfile';
import ProfileInfo from './components/ProfileInfo';
import SNSBox from './components/SNSBox';
import { useRecoilValue } from 'recoil';
import { UserState } from '@recoil/userAtom';
import { useNavigate } from 'react-router-dom';

export default function MyProfilePage() {
  const userState = useRecoilValue(UserState);
  const navigate = useNavigate();
  const handleClickSNSBox = (title: string) => {
    if (title === 'Instagram') window.open(userState.instagram);
    else if (title === 'Github') window.open(userState.github);
    else if (title === 'Behance') window.open(userState.behance);
  };
  const handleClickCloseSVG = () => {
    navigate(-1);
  };
  return (
    <MyProfilePageConatainer>
      <StatusBox />
      <CloseSVGStyle onClick={handleClickCloseSVG}>
        <TimesSvg />
      </CloseSVGStyle>
      <EditProfile />
      <ProfileInfo />
      <SNSBoxesContainer>
        <SNSBox
          img="/instagram.png"
          title="Instagram"
          onClick={handleClickSNSBox}
        />
        <SNSBox img="/github.png" title="Github" onClick={handleClickSNSBox} />
        <SNSBox
          img="/behance.png"
          title="Behance"
          onClick={handleClickSNSBox}
        />
      </SNSBoxesContainer>
    </MyProfilePageConatainer>
  );
}

const SNSBoxesContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;

const CloseSVGStyle = styled.div`
  flex-grow: 1;
  padding-left: 16px;
  cursor: pointer;
`;

const MyProfilePageConatainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.gray_3};
`;
