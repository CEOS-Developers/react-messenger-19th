import styled from 'styled-components';
import HomeBar from '../../assets/img/home-indicator.svg';

const HomeBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.125rem;
  background: none;
`;
const HomeBarImg = styled.img`
  width: 8.375rem;
  height: 0.3125rem;
  margin: 1.25rem 7.5rem 0.56rem 7.56rem;
`;

export default function HomeIndicator() {
  return (
    <HomeBarContainer>
      <HomeBarImg src={HomeBar} alt="Home Bar" />
    </HomeBarContainer>
  );
}
