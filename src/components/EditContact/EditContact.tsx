import styled from 'styled-components';
import RightArrow from '../../assets/img/edit-arrow.svg';

const EditPageContainer = styled.div`
  width: 22.4375rem;
  height: 40.93rem;
  padding: 2.19rem 0rem 0rem 1rem;
`;

const TextContainer = styled.div`
  width: 22.4375rem;
  min-height: 3.125rem;
  display: flex;
  justify-content: space-between;
`;

const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTextBox = styled.div`
  width: 15.4275rem;
  height: 1.3125rem;
  padding: 0.88rem 1.01rem 0.94rem 0rem;
  border-bottom: 0.0625rem solid rgba(60, 60, 67, 0.29);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditText = styled.div`
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  line-height: 1.3125rem;
  letter-spacing: -0.02063rem;
`;

const MobileContainer = styled.div`
  width: 4.92rem;
  height: 1.305rem;
  gap: 0.36rem;
  display: flex;
  align-items: center;
  padding: 0.88rem 1.08rem 0.94rem 0rem;
`;

const RightArrowImg = styled.img`
  width: 0.4985rem;
  height: 0.82025rem;
`;

export default function EditContact() {
  return (
    <EditPageContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '600', marginTop: '0.94rem' }}>
          Name
        </EditText>
        <SubTextContainer>
          <SubTextBox>
            <EditText>Timothée</EditText>
          </SubTextBox>
          <SubTextBox>
            <EditText>Chalamet</EditText>
          </SubTextBox>
        </SubTextContainer>
      </TextContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '600', marginTop: '0.94rem' }}>
          Phone
        </EditText>
        <SubTextBox>
          <EditText>United Kingdom</EditText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </SubTextBox>
      </TextContainer>
      <TextContainer
        style={{ borderBottom: '0.0625rem solid rgba(60, 60, 67, 0.29)' }}
      >
        <EditText style={{ fontWeight: '600', marginTop: '0.91rem' }}>
          Link
        </EditText>
        <SubTextBox style={{ borderBottom: 'none' }}>
          <EditText>Instagram</EditText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </SubTextBox>
      </TextContainer>
      <TextContainer>
        <MobileContainer>
          <EditText
            style={{
              fontWeight: '400',
              color: '#1BD742',
            }}
          >
            mobile
          </EditText>
          <RightArrowImg src={RightArrow} alt="오른쪽 화살표 이미지" />
        </MobileContainer>
        <SubTextBox style={{ borderBottom: 'none' }}>
          <EditText>+44 1234 567890</EditText>
        </SubTextBox>
      </TextContainer>
      <TextContainer>
        <EditText
          style={{ fontWeight: '400', marginTop: '0.87rem', color: '#1BD742' }}
        >
          more fields
        </EditText>
      </TextContainer>
      <TextContainer>
        <EditText
          style={{ fontWeight: '400', marginTop: '0.88rem', color: '#FF3B30' }}
        >
          Delete Contact
        </EditText>
      </TextContainer>
    </EditPageContainer>
  );
}
