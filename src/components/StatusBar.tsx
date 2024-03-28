import { useState, useEffect } from 'react';
import styled from 'styled-components';
import rightSide from '../assets/img/rightSide.svg';

const StatusBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.75rem;
  flex-shrink: 0;
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

    // 컴포넌트 마운트 시 현재 시간을 설정하고, 매 분마다 시간을 업데이트
    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 30000); // 30초마다 getCurrentTime을 실행

    // 컴포넌트가 언마운트될 때 setInterval을 정리
    return () => clearInterval(intervalId);
  }, []); // 의존성 배열이 빈 배열이므로, 이 effect는 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <StatusBarContainer>
      <TextContainer>
        <ClockText>{currentTime}</ClockText>
      </TextContainer>
      <RightSideImg src={rightSide} alt="Iphone status bar right side" />
    </StatusBarContainer>
  );
}
