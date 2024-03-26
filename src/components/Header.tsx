import styled from "styled-components"
import  headerIcon  from '../assets/img/headerIcon.png'
import dayjs from "dayjs"
import { useEffect, useState } from "react"



function Header() {

  // 현재 시간 표시
  const [time, SetTime] = useState<string>('');
  useEffect(() => {
    updateTime(); // 마운트 될 때 마다 시간 불러옴
    
    const interval = setInterval(updateTime, 60000); // 1분마다 갱신

    // 메모리 누수 방지..
    return () => clearInterval(interval);
  }, []);

  const updateTime = () =>{
    const currentTime = dayjs().format('HH:mm'); // 시:분 형식으로 포맷팅
    SetTime(currentTime);
  };


  return (
    <HeaderWrapper>
       <CurrentTime> {time} </CurrentTime>
       <HeaderIcon src= {headerIcon}/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 38.46px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CurrentTime = styled.div`
  font-size : 12px;
  font-weight: 500;
  margin-left: 26.85px;
`
const HeaderIcon =  styled.img`
  width: 63.34px;
  height: 10.16px;
  margin-left: 239.1px;
`
export default Header