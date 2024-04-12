import styled from 'styled-components';
import { TitleBarProps } from '../../types/type';
import Instagram from '../../assets/img/contact-instagram.svg';
import Github from '../../assets/img/contact-github.svg';
import Message from '../../assets/img/contact-message.svg';
import Call from '../../assets/img/contact-call.svg';
import Media from '../../assets/img/media.svg';
import Star from '../../assets/img/star.svg';
import Search from '../../assets/img/search.svg';
import Mute from '../../assets/img/mute.svg';
import Tone from '../../assets/img/tone.svg';
import RightArrow from '../../assets/img/edit-arrow.svg';

const ContactPageContainer = styled.div`
  width: 23.4375rem;
  height: 45.245rem;
  background: #efeff4;
  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer/Edge
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari
  }
`;

const ProfileImg = styled.img`
  width: 23.4375rem;
  height: 23.4375rem;
`;

const InfoContainer = styled.div`
  width: 22.4975rem;
  height: 7.875rem;
  box-shadow: 0px 0.33px 0px 0px rgba(60, 60, 67, 0.29);
  padding-left: 0.94rem;
  background: #fff;
`;

const InfoBox = styled.div`
  width: 21.5575rem;
  padding: 0.69rem 0.94rem 0rem 0rem;
`;

const NameText = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4375rem;
  letter-spacing: -0.0265rem;
`;

const SubText = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.0125rem;
`;

const InfoText = styled.div`
  color: #8e8e93;
  font-family: 'SF Pro Text';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0015rem;
`;

const Seperator = styled.div`
  height: 0.0625rem;
  background: rgba(60, 60, 67, 0.29);
  margin-left: auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  position: absolute;
  right: 0.9375rem;
  top: 24.38rem;
`;

const ContactIconImg = styled.img`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
`;

const ExtraContainer = styled.div`
  width: 23.4375rem;
  background: #fff;
  box-shadow: 0px 0.33px 0px 0px rgba(60, 60, 67, 0.29),
    0px -0.33px 0px 0px rgba(60, 60, 67, 0.29);
  margin-top: 1.22rem;
`;

const DetailContainer = styled.div`
  width: 21.4375rem;
  height: 1.8075rem;
  padding: 0.5rem 1.06rem 0.63rem 0.94rem;
  display: flex;
  align-items: center;
`;

const ExtraIconImg = styled.img`
  width: 1.8125rem;
  height: 1.8125rem;
  margin-right: 0.94rem;
`;

const ExtraText = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.02063rem;
`;

const ExtraDetailText = styled.div`
  color: rgba(60, 60, 67, 0.6);
  text-align: right;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.0235rem;
  margin-left: auto;
`;

const RightArrowImg = styled.img`
  width: 0.4375rem;
  height: 0.75rem;
  margin-left: 0.75rem;
`;

export default function ContactInfo(props: TitleBarProps) {
  const { name, profileImg } = props;

  return (
    <ContactPageContainer>
      <ProfileImg src={profileImg} alt="상대방 유저 프로필 이미지" />
      <InfoContainer>
        <InfoBox style={{ height: '3.435rem' }}>
          <NameText>{name}</NameText>
          <InfoText style={{ marginTop: '0.31rem' }}>+44 7496 0000000</InfoText>
        </InfoBox>
        <IconContainer>
          <ContactIconImg src={Instagram} alt="인스타그램 이미지" />
          <ContactIconImg src={Github} alt="깃허브 이미지" />
          <ContactIconImg src={Message} alt="메시지 이미지" />
          <ContactIconImg src={Call} alt="전화 이미지" />
        </IconContainer>
        <Seperator style={{ width: '22.4375rem' }} />
        <InfoBox style={{ height: '3.06rem' }}>
          <SubText>I’m in Seoul Now!</SubText>
          <InfoText style={{ marginTop: '0.44rem' }}>Mar 20, 2024</InfoText>
        </InfoBox>
      </InfoContainer>

      <ExtraContainer>
        <DetailContainer>
          <ExtraIconImg
            src={Media}
            alt="Media, Links, and Docs 아이콘 이미지"
          />
          <ExtraText>Media, Links, and Docs</ExtraText>
          <ExtraDetailText>12</ExtraDetailText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </DetailContainer>
        <Seperator style={{ width: '19.75rem' }} />
        <DetailContainer>
          <ExtraIconImg src={Star} alt="Starred Messages 아이콘 이미지" />
          <ExtraText>Starred Messages</ExtraText>
          <ExtraDetailText>None</ExtraDetailText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </DetailContainer>
        <Seperator style={{ width: '19.75rem' }} />
        <DetailContainer>
          <ExtraIconImg src={Search} alt="Chat Search 아이콘 이미지" />
          <ExtraText>Chat Search</ExtraText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </DetailContainer>
      </ExtraContainer>

      <ExtraContainer>
        <DetailContainer>
          <ExtraIconImg src={Mute} alt="Mute 아이콘 이미지" />
          <ExtraText>Mute</ExtraText>
          <ExtraDetailText>No</ExtraDetailText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </DetailContainer>
        <Seperator style={{ width: '19.75rem' }} />
        <DetailContainer>
          <ExtraIconImg src={Tone} alt="Custom Tone 아이콘 이미지" />
          <ExtraText>Custom Tone</ExtraText>
          <ExtraDetailText>Default (Note)</ExtraDetailText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </DetailContainer>
        <Seperator style={{ width: '19.75rem' }} />
      </ExtraContainer>
    </ContactPageContainer>
  );
}
