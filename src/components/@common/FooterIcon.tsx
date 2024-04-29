import styled from 'styled-components';
import { HomeIndicatorIcon } from '../../assets';

export default function FooterIcon() {
  return (
    <Wrapper>
      <HomeIndicatorIcon />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 2.1rem 12rem 0.8rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  & svg {
    width: 13.4rem;
    height: 0.5rem;
  }
`;
