import styled from 'styled-components';
import { flexCenter } from 'styles/CommonStyle';

function Footer() {
  return (
    <FooterWrapper>
      <IPhoneLine />
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: var(--gray01);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  ${flexCenter}
  width: 100%;
  height: 3.4rem;
  border-radius: 0 0 2.4rem 2.4rem;
`;

const IPhoneLine = styled.div`
  width: 13.4rem;
  height: 0.5rem;
  border-radius: 10rem;
  background: var(--black);
`;
