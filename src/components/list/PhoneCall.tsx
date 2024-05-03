import React, { useState } from 'react';
import styled from 'styled-components';
import IphoneHeader from '../main/IphoneHeader';
import IphoneFooter from '../main/IphoneFooter';
import NavigatingFooter from './NavigateFooter';


const numLettersMapping: { [key: string]: string } = {
  '1': '\u00A0',
  '2': 'A B C', '3': 'D E F',
  '4': 'G H I', '5': 'J K L', '6': 'M N O',
  '7': 'P Q R S', '8': 'T U V', '9': 'W X Y Z',
  '*': '', '0': '+', '#': ''
};


const PhoneCall: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCalling, setIsCalling] = useState(false);

  const handleButtonClick = (value: string) => {
    setInputValue(prev => {
      if (prev.replace(/-/g, '').length === 3 || prev.replace(/-/g, '').length === 7) {
        return `${prev}-${value}`; //-가 자동으로 추가되게 하기
      }
      return prev + value;
    });
  };
  const handleBackspace = () => {
    setInputValue(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    if(inputValue){ //번호 입력했을때만 알람뜨기
    alert(`${inputValue}에게 전화거는 중...`); 
  }
    setInputValue("");
  };


  const displayText = inputValue.length > 15 ? '...' + inputValue.slice(-21) : inputValue;

  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.svg'/>
        <KeypadContainer>
          <Display>
            <DisplayContent>{displayText}</DisplayContent>
          </Display>
          <Keypad>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(key => (
              <Button key={key} onClick={() => handleButtonClick(key)}>
                <KeyText>{key}</KeyText>
                <LettersText>{numLettersMapping[key]}</LettersText>
              </Button>
            ))}
             <CallButton onClick={handleCall}>
              <CallImg src="/assets/Call-icon.svg" alt="Call"/>
              </CallButton>
            <BackspaceButton onClick={handleBackspace} src="/assets/DeletePhoneCall.svg"/>
          </Keypad>
        </KeypadContainer>
        <NavigatingFooter/>
        <IphoneFooter src='/assets/Home Indicator.png'/>
      </AppContainer>
    </Container>
  );
};

export default PhoneCall;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
  width: 100vw; 
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw; 
  height: 100vh; 
  background-color: #FFFFFF; 
  align-items: center; 

  @media (min-width: 768px) { 
    max-width: 375px;
    max-height: 812px;
    min-height: 812px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const KeypadContainer = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 42px
`;

const Display = styled.div`
font-family: Pretendard;
  width:100%;
  max-width: 268px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: 40px;
`;

const DisplayContent = styled.span`
  overflow: hidden; //넘치는 전화번호 숨기기
  white-space: nowrap; //줄바꿈도 X
  `;
const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
font-family: Pretendard;

  width: 73px;
  height: 73px;
  background-color: #E2E2E2;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #D3D3D3;  
  }

  &:active {
    transform: scale(0.95); 
  }
`;

const KeyText = styled.div`
  font-size: 30px;
  color: #000000;

`;

const LettersText = styled.div`
  font-size: 10px;
  color: #000000;
`;

const BackspaceButton = styled.img`
  font-size: 20px;
  grid-column:3;
  background-color: transparent;
  border: none;
  color: #B6B6B6;
  cursor: pointer;
  width: 45px;
margin-left:12px;
  &:active {
    transform: scale(0.95); 
  }
`;

const CallButton = styled(Button)`
grid-column: 2 / span 1; 
background-color: #31C75C; 

  &:hover {
    background-color: #45A049; 
  }
`;

const CallImg = styled.img`
 width: '24px';
 height: '24px'  
`;