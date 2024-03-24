import React from 'react';
import styled from 'styled-components';

const plusIcon = "./assets/icon.png";
const emojiIcon = "./assets/icon (1).png";
const cameraIcon = "./assets/icon (2).png";
const recordIcon = "./assets/icon (3).png";

const ChatInput: React.FC = () => {
  return (
    <Footer>
        <FooterContainer>
                <PlusButton src={plusIcon} alt="Plus Button" />
                <InputContainer>
                    <InputBox />
                    <EmojiButton src={emojiIcon} alt="Emoji Button" />
                </InputContainer>
                    <CameraButton src={cameraIcon} alt="Camera Button" />
                    <RecordButton src={recordIcon} alt="Record Button" />
        </FooterContainer>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F7F8FC;
  width: 100%;
  height: 49px;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 354px;
  height: 29px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 100px;

    width: 246px;
    hegiht: 29px;
`;

const PlusButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const EmojiButton = styled.img`
  width: 25.31px;
  height: 25px;
  cursor: pointer;
  margin-right: 10.12px;

`;

const CameraButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const RecordButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const InputBox = styled.input`
  flex: 1;
  hegiht: 29px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
 `;



export default ChatInput;
