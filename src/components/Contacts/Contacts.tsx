import SearchBar from 'components/common/SearchBar';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusFriendIcon } from 'asset/icons/PlusFriendIcon.svg';
export default function Contacts() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <ContactsHeader>
        <h1>친구 목록</h1>
        <button>
          <PlusFriendIcon alt="친구 추가 아이콘" />
        </button>
      </ContactsHeader>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
}

const ContactsHeader = styled.div`
  display: flex;
  padding: 1rem 1.6rem;

  font-size: 1.7rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  justify-content: center;
  align-items: center;

  & button {
    margin-left: auto;
  }
`;
