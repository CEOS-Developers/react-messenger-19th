import PageHeader from "../../components/common/PageHeader";
import StatusBar from "../../components/common/StatusBar";
import editProfile from "../../assets/editProfile.svg";
import styled from "styled-components";
import { typography } from "../../style/typography";
import { colors } from "../../style/colors";

import userData from "../../data/user.json";

const Header = () => {
  const me = userData.users[0];
  return (
    <Wrapper>
      <StatusBar />
      <PageHeader title="프로필" icon={editProfile} />
      <ProfileWrapper>
        <BackCircle>
          <CircleImage src={`img/userProfile/${me.profileImg}`} />
        </BackCircle>
        <NameWrapper>
          <Nickname>{me.name}</Nickname>
          <LoginId>jioni</LoginId>
        </NameWrapper>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 23.5rem;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='375' height='274' viewBox='0 0 375 274' fill='none'><path d='M0 274L3.26742e-06 0L376 4.48376e-06L376 274L0 274Z' fill='url(%23paint0_linear_4_2279)'/><defs><linearGradient id='paint0_linear_4_2279' x1='218.824' y1='86.7979' x2='208.251' y2='204.027' gradientUnits='userSpaceOnUse'><stop stop-color='%23FFE75C'/><stop offset='1' stop-color='%23FFC619'/></linearGradient></defs></svg>")
    no-repeat;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackCircle = styled.div`
  position: relative;
  margin-top: 5rem;
  background-color: white;
  width: 12.3rem;
  height: 12.3rem;
  border-radius: 50%;
`;

const CircleImage = styled.img`
  position: absolute;
  width: 11.25rem;
  height: 11.25rem;
  flex-shrink: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nickname = styled.span`
  ${typography.title1}
`;
const LoginId = styled.span`
  ${typography.body2};
  color: ${colors.gray400};
`;
