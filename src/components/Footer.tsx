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
  ${flexCenter}
  width: 100%;
  height: 3.4rem;
`;

const IPhoneLine = styled.div`
  width: 13.4rem;
  height: 0.5rem;
  border-radius: 10rem;
  background: var(--black, #111);
`;
