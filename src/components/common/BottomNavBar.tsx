import { ReactComponent as NoProfileIcon } from 'asset/icons/NoProfileIcon.svg';
import { ReactComponent as ChatIcon } from 'asset/icons/ChatIcon.svg';
import { ReactComponent as Minji } from 'asset/icons/Minji.svg';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/CommonStyle';
export default function BottomNavBar() {
  return (
    <BottomNavBarWrapper>
      <button>
        <NoProfileIcon alt="연락처 아이콘" />
        <p>연락처</p>
      </button>
      <button>
        <ChatIcon alt="대화 아이콘" />
        <p>대화</p>
      </button>
      <button>
        <img src="images/Minji.png" />
        <p>설정</p>
      </button>
    </BottomNavBarWrapper>
  );
}

const BottomNavBarWrapper = styled.div`
  display: flex;
  padding: 0.3rem 1.9rem;
  justify-content: space-between;

  & p {
    color: var(--gray04);
    font-size: 1rem;
    letter-spacing: 0.01rem;
  }
  & img {
    width: 3rem;
    height: 3rem;
  }

  & button {
    ${flexCenter}
    flex-direction: column;
    gap: 0.5rem;
  }
`;
