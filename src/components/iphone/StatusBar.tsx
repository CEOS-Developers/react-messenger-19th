import { useState, useEffect } from 'react';
import styled from 'styled-components';
import rightSide from '../../assets/img/right-side.svg';

const StatusBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.75rem;
  position: relative;
`;

const RightSideImg = styled.img`
  width: 4.16631rem;
  height: 0.7085rem;
  position: absolute;
  top: 1.08rem;
  right: 0.92rem;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.75rem;
`;

const ClockText = styled.div`
  color: #000;
  text-align: center;
  font-family: 'SF Pro Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 0.875rem */
`;

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }

    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 1000); // 1초마다 getCurrentTime을 실행

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StatusBarContainer>
      <TextContainer>
        <ClockText>{currentTime}</ClockText>
      </TextContainer>
      <RightSideImg src={rightSide} alt="Iphone status bar right side" />
    </StatusBarContainer>
  );
}
