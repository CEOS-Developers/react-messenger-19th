import styled from 'styled-components';
import HomeBar from '../../assets/img/home-indicator.svg';

const HomeBarImg = styled.img`
  width: 8.375rem;
  height: 0.3125rem;
  position: absolute;
  bottom: 0.56rem;
  left: 7.56rem;
`;

export default function HomeIndicator() {
  return <HomeBarImg src={HomeBar} alt="Home Bar" />;
}
