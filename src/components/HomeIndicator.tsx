import styled from 'styled-components';
import HomeBar from '../assets/img/homeIndicator.svg';

const HomeBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.125rem;
`;

const HomeBarImg = styled.img`
  width: 8.375rem;
  height: 0.3125rem;
  padding: 1.3125rem 7.5rem 0.5rem 7.5625rem;
`;

export default function HomeIndicator() {
  return (
    <HomeBarContainer>
      <HomeBarImg src={HomeBar} alt="Home Bar" />
    </HomeBarContainer>
  );
}
