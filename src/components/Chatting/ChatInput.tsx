import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addChat } from '../../features/chatSlice';
import { Chats } from '../../types/interface';
import Plus from '../../assets/img/plus.svg';
import Attachment from '../../assets/img/attachment.svg';
import Camera from '../../assets/img/camera.svg';
import Microphone from '../../assets/img/microphone.svg';

const InputContainer = styled.div`
  width: 23.4375rem;
  height: 2.87rem;
  border-top: 0.03125rem solid #a4a39e;
  position: relative;
  margin-bottom: 2.125rem;
`;

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 0.5rem;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 13.115rem;
  height: 1.375rem;
  padding: 0.25rem 0.63rem;
  border-radius: 0.9375rem;
  border: 0.6px solid #dedfe0;
  background: #fff;
  position: absolute;
  top: 0.62rem;
  left: 2.88rem;
`;

const Input = styled.input`
  width: 11.615rem;
  border: none;
  outline: none;
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.02563rem;
  background: transparent;
`;

export default function ChatInput({ chatRoomId }: Chats) {
  const nowUser = useSelector((state: RootState) => state.user.nowUser); // 현재 사용자 ID 가져오기
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value.trim()) {
      alert('공백 없이 입력해주세요.');
      return;
    }

    const senderId = nowUser;
    const time = new Date().toISOString(); // 현재 시각을 string으로 변환
    const isRead = true; // 상황에 따라 설정

    dispatch(addChat({ chatRoomId, senderId, content: value, time, isRead }));
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
