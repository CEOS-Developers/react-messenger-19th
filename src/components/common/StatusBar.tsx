import celluar from "../../assets/celluar.svg";
import wifi from "../../assets/wifi.svg";
import battery from "../../assets/battery.svg";

import styled from "styled-components";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Wrapper>
      <Time> {currentTime}</Time>
      <Icon>
        <img src={celluar} alt="celluar icon" />
        <img src={wifi} alt="wifi icon" />
        <img src={battery} alt="battery icon" />
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.98rem 0.75rem 1.8rem;
  justify-content: space-between;
`;

const Time = styled.span`
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0175rem;
  font-family: "SF Pro Text";
`;

const Icon = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export default StatusBar;
