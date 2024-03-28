import styled from 'styled-components';
import { useState } from 'react';
import { PlusIcon, VoiceIcon, EmojiIcon } from '../../assets';

export default function ChatFooter() {
  const [input, setInput] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <Wrapper>
      <PlusIcon />
      <InputBox onSubmit={handleSubmit}>
        <InputField type="text" value={input} onChange={handleInput} autoFocus />
        <EmojiIcon />
      </InputBox>
      <VoiceIcon />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  position: relative;

  width: 100%;
  padding: 0.6rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};

  & svg {
    cursor: pointer;
  }
`;

const InputBox = styled.form`
  display: flex;
  justify-content: center;

  width: 28.3rem;
  height: 3.4rem;
  margin-left: 0.8rem;
  margin-right: 0.4rem;

  & svg {
    position: absolute;
    right: 4.4rem;
  }
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-radius: 1.7rem;
  padding: 0.2rem;

  background-color: ${({ theme }) => theme.colors.grey_bg};
`;
