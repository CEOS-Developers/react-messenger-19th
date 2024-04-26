import FriendsBody from '@components/non-fixed/FriendsBody/FriendsBody';
import TabBar from '@components/non-fixed/TabBar/TabBar';
import { useRecoilState } from 'recoil';
import { userNumberState } from '@context/state/atom';
import { useEffect } from 'react';

export default function Friends() {
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);

  useEffect(() => {
    setUserNumber(1);
  }, []);
  return (
    <>
      <FriendsBody />
      <TabBar />
    </>
  );
}
