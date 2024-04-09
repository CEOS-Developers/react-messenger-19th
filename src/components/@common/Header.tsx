import styled from 'styled-components';
import { InfoIcon } from '../../assets';
import date from '../../utils/date';
import { useRecoilValue } from 'recoil';
import { ifChatsDetailPageState } from '../../recoil/atom';

export default function Header() {
  const ifChatsDetailPage = useRecoilValue(ifChatsDetailPageState);

  return (
    <>
      <Wrapper $ifChatsDetailPage={ifChatsDetailPage}>
        <Time>{date().split(' ').slice(1)}</Time>
        <div>
          <InfoIcon />
        </div>
      </Wrapper>
    </>
  );
}

interface WrapperBgTypes {
  $ifChatsDetailPage: boolean;
}

const Wrapper = styled.section<WrapperBgTypes>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0rem 1rem;

  background-color: ${({ theme, $ifChatsDetailPage }) =>
    $ifChatsDetailPage ? theme.colors.blue_bg : theme.colors.white};

  & > div {
    padding: 1.25rem 1.88rem;
  }
  & svg {
    width: 7.84rem;
    height: 1.3rem;
  }
`;

const Time = styled.p`
  padding: 0.7rem 3.05rem 1rem;
  ${({ theme }) => theme.fonts.time_now};
  color: ${({ theme }) => theme.colors.black};
`;
