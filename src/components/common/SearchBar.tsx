import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'asset/icons/SearchIcon.svg';
import { ReactComponent as CloseIcon } from 'asset/icons/CloseIcon.svg';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface SearchBarProp {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}
export default function SearchBar({ inputValue, setInputValue }: SearchBarProp) {
  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCloseButtonClick = () => {
    setInputValue('');
  };

  return (
    <InputWrapper>
      <SearchIcon className="icon" alt="검색 아이콘" />
      <Input onChange={handleInputValueChange} value={inputValue} placeholder="이름으로 검색" />
      <button onClick={handleCloseButtonClick}>
        <CloseIcon alt="검색어 제거 아이콘" />
      </button>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 2.2rem;
  .icon {
    position: absolute;
    top: 3.2rem;
    left: 6rem;
  }
  gap: 1rem;
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 29rem;
  height: 3.6rem;
  flex-shrink: 0;
  padding-left: 12rem;
  font-size: 1.7rem;
  background-color: var(--gray02);
  &::placeholder {
    color: var(--gray04);

    font-size: 1.7rem;
    line-height: 2.2rem; /* 129.412% */
  }
`;
