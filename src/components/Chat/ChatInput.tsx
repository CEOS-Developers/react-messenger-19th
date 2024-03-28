import { useState } from 'react';
import styled from 'styled-components';
import Plus from '../../assets/img/plus.svg';
import Attachment from '../../assets/img/attachment.svg';
import Camera from '../../assets/img/camera.svg';
import Microphone from '../../assets/img/microphone.svg';

const InputContainer = styled.div`
  width: 23.4375rem;
  height: 2.87rem;
  border-top: 0.03125rem solid #a4a39e;
  position: relative;
`;

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 0.5rem;
`;

const InputBox = styled.div`
  width: 14.375rem;
  height: 1.875rem;
  border-radius: 0.9375rem;
  border: 0.6px solid #dedfe0;
  background: #fff;
  position: absolute;
  top: 0.62rem;
  left: 2.88rem;
`;

const Input = styled.input`
  width: 75%;
  margin-top: 0.22rem;
  margin-bottom: 0.28rem;
  margin-left: 0.75rem;
  border: none;
  outline: none;
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.02563rem;
`;

export default function ChatInput() {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) {
      alert('공백 없이 입력해주세요.');
      return;
    }
    setValue('');
  };

  return (
    <InputContainer>
      <IconImg src={Plus} alt="플러스 이미지" style={{ left: '0.81rem' }} />
      <InputBox>
        <form onSubmit={handleSubmit}>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      </InputBox>
      <IconImg src={Attachment} alt="첨부 이미지" style={{ left: '15.4rem' }} />
      <IconImg src={Camera} alt="카메라 이미지" style={{ left: '18.3rem' }} />
      <IconImg
        src={Microphone}
        alt="녹음기 이미지"
        style={{ left: '20.9rem' }}
      />
    </InputContainer>
  );
}
