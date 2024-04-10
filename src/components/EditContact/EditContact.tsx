import styled from 'styled-components';
import RightArrow from '../../assets/img/edit-arrow.svg';

const Container = styled.div`
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
`;

const EditText = styled.div`
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  line-height: 1.3125rem;
  letter-spacing: -0.02063rem;
  margin-top: 0.94rem;
`;

const IconImg = styled.img`
  width: 0.4985rem;
  height: 0.82025rem;
`;

export default function EditContact() {
  return (
    <Container>
      <TextContainer>
        <EditText style={{ fontWeight: '600' }}>Name</EditText>
        <SubTextContainer>
          <SubTextBox>Timothée</SubTextBox>
          <SubTextBox>Chalamet</SubTextBox>
        </SubTextContainer>
      </TextContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '600' }}>Phone</EditText>
        <SubTextBox>United Kingdom</SubTextBox>
      </TextContainer>
      <TextContainer
        style={{ borderBottom: '0.0625rem solid rgba(60, 60, 67, 0.29)' }}
      >
        <EditText style={{ fontWeight: '600' }}>Link</EditText>
        <SubTextBox style={{ borderBottom: 'none' }}>Instagram</SubTextBox>
      </TextContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '400', color: '#1BD742' }}>
          mobile
        </EditText>
        <SubTextBox style={{ borderBottom: 'none' }}>
          +44 1234 567890
        </SubTextBox>
      </TextContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '400', color: '#1BD742' }}>
          more fields
        </EditText>
      </TextContainer>
      <TextContainer>
        <EditText style={{ fontWeight: '400', color: '#FF3B30' }}>
          Delete Contact
        </EditText>
      </TextContainer>
    </Container>
  );
}
