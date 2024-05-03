import SearchBar from 'components/common/SearchBar';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusFriendIcon } from 'asset/icons/PlusFriendIcon.svg';
import partnerList from 'data/userData.json';
import { User } from 'types/ChatData';
import { flexColumn } from 'styles/CommonStyle';
import { getElapsedTime } from 'util/getElapsedTime';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectChat } from 'store/chat';

export default function Contacts() {
  const [inputValue, setInputValue] = useState('');

  const [partners] = useState<User[]>(partnerList.users);

  const filteredPartners = partners.filter((partners) => partners.name.includes(inputValue));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChatRoomClick = (chatId: string) => {
    navigate(`/chats/${chatId}`); // chatId를 이용하여 URL 경로를 설정
    dispatch(selectChat(chatId));
  };
  return (
    <ContactsWrapper>
      <ContactsHeader>
        <Spacer />
        <h1>친구 목록</h1>
        <button>
          <PlusFriendIcon alt="친구 추가 아이콘" />
        </button>
      </ContactsHeader>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />

      <PartnerList>
        {filteredPartners.map((partner) => (
          <Partner key={partner.id} onClick={() => handleChatRoomClick(partner.id)}>
            <img src={partner.profileImage} />
            <div>
              <p className="name">{partner.name}</p>
              <p className="last_access">
                마지막 접속 &nbsp;
                {partner?.lastAccess && getElapsedTime(partner?.lastAccess)}
              </p>
            </div>
          </Partner>
        ))}
      </PartnerList>
    </ContactsWrapper>
  );
}

const ContactsWrapper = styled.div`
  ${flexColumn}
  height: 68rem;
`;
const ContactsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.6rem;

  & h1 {
    font-size: 1.7rem;
    text-align: center; // 가운데 정렬
  }
`;

const Spacer = styled.div`
  width: 3.2rem; // 버튼과 같은 너비로 설정하여 균형 유지
`;

const PartnerList = styled.div``;

const Partner = styled.div`
  width: 37.5rem;
  height: 5.6rem;
  flex-shrink: 0;
  padding: 0.8rem 1.6rem;
  background-color: var(--white);
  display: flex;
  gap: 1.3rem;
  cursor: pointer;

  & img {
    width: 4rem;
    height: 4rem;
  }
  .name {
    color: var(--black);
    font-size: 1.7rem;
    line-height: 2.2rem; /* 129.412% */
    letter-spacing: -0.04rem;
  }

  .last_access {
    color: var(--gray03);
    /* caption/caption */
    font-size: 1.3rem;
    letter-spacing: -0.01rem;
  }
`;
